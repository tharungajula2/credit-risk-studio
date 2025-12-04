
---

### #111 – What is Asset–Liability Management (ALM) in a bank?

* **ALM** is the process of managing a bank’s **balance sheet structure** so that:

  * Earnings (NII),
  * Economic value (capital), and
  * Liquidity
    stay within the bank’s **risk appetite** under different interest rate and funding scenarios.
* It focuses on:

  * **Interest Rate Risk in the Banking Book (IRRBB)**
  * **Liquidity risk** and funding stability
* ALM is usually overseen by the **Asset–Liability Committee (ALCO)**, which uses reports like **gap analysis, ΔNII, ΔEVE, LCR, NSFR, stress tests**.

---

### #112 – What is IRRBB (Interest Rate Risk in the Banking Book)?

* **IRRBB** = risk to the bank’s **earnings and economic value** from movements in **interest rates** affecting **banking book** positions (loans, deposits, non-trading investments).
* Key channels:

  * **Repricing / mismatch risk** – timing differences between rate resets on assets & liabilities.
  * **Basis risk** – different reference rates (MCLR vs repo vs T-Bill) move differently.
  * **Yield curve risk** – non-parallel shifts (steepening/flattening).
  * **Optionality risk** – prepayments, early withdrawals, embedded options.

---

### #113 – Rate-Sensitive Assets (RSA) and Rate-Sensitive Liabilities (RSL)

* **Rate-Sensitive Asset (RSA)**: an asset whose **interest rate will reprice or mature** within a given time bucket (e.g. 0–1 month).

  * Examples: floating-rate loans resetting in 3 months, term loans maturing in 6 months, T-bills.
* **Rate-Sensitive Liability (RSL)**: a liability whose rate will reprice or mature in that bucket (e.g. term deposits, wholesale borrowings).
* Non-rate-sensitive items:

  * Equity, fixed assets, some non-interest-bearing deposits → typically excluded from gap calculations or placed in “>10 years / non-sensitive”.

---

### #114 – Time buckets and repricing gaps

* ALM splits the balance sheet into **time buckets** based on next repricing/maturity:

  * 0–1 day, 2–7 days, 8–14 days, 15–30 days, 1–2 months, 2–3 months, 3–6 months, 6–12 months, 1–3 years, 3–5 years, 5–10 years, >10 years (exact buckets can follow RBI guidance).
* For each bucket:

  * Sum **RSA** and **RSL**
  * Compute **gap** = RSA – RSL
  * And **cumulative gap** across buckets.
* These gaps show where the bank is **asset-sensitive or liability-sensitive** in each tenor.

---

### #115 – Interpreting the gap sign: asset-sensitive vs liability-sensitive

* For a given time bucket:

  * **Positive gap (RSA > RSL)** → **asset-sensitive**: more assets than liabilities will reprice.
  * **Negative gap (RSA < RSL)** → **liability-sensitive**: more liabilities will reprice.
* Under a **parallel upward rate shock**:

  * Asset-sensitive bucket → NII tends to **increase** (asset yields reset up more than funding cost).
  * Liability-sensitive bucket → NII tends to **decrease** (funding cost rises faster than asset yields).
* So simple “gap × rate shock” gives a **first approximation of ΔNII**.

---

### #116 – ΔNII (earnings-at-risk) under a parallel rate shock

* **ΔNII** approximates the **change in net interest income** over, say, 12 months, due to an interest rate shock.
* Simplified formula (ignoring behavioural effects):

  * For a +Δr parallel shift:
    $$\Delta NII \approx \sum_{\text{buckets up to 1 yr}} \text{Gap}_i \times \Delta r \times \text{bucket weight}_i$$
* Interpretation:

  * If many short-term buckets are **negatively gapped** and rates rise, ΔNII will be **negative** (earnings drop).
  * This is exactly what you modelled in your ALM project when you said “+100 bps shock → NII falls by ₹X crores”.

---

### #117 – Economic value vs earnings perspective (EVE vs NII)

* **Earnings perspective (ΔNII)**:

  * Looks at **short-term impact** (usually 1 year) of rate shocks on **net interest income**.
  * Important for profit planning and budgets.
* **Economic value perspective (ΔEVE)**:

  * Looks at **change in present value of all future cashflows** in the banking book due to rate changes.
  * Captures long-term impact on **economic value of equity (EVE)**.
* Basel IRRBB standards expect banks to monitor **both** ΔNII and ΔEVE under prescribed interest rate shock scenarios.

---

### #118 – Duration and Modified Duration (IRRBB tools)

* **Duration** (Macaulay) = weighted-average time to receive cashflows (in years).
* **Modified Duration (ModDur)** measures **price sensitivity** to yield changes:
  $$\text{ModDur} \approx \frac{\Delta P / P}{\Delta y}$$
* For a small yield change Δy:

  * $$\frac{\Delta P}{P} \approx -\text{ModDur} \times \Delta y$$
* For IRRBB:

  * Duration is computed for each instrument or bucket, then used to assess **EVE sensitivity**.

---

### #119 – PV01 (Price Value of 1 bp) and IRRBB

* **PV01** (or DV01) = change in the **present value** of an instrument or portfolio for a **1 basis point (0.01%)** change in yield.
* Approximation:

  * $$\text{PV01} \approx \text{Amount} \times \text{ModDur} \times 0.0001$$
* For a portfolio:

  * Sum asset PV01s and liability PV01s per bucket:
    $$\text{Net PV01}*i = \sum \text{PV01}*{\text{assets},i} - \sum \text{PV01}_{\text{liabilities},i}$$
* The **PV01 ladder** by bucket shows how sensitive EVE is to rate shocks **across the curve** – exactly what you built in your toy ALM engine.

---

### #120 – ΔEVE under supervisory interest rate shocks

* Basel IRRBB standards specify **six standard interest rate shock scenarios** (parallel up/down, steepener, flattener, short-rate up, long-rate up).
* For each shock **s**:

  * $$\Delta EVE_s \approx \sum_i \text{Net PV01}*i \times \Delta y*{i,s}$$
  * where $\Delta y_{i,s}$ = change in yield in bucket *i* under scenario *s*.
* This gives the **change in economic value** in each scenario; key input for the **Supervisory Outlier Test** and ICAAP.

---

### #121 – Supervisory Outlier Test (SOT) for IRRBB (concept level)

* Basel and many national regulators use a **Supervisory Outlier Test**:

  * If **max(|ΔEVE|)** across interest-rate scenarios exceeds a certain percentage of **Tier 1 capital**, the bank is an “outlier” and may require **remedial action**.
* Basel’s updated standard suggests a limit such as **15% of Tier 1 capital** as a reference threshold.
* Your ALM project mirrored this idea:

  * Pre-hedge, one scenario (e.g. long-rate up) breached the threshold.
  * After adding hedges (e.g. pay-fixed swaps), SOT passed in all scenarios.

---

### #122 – Using interest rate swaps to hedge IRRBB

* **Interest rate swaps (IRS)** or **OIS** are common tools to manage IRRBB:

  * **Pay-fixed, receive-floating** swap reduces duration / PV01 (hedging against rising rates).
  * **Receive-fixed, pay-floating** increases duration (hedging against falling rates).
* In your toy ALM engine:

  * Buckets 11–13 had positive net PV01 (long duration risk).
  * Adding **pay-fixed swaps** with negative PV01 in those buckets brought **net PV01 ≈ 0** there → reduced ΔEVE in long-rate-up scenario.

---

### #123 – How ALM, IRRBB and credit risk connect

* **Credit risk** focuses on **default and loss** (PD/LGD/EAD).
* **IRRBB & ALM** focus on:

  * How **interest rate movements** affect:

    * **Earnings** (NII), and
    * **Economic value** (EVE, present value of future cashflows).
* They connect through **capital and ICAAP**:

  * Severe IRRBB can erode profits and **CET1**, increasing **capital risk**.
  * ICAAP aggregates **credit, IRRBB, liquidity, concentration, and others** to decide total capital needs.
* In an interview, you can say:

  > “My credit models give the PD/LGD/EAD side of risk; my ALM project shows I also understand how rate shifts and gaps affect NII and capital via IRRBB.”

---

### #124 – Typical ALM / IRRBB reports an ALCO sees

An **ALCO pack** usually includes:

* **Repricing gap report** (RSA/RSL, gaps, cumulative gaps by bucket).
* **ΔNII analysis** under standard rate shocks (e.g. ±100 bps, regulatory scenarios).
* **Duration and PV01 ladder** by bucket and major portfolio.
* **ΔEVE under prescribed IRRBB shock scenarios** vs capital (SOT).
* Links to **hedging actions** (swaps, terming out funding, adjusting product pricing).
* In your project, your **gap report, NII sensitivity, LCR, NSFR & stress ladder** form a simplified version of this ALCO pack.

---

### #125 – ALM in Indian regulatory context (high level)

* RBI issues **ALM guidelines** and expects banks to:

  * Monitor **maturity/repricing gaps** in prescribed buckets.
  * Manage **liquidity risk** via structural and short-term limits.
  * Assess **interest rate risk** via gap and duration methods.
* RBI also expects banks’ **ICAAP** to cover IRRBB and liquidity risk, not only credit risk.
* ALM data and analytics often feed into:

  * **Internal limits** (e.g. maximum negative gap in 0–1 month bucket),
  * **Stress testing** (combined credit + liquidity + rate shocks),
  * **Board-level risk appetite** discussions.

---

