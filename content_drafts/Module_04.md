
---

# Module 4 – Credit Risk: Standardised Approach (Global Basel View)

---

## 4.1 Where the Standardised Approach (SA) fits

Under Basel II / III / 3.1, **Pillar 1** minimum capital covers three major risk types:

* Credit risk
* Market risk
* Operational risk

This module focuses on **credit risk under the Standardised Approach (SA)**.

Banks either:

* Use **SA** (mandatory for many banks and many portfolios), or
* Use **IRB** for some portfolios – but even then, SA remains important (e.g. for the **output floor** and for portfolios where IRB is not permitted).

Under SA, the core relationship is:

[
\text{RWA}_j = \text{EAD}_j \times \text{Risk Weight}_j
]

[
\text{Total RWA}_{\text{credit}} = \sum_j \text{RWA}_j
]

The Basel framework (chapter CRE20) explicitly states that under SA, **risk-weighted assets are calculated as the product of regulatory risk weights and exposure amounts**, with **exposure values taken net of specific provisions and partial write-offs**.

---

## 4.2 Credit risk in the Basel capital framework

For regulatory capital purposes, **credit risk** is:

> The risk that a counterparty or obligor fails to meet its contractual obligations in full and on time, causing a loss to the bank.

It includes (among others):

* Loans and advances
* Bonds and other debt securities
* Commitments, guarantees, letters of credit
* OTC derivatives and securities financing transactions (counterparty credit risk – handled in more specialised chapters)

Capital requirements target **unexpected loss** over a regulatory horizon, while provisioning (accounting and prudential) mainly covers **expected loss** at the portfolio level.

---

## 4.3 Exposure at Default (EAD) in the SA

**Exposure at Default (EAD)** is the amount that is considered **exposed to default at the moment of default**.

### 4.3.1 On-balance sheet exposures

Under SA, for **on-balance sheet** items, the exposure value is generally:

[
\text{EAD}_{\text{on}, j}
= \max\Bigl(0,\ \text{Accounting Exposure}_j - \text{Specific Provisions}_j - \text{Write-offs}_j\Bigr)
]

CRE20 and related guidance confirm that exposures should be **taken net of specific provisions and partial write-offs** for the purpose of calculating risk-weighted assets.

### 4.3.2 Off-balance sheet items

For **off-balance sheet items** (commitments, guarantees, letters of credit, etc.), Basel applies **Credit Conversion Factors (CCFs)**:

[
\text{EAD}_{\text{off}, k} = \text{Notional}_k \times \text{CCF}_k
]

CCFs are prescribed by the framework (e.g. 0%, 20%, 50%, 100%, etc.) depending on the nature of the commitment (unconditionally cancellable, other commitments, direct credit substitutes, etc.).

### 4.3.3 Total EAD

Conceptually, total EAD for a counterparty or portfolio can be:

[
\text{EAD}*{\text{total}} = \sum_j \text{EAD}*{\text{on}, j} + \sum_k \text{EAD}_{\text{off}, k}
]

Module 6 goes deeper into **CCFs and off-balance sheet treatment**; here it is enough to remember that **SA RWA is always based on EAD**, not just raw accounting balances.

---

## 4.4 Main exposure classes under the Standardised Approach

In the Basel SA, **risk weights** depend primarily on:

* **Exposure class** (type of counterparty / product)
* **External rating** (for certain classes where permitted)
* **Credit risk mitigation** (collateral, guarantees – Module 7)
* For revised SA-CR (Basel 3.1), sometimes **loan-to-value (LTV)**, product type, or other attributes

Key exposure classes (global Basel view, CRE20):

1. **Exposures to sovereigns and central banks**

   * Central governments, central banks, and certain central-government-guaranteed exposures.
   * Risk weights strongly influenced by **country risk / rating** and national discretion.

2. **Exposures to non-central government public sector entities (PSEs)**

   * Regional governments, municipalities and similar entities.
   * Often treated either like sovereigns or like banks/corporates, depending on supervisory decisions.

3. **Exposures to banks**

   * Claims on banks and certain securities firms subject to equivalent capital / prudential regimes.
   * Risk weights depend on:

     * External rating (where permitted), and/or
     * Home sovereign rating and regulatory regime, or
     * Under Basel 3.1, the **Standardised Credit Risk Assessment Approach (SCRA)** for **unrated banks**.

4. **Exposures to corporates**

   * Claims on non-financial corporates and some financial institutions treated as corporates.
   * Risk weights depend on external rating where allowed; **unrated corporates** typically receive a **standard risk weight** (historically 100% in the Basel II template, adjusted but conceptually similar in Basel 3.1).

5. **Regulatory retail exposures**

   * Exposures to individuals and small businesses that meet **regulatory retail criteria** (granularity, low individual exposure, etc.).
   * Benefit from **preferential risk weights** compared to large corporates.

6. **Exposures secured by residential real estate**

   * Loans fully or partly secured by residential property, subject to conditions.
   * Under Basel 3.1, risk weights are heavily driven by **LTV** and property type.

7. **Exposures secured by commercial real estate**

   * Loans secured by income-producing or commercial property.
   * Basel 3.1 introduces more risk-sensitive and, in some cases, higher risk weights, often LTV-based and subject to national choices.

8. **Past-due exposures**

   * Exposures that are past due / non-performing.
   * Receive **higher risk weights** depending on days past due and level of specific provisions.

9. **Covered bonds**

   * Debt instruments backed by specific pools of assets (e.g. mortgages) that remain on-balance sheet.
   * Receive preferential risk weights if strict eligibility conditions are met.

10. **Securitisation exposures**

    * Tranches of securitised asset pools (senior, mezzanine, equity).
    * Treated under a **separate securitisation framework**, with high risk weights (up to 1250%) for certain high-risk tranches.

11. **Equity exposures**

    * Direct ownership interests in companies or funds.
    * Risk weights are high (e.g. 100%, 250% or higher, depending on approach and reform package).

12. **Other assets**

    * Cash items in process of collection, fixed assets, prepayments, some intangibles not otherwise deducted, etc.
    * Typically assigned standard risk weights (commonly 100% in the template, subject to local rules).

Full technical definitions and risk-weight tables are given in **CRE20 – Standardised approach: individual exposures**.

---

## 4.5 External ratings and ECAIs in SA

### 4.5.1 Use of ratings

For certain classes (sovereigns, banks, corporates, some securitisations), SA uses **external credit ratings** where national authorities allow this.

High-level flow:

1. The supervisor recognises one or more **External Credit Assessment Institutions (ECAIs)** (e.g. S&P, Moody’s, Fitch, or domestic agencies).
2. ECAI ratings (AAA, AA, A, BBB, etc., or local-scale equivalents) are mapped to **Credit Quality Steps (CQS)**.
3. Each CQS corresponds to a **regulatory risk weight** for a given exposure class.

Chapter **CRE21 – Standardised approach: use of external ratings** sets out eligibility criteria for ECAIs and the mapping rules.

### 4.5.2 Core principles for rating use

Basel’s key principles under CRE21 include:

* **Supervisor recognition of ECAIs** – ECAIs must meet criteria on objectivity, independence, transparency and disclosure.
* **Consistency** – a bank using a given ECAI for one exposure class must **apply it consistently** across similar exposures (no cherry-picking).
* **Issue vs issuer ratings** – use specific **issue ratings** where available; otherwise, apply issuer ratings under prescribed rules.
* **Multiple ratings** – apply conservative combination rules (e.g. generally take the most conservative of the relevant risk weights derived from the available ratings).

### 4.5.3 Unrated exposures

The framework must handle **unrated** exposures as well:

* **Unrated corporates**: receive default risk weights (e.g. 100% under the Basel II template; recalibrated but conceptually similar under Basel 3.1).
* **Unrated banks**: under Basel 3.1, are treated under **SCRA**, with banks grouped into categories (A/B/C) based on prudential and financial indicators, each with prescribed risk weights.
* **Retail and many real estate exposures**: often use **product and collateral characteristics** (e.g. LTV) rather than external ratings.

---

## 4.6 Standardised Approach pipeline – step-by-step

This is the conceptual SA credit risk workflow that a bank (or an RWA engine) will implement.

### Step 1 – Identify exposure and exposure amount

For each position:

* Determine **counterparty and product information** (sovereign, bank, corporate, retail, real estate, etc.).
* Classify as **on-balance sheet** or **off-balance sheet**.
* Calculate **EAD**:

  * On-balance: net of specific provisions and write-offs.
  * Off-balance: notional × CCF, using Basel CCF tables for commitments and guarantees.

### Step 2 – Assign exposure class

Using CRE20 rules:

* Government bond → sovereign exposure.
* Interbank placement → bank exposure.
* Loan to a large corporate → corporate exposure.
* Credit card to an individual → regulatory retail (if criteria met).
* Mortgage loan secured by a dwelling → residential real estate exposure.

Accurate exposure classification is critical, as **risk weights differ materially** across classes.

### Step 3 – Determine rating information (if applicable)

For exposure classes that use ratings:

* Check if the exposure or obligor has an **eligible rating** from a recognised ECAI.
* Map the rating to a **CQS**, then to the regulatory **risk weight** for the relevant exposure type.
* Apply the jurisdiction’s rules for multiple ratings and for using issue vs issuer ratings.

If rating use is not permitted or exposure is unrated, apply the **unrated risk-weight rules**.

### Step 4 – Apply Credit Risk Mitigation (CRM)

If eligible collateral or guarantees exist:

* Recognise **eligible financial collateral** (e.g. cash, certain securities), subject to haircuts and conditions.
* Recognise **guarantees** and credit derivatives that meet eligibility conditions.

In SA, CRM is often implemented by:

* Splitting the exposure into **secured** and **unsecured** portions, or
* Using a **substitution approach**, where the risk weight of the guarantor/collateral provider is applied to the protected portion.

Full CRM rules are in CRE22 and are elaborated in Module 7.

### Step 5 – Assign risk weight

Using:

* Exposure class
* Rating (where applicable)
* Attributes such as LTV (real estate under Basel 3.1), product type, etc.

look up the **regulatory risk weight** from the SA tables.

Conceptually:

[
\text{RW}_j = f\bigl(\text{Exposure Class}_j,\ \text{Rating}_j,\ \text{LTV}_j,\ \text{Other attributes}\bigr)
]

Basel 3.1 revisions make this function **more granular and risk-sensitive**, especially for real estate and some corporate/retail segments.

### Step 6 – Compute RWA for each exposure

For each exposure (j):

[
\text{RWA}_j = \text{EAD}_j \times \text{RW}_j
]

(where RW is expressed as a decimal; e.g. 100% → 1.0, 50% → 0.5).

### Step 7 – Aggregate RWA and capital requirement

Aggregate across exposures:

[
\text{RWA}_{\text{credit}} = \sum_j \text{RWA}_j
]

Combine with market and operational risk:

[
\text{Total RWA}
= \text{RWA}_{\text{credit}}

* \text{RWA}_{\text{market}}
* \text{RWA}_{\text{operational}}
  ]

Basel template minimum capital requirement:

[
K_{\text{total}} = 0.08 \times \text{Total RWA}
]

before adding capital buffers and national overlays.

---

## 4.7 SA under Basel 3.1 (“Endgame”) – high-level enhancements

The **Basel III: Finalising post-crisis reforms** package significantly revises the Standardised Approach for credit risk (SA-CR).

Key themes:

1. **Greater risk sensitivity**

   * Real estate exposures (both residential and commercial) are now strongly driven by **LTV** and property type, with multiple risk-weight buckets.
   * Corporate exposures are split into **general corporates**, **specialised lending**, etc., with tailored treatments.
   * Some retail exposures receive more granularity.

2. **SCRA for bank exposures**

   * For **unrated banks**, Basel 3.1 introduces **SCRA** categories (A/B/C) with different risk weights, based on the bank’s prudential and financial characteristics.

3. **Stronger due diligence requirements**

   * Banks must perform **their own credit analysis** and must not rely **mechanically** on external ratings.
   * Where internal analysis indicates higher risk than implied by the rating, the framework expects appropriate action (including potentially more conservative risk weights).

4. **Alignment with the output floor**

   * Revised SA-CR forms the reference for the **72.5% output floor**: total RWA from internal models cannot go below 72.5% of RWA computed under SA once the floor is fully phased in.

In summary, Basel 3.1 turns SA into a **more risk-sensitive and central** part of the framework, not just a fallback to IRB.

---

## 4.8 Implementation view – what an SA credit risk engine needs

A practical SA credit risk engine (for regulatory reporting or internal monitoring) typically needs:

1. **Core data model**

   * **Counterparty master**: legal entity, sector, sovereign, regulatory classification.
   * **Facility / exposure master**: product type, drawn/undrawn amounts, currency, maturity, interest type.
   * **Collateral and guarantee data**: type, market value, currency, haircuts, guarantor.
   * **Rating data**: ECAI, rating grade, rating type (issue/issuer), effective dates.

2. **Classification logic**

   * Rules to assign exposures to **Basel exposure classes and sub-classes** (sovereign, bank, corporate, retail, residential/commercial real estate, etc.).
   * Implementation of **regulatory retail criteria**, SME definitions and any local variants.

3. **Rating and mapping module**

   * Mapping tables from each ECAI’s scale to **CQS** and then to **risk weights** by exposure class.
   * Rules for multiple ratings, use of issue vs issuer ratings.
   * Flags for **due diligence overrides** where internal analysis suggests more conservative treatment.

4. **CCF and EAD engine**

   * Mapping of product types and commitment types to **CCFs** in line with Basel and local rules.
   * EAD calculation explicitly **net of specific provisions** and write-offs.

5. **CRM engine**

   * Eligibility checks on collateral and guarantees.
   * Haircut application for collateral and exposure splitting into secured/unsecured parts.
   * Substitution logic for guarantees and credit derivatives (mapping to guarantor’s risk weight).

6. **Aggregation and reporting**

   * Aggregation of EAD and RWA by exposure class, rating grade, product type, business unit, region, etc.
   * Movement analysis: decomposing RWA changes into volume, mix, rating changes, CRM, methodology changes.
   * Regulatory templates (credit-risk SA returns, Pillar 3 tables).

This engine-level view connects directly with Module 9’s more detailed **data and calculation flow**.

---

## 4.9 Key points and practical notes (SA credit risk)

1. **Exposure class drives everything**

   * Two exposures to the same counterparty can have different **exposure classes** (e.g. one corporate facility vs another qualifying as regulatory retail), and therefore **very different risk weights**. CRE20’s classification rules must be implemented carefully.

2. **Exposures are net of specific provisions**

   * Under SA, exposures are risk-weighted **net of specific provisions and partial write-offs**, not gross accounting balances. This has a direct effect on RWA and must be handled systematically in the EAD calculation.

3. **Ratings are an input, not a substitute for due diligence**

   * Basel 3.1 emphasises that banks must perform their own **credit assessment**; reliance on external ratings must not be purely mechanical. Where internal analysis points to higher risk, more conservative treatment is expected.

4. **Unrated corporates and banks remain central in practice**

   * Many corporates (especially in emerging markets) are unrated; SA assigns them standard risk weights, but internally banks still differentiate risk for pricing and internal limits.
   * For unrated banks, SCRA under Basel 3.1 introduces a more granular, risk-sensitive framework.

5. **Real estate exposures are now very LTV-centric**

   * Under Basel 3.1, the treatment of real estate is a key area of focus: risk weights depend heavily on **LTV** and property type, so accurate collateral data and valuation processes become critical for both RWA and capital planning.

---

### Reference links for Module 4

[1]: [https://www.bis.org/basel_framework/chapter/CRE/20.htm](https://www.bis.org/basel_framework/chapter/CRE/20.htm) – **CRE20 – Standardised approach: individual exposures** (official Basel framework chapter)

[2]: [https://www.sif.admin.ch/dam/de/sd-web/GmUQnVy5H4eY/cre20.pdf](https://www.sif.admin.ch/dam/de/sd-web/GmUQnVy5H4eY/cre20.pdf) – PDF reproduction of CRE20 showing exposure values net of specific provisions and partial write-offs

[3]: [https://www.bis.org/publ/bcbs128.pdf](https://www.bis.org/publ/bcbs128.pdf) – *International Convergence of Capital Measurement and Capital Standards – A Revised Framework (Basel II)* (includes original SA and CCF principles)

[4]: [https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp517.pdf](https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp517.pdf) – ECB Working Paper on credit ratings and the standardised approach to credit risk

[5]: [https://www.bis.org/bcbs/publ/d424.pdf](https://www.bis.org/bcbs/publ/d424.pdf) – *Basel III: Finalising post-crisis reforms* (Basel 3.1 / Endgame) – revised SA-CR and output floor

[6]: [https://www.bankofengland.co.uk/prudential-regulation/publication/2022/november/implementation-of-the-basel-3-1-standards/credit-risk-standardised-approach](https://www.bankofengland.co.uk/prudential-regulation/publication/2022/november/implementation-of-the-basel-3-1-standards/credit-risk-standardised-approach) – Bank of England PRA CP on implementing Basel 3.1 SA-CR (real estate, SCRA, etc.)

[7]: [https://www.bis.org/basel_framework/chapter/CRE/21.htm](https://www.bis.org/basel_framework/chapter/CRE/21.htm) – **CRE21 – Standardised approach: use of external ratings**

[8]: [https://www.bis.org/basel_framework/chapter/CRE/22.htm](https://www.bis.org/basel_framework/chapter/CRE/22.htm) – **CRE22 – Standardised approach: credit risk mitigation**

[9]: [https://www.eba.europa.eu/sites/default/files/document_library/881123/Policy%20Advice%20on%20Basel%20III%20reforms%20-Credit%20Risk.pdf](https://www.eba.europa.eu/sites/default/files/document_library/881123/Policy%20Advice%20on%20Basel%20III%20reforms%20-Credit%20Risk.pdf) – EBA Policy Advice on Basel III reforms: credit risk (due diligence, ratings, CCFs, SCRA)

[10]: [https://en.wikipedia.org/wiki/Basel_III:_Finalising_post-crisis_reforms](https://en.wikipedia.org/wiki/Basel_III:_Finalising_post-crisis_reforms) – High-level summary of Basel 3.1 reforms (including SA-CR changes and the output floor)

[11]: [https://assets.kpmg.com/content/dam/kpmg/cn/pdf/en/2021/02/basel-iv-credit-risk-standardised-approach.pdf](https://assets.kpmg.com/content/dam/kpmg/cn/pdf/en/2021/02/basel-iv-credit-risk-standardised-approach.pdf) – KPMG technical note on revised SA-CR under “Basel IV” (LTV-based real estate, SCRA, corporate segmentation)
