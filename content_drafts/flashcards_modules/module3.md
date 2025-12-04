
---

### #39 – What is a credit scorecard?

* A **credit scorecard** is a statistical model that assigns a **numeric score** to each borrower or application, summarising their **likelihood of default**.
* In practice, it’s usually built on **historical data** and predicts a **binary outcome** (default / non-default).
* The score is later converted into **PD bands or rating grades**, which are then used for:

  * Approvals / rejections
  * Limit setting
  * Pricing
  * Capital & ECL calculations.

---

### #40 – PD model vs LGD/EAD models (roles)

* **PD models**: predict **probability of default** over a defined horizon (typically 1 year for Basel).
* **LGD models**: estimate **percentage loss** if default occurs (after recoveries, collateral, costs).
* **EAD models**: estimate **exposure at the moment of default**, especially important for undrawn limits and revolving products.
* Together, they feed **EL = PD × LGD × EAD** for capital and ECL frameworks.

---

### #41 – Typical dataset design for a PD scorecard

A standard PD modelling dataset has:

1. **Observation date**: when you take a snapshot of borrower characteristics (X variables).
2. **Performance window**: e.g. **12 months** after observation where you check if default (event) happened.
3. **Target (Y)**:

   * Default = 0
   * Non-default = 1 (your convention)
4. **Curing rule**: how you treat temporary delinquencies that cure (e.g. only count 90+ DPD or write-off as default).

This “X at time t → Y over next 12 months” structure is what links **features** to **future default risk**.

---

### #42 – Event / non-event definitions in your convention

With your coding:

* **Event (bad)** = **default = 0**

  * 90+ DPD or “unlikely to pay” events per Basel / internal policy.
* **Non-event (good)** = **non-default = 1**

  * No default in the performance window.
* When building PD models and scorecards, you’ll:

  * Use **0/1** as the dependent variable,
  * Often need event rates that are realistic for the portfolio (may use down/up-sampling carefully, then adjust calibration).

---

### #43 – Sample period & minimum data history (Basel view)

* Basel IRB standards expect **multi-year history**:

  * Typically **at least 5 years of data** for PD estimation;
  * For LGD/EAD in non-retail portfolios, **at least 7 years** of relevant data, ideally covering a full economic cycle.
* If less data is available, banks must be **more conservative** in estimates.
* In interviews you can say:

  > “For serious regulatory PD/LGD/EAD models, regulators expect at least 5–7 years of default and recovery data, including downturn periods.”

---

### #44 – Train / test split and out-of-time (OOT) testing

* You usually split data into:

  * **Development (train)** sample → used to fit the model.
  * **Validation / test** sample → used to independently check performance.
* A **random** split is common, but in credit risk an **out-of-time** (OOT) split is very important:

  * Train on earlier years (e.g. 2018–2021),
  * Test on a later year (e.g. 2022).
* OOT performance tests whether the model generalises to **new periods**, not just memorised the training sample.

---

### #45 – Feature engineering basics for PD models

Common types of features:

* **Customer characteristics**: age, income, employment type, bureau score, vintage.
* **Behavioural variables** (for existing customers): utilisation %, delinquencies, payment patterns.
* **Loan attributes**: loan amount, tenor, LTV, product type, collateral.
* **Derived ratios**: income-to-EMI, utilisation ratios, DTI, etc.

Key practices:

* Handle missing values and outliers consistently.
* Use **business logic** + data exploration to choose and transform variables before modelling.

---

### #46 – Weight of Evidence (WoE) transformation

* **WoE** is a transformation often used in credit scorecards; it measures how well a **bin of a variable** separates goods vs bads.
* For each bin *i*:
  $$\text{WoE}_i = \ln\left(\frac{% \text{Non-defaults in bin } i}{% \text{Defaults in bin } i}\right)$$
* Positive WoE → bin has relatively **more goods than bads**.
* Negative WoE → bin has relatively **more bads than goods**.
* Benefits:

  * Handles outliers and missing values well.
  * Enforces **monotonic relationships** with log-odds, which suits logistic regression.

---

### #47 – Information Value (IV) for variable selection

* **Information Value (IV)** summarises a variable’s **predictive power** for separating good vs bad.
* Formula (over bins i):
  $$IV = \sum_i (\text{DistGood}_i - \text{DistBad}_i) \times WoE_i$$
* Rules of thumb (industry practice):

  * IV < 0.02 → not predictive
  * 0.02–0.1 → weak
  * 0.1–0.3 → medium
  * 0.3–0.5 → strong
  * > 0.5 → suspicious (may indicate leakage / data issues).
* Typically used to **screen variables** before building the PD model.

---

### #48 – Why logistic regression is the industry standard for PD

* **Logistic regression** is the classic method for **binary outcomes** like default vs non-default.
* Reasons regulators and banks like it:

  * Produces **probabilities** between 0 and 1.
  * Coefficients are **interpretable** (impact on log-odds).
  * Works well with **WoE-transformed** variables.
  * Transparent and auditable – aligns with Basel / EBA expectations for explainable models.
* More complex ML models exist, but logistic regression remains the **gold standard** for regulated credit scoring.

---

### #49 – Logistic regression equation (with your coding)

* With target **Y** = 1 for non-default, 0 for default, logistic regression models:
  $$P(Y=1 | X) = \frac{1}{1 + e^{-(\beta_0 + \beta_1 X_1 + \dots + \beta_k X_k)}}$$
* Taking log-odds:
  $$\log\left(\frac{P(Y=1)}{1 - P(Y=1)}\right) = \beta_0 + \sum \beta_j X_j$$
* If you use WoE variables:

  * Each **β × WoE** term adds or subtracts risk in a way that is easier to interpret and bin-by-bin explain.

---

### #50 – Interpreting logistic regression coefficients (risk sense)

* With **Y=1 = non-default**:

  * A **positive β** for a variable increases the log-odds of *non-default* → **less risky**.
  * A **negative β** decreases the log-odds of non-default → **more risky**.
* Example:

  * If `β_income` > 0 → higher income associated with **lower default risk**.
  * If `β_high_LTV` < 0 → high LTV associated with **higher default risk**.
* Because WoE already encodes “more good vs more bad”, coefficients often just scale that relationship.

---

### #51 – PD calibration: aligning to long-run default rates

* After fitting the model, you may need to **calibrate probabilities** so that:

  * Average predicted PD matches **long-run observed default rates** per segment or rating grade.
* Regulators (Basel & EBA) expect:

  * PDs to reflect a **long-run average** of 1-year default rates.
  * Calibration that uses **representative data from good and bad economic periods**.
* Techniques: intercept adjustment, scaling factors, PD curve fitting.

---

### #52 – From score to PD and rating grades

* Many banks transform the logistic model output into:

  1. A **score** (e.g. 300–900 scale)
  2. Then map the score to **PD bands / rating grades**.
* Typical design:

  * Choose **“points to double odds”** (e.g. 20 points doubles odds of being good).
  * Define anchor point: odds 20:1 at score 600, etc.
* Rating grades then group ranges of PD:

  * Grade 1: PD ≤ 0.1%
  * Grade 2: 0.1–0.3%
  * … etc.
* Those PDs feed directly into **RWA, capital and ECL** calculations.

---

### #53 – Cut-offs, strategies and overrides

* Once you have PD / scores, **business rules** define how they’re used:

  * **Automatic approval zone** (low PD)
  * **Manual review zone**
  * **Automatic decline zone** (high PD).
* You can add **strategy overlays**:

  * Higher pricing, lower limits, extra collateral for medium risk.
* Governance:

  * All rules, thresholds and **overrides** (where staff disagree with the model) must be documented and monitored – regulators look for this.

---

### #54 – Reject inference (high-level idea)

* In application scorecards, you only observe **defaults/non-defaults for accepted customers**.
* **Rejected applications** don’t have performance data → sample is **biased**.
* **Reject inference** methods try to adjust for this by:

  * Extrapolating from accepted population,
  * Using bureau outcomes, or
  * Weighting techniques.
* It’s a nuanced topic; regulators expect any reject inference technique to be **transparent, documented and validated**, not a black box.

---

### #55 – LGD modelling basics

* **LGD models** use data from **defaulted exposures**:

  * Cashflows recovered (collateral sale, guarantees, payments)
  * Recovery costs
  * Time to recovery (discounting).
* Steps:

  1. Define **economic loss** = discounted shortfall vs EAD.
  2. Segment exposures (secured/unsecured, product type, region, etc.).
  3. Fit models (regression, beta regression, decision trees, etc.) to estimate LGD % by segment.
* Basel expects **downturn LGD** – calibrated to be appropriate in adverse conditions, not just average.

---

### #56 – EAD and Credit Conversion Factor (CCF) modelling

* For term loans, **EAD** at default is often close to **current outstanding** plus accrued interest.
* For revolving / undrawn limits, customers frequently **draw more** before default:

  * EAD > current drawn amount.
* Modelling approach: estimate **Credit Conversion Factor (CCF)**:
  $$CCF = \frac{EAD - \text{current drawn amount}}{\text{undrawn limit}}$$
* Steps:

  1. Calculate realised CCFs for historical defaults.
  2. Segment by product, customer type, utilisation bands, etc.
  3. Fit models (regression / trees) to predict CCF.
* Regulators require **at least 5–7 years** of relevant data, including downturn periods, for robust EAD/CCF estimates.

---

### #57 – Documentation & use test for PD/LGD/EAD models

* Basel and EBA guidelines emphasise that internal models must be:

  * **Well documented** (data, methodology, assumptions, limitations).
  * Subject to **independent validation and periodic review**.
  * Actually **used in credit decisions, pricing, limit setting**, not only for regulatory capital (the “use test”).
* For this role, you can position yourself as someone who:

  * Understands both the **technical model** and the **business usage**,
  * Can help ensure the implementation in CapAd is **aligned with regulations and documentation**.

---

