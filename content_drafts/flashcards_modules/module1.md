Module 1: Core Banking & Risk Overview as flashcard-ready notes.
---

### #1 – What does a commercial bank do?

* A bank is a **financial intermediary**: it accepts **deposits** from customers and lends those funds as **loans & advances** to households, firms and governments.
* It also provides **payment services** (transfers, cards, UPI/NEFT/RTGS), **forex**, and **treasury** services.
* Banks transform:

  * **Maturity** (short-term deposits → long-term loans)
  * **Risk** (diversified loan book instead of one borrower)
  * **Size** (small deposits → large loans).
* Because of this transformation, banks face multiple **financial risks** (credit, market, liquidity, operational) that must be measured and controlled.

---

### #2 – How does a bank earn profit?

* Main driver is **Net Interest Income (NII)** = interest on loans & investments **minus** interest paid on deposits & borrowings.
* **Net Interest Margin (NIM)** = NII ÷ interest-earning assets – key profitability metric.
* Banks also earn **non-interest income**:

  * Fees & commissions (cards, LC/BG, payments)
  * Trading income from treasury (FX, bonds, derivatives).
* Losses from credit risk, market risk, and operational events **reduce** profit; severe losses can eat into **capital**.

---

### #3 – High-level bank balance sheet structure

* **Assets** (uses of funds):

  * Cash & balances with RBI/other banks
  * **Investments** (mainly government securities, other bonds/equities)
  * **Loans & advances** (retail, SME, corporate, etc.)
  * Fixed assets & other assets
* **Liabilities** (sources of funds):

  * **Deposits** (savings, current, term)
  * Borrowings (RBI refinance, bonds, interbank, repos)
  * Other liabilities & provisions
* **Equity / Capital**: share capital + reserves (CET1, AT1, Tier 2 under Basel III).
* **Risk & regulatory work** (like CapAd) lives mainly in mapping these assets & off-balance sheet items into **Risk-Weighted Assets (RWA)** and capital ratios.

---

### #4 – Key loan portfolio buckets (for risk & CapAd)

* **Retail**: housing loans, auto, personal loans, credit cards.
* **SME / MSME**: small business working capital and term loans.
* **Corporate / wholesale**: large working capital limits, term loans, project finance.
* **Banks & FIs**: interbank placements, refinance.
* For Basel / CapAd, these map into **exposure classes** like retail, corporate, banks, sovereigns, etc., each with its own **risk-weight rules**.

---

### #5 – Deposits vs borrowings vs capital (funding stack)

* **Deposits** – main, relatively stable, low-cost funding (CASA + term).
* **Borrowings** – wholesale funding: bonds, CDs, interbank lines, refinance, repos.
* **Capital** – shareholders’ funds (CET1, AT1, Tier 2) – **absorbs unexpected losses** and supports growth.
* Regulators care not just about *size* of the balance sheet, but whether **funding is stable** and **capital is sufficient** for the risks (Basel III).

---

### #6 – What is “risk” for a bank?

* **Risk** = possibility that actual outcomes (losses, income, liquidity) will differ from what is expected.
* RBI and Basel list key risk types for banks: **credit risk, market risk, operational risk, interest rate risk in the banking book, credit concentration risk and liquidity risk**.
* Capital adequacy (Basel III) and ICAAP require banks to **identify, measure, aggregate and hold buffers** against these risks.

---

### #7 – Credit risk (formal idea)

* RBI describes credit risk as the risk that a bank’s **borrower or counterparty fails to meet obligations**, causing loss; banks must measure, monitor and control it and hold adequate capital.
* In practice: risk of **default, downgrade, non-payment, or restructuring** on:

  * Loans & advances
  * Investments in bonds
  * Off-balance sheet exposures (LCs, guarantees, derivatives).
* **PD, LGD, EAD** are the main parameters used for measurement and for **capital and ECL**.

---

### #8 – Market risk

* RBI defines market risk as the risk of loss from movements in **market prices**, especially changes in interest rates, FX rates, equity and commodity prices.
* Mainly affects:

  * Trading book (bonds, FX, derivatives)
  * Rate-sensitive AFS/FVTPL securities in the banking book.
* Basel capital charge for market risk is separate from credit risk; in a CapAd context, it’s one of the **Pillar 1 risk types** alongside credit & operational risk.

---

### #9 – Operational risk

* The Basel Committee (and RBI guidance) define **operational risk** as the risk of loss resulting from **inadequate or failed internal processes, people and systems or from external events**, including legal risk.
* Examples: fraud, system outages, processing errors, cyber incidents, legal fines.
* Under Basel III, banks must hold **capital for operational risk** using approaches like BIA or standardised approaches.

---

### #10 – Liquidity risk (funding vs market liquidity)

* RBI & Basel treat **liquidity risk** as risk that a bank **cannot meet its obligations as they fall due** or can do so only at **unacceptable cost**, even if it is solvent.
* Two flavours:

  * **Funding liquidity risk** – can’t roll over deposits/wholesale funding or raise cash.
  * **Market liquidity risk** – can’t sell assets quickly without large price impact.
* Basel III introduces explicit **LCR and NSFR** to constrain liquidity/funding risk; your **ALM project** models these.

---

### #11 – Interest Rate Risk in the Banking Book (IRRBB)

* Basel defines IRRBB as the current or prospective risk to a bank’s **capital and earnings** arising from adverse movements in interest rates affecting the **banking book** positions.
* Banking book = loans, deposits and investments held **not for trading**, mostly measured at amortised cost.
* Channels:

  * **Earnings risk (ΔNII)** – short-term impact on net interest income.
  * **Economic value risk (ΔEVE)** – change in present value of future cashflows.
* In your ALM engine, gap analysis, duration, PV01 ladder and ΔEVE under shocks are all **IRRBB tools**.

---

### #12 – Trading book vs banking book (why it matters)

* **Trading book**:

  * Positions held with intent to **trade** or hedge trading positions.
  * Measured at fair value; subject to **market risk capital**.
* **Banking book**:

  * Loans, core deposits, HTM investments – held to collect cashflows, not for short-term resale.
  * Subject mainly to **credit risk capital** and **IRRBB (Pillar 2)**.
* CapAd & ALM for this role will focus primarily on **banking book positions** (credit risk RWA, IRRBB, LCR/NSFR).

---

### #13 – Expected Loss vs Unexpected Loss (conceptual)

* With PD, LGD, EAD estimated, **Expected Loss (EL)** ≈ long-run average loss:
  $$EL = \sum PD_i \times LGD_i \times EAD_i$$
* **Unexpected Loss (UL)** is the **volatility around EL** – losses in bad years or stress scenarios.
* Framework:

  * **EL** → covered by **provisions (IFRS 9 ECL)** + pricing.
  * **UL** → covered by **regulatory capital (Basel III)** and ICAAP buffers.
* All your PD/LGD/EAD, ECL, CapAd and stress testing work lives on top of this EL vs UL idea.

---

### #14 – Capital adequacy: why regulators care

* Basel III exists so that banks hold **enough high-quality capital** to absorb losses and **remain solvent**.
* Capital adequacy ratio:
  $$\text{Capital Ratio} = \frac{\text{Regulatory Capital}}{\text{Risk-Weighted Assets (RWA)}}$$
* RBI’s Basel III Master Circular specifies minimum ratios for **CET1, Tier 1 and Total Capital**, plus capital conservation and other buffers.
* The **CapAd module** you’ll work with basically automates:

  * computing RWA for credit, market, operational risk;
  * applying capital ratios and buffers;
  * generating regulatory reports.

---

### #15 – Where CapAd fits in the bank’s risk stack

* **Inputs:** granular exposure data (loans, off-balance sheet, investments), PD/LGD/EAD estimates or risk weights, collateral, ratings.
* **Processing:** apply **Basel/RBI rules** to compute **RWA** and capital requirements for each risk type.
* **Outputs:**

  * Capital ratios (CET1, Tier 1, Total)
  * Risk-weighted splits by portfolio / product / counterparty
  * Regulatory templates for RBI.
* For this role, you’re the **bridge** between:

  * Regulatory text (Basel III, RBI circulars)
  * The **CapAd product configuration & logic**
  * Data from the bank’s systems.

---

### #16 – Where ALM / Treasury analytics fits

* ALM looks at **structural interest rate & liquidity risk** arising from the core balance sheet.
* Core tasks:

  * IRRBB: gap, ΔNII, duration, ΔEVE, hedging.
  * Liquidity: LCR, NSFR, stress tests, survival horizon, CFP.
* Your ALM project mirrors what a bank’s **ALCO** needs:

  * Reports that show **earnings at risk**, **economic value at risk**, **liquidity buffers** and **funding stability**.
* For Surya, ALM results also feed into **ICAAP and internal capital/liquidity assessment**.

---

### #17 – Risk management & ICAAP connection

* RBI expects banks to run an **Internal Capital Adequacy Assessment Process (ICAAP)** under Basel Pillar 2.
* ICAAP must:

  * Identify *all* material risks (credit, market, operational, IRRBB, liquidity, concentration, etc.).
  * Quantify required capital & liquidity under **normal and stressed** conditions.
  * Show how **business plans, capital plans and risk appetite** are aligned.
* Your PD/LGD/EAD models, CapAd outputs and ALM analytics are key **inputs** into ICAAP.

---

### #18 – Three lines of defence (governance context)

(Not RBI-specific, but standard globally.)

* **1st line:** Business & front-line units – own the risks, follow policies, use models.
* **2nd line:** Independent **Risk Management** & **Compliance** – set frameworks, challenge, monitor.
* **3rd line:** **Internal Audit** – provides independent assurance over both 1st and 2nd line.
* In many banks:

  * Model development teams sit in 1st or 2nd line.
  * **Model validation** & **independent review** clearly separated.
* As a CapAd/Reg Reporting analyst, you usually sit in the **risk / finance middle office** (2nd line style), ensuring numbers and documentation stand scrutiny.

---


