
---

# Module 5 – Credit Risk: Standardised Approach in an Indian Context

## 5.1 Where the SA rules live in Indian regulation

In India, the Standardised Approach (SA) for credit risk is embedded in **RBI’s Basel II / Basel III capital regulations**, and kept up to date through revised Master Circulars / Master Directions on **Basel III Capital Regulations**.

Key anchors:

* **Master Circular – Basel III Capital Regulations**

  * Initial Basel III circular for banks issued July 1, 2013 (No. DBOD.BP.BC.2/21.06.201/2013-14).
  * Subsequent consolidated versions (e.g. July 1, 2014; and updated Master Circular / Master Direction dated April 1, 2025) keep the same *structure* but update details.
  * **Section 5 (“Capital charge for credit risk”)** holds the SA rules, including sub-sections for:

    * 5.2 Claims on domestic sovereigns
    * 5.3 Claims on foreign sovereigns
    * 5.4 Public sector entities (PSEs)
    * 5.5 MDBs/BIS/IMF
    * 5.6 Banks
    * 5.7 Primary dealers
    * 5.8 Corporates / AFCs / NBFC-IFCs
    * 5.9 Regulatory retail
    * 5.10 Claims secured by residential property
    * 5.11 Commercial real estate / CRE–RH
    * 5.12 NPAs
    * 5.13 Other specified categories

* **Approach mandated for Indian banks**
  Under the Basel II “New Capital Adequacy Framework (NCAF)” and carried into Basel III, RBI decided that **all commercial banks in India (excluding Local Area Banks and Regional Rural Banks)** must adopt:

  * **Standardised Approach (SA)** for credit risk,
  * **Basic Indicator Approach (BIA)** for operational risk,
  * **Standardised Duration Approach (SDA)** for market risk (at least initially).

So, conceptually:

> **Basel global template → RBI Basel III Master Circular → SA parameter tables for India.**

Mathematically the logic is unchanged from Module 4:

[
\text{RWA}_i = \text{EAD}_i \times \text{RW}*i,\quad
\text{Total RWA}*\text{credit} = \sum_i \text{RWA}_i
]

The “India flavour” lies in **how exposures are classified** and **which risk-weight percentages** apply in RBI’s tables.

---

## 5.2 ECAIs & ratings in the Indian SA

### 5.2.1 RBI-approved ECAIs

Risk weights under SA depend heavily on **external ratings** for certain exposure classes (sovereigns, banks, corporates, some securitisations). In India, RBI explicitly specifies which **domestic credit rating agencies** are recognised as **External Credit Assessment Institutions (ECAIs)** for Basel III capital purposes.

* A January 9, 2023 RBI circular on “Basel III Capital Regulations – Eligible Credit Rating Agencies” lists six domestic CRAs that banks may use (in alphabetical order):

  * Acuite Ratings & Research Limited (Acuite)
  * CARE Ratings Limited (CARE)
  * CRISIL Ratings Limited (CRISIL)
  * ICRA Limited (ICRA)
  * India Ratings and Research Pvt. Ltd. (India Ratings)
  * Infomerics Valuation and Rating Pvt. Ltd. (INFOMERICS)

* RBI has subsequently allowed / clarified the use of **Brickwork Ratings India Pvt. Ltd.** again for Basel III purposes (earlier its use was temporarily restricted).

* RBI’s **June 9, 2025** and **July 10, 2025** circulars further refine the ECAI framework (e.g. allowing CareEdge Global IFSC ratings for IFSC exposures); these circulars reference the current Basel III Master Circular paragraph on ECAIs.

**Practical view:**

* The **official list of usable ECAIs can change**, so the engine should **not hard-code** a CRA list; instead it should:

  * Maintain a **parameter table** of “RBI-approved ECAIs” pulled from the latest circular.
  * Map each ECAI’s rating scale to a **regulatory rating grade / credit quality step (CQS)**, then to the RBI risk-weight table for each exposure class.

### 5.2.2 How ratings are used in practice

Core mechanics (mirrors Basel CRE21 but implemented through RBI tables):

* For rating-based classes (sovereigns, banks, corporates, certain securitisations), the bank must:

  1. Use only **RBI-accredited ECAIs**.
  2. Map **rating symbols** (e.g. CRISIL AA+, ICRA BBB−) to the RBI’s **rating buckets** and then to **risk weights**.
  3. Apply **consistent use** of a given ECAI for a particular type of claim (no cherry-picking).
  4. Follow RBI rules for:

     * Long-term vs short-term ratings.
     * Issue vs issuer ratings.
     * Multiple ratings (typically take the more conservative of the relevant risk weights).
     * Treatment of unsolicited ratings.

From an engine point of view, for each exposure you need at least:

* `ecaI_id` (link to a parameter table: Acuite / CARE / CRISIL / etc.)
* `rating_symbol` (e.g. “CRISIL AA+”)
* `asset_class` (sovereign / bank / corporate / PSE / securitisation, etc.)

Then:

[
(\text{asset class},\ \text{rating bucket}) \longrightarrow \text{risk weight}
]

The heavy lifting (mapping each CRA’s scale into RBI buckets) sits in **parameter configuration**, not in the calculation engine.

---

## 5.3 Exposure classification nuances – India vs generic Basel

The **pipeline** is the same as in Module 4:

> **Exposure → classify under RBI’s SA categories → apply rating / LTV / provisioning rules → pull risk weight from table → ( \text{RWA} = \text{EAD} \times \text{RW} ).**

The Indian twist is in **how** exposures are classified and **what risk weights** RBI assigns.

### 5.3.1 Sovereigns: domestic vs foreign

RBI splits sovereign exposures into:

* **Claims on domestic sovereign (Government of India / RBI)**
* **Claims on foreign sovereigns**

Typical patterns (high level):

* **GoI / RBI in INR, funded in INR**

  * Generally **0% risk weight** (similar to Basel template).
* **State governments**

  * Often receive preferential risk weights as per RBI table (commonly 0% or 20%, depending on type and guarantee).
* **Foreign sovereigns**

  * Risk weights depend on **external rating** and follow Basel-style 0–150% buckets, with RBI’s national discretions.

**Capital insight:**

A large stock of SLR-eligible Government securities at **0% RW**:

* Increases **total assets** but **not** credit RWA.
* Therefore **improves CRAR** (denominator is smaller than simple total assets).

### 5.3.2 Banks & primary dealers

RBI has separate sections for:

* **Claims on banks**
* **Claims on primary dealers (PDs)**

Patterns (conceptual):

* **Risk-weights depend on rating and sometimes residual maturity**:

  * Better-rated banks → lower RW (for example, around 20–50% in older tables).
  * Weaker or unrated banks → higher RW (e.g. 50–100% or more).
* Certain **short-term interbank exposures** may have more favourable treatment (tenor + rating-sensitive).

Engine-wise, counterparty type needs to be granular (e.g. `SCB`, `foreign bank branch`, `PD`, `NBFC`) so that each is mapped to the correct RBI rule section.

### 5.3.3 Corporates, NBFCs, SMEs vs regulatory retail

#### (a) Corporate exposures

RBI section 5.8 covers **claims on corporates, AFCs, NBFC-IFCs**, etc.

High-level patterns (simplified):

* **Rated corporates**

  * RW varies with rating (e.g. 20%, 50%, 75–100%, 150% buckets depending on grade and current tables).
* **Unrated corporates**

  * Default RW of **100%** under both Basel II NCAF and Basel III Master Circular.
* **Restructured standard corporate exposures**

  * RBI requires a **higher RW (125%)** until “satisfactory performance” is observed for at least one year under the revised repayment schedule.

If an exposure does not meet conditions for sovereign/bank/regulatory retail/mortgage/CRE etc., it usually falls into the **corporate bucket** by default.

#### (b) Regulatory retail – Indian definition

RBI gives a detailed **regulatory retail** definition. Under earlier NCAF guidelines, exposures meeting all conditions could be risk-weighted at **75%** instead of 100%.

The four key tests (original framework):

1. **Orientation** – exposure to individuals or small businesses.
2. **Product** – suitable retail products (term loans, working capital to small businesses, revolving credit, etc.).
3. **Granularity** – portfolio must be well-diversified (no single counterparty dominates).
4. **Low value of individual exposure** – total exposure to one counterparty limited (originally **₹5 crore** including off-balance sheet; exposures above this failed retail treatment).

RBI later **raised the per-borrower threshold from ₹5 crore to ₹7.5 crore** while keeping the 75% RW for qualifying retail portfolio, as part of measures to support credit flow (press release October 9, 2020).

So conceptually today:

* **If ALL of the following hold**:

  * Orientation = individual / small business,
  * Product = qualifying retail product,
  * Portfolio = granular (no single obligor overly large),
  * Total exposure per obligor ≤ current RBI threshold (now ₹7.5 crore),
* → the exposure can be classified as **regulatory retail** and get the **preferential 75% RW** (subject to any updated Basel III tables).

**Important exclusions** (even if borrower is an individual):

* Exposures that fall under **residential mortgage** or **CRE / CRE–RH** categories.
* Certain high-risk segments (capital markets, venture capital, etc.).

**Industry angle:**

A lot of SME / small business lending is actively structured to **qualify for regulatory retail** (turnover, ticket size, granularity), because dropping RW from 100% to 75% materially reduces required capital.

### 5.3.4 Housing loans & Indian LTV-based risk weights

RBI has a dedicated section for **claims secured by residential property** in the Basel III Master Circular, and more detailed parameters in the **Master Circular on Housing Finance** (most recently updated April 3, 2023).

Key ideas:

* **Risk weights depend on**:

  * **Loan size** (₹ bands), and
  * **Loan-to-Value (LTV)** bucket.

* Original Basel III (2013) table for individual housing loans (Table 7A) used 50% and 75% risk weights:

  * Up to ₹20 lakh, LTV ≤ 90% → 50% RW
  * > ₹20–75 lakh, LTV ≤ 80% → 50% RW
  * > ₹75 lakh, LTV ≤ 75% → 75% RW
  * CRE–RH → 75% RW

* Subsequently, RBI **reduced risk weights** on well-collateralised residential mortgages (e.g. loans up to ₹30 lakh with lower LTVs can attract **35%** RW) through circulars in 2013–2020, consolidated in the 2023 Housing Finance Master Circular.

**Working LTV definition (RBI)**:

[
\text{LTV} = \frac{\text{Total outstanding in the account}}{\text{Realisable value of the residential property}}
]

where “total outstanding” includes principal, accrued interest, and other charges **without deducting provisions**.

Important nuances from RBI guidance:

* RBI prescribes **maximum LTV caps** (e.g. 90% for small loans, 80% for mid-sized, 75% for high-value), and risk weights are linked to whether the loan respects those caps.
* **Third (and subsequent) dwelling unit** exposures are generally treated as **CRE**, not residential mortgage.
* **Restructured housing loans** attract higher risk weights (e.g. add 25 percentage points over the applicable RW).

Engine logic becomes **piecewise**:

1. Check product qualifies as **individual housing loan fully secured by residential house / flat** (not CRE / CRE–RH / land-only).
2. Compute LTV using RBI formula and validate against **LTV cap**.
3. Use `(loan_amount_bucket, LTV_bucket)` to look up the risk weight in the **current** RBI table.
4. Apply any **add-ons** (e.g. +25 p.p. for restructured loans).

Because these tables have been revised, a robust implementation should **parameterise the table** and **version-control** it (2013 vs 2020 vs 2023 vs future Basel 3.1 alignment).

### 5.3.5 Commercial Real Estate (CRE) vs CRE–RH

RBI distinguishes:

* **CRE** – commercial real estate (income-producing property; repayment depends primarily on rents/sales from the property).
* **CRE–RH (Commercial Real Estate – Residential Housing)** – loans to builders/developers for **residential** housing projects (for sale, not for captive use).

Key points:

* **CRE** → typically **100% RW**.
* **CRE–RH** → **75% RW** as a distinct, somewhat lower-risk sub-sector.
* Loans for **third dwelling unit onwards** to an individual are also treated as **CRE** exposures.

Correct classification between **retail mortgage vs CRE–RH vs CRE** has a **big impact on RWA**, so engines need explicit rules and flags.

### 5.3.6 Non-performing assets (NPAs)

RBI’s Basel III capital regulations include a dedicated treatment for **NPAs** (non-performing advances), especially the **unsecured portion**.

For **unsecured NPAs (excluding certain residential mortgages)**, Basel II / RBI rules prescribe **higher risk weights** based on **specific provision coverage**:

* Specific provisions < 20% of the outstanding → **150% RW**
* Specific provisions ≥ 20% and < 50% → **100% RW**
* Specific provisions ≥ 50% → **50% RW**

For NPA housing loans secured by residential property, similar concepts apply but with slightly different minimum RWs (e.g. 100% with possible reduction when provision coverage is high, subject to RBI rules).

**Conceptual link:**

* As **specific provisions increase**, capital is focused on the **unprovided** portion.
* Risk weight on the remaining net exposure can **reduce** as more loss is already recognised through provisions.

---

## 5.4 How SA is actually applied in India – end-to-end flow

This is simply the global SA pipeline (Module 4) with **RBI rulebook plugged in**.

### Step 1 – Classify exposure under RBI categories

For each facility (loan, LC, BG, derivative, etc.), the engine determines:

1. **Counterparty type**

   * Govt of India / RBI / state govt
   * Bank / Primary Dealer
   * Corporate / NBFC / AFC / NBFC-IFC
   * Individual / small business (potential regulatory retail)
   * Others (HFCs, etc., where relevant)

2. **Product / security / purpose flags**

   * Residential mortgage?
   * CRE vs CRE–RH?
   * Consumer credit / credit card?
   * NPA / restructured?

3. **Portfolio designation**

   * Does exposure meet **regulatory retail** conditions (orientation + product + granularity + updated exposure limit)?

Correct mapping here determines **which paragraph/table** of the RBI circular applies.

### Step 2 – Determine EAD

As per RBI + Basel:

* **On-balance sheet items**

  [
  \text{EAD} = \text{Book value of exposure} - \text{specific provisions} - \text{partial write-offs (if netted for RWA)}
  ]

  (Local detail can vary slightly; some reporting formats use gross exposure with provisions reported separately, but the conceptual RWA is on net exposure).

* **Off-balance sheet items**

  [
  \text{EAD} = \text{Notional} \times \text{CCF}
  ]

  CCFs come from RBI’s SA off-balance sheet tables (unconditionally cancellable commitments vs other commitments, guarantees, LCs, etc.).

(Off-balance sheet and CCFs are fully explored in Module 6.)

### Step 3 – Pick the risk weight (RW)

For each exposure ( i ):

* Use **rating + asset class** for rated sovereign / bank / corporate / PSE exposures.
* For **unrated corporates/SMEs**, apply the unrated corporate RW (typically 100%, unless RBI introduces new differentiated buckets).
* If exposure qualifies for **regulatory retail**, apply the **retail RW (e.g. 75%)**.
* If it is a **housing loan**, use the **current RBI LTV/loan size table** from the Housing Finance circular.
* For **CRE / CRE–RH**, apply 100% / 75% as appropriate.
* For **NPAs**, use the **provision-based RW table**.

Mathematically:

[
\text{RWA}_i = \text{EAD}_i \times \text{RW}_i
]

### Step 4 – Aggregate & feed capital ratios

* Sum across exposures:

  [
  \text{Total Credit RWA} = \sum_i \text{RWA}_i
  ]

* Combine with market and operational risk RWAs:

  [
  \text{Total RWA} = \text{RWA}*\text{credit} + \text{RWA}*\text{market} + \text{RWA}_\text{operational}
  ]

* Then capital ratios:

  [
  \text{CRAR} = \frac{\text{Total Regulatory Capital}}{\text{Total RWA}}
  ]

RBI’s reporting formats require breakdowns of RWA by **RBI exposure class** (sovereign, bank, corporate, retail, residential mortgage, CRE, CRE–RH, NPAs, securitisation, etc.), not just by internal business line.

---

## 5.5 Conceptual “Indian portfolio” walk-through (logic only)

Consider a simplified Indian bank portfolio:

1. **SLR government securities**

   * Counterparty = Government of India, INR, funded in INR.
   * RW = 0%.
   * High EAD, zero credit RWA → helpful for CRAR.

2. **Corporate term loans to mid-sized Indian companies**

   * Rated **BBB** by a domestic ECAI → RW as per RBI corporate rating table (often around 100% under current norms).
   * Unrated corporates → 100% RW unless they classify as regulatory retail.

3. **SME working-capital limits**

   * Borrowers’ turnover < ₹50 crore; exposure per borrower ≤ ₹7.5 crore; portfolio granular.
   * All four regulatory retail criteria satisfied → **regulatory retail**, **75% RW**.

4. **Individual housing loans**

   * LTV ≤ cap; loan size small / mid; risk weights from RBI’s current Housing Finance table (e.g. 35–50% for many standard loans).
   * Restructured loans → higher RW (add-on).

5. **CRE project loans (malls/offices)**

   * Classified as **CRE** → 100% RW.
   * Residential builder projects for sale → **CRE–RH** → 75% RW.

6. **NPAs**

   * Unsecured NPAs with low provisioning → 150% RW on unsecured portion.
   * As specific provisions rise to ≥20% or ≥50%, RW can drop to 100% or 50% on the remaining net exposure.

Exactly the same algorithm runs on all of them: classification → EAD → risk weight → RWA → aggregation.

---

## 5.6 Forward-looking note – Basel 3.1 / SA revisions in India

RBI is in the process of **aligning India’s SA for credit risk with Basel 3.1 (“Finalising post-crisis reforms”)**.

* On **October 7, 2025**, RBI issued **draft directions** on “Capital Charge for Credit Risk – Standardised Approach” for scheduled commercial banks, aiming to implement the revised Basel III SA-CR with effect from **April 1, 2027**.
* These draft norms:

  * Introduce more **granular risk weights** for **corporates, MSMEs, retail**, and **real-estate exposures**.
  * Propose **lower risk weights** for some well-rated corporates and MSMEs.
  * Adjust housing loan risk weights further (especially for **third-home** and higher LTV exposures), and refine treatment for personal loans and credit cards.

For learning and for any implementation project:

* The **structure** of SA in India remains the same:

  > **Exposure class + rating / LTV / product / provisions → risk weight**

* What changes are mainly the **parameter tables** and some classification rules.

* If the engine is built to be **parameter-driven**, with risk weights and thresholds in configurable tables, it should adapt smoothly from the current Basel III framework to the Basel 3.1-aligned RBI regime.

---

## 5.7 Key points and practical notes (India SA)

1. **Classification drives capital in India**

   * Getting the **correct RBI exposure category** (sovereign vs bank vs corporate vs regulatory retail vs housing vs CRE/CRE–RH vs NPA) often has a bigger impact on total RWA than the exact rating notch.
   * Classification rules should be implemented as **explicit code/logic**, not informal judgement, because different sections of the RBI circular and different risk weights apply.

2. **Regulatory retail is a major capital lever**

   * Moving an SME exposure from “corporate 100% RW” to “regulatory retail 75% RW” materially reduces required capital.
   * Always test the four conditions: orientation, product, granularity, and the updated exposure limit (now **₹7.5 crore** per borrower).

3. **Housing loans are strongly LTV-driven under modern RBI rules**

   * Well-collateralised housing loans (lower LTVs, smaller ticket sizes) can attract **reduced risk weights** (e.g. 35–50%), while high-LTV or third-house exposures face stricter treatment.
   * Implementations require **reliable, up-to-date property valuations** and recalculated LTVs, rather than relying only on original sanction values.

4. **Provisioning and capital interact via the NPA risk-weight rules**

   * For NPAs, higher **specific provisions** allow lower risk weights on the remaining net exposure (150% → 100% → 50% bands), but there are explicit caps and floors.
   * This means banks cannot treat provisioning as an unlimited substitute for capital; both need to be optimised together.

5. **Build everything as parameter tables**

   * For a robust SA engine in India, treat **RBI circulars as sources of configuration**, not hard-coded logic:

     * Risk-weight tables by exposure class and rating,
     * LTV and loan-size thresholds for housing,
     * ECAI lists and rating-bucket mappings,
     * NPA provision bands and risk-weight rules.
   * When Basel 3.1-aligned norms go live (target from 2027), the goal is that only the **parameter sets** change, while the core calculation logic stays the same.

---

### Reference links for Module 5

[1]: [https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf](https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf) – RBI **Master Circular – Basel III Capital Regulations** (2013)

[2]: [https://www.pdicai.org/Docs/RBI-2025-26-08_242025172491.pdf](https://www.pdicai.org/Docs/RBI-2025-26-08_242025172491.pdf) – Example of later consolidated Basel III capital regulation circular (2025)

[3]: [https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=6276](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=6276) – **Prudential Guidelines on Capital Adequacy and Market Discipline – New Capital Adequacy Framework (NCAF)** (Basel II implementation)

[4]: [https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11674](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11674) – Master Circular on **Housing Finance** / LTV and risk weight guidance (consolidated later in the 2023 circular)

[5]: [https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=7720](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=7720) – Clarification on **CRE** and **CRE–RH** classification and capital/provisioning norms

[6]: [https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10035](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10035) – Master Circular on **Income Recognition, Asset Classification and Provisioning (IRAC)** norms, including provisioning rules for NPAs

[7]: [https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11902](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11902) – Circular increasing the regulatory retail exposure cap to **₹7.5 crore** per borrower while retaining 75% RW

[8]: [https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12205](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12205) – January 9, 2023 circular on **eligible credit rating agencies** for Basel III capital regulations

[9]: [https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12345](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12345) – Illustrative reference to 2024–2025 updates on ECAIs (e.g. Brickwork, CareEdge IFSC) for Basel III

[10]: [https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13001](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13001) – Draft directions dated October 7, 2025 on **Capital Charge for Credit Risk – Standardised Approach (Basel 3.1 implementation)**

