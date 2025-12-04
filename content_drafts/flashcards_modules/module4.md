
---

### #58 – What is “model validation” in credit risk?

* Regulators (e.g. US SR 11-7) define **model validation** as the set of processes and activities to **verify that models are performing as expected, in line with their design objectives and business uses**.
* It typically covers:

  * **Data & methodology review** (theory, assumptions, variable choices)
  * **Outcome analysis** (discrimination, calibration, stability)
  * **Ongoing monitoring & backtesting**
* Validation should be **independent** of model development, documented, and repeated **periodically** or after major changes.

---

### #59 – Development vs Validation vs Monitoring vs Backtesting

* **Development** – building the model: data prep, feature engineering, fitting, initial performance checks.
* **Independent Validation** – a separate team **challenges** development:

  * Check conceptual soundness, data quality, assumptions
  * Test discrimination, calibration, sensitivity, stability.
* **Monitoring** – ongoing, usually **monthly/quarterly**:

  * Track performance metrics, drift (PSI/CSI), overrides, process issues.
* **Backtesting** – periodic **comparison of predictions vs realised outcomes** (e.g. PD vs realised default rate per grade).

---

### #60 – Confusion matrix with your labels (0 = default, 1 = non-default)

For a **binary PD model** with:

* **0 = default (bad)**
* **1 = non-default (good)**

Confusion matrix:

|                        | Actual 0 (default)                     | Actual 1 (non-default)                 |
| ---------------------- | -------------------------------------- | -------------------------------------- |
| **Predicted 0 (bad)**  | **TN** – correctly predicted bad       | **FN** – good wrongly predicted as bad |
| **Predicted 1 (good)** | **FP** – bad wrongly predicted as good | **TP** – correctly predicted good      |

* **FP** = approved **defaulter** (credit loss risk).
* **FN** = rejected **good** customer (lost business).

---

### #61 – Accuracy (and why it’s not enough)

* **Accuracy** = proportion of all cases predicted correctly:
  $$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$
* In credit risk, defaults are usually **rare** (e.g. 2–3%), so:

  * A dumb model that predicts “everyone is good” can have **very high accuracy**.
* Therefore, accuracy alone is **misleading**; we need **discrimination metrics** (AUC, Gini, KS) and **calibration / backtesting** as well.

---

### #62 – Precision for class 1 (non-default)

With **positive class = 1 (non-default)**:

* **Precision** answers:

  > “Of all borrowers I predicted as **good (1)**, what fraction really were good?”
* Formula:
  $$\text{Precision}_{(1)} = \frac{TP}{TP + FP}$$
* High precision → among approved accounts, **few hidden defaulters** (low FP).
* Low precision → you are approving **too many bads**; your “good” bucket is dirty.

---

### #63 – Recall for class 1 (non-default)

Again with **positive class = 1 (non-default)**:

* **Recall** answers:

  > “Of all **truly good** borrowers (1), how many did I correctly approve as good?”
* Formula:
  $$\text{Recall}_{(1)} = \frac{TP}{TP + FN}$$
* High recall → you **approve most of the good** customers; few good customers are wrongly rejected (low FN).
* Low recall → you reject many good borrowers → lost revenue and unhappy customers.

---

### #64 – ROC curve and AUC (threshold-free discrimination)

* For a binary classifier, the **ROC curve** plots:

  * **True Positive Rate** (sensitivity) vs **False Positive Rate** across all possible thresholds.
* **AUC (Area Under the ROC Curve)** is a single number between 0 and 1 that measures **how well the model ranks good vs bad**:

  * 0.5 → no better than random
  * 1.0 → perfect ranking.
* Interpretation: AUC ≈ probability a randomly chosen good borrower gets a **higher score** than a randomly chosen bad borrower.

---

### #65 – Gini coefficient in credit scoring

* In credit scoring, the **Gini coefficient** is a rescaled version of AUC:
  $$\text{Gini} = 2 \times \text{AUC} - 1$$
* So:

  * AUC = 0.5 → Gini = 0 (no power)
  * AUC = 0.75 → Gini = 0.5 (decent)
  * AUC = 0.85 → Gini = 0.7 (strong)
* Gini measures **discriminatory power**: how well the model separates “bad” vs “good” borrowers.

---

### #66 – Kolmogorov–Smirnov (KS) statistic for PD models

* **KS statistic** measures the **maximum separation** between cumulative distributions of scores for bads vs goods.
* Steps:

  1. Sort accounts by score (or PD).
  2. Compute cumulative % of bads and cumulative % of goods.
  3. **KS** = maximum vertical distance between these two cumulative curves.
* Higher KS → better separation; widely used in **credit model validation**.

---

### #67 – Discrimination vs calibration

* **Discrimination** = how well the model **ranks** bad vs good:

  * Metrics: **AUC, Gini, KS**.
* **Calibration** = whether predicted PDs **match realised default frequencies**:

  * A portfolio can have great KS/Gini but **poor calibration** (PDs systematically too high or too low).
* Regulatory view (Basel II/III, EBA PD/LGD GL):

  * Both **discriminatory power and calibration quality** are required for a rating system to be acceptable.

---

### #68 – Basic PD calibration / backtesting at grade level

* For each **rating grade or PD band**:

  1. Take all accounts that were **non-default** at start of year.
  2. Record **predicted PD** for that grade.
  3. Track **realised default rate** over the next 12 months.
* Compare **predicted PD vs observed default rate**:

  * If PD ≈ observed DR → good calibration.
  * If PD << observed DR → PDs too low (underestimation).
  * If PD >> observed DR → PDs too conservative.
* Statistical tests (e.g. binomial tests, Hosmer–Lemeshow) can be used to formalise this.

---

### #69 – Backtesting ECL / provisions (IFRS 9 angle)

* **ECL backtesting** compares:

  * **Opening ECL/provisions** for a segment or portfolio vs
  * **Actual credit losses realised** over that horizon (write-offs, recoveries, cures).
* Goals:

  * Check whether **ECL is unbiased** over time (not systematically under- or overstated).
  * Identify segments where **PD/LGD/EAD or staging** need recalibration.
* Many supervisors expect regular ECL backtesting as part of **IFRS 9 governance** and ICAAP.

---

### #70 – Population Stability Index (PSI): definition & formula

* **PSI** measures **how much the distribution of a variable or score has shifted** between two samples (e.g. training vs recent production).
* For each bin *i*:

  * Let **Expected%** = share in baseline (e.g. training).
  * Let **Actual%** = share in current / scoring data.
  * Contribution: $(\text{Actual%} - \text{Expected%}) \times \ln(\text{Actual%} / \text{Expected%})$.
* **PSI** = sum of contributions across all bins.

---

### #71 – PSI rule-of-thumb thresholds

Industry rules of thumb (non-regulatory, but widely used):

* **PSI < 0.10** → insignificant change; no action needed.
* **0.10 ≤ PSI ≤ 0.25** → moderate shift; investigate other diagnostics.
* **PSI > 0.25** → major shift; population has changed; model may need recalibration or redevelopment.
* PSI is used for:

  * **Model monitoring** (score distribution drift)
  * **Data stability checks** during development (train vs OOT comparisons).

---

### #72 – Characteristic Stability Index (CSI)

* **CSI** applies the same “stability” concept to **independent variables** (features), not just scores.
* It measures how much the **distribution of a characteristic** has changed between two samples:

  * For example, income band distribution in training vs current production.
* Use cases:

  * Feature stability checks in model development.
  * Ongoing monitoring to detect **feature drift** that may degrade model performance.

---

### #73 – What does model monitoring usually track?

Credit scorecard monitoring packs often include:

* **Discrimination metrics over time** (AUC, Gini, KS).
* **PSI for scores** & sometimes total PSI for portfolio.
* **CSI for key characteristics**.
* **Observed vs predicted default rates** by PD band (back-end performance).
* **Override rates & reasons** (where users change model decisions).
* Volume mix, vintage curves, and segmentation-level performance.

Goal: detect **early warning signals** that the model may be degrading and needs recalibration or replacement.

---

### #74 – Model risk governance (high-level expectations)

* Model risk frameworks (e.g. SR 11-7) expect:

  * **Model inventory** – all PD/LGD/EAD, ECL, CapAd models registered.
  * **Clear roles** – development, validation, approval, owners.
  * **Policies** for development standards, data, documentation, validation and use.
  * **Periodic review** – independent validation at least annually or every few years, plus continuous monitoring.
* For this role, you can position yourself as someone who:

  * Understands these expectations,
  * Can help ensure **CapAd and credit risk models** are validated and documented in a way that passes audit/supervision.

---

### #75 – Why validation & backtesting matter for Basel / ICAAP

* Basel & ICAAP emphasise that capital calculations must be based on **reliable models**; weak models → wrong RWA → **under- or over-capitalisation**.
* Good validation & backtesting:

  * Prove the **rating system and PD/LGD/EAD estimates are sound**.
  * Give senior management and regulators confidence in **CapAd outputs, ICAAP, and provisioning**.


 
---

