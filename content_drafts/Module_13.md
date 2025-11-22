
---

# Module 13 – Summary, Cheat-Sheets & How To Use All This

---

## 13.1 Big picture – from risk to capital

You can see the whole Basel / RBI story as **four layers** that all connect:

1. **System & rules (Modules 1–2)**

   * Global rules: **Basel I → II → III → 3.1** (Basel Committee on Banking Supervision – BCBS).
   * Local rules: RBI implements Basel III in India via its **“Master Circular – Basel III Capital Regulations”** and related guidelines.

2. **Capital & RWA engine (Modules 3–8)**

   * Capital stack: **CET1, AT1, Tier 2 → Tier 1 → Total Capital**.
   * Risk-weighted assets (RWA): credit, market, operational (plus CVA etc.).
   * Capital ratios = **capital ÷ RWA**.

3. **Data, engines & reporting (Modules 9–10)**

   * Data model → RWA engine pipeline → **Pillar 3 DF tables** + RBI regulatory returns.

4. **Capital strategy & advanced approaches (Modules 11–12)**

   * Buffers (CCB, CCyB, SIB), **headroom**, ICAAP, planning.
   * IRB approaches & Basel 3.1 **output floor** tying models back to SA.

If you can narrate that chain end-to-end, you’re already thinking like a capital adequacy / regulatory reporting person.

---

## 13.2 Basel evolution & the three pillars

### 13.2.1 Basel I → II → III → 3.1 (endgame)

* **Basel I (1988)**

  * Simple credit-risk buckets (0%, 20%, 50%, 100%),
  * **8% total capital ratio** on RWA.

* **Basel II (2004)**

  * Introduces **three pillars**.
  * Credit risk: **Standardised + IRB**.
  * Adds **market risk** and **operational risk** capital.

* **Basel III (post-crisis reforms)**

  * Stronger **capital quality** (more & purer CET1).
  * **Capital buffers**: CCB, CCyB, SIB buffers.
  * **Leverage ratio**, **LCR / NSFR** liquidity standards.

* **Basel 3.1 (“finalising Basel III” / endgame)**

  * Revamps **Standardised Approaches** for credit, market & operational risk.
  * **Constrain IRB** (PD/LGD floors, no A-IRB in some low-default portfolios).
  * Introduces **output floor**: total RWA from models ≥ **72.5%** of RWA from revised SAs.

### 13.2.2 The three pillars – snapshot

* **Pillar 1 – Minimum capital**

  * Rules → RWA → minimum capital = 8% × RWA (Basel) or 9% × RWA (India).

* **Pillar 2 – ICAAP & supervisory review**

  * Bank’s own capital assessment (including Pillar-2 type risks like IRRBB, concentration, model risk, etc.).
  * Supervisors can add extra capital / constraints.

* **Pillar 3 – Market discipline**

  * **Standardised disclosure framework** so markets can see:

    * Capital structure, RWA, risk profile, risk management.
  * Basel’s **“consolidated and enhanced Pillar 3 framework”** defines templates; RBI implements via **DF-tables** in its Basel III capital regulations.

---

## 13.3 Capital structure & ratios – fast recap

### 13.3.1 Capital stack

* **CET1** – core equity:

  * Ordinary shares, share premium, retained earnings, statutory reserves, other disclosed reserves,
  * Minus **regulatory deductions** (goodwill, intangibles, certain DTAs, significant investments, etc.).

* **AT1** – Additional Tier 1:

  * Perpetual, subordinated, fully discretionary non-cumulative instruments with **loss-absorption** features.

* **Tier 2** –

  * Dated subordinated debt,
  * Certain provisions (general / standard) within caps.

* **Tier 1 = CET1 + AT1**

* **Total Capital = Tier 1 + Tier 2**

### 13.3.2 Capital ratios – global vs India

Formulas:

[
\text{CET1 ratio} = \frac{\text{CET1}}{\text{RWA}*\text{total}}, \quad
\text{Tier 1 ratio} = \frac{\text{Tier 1}}{\text{RWA}*\text{total}}, \quad
\text{Total Capital Ratio (CRAR)} = \frac{\text{Total Capital}}{\text{RWA}_\text{total}}
]

Basel **minimums (without buffers)**:

* CET1 ≥ **4.5%** of RWA
* Tier 1 ≥ **6%** of RWA
* Total capital ≥ **8%** of RWA

Plus **Capital Conservation Buffer (CCB)** = **2.5% of RWA in CET1**.

**India (Basel III implementation):**

* Minimum **Total Capital ratio (Pillar 1)** = **9% of RWA** (stricter than Basel’s 8%).
* **CCB = 2.5%** of RWA in CET1 (fully phased-in).
* **CCyB** framework exists (0–2.5% of RWA in CET1), but **currently set at 0%**.

So today:

[
\text{Effective minimum Total Capital (incl. CCB) in India} = 11.5% \times \text{RWA}
]

(plus any systemic / Pillar 2 add-ons).

---

## 13.4 SA credit risk – tiny “how to” pipeline

For **each exposure**, Standardised Approach (SA) works like this:

1. **Classify exposure (Basel + RBI rules)**

   * Sovereign, bank, corporate, regulatory retail, housing, CRE / CRE-RH, NPA, securitisation, equity, other.
   * RBI adds extra tests: regulatory retail, LTV-based housing buckets, CRE vs CRE-RH, NPA provisioning buckets, etc.

2. **Compute EAD**

   * **On-balance sheet**:
     [
     \text{EAD}_{\text{on}} = \max(0,\ \text{gross exposure} - \text{specific provisions} - \text{write-offs})
     ]

   * **Off-balance sheet**:
     [
     \text{EAD}_{\text{off}} = \text{Notional} \times \text{CCF}
     ]
     CCFs from Basel / RBI tables (e.g. 100% for direct credit substitutes, 50% performance guarantees, 20% trade LCs, 20/50% other commitments, 0% unconditionally cancellable lines in current RBI rules).

3. **Apply CRM (if any)**

   * **Collateral** – comprehensive approach (India):
     [
     E^* = \max{0,\ E(1+H_e) - C(1 - H_c - H_{fx})}
     ]
   * **Guarantees / CDS** – substitution approach: protected part takes **guarantor RW**, adjusted for FX + maturity mismatch.

4. **Assign risk weight (RW)**

   * From Basel / RBI SA tables based on exposure class, rating, LTV / loan size, NPA bucket, etc.

5. **Compute RWA**

   [
   \text{RWA} = (\text{EAD or }E^*) \times \text{RW}
   ]

Sum across all exposures → **credit risk RWA**.

---

## 13.5 Quick memory blocks – OBS, CCF & CRM

### 13.5.1 Off-balance sheet exposures (Module 6)

* **Rule:**
  [
  \text{EAD}_{\text{off}} = \text{Notional} \times \text{CCF}
  ]

* **Typical RBI / Basel CCF patterns** for non-derivatives:

  * Direct credit substitutes → **100%**
  * Performance guarantees → **50%**
  * Short-term trade LCs → **20%**
  * Other commitments ≤ 1 year → **20%**
  * Other commitments > 1 year → **50%**
  * Unconditionally cancellable commitments → **0%** in current RBI rules
    (Basel 3.1 moves towards small positive CCFs for some UCCs).

### 13.5.2 CRM (Module 7)

* **Collateral (India – only comprehensive approach for credit risk):**

  * Eligible: cash & own deposits, gold, GoI / state securities, certain rated debt, NSC/KVP, eligible insurance surrender values, qualifying MF units, etc.
  * Exposure and collateral are **haircut** for price / FX risk: (H_e, H_c, H_{fx}).

* **Guarantees / credit derivatives:**

  * Must be **direct, explicit, irrevocable, unconditional**, and clearly reference the exposure.
  * Protected part takes **guarantor RW**, after FX haircut and maturity-mismatch scaling.

* **Order in your head:**

  1. EAD (including CCFs), then
  2. CRM, then
  3. Risk weight → RWA.

---

## 13.6 Other Pillar 1 risk snippets

### 13.6.1 Securitisation (Module 8)

* Securitisation = pool + SPV + **tranches** (equity, mezz, senior) + **loss waterfall**.
* Capital via SEC-IRBA / SEC-ERBA / SEC-SA approaches under the revised framework.
* If you **cannot** apply an approach or don’t meet conditions → **fallback**:

  * Risk weight **1250%** globally (or **1111%** in India because minimum capital is 9%, not 8%).
  * Capital ≈ 100% of exposure → economically like a deduction.

### 13.6.2 Market risk

* **Trading book vs banking book** boundary is critical.
* Basel’s **FRTB** reform replaces old VaR rules with:

  * **Standardised Approach for Market Risk (SA-MR)** – sensitivity-based.
  * **Internal Models Approach (IMA)** – Expected Shortfall-based with NMRF add-ons.

### 13.6.3 Operational risk

* Basel II: **BIA / TSA / AMA** (Gross Income based).
* Basel III: **Standardised Measurement Approach (SMA)** –

  * Capital = **Business Indicator Component (BIC)** × **Internal Loss Multiplier (ILM)**, combining size/activity + internal loss history.

India is moving from BIA/TSA towards SMA as Basel 3.1 gets implemented.

---

## 13.7 Engine & reporting – compressed recap

### 13.7.1 RWA engine pipeline (Module 9)

1. **Data ingestion**

   * Pull from CBS, treasury, collateral, ratings, etc.; run DQ checks.

2. **Classification**

   * Map each facility to a **Basel + RBI exposure class** (sovereign, bank, corporate, retail, housing, CRE, NPA, securitisation, etc.).

3. **EAD computation**

   * On-balance: gross – provisions.
   * Off-balance: Notional × CCF.

4. **CRM application**

   * Split into slices (collateralised / guaranteed / unprotected) and apply formulas.

5. **Risk weights**

   * Use SA / RBI tables by class, rating, LTV, NPA bucket.

6. **RWA & capital**

   * Sum RWA across exposures → credit RWA.
   * Add market & operational → **total RWA**.
   * Capital ratios vs 9% + buffers.

7. **Controls & reconciliation**

   * Reconcile exposures with GL, RWA movements vs prior period, etc.

### 13.7.2 Pillar 3 / DF tables (Module 10)

* RBI embeds Basel Pillar 3 into **DF tables** (DF-1, DF-2, …) under Basel III capital regs.

Key ones:

* **DF-1** – Scope of application (reg vs accounting consolidation).
* **DF-2** – Capital structure & capital adequacy (CET1, AT1, Tier 2, RWA, ratios).
* **DF-3 / DF-4** – Credit risk general + SA portfolios (exposure class, RW buckets).
* **DF-5** – CRM usage.
* **DF-6–8** – Securitisation, market risk, operational risk.

Frequency:

* DF-2/3/4 at least **quarterly**; full Pillar 3 at least **half-yearly**.

---

## 13.8 Buffers, headroom & planning – formula view

### 13.8.1 Buffers

* India:

  * Minimum total capital = **9% of RWA**.
  * **CCB = 2.5%** of RWA in CET1 (fully in force).
  * **CCyB = 0–2.5%** (currently **0%**).

* Systemic buffers (for SIBs) and Pillar-2 add-ons may sit on top.

### 13.8.2 Capital headroom

Let:

* (K) = total capital,
* (\text{RWA}) = total risk-weighted assets,
* (r_{\min}) = **required** total capital ratio (min + buffers + SIB + Pillar 2 etc.).

Then:

[
\text{Required capital} = r_{\min} \times \text{RWA}
]

[
\text{Headroom} = K - r_{\min} \times \text{RWA}
]

[
\text{Headroom ratio} = \frac{K}{\text{RWA}} - r_{\min}
]

BIS and supervisors describe **capital headroom** exactly as “surplus capital above all minimum requirements and buffers.”

### 13.8.3 Capital planning equations (1-period, simple)

Capital evolution:

[
K_{t+1} = K_t + \Pi_t - D_t + \Delta K_{\text{ext}, t}
]

RWA evolution:

[
\text{RWA}_{t+1} = \text{RWA}_t + \Delta \text{RWA}_t
]

Future capital ratio:

[
\text{CRAR}*{t+1} = \frac{K*{t+1}}{\text{RWA}_{t+1}}
]

Planning question:

> For my **target ratio (r_\text{target})** (usually above 11.5%), is
> (\text{CRAR}*{t+1} \ge r*\text{target}) under base & stress scenarios?

---

## 13.9 IRB & Basel 3.1 – tiny conceptual cheat sheet

### 13.9.1 IRB parameters & EL

* **PD** – one-year probability of default (with floors like 0.05% for certain corporate / bank / sovereign exposures under Basel 3.1).
* **LGD** – downturn loss given default (subject to minimum LGD floors).
* **EAD** – exposure at default (on-balance + modelled CCF for undrawn lines).
* **M** – effective maturity, usually 1–5 years.

Core identity:

[
\text{EL} = PD \times LGD \times EAD
]

Capital function:

[
\text{RWA} = 12.5 \times K \times EAD
]

where **K** is the IRB capital charge (% of EAD) from the **Basel ASRF / Vasicek-style formula** calibrated to 99.9% confidence.

### 13.9.2 F-IRB vs A-IRB

* **Foundation IRB (F-IRB)** – bank estimates PD; regulator prescribes LGD/EAD.
* **Advanced IRB (A-IRB)** – bank estimates PD, LGD, EAD (subject to floors and minimum standards).

### 13.9.3 EL vs provisions

* IRB **separates**:

  * **Expected loss (EL)** – covered by provisions,
  * **Unexpected loss (UL)** – covered by capital.
* If **EL > provisions** → shortfall is deducted from capital;
  if **EL < provisions** → excess (up to a cap) can go into Tier 2.

### 13.9.4 Basel 3.1 constraints & output floor

* IRB use **restricted** for low-default portfolios (large corporates, banks, some equity).
* Stronger **PD, LGD, EAD input floors**.
* Higher model governance & validation requirements.

**Output floor:**

[
\text{RWA}*\text{final} = \max\left(\text{RWA}*\text{internal},\ 0.725 \times \text{RWA}_\text{SA}\right)
]

BCBS explicitly states: RWA from internal models must be **no lower than 72.5%** of RWA from revised Standardised Approaches.

So even IRB banks must **always run SA in parallel** to compute the floor.

**India today:** for credit risk capital, banks are essentially **SA-only**; IRB is still more conceptual / future-directional, except for some global groups.

---

## 13.10 Key points & practical notes 💡

These are the “ready-to-use” lines for interviews + your web app:

1. **Whole Basel story in one breath**

   > “Global Basel standards (I → II → III → 3.1) are implemented by RBI via Basel III capital regulations. Banks turn their balance sheet into RWA using SA/IRB, then apply capital and buffer rules; those numbers flow into RBI returns and Pillar 3 DF tables.”

2. **India’s capital requirement**

   > “In India, minimum total capital is **9% of RWA**, plus a **2.5% CET1 CCB**, so effective requirement is **11.5%** of RWA before any Pillar 2 or SIB add-ons.”

3. **SA RWA engine definition**

   > “An SA RWA engine is basically: classify exposures → compute EAD (including CCFs) → apply CRM → look up risk weights → compute RWA and capital → reconcile to GL and feed Pillar 3 templates.”

4. **Capital headroom & business**

   > “Headroom is **actual capital minus required capital**. Every ₹100 of extra RWA at a 13% target ratio uses about ₹13 of capital – that’s how banks think about capital consumption and pricing.”

5. **IRB & output floor soundbite**

   > “IRB uses bank’s own PD/LGD/EAD/M in a Vasicek-type formula to get capital, but under Basel 3.1 the **output floor** forces total RWA to be at least **72.5%** of what the revised Standardised Approaches would give.”

6. **How to describe your app / portfolio**

   > “My app is a simplified Basel III SA RWA engine tailored to Indian rules: it classifies exposures, computes EAD (including CCFs), applies CRM, calculates RWA and capital, and presents DF-style summaries plus headroom, with a conceptual module on IRB and the Basel 3.1 output floor.”

