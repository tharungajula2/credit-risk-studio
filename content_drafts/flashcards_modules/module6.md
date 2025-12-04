
---

### #93 – IFRS 9 / Ind AS 109 vs “incurred loss” approach

* Old world (IAS 39 / IRACP norms) = **incurred loss**: you booked provisions only when there was **objective evidence of impairment** (e.g. NPA).
* **IFRS 9 / Ind AS 109** introduced a **forward-looking Expected Credit Loss (ECL) model** – you start recognising expected losses **from day one**, not just after default.
* ECL must:

  * Be **probability-weighted** (over different scenarios)
  * Reflect **time value of money** (discounting)
  * Use **reasonable and supportable forward-looking information**.

---

### #94 – Three-stage ECL model (general idea)

IFRS 9 / Ind AS 109 use a **3-stage impairment model** based on **credit risk since origination**:

1. **Stage 1** – No significant increase in credit risk (SICR).

   * Recognise **12-month ECL**; interest on **gross** carrying amount.
2. **Stage 2** – SICR since origination, but not credit-impaired.

   * Recognise **lifetime ECL**; interest still on **gross** amount.
3. **Stage 3** – Credit-impaired (defaulted).

   * Recognise **lifetime ECL**; interest on **net** amount (gross minus loss allowance).

Assets can move **forward and back** between Stage 1 and 2 depending on how risk changes over time.

---

### #95 – Stage 1 – 12-month ECL

* **Stage 1** = assets whose credit risk has **not increased significantly** since origination (or are “low credit risk” e.g. investment grade).
* Provision = **12-month ECL** = ECL arising from **default events that are possible within the next 12 months**.
* Important point:

  * It is **not** “expected loss over the next 12 months” as a cash shortfall; it is the **full lifetime loss**, weighted by probability that default happens in the next 12 months.
* Stage 1 is where most “good” exposures sit at origination.

---

### #96 – Stage 2 – Lifetime ECL and SICR

* **Stage 2** = assets that have had a **significant increase in credit risk (SICR)** since origination but are **not credit-impaired**.
* Provision = **lifetime ECL** (expected losses from all possible default events over the **remaining life** of the asset).
* Interest continues to be recognised on **gross carrying amount**.
* SICR assessment uses:

  * Changes in **PD since origination**,
  * **Days past due** backstops (commonly ≥30 days overdue),
  * Other risk indicators or rating downgrades.

---

### #97 – Stage 3 – Credit-impaired / defaulted assets

* **Stage 3** = assets that are **credit-impaired** – there is objective evidence of default or similar event.
* Typical triggers:

  * 90+ DPD,
  * Bankruptcy / insolvency,
  * Distressed restructuring with economic loss,
  * Other “unlikely to pay” indicators.
* Provision = **lifetime ECL**, same as Stage 2.
* **Interest revenue** is recognised on the **net carrying amount** (gross exposure minus loss allowance).

---

### #98 – 12-month vs lifetime ECL (formula view)

* **12-month ECL** (Stage 1):

  * Uses **PD over 12 months** and **full LGD & EAD at default**, discounted:
  * Simplified: $ECL_{12m} \approx \sum_s w_s \times PD_{12m,s} \times LGD_s \times EAD_s \times DF_s$.
* **Lifetime ECL** (Stage 2/3):

  * Sum over all future periods $t$ until maturity:
  * $ECL_{\text{life}} = \sum_{t,s} w_s \times PD_{t,s} \times LGD_{t,s} \times EAD_{t,s} \times DF_{t,s}$.
* So mathematically, both use **PD, LGD, EAD and discounting** – only the **time horizon** and staging differ.

---

### #99 – ECL building blocks: PD, LGD, EAD, discount factor, scenarios

Practical ECL engines calculate ECL using 4 building blocks:

1. **EAD** – expected exposure at each future time (including future drawings or amortisation).
2. **PD** – default probability over each period, usually **point-in-time** and scenario-dependent.
3. **LGD** – percentage loss if default happens at that time, reflecting recovery patterns and collateral.
4. **Discount factor (DF)** – based on **effective interest rate** to bring future losses to present value.

For each macroeconomic scenario, ECL is computed and then **scenario-weighted**.

---

### #100 – What counts as “significant increase in credit risk” (SICR)?

Standards don’t prescribe one formula but give **principles and examples**:

Typical SICR indicators:

* **Relative PD increase since origination** (e.g. PD has doubled or moved beyond a grade threshold).
* **30+ DPD** backstop – rebuttable presumption that 30 days overdue ⇒ SICR.
* Significant **internal rating downgrade**.
* Adverse changes in **behaviour, collateral, sector or geography** risk.

Banks use a **combination** of PD thresholds, days-past-due and qualitative flags, with governance around any rebuttal of the 30-days rule.

---

### #101 – Ind AS 109 ECL in India (who uses it today?)

* **Ind AS 109** is India’s converged version of IFRS 9 for financial instruments; it uses the **same 3-stage ECL model** and PD/LGD/EAD framework.
* Currently (pre-RBI bank ECL implementation):

  * **NBFCs and large corporates** that report under Ind AS already apply this ECL model.
  * **Banks** still mostly follow RBI’s **IRACP incurred-loss norms**, but RBI has issued a **discussion paper and draft framework** to move banks to ECL as well.

So your PD/LGD/EAD & ECL knowledge is already highly relevant for NBFC-style work and will soon be core for banks too.

---

### #102 – RBI’s move to ECL for banks (big picture)

* RBI issued a **discussion paper in Jan 2023** proposing an **ECL framework for banks**, explicitly aligning with **IFRS 9 / Ind AS 109** concepts (staging, forward-looking PD/LGD/EAD).
* Draft guidelines and media coverage indicate:

  * ECL will **replace IRACP incurred-loss provisioning** for scheduled commercial banks.
  * There will be a **transition period** (RBI has proposed implementation from **Apr 1, 2027** with multi-year phase-in).
* For interviews:

  > “RBI is moving Indian banks from incurred-loss provisioning to an IFRS-9-style ECL framework based on PD, LGD and EAD, with a transition window from 2027.”

---

### #103 – Relationship between IFRS 9 ECL and NPA classification

* IFRS 9 / Ind AS 109 **ECL staging** is based on **credit risk** (PD movement), not just arrears.
* RBI **IRACP / NPA** norms are based primarily on **days-past-due** and specific regulatory rules.
* Under RBI’s proposed ECL framework:

  * Banks will **continue NPA classification** under IRACP for regulatory reporting.
  * ECL staging will **run in parallel**, using IFRS-9-style risk criteria (SICR, default events).
* In practice, Stage 3 and NPAs/“in default” will be **closely aligned**, but Stage 2 can include assets **not yet NPA** but with higher risk.

---

### #104 – Use of macro scenarios and overlays in ECL

* IFRS 9 requires ECL to incorporate **reasonable and supportable forward-looking information**, including **macroeconomic factors** (GDP, unemployment, rates, house prices, etc.).
* Typical set-up:

  * **3 scenarios**: base, optimistic, pessimistic; each with PD/LGD/EAD paths.
  * ECL = **probability-weighted** average across scenarios.
* Banks often use **management overlays** to adjust for model limitations or emerging risks not fully captured by models and data (e.g. sudden regulatory change, pandemic).

---

### #105 – How ECL is computed in practice (engine view)

A typical **ECL engine** does, for each segment:

1. **Segment exposures** into homogeneous pools (product, collateral, geography, rating, etc.).
2. For each future time step and scenario:

   * Get **PIT PD** curve, LGD, and EAD projection.
   * Compute expected credit loss = $PD_{t,s} \times LGD_{t,s} \times EAD_{t,s} \times DF_{t,s}$.
3. Sum over time and **scenario-weight** to obtain ECL.
4. Map exposures into **Stage 1 / 2 / 3**, and:

   * Use **12-month** horizon for Stage 1
   * **Lifetime** horizon for Stage 2 & 3.

Your PD scorecard and LGD/EAD models are exactly the kind of inputs such an engine needs.

---

### #106 – ECL and Basel capital: different roles

* **ECL (IFRS 9 / Ind AS 109)** → **accounting provisions** on the balance sheet; impact **profit & loss** and therefore **CET1** via retained earnings.
* **Basel III capital** → **regulatory requirement** based on RWA; aims to cover **Unexpected Loss (UL)**.
* Basel IRB framework compares **EL vs provisions**:

  * Shortfall deducted from capital; excess may be Tier 2.
* In future Indian set-up:

  * ECL will effectively define the **EL buffer**; Basel capital remains the **UL buffer**, with RBI possibly imposing **prudential floors** as regulatory backstops.

---

### #107 – ECL backtesting and model governance

* Supervisors and auditors expect banks to **backtest ECL** by comparing:

  * **Opening ECL** for a cohort vs
  * **Actual credit loss** realised over the horizon (defaults, write-offs, recoveries).
* Persistent patterns:

  * ECL << actual → provisions too low → models or overlays too optimistic.
  * ECL >> actual → provisions too conservative → capital trapped.
* RBI’s proposed ECL framework and global best practice both see ECL backtesting as part of **model risk management and ICAAP**.

---

### #108 – Disclosures around ECL (Ind AS / IFRS style)

* Ind AS 107 / IFRS 7 require detailed **credit risk and ECL disclosures**:

  * Reconciliation of **opening to closing loss allowance** by stage.
  * **Stage-wise exposure** and ECL.
  * Information on **inputs, assumptions and estimation techniques**, including PD/LGD/EAD and macro scenarios.
* These disclosures help investors and regulators understand:

  * How **credit risk and expected losses** are evolving.
  * How sensitive ECL is to **assumptions and macro changes**.

CapAd/credit-risk engines often supply **base tables** that feed both regulatory returns and financial reporting disclosures.

---

### #109 – RBI ECL for banks: why it matters for your role

* RBI’s move to ECL will require banks to:

  * Build **PD/LGD/EAD models** for key portfolios.
  * Implement **forward-looking ECL engines**.
  * Integrate ECL with **capital planning and ICAAP**.
* Banks will need **RegTech solutions** that can:

  * Consume data, run ECL, and also **link to Basel capital & CapAd**.
* In interview:

  > “Surya’s CapAd-style solutions can naturally extend to RBI’s ECL regime, since both capital and ECL sit on top of the same PD/LGD/EAD framework and require strong data lineage and documentation.”

---

### #110 – Simple example: EL vs ECL vs capital

* Portfolio: ₹100 crore of 5-year loans, initial PD and LGD imply:

  * One-year EL (Basel view):

    * $PD_{1yr} = 2%$, $LGD = 40%$, so
    * $EL_{1yr} = 0.02 \times 0.40 \times 100 = ₹0.8\text{ cr}$.
* **IFRS 9 ECL**:

  * Stage 1 → 12-month ECL; probably close to ₹0.8 cr (with discounting & scenario tweaks).
  * If portfolio migrates to Stage 2, lifetime ECL over 5 years may be, say, ₹3–4 cr.
* **Basel capital**:

  * Suppose RWA for this book = ₹60 cr, total capital ratio target = 11.5%.
  * Required capital = 0.115 × 60 = **₹6.9 cr**, mainly to cover **UL**.

So:

* **EL / ECL** = ₹0.8–4 cr → covered by **provisions & pricing**.
* **Capital** = ₹6.9 cr → covers **unexpected tail loss** if things go much worse than expected.

---

