

---

### #126 – What liquidity risk are LCR & NSFR trying to solve?

* **Liquidity risk** = risk that a bank **cannot meet its payment obligations when due**, even if it is solvent, or can do so only at **unacceptable cost**.
* Two horizons:

  * **Short-term (30 days)** → focus of **Liquidity Coverage Ratio (LCR)**.
  * **Long-term (1 year)** → focus of **Net Stable Funding Ratio (NSFR)**.
* Together they force banks to hold:

  * Enough **HQLA** for a 30-day stress (LCR), and
  * Enough **stable funding** for their asset profile (NSFR).

---

### #127 – Liquidity Coverage Ratio (LCR) – definition & minimum

* Basel III LCR definition:

$$
LCR = \frac{\text{Stock of High Quality Liquid Assets (HQLA)}}{\text{Total net cash outflows over next 30 days}} \ge 100%
$$

* Objective: ensure the bank survives **30 days of severe idiosyncratic + market stress** without central bank support.
* RBI has implemented LCR for Indian banks with **100% minimum** fully phased in; recent tweaks mostly affect **run-off factors and haircuts**, but minimum remains 100%.

---

### #128 – What are High-Quality Liquid Assets (HQLA)?

* **HQLA** = assets that can be **easily and immediately converted into cash at little or no loss of value**, even under stress.
* Conditions include:

  * Low credit and market risk
  * Active and deep markets
  * Not pledged/encumbered
  * Central bank eligibility is helpful but not sufficient by itself.
* Basel and RBI classify HQLA into **Level 1, Level 2A, Level 2B** with haircuts and caps.

---

### #129 – Level 1, Level 2A, Level 2B HQLA (conceptual)

* **Level 1 HQLA** (no haircut, no cap):

  * Cash
  * Central bank reserves
  * Sovereign and central bank securities meeting Basel criteria (in India: part of SLR G-secs allowed under MSF/FALLCR).

* **Level 2A** (e.g. some highly-rated sovereign/quasi-sovereign/covered bonds) – subject to **15% haircut** and cap.

* **Level 2B** (e.g. certain lower-rated corporate bonds, equities) – higher haircuts (25–50%) and stricter caps.

CapAd / liquidity engines must classify each asset correctly to compute HQLA stock.

---

### #130 – Total net cash outflows (30 days) in LCR

* LCR denominator = **expected cash outflows – expected cash inflows** over the next 30 days, under stress.
* RBI and Basel specify:

  * **Run-off rates** on liabilities (e.g. % of deposits assumed to run off).
  * **Inflow caps** from assets (e.g. only part of maturing loans can be counted).
* Formula:
  $$\text{Net cash outflows} = \max\big(\text{Outflows} - \min(\text{Inflows}, 75%~\text{Outflows}),;0\big)$$

CapAd-like tools therefore need cashflow tagging & run-off factors for each product.

---

### #131 – Typical LCR run-off rates (conceptual, India-flavoured)

(Exact numbers subject to RBI circulars and recent tweaks, but typical Basel-style pattern)

* **Stable retail deposits** (insured, sticky) → low run-off (~3–5%).
* **Less stable retail deposits / digital-only / high-rate deposits** → higher run-off (e.g. 10% + additional buffer for digitally linked deposits; RBI proposed 5%, later eased to 2.5%).
* **Unsecured wholesale funding** from non-financial corporates → higher run-off (e.g. 40–100%).
* **Committed credit and liquidity facilities** → drawdown assumptions → outflows.

Key idea: **more flighty = higher run-off = more LCR pressure**.

---

### #132 – NSFR: Net Stable Funding Ratio – definition

* NSFR is intended to ensure that a bank maintains a **stable funding profile** relative to its assets and off-balance sheet activities over a **1-year horizon**.

Definition:
$$
NSFR = \frac{\text{Available Stable Funding (ASF)}}{\text{Required Stable Funding (RSF)}} \ge 100%
$$

* Basel III and RBI require NSFR ≥100% **on an ongoing basis**.

---

### #133 – Available Stable Funding (ASF) – idea

* **ASF** = weighted sum of funding sources, where **more stable funding gets higher ASF factors**.
* Typical ASF categories and weights:

  * **Regulatory capital** (CET1, AT1, Tier 2 with sufficient maturity) → 100% ASF.
  * **Stable retail deposits** → 90–95% ASF.
  * **Less stable retail deposits** → 80–90%.
  * **Wholesale funding >1 year** → 50–100%.
  * **Short-term wholesale funding** → very low ASF (0–50%).

Your ALM project’s NSFR section uses the same logic in a simplified toy form.

---

### #134 – Required Stable Funding (RSF) – idea

* **RSF** = weighted sum of asset and off-BS exposures, where **less liquid / longer-term assets need more stable funding**.
* Typical RSF categories and weights:

  * **Cash and Level 1 HQLA** → very low RSF (0–5%).
  * **Short-term loans and securities** → moderate RSF (10–50%).
  * **Long-term loans, mortgages** → higher RSF (65–85%).
  * **Equity, fixed assets** → 100% RSF.
* The ratio ensures that **illiquid assets are funded by longer-term or stable liabilities**, not by unstable short-term funding.

---

### #135 – How LCR and NSFR complement each other

* **LCR**:

  * 30-day **survival metric** – can we meet stressed outflows for 30 days using HQLA?
* **NSFR**:

  * Structural 1-year **funding stability metric** – is our **asset profile matched with stable funding**?
* Together:

  * Prevent banks from relying too much on **short-term wholesale funding** to fund long-term loans.
  * Make sure banks have a **buffer of HQLA** for immediate shocks and **stable funding** for the longer term.

In interviews:

> “LCR is the 30-day raincoat; NSFR is the 1-year seat-belt.”

---

### #136 – Liquidity Stress Testing (LST)

* Liquidity stress tests simulate **what happens to cashflows and liquidity ratios** under **severe but plausible scenarios**.
* Example shocks:

  * Higher run-off of deposits, especially from top depositors or certain products.
  * Loss of unsecured wholesale funding.
  * Drawdown of committed lines by customers.
  * Market-wide freeze in repo or commercial paper markets.
* Outputs:

  * **Survival horizon** (how many days until cash hits zero).
  * Impact on **LCR, NSFR and other ALM ratios**.

Your toy ALM project’s **day-by-day cash ladder** and survival horizon is exactly this, in simplified form.

---

### #137 – Survival horizon & Board limits

* **Survival horizon** = the **number of days** a bank can continue to meet obligations under a stress scenario **without new funding**, using HQLA and ALM actions.
* Many boards set internal **minimum survival horizon targets** (e.g. 30 days, 60 days) under specific stress scenarios.
* LST typically shows:

  * **Cumulative net cashflows by day** under stress
  * When cumulative cashflows hit zero → **survival horizon breached**.

Your ALM note: “cash hits zero on Day 18; Board limit 30 days” is a classic survival-horizon statement.

---

### #138 – Contingency Funding Plan (CFP)

* A **CFP** is a formal, board-approved **playbook** describing how the bank will respond to liquidity stress.
* It defines:

  * **Early warning indicators** (market and idiosyncratic).
  * **Escalation procedures** (who meets when, decision-making thresholds).
  * **Funding actions** in tiers, with estimated capacity and time to execute:

    * Repo HQLA, increase central bank borrowing.
    * Issue CDs/bonds, securitisation.
    * Draw committed lines, sell non-core assets.
* Your CFP ladder (T0 repo, T0+1 call money, T0+2–7 CDs, T0+8–30 committed lines) is an ideal simplified example.

---

### #139 – RBI liquidity risk management expectations (high level)

* RBI’s liquidity risk management frameworks (for banks and NBFCs) emphasise:

  * **ALM systems** with gap analysis and maturity ladders.
  * Board-approved **liquidity risk tolerance** and **limits**.
  * Regular **liquidity stress tests** and **CFP**.
  * Compliance with **Basel III LCR and NSFR**.
* Public disclosures (like quarterly LCR/NSFR tables) are now mandatory for transparency.

---

### #140 – How your ALM project maps to real LCR/NSFR work

* Your ALM project already covers:

  * **Gap analysis** → feeds into understanding of **repricing risk** and liquidity buckets.
  * **ΔNII and ΔEVE** → IRRBB perspective.
  * **LCR** → HQLA vs net 30-day outflows (toy numbers).
  * **NSFR** → ASF vs RSF (toy numbers).
  * **Liquidity stress ladder + CFP** → survival horizon and action plan.
* In interviews you can say:

  > “I built a Python-based ALM engine that mimics real Basel III LCR/NSFR mechanics and liquidity stress testing: gap reports, NII sensitivity, EVE shocks, LCR/NSFR, and a structured CFP with survival-horizon analysis.”

---

