
---

### #76 – What is Basel III trying to achieve?

* **Basel III** is an international regulatory framework that sets **minimum standards for capital, leverage and liquidity** so banks can absorb shocks and avoid failures.
* It was introduced after the **2008 global financial crisis** to fix weaknesses in earlier Basel rules.
* Key ideas:

  * Improve **quality and quantity** of capital (more CET1).
  * Add **buffers** on top of minima.
  * Introduce **leverage** and **liquidity** standards (LCR, NSFR).

For you: CapAd is basically the **engine that turns this Basel III rulebook into actual numbers** for Indian banks.

---

### #77 – The three pillars of the Basel framework

Basel II/III are built on **three pillars**:

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

Your role: mostly **Pillar 1 (CapAd)** + feeding **Pillar 2 (ICAAP)** + understanding **Pillar 3 templates**.

---

### #78 – Structure of regulatory capital: CET1, AT1, Tier 2

Under Basel III, regulatory capital has three buckets:

1. **Common Equity Tier 1 (CET1)**

   * Highest-quality capital: **ordinary shares, share premium, retained earnings, reserves**, minus regulatory deductions (goodwill, certain intangibles, etc.).

2. **Additional Tier 1 (AT1)**

   * Perpetual instruments with **discretionary coupons** and clear **loss-absorption features** (write-down or conversion).

3. **Tier 2**

   * Subordinated debt and certain loan-loss provisions; has a **lower loss-absorption quality** and is subject to limits/maturity rules.

**Total capital = Tier 1 (CET1 + AT1) + Tier 2.**

---

### #79 – CET1 ratio (core capital ratio)

* **CET1 ratio** =
  $$\frac{\text{CET1 capital}}{\text{Risk-Weighted Assets (RWA)}}$$
* CET1 is the **first line of defence** against losses; regulators focus very heavily on it.
* Globally under Basel III:

  * Minimum **CET1** = 4.5% of RWA, plus buffers.
* In India (RBI implementation), minimum CET1 is **stricter** (see next card).

---

### #80 – RBI minimum capital ratios (India vs Basel)

* Global Basel III minimums (without buffers):

  * **CET1**: 4.5%
  * **Tier 1**: 6%
  * **Total capital**: 8%

* **RBI is more conservative.** Multiple sources (Basel assessment & Indian commentary) note that India requires:

  * **CET1 ≥ 5.5%**
  * **Tier 1 ≥ 7.0%**
  * **Total capital (CRAR) ≥ 9.0%**

This is the **hard Basel III floor in India**, before adding buffers like CCB.

---

### #81 – Capital Conservation Buffer (CCB) in India

* Basel III introduces a **Capital Conservation Buffer (CCB)** of **2.5% of RWA**, to be held **in CET1** on top of the minimum.
* In India, once fully phased in, this means effective **“target” minima** become:

  * **CET1 requirement**: 5.5% + 2.5% = **8.0%**
  * **Total capital (CRAR)**: 9.0% + 2.5% = **11.5%**
* If a bank’s CET1 falls into the buffer range, **constraints on dividends and bonuses** kick in until capital is rebuilt.

When CapAd runs capital ratios, it typically reports **both**:

* Regulatory minimum, and
* Position relative to buffers.

---

### #82 – Countercyclical Capital Buffer (CCyB)

* The **Countercyclical Buffer** is an additional **0–2.5% of RWA**, again in **CET1**, activated when **credit growth is excessive** and systemic risk is building.
* National authorities (like RBI) can **turn it on/off** per macro conditions.
* For implementation:

  * CapAd needs to support **jurisdiction-specific CCyB rates** and reflect them in **total CET1 requirements**.

For your role: knowing **CCB + CCyB = extra CET1 on top of 5.5%** is enough.

---

### #83 – CRAR / capital ratio formula (India)

* In India, banks must maintain a minimum **Capital to Risk-Weighted Assets Ratio (CRAR)** of **9%** on an ongoing basis.
* Formula:
  $$\text{CRAR (Total Capital Ratio)} = \frac{\text{Regulatory capital (Tier 1 + Tier 2)}}{\text{RWA}}$$
* There are **three standard ratios** that CapAd will compute:

  * **CET1 ratio** = CET1 / RWA
  * **Tier 1 ratio** = (CET1 + AT1) / RWA
  * **Total capital ratio (CRAR)** = (Tier 1 + Tier 2) / RWA

Your job in this role is to **understand how data & RWA calculations feed these ratios** and how they map to RBI templates.

---

### #84 – Approaches for credit risk capital: SA vs IRB

Basel gives multiple options for computing **capital for credit risk**, with increasing sophistication:

1. **Standardised Approach (SA)**

   * Uses **regulatory risk weights** by **exposure class** and **external rating**.
   * No explicit PD/LGD/EAD in the formula (though bank may use them internally).

2. **Foundation IRB (F-IRB)**

   * Bank estimates **PD**; **LGD/EAD** given by regulator tables.

3. **Advanced IRB (A-IRB)**

   * Bank estimates **PD, LGD, EAD, Maturity (M)**; plugs into Basel risk-weight functions.

India: RBI requires all commercial banks (except small categories) to **at least adopt the Standardised Approach**; IRB is for more advanced banks with supervisor approval.

---

### #85 – How the Standardised Approach (SA) for credit risk works (high level)

Under **SA**, the bank:

1. Classifies exposures into **asset classes**:

   * Sovereigns, banks, corporates, retail, residential mortgages, etc.
2. For each exposure, determines a **risk weight**:

   * Based on **external rating**, exposure type, collateral/LTV, and RBI rules.
3. Computes **RWA** as:

   * $$RWA = \sum (\text{Exposure value} \times \text{Risk Weight})$$
4. Applies **9% capital** (plus buffers) to total RWA to get required capital.

CapAd’s job in SA banks is to **encode these RBI risk-weight rules**, read bank data, and produce **RWA & capital requirements** consistently.

---

### #86 – Internal Ratings-Based (IRB) approach: where PD/LGD/EAD feed RWA

* Under **IRB**, a bank’s **internal estimates** of PD, LGD, EAD and M (maturity) feed **Basel risk-weight formulas** to produce RWA.
* Advantages:

  * More **risk-sensitive**; capital reflects portfolio quality better.
* Requirements:

  * Strong internal **rating systems**, long data history, robust validation & governance.
* For you:

  * Even if your immediate clients use **SA**, IRB knowledge helps you understand **how PD/LGD/EAD models tie directly into RWA & capital** in advanced setups.

---

### #87 – Pillar 1 risk types and their capital charges

Under Basel III / RBI Master Circular, **Pillar 1** capital covers three main risk types:

1. **Credit risk**

   * SA or IRB.
   * Dominant component for most Indian banks.

2. **Market risk**

   * Trading book exposures (interest rate, FX, equity, commodity).
   * Standardised or internal model approaches.

3. **Operational risk**

   * Approaches like **Basic Indicator Approach (BIA)** or **Standardised Approach**, based on **gross income** proxies.

CapAd aggregates **RWA_credit + RWA_market + RWA_operational** into **Total RWA** to derive capital ratios.

---

### #88 – Leverage ratio (Basel III vs RBI)

* Basel III introduced the **Leverage Ratio** as a **non-risk-based backstop**, defined as:
  $$\text{Leverage Ratio} = \frac{\text{Tier 1 capital}}{\text{Total exposure}}$$
* Global Basel minimum: **3%**.
* RBI, again more conservative, has set:

  * **4%** for **Domestic Systemically Important Banks (D-SIBs)**
  * **3.5%** for **other banks**

For CapAd, leverage ratio is computed alongside risk-based ratios so management & RBI see **both views of capital adequacy**.

---

### #89 – How CapAd uses RWA and capital definitions in practice

In a typical **CapAd run** for an Indian bank:

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

Your job in this role: make sure **all these steps are correctly configured, documented, and explainable** to clients and regulators.

---

### #90 – Where credit risk models meet Basel capital

Tie-back to earlier modules:

* **PD/LGD/EAD models** (Modules 2–3) give **risk parameters**.
* Under **IRB**:

  * These are direct inputs to **Basel risk-weight formulas** → **RWA_credit** → capital requirement.
* Under **SA** (most Indian banks now):

  * PD/LGD/EAD aren’t in the **Pillar 1 formula**, but:

    * Drive **IFRS 9 ECL**,
    * Feed **ICAAP, stress testing, pricing and limit-setting**,
    * May be used in **Pillar 2 add-ons**.

So in interviews you can say:

> “CapAd is the Basel engine, and PD/LGD/EAD models plug either **directly (IRB)** or **indirectly (SA + ICAAP)** into the capital story.”

---

### #91 – Pillar 2 / ICAAP and CapAd

* RBI requires banks to run an **ICAAP** under Pillar 2, to assess capital adequacy for **all material risks** and under **stress scenarios**.
* Inputs typically include:

  * **CapAd outputs** (current capital ratios & RWA breakdown).
  * **Stress tests** on PD/LGD/EAD, NPLs, and macro variables.
  * **ALM analytics**: IRRBB (ΔNII, ΔEVE), LCR/NSFR, liquidity stress results.
* ICAAP then proposes:

  * **Internal capital targets** (often above regulatory minima).
  * **Capital planning** and contingency actions.

Your Surya role sits right at the intersection of **CapAd engine ↔ ICAAP story**.

---

### #92 – Pillar 3 disclosures and your role

* Basel III / RBI require banks to publish **Pillar 3 disclosures** on:

  * Capital structure and capital ratios
  * RWA by risk type and portfolio
  * Risk management processes.
* These are usually detailed **PDF tables** published quarterly/half-yearly.
* CapAd often generates:

  * **Underlying numbers** for Pillar 3 templates (RWA, capital).
  * **Breakdowns** by portfolio / region / product.




---

## 🧩 Module 5A – Standardised Approach in India: “Pareto” Risk Weights & CCFs (Basel III – RBI)


---

### 5A-1

**Q:** Under the Standardised Approach in India, what does a “risk weight” actually do?

**A:**
Risk weight (RW) is the percentage applied to a bank’s exposure to convert it into **Risk-Weighted Assets (RWA)**.
For example, a ₹100 crore exposure with RW 50% → RWA = ₹50 crore.
Capital required ≈ RWA × minimum capital ratio (e.g. 11.5% incl. CCB).
RBI’s Basel III Master Circular gives **category-wise risk weights** for each exposure class (sovereign, banks, corporates, retail, housing, etc.).

---

### 5A-2

**Q:** What are the key risk weights for **domestic sovereign & related exposures** under RBI SA?

**A:**

* **Central Government** – all fund & non-fund claims: **0% RW**.
* **Central Government–guaranteed claims**: **0% RW**.
* **Direct exposure to State Governments** (loans, investments in state govt securities): **0% RW**.
* **State Government–guaranteed claims**: **20% RW**.
* Claims on **RBI, DICGC, CGTMSE, CRGFTLIH, NCGTC schemes** *backed by explicit Central Govt guarantee*: same RW as central govt → effectively **0% RW**.
* Claims on **ECGC**: **20% RW**.

---

### 5A-3

**Q:** How are exposures **guaranteed by CGTMSE / CRGFTLIH / NCGTC** treated for RW?

**A:**

* If guarantee meets RBI’s CRM conditions (direct, explicit, irrevocable, unconditional) and scheme rules, the **guaranteed portion** gets **0% RW**.
* Any **first-loss piece** to be absorbed by the bank (MLI) in a portfolio guarantee is **deducted from CET1**; only the *residual* exposure gets the 0% RW on the guaranteed part.
* The **unguaranteed portion** gets RW as per the **underlying counterparty** (e.g. MSME borrower).

---

### 5A-4

**Q:** What are the risk weights for **claims on foreign sovereigns / foreign central banks**?

**A:**
RBI follows **rating-based** RWs (Table 1):

| Rating (S&P/Fitch) | AAA–AA | A   | BBB | BB–B | Below B | Unrated |
| ------------------ | ------ | --- | --- | ---- | ------- | ------- |
| **Risk weight**    | 0%     | 20% | 50% | 100% | 150%    | 100%    |

Special case:

* If an overseas branch of an Indian bank holds a **local-currency claim on that foreign sovereign/CB** funded by resources in the same currency, RW can be **0%**, subject to host rules.

---

### 5A-5

**Q:** How are exposures to **BIS, IMF and key MDBs** risk-weighted in India?

**A:**
Claims on **BIS, IMF and certain BCBS-recognised MDBs** (e.g. World Bank IBRD/IFC, ADB, AfDB, EBRD, EIB, AIIB, etc.) are treated like claims on well-capitalised scheduled banks and get a **uniform 20% RW**.

---

### 5A-6

**Q:** What is the practical interview-level picture for **claims on banks** (India + foreign) under SA?

**A:**
**a) Banks incorporated in India / foreign bank branches in India (Table 3)**

* RW depends on **investee bank’s CET1 + CCB level** and whether it’s capital instruments or “other claims”.
* For **well-capitalised scheduled banks** (meeting minimum CET1 + CCB):

  * Capital instruments: **125%** (or higher if rating says so).
  * **All other claims** (e.g. normal loans, deposits): **20% RW**.
* As the investee bank’s CET1+CCB falls below thresholds, RWs step up (e.g. 50%, 100%, 150%, 350%, or **full deduction** in worst case).

**b) Claims on foreign banks (Table 4)**

| Rating                 | AAA–AA | A   | BBB | BB–B | Below B | Unrated |
| ---------------------- | ------ | --- | --- | ---- | ------- | ------- |
| **RW (foreign banks)** | 20%    | 50% | 50% | 100% | 150%    | 50%     |

Special case: foreign-currency claims on a bank funded in same currency in that jurisdiction can get **20% RW** if that bank meets its minimum CRAR.

---

### 5A-7

**Q:** What are the key risk weights for **claims on corporates and NBFCs** (long-term domestic)?

**A:**
For **corporates & NBFCs (except CICs)**, long-term claims are rating-based (Table 5 Part A):

| Domestic rating | AAA | AA | A  | BBB | BB & below | Unrated |
| --------------- | --- | -- | -- | --- | ---------- | ------- |
| **RW (%)**      | 20  | 30 | 50 | 100 | 150        | 100     |

Key points:

* **Unrated corporates/NBFCs** → generally **100% RW**.
* If **large aggregate exposure** from banking system (>₹100–200 cr) is unrated or lost rating, RW can be **150%**.
* Non-resident corporates: 20/50/100/150/100 based on international ratings (similar pattern).

---

### 5A-8

**Q:** What is the **Regulatory Retail Portfolio**, and what risk weight does it get?

**A:**
If exposures meet *all* RBI conditions (orientation to individuals/small business, eligible products, sufficient granularity, and borrower-level exposure ≤ ₹7.5 crore), they qualify as **regulatory retail**.

* **Risk weight:** **75% RW** for this portfolio (standard, non-NPA).
* Certain items are explicitly **excluded** (e.g. securities investments, staff housing loans fully secured by superannuation + mortgage, consumer credit, capital market exposures, VCFs).

This 75% bucket is a big capital benefit → important for interviews.

---

### 5A-9

**Q:** How are **residential housing loans** risk-weighted under RBI SA?

**A:**
For **individual housing loans fully secured by residential property**, RW depends mainly on **LTV and ticket size** (Table 7):

Typical pattern (post-rationalisation):

* LTV ≤80% → **35% RW**.
* LTV >80% and ≤90% → **50% RW**.
* Higher-value loans (e.g. above ₹75 lakh) often capped at **50% RW** at specified LTVs.
* Loans classified as **CRE-RH** (commercial real estate – residential housing) → **75% RW**.
* **CRE (pure commercial real estate)** → **100% RW**.

For interviews, remember:

> *Prime residential mortgages with reasonable LTVs ≈ 35–50% RW; CRE ≈ 100%.*

---

### 5A-10

**Q:** How are **Non-Performing Assets (NPAs)** risk-weighted?

**A:**
For **unsecured portion of NPAs (non-residential)**, net of specific provisions:

* Specific provisions <20% of outstanding → **150% RW**.
* Provisions ≥20% and <50% → **100% RW**.
* Provisions ≥50% → **50% RW**.

For **NPAs secured by residential property** (qualifying housing loans):

* Default case: **100% RW** net of provisions.
* If specific provisions ≥20% and <50% → **75% RW** (net).
* If provisions ≥50% → **50% RW** (net).

High-level: *more provisioning → lower RW; no provisioning → very high RW*.

---

### 5A-11

**Q:** What risk weights apply to **consumer credit, credit cards, capital market exposures, and VCFs**?

**A:**
RBI treats these as **higher-risk categories**:

* **Consumer credit exposure** (personal loans etc., *excluding* housing, education, vehicle, gold-secured): **125% RW**.
* **Microfinance loans** that are consumer-credit-like and not eligible for regulatory retail: **100% RW**.
* **Credit card receivables**: **150% RW** or higher if counterparty’s rating warrants it.
* **Capital market exposures** (CMEs): **125% RW** or higher of the two (125% vs RW as per rating).
* **Venture Capital Funds (VCFs)**: **150% RW**.

These are the classic “riskier” buckets → higher capital.

---

### 5A-12

**Q:** How are **staff loans and ‘other assets’** risk-weighted?

**A:**

* Loans to bank’s own staff **fully covered** by superannuation benefits and/or mortgage of flat/house → **20% RW**.
* Other loans to staff that qualify as regulatory retail → **75% RW**.
* **All other assets** not specifically covered elsewhere → **100% RW** (catch-all bucket).

---

### 5A-13

**Q:** How are **off-balance sheet items** converted to credit equivalent using Credit Conversion Factors (CCFs)?

**A:**
For SA in India, RBI prescribes CCFs for different off-BS items (Table 8). Key ones:

* **Financial guarantees / direct credit substitutes** → typically **100% CCF** (treated like full on-BS exposure).
* **Other commitments**:

  * With certain drawdown (e.g. some take-out finance) → up to **100% CCF**.
  * Undrawn credit lines with original maturity:

    * Up to 1 year → **20% CCF**.
    * Over 1 year → **50% CCF**.
  * Commitments that are **unconditionally cancellable at any time** → **0% CCF** (subject to bank actually being able to cancel; else higher CCF in SREP).
* Special rule: for borrowers with **working capital limits ≥₹150 crore**, undrawn CC/OD limits get **20% CCF** even if cancellable.

After CCF, you apply **risk weight of the counterparty** on the credit equivalent amount.

---

### 5A-14

**Q:** What’s a simple **memory hack** for Indian SA risk weights (credit risk) for interview?

**A:**

* **0%** → Central Govt, RBI, fully CG-guaranteed schemes (CGTMSE etc., subject to rules).
* **20%** → State Govt *guarantees*, ECGC, BIS/IMF/MDBs, well-capitalised bank exposures (other claims), some low-risk foreign sovereign/bank exposures.
* **35–50%** → Prime **residential housing loans** with good LTV.
* **75%** → Regulatory retail portfolio; CRE-RH; some staff loans.
* **100%** → Generic corporates (unrated), “other assets”, some NPAs with moderate provisioning, loans not in any special category.
* **125%** → Consumer credit, capital market exposures in some cases, certain NBFC capital instruments.
* **150%** → Sub-investment grade corporates, some NPAs with low provisions, VCFs, credit cards.
* **1250%** → Equity in some non-financial entities above 10% stake (very high risk).



---


