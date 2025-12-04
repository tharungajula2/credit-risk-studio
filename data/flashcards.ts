export interface Flashcard {
  id: string;
  title: string;
  content: string;
}

export interface FlashcardModule {
  id: string;
  title: string;
  cards: Flashcard[];
}

export const flashcards: FlashcardModule[] = [
  {
    id: "1",
    title: "Core Banking & Risk Overview",
    cards: [
      {
        id: "1",
        title: "What does a commercial bank do?",
        content: `* A bank is a **financial intermediary**: it accepts **deposits** from customers and lends those funds as **loans & advances** to households, firms and governments.
* It also provides **payment services** (transfers, cards, UPI/NEFT/RTGS), **forex**, and **treasury** services.
* Banks transform:

  * **Maturity** (short-term deposits → long-term loans)
  * **Risk** (diversified loan book instead of one borrower)
  * **Size** (small deposits → large loans).
* Because of this transformation, banks face multiple **financial risks** (credit, market, liquidity, operational) that must be measured and controlled.`
      },
      {
        id: "2",
        title: "How does a bank earn profit?",
        content: `* Main driver is **Net Interest Income (NII)** = interest on loans & investments **minus** interest paid on deposits & borrowings.
* **Net Interest Margin (NIM)** = NII ÷ interest-earning assets – key profitability metric.
* Banks also earn **non-interest income**:

  * Fees & commissions (cards, LC/BG, payments)
  * Trading income from treasury (FX, bonds, derivatives).
* Losses from credit risk, market risk, and operational events **reduce** profit; severe losses can eat into **capital**.`
      },
      {
        id: "3",
        title: "High-level bank balance sheet structure",
        content: `* **Assets** (uses of funds):

  * Cash & balances with RBI/other banks
  * **Investments** (mainly government securities, other bonds/equities)
  * **Loans & advances** (retail, SME, corporate, etc.)
  * Fixed assets & other assets
* **Liabilities** (sources of funds):

  * **Deposits** (savings, current, term)
  * Borrowings (RBI refinance, bonds, interbank, repos)
  * Other liabilities & provisions
* **Equity / Capital**: share capital + reserves (CET1, AT1, Tier 2 under Basel III).
* **Risk & regulatory work** (like CapAd) lives mainly in mapping these assets & off-balance sheet items into **Risk-Weighted Assets (RWA)** and capital ratios.`
      },
      {
        id: "4",
        title: "Key loan portfolio buckets (for risk & CapAd)",
        content: `* **Retail**: housing loans, auto, personal loans, credit cards.
* **SME / MSME**: small business working capital and term loans.
* **Corporate / wholesale**: large working capital limits, term loans, project finance.
* **Banks & FIs**: interbank placements, refinance.
* For Basel / CapAd, these map into **exposure classes** like retail, corporate, banks, sovereigns, etc., each with its own **risk-weight rules**.`
      },
      {
        id: "5",
        title: "Deposits vs borrowings vs capital (funding stack)",
        content: `* **Deposits** – main, relatively stable, low-cost funding (CASA + term).
* **Borrowings** – wholesale funding: bonds, CDs, interbank lines, refinance, repos.
* **Capital** – shareholders’ funds (CET1, AT1, Tier 2) – **absorbs unexpected losses** and supports growth.
* Regulators care not just about *size* of the balance sheet, but whether **funding is stable** and **capital is sufficient** for the risks (Basel III).`
      },
      {
        id: "6",
        title: "What is “risk” for a bank?",
        content: `* **Risk** = possibility that actual outcomes (losses, income, liquidity) will differ from what is expected.
* RBI and Basel list key risk types for banks: **credit risk, market risk, operational risk, interest rate risk in the banking book, credit concentration risk and liquidity risk**.
* Capital adequacy (Basel III) and ICAAP require banks to **identify, measure, aggregate and hold buffers** against these risks.`
      },
      {
        id: "7",
        title: "Credit risk (formal idea)",
        content: `* RBI describes credit risk as the risk that a bank’s **borrower or counterparty fails to meet obligations**, causing loss; banks must measure, monitor and control it and hold adequate capital.
* In practice: risk of **default, downgrade, non-payment, or restructuring** on:

  * Loans & advances
  * Investments in bonds
  * Off-balance sheet exposures (LCs, guarantees, derivatives).
* **PD, LGD, EAD** are the main parameters used for measurement and for **capital and ECL**.`
      },
      {
        id: "8",
        title: "Market risk",
        content: `* RBI defines market risk as the risk of loss from movements in **market prices**, especially changes in interest rates, FX rates, equity and commodity prices.
* Mainly affects:

  * Trading book (bonds, FX, derivatives)
  * Rate-sensitive AFS/FVTPL securities in the banking book.
* Basel capital charge for market risk is separate from credit risk; in a CapAd context, it’s one of the **Pillar 1 risk types** alongside credit & operational risk.`
      },
      {
        id: "9",
        title: "Operational risk",
        content: `* The Basel Committee (and RBI guidance) define **operational risk** as the risk of loss resulting from **inadequate or failed internal processes, people and systems or from external events**, including legal risk.
* Examples: fraud, system outages, processing errors, cyber incidents, legal fines.
* Under Basel III, banks must hold **capital for operational risk** using approaches like BIA or standardised approaches.`
      },
      {
        id: "10",
        title: "Liquidity risk (funding vs market liquidity)",
        content: `* RBI & Basel treat **liquidity risk** as risk that a bank **cannot meet its obligations as they fall due** or can do so only at **unacceptable cost**, even if it is solvent.
* Two flavours:

  * **Funding liquidity risk** – can’t roll over deposits/wholesale funding or raise cash.
  * **Market liquidity risk** – can’t sell assets quickly without large price impact.
* Basel III introduces explicit **LCR and NSFR** to constrain liquidity/funding risk; your **ALM project** models these.`
      },
      {
        id: "11",
        title: "Interest Rate Risk in the Banking Book (IRRBB)",
        content: `* Basel defines IRRBB as the current or prospective risk to a bank’s **capital and earnings** arising from adverse movements in interest rates affecting the **banking book** positions.
* Banking book = loans, deposits and investments held **not for trading**, mostly measured at amortised cost.
* Channels:

  * **Earnings risk (ΔNII)** – short-term impact on net interest income.
  * **Economic value risk (ΔEVE)** – change in present value of future cashflows.
* In your ALM engine, gap analysis, duration, PV01 ladder and ΔEVE under shocks are all **IRRBB tools**.`
      },
      {
        id: "12",
        title: "Trading book vs banking book (why it matters)",
        content: `* **Trading book**:

  * Positions held with intent to **trade** or hedge trading positions.
  * Measured at fair value; subject to **market risk capital**.
* **Banking book**:

  * Loans, core deposits, HTM investments – held to collect cashflows, not for short-term resale.
  * Subject mainly to **credit risk capital** and **IRRBB (Pillar 2)**.
* CapAd & ALM for this role will focus primarily on **banking book positions** (credit risk RWA, IRRBB, LCR/NSFR).`
      },
      {
        id: "13",
        title: "Expected Loss vs Unexpected Loss (conceptual)",
        content: `* With PD, LGD, EAD estimated, **Expected Loss (EL)** ≈ long-run average loss:
  $$EL = \\sum PD_i \\times LGD_i \\times EAD_i$$
* **Unexpected Loss (UL)** is the **volatility around EL** – losses in bad years or stress scenarios.
* Framework:

  * **EL** → covered by **provisions (IFRS 9 ECL)** + pricing.
  * **UL** → covered by **regulatory capital (Basel III)** and ICAAP buffers.
* All your PD/LGD/EAD, ECL, CapAd and stress testing work lives on top of this EL vs UL idea.`
      },
      {
        id: "14",
        title: "Capital adequacy: why regulators care",
        content: `* Basel III exists so that banks hold **enough high-quality capital** to absorb losses and **remain solvent**.
* Capital adequacy ratio:
  $$\\text{Capital Ratio} = \\frac{\\text{Regulatory Capital}}{\\text{Risk-Weighted Assets (RWA)}}$$
* RBI’s Basel III Master Circular specifies minimum ratios for **CET1, Tier 1 and Total Capital**, plus capital conservation and other buffers.
* The **CapAd module** you’ll work with basically automates:

  * computing RWA for credit, market, operational risk;
  * applying capital ratios and buffers;
  * generating regulatory reports.`
      },
      {
        id: "15",
        title: "Where CapAd fits in the bank’s risk stack",
        content: `* **Inputs:** granular exposure data (loans, off-balance sheet, investments), PD/LGD/EAD estimates or risk weights, collateral, ratings.
* **Processing:** apply **Basel/RBI rules** to compute **RWA** and capital requirements for each risk type.
* **Outputs:**

  * Capital ratios (CET1, Tier 1, Total)
  * Risk-weighted splits by portfolio / product / counterparty
  * Regulatory templates for RBI.
* For this role, you’re the **bridge** between:

  * Regulatory text (Basel III, RBI circulars)
  * The **CapAd product configuration & logic**
  * Data from the bank’s systems.`
      },
      {
        id: "16",
        title: "Where ALM / Treasury analytics fits",
        content: `* ALM looks at **structural interest rate & liquidity risk** arising from the core balance sheet.
* Core tasks:

  * IRRBB: gap, ΔNII, duration, ΔEVE, hedging.
  * Liquidity: LCR, NSFR, stress tests, survival horizon, CFP.
* Your ALM project mirrors what a bank’s **ALCO** needs:

  * Reports that show **earnings at risk**, **economic value at risk**, **liquidity buffers** and **funding stability**.
* For Surya, ALM results also feed into **ICAAP and internal capital/liquidity assessment**.`
      },
      {
        id: "17",
        title: "Risk management & ICAAP connection",
        content: `* RBI expects banks to run an **Internal Capital Adequacy Assessment Process (ICAAP)** under Basel Pillar 2.
* ICAAP must:

  * Identify *all* material risks (credit, market, operational, IRRBB, liquidity, concentration, etc.).
  * Quantify required capital & liquidity under **normal and stressed** conditions.
  * Show how **business plans, capital plans and risk appetite** are aligned.
* Your PD/LGD/EAD models, CapAd outputs and ALM analytics are key **inputs** into ICAAP.`
      },
      {
        id: "18",
        title: "Three lines of defence (governance context)",
        content: `(Not RBI-specific, but standard globally.)

* **1st line:** Business & front-line units – own the risks, follow policies, use models.
* **2nd line:** Independent **Risk Management** & **Compliance** – set frameworks, challenge, monitor.
* **3rd line:** **Internal Audit** – provides independent assurance over both 1st and 2nd line.
* In many banks:

  * Model development teams sit in 1st or 2nd line.
  * **Model validation** & **independent review** clearly separated.
* As a CapAd/Reg Reporting analyst, you usually sit in the **risk / finance middle office** (2nd line style), ensuring numbers and documentation stand scrutiny.`
      }
    ]
  },
  {
    id: "2",
    title: "Credit Risk Fundamentals & EL vs UL",
    cards: [
      {
        id: "19",
        title: "What is “credit risk” at instrument level?",
        content: `* For a single loan or exposure, **credit risk** is the risk that the **borrower or counterparty will fail to meet contractual obligations**, causing a **financial loss** to the bank.
* Loss comes from:

  * **Not getting full cash flows** (interest + principal), or
  * Having to **restructure** on worse terms, or
  * Writing off part of the exposure.
* Measuring this risk requires three key ingredients:

  * **PD – Probability of Default**
  * **LGD – Loss Given Default**
  * **EAD – Exposure at Default**`
      },
      {
        id: "20",
        title: "Basel-style definition of “default”",
        content: `* Under Basel’s IRB framework, a borrower is treated as **in default** if either:

  1. The bank considers the borrower **unlikely to pay** its obligations in full **without** realising security, **or**
  2. Any material credit obligation is **past due more than 90 days** (backstop rule).
* “Unlikely to pay” events include:

  * Bankruptcy / insolvency
  * Distressed restructuring with economic loss
  * Specific credit-related write-off.
* This default definition underlies **PD, LGD, EAD estimation** and is also broadly aligned with **Stage 3 / NPA** concepts.`
      },
      {
        id: "21",
        title: "Indian NPAs vs “default”",
        content: `* In India, a loan is generally classified as a **Non-Performing Asset (NPA)** when **interest or instalment of principal remains overdue for more than 90 days** (for most loans).
* For regulatory modelling (IRB, IFRS 9), banks align **internal default definition** with:

  * 90+ days past due **plus** indicators of **unlikeliness to pay** (distressed restructuring, bankruptcy etc.).
* So practically in your discussions you can say:

  > “Default is broadly aligned with NPA (90+ DPD) plus other ‘unlikely to pay’ events.”`
      },
      {
        id: "22",
        title: "PD: Probability of Default (Basel meaning)",
        content: `* **PD** = probability that a **borrower will default within a given time horizon**, usually **within 1 year** for Basel IRB.
* For IRB:

  * PD is a **long-run average** of **1-year default rates** for that rating grade.
* PD is usually expressed as a **decimal or %** (e.g., 1% = 0.01).
* PD is **borrower-level** (not facility-level) in IRB frameworks – one borrower rating, one PD.`
      },
      {
        id: "23",
        title: "LGD: Loss Given Default (economic loss %)",
        content: `* **LGD** = proportion of the **EAD** that the bank expects to **lose if default occurs**, after accounting for recoveries, collateral, workout costs, and discounting.
* Typically expressed in **%** (e.g., LGD 45% means expect to lose 45% of EAD in default).
* IRB minimum standards require:

  * LGD to be based on **economic loss**, not just accounting write-off.
  * LGD estimates to be **downturn LGD** (reflect losses in adverse economic conditions).
* LGD is usually **facility-level** (depends on collateral, seniority, product).`
      },
      {
        id: "24",
        title: "EAD: Exposure at Default",
        content: `* **EAD** = expected **outstanding amount** of exposure **at the moment default occurs**.
* For term loans → often close to the **current outstanding principal** (plus accrued interest/fees).
* For revolving facilities (credit cards, cash credit) → customers often **draw more** before default, so EAD may be **higher** than current balance.
* IRB uses **Credit Conversion Factors (CCF)** on off-balance sheet limits to estimate EAD.
* EAD is expressed in **currency units** (₹, $, etc.).`
      },
      {
        id: "25",
        title: "Expected Loss (EL) formula & intuition",
        content: `* Basic formula (single-period, e.g. 1-year):
  $$EL = PD \\times LGD \\times EAD$$
* For a **portfolio**:
  $$EL_{\\text{portfolio}} = \\sum_i PD_i \\times LGD_i \\times EAD_i$$
* Interpretation:

  * EL = **statistical average** credit loss you expect over time.
  * If you repeated this year many times, average loss would be close to EL.
* In practice:

  * EL should be covered by **pricing + provisions (ECL)**, not capital.`
      },
      {
        id: "26",
        title: "Unexpected Loss (UL) & loss distribution",
        content: `* If you plot possible credit losses for a year, you get a **loss distribution**:

  * Centre (mean) = **EL**
  * Bad tail = **losses much worse than EL**.
* **Unexpected Loss (UL)** ≈ difference between a **high quantile loss** (e.g. 99.9th percentile) and EL.
* Basel capital is calibrated so that banks have enough capital to absorb **UL**, keeping probability of bank failure very low.
* So in plain language:

  * **EL** → expected, priced and provisioned.
  * **UL** → unexpected, requires **capital buffers**.`
      },
      {
        id: "27",
        title: "How EL links to provisions & capital in Basel IRB",
        content: `* Basel IRB compares **total EL** with **eligible provisions**:

  * If provisions < EL → **shortfall** is deducted from capital (mainly CET1).
  * If provisions > EL → excess may be recognised in **Tier 2** (up to limits).
* This enforces:

  * EL must be properly provisioned;
  * Capital truly backs **UL**, not under-provisioned EL.
* So CapAd / IRB implementation must:

  * Compute EL = PD×LGD×EAD
  * Compare with accounting provisions / ECL
  * Apply regulatory adjustments.`
      },
      {
        id: "28",
        title: "IFRS 9 Expected Credit Loss (ECL) vs simple EL",
        content: `* IFRS 9 requires recognition of **expected credit losses** that are:

  * **Probability-weighted**,
  * **Discounted** using effective interest rate, and
  * Based on **reasonable and supportable information**, including forward-looking macro scenarios.
* ECL is **multi-period**: it sums $PD_t \\times LGD_t \\times EAD_t$ over relevant future periods, not just 1 year.
* So:

  * Basel-style EL = **one-period, capital-focused** view.
  * IFRS 9 ECL = **accounting view** that can be **12-month or lifetime**, with discounting and scenario weights.`
      },
      {
        id: "29",
        title: "IFRS 9 Staging (1/2/3) at a glance",
        content: `* IFRS 9 impairment model has **three stages**:

  * **Stage 1:** No significant increase in credit risk (SICR) since origination → recognise **12-month ECL**.
  * **Stage 2:** SICR since origination but asset not credit-impaired → recognise **lifetime ECL**.
  * **Stage 3:** Credit-impaired / defaulted → lifetime ECL and interest on **net carrying amount**.
* Staging is based on changes in **risk of default**, not just days past due:

  * DPD backstops (e.g. 30/60/90) plus PD migration / internal rating changes.
* Same **PD/LGD/EAD engine** can feed both Basel capital (EL, RWA) and IFRS 9 ECL, with different horizons and calibration.`
      },
      {
        id: "30",
        title: "Internal rating systems: connecting PD to grades",
        content: `* IRB and RBI guidelines require banks to have **internal rating systems** with multiple grades for non-defaulted borrowers and at least one grade for defaulted ones.
* Each grade is associated with a **PD band** (e.g. Grade A: 0.1–0.3%, Grade B: 0.3–1%, etc.).
* Requirements:

  * Ratings used not only for capital, but also **credit approval, pricing and limits** (“use test”).
  * PD estimates reflect **long-run average** 1-year default rates for that grade.
* For retail portfolios, PD can be based on **scorecard outputs mapped to bands**.`
      },
      {
        id: "31",
        title: "Borrower rating vs facility rating (PD vs LGD)",
        content: `* Regulatory expectation:

  * **PD** is primarily **borrower-level** (obligor rating).
  * **LGD** is **facility-level** (depends on collateral, seniority, covenants).
* Example:

  * Same SME borrower with PD 2% can have:

    * **Secured term loan** with LGD 30%
    * **Unsecured overdraft** with LGD 60%
* Systems must store PD and LGD separately so CapAd / IRB formulas can combine them correctly into EL and RWA.`
      },
      {
        id: "32",
        title: "Point-in-Time (PIT) vs Through-the-Cycle (TTC) PD",
        content: `* **PIT PD** reflects current economic conditions and reacts quickly to the cycle (e.g. higher PDs in recession).
* **TTC PD** is smoother; calibrated to average across the cycle, based on long-run default data.
* Basel IRB generally expects **long-run average (TTC-like) PDs** for capital, with separate stress testing to capture cyclical risk.
* IFRS 9 often uses more **PIT-style PDs with macroeconomic scenarios** to capture current and forecast conditions.
* Your models can be positioned as:

  * **TTC-ish PD** for Basel capital,
  * **PIT PD curves** for IFRS 9 ECL.`
      },
      {
        id: "33",
        title: "Segmentation & pooling for PD/LGD/EAD",
        content: `* Regulators expect exposures to be grouped into **homogeneous pools** where risk is similar:

  * By product (housing, auto, personal)
  * By collateral type (secured vs unsecured)
  * By customer type (retail vs SME vs corporate)
  * By geography or other risk drivers.
* Good segmentation:

  * Improves model performance and interpretation.
  * Ensures backtesting and monitoring reflect real differences in behaviour.
* IFRS 9 also requires **“groups of financial assets with similar risk characteristics”** for collective ECL measurement.`
      },
      {
        id: "34",
        title: "How PD/LGD/EAD drive Risk-Weighted Assets (RWA)",
        content: `* Under the **IRB approach**, banks plug **PD, LGD, EAD and Maturity (M)** into regulatory **risk-weight functions** to compute **RWA for credit risk**.
* Under the **Standardised Approach**, RWA are based on **risk weights assigned to exposure classes** (sovereign, bank, corporate, retail, etc.) using ratings / regulatory tables – PD/LGD/EAD are not explicit.
* For CapAd:

  * In **standardised banks**, PD/LGD/EAD still exist for internal risk & ECL but not used directly for RWA.
  * In **IRB banks**, PD/LGD/EAD are central to both **capital** and **portfolio steering**.`
      },
      {
        id: "35",
        title: "PD/LGD/EAD and risk-based pricing",
        content: `* Risk-based pricing aims to ensure each loan covers:

  * **Expected Loss (EL)**
  * **Cost of funding & operating expenses**
  * **Cost of capital for UL**
  * Target **profit margin**.
* A simple RAROC-style logic:

  * Higher **PD/LGD/EAD** ⇒ higher **EL** ⇒ loan needs **higher interest rate / fees** or more collateral.
  * Very high-risk deals may be **rejected**, not repriced.
* In interviews, you can say:

  > “Our PD/LGD/EAD estimates feed not just capital and provisions, but also **risk-based pricing and limit setting**.”`
      },
      {
        id: "36",
        title: "Numerically linking PD, LGD, EAD and EL",
        content: `* Example loan:

  * EAD = ₹10 crore
  * PD (1-year) = 2%
  * LGD = 40%
* Then:

  * $$EL = 0.02 \\times 0.40 \\times 10\\text{ cr} = 0.08\\text{ cr} = ₹8\\text{ lakh}$$
* Interpretation:

  * On a large portfolio of similar loans, you’d expect to lose **₹8 lakh per year on average** per loan.
  * Pricing and provisioning must at least cover this EL (plus costs and capital charge).`
      },
      {
        id: "37",
        title: "How PD/LGD/EAD feed into IFRS 9 ECL (high level)",
        content: `* For a Stage 1 exposure (12-month ECL):
  $$ECL_{12m} = \\sum_{\\text{scenarios}} w_s \\times PD_{12m,s} \\times LGD_s \\times EAD_s \\times DF$$
* For Stage 2/3 (lifetime ECL):
  $$ECL_{\\text{life}} = \\sum_{t=1}^{T} \\sum_{s} w_s \\times PD_{t,s} \\times LGD_{t,s} \\times EAD_{t,s} \\times DF_{t,s}$$
* Where:

  * $w_s$ = scenario weight
  * $DF$ = discount factor using effective interest rate.
* Same PD/LGD/EAD machinery you learn for Basel is re-used with **different horizon + discounting + scenarios**.`
      },
      {
        id: "38",
        title: "Putting it together: EL, ECL and Capital",
        content: `* **PD/LGD/EAD models** give you the **shape of credit risk** at borrower & portfolio level.
* From these:

  * You calculate **EL = PD×LGD×EAD** for capital frameworks (Basel IRB, CapAd).
  * You calculate **ECL** (12-month and lifetime) for IFRS 9 provisions.
* Then:

  * **Provisions (ECL)** + **pricing** cover **Expected Loss**.
  * **Regulatory capital (Basel III, ICAAP)** covers **Unexpected Loss** over stress scenarios.
* CapAd sits on top of all this to:

  * Turn exposures + PD/LGD/EAD into **RWA and capital ratios**,
  * Ensure the bank meets **RBI Basel III requirements**.`
      }
    ]
  },
  {
    id: "3",
    title: "PD / LGD / EAD Modelling & Scoring",
    cards: [
      {
        id: "39",
        title: "What is a credit scorecard?",
        content: `* A **credit scorecard** is a statistical model that assigns a **numeric score** to each borrower or application, summarising their **likelihood of default**.
* In practice, it’s usually built on **historical data** and predicts a **binary outcome** (default / non-default).
* The score is later converted into **PD bands or rating grades**, which are then used for:

  * Approvals / rejections
  * Limit setting
  * Pricing
  * Capital & ECL calculations.`
      },
      {
        id: "40",
        title: "PD model vs LGD/EAD models (roles)",
        content: `* **PD models**: predict **probability of default** over a defined horizon (typically 1 year for Basel).
* **LGD models**: estimate **percentage loss** if default occurs (after recoveries, collateral, costs).
* **EAD models**: estimate **exposure at the moment of default**, especially important for undrawn limits and revolving products.
* Together, they feed **EL = PD × LGD × EAD** for capital and ECL frameworks.`
      },
      {
        id: "41",
        title: "Typical dataset design for a PD scorecard",
        content: `A standard PD modelling dataset has:

1. **Observation date**: when you take a snapshot of borrower characteristics (X variables).
2. **Performance window**: e.g. **12 months** after observation where you check if default (event) happened.
3. **Target (Y)**:

   * Default = 0
   * Non-default = 1 (your convention)
4. **Curing rule**: how you treat temporary delinquencies that cure (e.g. only count 90+ DPD or write-off as default).

This “X at time t → Y over next 12 months” structure is what links **features** to **future default risk**.`
      },
      {
        id: "42",
        title: "Event / non-event definitions in your convention",
        content: `With your coding:

* **Event (bad)** = **default = 0**

  * 90+ DPD or “unlikely to pay” events per Basel / internal policy.
* **Non-event (good)** = **non-default = 1**

  * No default in the performance window.
* When building PD models and scorecards, you’ll:

  * Use **0/1** as the dependent variable,
  * Often need event rates that are realistic for the portfolio (may use down/up-sampling carefully, then adjust calibration).`
      },
      {
        id: "43",
        title: "Sample period & minimum data history (Basel view)",
        content: `* Basel IRB standards expect **multi-year history**:

  * Typically **at least 5 years of data** for PD estimation;
  * For LGD/EAD in non-retail portfolios, **at least 7 years** of relevant data, ideally covering a full economic cycle.
* If less data is available, banks must be **more conservative** in estimates.
* In interviews you can say:

  > “For serious regulatory PD/LGD/EAD models, regulators expect at least 5–7 years of default and recovery data, including downturn periods.”`
      },
      {
        id: "44",
        title: "Train / test split and out-of-time (OOT) testing",
        content: `* You usually split data into:

  * **Development (train)** sample → used to fit the model.
  * **Validation / test** sample → used to independently check performance.
* A **random** split is common, but in credit risk an **out-of-time** (OOT) split is very important:

  * Train on earlier years (e.g. 2018–2021),
  * Test on a later year (e.g. 2022).
* OOT performance tests whether the model generalises to **new periods**, not just memorised the training sample.`
      },
      {
        id: "45",
        title: "Feature engineering basics for PD models",
        content: `Common types of features:

* **Customer characteristics**: age, income, employment type, bureau score, vintage.
* **Behavioural variables** (for existing customers): utilisation %, delinquencies, payment patterns.
* **Loan attributes**: loan amount, tenor, LTV, product type, collateral.
* **Derived ratios**: income-to-EMI, utilisation ratios, DTI, etc.

Key practices:

* Handle missing values and outliers consistently.
* Use **business logic** + data exploration to choose and transform variables before modelling.`
      },
      {
        id: "46",
        title: "Weight of Evidence (WoE) transformation",
        content: `* **WoE** is a transformation often used in credit scorecards; it measures how well a **bin of a variable** separates goods vs bads.
* For each bin *i*:
  $$\\text{WoE}_i = \\ln\\left(\\frac{% \\text{Non-defaults in bin } i}{% \\text{Defaults in bin } i}\\right)$$
* Positive WoE → bin has relatively **more goods than bads**.
* Negative WoE → bin has relatively **more bads than goods**.
* Benefits:

  * Handles outliers and missing values well.
  * Enforces **monotonic relationships** with log-odds, which suits logistic regression.`
      },
      {
        id: "47",
        title: "Information Value (IV) for variable selection",
        content: `* **Information Value (IV)** summarises a variable’s **predictive power** for separating good vs bad.
* Formula (over bins i):
  $$IV = \\sum_i (\\text{DistGood}_i - \\text{DistBad}_i) \\times WoE_i$$
* Rules of thumb (industry practice):

  * IV < 0.02 → not predictive
  * 0.02–0.1 → weak
  * 0.1–0.3 → medium
  * 0.3–0.5 → strong
  * > 0.5 → suspicious (may indicate leakage / data issues).
* Typically used to **screen variables** before building the PD model.`
      },
      {
        id: "48",
        title: "Why logistic regression is the industry standard for PD",
        content: `* **Logistic regression** is the classic method for **binary outcomes** like default vs non-default.
* Reasons regulators and banks like it:

  * Produces **probabilities** between 0 and 1.
  * Coefficients are **interpretable** (impact on log-odds).
  * Works well with **WoE-transformed** variables.
  * Transparent and auditable – aligns with Basel / EBA expectations for explainable models.
* More complex ML models exist, but logistic regression remains the **gold standard** for regulated credit scoring.`
      },
      {
        id: "49",
        title: "Logistic regression equation (with your coding)",
        content: `* With target **Y** = 1 for non-default, 0 for default, logistic regression models:
  $$P(Y=1 | X) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X_1 + \\dots + \\beta_k X_k)}}$$
* Taking log-odds:
  $$\\log\\left(\\frac{P(Y=1)}{1 - P(Y=1)}\\right) = \\beta_0 + \\sum \\beta_j X_j$$
* If you use WoE variables:

  * Each **β × WoE** term adds or subtracts risk in a way that is easier to interpret and bin-by-bin explain.`
      },
      {
        id: "50",
        title: "Interpreting logistic regression coefficients (risk sense)",
        content: `* With **Y=1 = non-default**:

  * A **positive β** for a variable increases the log-odds of *non-default* → **less risky**.
  * A **negative β** decreases the log-odds of non-default → **more risky**.
* Example:

  * If \`β_income\` > 0 → higher income associated with **lower default risk**.
  * If \`β_high_LTV\` < 0 → high LTV associated with **higher default risk**.
* Because WoE already encodes “more good vs more bad”, coefficients often just scale that relationship.`
      },
      {
        id: "51",
        title: "PD calibration: aligning to long-run default rates",
        content: `* After fitting the model, you may need to **calibrate probabilities** so that:

  * Average predicted PD matches **long-run observed default rates** per segment or rating grade.
* Regulators (Basel & EBA) expect:

  * PDs to reflect a **long-run average** of 1-year default rates.
  * Calibration that uses **representative data from good and bad economic periods**.
* Techniques: intercept adjustment, scaling factors, PD curve fitting.`
      },
      {
        id: "52",
        title: "From score to PD and rating grades",
        content: `* Many banks transform the logistic model output into:

  1. A **score** (e.g. 300–900 scale)
  2. Then map the score to **PD bands / rating grades**.
* Typical design:

  * Choose **“points to double odds”** (e.g. 20 points doubles odds of being good).
  * Define anchor point: odds 20:1 at score 600, etc.
* Rating grades then group ranges of PD:

  * Grade 1: PD ≤ 0.1%
  * Grade 2: 0.1–0.3%
  * … etc.
* Those PDs feed directly into **RWA, capital and ECL** calculations.`
      },
      {
        id: "53",
        title: "Cut-offs, strategies and overrides",
        content: `* Once you have PD / scores, **business rules** define how they’re used:

  * **Automatic approval zone** (low PD)
  * **Manual review zone**
  * **Automatic decline zone** (high PD).
* You can add **strategy overlays**:

  * Higher pricing, lower limits, extra collateral for medium risk.
* Governance:

  * All rules, thresholds and **overrides** (where staff disagree with the model) must be documented and monitored – regulators look for this.`
      },
      {
        id: "54",
        title: "Reject inference (high-level idea)",
        content: `* In application scorecards, you only observe **defaults/non-defaults for accepted customers**.
* **Rejected applications** don’t have performance data → sample is **biased**.
* **Reject inference** methods try to adjust for this by:

  * Extrapolating from accepted population,
  * Using bureau outcomes, or
  * Weighting techniques.
* It’s a nuanced topic; regulators expect any reject inference technique to be **transparent, documented and validated**, not a black box.`
      },
      {
        id: "55",
        title: "LGD modelling basics",
        content: `* **LGD models** use data from **defaulted exposures**:

  * Cashflows recovered (collateral sale, guarantees, payments)
  * Recovery costs
  * Time to recovery (discounting).
* Steps:

  1. Define **economic loss** = discounted shortfall vs EAD.
  2. Segment exposures (secured/unsecured, product type, region, etc.).
  3. Fit models (regression, beta regression, decision trees, etc.) to estimate LGD % by segment.
* Basel expects **downturn LGD** – calibrated to be appropriate in adverse conditions, not just average.`
      },
      {
        id: "56",
        title: "EAD and Credit Conversion Factor (CCF) modelling",
        content: `* For term loans, **EAD** at default is often close to **current outstanding** plus accrued interest.
* For revolving / undrawn limits, customers frequently **draw more** before default:

  * EAD > current drawn amount.
* Modelling approach: estimate **Credit Conversion Factor (CCF)**:
  $$CCF = \\frac{EAD - \\text{current drawn amount}}{\\text{undrawn limit}}$$
* Steps:

  1. Calculate realised CCFs for historical defaults.
  2. Segment by product, customer type, utilisation bands, etc.
  3. Fit models (regression / trees) to predict CCF.
* Regulators require **at least 5–7 years** of relevant data, including downturn periods, for robust EAD/CCF estimates.`
      },
      {
        id: "57",
        title: "Documentation & use test for PD/LGD/EAD models",
        content: `* Basel and EBA guidelines emphasise that internal models must be:

  * **Well documented** (data, methodology, assumptions, limitations).
  * Subject to **independent validation and periodic review**.
  * Actually **used in credit decisions, pricing, limit setting**, not only for regulatory capital (the “use test”).
* For this role, you can position yourself as someone who:

  * Understands both the **technical model** and the **business usage**,
  * Can help ensure the implementation in CapAd is **aligned with regulations and documentation**.`
      }
    ]
  },
  {
    id: "4",
    title: "Model Validation, Monitoring & Backtesting",
    cards: [
      {
        id: "58",
        title: "Why model validation is mandatory",
        content: `* **SR 11-7** (US) and **RBI / Basel guidelines** require all risk models to undergo **independent validation**.
* Validation ensures:

  * The model is **conceptually sound**.
  * It performs well on **unseen data**.
  * It is **implemented correctly** in systems.
  * Its **limitations** are understood and managed.
* Validation is a **“challenge” process** performed by a team independent of model developers.`
      },
      {
        id: "59",
        title: "Confusion Matrix (for binary classification)",
        content: `* A table comparing **Predicted** vs **Actual** outcomes:

  * **True Positive (TP)**: Predicted Good, Actual Good.
  * **True Negative (TN)**: Predicted Bad, Actual Bad.
  * **False Positive (FP)**: Predicted Good, Actual Bad (Type II error – costly for banks!).
  * **False Negative (FN)**: Predicted Bad, Actual Good (Type I error – lost business).
* (Note: Definitions of Positive/Negative depend on whether 1=Default or 1=Non-Default; always clarify convention).`
      },
      {
        id: "60",
        title: "Accuracy, Sensitivity (Recall), Specificity",
        content: `* **Accuracy**: (TP + TN) / Total. (Can be misleading if classes are imbalanced, e.g. 98% goods).
* **Sensitivity (Recall)**: TP / (TP + FN) → how many actual goods did we catch?
* **Specificity**: TN / (TN + FP) → how many actual bads did we catch?
* In credit risk, we care deeply about **ranking** (separating goods from bads) rather than just hard classification accuracy.`
      },
      {
        id: "61",
        title: "ROC Curve and AUC (Area Under Curve)",
        content: `* **ROC Curve**: Plot of **Sensitivity (True Positive Rate)** vs **1 – Specificity (False Positive Rate)** at all possible cut-offs.
* **AUC (Area Under ROC Curve)**:

  * Measures **discriminatory power** (ability to rank order risk).
  * Range: 0.5 (random guess) to 1.0 (perfect).
  * Typical credit risk AUCs: 0.65–0.85 depending on segment.
* AUC is the **most common metric** for comparing PD models.`
      },
      {
        id: "62",
        title: "Gini Coefficient (in credit scoring context)",
        content: `* **Gini** is directly related to AUC:
  $$Gini = 2 \\times AUC - 1$$
* Range: 0 (random) to 1 (perfect).
* Interpretation:

  * Gini of 40% (AUC 0.70) is decent.
  * Gini of 60%+ (AUC 0.80+) is very strong.
* Used extensively in **retail credit scoring** to summarise power.`
      },
      {
        id: "63",
        title: "KS Statistic (Kolmogorov-Smirnov)",
        content: `* **KS** measures the **maximum separation** between the cumulative distribution of **Goods** and **Bads**.
* Formula:
  $$KS = \\max | \\text{Cum\\%Good}(s) - \\text{Cum\\%Bad}(s) |$$
* Interpretation:

  * Higher KS → better separation.
  * Also tells you **where** (at what score) the model separates best.
* Common in India and US for scorecard monitoring.`
      },
      {
        id: "64",
        title: "Population Stability Index (PSI)",
        content: `* **PSI** measures **distributional shift** in the population (e.g. scores or variables) between **development (expected)** and **current (actual)** samples.
* Formula:
  $$PSI = \\sum (\\%\\text{Actual}_i - \\%\\text{Expected}_i) \\times \\ln\\left(\\frac{\\%\\text{Actual}_i}{\\%\\text{Expected}_i}\\right)$$
* Rules of thumb:

  * PSI < 0.1 → stable (green).
  * 0.1–0.25 → minor shift (amber).
  * > 0.25 → significant shift (red) → model may need recalibration or rebuild.`
      },
      {
        id: "65",
        title: "Characteristic Stability Index (CSI)",
        content: `* **CSI** is just **PSI applied to a specific input variable** (characteristic).
* Used to diagnose **why** the model score shifted.
* Example:

  * If Score PSI is high (red), check CSI for “Income” or “Bureau Score”.
  * If CSI for “Income” is high, maybe the applicant pool has become wealthier or poorer.`
      },
      {
        id: "66",
        title: "Backtesting: what is it?",
        content: `* **Backtesting** compares **model predictions** (ex-ante) with **actual outcomes** (ex-post).
* For PD models:

  * Compare **Predicted PD** vs **Realised Default Rate (DR)** per grade.
* For LGD models:

  * Compare **Estimated LGD** vs **Realised Loss Rate**.
* Basel requires annual backtesting to demonstrate that capital estimates are accurate or conservative.`
      },
      {
        id: "67",
        title: "Hosmer-Lemeshow test (calibration)",
        content: `* A statistical test to check if **predicted probabilities match observed event rates** across subgroups (deciles).
* Null hypothesis: Model is well calibrated.
* If p-value is low (e.g. < 0.05), the model **fails calibration** (predictions deviate significantly from actuals).
* Often used alongside visual checks (calibration plots).`
      },
      {
        id: "68",
        title: "Binomial test (traffic lights) for PD backtesting",
        content: `* Basel regulators often use a **Binomial test** to check if realised defaults are within a confidence interval of the PD.
* **Green zone**: Realised DR $\\le$ PD (or slightly above).
* **Amber zone**: Realised DR > PD, but not statistically extreme.
* **Red zone**: Realised DR $\\gg$ PD (statistically significant failure).
* Red zone implies **underestimation of risk** → requires model fix or capital add-on.`
      },
      {
        id: "69",
        title: "Drift: Concept vs Data drift",
        content: `* **Data drift**: The input data distribution changes (e.g. younger applicants, lower incomes). Detected by **PSI/CSI**.
* **Concept drift**: The relationship between X and Y changes (e.g. high income no longer predicts low risk due to a tech crisis). Detected by **performance drop (lower AUC, calibration failure)**.
* Monitoring dashboards must track **both**.`
      },
      {
        id: "70",
        title: "Overfitting vs Underfitting in credit models",
        content: `* **Overfitting**: Model learns noise in training data.
  * Symptom: High Train AUC, Low Test/OOT AUC.
* **Underfitting**: Model is too simple to capture patterns.
  * Symptom: Low AUC on both Train and Test.
* Validation checks the **gap between Train and Test/OOT** performance to flag overfitting.`
      },
      {
        id: "71",
        title: "Benchmarking (Challenger models)",
        content: `* Validators often build a **challenger model** (e.g. using Random Forest or just different variables) to compare with the production model.
* If Challenger AUC >> Production Model AUC, it suggests the production model is **sub-optimal** and leaves predictive power on the table.`
      },
      {
        id: "72",
        title: "Sensitivity analysis",
        content: `* Testing how much the model output changes when **inputs change**.
* Example:

  * If “Income” drops by 10%, how much does PD rise?
  * If “LTV” increases by 10%, how much does LGD rise?
* Ensures the model behaves **logically** (monotonicity checks) and isn’t overly sensitive to small data errors.`
      },
      {
        id: "73",
        title: "Model inventory & tiering",
        content: `* Banks maintain a **Model Inventory** of all models (PD, LGD, pricing, marketing, etc.).
* Models are **tiered** based on materiality (risk exposure, P&L impact):

  * **Tier 1 (High)**: Regulatory capital, material provisioning, major pricing models. Require strictest validation.
  * **Tier 2/3 (Lower)**: Internal reporting, minor portfolios. Lighter validation.
* CapAd systems rely on Tier 1 models.`
      },
      {
        id: "74",
        title: "Ongoing monitoring reports",
        content: `* Once a model is live, a quarterly/monthly **monitoring report** tracks:

  * **Stability**: PSI for score and key variables.
  * **Performance**: Gini/AUC, KS.
  * **Calibration**: Predicted vs Actual (Backtesting).
  * **Overrides**: % of applications where business overruled the model.
* Significant deterioration triggers **re-development** or **re-calibration**.`
      },
      {
        id: "75",
        title: "Validation findings: Findings vs Observations",
        content: `* **Findings**: Material issues that **must be fixed** (e.g. coding error, conceptual flaw, failed backtesting). Can block go-live.
* **Observations** / Recommendations: Suggestions for improvement (e.g. better documentation, try a new variable next time). Do not block use.
* Validators issue a **Validation Report** with a final rating (Approved, Approved with Conditions, Not Approved).`
      },
      {
        id: "76",
        title: "How validation connects to CapAd",
        content: `* You cannot plug a PD model into CapAd for regulatory capital unless it is **validated and approved**.
* CapAd implementation teams need the **Validation Report** to confirm:

  * Which version of the model to use.
  * Any **restrictions** or **overlays** required (e.g. “add 5% buffer to PDs”).
* So validation is the **gatekeeper** before models enter the production capital engine.`
      }
    ]
  },
  {
    id: "5",
    title: "Basel III Capital Framework (RBI Master Circular focus)",
    cards: [
      {
        id: "76",
        title: "What is Basel III trying to achieve?",
        content: `* **Basel III** is an international regulatory framework that sets **minimum standards for capital, leverage and liquidity** so banks can absorb shocks and avoid failures.
* It was introduced after the **2008 global financial crisis** to fix weaknesses in earlier Basel rules.
* Key ideas:

  * Improve **quality and quantity** of capital (more CET1).
  * Add **buffers** on top of minima.
  * Introduce **leverage** and **liquidity** standards (LCR, NSFR).
* For you: CapAd is basically the **engine that turns this Basel III rulebook into actual numbers** for Indian banks.`
      },
      {
        id: "77",
        title: "The three pillars of the Basel framework",
        content: `Basel II/III are built on **three pillars**:

1. **Pillar 1 – Minimum capital requirements**

   * Quantitative rules for **capital ratios**, based on **RWA** for
     * credit risk
     * market risk
     * operational risk.

2. **Pillar 2 – Supervisory review (ICAAP/SREP)**

   * Banks must run an **Internal Capital Adequacy Assessment Process (ICAAP)** to ensure they hold enough capital for **all material risks** (including IRRBB, concentration, etc.).
   * Supervisors review and may require **extra capital**.

3. **Pillar 3 – Market discipline**

   * Disclosure requirements (Basel III / RBI “Pillar 3 disclosures”) so markets can judge a bank’s **capital and risk profile**.

Your role: mostly **Pillar 1 (CapAd)** + feeding **Pillar 2 (ICAAP)** + understanding **Pillar 3 templates**.`
      },
      {
        id: "78",
        title: "Structure of regulatory capital: CET1, AT1, Tier 2",
        content: `Under Basel III, regulatory capital has three buckets:

1. **Common Equity Tier 1 (CET1)**

   * Highest-quality capital: **ordinary shares, share premium, retained earnings, reserves**, minus regulatory deductions (goodwill, certain intangibles, etc.).

2. **Additional Tier 1 (AT1)**

   * Perpetual instruments with **discretionary coupons** and clear **loss-absorption features** (write-down or conversion).

3. **Tier 2**

   * Subordinated debt and certain loan-loss provisions; has a **lower loss-absorption quality** and is subject to limits/maturity rules.

**Total capital = Tier 1 (CET1 + AT1) + Tier 2.**`
      },
      {
        id: "79",
        title: "CET1 ratio (core capital ratio)",
        content: `* **CET1 ratio** =
  $$\\frac{\\text{CET1 capital}}{\\text{Risk-Weighted Assets (RWA)}}$$
* CET1 is the **first line of defence** against losses; regulators focus very heavily on it.
* Globally under Basel III:

  * Minimum **CET1** = 4.5% of RWA, plus buffers.
* In India (RBI implementation), minimum CET1 is **stricter** (see next card).`
      },
      {
        id: "80",
        title: "RBI minimum capital ratios (India vs Basel)",
        content: `* Global Basel III minimums (without buffers):

  * **CET1**: 4.5%
  * **Tier 1**: 6%
  * **Total capital**: 8%

* **RBI is more conservative.** Multiple sources (Basel assessment & Indian commentary) note that India requires:

  * **CET1 ≥ 5.5%**
  * **Tier 1 ≥ 7.0%**
  * **Total capital (CRAR) ≥ 9.0%**

This is the **hard Basel III floor in India**, before adding buffers like CCB.`
      },
      {
        id: "81",
        title: "Capital Conservation Buffer (CCB) in India",
        content: `* Basel III introduces a **Capital Conservation Buffer (CCB)** of **2.5% of RWA**, to be held **in CET1** on top of the minimum.
* In India, once fully phased in, this means effective **“target” minima** become:

  * **CET1 requirement**: 5.5% + 2.5% = **8.0%**
  * **Total capital (CRAR)**: 9.0% + 2.5% = **11.5%**
* If a bank’s CET1 falls into the buffer range, **constraints on dividends and bonuses** kick in until capital is rebuilt.
* When CapAd runs capital ratios, it typically reports **both**:

  * Regulatory minimum, and
  * Position relative to buffers.`
      },
      {
        id: "82",
        title: "Countercyclical Capital Buffer (CCyB)",
        content: `* The **Countercyclical Buffer** is an additional **0–2.5% of RWA**, again in **CET1**, activated when **credit growth is excessive** and systemic risk is building.
* National authorities (like RBI) can **turn it on/off** per macro conditions.
* For implementation:

  * CapAd needs to support **jurisdiction-specific CCyB rates** and reflect them in **total CET1 requirements**.
* For your role: knowing **CCB + CCyB = extra CET1 on top of 5.5%** is enough.`
      },
      {
        id: "83",
        title: "CRAR / capital ratio formula (India)",
        content: `* In India, banks must maintain a minimum **Capital to Risk-Weighted Assets Ratio (CRAR)** of **9%** on an ongoing basis.
* Formula:
  $$\\text{CRAR (Total Capital Ratio)} = \\frac{\\text{Regulatory capital (Tier 1 + Tier 2)}}{\\text{RWA}}$$
* There are **three standard ratios** that CapAd will compute:

  * **CET1 ratio** = CET1 / RWA
  * **Tier 1 ratio** = (CET1 + AT1) / RWA
  * **Total capital ratio (CRAR)** = (Tier 1 + Tier 2) / RWA
* Your job in this role is to **understand how data & RWA calculations feed these ratios** and how they map to RBI templates.`
      },
      {
        id: "84",
        title: "Approaches for credit risk capital: SA vs IRB",
        content: `Basel gives multiple options for computing **capital for credit risk**, with increasing sophistication:

1. **Standardised Approach (SA)**

   * Uses **regulatory risk weights** by **exposure class** and **external rating**.
   * No explicit PD/LGD/EAD in the formula (though bank may use them internally).

2. **Foundation IRB (F-IRB)**

   * Bank estimates **PD**; **LGD/EAD** given by regulator tables.

3. **Advanced IRB (A-IRB)**

   * Bank estimates **PD, LGD, EAD, Maturity (M)**; plugs into Basel risk-weight functions.

India: RBI requires all commercial banks (except small categories) to **at least adopt the Standardised Approach**; IRB is for more advanced banks with supervisor approval.`
      },
      {
        id: "85",
        title: "How the Standardised Approach (SA) for credit risk works",
        content: `Under **SA**, the bank:

1. Classifies exposures into **asset classes**:

   * Sovereigns, banks, corporates, retail, residential mortgages, etc.
2. For each exposure, determines a **risk weight**:

   * Based on **external rating**, exposure type, collateral/LTV, and RBI rules.
3. Computes **RWA** as:

   * $$RWA = \\sum (\\text{Exposure value} \\times \\text{Risk Weight})$$
4. Applies **9% capital** (plus buffers) to total RWA to get required capital.

CapAd’s job in SA banks is to **encode these RBI risk-weight rules**, read bank data, and produce **RWA & capital requirements** consistently.`
      },
      {
        id: "86",
        title: "Internal Ratings-Based (IRB) approach: where PD/LGD/EAD feed RWA",
        content: `* Under **IRB**, a bank’s **internal estimates** of PD, LGD, EAD and M (maturity) feed **Basel risk-weight formulas** to produce RWA.
* Advantages:

  * More **risk-sensitive**; capital reflects portfolio quality better.
* Requirements:

  * Strong internal **rating systems**, long data history, robust validation & governance.
* For you:

  * Even if your immediate clients use **SA**, IRB knowledge helps you understand **how PD/LGD/EAD models tie directly into RWA & capital** in advanced setups.`
      },
      {
        id: "87",
        title: "Pillar 1 risk types and their capital charges",
        content: `Under Basel III / RBI Master Circular, **Pillar 1** capital covers three main risk types:

1. **Credit risk**

   * SA or IRB.
   * Dominant component for most Indian banks.

2. **Market risk**

   * Trading book exposures (interest rate, FX, equity, commodity).
   * Standardised or internal model approaches.

3. **Operational risk**

   * Approaches like **Basic Indicator Approach (BIA)** or **Standardised Approach**, based on **gross income** proxies.

CapAd aggregates **RWA_credit + RWA_market + RWA_operational** into **Total RWA** to derive capital ratios.`
      },
      {
        id: "88",
        title: "Leverage ratio (Basel III vs RBI)",
        content: `* Basel III introduced the **Leverage Ratio** as a **non-risk-based backstop**, defined as:
  $$\\text{Leverage Ratio} = \\frac{\\text{Tier 1 capital}}{\\text{Total exposure}}$$
* Global Basel minimum: **3%**.
* RBI, again more conservative, has set:

  * **4%** for **Domestic Systemically Important Banks (D-SIBs)**
  * **3.5%** for **other banks**
* For CapAd, leverage ratio is computed alongside risk-based ratios so management & RBI see **both views of capital adequacy**.`
      },
      {
        id: "89",
        title: "How CapAd uses RWA and capital definitions in practice",
        content: `In a typical **CapAd run** for an Indian bank:

1. **Data ingestion**

   * Loans, investments, off-balance sheet items, collateral, ratings, PD/LGD/EAD (if IRB).

2. **Exposure classification & RWA**

   * Sort into **Basel/RBI exposure classes**.
   * Apply **SA risk weights** or **IRB formulas** to compute **RWA_credit**.
   * Add **RWA_market** and **RWA_operational** from relevant modules.

3. **Capital & ratios**

   * Load CET1, AT1, Tier 2 from finance / regulatory reporting.
   * Compute **CET1 / RWA**, **Tier 1 / RWA**, **Total capital / RWA**, and **Leverage ratio**.

4. **Check vs minima & buffers**

   * Compare against **5.5 / 7 / 9** and buffer-adjusted targets (e.g. 8 / 11.5).

Your job in this role: make sure **all these steps are correctly configured, documented, and explainable** to clients and regulators.`
      },
      {
        id: "90",
        title: "Where credit risk models meet Basel capital",
        content: `Tie-back to earlier modules:

* **PD/LGD/EAD models** (Modules 2–3) give **risk parameters**.
* Under **IRB**:

  * These are direct inputs to **Basel risk-weight formulas** → **RWA_credit** → capital requirement.
* Under **SA** (most Indian banks now):

  * PD/LGD/EAD aren’t in the **Pillar 1 formula**, but:
    * Drive **IFRS 9 ECL**,
    * Feed **ICAAP, stress testing, pricing and limit-setting**,
    * May be used in **Pillar 2 add-ons**.

So in interviews you can say:

> “CapAd is the Basel engine, and PD/LGD/EAD models plug either **directly (IRB)** or **indirectly (SA + ICAAP)** into the capital story.”`
      },
      {
        id: "91",
        title: "Pillar 2 / ICAAP and CapAd",
        content: `* RBI requires banks to run an **ICAAP** under Pillar 2, to assess capital adequacy for **all material risks** and under **stress scenarios**.
* Inputs typically include:

  * **CapAd outputs** (current capital ratios & RWA breakdown).
  * **Stress tests** on PD/LGD/EAD, NPLs, and macro variables.
  * **ALM analytics**: IRRBB (ΔNII, ΔEVE), LCR/NSFR, liquidity stress results.
* ICAAP then proposes:

  * **Internal capital targets** (often above regulatory minima).
  * **Capital planning** and contingency actions.

Your Surya role sits right at the intersection of **CapAd engine ↔ ICAAP story**.`
      },
      {
        id: "92",
        title: "Pillar 3 disclosures and your role",
        content: `* Basel III / RBI require banks to publish **Pillar 3 disclosures** on:

  * Capital structure and capital ratios
  * RWA by risk type and portfolio
  * Risk management processes.
* These are usually detailed **PDF tables** published quarterly/half-yearly.
* CapAd often generates:

  * **Underlying numbers** for Pillar 3 templates (RWA, capital).
  * **Breakdowns** by portfolio / region / product.`
      },
      {
        id: "5A-1",
        title: "Under the Standardised Approach in India, what does a “risk weight” actually do?",
        content: `Risk weight (RW) is the percentage applied to a bank’s exposure to convert it into **Risk-Weighted Assets (RWA)**.
For example, a ₹100 crore exposure with RW 50% → RWA = ₹50 crore.
Capital required ≈ RWA × minimum capital ratio (e.g. 11.5% incl. CCB).
RBI’s Basel III Master Circular gives **category-wise risk weights** for each exposure class (sovereign, banks, corporates, retail, housing, etc.).`
      },
      {
        id: "5A-2",
        title: "What are the key risk weights for domestic sovereign & related exposures under RBI SA?",
        content: `* **Central Government** – all fund & non-fund claims: **0% RW**.
* **Central Government–guaranteed claims**: **0% RW**.
* **Direct exposure to State Governments** (loans, investments in state govt securities): **0% RW**.
* **State Government–guaranteed claims**: **20% RW**.
* Claims on **RBI, DICGC, CGTMSE, CRGFTLIH, NCGTC schemes** *backed by explicit Central Govt guarantee*: same RW as central govt → effectively **0% RW**.
* Claims on **ECGC**: **20% RW**.`
      },
      {
        id: "5A-3",
        title: "How are exposures guaranteed by CGTMSE / CRGFTLIH / NCGTC treated for RW?",
        content: `* If guarantee meets RBI’s CRM conditions (direct, explicit, irrevocable, unconditional) and scheme rules, the **guaranteed portion** gets **0% RW**.
* Any **first-loss piece** to be absorbed by the bank (MLI) in a portfolio guarantee is **deducted from CET1**; only the *residual* exposure gets the 0% RW on the guaranteed part.
* The **unguaranteed portion** gets RW as per the **underlying counterparty** (e.g. MSME borrower).`
      },
      {
        id: "5A-4",
        title: "What are the risk weights for claims on foreign sovereigns / foreign central banks?",
        content: `RBI follows **rating-based** RWs (Table 1):

| Rating (S&P/Fitch) | AAA–AA | A   | BBB | BB–B | Below B | Unrated |
| ------------------ | ------ | --- | --- | ---- | ------- | ------- |
| **Risk weight**    | 0%     | 20% | 50% | 100% | 150%    | 100%    |

Special case:

* If an overseas branch of an Indian bank holds a **local-currency claim on that foreign sovereign/CB** funded by resources in the same currency, RW can be **0%**, subject to host rules.`
      },
      {
        id: "5A-5",
        title: "How are exposures to BIS, IMF and key MDBs risk-weighted in India?",
        content: `Claims on **BIS, IMF and certain BCBS-recognised MDBs** (e.g. World Bank IBRD/IFC, ADB, AfDB, EBRD, EIB, AIIB, etc.) are treated like claims on well-capitalised scheduled banks and get a **uniform 20% RW**.`
      },
      {
        id: "5A-6",
        title: "What is the practical interview-level picture for claims on banks (India + foreign) under SA?",
        content: `**a) Banks incorporated in India / foreign bank branches in India (Table 3)**

* RW depends on **investee bank’s CET1 + CCB level** and whether it’s capital instruments or “other claims”.
* For **well-capitalised scheduled banks** (meeting minimum CET1 + CCB):

  * Capital instruments: **125%** (or higher if rating says so).
  * **All other claims** (e.g. normal loans, deposits): **20% RW**.
* As the investee bank’s CET1+CCB falls below thresholds, RWs step up (e.g. 50%, 100%, 150%, 350%, or **full deduction** in worst case).

**b) Claims on foreign banks (Table 4)**

| Rating                 | AAA–AA | A   | BBB | BB–B | Below B | Unrated |
| ---------------------- | ------ | --- | --- | ---- | ------- | ------- |
| **RW (foreign banks)** | 20%    | 50% | 50% | 100% | 150%    | 50%     |

Special case: foreign-currency claims on a bank funded in same currency in that jurisdiction can get **20% RW** if that bank meets its minimum CRAR.`
      },
      {
        id: "5A-7",
        title: "What are the key risk weights for claims on corporates and NBFCs (long-term domestic)?",
        content: `For **corporates & NBFCs (except CICs)**, long-term claims are rating-based (Table 5 Part A):

| Domestic rating | AAA | AA | A  | BBB | BB & below | Unrated |
| --------------- | --- | -- | -- | --- | ---------- | ------- |
| **RW (%)**      | 20  | 30 | 50 | 100 | 150        | 100     |

Key points:

* **Unrated corporates/NBFCs** → generally **100% RW**.
* If **large aggregate exposure** from banking system (>₹100–200 cr) is unrated or lost rating, RW can be **150%**.
* Non-resident corporates: 20/50/100/150/100 based on international ratings (similar pattern).`
      },
      {
        id: "5A-8",
        title: "What is the Regulatory Retail Portfolio, and what risk weight does it get?",
        content: `If exposures meet *all* RBI conditions (orientation to individuals/small business, eligible products, sufficient granularity, and borrower-level exposure ≤ ₹7.5 crore), they qualify as **regulatory retail**.

* **Risk weight:** **75% RW** for this portfolio (standard, non-NPA).
* Certain items are explicitly **excluded** (e.g. securities investments, staff housing loans fully secured by superannuation + mortgage, consumer credit, capital market exposures, VCFs).

This 75% bucket is a big capital benefit → important for interviews.`
      },
      {
        id: "5A-9",
        title: "How are residential housing loans risk-weighted under RBI SA?",
        content: `For **individual housing loans fully secured by residential property**, RW depends mainly on **LTV and ticket size** (Table 7):

Typical pattern (post-rationalisation):

* LTV ≤80% → **35% RW**.
* LTV >80% and ≤90% → **50% RW**.
* Higher-value loans (e.g. above ₹75 lakh) often capped at **50% RW** at specified LTVs.
* Loans classified as **CRE-RH** (commercial real estate – residential housing) → **75% RW**.
* **CRE (pure commercial real estate)** → **100% RW**.

For interviews, remember:

> *Prime residential mortgages with reasonable LTVs ≈ 35–50% RW; CRE ≈ 100%.*`
      },
      {
        id: "5A-10",
        title: "How are Non-Performing Assets (NPAs) risk-weighted?",
        content: `For **unsecured portion of NPAs (non-residential)**, net of specific provisions:

* Specific provisions <20% of outstanding → **150% RW**.
* Provisions ≥20% and <50% → **100% RW**.
* Provisions ≥50% → **50% RW**.

For **NPAs secured by residential property** (qualifying housing loans):

* Default case: **100% RW** net of provisions.
* If specific provisions ≥20% and <50% → **75% RW** (net).
* If provisions ≥50% → **50% RW** (net).

High-level: *more provisioning → lower RW; no provisioning → very high RW*.`
      },
      {
        id: "5A-11",
        title: "What risk weights apply to consumer credit, credit cards, capital market exposures, and VCFs?",
        content: `RBI treats these as **higher-risk categories**:

* **Consumer credit exposure** (personal loans etc., *excluding* housing, education, vehicle, gold-secured): **125% RW**.
* **Microfinance loans** that are consumer-credit-like and not eligible for regulatory retail: **100% RW**.
* **Credit card receivables**: **150% RW** or higher if counterparty’s rating warrants it.
* **Capital market exposures** (CMEs): **125% RW** or higher of the two (125% vs RW as per rating).
* **Venture Capital Funds (VCFs)**: **150% RW**.

These are the classic “riskier” buckets → higher capital.`
      },
      {
        id: "5A-12",
        title: "How are staff loans and ‘other assets’ risk-weighted?",
        content: `* Loans to bank’s own staff **fully covered** by superannuation benefits and/or mortgage of flat/house → **20% RW**.
* Other loans to staff that qualify as regulatory retail → **75% RW**.
* **All other assets** not specifically covered elsewhere → **100% RW** (catch-all bucket).`
      },
      {
        id: "5A-13",
        title: "How are off-balance sheet items converted to credit equivalent using Credit Conversion Factors (CCFs)?",
        content: `For SA in India, RBI prescribes CCFs for different off-BS items (Table 8). Key ones:

* **Financial guarantees / direct credit substitutes** → typically **100% CCF** (treated like full on-BS exposure).
* **Other commitments**:

  * With certain drawdown (e.g. some take-out finance) → up to **100% CCF**.
  * Undrawn credit lines with original maturity:
    * Up to 1 year → **20% CCF**.
    * Over 1 year → **50% CCF**.
  * Commitments that are **unconditionally cancellable at any time** → **0% CCF** (subject to bank actually being able to cancel; else higher CCF in SREP).
* Special rule: for borrowers with **working capital limits ≥₹150 crore**, undrawn CC/OD limits get **20% CCF** even if cancellable.

After CCF, you apply **risk weight of the counterparty** on the credit equivalent amount.`
      },
      {
        id: "5A-14",
        title: "What’s a simple memory hack for Indian SA risk weights (credit risk) for interview?",
        content: `* **0%** → Central Govt, RBI, fully CG-guaranteed schemes (CGTMSE etc., subject to rules).
* **20%** → State Govt *guarantees*, ECGC, BIS/IMF/MDBs, well-capitalised bank exposures (other claims), some low-risk foreign sovereign/bank exposures.
* **35–50%** → Prime **residential housing loans** with good LTV.
* **75%** → Regulatory retail portfolio; CRE-RH; some staff loans.
* **100%** → Generic corporates (unrated), “other assets”, some NPAs with moderate provisioning, loans not in any special category.
* **125%** → Consumer credit, capital market exposures in some cases, certain NBFC capital instruments.
* **150%** → Sub-investment grade corporates, some NPAs with low provisions, VCFs, credit cards.
* **1250%** → Equity in some non-financial entities above 10% stake (very high risk).`
      }
    ]
  },
  {
    id: "6",
    title: "IFRS 9 / Ind AS 109 ECL & its Link to Basel",
    cards: [
      {
        id: "93",
        title: "IFRS 9 / Ind AS 109 vs “incurred loss” approach",
        content: `* Old world (IAS 39 / IRACP norms) = **incurred loss**: you booked provisions only when there was **objective evidence of impairment** (e.g. NPA).
* **IFRS 9 / Ind AS 109** introduced a **forward-looking Expected Credit Loss (ECL) model** – you start recognising expected losses **from day one**, not just after default.
* ECL must:

  * Be **probability-weighted** (over different scenarios)
  * Reflect **time value of money** (discounting)
  * Use **reasonable and supportable forward-looking information**.`
      },
      {
        id: "94",
        title: "Three-stage ECL model (general idea)",
        content: `IFRS 9 / Ind AS 109 use a **3-stage impairment model** based on **credit risk since origination**:

1. **Stage 1** – No significant increase in credit risk (SICR).

   * Recognise **12-month ECL**; interest on **gross** carrying amount.
2. **Stage 2** – SICR since origination, but not credit-impaired.

   * Recognise **lifetime ECL**; interest still on **gross** amount.
3. **Stage 3** – Credit-impaired (defaulted).

   * Recognise **lifetime ECL**; interest on **net** amount (gross minus loss allowance).

Assets can move **forward and back** between Stage 1 and 2 depending on how risk changes over time.`
      },
      {
        id: "95",
        title: "Stage 1 – 12-month ECL",
        content: `* **Stage 1** = assets whose credit risk has **not increased significantly** since origination (or are “low credit risk” e.g. investment grade).
* Provision = **12-month ECL** = ECL arising from **default events that are possible within the next 12 months**.
* Important point:

  * It is **not** “expected loss over the next 12 months” as a cash shortfall; it is the **full lifetime loss**, weighted by probability that default happens in the next 12 months.
* Stage 1 is where most “good” exposures sit at origination.`
      },
      {
        id: "96",
        title: "Stage 2 – Lifetime ECL and SICR",
        content: `* **Stage 2** = assets that have had a **significant increase in credit risk (SICR)** since origination but are **not credit-impaired**.
* Provision = **lifetime ECL** (expected losses from all possible default events over the **remaining life** of the asset).
* Interest continues to be recognised on **gross carrying amount**.
* SICR assessment uses:

  * Changes in **PD since origination**,
  * **Days past due** backstops (commonly ≥30 days overdue),
  * Other risk indicators or rating downgrades.`
      },
      {
        id: "97",
        title: "Stage 3 – Credit-impaired / defaulted assets",
        content: `* **Stage 3** = assets that are **credit-impaired** – there is objective evidence of default or similar event.
* Typical triggers:

  * 90+ DPD,
  * Bankruptcy / insolvency,
  * Distressed restructuring with economic loss,
  * Other “unlikely to pay” indicators.
* Provision = **lifetime ECL**, same as Stage 2.
* **Interest revenue** is recognised on the **net carrying amount** (gross exposure minus loss allowance).`
      },
      {
        id: "98",
        title: "12-month vs lifetime ECL (formula view)",
        content: `* **12-month ECL** (Stage 1):

  * Uses **PD over 12 months** and **full LGD & EAD at default**, discounted:
  * Simplified: $ECL_{12m} \\approx \\sum_s w_s \\times PD_{12m,s} \\times LGD_s \\times EAD_s \\times DF_s$.
* **Lifetime ECL** (Stage 2/3):

  * Sum over all future periods $t$ until maturity:
  * $ECL_{\\text{life}} = \\sum_{t,s} w_s \\times PD_{t,s} \\times LGD_{t,s} \\times EAD_{t,s} \\times DF_{t,s}$.
* So mathematically, both use **PD, LGD, EAD and discounting** – only the **time horizon** and staging differ.`
      },
      {
        id: "99",
        title: "ECL building blocks: PD, LGD, EAD, discount factor, scenarios",
        content: `Practical ECL engines calculate ECL using 4 building blocks:

1. **EAD** – expected exposure at each future time (including future drawings or amortisation).
2. **PD** – default probability over each period, usually **point-in-time** and scenario-dependent.
3. **LGD** – percentage loss if default happens at that time, reflecting recovery patterns and collateral.
4. **Discount factor (DF)** – based on **effective interest rate** to bring future losses to present value.

For each macroeconomic scenario, ECL is computed and then **scenario-weighted**.`
      },
      {
        id: "100",
        title: "What counts as “significant increase in credit risk” (SICR)?",
        content: `Standards don’t prescribe one formula but give **principles and examples**:

Typical SICR indicators:

* **Relative PD increase since origination** (e.g. PD has doubled or moved beyond a grade threshold).
* **30+ DPD** backstop – rebuttable presumption that 30 days overdue ⇒ SICR.
* Significant **internal rating downgrade**.
* Adverse changes in **behaviour, collateral, sector or geography** risk.

Banks use a **combination** of PD thresholds, days-past-due and qualitative flags, with governance around any rebuttal of the 30-days rule.`
      },
      {
        id: "101",
        title: "Ind AS 109 ECL in India (who uses it today?)",
        content: `* **Ind AS 109** is India’s converged version of IFRS 9 for financial instruments; it uses the **same 3-stage ECL model** and PD/LGD/EAD framework.
* Currently (pre-RBI bank ECL implementation):

  * **NBFCs and large corporates** that report under Ind AS already apply this ECL model.
  * **Banks** still mostly follow RBI’s **IRACP incurred-loss norms**, but RBI has issued a **discussion paper and draft framework** to move banks to ECL as well.

So your PD/LGD/EAD & ECL knowledge is already highly relevant for NBFC-style work and will soon be core for banks too.`
      },
      {
        id: "102",
        title: "RBI’s move to ECL for banks (big picture)",
        content: `* RBI issued a **discussion paper in Jan 2023** proposing an **ECL framework for banks**, explicitly aligning with **IFRS 9 / Ind AS 109** concepts (staging, forward-looking PD/LGD/EAD).
* Draft guidelines and media coverage indicate:

  * ECL will **replace IRACP incurred-loss provisioning** for scheduled commercial banks.
  * There will be a **transition period** (RBI has proposed implementation from **Apr 1, 2027** with multi-year phase-in).
* For interviews:

  > “RBI is moving Indian banks from incurred-loss provisioning to an IFRS-9-style ECL framework based on PD, LGD and EAD, with a transition window from 2027.”`
      },
      {
        id: "103",
        title: "Relationship between IFRS 9 ECL and NPA classification",
        content: `* IFRS 9 / Ind AS 109 **ECL staging** is based on **credit risk** (PD movement), not just arrears.
* RBI **IRACP / NPA** norms are based primarily on **days-past-due** and specific regulatory rules.
* Under RBI’s proposed ECL framework:

  * Banks will **continue NPA classification** under IRACP for regulatory reporting.
  * ECL staging will **run in parallel**, using IFRS-9-style risk criteria (SICR, default events).
* In practice, Stage 3 and NPAs/“in default” will be **closely aligned**, but Stage 2 can include assets **not yet NPA** but with higher risk.`
      },
      {
        id: "104",
        title: "Use of macro scenarios and overlays in ECL",
        content: `* IFRS 9 requires ECL to incorporate **reasonable and supportable forward-looking information**, including **macroeconomic factors** (GDP, unemployment, rates, house prices, etc.).
* Typical set-up:

  * **3 scenarios**: base, optimistic, pessimistic; each with PD/LGD/EAD paths.
  * ECL = **probability-weighted** average across scenarios.
* Banks often use **management overlays** to adjust for model limitations or emerging risks not fully captured by models and data (e.g. sudden regulatory change, pandemic).`
      },
      {
        id: "105",
        title: "How ECL is computed in practice (engine view)",
        content: `A typical **ECL engine** does, for each segment:

1. **Segment exposures** into homogeneous pools (product, collateral, geography, rating, etc.).
2. For each future time step and scenario:

   * Get **PIT PD** curve, LGD, and EAD projection.
   * Compute expected credit loss = $PD_{t,s} \\times LGD_{t,s} \\times EAD_{t,s} \\times DF_{t,s}$.
3. Sum over time and **scenario-weight** to obtain ECL.
4. Map exposures into **Stage 1 / 2 / 3**, and:

   * Use **12-month** horizon for Stage 1
   * **Lifetime** horizon for Stage 2 & 3.

Your PD scorecard and LGD/EAD models are exactly the kind of inputs such an engine needs.`
      },
      {
        id: "106",
        title: "ECL and Basel capital: different roles",
        content: `* **ECL (IFRS 9 / Ind AS 109)** → **accounting provisions** on the balance sheet; impact **profit & loss** and therefore **CET1** via retained earnings.
* **Basel III capital** → **regulatory requirement** based on RWA; aims to cover **Unexpected Loss (UL)**.
* Basel IRB framework compares **EL vs provisions**:

  * Shortfall deducted from capital; excess may be Tier 2.
* In future Indian set-up:

  * ECL will effectively define the **EL buffer**; Basel capital remains the **UL buffer**, with RBI possibly imposing **prudential floors** as regulatory backstops.`
      },
      {
        id: "107",
        title: "ECL backtesting and model governance",
        content: `* Supervisors and auditors expect banks to **backtest ECL** by comparing:

  * **Opening ECL** for a cohort vs
  * **Actual credit loss** realised over the horizon (defaults, write-offs, recoveries).
* Persistent patterns:

  * ECL << actual → provisions too low → models or overlays too optimistic.
  * ECL >> actual → provisions too conservative → capital trapped.
* RBI’s proposed ECL framework and global best practice both see ECL backtesting as part of **model risk management and ICAAP**.`
      },
      {
        id: "108",
        title: "Disclosures around ECL (Ind AS / IFRS style)",
        content: `* Ind AS 107 / IFRS 7 require detailed **credit risk and ECL disclosures**:

  * Reconciliation of **opening to closing loss allowance** by stage.
  * **Stage-wise exposure** and ECL.
  * Information on **inputs, assumptions and estimation techniques**, including PD/LGD/EAD and macro scenarios.
* These disclosures help investors and regulators understand:

  * How **credit risk and expected losses** are evolving.
  * How sensitive ECL is to **assumptions and macro changes**.

CapAd/credit-risk engines often supply **base tables** that feed both regulatory returns and financial reporting disclosures.`
      },
      {
        id: "109",
        title: "RBI ECL for banks: why it matters for your role",
        content: `* RBI’s move to ECL will require banks to:

  * Build **PD/LGD/EAD models** for key portfolios.
  * Implement **forward-looking ECL engines**.
  * Integrate ECL with **capital planning and ICAAP**.
* Banks will need **RegTech solutions** that can:

  * Consume data, run ECL, and also **link to Basel capital & CapAd**.
* In interview:

  > “Surya’s CapAd-style solutions can naturally extend to RBI’s ECL regime, since both capital and ECL sit on top of the same PD/LGD/EAD framework and require strong data lineage and documentation.”`
      },
      {
        id: "110",
        title: "Simple example: EL vs ECL vs capital",
        content: `* Portfolio: ₹100 crore of 5-year loans, initial PD and LGD imply:

  * One-year EL (Basel view):

    * $PD_{1yr} = 2%$, $LGD = 40%$, so
    * $EL_{1yr} = 0.02 \\times 0.40 \\times 100 = ₹0.8\\text{ cr}$.
* **IFRS 9 ECL**:

  * Stage 1 → 12-month ECL; probably close to ₹0.8 cr (with discounting & scenario tweaks).
  * If portfolio migrates to Stage 2, lifetime ECL over 5 years may be, say, ₹3–4 cr.
* **Basel capital**:

  * Suppose RWA for this book = ₹60 cr, total capital ratio target = 11.5%.
  * Required capital = 0.115 × 60 = **₹6.9 cr**, mainly to cover **UL**.

So:

* **EL / ECL** = ₹0.8–4 cr → covered by **provisions & pricing**.
* **Capital** = ₹6.9 cr → covers **unexpected tail loss** if things go much worse than expected.`
      }
    ]
  },
  {
    id: "7",
    title: "ALM & IRRBB",
    cards: [
      {
        id: "111",
        title: "What is Asset–Liability Management (ALM) in a bank?",
        content: `* **ALM** is the process of managing a bank’s **balance sheet structure** so that:

  * Earnings (NII),
  * Economic value (capital), and
  * Liquidity
    stay within the bank’s **risk appetite** under different interest rate and funding scenarios.
* It focuses on:

  * **Interest Rate Risk in the Banking Book (IRRBB)**
  * **Liquidity risk** and funding stability
* ALM is usually overseen by the **Asset–Liability Committee (ALCO)**, which uses reports like **gap analysis, ΔNII, ΔEVE, LCR, NSFR, stress tests**.`
      },
      {
        id: "112",
        title: "What is IRRBB (Interest Rate Risk in the Banking Book)?",
        content: `* **IRRBB** = risk to the bank’s **earnings and economic value** from movements in **interest rates** affecting **banking book** positions (loans, deposits, non-trading investments).
* Key channels:

  * **Repricing / mismatch risk** – timing differences between rate resets on assets & liabilities.
  * **Basis risk** – different reference rates (MCLR vs repo vs T-Bill) move differently.
  * **Yield curve risk** – non-parallel shifts (steepening/flattening).
  * **Optionality risk** – prepayments, early withdrawals, embedded options.`
      },
      {
        id: "113",
        title: "Rate-Sensitive Assets (RSA) and Rate-Sensitive Liabilities (RSL)",
        content: `* **Rate-Sensitive Asset (RSA)**: an asset whose **interest rate will reprice or mature** within a given time bucket (e.g. 0–1 month).

  * Examples: floating-rate loans resetting in 3 months, term loans maturing in 6 months, T-bills.
* **Rate-Sensitive Liability (RSL)**: a liability whose rate will reprice or mature in that bucket (e.g. term deposits, wholesale borrowings).
* Non-rate-sensitive items:

  * Equity, fixed assets, some non-interest-bearing deposits → typically excluded from gap calculations or placed in “>10 years / non-sensitive”.`
      },
      {
        id: "114",
        title: "Time buckets and repricing gaps",
        content: `* ALM splits the balance sheet into **time buckets** based on next repricing/maturity:

  * 0–1 day, 2–7 days, 8–14 days, 15–30 days, 1–2 months, 2–3 months, 3–6 months, 6–12 months, 1–3 years, 3–5 years, 5–10 years, >10 years (exact buckets can follow RBI guidance).
* For each bucket:

  * Sum **RSA** and **RSL**
  * Compute **gap** = RSA – RSL
  * And **cumulative gap** across buckets.
* These gaps show where the bank is **asset-sensitive or liability-sensitive** in each tenor.`
      },
      {
        id: "115",
        title: "Interpreting the gap sign: asset-sensitive vs liability-sensitive",
        content: `* For a given time bucket:

  * **Positive gap (RSA > RSL)** → **asset-sensitive**: more assets than liabilities will reprice.
  * **Negative gap (RSA < RSL)** → **liability-sensitive**: more liabilities will reprice.
* Under a **parallel upward rate shock**:

  * Asset-sensitive bucket → NII tends to **increase** (asset yields reset up more than funding cost).
  * Liability-sensitive bucket → NII tends to **decrease** (funding cost rises faster than asset yields).
* So simple “gap × rate shock” gives a **first approximation of ΔNII**.`
      },
      {
        id: "116",
        title: "ΔNII (earnings-at-risk) under a parallel rate shock",
        content: `* **ΔNII** approximates the **change in net interest income** over, say, 12 months, due to an interest rate shock.
* Simplified formula (ignoring behavioural effects):

  * For a +Δr parallel shift:
    $$\\Delta NII \\approx \\sum_{\\text{buckets up to 1 yr}} \\text{Gap}_i \\times \\Delta r \\times \\text{bucket weight}_i$$
* Interpretation:

  * If many short-term buckets are **negatively gapped** and rates rise, ΔNII will be **negative** (earnings drop).
  * This is exactly what you modelled in your ALM project when you said “+100 bps shock → NII falls by ₹X crores”.`
      },
      {
        id: "117",
        title: "Economic value vs earnings perspective (EVE vs NII)",
        content: `* **Earnings perspective (ΔNII)**:

  * Looks at **short-term impact** (usually 1 year) of rate shocks on **net interest income**.
  * Important for profit planning and budgets.
* **Economic value perspective (ΔEVE)**:

  * Looks at **change in present value of all future cashflows** in the banking book due to rate changes.
  * Captures long-term impact on **economic value of equity (EVE)**.
* Basel IRRBB standards expect banks to monitor **both** ΔNII and ΔEVE under prescribed interest rate shock scenarios.`
      },
      {
        id: "118",
        title: "Duration and Modified Duration (IRRBB tools)",
        content: `* **Duration** (Macaulay) = weighted-average time to receive cashflows (in years).
* **Modified Duration (ModDur)** measures **price sensitivity** to yield changes:
  $$\\text{ModDur} \\approx \\frac{\\Delta P / P}{\\Delta y}$$
* For a small yield change Δy:

  * $$\\frac{\\Delta P}{P} \\approx -\\text{ModDur} \\times \\Delta y$$
* For IRRBB:

  * Duration is computed for each instrument or bucket, then used to assess **EVE sensitivity**.`
      },
      {
        id: "119",
        title: "PV01 (Price Value of 1 bp) and IRRBB",
        content: `* **PV01** (or DV01) = change in the **present value** of an instrument or portfolio for a **1 basis point (0.01%)** change in yield.
* Approximation:

  * $$\\text{PV01} \\approx \\text{Amount} \\times \\text{ModDur} \\times 0.0001$$
* For a portfolio:

  * Sum asset PV01s and liability PV01s per bucket:
    $$\\text{Net PV01}_i = \\sum \\text{PV01}_{\\text{assets},i} - \\sum \\text{PV01}_{\\text{liabilities},i}$$
* The **PV01 ladder** by bucket shows how sensitive EVE is to rate shocks **across the curve** – exactly what you built in your toy ALM engine.`
      },
      {
        id: "120",
        title: "ΔEVE under supervisory interest rate shocks",
        content: `* Basel IRRBB standards specify **six standard interest rate shock scenarios** (parallel up/down, steepener, flattener, short-rate up, long-rate up).
* For each shock **s**:

  * $$\\Delta EVE_s \\approx \\sum_i \\text{Net PV01}_i \\times \\Delta y_{i,s}$$
  * where $\\Delta y_{i,s}$ = change in yield in bucket *i* under scenario *s*.
* This gives the **change in economic value** in each scenario; key input for the **Supervisory Outlier Test** and ICAAP.`
      },
      {
        id: "121",
        title: "Supervisory Outlier Test (SOT) for IRRBB (concept level)",
        content: `* Basel and many national regulators use a **Supervisory Outlier Test**:

  * If **max(|ΔEVE|)** across interest-rate scenarios exceeds a certain percentage of **Tier 1 capital**, the bank is an “outlier” and may require **remedial action**.
* Basel’s updated standard suggests a limit such as **15% of Tier 1 capital** as a reference threshold.
* Your ALM project mirrored this idea:

  * Pre-hedge, one scenario (e.g. long-rate up) breached the threshold.
  * After adding hedges (e.g. pay-fixed swaps), SOT passed in all scenarios.`
      },
      {
        id: "122",
        title: "Using interest rate swaps to hedge IRRBB",
        content: `* **Interest rate swaps (IRS)** or **OIS** are common tools to manage IRRBB:

  * **Pay-fixed, receive-floating** swap reduces duration / PV01 (hedging against rising rates).
  * **Receive-fixed, pay-floating** increases duration (hedging against falling rates).
* In your toy ALM engine:

  * Buckets 11–13 had positive net PV01 (long duration risk).
  * Adding **pay-fixed swaps** with negative PV01 in those buckets brought **net PV01 ≈ 0** there → reduced ΔEVE in long-rate-up scenario.`
      },
      {
        id: "123",
        title: "How ALM, IRRBB and credit risk connect",
        content: `* **Credit risk** focuses on **default and loss** (PD/LGD/EAD).
* **IRRBB & ALM** focus on:

  * How **interest rate movements** affect:

    * **Earnings** (NII), and
    * **Economic value** (EVE, present value of future cashflows).
* They connect through **capital and ICAAP**:

  * Severe IRRBB can erode profits and **CET1**, increasing **capital risk**.
  * ICAAP aggregates **credit, IRRBB, liquidity, concentration, and others** to decide total capital needs.
* In an interview, you can say:

  > “My credit models give the PD/LGD/EAD side of risk; my ALM project shows I also understand how rate shifts and gaps affect NII and capital via IRRBB.”`
      },
      {
        id: "124",
        title: "Typical ALM / IRRBB reports an ALCO sees",
        content: `An **ALCO pack** usually includes:

* **Repricing gap report** (RSA/RSL, gaps, cumulative gaps by bucket).
* **ΔNII analysis** under standard rate shocks (e.g. ±100 bps, regulatory scenarios).
* **Duration and PV01 ladder** by bucket and major portfolio.
* **ΔEVE under prescribed IRRBB shock scenarios** vs capital (SOT).
* Links to **hedging actions** (swaps, terming out funding, adjusting product pricing).
* In your project, your **gap report, NII sensitivity, LCR, NSFR & stress ladder** form a simplified version of this ALCO pack.`
      },
      {
        id: "125",
        title: "ALM in Indian regulatory context (high level)",
        content: `* RBI issues **ALM guidelines** and expects banks to:

  * Monitor **maturity/repricing gaps** in prescribed buckets.
  * Manage **liquidity risk** via structural and short-term limits.
  * Assess **interest rate risk** via gap and duration methods.
* RBI also expects banks’ **ICAAP** to cover IRRBB and liquidity risk, not only credit risk.
* ALM data and analytics often feed into:

  * **Internal limits** (e.g. maximum negative gap in 0–1 month bucket),
  * **Stress testing** (combined credit + liquidity + rate shocks),
  * **Board-level risk appetite** discussions.`
      }
    ]
  },
  {
    id: "8",
    title: "Liquidity: LCR, LST/CFP, NSFR",
    cards: [
      {
        id: "126",
        title: "Liquidity Coverage Ratio (LCR) – The 30-day stress test",
        content: `* **LCR** ensures a bank has enough **High-Quality Liquid Assets (HQLA)** to survive a **30-day severe stress scenario**.
* Formula:
  $$\\text{LCR} = \\frac{\\text{Stock of HQLA}}{\\text{Total Net Cash Outflows over 30 days}} \\ge 100\\%$$
* **HQLA**: Cash, central bank reserves, high-rated government bonds (Level 1 assets).
* **Net Outflows**: (Expected outflows – Expected inflows [capped at 75% of outflows]).
* It prevents a “run on the bank” from causing immediate collapse.`
      },
      {
        id: "127",
        title: "Net Stable Funding Ratio (NSFR) – The 1-year structural view",
        content: `* **NSFR** ensures the bank funds long-term assets with long-term stable liabilities.
* Formula:
  $$\\text{NSFR} = \\frac{\\text{Available Stable Funding (ASF)}}{\\text{Required Stable Funding (RSF)}} \\ge 100\\%$$
* **ASF**: Capital, long-term bonds, stable deposits (weighted by stability factor).
* **RSF**: Loans, long-term assets (weighted by liquidity/maturity).
* It prevents **maturity mismatch** (funding 10-year loans with overnight borrowing).`
      },
      {
        id: "128",
        title: "Liquidity Stress Testing (LST)",
        content: `* Beyond regulatory ratios (LCR/NSFR), banks run internal **Liquidity Stress Tests (LST)**.
* Scenarios:

  * **Idiosyncratic**: Bank-specific crisis (reputation loss, downgrade).
  * **Market-wide**: Systemic liquidity freeze.
  * **Combined**: Both happen together.
* Output: **Survival Horizon** (how many days can we last?) and **Liquidity Gap** under stress.
* Results feed into the **Contingency Funding Plan (CFP)**.`
      },
      {
        id: "129",
        title: "Contingency Funding Plan (CFP)",
        content: `* A playbook for **what to do when liquidity stress hits**.
* Includes:

  * **Early Warning Indicators (EWIs)**: e.g. stock price drop, deposit outflows, credit spread widening.
  * **Escalation matrix**: Who to call (ALCO, Board, RBI).
  * **Action plan**:
    * Sell liquid assets.
    * Access repo markets.
    * Stop lending.
    * Last resort: RBI window.`
      },
      {
        id: "130",
        title: "High-Quality Liquid Assets (HQLA) classification",
        content: `* **Level 1 (Unlimited)**: Cash, Central Bank reserves, Sovereign debt (0% RW). No haircut.
* **Level 2A (Max 40% of HQLA)**: Rated corporate bonds (AA- or better), certain sovereigns/PSEs. 15% haircut.
* **Level 2B (Max 15% of HQLA)**: Lower rated corporate bonds (BBB- to A+), some equities. 25–50% haircut.
* Banks prefer Level 1 assets because they are **immediately convertible to cash** with little loss of value.`
      },
      {
        id: "131",
        title: "LCR Outflow rates (examples)",
        content: `* Regulators prescribe **run-off rates** for liabilities in the 30-day stress:

  * **Stable retail deposits**: 5% run-off.
  * **Less stable retail deposits**: 10% or higher.
  * **Operational corporate deposits**: 25%.
  * **Non-operational corporate / financial institution deposits**: 40% to 100% (very flighty).
* Higher run-off rates → Higher denominator → Lower LCR.`
      },
      {
        id: "132",
        title: "Intraday Liquidity Management",
        content: `* Banks must manage liquidity **within the day** to meet payment system obligations (RTGS/NEFT settlements).
* Risk: If a large incoming payment is delayed, the bank might not have funds to make an outgoing payment, causing gridlock.
* Monitoring:

  * **Max intraday liquidity usage**.
  * **Time-specific obligations**.
* Basel monitoring tools require reporting intraday metrics.`
      },
      {
        id: "133",
        title: "Concentration of Funding",
        content: `* Risk that funding sources are not diversified.
* Metrics monitored:

  * Top 10 / Top 20 depositors (% of total liabilities).
  * Dependence on wholesale funding vs retail deposits.
  * Currency mismatches.
* High concentration increases the risk that losing a few large depositors creates a liquidity crisis.`
      },
      {
        id: "134",
        title: "Asset Encumbrance",
        content: `* **Encumbered assets**: Assets pledged as collateral (e.g. for repo, derivatives, covered bonds) and **cannot be used** to raise fresh funds.
* **Unencumbered assets**: Free assets available for HQLA or pledging.
* Monitoring **Asset Encumbrance Ratio** ensures the bank hasn’t pledged away all its good assets, leaving no buffer for stress.`
      },
      {
        id: "135",
        title: "Relationship between LCR and NSFR",
        content: `* **LCR** is **short-term (30 days)** survival.
* **NSFR** is **medium/long-term (1 year)** structural stability.
* A bank can have high LCR (lots of cash) but low NSFR (if that cash is funded by unstable short-term wholesale borrowing).
* Both must be ≥ 100% to ensure a robust liquidity profile.`
      },
      {
        id: "136",
        title: "Liquidity Risk vs Interest Rate Risk (IRRBB)",
        content: `* **Liquidity Risk**: Can I meet my cash obligations *today/tomorrow*? (Flow concept).
* **IRRBB**: Will rate changes hurt my *earnings/capital* over time? (Value/Earnings concept).
* Interaction:

  * Selling HQLA to fix a liquidity crisis might crystallise losses (IRRBB/Market risk).
  * Rising rates might cause deposit outflows (Liquidity risk).`
      },
      {
        id: "137",
        title: "Behavioral assumptions in Liquidity Risk",
        content: `* Unlike contractual maturities, liquidity risk models use **behavioral** assumptions:

  * **Non-maturity deposits (NMDs)**: Core portion stays long-term (for NSFR/ALM), volatile portion flows out (LCR).
  * **Prepayments**: Loans might be paid back early.
  * **Drawdowns**: Committed credit lines might be drawn down during stress.
* These assumptions must be **validated** against historical data.`
      },
      {
        id: "138",
        title: "Role of ALM solution in Liquidity Risk",
        content: `* An ALM solution (like the one you built/use) automates:

  * **Bucketing** cash flows.
  * Calculating **LCR and NSFR** daily/monthly.
  * Running **stress scenarios** (LST).
  * Producing **regulatory reports** (BLR-1, BLR-2, etc. for RBI).
* Without automation, calculating LCR daily for a large bank is impossible.`
      },
      {
        id: "139",
        title: "RBI’s approach to Liquidity Risk (Basel III)",
        content: `* RBI has fully adopted **Basel III LCR and NSFR** norms.
* **LCR**: Phased in, now 100% for all scheduled commercial banks.
* **NSFR**: Also 100% minimum.
* RBI also mandates **internal board limits** on gaps and specific **liquidity returns** (Statement of Structural Liquidity).`
      },
      {
        id: "140",
        title: "Key takeaway for interview (Liquidity)",
        content: `> “Liquidity risk is about survival. LCR ensures we survive 30 days of stress; NSFR ensures our funding structure is stable long-term. My ALM experience covers generating these metrics and understanding the behavioral assumptions behind them.”`
      }
    ]
  },
  {
    id: "9",
    title: "Data & Calculation Flow for a RWA Engine",
    cards: [
      {
        id: "141",
        title: "Typical data flow in a Risk Engine (CapAd)",
        content: `1. **Source Systems**: Core Banking (deposits/loans), Treasury (investments), Trade Finance (LCs/BGs), Collateral System.
2. **ETL / Data Lake**: Aggregates and cleans data.
3. **Staging Area**: Standardises data into a common format (e.g. "Exposure" table, "Customer" table).
4. **Risk Engine (CapAd)**:
   * Classifies exposures.
   * Assigns Risk Weights (SA) or Parameters (IRB).
   * Calculates RWA & Capital.
5. **Reporting**: Generates regulatory templates (Basel returns) and MIS dashboards.`
      },
      {
        id: "142",
        title: "Key data attributes required for Credit Risk (SA)",
        content: `* **Counterparty**: Type (Corp, Bank, Sov), External Rating, Industry.
* **Exposure**: Outstanding balance, Off-balance sheet limit, Currency, Original/Residual Maturity.
* **Collateral**: Type (Cash, Gold, Property), Value, Currency, Haircut.
* **Product**: Type (Term Loan, OD, CC), NPA status, Specific Provisions.`
      },
      {
        id: "143",
        title: "Data Quality checks (DQ) in Risk Engines",
        content: `* **Completeness**: Are all mandatory fields (e.g. Rating, Sector, Maturity) present?
* **Consistency**: Does Outstanding Balance <= Limit? Is Maturity Date > Start Date?
* **Validity**: Is the Product Code in the valid list? Is the Rating from an approved agency?
* **Reconciliation**: Does Total Assets in Risk Engine match the General Ledger (GL)?`
      },
      {
        id: "144",
        title: "Exposure at Default (EAD) calculation logic (SA)",
        content: `* **On-Balance Sheet**: EAD = Outstanding Principal + Accrued Interest - Specific Provisions (if allowed).
* **Off-Balance Sheet**: EAD = (Limit - Drawn) * CCF.
* **Derivatives**: EAD = Replacement Cost (MTM) + Potential Future Exposure (PFE).
* **Repo/SFT**: EAD = Exposure + Add-on - Collateral (after haircuts).`
      },
      {
        id: "145",
        title: "Credit Risk Mitigation (CRM) allocation logic",
        content: `* Engines need logic to **allocate collateral** to exposures to minimise RWA.
* **One-to-One**: Simple (1 loan, 1 property).
* **Many-to-One**: Multiple loans secured by 1 property.
* **Many-to-Many**: Pool of collateral securing a pool of loans.
* **Optimisation**: The engine should allocate collateral to the **highest risk-weight** exposure first to save maximum capital.`
      },
      {
        id: "146",
        title: "RWA Calculation Logic (Standardised Approach)",
        content: `1. **Identify Asset Class** (e.g. Corporate).
2. **Get External Rating** (e.g. AAA).
3. **Look up Risk Weight** (e.g. 20%).
4. **Apply CRM** (reduce exposure by eligible collateral).
5. **Calculate RWA**:
   $$RWA = (EAD - \text{Collateral}) \times RW + (\text{Collateral} \times RW_{\text{collateral}})$$
   *(Simplified view; actual treatment depends on Simple vs Comprehensive approach).*`
      },
      {
        id: "147",
        title: "Look-up Tables (Rules Engine)",
        content: `* Risk engines rely heavily on **configurable look-up tables**:
  * **Mapping Table**: Source Product Code "TL01" → Basel Asset Class "Corporate".
  * **RW Table**: Asset Class "Corporate" + Rating "AAA" → RW "20%".
  * **CCF Table**: Product "Guarantee" → CCF "100%".
* This allows the bank to update rules (e.g. if RBI changes a risk weight) without rewriting code.`
      },
      {
        id: "148",
        title: "Aggregation and Consolidation",
        content: `* **Solo Level**: Calculate RWA for the standalone bank entity.
* **Consolidated Level**: Aggregate RWA of the bank + subsidiaries (e.g. insurance, securities arm).
* **Intra-group adjustments**: Deduct equity investments in subsidiaries to avoid double-counting capital.`
      },
      {
        id: "149",
        title: "Reporting Templates (RBI / Basel)",
        content: `* The final output is populated into **regulatory templates**:
  * **CRAR**: Capital adequacy summary.
  * **RC-01 to RC-xx**: Detailed credit risk breakdowns.
  * **LR**: Leverage Ratio.
  * **LCR / NSFR**: Liquidity returns.
* The engine must map calculated results (RWA, Capital) to specific **cells** in these templates.`
      },
      {
        id: "150",
        title: "Audit Trail and Lineage",
        content: `* Regulators require **transparency**:
  * **Drill-down**: Click a cell in the report → see the list of loans.
  * **Lineage**: Trace a loan's RWA back to its source data and the specific rule applied.
  * **Change Log**: Who changed the risk weight table? When? Why?`
      },
      {
        id: "151",
        title: "Stress Testing in the Engine",
        content: `* The engine should support **what-if scenarios**:
  * "What if property prices drop 20%?" (Collateral value $\\downarrow$, RWA $\\uparrow$).
  * "What if all 'A' rated corporates become 'BBB'?" (RW $\\uparrow$, RWA $\\uparrow$).
  * "What if NPLs increase by 5%?" (Provisions $\\uparrow$, Capital $\\downarrow$).
* This allows banks to assess capital adequacy under stress (ICAAP).`
      },
      {
        id: "152",
        title: "Performance and Scalability",
        content: `* Large banks have **millions of records**.
* The engine must process them within a defined window (e.g. overnight batch).
* Techniques: Parallel processing, in-memory computing, incremental processing (only process changed records).`
      },
      {
        id: "153",
        title: "Handling Missing Data (Defaults)",
        content: `* Real-world data is never perfect.
* Engine needs **default logic**:
  * Missing Rating? → Treat as "Unrated" (100% RW).
  * Missing Maturity? → Assume conservative value (e.g. > 5 years).
  * Missing Sector? → Map to "Unclassified" (Higher RW).
* These defaults should be flagged in DQ reports.`
      },
      {
        id: "154",
        title: "User Acceptance Testing (UAT) for Risk Engines",
        content: `* How to verify the engine works?
  * **Test Cases**: Create dummy loans covering all asset classes and ratings.
  * **Manual Calc**: Calculate RWA in Excel manually.
  * **Compare**: Check if Engine Output matches Excel.
  * **Regression Testing**: Ensure new rules don't break existing calculations.`
      },
      {
        id: "155",
        title: "Key takeaway for interview (Data & Systems)",
        content: `> "I understand that a Risk Engine isn't just a calculator. It's a data pipeline that needs robust DQ checks, configurable rules, audit trails, and performance optimisation to turn raw banking data into reliable regulatory reports."`
      }
    ]
  },
  {
    id: "10",
    title: "Regulatory Capital Reporting & Disclosures",
    cards: [
      {
        id: "156",
        title: "The Basel Reporting Cycle",
        content: `* **Frequency**: Usually **quarterly** (some large banks do monthly).
* **Process**:
  1. **Data Cut-off**: Freeze data as of quarter-end (e.g. 31st Mar).
  2. **RWA Calculation**: Run the engine.
  3. **Adjustments**: Manual overrides for special cases.
  4. **Validation**: Check vs previous quarter (variance analysis).
  5. **Submission**: Send XBRL/Excel templates to Regulator (RBI).`
      },
      {
        id: "157",
        title: "Key RBI Returns for Capital (RCA 1, 2, 3...)",
        content: `* **RCA 1 (CRAR)**: Top-level summary of Capital (CET1, T1, T2) and RWA.
* **RCA 2 (Credit Risk)**: Detailed RWA by asset class (Standardised Approach).
* **RCA 3 (Market Risk)**: Standardised Duration Method details.
* **RCA 4 (Op Risk)**: Basic Indicator / Standardised Approach details.
* **Statement of Structural Liquidity**: Maturity gaps (ALM).`
      },
      {
        id: "158",
        title: "Pillar 3 Disclosures: What are they?",
        content: `* **Public disclosures** required by Basel to ensure **Market Discipline**.
* Banks must publish a document (usually PDF) on their website quarterly.
* Contents:
  * Capital structure (Tier 1/2 breakdown).
  * RWA summary.
  * Credit risk tables (Gross exposures, NPAs, Provisions).
  * Leverage Ratio.
  * Liquidity Coverage Ratio (LCR).`
      },
      {
        id: "159",
        title: "Variance Analysis (QoQ Checks)",
        content: `* Before submission, analysts check **Quarter-on-Quarter (QoQ) changes**:
  * "Why did RWA increase by 10%?"
    * *Answer*: "Loan book grew by 5% and one large corporate was downgraded."
  * "Why did CET1 ratio drop?"
    * *Answer*: "We paid a dividend (Capital $\\downarrow$) and RWA increased."
* This narrative is crucial for the CFO and Regulator.`
      },
      {
        id: "160",
        title: "XBRL (eXtensible Business Reporting Language)",
        content: `* The standard format for digital regulatory reporting.
* It’s like XML but with a specific **taxonomy** (dictionary) for banking concepts.
* Banks use **XBRL converters** to turn their internal data into the format RBI’s system accepts.`
      },
      {
        id: "161",
        title: "BCBS 239 (Risk Data Aggregation)",
        content: `* A set of principles for **effective risk data aggregation and reporting**.
* Key requirements:
  * **Accuracy**: Reports must be correct.
  * **Completeness**: Capture all material risks.
  * **Timeliness**: Available quickly during stress.
  * **Adaptability**: Can generate ad-hoc reports (e.g. "Exposure to Adani group") on demand.`
      },
      {
        id: "162",
        title: "Leverage Ratio Reporting",
        content: `* Reported alongside risk-based capital.
* **Numerator**: Tier 1 Capital.
* **Denominator**: Total Exposure Measure (On-balance sheet + Off-balance sheet + Derivatives add-ons).
* It prevents banks from building up excessive leverage even if RWA is low (e.g. holding only 0% RW assets).`
      },
      {
        id: "163",
        title: "Large Exposures Framework (LEF)",
        content: `* Limits exposure to a **single counterparty** or **group of connected counterparties**.
* **Limit**: Usually **20-25% of Tier 1 Capital**.
* Reporting: Banks must report all exposures > 10% of Tier 1 Capital to the regulator.
* Purpose: Prevent catastrophic failure from one client defaulting.`
      },
      {
        id: "164",
        title: "Asset Quality Review (AQR)",
        content: `* A special exercise where the Regulator (RBI) sends inspectors to **audit the loan book**.
* They check if:
  * NPAs are correctly identified.
  * Provisions are adequate.
  * Valuations of collateral are realistic.
* Often leads to a sudden spike in reported NPAs and provisions.`
      },
      {
        id: "165",
        title: "Capital Planning (ICAAP Reporting)",
        content: `* The **ICAAP document** is submitted to RBI annually.
* It tells the "Capital Story":
  * "We have X% capital now."
  * "We plan to grow loans by Y%."
  * "Our stress tests show we need Z% buffer."
  * "Therefore, we are adequately capitalised (or need to raise funds)." `
      },
      {
        id: "166",
        title: "Key differences: Regulatory vs Financial Reporting",
        content: `* **Regulatory (Basel)**:
  * Focus: **Unexpected Loss (UL)**, Solvency.
  * Rules: Prescriptive (RBI Master Circular).
  * Output: RWA, CRAR.
* **Financial (Accounting - IFRS/IndAS)**:
  * Focus: **Expected Loss (ECL)**, Fair view.
  * Rules: Principles-based (Accounting Standards).
  * Output: Balance Sheet, P&L, Provisions.`
      },
      {
        id: "167",
        title: "Common Reporting Errors",
        content: `* **Misclassification**: Treating a "Bank" exposure as "Corporate" (Wrong RW).
* **Collateral Mismatch**: Claiming CRM benefit for ineligible collateral.
* **Currency Error**: Reporting USD exposure in INR without conversion (or vice versa).
* **Double Counting**: Including the same loan in two different asset classes.`
      },
      {
        id: "168",
        title: "Automation in Reporting",
        content: `* Old way: Excel spreadsheets (prone to error).
* New way: **Automated Reporting Platforms** (e.g. Oracle OFSAA, Moody's, SAS).
* Benefits:
  * Audit trail.
  * Consistency.
  * Speed (push-button reporting).`
      },
      {
        id: "169",
        title: "The Role of the 'Maker-Checker' principle",
        content: `* In reporting, every manual adjustment must follow **Maker-Checker**:
  * **Maker**: Inputs the adjustment (e.g. "Add ₹10cr to Tier 2").
  * **Checker**: Reviews and approves it.
* Ensures 4-eyes principle and reduces fraud/error risk.`
      },
      {
        id: "170",
        title: "Key takeaway for interview (Reporting)",
        content: `> "I know that calculating RWA is only half the job. The final deliverable is accurate, timely regulatory reports (RCA/XBRL) and Pillar 3 disclosures that stand up to scrutiny from the RBI and investors."`
      }
    ]
  },
];
