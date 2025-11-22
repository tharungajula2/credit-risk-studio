---

# Module 9 – RWA Engine Design & Implementation (Basel + RBI SA)

## 9.1 What this module is really about

So far you’ve learned **rules** (Basel / RBI) and **math** (capital, RWA, CCFs, haircuts).

Module 9 is about how a real bank **turns all that into a working engine**:

* What data you need
* How it flows
* In what order you apply rules
* Where typical **controls** and **pitfalls** are

This is exactly the layer your **web app / portfolio project** can simulate: a simplified RWA engine that follows the same flow banks use for regulatory reporting.

---

## 9.2 Core data model – what the engine must “know”

At minimum, an SA-based RWA engine for an Indian bank needs these **logical entities**.

### 9.2.1 Counterparty / customer

Key fields (conceptual):

* `counterparty_id`

* `name`

* `counterparty_type`

  * Sovereign / central bank
  * PSE / local authority
  * Bank / PD / FI
  * Corporate / SME / NBFC
  * Retail individual / small business

* `country_of_domicile`

* `group_id` (for group exposure / concentration)

* `NPA_status` at counterparty level (optional; NPAs usually tracked at facility level)

Used for:

* Exposure class decision (sovereign vs bank vs corporate vs retail).
* Country risk, large exposure limits, etc.

---

### 9.2.2 Facility / exposure / limit

This is the **heart** of RWA:

* `facility_id`

* `counterparty_id`

* `product_type`

  * Term loan, working capital limit, CC/OD, BG, LC, SBLC, derivatives, investments, etc.

* `on_balance_flag` (funded vs purely OBS)

* `sanction_limit` (facility-level limit)

* `current_outstanding` (funded)

* `undrawn_amount`

* `off_balance_notional` (for pure OBS like standalone guarantees)

* `original_maturity` and `residual_maturity`

* `interest_rate_type` (fixed/floating) – useful for IRRBB/ALM, not core for SA credit RWA

* `purpose_code` / `loan_purpose` (helps classify CRE, CRE-RH, housing, etc.)

* `NPA_flag` and `NPA_category` (standard / substandard / doubtful / loss)

* `specific_provisions` (loan loss provisions)

* `portfolio_code` (corporate / SME / retail / agri, etc.)

Used for:

* EAD (exposure amount + CCFs),
* Exposure class (e.g. CRE vs residential mortgage vs retail),
* NPA capital treatment.

---

### 9.2.3 Collateral & guarantees (CRM)

**Collateral table** (per collateral item):

* `collateral_id`

* `linked_facility_id`

* `collateral_type`

  * Cash, gold, GoI security, corporate bond, equity, MF units, property, etc.

* `eligibility_flag` (Basel/RBI eligible or not)

* `market_value`

* `valuation_date`

* `haircut_category` (maps to supervisory haircut table)

* `currency`

* `maturity` (if relevant – e.g. term deposits)

* `seniority_flag` (is collateral senior to exposure in insolvency?)

**Guarantee / credit protection table**:

* `guarantee_id`
* `linked_facility_id`
* `guarantor_id` (must be a counterparty)
* `guarantee_amount`
* `coverage_percentage`
* `currency`
* `original_maturity`, `residual_maturity`
* `guarantee_type` (sovereign / bank / corporate / ECA, etc.)
* `meets_Basel_RBI_eligibility_flag` (irrevocable, unconditional, etc.)
* `covers_principal_interest_flag`

Used for:

* CRM (Module 7): E* formula, substitution approach, FX + maturity mismatch adjustments.

---

### 9.2.4 Ratings & mapping

**Rating table**:

* `rating_id`
* `counterparty_id` or `issue_id`
* `ECAI_name` (CRISIL, ICRA, CARE, India Ratings, etc.)
* `rating_symbol` (AAA, AA, BBB−, etc.)
* `rating_type` (long-term / short-term, issue / issuer)
* `rating_scale`
* `effective_date`, `expiry_date`

Plus **reference tables**:

* `ECAI_rating_to_CQS` (rating → Credit Quality Step)
* `CQS_to_RW_by_asset_class` (CQS → RW for sovereign, banks, corporates, etc., per RBI tables)

Used for:

* Risk-weight selection under SA (Modules 4 & 5).

---

### 9.2.5 Regulatory parameter tables

Your engine should externalise **all Basel / RBI parameters** into tables / config instead of hard-coding them:

* **Risk-weight tables**:

  * For each asset class (sovereign, bank, corporate, retail, housing, CRE, CRE-RH, NPAs, etc.).
  * For each rating bucket / LTV bucket / product category.

* **CCF tables** (Module 6):

  * OBS type → CCF (direct credit substitutes, performance guarantees, trade LCs, commitments ≤1 year, >1 year, UCC).

* **Haircut tables** (Module 7):

  * Instrument type, rating, maturity → supervisory haircuts (Hₑ, H꜀).
  * FX pair → Hfx (e.g. 8%).

* **Buffer thresholds** (for capital ratios & constraints):

  * Minimum CET1, Tier 1, Total capital.
  * CCB, CCyB, systemic buffers (Basel + India).

This design makes your engine robust to Basel 3.1 / RBI changes: you update **parameter tables**, not code.

---

## 9.3 High-level RWA engine pipeline

Think of one **big pipeline** that runs monthly/quarterly (and often in simplified form daily):

1. Data ingestion
2. Exposure classification
3. EAD calculation (on + off balance)
4. Apply CRM (collateral & guarantees)
5. Assign risk weights
6. Compute RWA & capital
7. Aggregate, reconcile, and explain movements

We’ll walk through each step.

---

## 9.4 Step 1 – Data ingestion & staging

### 9.4.1 Sources

Typical real-world sources:

* **Core banking system** – loans, limits, deposits, NPAs, provisions.
* **Treasury / trading systems** – bonds, derivatives, repos, FX, etc.
* **Collateral management system** – pledged securities, valuations.
* **Market data** – prices, FX rates.
* **Reference data** – customer master, ratings master, internal product taxonomy.

Data is loaded into a **staging / data warehouse** layer, often via ETL jobs.

### 9.4.2 Data quality checks

Before running RWA, banks run **data quality (DQ) checks**:

* Missing critical fields:

  * Counterparty ID, product type, limit, outstanding, maturity, NPA flag, etc.

* Referential integrity:

  * Every facility’s counterparty exists in the counterparty table.

* Reasonableness:

  * Negative outstandings? Limit < outstanding?
  * Maturity dates in the past?
  * Provisions > exposure?

Failures go to **exceptions** and must be corrected or treated conservatively (e.g. higher RW).

---

## 9.5 Step 2 – Exposure classification

This is where your **Basel / RBI logic** is applied.

### 9.5.1 Global Basel classification (Module 4)

Using `counterparty_type`, `product_type`, `purpose`, `collateral_type`, etc., you determine:

* Sovereign / central bank
* PSE
* Bank / securities firm
* Corporate
* Retail (regulatory retail or not)
* Secured by residential / commercial real estate
* Securitisation exposure
* Equity exposure
* Past-due / NPA
* Other assets

### 9.5.2 India-specific classification (Module 5)

For an Indian SA engine, classification needs **RBI-specific** logic, for example:

* **Regulatory retail** – check all 4 conditions:

  * Orientation – individual / small business with turnover < ₹50 crore.
  * Product – allowed retail products (not capital market, not certain excluded categories).
  * Granularity – no single counterparty > 0.2% of regulatory retail portfolio.
  * Total exposure per counterparty ≤ ₹5 crore (including off-balance sheet).

* **Residential housing loans** – check:

  * Fully secured by residential property.
  * LTV buckets (≤90%, ≤80%, ≤75%).
  * Loan size buckets (≤₹20 lakh, ₹20–75 lakh, >₹75 lakh).
  * Whether it is first / second / third dwelling unit (3rd onwards often CRE).

* **CRE vs CRE–RH vs non-CRE** – based on project type and cash flows.

* **NPAs** – NPA category + level of specific provisions → maps to NPA RW table.

Implementation-wise, your engine will have rule logic such as:

```text
if counterparty_type in {GoI, RBI, state_govt} and currency='INR' and funded_in_INR:
    exposure_class = 'Domestic Sovereign'
elif product_type = 'Housing Loan' and purpose = 'Residential' and qualifies_LTV_and_amount_buckets:
    exposure_class = 'Residential Mortgage – bucket X'
elif meets_regulatory_retail_tests:
    exposure_class = 'Regulatory Retail'
elif is_CRE_project:
    exposure_class = 'Commercial Real Estate'
...
```

These classification flags then drive **which risk-weight table** is used.

---

## 9.6 Step 3 – EAD calculation (on + off balance)

We now plug the EAD formulas from Modules 4 and 6 into the engine.

### 9.6.1 On-balance sheet

For each on-balance exposure (i):

[
\text{EAD}_{\text{on}, i}
= \max\bigl(0,\ \text{Gross exposure}_i - \text{specific provisions}_i - \text{write-offs}_i\bigr)
]

Basel SA uses exposures **net of specific provisions / partial write-offs** for risk-weighting.

### 9.6.2 Off-balance sheet

For each OBS item (k):

1. Determine OBS category (direct credit substitute, performance guarantee, trade LC, commitment ≤1 year, >1 year, UCC, etc.).
2. Get CCF from the RBI Basel III CCF table.
3. Compute:

[
\text{EAD}_{\text{off}, k} = \text{Notional}_k \times \text{CCF}_k
]

### 9.6.3 Mixed facilities (drawn + undrawn)

For a facility with:

* Limit (L)
* Drawn (D)
* Undrawn (U = L - D)

Then:

[
\text{EAD}_{\text{on}} = \max(0,\ D - \text{provisions})
]

[
\text{EAD}_{\text{off}} = U \times \text{CCF}
]

[
\text{EAD}*{\text{total}} = \text{EAD}*{\text{on}} + \text{EAD}_{\text{off}}
]

This (\text{EAD}_{\text{total}}) then flows into CRM and risk-weighting.

---

## 9.7 Step 4 – Apply CRM (collateral, guarantees, netting)

This is where Module 7 logic plugs in.

### 9.7.1 Decompose exposures into CRM slices

For each facility:

* Identify attached **collateral** and **guarantees/CDS**.
* Decide how to **split** the exposure:

  * e.g. first X fully covered by cash collateral, next Y guaranteed, remainder unsecured.

You end up with multiple **slices**:

* Slice A – cash-collateralised
* Slice B – other financial collateral
* Slice C – guaranteed by sovereign/bank/corporate
* Slice D – unprotected

Regulations explicitly expect that when multiple CRM techniques apply to the same exposure, the exposure is split and each slice treated separately.

### 9.7.2 Collateral (comprehensive approach – India)

For a collateralised slice:

[
E^* = \max{0,\ E \times (1 + H_e) - C \times (1 - H_c - H_{fx})}
]

Where:

* (E) = EAD of that slice
* (C) = collateral value
* (H_e), (H_c) = supervisory haircuts for exposure and collateral
* (H_{fx}) = currency mismatch haircut

Then:

[
\text{RWA}*{\text{slice}} = E^* \times \text{RW}*{\text{counterparty}}
]

### 9.7.3 Guarantees / credit derivatives (substitution approach)

For a guaranteed slice:

1. Start from (E = \text{EAD of slice}).
2. Adjust protection for FX and maturity mismatch:

[
P_a = P \times \frac{t - 0.25}{T - 0.25}
]

where (P) = nominal protection, (t) = min(T, residual maturity of CRM), (T) = min(5 years, residual maturity of exposure).

3. Then:

* Protected part = (\min(E, P_a)) → risk-weighted at **guarantor’s RW ((RW_g))**.
* Unprotected part = (E - \min(E, P_a)) → risk-weighted at **borrower’s RW ((RW_o))**.

[
\text{RWA}
= \min(E, P_a)\times RW_g

* \max(0, E - P_a)\times RW_o
  ]

From an implementation standpoint, once Pₐ is computed, this is straightforward arithmetic.

---

## 9.8 Step 5 – Risk weight assignment

Once you have final EAD/E* for each slice, assign **risk weights** based on:

* Exposure class (classification step),
* Rating (if allowed / available),
* LTV / product type (for mortgages),
* NPA status & provisioning (for NPAs),
* Securitisation flags (if applicable).

### 9.8.1 SA – global view

Under Basel SA, you reference CRE20/21 tables for:

* Sovereigns,
* Banks (including SCRA under Basel 3.1),
* Corporates,
* Retail,
* Real estate,
* Equity,
* Past-due exposures,
* Securitisation positions (under SA).

### 9.8.2 SA – India (RBI) view

In India, you use **RBI’s** SA tables instead of the Basel template numbers:

* Claims on sovereigns & central banks (GoI, RBI, foreign sovereigns).
* Banks & PDs (RW by rating, sometimes by tenor).
* Corporates / NBFC-IFCs / AFCs.
* Regulatory retail (typically 75% RW if the criteria are satisfied).
* Residential housing loans (LTV × loan size matrix – 50%, 75%, etc.).
* CRE and CRE–RH buckets.
* NPAs (RW 150%, 100%, 50% depending on coverage).
* Securitisation exposures (rating-based RWs or 1250% / deductions for certain positions).

In code, this is conceptually:

```text
RW = RW_table[exposure_class][rating_or_LTV_or_NPA_bucket]
```

---

## 9.9 Step 6 – Compute RWA & capital

For each slice (j):

[
\text{RWA}_j = \text{EAD or } E^*_j \times \text{RW}_j
]

Sum across all slices/exposures:

[
\text{RWA}_{\text{credit}} = \sum_j \text{RWA}_j
]

Then add market and operational risk components:

[
\text{RWA}*{\text{total}} =
\text{RWA}*{\text{credit}} +
\text{RWA}*{\text{market}} +
\text{RWA}*{\text{operational}}
\ (+\text{CVA, etc. where applicable})
]

Pillar 1 capital requirement (Basel template):

[
K_{\text{Pillar 1}} = 8% \times \text{RWA}_{\text{total}}
]

In India, banks must also satisfy:

* Minimum total capital ratio **9%** of RWA, plus
* Capital Conservation Buffer (**2.5%** of RWA in CET1), and any other buffers set by RBI.

So in practice, Indian banks often target total capital ratios of **~11.5% or higher** in normal conditions.

---

## 9.10 Step 7 – Aggregation, reporting & controls

### 9.10.1 Aggregation dimensions

The engine must be able to aggregate EAD and RWA by multiple dimensions:

* Regulatory exposure class (sovereign, bank, corporate, retail, housing, CRE, CRE–RH, NPA, securitisation, etc.).
* Internal portfolio / business segment (corporate, SME, retail, agri, etc.).
* Counterparty / group / sector / region.
* Rating grade, LTV bucket, product type.

These feed:

* **Regulatory returns** (Basel III capital adequacy returns to RBI),
* **Pillar 3 disclosures** (tables by risk type / exposure class),
* **Internal management information** (RWA by business, RoRWA, etc.).

### 9.10.2 Reconciliation and controls

Key control themes:

1. **Balance sheet reconciliation**

   * Sum of exposures in the RWA engine (plus any items deducted from capital) should reconcile to:

     * Total assets,
     * Off-balance sheet commitments,

     after adjusting for differences in consolidation scope and measurement.

2. **Movement analysis**

   * Analyse change in RWA from period t−1 to t as:

     * Volume effect (balances up/down),
     * Mix effect (portfolio shift),
     * CRM effect (new collateral / guarantees),
     * Parameter/ methodology changes (e.g. new RW tables),
     * FX effect.

3. **Capital ratios check**

   * CRAR / CET1 / Tier 1 and leverage ratio from the engine should tie to:

     * Regulatory capital returns,
     * Public financial statements (within known reconciliation items).

4. **Data quality dashboards**

   * KPIs: missing rating / LTV / collateral data,
   * Number and value of exposures failing classification/CCF/CRM eligibility checks,
   * Percentage of book covered by “clean” data.

---

## 9.11 How this becomes a strong portfolio project

Your web app can showcase a **mini RWA engine** by:

1. **Implementing a simplified data model**

   * Let users upload a CSV with fields like counterparty type, product, limit, outstanding, LTV, rating, collateral, guarantee, etc.
   * Map those into internal entities (`counterparty`, `facility`, `collateral`, `guarantee`, etc.).

2. **Running rule-based classification**

   * Show clearly why something is classified as:

     * Sovereign vs bank vs corporate, or
     * Regulatory retail vs corporate, or
     * Housing vs CRE vs CRE–RH.

3. **Showing step-by-step calculation for each exposure**

   * Gross exposure → provisions → EAD (on + off) → CRM adjustments → risk weight → RWA.
   * This **audit trail** is exactly what supervisors and internal model validation teams expect.

4. **Building simple dashboards**

   * RWA by exposure class / rating / product / segment.
   * Capital requirement at 8%, 9%, 11.5%, etc.
   * What-if toggles: “treat this SME as regulatory retail”, “change LTV”, “turn off this guarantee”.

5. **Documenting the regulatory logic**

   * Short descriptions like:

     * “Regulatory retail: turnover < 50 crore, exposure ≤ 5 crore, granularity and product conditions met.”
     * “Housing loan: LTV ≤ 80%, loan amount 20–75 lakh → 50% RW as per RBI table.”

That combination (regulatory understanding + data model + engine + UI) is exactly what product / implementation roles in capital adequacy and regulatory reporting look for.

---

## 9.12 Key points and practical notes

1. **One-sentence description of an RWA engine**

   > “An RWA engine is basically a rules engine plus a data warehouse: it classifies exposures, converts them to EAD (including CCFs), applies CRM, assigns regulatory risk weights, and aggregates RWA for capital ratios and reporting.”

2. **Separation of logic and parameters**

   * Keep regulatory parameters (RW / CCF / haircut tables, minima, buffers) in **config tables**, not in code.
   * When Basel or RBI change numbers, you update **data**, not the engine logic.

3. **Reconciliation and explainability are as important as formulas**

   * It’s not enough to compute RWA correctly; you must:

     * Reconcile to GL / balance sheet, and
     * Explain RWA movements and capital ratios period-to-period.

4. **Where most implementation bugs happen**

   * Misclassification: SME vs regulatory retail vs corporate; CRE vs residential.
   * Wrong CCF on off-balance sheet items.
   * Ignoring undrawn portions of facilities.
   * Incorrect LTV calculation for mortgages.
   * Over-recognition of CRM (ineligible collateral or guarantees treated as eligible).

5. **How to talk about this in interviews**

   * Emphasise the **flow**: data ingestion → classification → EAD → CRM → RW → RWA → capital → reporting controls.
   * Be ready with 1–2 concrete examples (e.g. how a ₹3 crore SME CC limit is treated, or how a housing loan’s LTV drives RW).

---



### Reference links for Module 9

* **Basel Committee on Banking Supervision – Basel Framework (overview)**
  Main entry point to the Basel framework, including the credit risk standardised approach, operational risk, market risk and disclosure standards referenced throughout this module.
  [https://www.bis.org/basel_framework/index.htm](https://www.bis.org/basel_framework/index.htm)

* **Basel Committee – Basel III: A global regulatory framework for more resilient banks and banking systems**
  Core Basel III text explaining capital ratios, risk-weighted assets, Pillar 1/2/3 structure and the role of RWA engines in capital adequacy.
  [https://www.bis.org/publ/bcbs189.pdf](https://www.bis.org/publ/bcbs189.pdf)

* **Basel Committee – The Basel Framework (compiled PDF)**
  Consolidated Basel standards, including chapters on the standardised approach for credit risk, EAD measurement, CRM and securitisation capital rules used conceptually in this module.
  [https://gestionderiesgo.org/wp-content/uploads/2021/03/BaselFramework.pdf](https://gestionderiesgo.org/wp-content/uploads/2021/03/BaselFramework.pdf)

* **Reserve Bank of India – Master Circular: Basel III Capital Regulations (July 1, 2013)**
  Main Indian implementation of Basel III, with detailed rules on exposure classification, risk weights, CCFs, CRM, NPAs and capital ratios that your engine needs to reflect for Indian banks.
  [https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf](https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf)

* **Indian Institute of Banking & Finance – Basel III Capital Regulations**
  Training material that summarises RBI’s Basel III capital rules (including SA, CRM and capital structure) with examples – very useful for checking your understanding while building the engine.
  [https://www.iibf.org.in/documents/BASEL-III.pdf](https://www.iibf.org.in/documents/BASEL-III.pdf)

* **Indian Institute of Banking & Finance – Capital Adequacy and Market Discipline (NCAF)**
  Explains India’s New Capital Adequacy Framework, Pillar 3 disclosure requirements and the link between regulatory reporting, RWA numbers and internal systems.
  [https://www.iibf.org.in/documents/NCAF-2014.pdf](https://www.iibf.org.in/documents/NCAF-2014.pdf)

* **APRA – Prudential Practice Guide APG 112: Capital Adequacy – Standardised Approach to Credit Risk**
  Practical guidance from the Australian regulator on implementing a standardised credit risk capital framework in systems and processes; good reference for data fields, controls and engine design ideas.
  [https://www.apra.gov.au/sites/default/files/2024-07/Final%20APG%20112%20-%20Capital%20adequacy%20-%20standardised%20approach%20to%20credit%20risk.pdf](https://www.apra.gov.au/sites/default/files/2024-07/Final%20APG%20112%20-%20Capital%20adequacy%20-%20standardised%20approach%20to%20credit%20risk.pdf)

