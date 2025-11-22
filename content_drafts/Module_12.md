# Module 12 – IRB Approaches, Vasicek Model & Basel 3.1 (Endgame)

---

## 12.1 Why IRB exists (vs Standardised Approach)

In **Standardised Approach (SA)**:

* Regulator gives **fixed risk weights** by exposure class, rating, LTV, etc.
* Simple and transparent, but **coarse** – two very different borrowers can both sit in the same 100% bucket.

For large, sophisticated banks, Basel allows:

> **Internal Ratings-Based (IRB) Approach** – the bank uses its **own estimates** of:
>
> * PD – Probability of Default
> * LGD – Loss Given Default
> * EAD – Exposure at Default
> * M – Effective Maturity
>
> plugged into a **regulatory formula** to get capital.

Goals:

* Make capital more **risk-sensitive** and **portfolio-specific**.
* Reward **better data, modelling, and risk management** – but
* Under **tight rules** and **supervisor approval** (Basel minimum standards).

Basel 3.1 (“finalising Basel III”, “Basel endgame”) then **tightens** IRB and adds an **output floor** so that internal models cannot produce unrealistically low RWAs compared to a standardised benchmark.

---

## 12.2 The four IRB risk parameters – PD, LGD, EAD, M

These four are the **inputs** to the IRB formula.

### 1. PD – Probability of Default

* **Definition:** Chance that the borrower defaults within the next **12 months**.
* Usually linked to an **internal rating grade** (e.g. Grade 1–10).
* Must be a **long-run average**, not just last year’s bad/good experience.
* Basel sets **minimum PD floors** (e.g. for many corporate / bank / sovereign exposures, PD cannot be below a tiny floor such as 0.05%).

### 2. LGD – Loss Given Default

* **Definition:** Percentage of **EAD** the bank expects to **lose if default happens**.
* If recovery rate is 40%, LGD = 60%.
* Under IRB, LGD must be a **“downturn LGD”** – calibrated to **stressed** (recession) conditions, not good times.

### 3. EAD – Exposure at Default

* **Definition:** Best estimate of how much will be **outstanding at the moment of default**.
* For a term loan: roughly current outstanding + accrued interest.
* For limits / credit cards / working capital: bank must model **how much of the undrawn part will be used** before default – very similar idea to CCFs in SA, but **estimated internally**.

### 4. M – Effective Maturity

* **Definition:** Effective remaining **time to final repayment**, measured in **years**.
* Usually between **1 and 5** years in the IRB formula.
* Longer maturity → more time for bad things to happen → **higher capital**.

These four feed into:

* **Expected Loss (EL)** – what you expect *on average* each year.
* **Unexpected Loss (capital)** – extra cushion for **bad but plausible** years.

---

## 12.3 Expected Loss (EL) vs regulatory capital

### 12.3.1 Expected Loss

Basel IRB definition:

[
\text{EL} = PD \times LGD \times EAD
]

* This is **average credit loss per year** (in money terms if you multiply by EAD).
* Basel wants EL to be covered by **provisions**, not by capital.

### 12.3.2 Unexpected Loss (capital concept)

Regulatory capital under IRB is designed to cover:

> **Unexpected loss** = “loss at a very high confidence level (99.9%) minus EL”.

* “99.9%” means: **one bad year out of 1000** – very extreme, but not impossible.
* Basel uses a **portfolio model** (the **Vasicek / ASRF model**) to get this high-quantile loss.

In the IRB framework, we denote the **capital requirement as a percentage of EAD** by K:

[
K = \text{capital charge as % of EAD}
]

Then Basel defines **RWA** as:

[
\text{RWA} = 12.5 \times K \times EAD
]

(12.5 is 1 ÷ 8% so that **8% × RWA = capital**.)

---

## 12.4 The Vasicek / ASRF model – intuitive explanation

This is the **mathematical engine** behind IRB.

### 12.4.1 Big idea

Take a very large, well-diversified loan portfolio.

* Each borrower’s default is driven by:

  * a **common economic factor** (recession vs boom), and
  * that borrower’s own **idiosyncratic** risk.

Model:

* If the economy is bad, **many borrowers default together**.
* If the economy is good, **few defaults**.

Basel uses the **Asymptotic Single Risk Factor (ASRF)** model – originally described by **Vasicek (2002)**.

### 12.4.2 The latent-variable setup

For borrower *i*, define an **“asset value”** variable ( X_i ):

[
X_i = \sqrt{\rho}, Y + \sqrt{1-\rho}, \varepsilon_i
]

Where:

* (Y) = **systematic factor**, common to all borrowers (state of the economy),
  (Y \sim N(0,1))
* (\varepsilon_i) = **idiosyncratic factor**, specific to borrower i,
  (\varepsilon_i \sim N(0,1)), independent across i and of Y
* (\rho) = **asset correlation** between borrowers (0 < ρ < 1)

Default rule:

[
\text{Borrower } i \text{ defaults if } X_i < a
]

The threshold (a) is set so that **unconditional** probability of default equals PD:

[
PD = \Phi(a) \quad \Rightarrow \quad a = \Phi^{-1}(PD)
]

Where:

* (\Phi) is the **standard normal CDF**
* (\Phi^{-1}) (often denoted G in Basel) is its **inverse**.

### 12.4.3 Conditional default probability

Given a particular state of the economy (Y = y):

[
P(\text{default} \mid Y=y) =
\Phi!\left(\frac{\Phi^{-1}(PD) - \sqrt{\rho}, y}{\sqrt{1-\rho}}\right)
]

* If (y) is **very low** (bad economy), this conditional PD becomes **much higher**.
* If (y) is **high** (good economy), conditional PD is lower.

### 12.4.4 Portfolio loss and high-quantile

Assume a very large number of **identical** borrowers (same PD, LGD, EAD).

Conditional on (Y=y), the **portfolio loss rate** is approximately:

[
L(y) \approx LGD \times
\Phi!\left(\frac{\Phi^{-1}(PD) - \sqrt{\rho}, y}{\sqrt{1-\rho}}\right)
]

We want the **99.9% quantile** of loss, i.e. loss when the economy is extremely bad.

* The 0.1% worst economy corresponds to a low value of Y.
* For quantile level α = 99.9%, the corresponding quantile of Y is
  (y_\alpha = \Phi^{-1}(1-\alpha) = \Phi^{-1}(0.001)), which is a **large negative** number.

After rearranging (this is the maths Basel did for us), the **loss at 99.9% quantile** becomes:

[
L_{\text{0.999}} =
LGD \times
\Phi!\left(\frac{\Phi^{-1}(PD) + \sqrt{\rho},\Phi^{-1}(0.999)}{\sqrt{1-\rho}}\right)
]

Then the **capital per unit of EAD** is:

[
K = L_{\text{0.999}} - EL
= LGD \left[
\Phi!\left(\frac{\Phi^{-1}(PD) + \sqrt{\rho},\Phi^{-1}(0.999)}{\sqrt{1-\rho}}\right)

* PD
  \right]
  ]

*This is the classic **Vasicek capital formula** for a homogeneous portfolio.*

Basel IRB essentially **uses this structure**, with:

* a more sophisticated **correlation function** (R(PD)) instead of a fixed ρ, and
* a **maturity adjustment** to account for M.

---

## 12.5 Basel IRB corporate formula – tying it all together

For **corporate / bank / sovereign** exposures under IRB, Basel uses a risk-weight function that looks like:

### 12.5.1 Notation

* (\Phi(x)) = standard normal CDF (often written N(·))
* (G(p) = \Phi^{-1}(p)) = inverse CDF
* (R(PD)) = **asset correlation** as a function of PD
* (b(PD)) = function used in maturity adjustment
* (M) = effective maturity (years, typically between 1 and 5)
* (K) = capital requirement **as % of EAD**

### 12.5.2 Correlation function (R)

For corporate exposures, Basel uses a PD-dependent correlation:

[
R(PD) =
0.12 \cdot \frac{1 - e^{-50 PD}}{1 - e^{-50}} +
0.24 \cdot \left[1 -
\frac{1 - e^{-50 PD}}{1 - e^{-50}}
\right]
]

Intuition:

* **Safer borrowers (low PD)** → higher correlation (they tend to default together only in very bad systemic events).
* **Riskier borrowers (high PD)** → lower correlation (more idiosyncratic).

### 12.5.3 Maturity adjustment

Define:

[
b(PD) = \big(0.11852 - 0.05478 \ln(PD)\big)^2
]

Then **maturity adjustment (MA)** is:

[
\text{MA}(PD,M) =
\frac{1 + (M-2.5),b(PD)}
{1 - 1.5,b(PD)}
]

* If **M = 2.5**, MA ≈ 1 (no adjustment).
* Longer M → MA > 1 → higher capital.
* Shorter M → MA < 1 → lower capital.

*(Exact constants are taken from the Basel II IRB risk-weight function for corporates; later reforms keep the same structure but may tweak details for specific asset classes.)*

### 12.5.4 Capital requirement K (corporates)

Using Vasicek structure plus correlation and maturity adjustment, Basel defines:

[
K(PD,LGD,M) =
LGD \left[
\Phi!\left(
\frac{1}{\sqrt{1-R}}
G(PD) +
\sqrt{\frac{R}{1-R}}
G(0.999)
\right)

* PD
  \right]
  \times \text{MA}(PD,M)
  ]

Where:

* (R = R(PD)) from above.
* (G(0.999) = \Phi^{-1}(0.999)) is the **99.9% systemic shock**.
* The term in square brackets is just the **Vasicek capital formula** with correlation R(PD) instead of ρ.
* MA adjusts for maturity.

Then:

[
\text{RWA} = 12.5 \times K(PD,LGD,M) \times EAD
]

* **Interview way to say it:**

> “For corporates, IRB capital is
> K = LGD × [Vasicek-style 99.9% loss − PD] × maturity adjustment;
> then RWA = 12.5 × K × EAD.”

---

## 12.6 Foundation vs Advanced IRB (F-IRB vs A-IRB)

Basel distinguishes two levels:

| Parameter | Foundation IRB (F-IRB)                         | Advanced IRB (A-IRB)                       |
| --------- | ---------------------------------------------- | ------------------------------------------ |
| **PD**    | Bank estimates (subject to standards & floors) | Bank estimates                             |
| **LGD**   | **Supervisory values** (regulator tables)      | Bank estimates (with floors)               |
| **EAD**   | Supervisory rules (e.g. fixed CCFs)            | Bank estimates (with constraints & floors) |
| **M**     | Bank calculates using rules                    | Bank calculates                            |

* F-IRB = **half-way house**: bank models **PD** but uses **standard LGD/EAD**.
* A-IRB = bank estimates **all** PD, LGD, EAD (and M), under tighter scrutiny.

Retail IRB is effectively **Advanced only** – banks must estimate all parameters.

---

## 12.7 IRB minimum requirements – governance perspective

To use IRB, a bank must satisfy **minimum standards** (Basel CRE33/36 etc.):

1. **Rating system design**

   * Clearly defined **borrower rating grades** and **facility / LGD grades**.
   * Enough grades to meaningfully separate risk.

2. **Default definition**

   * Consistent with Basel (e.g. 90+ days past due, distressed restructuring) applied **everywhere** – models, reporting, pricing.

3. **Data history**

   * Enough **internal default and loss data** for:

     * PD calibration (default rates by grade),
     * LGD calibration (recovery rates, especially in downturn),
     * EAD calibration (limit usage near default).

4. **Model development & validation**

   * Transparent methodology, segmentation, calibration.
   * Independent **validation**, **backtesting**, challenge, and periodic review.

5. **Use test**

   * Ratings and parameters must be used in **daily risk management**:

     * Credit approval,
     * Pricing,
     * Limits,
     * Monitoring.
   * Not just “built for Basel”.

6. **Governance**

   * Board/senior management oversight.
   * Internal audit and model risk governance.

This is why many supervisors (ECB, PRA, RBI, etc.) say IRB is a **multi-year journey**, not just a coding project.

---

## 12.8 EL vs provisions under IRB

Under IRB:

* **EL = PD × LGD × EAD** is supposed to be covered by **accounting provisions**.
* Capital is meant to cover **unexpected loss** only.

Basel therefore requires banks to:

1. Compute **total IRB EL** across IRB exposures:

   [
   EL_{\text{total}} = \sum_i PD_i \times LGD_i \times EAD_i
   ]

2. Compare to **total provisions** (specific + general) related to those exposures.

Then:

* If **EL > provisions** → **shortfall** = EL − provisions:

  * Shortfall is deducted from capital (historically split 50/50 between CET1 and Tier 2; exact rules depend on the version).

* If **EL < provisions** → **excess provisions** (up to a cap) can be added to **Tier 2**.

Conceptual soundbite:

> “Under IRB, you don’t want to both **count provisions** and **hold capital** for the same expected losses; Basel forces a comparison and adjusts capital accordingly.”

---

## 12.9 Basel 3.1 (“endgame”) – why IRB was reformed

Post-crisis, supervisors found:

* **Huge variation** in RWAs between banks with similar portfolios.
* Concerns that some internal models were **too optimistic**.
* SA and IRB results were sometimes **far apart**.

Basel 3.1 fixes this by:

1. Making **SA more risk-sensitive** (revised SA-CR, SCRA, new real estate/LTV rules).
2. **Restricting IRB** for some low-default portfolios.
3. Introducing an **output floor** so that total RWA from internal models cannot fall below **72.5% of SA RWA**.

---

## 12.10 Basel 3.1 – constraints on IRB usage

### 12.10.1 Where IRB is no longer allowed / restricted

Basel 3.1 **removes** or **narrows** IRB for some portfolios:

* **Advanced IRB** is **not allowed** for:

  * Some **large corporate** exposures,
  * Many **bank and other financial institution** exposures.
* Equity IRB is largely **withdrawn** – equity exposures must use **standardised** approaches.

Idea: where data is scarce and models are unstable, **less modelling, more standardisation**.

### 12.10.2 Input floors

Basel 3.1 tightens **parameter floors**:

* PD floors (e.g. corporate/bank/sovereign PD not below a small floor).
* LGD floors (e.g. **25% minimum** for unsecured corporates).
* Minimum CCF / EAD floors for undrawn commitments.

This prevents capital from being driven near zero by very optimistic parameters.

### 12.10.3 Stronger minimum standards

Supervisors also:

* Sharpen **default definitions** (e.g. EBA guidelines in EU).
* Demand better **data quality**, **model validation**, and **governance**.

---

## 12.11 The aggregate output floor (72.5%)

This is the **headline Basel 3.1 reform**.

### 12.11.1 Definition

Let:

* (\text{RWA}_{\text{internal}}) = total RWA using **IRB + internal models + SA** where applicable (what the bank’s chosen approaches give).
* (\text{RWA}_{\text{SA}}) = total RWA if the bank applied **only the revised Standardised Approaches**.

The **output floor** says:

[
\text{RWA}*{\text{final}} =
\max\Big(
\text{RWA}*{\text{internal}},
\ 0.725 \times \text{RWA}_{\text{SA}}
\Big)
]

So **total RWA** can never be less than **72.5% of standardised RWA**.

### 12.11.2 Intuition

* IRB still matters – you can get capital relief if your portfolio is genuinely low-risk.
* But **you can’t go below 72.5% of what SA would give**.
* SA becomes a **benchmark floor**.
* For systems: **even IRB banks must compute SA RWA in parallel**.

---

## 12.12 How SA and IRB co-exist in a Basel 3.1 bank

In practice, a big bank may have:

* Some portfolios on **SA** (e.g. equity, some low-default corporates/banks).
* Some on **F-IRB** (PD internal, LGD/EAD supervisory).
* Some on **A-IRB** (full PD/LGD/EAD internal).

At total-bank level:

1. Compute **RWA_internal** = sum of RWA from SA + IRB + other internal-model frameworks.
2. Compute **RWA_SA** = RWA if everything were on **standardised**.
3. Apply the **output floor** to get **RWA_final**.

Capital ratios are then:

[
\text{CET1 ratio} = \frac{\text{CET1}}{\text{RWA}*{\text{final}}},\quad
\text{Total capital ratio} = \frac{\text{Total capital}}{\text{RWA}*{\text{final}}}
]

---

## 12.13 India’s position – IRB mostly conceptual, SA is the workhorse

### 12.13.1 RBI IRB guidelines

RBI has:

* Recognised **Standardised, F-IRB, A-IRB** in its Basel II/III framework.
* Issued a detailed **IRB implementation framework** (2011 circular) outlining:

  * Eligibility criteria,
  * Migration path (F-IRB first, then A-IRB),
  * Data and governance requirements.

RBI and CAFRAL presentations repeatedly note that **data, systems, and governance gaps** make IRB a **long-term goal** for most Indian banks.

### 12.13.2 Reality today

* For **credit risk capital**, Indian commercial banks are effectively on **Standardised Approach**.
* IRB is:

  * Used by some **global banking groups** at group level, and
  * A **conceptual requirement** Indian banks must understand for future readiness and for dealing with global counterparties/vendors.

So in an Indian **capital adequacy & regulatory reporting** role:

* Day-to-day work is **SA + RBI Basel III**, but
* Knowing IRB and Basel 3.1 **makes you much stronger** for:

  * Interacting with global banks,
  * Understanding vendor products (which often support both SA and IRB),
  * Future evolution of Indian regulation.

---

## 12.14 How your web app could extend from SA to IRB + floor

If your SA engine (Modules 4–9) had to support IRB:

1. **New data fields**

   * Internal **rating grade** per obligor/facility.
   * PD, LGD, EAD, M per facility.
   * Default and loss history for backtesting.
   * Flags: eligible for **SA / F-IRB / A-IRB**.

2. **Two capital calculators**

   * **IRB calculator**:

     * Implement K(PD,LGD,M) using the **Vasicek-style formula** and R(PD), b(PD), MA.
     * RWA_IRB = 12.5 × K × EAD.

   * **SA calculator (Basel 3.1 SA-CR)**:

     * Updated SA risk-weight tables (LTV-based mortgages, SCRA for banks, etc.) to compute RWA_SA for the same exposures.

3. **Output floor logic**

   * Aggregate:

     * RWA_internal = SA + IRB + other.
     * RWA_SA (full-SA view).
   * Apply 72.5% floor and show:

     * RWA_internal, 0.725 × RWA_SA, RWA_final,
     * Impact on CET1 / Total capital ratios.

4. **Validation & constraints**

   * Enforce PD, LGD, EAD floors.
   * Enforce portfolio eligibility rules (e.g. no A-IRB where Basel 3.1 forbids it).
   * Provide **error / warning** messages when inputs violate Basel rules.

This tells an interviewer:

> “I know how SA & IRB formulas work **and** how they fit inside a real-world RWA engine with an output floor.”

---

## 12.15 Key points & practical notes

1. **IRB core sentence**

   > “Under IRB, the bank uses its own PD, LGD, EAD and maturity in a Basel-specified Vasicek-type formula to get K (capital % of EAD), then RWA = 12.5 × K × EAD.”

2. **Vasicek intuition**

   * Single economic factor Y drives **joint defaults**.
   * Capital = LGD × [loss at 99.9% economic shock − PD] – that’s exactly what the Vasicek formula implements.

3. **F-IRB vs A-IRB**

   * F-IRB: bank estimates **PD only** (LGD/EAD from regulator).
   * A-IRB: bank estimates **PD, LGD, EAD** (and M) – more freedom but **much heavier supervision**.

4. **Expected vs unexpected loss**

   * EL = PD × LGD × EAD → **provisions**.
   * Capital covers **unexpected loss**; Basel adjusts capital for EL vs provisions to avoid double-counting.

5. **Basel 3.1 & output floor**

   * SA gets stronger and more risk-sensitive.
   * IRB is restricted for low-default portfolios and must respect PD/LGD/EAD floors.
   * **Total RWA cannot be below 72.5% of SA RWA**, so SA is always computed.

6. **India angle**

   * Indian banks **currently use SA** for credit risk capital.
   * IRB is still **conceptual / future**, but understanding it (especially Vasicek & output floor) is a big plus for capital adequacy / regulatory reporting roles.
