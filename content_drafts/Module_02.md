
---

# Module 2 – Basel Framework & the Three Pillars

Module 2 builds the big picture of:

* How **Basel I → Basel II → Basel III → Basel 3.1** evolved, and
* How the **Three Pillars** organise the whole framework.

---

## 2.1 Basel timeline – high level

### Basel I (1988, market-risk amendment 1996)

* First global capital standard issued by the Basel Committee.
* Focus: **credit risk** in the banking book.
* Introduced:

  * **Risk-weighted assets (RWA)** with simple buckets (0%, 20%, 50%, 100%, etc.).
  * A minimum **total capital ratio = 8% of RWA** for internationally active banks.
  * Two tiers of capital: **Tier 1** and **Tier 2** (no CET1 / AT1 split yet).

A 1996 amendment added **market risk capital** for the trading book and allowed both a standardised and an internal-models approach.

---

### Basel II (2004)

Objectives: make capital requirements more **risk-sensitive** and align them better with internal risk measurement.

Main changes:

* Introduced the **Three Pillars**:

  1. Minimum capital requirements,
  2. Supervisory review,
  3. Market discipline.

* Added capital for **operational risk** under Pillar 1 (on top of credit and market risk).

* Introduced:

  * **Standardised Approaches** for credit and operational risk, and
  * **Internal Ratings-Based (IRB)** approaches for credit risk.

The **8% minimum total capital ratio** against total RWA remained unchanged; what changed was **how RWA is calculated**.

---

### Basel III (2010 onwards)

Basel II did not fully address problems revealed in the 2007–09 global financial crisis (insufficient high-quality capital, under-estimated risks, inadequate liquidity). Basel III is a **strengthening and extension** of Basel II.

Key enhancements:

* **Higher and better-quality capital**, especially CET1.

* Introduction of **capital buffers** (Capital Conservation Buffer and Countercyclical Buffer).

* A **leverage ratio** as a non-risk-based backstop.

* **Liquidity standards**:

  * Liquidity Coverage Ratio (**LCR**),
  * Net Stable Funding Ratio (**NSFR**).

* More robust treatment of trading book, securitisation and counterparty credit risk.

---

### Basel 3.1 / “Basel IV” (finalising Basel III)

Official name: **“Basel III: Finalising post-crisis reforms”** (December 2017).

Main themes:

* Stronger **Standardised Approaches** for credit, market and operational risk.
* Restrictions and floors on **IRB models** to reduce unwarranted variability in RWA.
* An **aggregate output floor** so that **model-based RWA cannot fall below 72.5% of RWA under the standardised approaches** once fully phased in.

Detailed mechanics are explored later (especially Modules 4, 8 and 12).

---

## 2.2 Basel framework organised by the Three Pillars

Basel II and Basel III / 3.1 are built on **three mutually reinforcing pillars**:

1. **Pillar 1 – Minimum capital requirements**

   * Quantitative rules for:

     * Calculating **RWA** for credit, market and operational risk.
     * Determining how much **regulatory capital** must be held (minimum ratios).

2. **Pillar 2 – Supervisory review process**

   * Banks must assess their **overall capital adequacy** relative to all material risks (the **Internal Capital Adequacy Assessment Process – ICAAP**).
   * Supervisors perform their own assessment (**Supervisory Review and Evaluation Process – SREP**) and can require **additional capital or qualitative measures**.

3. **Pillar 3 – Market discipline**

   * **Disclosure** requirements on:

     * Capital structure and capital ratios,
     * RWA by risk type and exposure class,
     * Risk management frameworks and key risk parameters.

   * Objective: improve **transparency** so that market participants can assess banks and apply discipline.

A useful mapping:

* **Pillar 1** – formula-driven **minimum capital**.
* **Pillar 2** – **additional capital and governance expectations**.
* **Pillar 3** – **public transparency**.

---

## 2.3 Basel I – building the basic capital ratio

Basel I is conceptually simple but sets the foundation for everything that followed.

### 2.3.1 Numerator: capital under Basel I

Regulatory capital was split into:

* **Tier 1 capital** – mainly core equity (paid-up capital and disclosed reserves).
* **Tier 2 capital** – supplementary capital (revaluation reserves, certain subordinated debt, general provisions, etc.).
* Tier 2 that counted for regulatory capital was **capped at 100% of Tier 1**.

Total capital (Basel I):

[
\text{Total Capital} = \text{Tier 1} + \text{Tier 2} \quad (\text{subject to regulatory caps})
]

### 2.3.2 Denominator: RWA with simple buckets

Assets were grouped into broad risk-weight categories (0%, 20%, 50%, 100%) based on counterparty type and risk.

Conceptually:

[
\text{RWA} = \sum_j \left(\text{Exposure}_j \times \text{Risk Weight}_j\right)
]

Examples (high level):

* Claims on certain sovereigns → 0%
* Inter-bank claims → 20%
* Residential mortgages → 50%
* Corporate loans → 100%

### 2.3.3 Basel I capital ratio

Basel I required:

[
\frac{\text{Total Capital}}{\text{RWA}} \ge 8%
]

This **8% minimum total capital ratio** remains the global template in Basel II and Basel III (before capital buffers and national overlays).

---

## 2.4 Basel II – more risk-sensitive and the Three Pillars

Basel II preserves the **8% minimum**, but fundamentally changes **how RWA is calculated** and formalises the Three Pillars.

### 2.4.1 Pillar 1 in Basel II

Minimum capital requirements cover three major risk categories:

1. **Credit risk**

   Approaches:

   * **Standardised Approach (SA)** – uses regulator-prescribed risk weights, often based on external ratings and exposure class.
   * **IRB approaches** – banks estimate internal parameters such as **PD**, **LGD**, **EAD** which are then used in regulatory formulas.

2. **Market risk**

   * Standardised and internal models approaches for trading book positions and FX / commodities.

3. **Operational risk**

   * Basic Indicator, Standardised, or Advanced Measurement approaches (AMA).

If we define:

[
\text{Total RWA}
= \text{RWA}_{\text{credit}}

* \text{RWA}_{\text{market}}
* \text{RWA}_{\text{operational}}
  ]

then the Basel II minimum condition remains:

[
\frac{\text{Total Capital}}{\text{Total RWA}} \ge 8%
]

### 2.4.2 Pillar 2 in Basel II

Core elements:

* Banks must operate an **ICAAP**, assessing whether capital is adequate for:

  * All material risks (including those not fully captured in Pillar 1, e.g. concentration risk, interest-rate risk in the banking book, reputational risk).
  * Their business model, strategy and stress scenarios.

* Supervisors conduct **SREP** and can:

  * Require **additional capital (“Pillar 2 add-ons”)**,
  * Impose **risk-management or governance improvements**,
  * In serious cases, apply other supervisory measures.

### 2.4.3 Pillar 3 in Basel II

Pillar 3 introduces **public disclosure requirements** on:

* Capital structure and adequacy,
* Risk exposure amounts,
* Risk-management systems and methodologies.

The goal is to make **market discipline** a complement to Pillars 1 and 2.

---

## 2.5 Basel III – strengthening each Pillar

Basel III keeps the three pillars but **tightens** and **extends** them.

### 2.5.1 Pillar 1 under Basel III

1. **Capital quality and minimums**

   * Clear split into:

     * **CET1**,
     * **Additional Tier 1 (AT1)**,
     * **Tier 2**.

   * Stricter eligibility criteria emphasising permanence and loss-absorption.

   * Basel template minimum ratios (before buffers):

     * **CET1 ratio ≥ 4.5% of RWA**,
     * **Tier 1 ratio ≥ 6% of RWA**,
     * **Total capital ratio ≥ 8% of RWA**.

2. **Capital buffers**

   * **Capital Conservation Buffer (CCB)**:

     * **2.5% of RWA in CET1** above the minimum.
     * Breaching it triggers limits on distributions until capital is rebuilt.

   * **Countercyclical Capital Buffer (CCyB)**:

     * 0–2.5% of RWA in CET1, set by national authorities to lean against excessive credit growth.

   * Some jurisdictions also add **systemic risk buffers** for systemically important banks.

3. **Leverage ratio**

   * Non-risk-based backstop:

[
\text{Leverage Ratio}
= \frac{\text{Tier 1 Capital}}{\text{Exposure Measure}} \ge 3%
]

* Exposure measure includes on-balance sheet exposures, derivatives, securities-financing transactions and certain off-balance sheet items.

4. **Liquidity standards**

   * **LCR** (short-term liquidity resilience):

[
\text{LCR}
= \frac{\text{High-Quality Liquid Assets (HQLA)}}{\text{Net cash outflows over 30 calendar days}}
\ge 100%
]

* **NSFR** (structural funding stability):

[
\text{NSFR}
= \frac{\text{Available Stable Funding (ASF)}}{\text{Required Stable Funding (RSF)}}
\ge 100%
]

5. **Enhanced risk coverage**

   * Revised frameworks for:

     * Securitisation,
     * Counterparty credit risk,
     * Trading book (Fundamental Review of the Trading Book – FRTB),
     * Operational risk (Standardised Measurement Approach).

### 2.5.2 Pillar 2 under Basel III

* Greater emphasis on **stress testing**, **forward-looking capital planning** and **systemic risk considerations**.
* ICAAP and SREP expectations are more detailed and documented.
* Supervisors can impose **Pillar 2 capital guidance or requirements**, and other supervisory measures.

### 2.5.3 Pillar 3 under Basel III

* Introduction of **standardised tables and templates** to make disclosures more consistent and comparable.
* The **consolidated and enhanced Pillar 3 framework** (2017 and subsequent updates) sets out detailed templates for capital, RWA, leverage, liquidity and risk-type-specific disclosures.

---

## 2.6 Implementation and calibration by jurisdiction

Basel standards are **minimum international benchmarks**; they are implemented through local laws and regulations, often with **stricter calibration**.

### 2.6.1 European Union

* The Basel framework is implemented mainly via:

  * **Capital Requirements Regulation (CRR)**, and
  * **Capital Requirements Directive (CRD)**.

* The **European Banking Authority (EBA)** develops technical standards, reporting templates and guidelines to implement many detailed elements (liquidity, own funds, internal models, disclosure).

### 2.6.2 India – Reserve Bank of India (RBI)

Key points from RBI communications:

* Basel II in India is referred to as the **New Capital Adequacy Framework (NCAF)** and is explicitly described as resting on **three pillars** (minimum capital, supervisory review, market discipline).
* **Basel III capital regulations** are implemented in India **from 1 April 2013 in a phased manner**, via master circulars and subsequent updates.
* India applies a **higher minimum total capital ratio (CRAR) of 9% of RWA**, plus buffers (notably the 2.5% CCB in CET1 when fully phased in).
* RBI has issued separate guidelines for the **leverage ratio**, **LCR**, and **NSFR**, calibrated for Indian conditions.

### 2.6.3 Other jurisdictions (conceptual)

* **United States** – implements Basel via Federal Reserve, OCC and FDIC rules; has its own leverage and stress-testing frameworks on top.
* **Other regulators** (e.g. Bank of England/PRA, Saudi Central Bank, etc.) implement Basel standards through national rulebooks and may apply additional buffers or risk-weight adjustments.

The important idea for analysis and implementation work:

> Basel provides the **architecture and minimums**; each jurisdiction (RBI, ECB/EBA, Fed, etc.) applies its own **calibration, timelines and additional conditions**.

---

## 2.7 Basel-level maths and calculation flow

### 2.7.1 Capital ratios under Basel III

Let:

* (C_{\text{CET1}}) = CET1 capital,
* (C_{\text{T1}} = C_{\text{CET1}} + C_{\text{AT1}}) = Tier 1 capital,
* (C_{\text{Total}} = C_{\text{CET1}} + C_{\text{AT1}} + C_{\text{Tier 2}}) (after regulatory deductions),
* (\text{RWA}) = total risk-weighted assets.

Key ratios:

[
\text{CET1 Ratio} = \frac{C_{\text{CET1}}}{\text{RWA}}
]

[
\text{Tier 1 Ratio} = \frac{C_{\text{T1}}}{\text{RWA}}
]

[
\text{Total Capital Ratio} = \frac{C_{\text{Total}}}{\text{RWA}}
]

Basel III then requires (before buffers):

* CET1 ratio ≥ 4.5% of RWA,
* Tier 1 ratio ≥ 6% of RWA,
* Total capital ratio ≥ 8% of RWA,

and adds buffer requirements (CCB, CCyB, systemic buffers) on top.

### 2.7.2 Conceptual Pillar-1 calculation flow

At a high level, repeated at whatever frequency the regulator requires:

1. **Collect data**

   * Exposure data (on- and off-balance sheet).
   * Counterparty attributes, ratings, collateral, guarantees.
   * Trading book positions.
   * Operational-risk drivers (e.g. business indicator or income).

2. **Classify exposures**

   * Exposure classes (sovereign, bank, corporate, retail, real estate, etc.).
   * Approach applied (Standardised vs IRB, market-risk and op-risk approaches).

3. **Apply rules**

   * Assign **risk weights** or use **regulatory formulas** to compute risk-weighted exposure amounts.
   * Convert off-balance sheet items using **credit conversion factors (CCFs)**.
   * Recognise **credit risk mitigation (CRM)** where the framework allows.

4. **Compute RWA**

   * Sum RWA by exposure and risk type to obtain **total RWA**.

5. **Compute capital and ratios**

   * Determine eligible CET1, AT1 and Tier 2 under the regulatory definition.
   * Calculate capital ratios, leverage ratio and liquidity ratios.

6. **Compare to minima and buffers**

   * Check compliance with Basel and local requirements (e.g. RBI minima and buffers).
   * Feed results into internal governance and external reporting.

Pillar 2 then adds **additional capital and qualitative measures** if necessary; Pillar 3 requires **disclosure** of key elements.

---

## 2.8 Key takeaways for Module 2

1. **Simple evolution**

   * **Basel I** – 8% capital vs RWA, few risk-weight buckets, mainly credit risk.
   * **Basel II** – same 8%, but much more **risk-sensitive RWA** and the **Three Pillars**.
   * **Basel III** – higher and better-quality capital, explicit **buffers**, **leverage ratio**, **liquidity standards**, and enhanced risk coverage.
   * **Basel 3.1** – refines the framework, strengthens standardised approaches and IRB constraints, and introduces the **output floor** (model RWA ≥ 72.5% of SA RWA).

2. **Three Pillars are the organising logic**

   * **Pillar 1** – formula-based minimum capital requirements.
   * **Pillar 2** – supervisory review, ICAAP/SREP, and possible extra capital.
   * **Pillar 3** – disclosure and market discipline.

3. **Jurisdiction overlay matters**

   * Global Basel standards provide a **baseline**.
   * Jurisdictions like **India** implement them with **higher minimum ratios and local calibration** (for example, 9% CRAR + 2.5% CCB under RBI) and their own timelines.

4. **Everything else in later modules is detail**

   * Modules 3–8 break down the **numerator** (capital structure) and **denominator** (RWA computation) under this Basel / Three-Pillar architecture.
   * Modules 9–12 connect the framework to **data flows, reporting, capital planning and IRB/Endgame topics**.

---

### Reference links for Module 2


1. **Basel II comprehensive version (includes 1988 Accord & market-risk amendment)** – International Convergence of Capital Measurement and Capital Standards, BCBS.
   `https://www.bis.org/publ/bcbs128.pdf`

2. **Basel III main capital text** – Basel III: A global regulatory framework for more resilient banks and banking systems.
   `https://www.bis.org/publ/bcbs189.htm`

3. **Basel III: Finalising post-crisis reforms (Basel 3.1 / Endgame)** – output floor and revised approaches.
   `https://www.bis.org/bcbs/publ/d424.htm`

4. **Pillar 3 disclosure requirements – consolidated and enhanced framework**.
   `https://www.bis.org/bcbs/publ/d400.htm`

5. **Basel III leverage ratio framework and disclosure requirements**.
   `https://www.bis.org/publ/bcbs270.htm`

6. **Basel III: The Liquidity Coverage Ratio (LCR)**.
   `https://www.bis.org/publ/bcbs238.pdf`

7. **Basel III: The Net Stable Funding Ratio (NSFR)**.
   `https://www.bis.org/bcbs/publ/d295.pdf`

8. **RBI – Draft/Final guidelines on New Capital Adequacy Framework (Basel II / NCAF) and Three Pillars**.
   `https://rbi.org.in/upload/notification/pdfs/61023.pdf`

9. **RBI – Master Circular / notifications on Basel III Capital Regulations and implementation from 1 April 2013**.
   Example master circular entry:
   `https://www.rbi.org.in/CommonPerson/english/Scripts/Notification.aspx?Id=1264`

10. **EBA – The Basel framework: global regulatory standards for banks (EU implementation via CRR/CRD)**.
    `https://www.eba.europa.eu/activities/basel-framework-global-regulatory-standards-banks`

