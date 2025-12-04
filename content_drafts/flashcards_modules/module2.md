
---

### #19 – What is “credit risk” at instrument level?

* For a single loan or exposure, **credit risk** is the risk that the **borrower or counterparty will fail to meet contractual obligations**, causing a **financial loss** to the bank.
* Loss comes from:

  * **Not getting full cash flows** (interest + principal), or
  * Having to **restructure** on worse terms, or
  * Writing off part of the exposure.
* Measuring this risk requires three key ingredients:

  * **PD – Probability of Default**
  * **LGD – Loss Given Default**
  * **EAD – Exposure at Default**

---

### #20 – Basel-style definition of “default”

* Under Basel’s IRB framework, a borrower is treated as **in default** if either:

  1. The bank considers the borrower **unlikely to pay** its obligations in full **without** realising security, **or**
  2. Any material credit obligation is **past due more than 90 days** (backstop rule).
* “Unlikely to pay” events include:

  * Bankruptcy / insolvency
  * Distressed restructuring with economic loss
  * Specific credit-related write-off.
* This default definition underlies **PD, LGD, EAD estimation** and is also broadly aligned with **Stage 3 / NPA** concepts.

---

### #21 – Indian NPAs vs “default”

* In India, a loan is generally classified as a **Non-Performing Asset (NPA)** when **interest or instalment of principal remains overdue for more than 90 days** (for most loans).
* For regulatory modelling (IRB, IFRS 9), banks align **internal default definition** with:

  * 90+ days past due **plus** indicators of **unlikeliness to pay** (distressed restructuring, bankruptcy etc.).
* So practically in your discussions you can say:

  > “Default is broadly aligned with NPA (90+ DPD) plus other ‘unlikely to pay’ events.”

---

### #22 – PD: Probability of Default (Basel meaning)

* **PD** = probability that a **borrower will default within a given time horizon**, usually **within 1 year** for Basel IRB.
* For IRB:

  * PD is a **long-run average** of **1-year default rates** for that rating grade.
* PD is usually expressed as a **decimal or %** (e.g., 1% = 0.01).
* PD is **borrower-level** (not facility-level) in IRB frameworks – one borrower rating, one PD.

---

### #23 – LGD: Loss Given Default (economic loss %)

* **LGD** = proportion of the **EAD** that the bank expects to **lose if default occurs**, after accounting for recoveries, collateral, workout costs, and discounting.
* Typically expressed in **%** (e.g., LGD 45% means expect to lose 45% of EAD in default).
* IRB minimum standards require:

  * LGD to be based on **economic loss**, not just accounting write-off.
  * LGD estimates to be **downturn LGD** (reflect losses in adverse economic conditions).
* LGD is usually **facility-level** (depends on collateral, seniority, product).

---

### #24 – EAD: Exposure at Default

* **EAD** = expected **outstanding amount** of exposure **at the moment default occurs**.
* For term loans → often close to the **current outstanding principal** (plus accrued interest/fees).
* For revolving facilities (credit cards, cash credit) → customers often **draw more** before default, so EAD may be **higher** than current balance.
* IRB uses **Credit Conversion Factors (CCF)** on off-balance sheet limits to estimate EAD.
* EAD is expressed in **currency units** (₹, $, etc.).

---

### #25 – Expected Loss (EL) formula & intuition

* Basic formula (single-period, e.g. 1-year):
  $$EL = PD \times LGD \times EAD$$
* For a **portfolio**:
  $$EL_{\text{portfolio}} = \sum_i PD_i \times LGD_i \times EAD_i$$
* Interpretation:

  * EL = **statistical average** credit loss you expect over time.
  * If you repeated this year many times, average loss would be close to EL.
* In practice:

  * EL should be covered by **pricing + provisions (ECL)**, not capital.

---

### #26 – Unexpected Loss (UL) & loss distribution

* If you plot possible credit losses for a year, you get a **loss distribution**:

  * Centre (mean) = **EL**
  * Bad tail = **losses much worse than EL**.
* **Unexpected Loss (UL)** ≈ difference between a **high quantile loss** (e.g. 99.9th percentile) and EL.
* Basel capital is calibrated so that banks have enough capital to absorb **UL**, keeping probability of bank failure very low.
* So in plain language:

  * **EL** → expected, priced and provisioned.
  * **UL** → unexpected, requires **capital buffers**.

---

### #27 – How EL links to provisions & capital in Basel IRB

* Basel IRB compares **total EL** with **eligible provisions**:

  * If provisions < EL → **shortfall** is deducted from capital (mainly CET1).
  * If provisions > EL → excess may be recognised in **Tier 2** (up to limits).
* This enforces:

  * EL must be properly provisioned;
  * Capital truly backs **UL**, not under-provisioned EL.
* So CapAd / IRB implementation must:

  * Compute EL = PD×LGD×EAD
  * Compare with accounting provisions / ECL
  * Apply regulatory adjustments.

---

### #28 – IFRS 9 Expected Credit Loss (ECL) vs simple EL

* IFRS 9 requires recognition of **expected credit losses** that are:

  * **Probability-weighted**,
  * **Discounted** using effective interest rate, and
  * Based on **reasonable and supportable information**, including forward-looking macro scenarios.
* ECL is **multi-period**: it sums $PD_t \times LGD_t \times EAD_t$ over relevant future periods, not just 1 year.
* So:

  * Basel-style EL = **one-period, capital-focused** view.
  * IFRS 9 ECL = **accounting view** that can be **12-month or lifetime**, with discounting and scenario weights.

---

### #29 – IFRS 9 Staging (1/2/3) at a glance

* IFRS 9 impairment model has **three stages**:

  * **Stage 1:** No significant increase in credit risk (SICR) since origination → recognise **12-month ECL**.
  * **Stage 2:** SICR since origination but asset not credit-impaired → recognise **lifetime ECL**.
  * **Stage 3:** Credit-impaired / defaulted → lifetime ECL and interest on **net carrying amount**.
* Staging is based on changes in **risk of default**, not just days past due:

  * DPD backstops (e.g. 30/60/90) plus PD migration / internal rating changes.
* Same **PD/LGD/EAD engine** can feed both Basel capital (EL, RWA) and IFRS 9 ECL, with different horizons and calibration.

---

### #30 – Internal rating systems: connecting PD to grades

* IRB and RBI guidelines require banks to have **internal rating systems** with multiple grades for non-defaulted borrowers and at least one grade for defaulted ones.
* Each grade is associated with a **PD band** (e.g. Grade A: 0.1–0.3%, Grade B: 0.3–1%, etc.).
* Requirements:

  * Ratings used not only for capital, but also **credit approval, pricing and limits** (“use test”).
  * PD estimates reflect **long-run average** 1-year default rates for that grade.
* For retail portfolios, PD can be based on **scorecard outputs mapped to bands**.

---

### #31 – Borrower rating vs facility rating (PD vs LGD)

* Regulatory expectation:

  * **PD** is primarily **borrower-level** (obligor rating).
  * **LGD** is **facility-level** (depends on collateral, seniority, covenants).
* Example:

  * Same SME borrower with PD 2% can have:

    * **Secured term loan** with LGD 30%
    * **Unsecured overdraft** with LGD 60%
* Systems must store PD and LGD separately so CapAd / IRB formulas can combine them correctly into EL and RWA.

---

### #32 – Point-in-Time (PIT) vs Through-the-Cycle (TTC) PD

* **PIT PD** reflects current economic conditions and reacts quickly to the cycle (e.g. higher PDs in recession).
* **TTC PD** is smoother; calibrated to average across the cycle, based on long-run default data.
* Basel IRB generally expects **long-run average (TTC-like) PDs** for capital, with separate stress testing to capture cyclical risk.
* IFRS 9 often uses more **PIT-style PDs with macroeconomic scenarios** to capture current and forecast conditions.
* Your models can be positioned as:

  * **TTC-ish PD** for Basel capital,
  * **PIT PD curves** for IFRS 9 ECL.

---

### #33 – Segmentation & pooling for PD/LGD/EAD

* Regulators expect exposures to be grouped into **homogeneous pools** where risk is similar:

  * By product (housing, auto, personal)
  * By collateral type (secured vs unsecured)
  * By customer type (retail vs SME vs corporate)
  * By geography or other risk drivers.
* Good segmentation:

  * Improves model performance and interpretation.
  * Ensures backtesting and monitoring reflect real differences in behaviour.
* IFRS 9 also requires **“groups of financial assets with similar risk characteristics”** for collective ECL measurement.

---

### #34 – How PD/LGD/EAD drive Risk-Weighted Assets (RWA)

* Under the **IRB approach**, banks plug **PD, LGD, EAD and Maturity (M)** into regulatory **risk-weight functions** to compute **RWA for credit risk**.
* Under the **Standardised Approach**, RWA are based on **risk weights assigned to exposure classes** (sovereign, bank, corporate, retail, etc.) using ratings / regulatory tables – PD/LGD/EAD are not explicit.
* For CapAd:

  * In **standardised banks**, PD/LGD/EAD still exist for internal risk & ECL but not used directly for RWA.
  * In **IRB banks**, PD/LGD/EAD are central to both **capital** and **portfolio steering**.

---

### #35 – PD/LGD/EAD and risk-based pricing

* Risk-based pricing aims to ensure each loan covers:

  * **Expected Loss (EL)**
  * **Cost of funding & operating expenses**
  * **Cost of capital for UL**
  * Target **profit margin**.
* A simple RAROC-style logic:

  * Higher **PD/LGD/EAD** ⇒ higher **EL** ⇒ loan needs **higher interest rate / fees** or more collateral.
  * Very high-risk deals may be **rejected**, not repriced.
* In interviews, you can say:

  > “Our PD/LGD/EAD estimates feed not just capital and provisions, but also **risk-based pricing and limit setting**.”

---

### #36 – Numerically linking PD, LGD, EAD and EL

* Example loan:

  * EAD = ₹10 crore
  * PD (1-year) = 2%
  * LGD = 40%
* Then:

  * $$EL = 0.02 \times 0.40 \times 10\text{ cr} = 0.08\text{ cr} = ₹8\text{ lakh}$$
* Interpretation:

  * On a large portfolio of similar loans, you’d expect to lose **₹8 lakh per year on average** per loan.
  * Pricing and provisioning must at least cover this EL (plus costs and capital charge).

---

### #37 – How PD/LGD/EAD feed into IFRS 9 ECL (high level)

* For a Stage 1 exposure (12-month ECL):
  $$ECL_{12m} = \sum_{\text{scenarios}} w_s \times PD_{12m,s} \times LGD_s \times EAD_s \times DF$$
* For Stage 2/3 (lifetime ECL):
  $$ECL_{\text{life}} = \sum_{t=1}^{T} \sum_{s} w_s \times PD_{t,s} \times LGD_{t,s} \times EAD_{t,s} \times DF_{t,s}$$
* Where:

  * $w_s$ = scenario weight
  * $DF$ = discount factor using effective interest rate.
* Same PD/LGD/EAD machinery you learn for Basel is re-used with **different horizon + discounting + scenarios**.

---

### #38 – Putting it together: EL, ECL and Capital

* **PD/LGD/EAD models** give you the **shape of credit risk** at borrower & portfolio level.
* From these:

  * You calculate **EL = PD×LGD×EAD** for capital frameworks (Basel IRB, CapAd).
  * You calculate **ECL** (12-month and lifetime) for IFRS 9 provisions.
* Then:

  * **Provisions (ECL)** + **pricing** cover **Expected Loss**.
  * **Regulatory capital (Basel III, ICAAP)** covers **Unexpected Loss** over stress scenarios.
* CapAd sits on top of all this to:

  * Turn exposures + PD/LGD/EAD into **RWA and capital ratios**,
  * Ensure the bank meets **RBI Basel III requirements**.

---

