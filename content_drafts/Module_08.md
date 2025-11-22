
---

# Module 8 – Securitisation & Other Pillar 1 Risks (Market & Operational)

## 8.1 What securitisation is (in capital language)

In regulatory capital terms, **securitisation** means:

> Taking a pool of exposures (usually loans), transferring them to a special-purpose vehicle (SPV), and issuing **tranches** of securities backed by the cash flows of that pool.

Core elements:

1. **Originator**
   The bank (or other lender) that owns the original loans (e.g. mortgages, auto loans, credit card receivables).

2. **SPV / trust**
   A bankruptcy-remote entity that buys the loans and issues securities backed by them.

3. **Underlying pool**
   The set of loans or receivables whose cash flows support the securities.

4. **Tranches issued by the SPV**

   * **Senior tranche** – paid first; lowest credit risk.
   * **Mezzanine tranche(s)** – paid after senior; absorbs losses after equity.
   * **Equity / first-loss tranche** – takes losses first; highest credit risk.

5. **Loss waterfall**

   * Cash flows and losses are allocated **bottom-up**:

     * Losses hit **equity** first,
     * then **mezzanine**,
     * then **senior**.
   * This allows a pool of similar loans to be sliced into tranches with very different risk profiles.

From a **bank capital** point of view, a **securitisation exposure** is any exposure the bank has **to the securitisation structure**, for example:

* Holding a senior/mezzanine/equity tranche.
* Providing a **liquidity facility** to the SPV.
* Providing **credit enhancement** (e.g. guarantees, letters of credit).
* Providing warehouse or bridge funding linked to the securitisation.

It is **not** the underlying loans themselves (those have been transformed into securitisation exposures for capital purposes).

---

## 8.2 Why regulators treat securitisation harshly

After the 2007–09 crisis, supervisors identified several problems with pre-crisis securitisation:

1. **Model risk and complexity**

   * Very complex structures and models.
   * Heavy dependence on assumptions that broke down in stress.

2. **Correlation and tail risk**

   * Correlations between borrowers and housing markets spiked.
   * Senior tranches turned out to be more vulnerable than expected.

3. **Opacity and incentives**

   * Originators could “arbitrage” capital, moving risky exposures off balance sheet but still retaining economic risk.
   * Investors often relied on ratings without understanding the structure.

Basel III’s securitisation framework reacts by:

* Setting **strict operational requirements** (true sale, risk retention, etc.).
* Creating a **hierarchy of capital approaches** with prescribed parameters.
* Introducing a very punitive **fallback risk weight of 1250%** for exposures where the bank cannot (or is not allowed to) use the securitisation approaches.

The overall philosophy is: **no capital relief without strong evidence and strict conditions**.

---

## 8.3 Basel securitisation capital – high-level mechanics

The Basel framework treats securitisation exposures under a **dedicated set of rules** (CRE40+). The key features are:

1. **Operational requirements**

   * Requirements for “traditional” vs “synthetic” securitisations.
   * Conditions to recognise significant risk transfer.
   * Risk retention rules (“skin in the game”).

2. **Hierarchy of approaches**

   Depending on whether the bank uses Standardised or IRB for the underlying pool and on data availability, Basel prescribes:

   * **SEC-IRBA** – IRB-based securitisation approach (uses underlying IRB parameters).
   * **SEC-ERBA** – External Ratings-Based Approach (uses recognised external ratings).
   * **SEC-SA** – Standardised Approach (uses underlying Standardised Approach parameters, often denoted KSA).

   The bank must use the **highest-priority approach for which it meets all conditions**.

3. **Risk-weighting of tranches**

   Each approach gives formulas / tables that assign **risk weights** to tranches based on:

   * Tranche **seniority and thickness**.
   * Attachment and detachment points (how much subordination is beneath the tranche).
   * Quality of the underlying pool (e.g. KIRB or KSA).
   * Presence of credit enhancement, liquidity facilities, etc.

4. **Fallback: 1250% risk weight**

   If none of the securitisation approaches can be applied (or if operational requirements are not met), the exposure must receive a **1250% risk weight**.

### 8.3.1 The 1250% risk weight – maths and intuition

Let **E** be the exposure amount of a securitisation position.

Fallback rule:

[
\text{RWA} = E \times 1250% = 12.5 \times E
]

Minimum Pillar 1 capital (Basel template):

[
K = 8% \times \text{RWA}
= 8% \times (12.5 \times E)
= 1.0 \times E
]

So under the **8% global minimum**, the capital charge equals **100% of the exposure** – economically very similar to **deducting the exposure from capital** (pre-Basel III, such exposures were often directly deducted).

Intuition:

> If the bank cannot meet securitisation conditions or apply the formulas, **no capital relief is granted**. It must hold capital as if the exposure might be fully lost.

This is why people often say “**1250% is like a deduction**”.

---

## 8.4 Simple view of securitisation capital in practice

At a high level, the securitisation capital process is:

1. **Identify securitisation exposures**

   * Tranches held (senior / mezzanine / equity).
   * Liquidity lines, credit enhancement, facilities to the SPV.
   * Warehousing exposures that will be securitised.

2. **Check operational requirements**

   * For traditional securitisation: true sale, transfer of credit risk, no implicit support, etc.
   * For synthetic securitisation: credit derivatives/guarantees meet Basel conditions.

3. **Determine applicable approach**

   * Use hierarchy: SEC-IRBA → SEC-ERBA → SEC-SA (if conditions met).
   * If none apply (or conditions not fulfilled) → **1250% RW**.

4. **Calculate risk weight**

   * Use the relevant securitisation formula / table to get RW for that tranche or exposure.
   * Risk weight will typically:

     * Be **lowest** for thick, senior tranches of high-quality pools.
     * Be **highest** for thin, mezzanine or equity tranches.

5. **Compute RWA and capital**

   * (\text{RWA} = \text{EAD} \times \text{RW}).
   * Capital = 8% × RWA (before buffers and overlays).

In these notes, the focus is on the **logic** and **1250% fallback**, rather than coding the full SEC-IRBA/ERBA/SA formulas.

---

## 8.5 India – securitisation capital (conceptual view)

RBI’s **Basel III Capital Regulations** adopt the Basel securitisation framework for Indian banks. Key points from RBI material and IIBF notes:

* RBI defines **securitisation exposures** consistently with Basel:

  * Tranches held (including pass-through certificates),
  * Credit-enhancing interest-only strips,
  * Liquidity facilities and credit enhancements,
  * Other exposures to securitisation structures.

* For many positions, risk weights depend on:

  * External rating of the tranche,
  * Seniority (senior vs mezzanine vs junior),
  * Whether the exposure qualifies as **resecuritisation** (which is treated especially harshly).

* Certain exposures (e.g. some credit-enhancing IO strips, deeply subordinated positions) are required to be:

  * **Deducted from capital**, or
  * **Risk-weighted at 1250%**.

The Indian flavour is mainly in:

* The **exact risk-weight tables**, and
* RBI’s detailed conditions for recognising securitisations and risk transfer.

Conceptually:

> Securitisation exposures in India either get **specific risk-weight bands** under the securitisation framework or, if conditions are not met, are treated with very high RW (e.g. 1250%) or deductions.

---

## 8.6 Market risk capital – global Basel view

### 8.6.1 Trading book vs banking book

Basel makes a formal distinction between:

* **Trading book**

  * Positions held with **intent to trade** or to hedge other trading book positions.
  * Short-term, liquid, marked-to-market daily.
  * Includes debt and equity instruments, FX, commodities and most trading derivatives.

* **Banking book**

  * Loans, deposits, held-to-collect investments.
  * Interest Rate Risk in the Banking Book (IRRBB) is typically handled under **Pillar 2** (or dedicated guidelines), not under market risk Pillar 1.

**Market risk capital** in Basel Pillar 1 is about **trading book** (plus certain structural FX/commodity positions).

### 8.6.2 Pre-FRTB (Basel II / “Basel 2.5”) – high level

Historically, there were two main approaches:

1. **Standardised Approach**

   * Separate capital charges for:

     * Specific risk and general market risk in interest-rate instruments,
     * Equity risk,
     * FX risk,
     * Commodity risk.

   * Based on position amounts multiplied by **prescribed risk weights**, and **duration / maturity bands** for interest-rate risk.

2. **Internal Models Approach (IMA)**

   * Capital based on **Value-at-Risk (VaR)** models, often with:

     * Stressed VaR,
     * Incremental Risk Charge (IRC),
     * Comprehensive risk measures for correlation trading.

   * Requires supervisory approval and extensive back-testing / validation.

The crisis showed limitations of VaR and the flexibility of the trading/banking boundary, leading to the **Fundamental Review of the Trading Book (FRTB)**.

### 8.6.3 FRTB – Basel III market risk standard

Under FRTB (“Minimum capital requirements for market risk”):

1. **Stricter trading/banking boundary**

   * Detailed rules for what can sit in trading vs banking book.
   * Reduces “capital arbitrage” by shifting positions back and forth.

2. **Two approaches**

   * **Standardised Approach for Market Risk (SA-MR)**

     * Uses **sensitivities** of positions to risk factors (interest rates, credit spreads, equity prices, FX, commodities).
     * Applies **risk weights** to these sensitivities.
     * Includes additional default risk and residual risk add-ons.

   * **Internal Models Approach (IMA)**

     * Based on **Expected Shortfall (ES)** (not VaR) at a high confidence level.
     * Requires:

       * Back-testing,
       * Profit-and-loss attribution,
       * Identification of **modellable** vs **non-modellable** risk factors (NMRFs).

3. **Calibration goal**

   * Make the standardised approach **risk-sensitive** enough to be a credible fallback.
   * Reduce **RWA variability** between banks with similar trading books.

In short:

> Under FRTB, market risk capital is calculated either via a **sensitivity-based Standardised Approach** or an **ES-based Internal Models Approach**, with strict rules on what counts as trading book.

### 8.6.4 India – market risk capital context

Historically, RBI’s capital adequacy guidelines for Indian banks have:

* Required the **Standardised Duration Approach** for interest-rate risk in the trading book.
* Used standardised methods for equity, FX and commodity risk.
* Treated market risk charges as part of total RWA.

In recent years, RBI has published draft guidelines to move towards **Basel III FRTB** for market risk for scheduled commercial banks, with phased implementation (timelines still under evolution).

For this module’s purposes, the key ideas are:

* Market risk = Pillar 1 capital for **trading book + some FX/commodity positions**.
* Approaches are **standardised** and/or **model-based** (FRTB).
* In India, the framework is moving from older standardised methods towards FRTB-style methods.

---

## 8.7 Operational risk capital – global Basel view

**Operational risk** is defined by Basel as:

> “The risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.”

### 8.7.1 Basel II methods (legacy)

Under Basel II, three main approaches were available:

1. **Basic Indicator Approach (BIA)**

   * Very simple formula:

     [
     K_{\text{operational}} = \alpha \times GI
     ]

     where:

     * (GI) = **Gross Income** (3-year average),
     * (\alpha = 15%).

2. **Standardised Approach (TSA/ASA)**

   * Bank’s activities split into **business lines** (corporate finance, trading & sales, retail banking, etc.).

   * For each business line (i):

     [
     K_i = \beta_i \times GI_i
     ]

     where (GI_i) = gross income for business line (i), and (\beta_i) is a prescribed percentage (differs by business line).

   * Total capital = 3-year average of (\sum_i K_i).

3. **Advanced Measurement Approaches (AMA)**

   * Banks used **internal models** (loss distribution, scenario analysis, etc.), subject to supervisory approval.

These methods were criticised for weak link to actual loss experience and for complexity in AMA.

### 8.7.2 Basel III – Standardised Measurement Approach (SMA)

Basel III replaces all of BIA, TSA and AMA with a single **Standardised Measurement Approach (SMA)**.

Key components:

1. **Business Indicator (BI)**

   * A financial-statement-based measure combining:

     * Interest, leases and dividend component,
     * Services component (fees/commissions),
     * Financial component (trading and fair-value gains/losses).

   * Calculated as a 3-year average.

2. **Business Indicator Component (BIC)**

   * A **piecewise function** of BI (similar to income tax brackets).
   * As BI increases, marginal coefficients increase → larger banks pay higher BIC.

3. **Loss Component (LC)**

   * Based on the bank’s **historical operational loss data** over 10 years.
   * Large, frequent losses push LC higher.

4. **Internal Loss Multiplier (ILM)**

   * A function of LC and BIC.
   * If losses are high relative to BI, ILM > 1; if losses are in line with the industry, ILM is closer to 1.

5. **Final capital charge**

   [
   K_{\text{operational}} = \text{BIC} \times \text{ILM}
   ]

So:

* BI captures **size and activity**.
* ILM introduces **penalty or uplift** based on actual loss experience.

### 8.7.3 India – operational risk implementation

In Indian implementation of Basel II:

* RBI required banks to adopt at least the **Basic Indicator Approach** for operational risk, with scope to move to Standardised Approach with approval.

As Basel III SMA becomes the global standard, RBI is moving towards SMA-aligned frameworks (in consultation papers and discussions), but at any point the exact approach will depend on the latest RBI circulars.

For conceptual understanding:

* BIA (α × Gross Income) remains important to know for **legacy and local rules**.
* SMA (BI + LC + ILM) is the **direction of travel** in the global Basel III framework.

---

## 8.8 Putting it all together – total RWA and capital requirement

At the end of Pillar 1, the bank aggregates risk across three main buckets:

1. **Credit risk RWA**

   * Includes:

     * On-balance-sheet credit exposures (Standardised or IRB),
     * Off-balance-sheet exposures (after CCFs, Module 6),
     * **Credit Risk Mitigation** (Module 7),
     * **Securitisation positions** (this module),
     * Counterparty credit risk for derivatives (where applicable),
     * CVA risk (where applicable).

2. **Market risk RWA**

   * Trading book market risk (FRTB SA-MR or IMA, or legacy approaches),
   * FX and commodity positions where included in Pillar 1.

3. **Operational risk RWA**

   * Under BIA, TSA/ASA, AMA or SMA, depending on the regime.

The basic Pillar 1 minimum capital requirement uses:

[
\text{RWA}*{\text{total}} =
\text{RWA}*{\text{credit}} +
\text{RWA}*{\text{market}} +
\text{RWA}*{\text{operational}}
\ (+\text{CVA, etc. where applicable})
]

[
K_{\text{Pillar 1}} = 8% \times \text{RWA}_{\text{total}}
]

Capital ratios (from Module 3) are then:

[
\text{CET1 Ratio} = \frac{\text{CET1}}{\text{RWA}*{\text{total}}},
\quad
\text{Tier 1 Ratio} = \frac{\text{Tier 1}}{\text{RWA}*{\text{total}}},
\quad
\text{Total Capital Ratio} = \frac{\text{Total Capital}}{\text{RWA}_{\text{total}}}
]

Jurisdictions overlay:

* **Basel III buffers** (CCB, CCyB, systemic buffers), and
* **Local minima** (for example, India’s 9% minimum total capital vs Basel’s 8%).

So:

> **Total RWA** is the common denominator; every Pillar 1 risk type eventually feeds into the same RWA stack.

---

## 8.9 Key points and practical notes

1. **Securitisation capital in one line**

   * Securitisation exposures are handled in a dedicated framework; if the bank cannot meet conditions or apply one of the securitisation approaches, the exposure is given **1250% RW**, which is roughly equivalent (under the 8% minimum) to **deducting it from capital**.

2. **Trading book vs banking book**

   * Trading book = positions held for short-term resale or hedging other trading positions, marked-to-market daily.
   * Banking book = hold-to-collect exposures (loans, deposits, many investments).
   * Market risk capital under FRTB sits on the trading book; **IRRBB** is mainly a **Pillar 2** topic.

3. **FRTB big picture**

   * Replaces VaR with **Expected Shortfall**, introduces modellable vs non-modellable risk factors and stricter trading/banking boundaries, and makes the **standardised approach risk-sensitive enough** to serve as a fallback if internal models are not allowed or fail validation.

4. **Old vs new operational risk approaches**

   * Basel II: BIA, TSA/ASA, AMA – mostly **Gross Income × factor** logic.
   * Basel III: SMA – combines a **Business Indicator (BI)** with **internal loss experience** via BIC × ILM.

5. **Helicopter view of Pillar 1**

   * Credit risk (including securitisation) + market risk + operational risk are all converted to **RWA** and then multiplied by **8%** to obtain Pillar 1 capital.
   * Local regulators (like RBI) implement higher minima and buffers, so banks must manage not just the global template but also **local overlays**.

---

### Reference links for Module 8

* **Basel securitisation framework and 1250% RW**
  – Basel Committee, “Revisions to the securitisation framework” and Basel framework chapters CRE40+ (securitisation) – explain operational criteria, hierarchy of approaches (SEC-IRBA, SEC-ERBA, SEC-SA) and the 1250% fallback risk weight.

* **RBI / IIBF securitisation guidance (India)**
  – RBI and IIBF Basel III capital notes summarise how Indian banks treat securitisation exposures, including use of 1250% RW or deductions for certain positions.

* **Basel III market risk – FRTB**
  – Basel Committee, “Minimum capital requirements for market risk” (FRTB) – sets out the revised trading/banking boundary, SA-MR, and ES-based IMA.

* **Basel III operational risk – SMA**
  – Basel III “Finalising post-crisis reforms” and supervisory summaries (e.g. Bank of England discussions on operational risk) explain the **Standardised Measurement Approach**, Business Indicator, BIC, loss component and ILM.

* **RBI capital adequacy guidelines (India)**
  – RBI master circulars on capital adequacy describe Indian implementation of market and operational risk capital (Standardised Duration Approach for market risk, BIA/TSA for operational risk) and their evolution towards Basel III standards.

---

