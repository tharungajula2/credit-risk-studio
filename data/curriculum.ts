import { Curriculum } from "@/types/curriculum";

export const curriculum: Curriculum = {
  modules: [
    {
      id: "1",
      slug: "capital-adequacy-basics",
      title: "Module 1 – Capital Adequacy & Basel Basics",
      goal: "Understand the 'Why', 'Who', and 'How' of Capital Adequacy.",
      sections: [
        {
          id: "1-1",
          title: "1.1 What is “capital adequacy”?",
          content: [
            {
              type: "markdown",
              content: `At the highest level:

* A bank **takes risk**: it lends money, trades, invests, offers guarantees, etc.
* Some of those loans will **default**, markets will move, operations will fail.
* To survive those losses **without collapsing**, the bank needs a **buffer**.

That buffer is called **regulatory capital**.
“Capital adequacy” means: *does the bank have **enough** of this buffer compared to the risks it is taking?*

Regulators measure this through **capital ratios**, the core one being:

$$
\\text{Capital Adequacy Ratio (CAR / CRAR)} = \\frac{\\text{Regulatory Capital}}{\\text{Risk-Weighted Assets (RWA)}}
$$

* **Regulatory Capital**: specific, high-quality parts of the bank’s equity/liabilities that regulators recognise as loss-absorbing (we break this down in Modules 2–3).
* **RWA**: the bank’s exposures, but **adjusted for risk** (credit, market, operational, etc.).

Basel standards and the original Basel I / II / III frameworks require a **minimum total capital ratio of 8% of RWA** globally. ([Bank for International Settlements](https://www.bis.org/publ/bcbs128b.pdf))
Most countries then **add their own overlays**.

In India, RBI requires a **minimum total capital adequacy ratio of 9%**, higher than the Basel 8%, and then adds buffers to bring the total requirement to about **11.5%** in normal conditions. ([Agrud Partners](https://agrudpartners.com/prudential-norms-for-banks/))

> You will see both **CAR** and **CRAR** (Capital to Risk-Weighted Assets Ratio). For our purposes, treat them as the same concept.`
            }
          ]
        },
        {
          id: "1-2",
          title: "1.2 Why do capital adequacy rules exist?",
          content: [
            {
              type: "markdown",
              content: `Regulators use capital rules to achieve three main objectives:

### 1. Financial stability

If banks are under-capitalised:

* Small shocks can **wipe out** their equity.
* This can cause **runs**, contagion to other banks, and large real-economy damage.

Basel III was created specifically to **strengthen banks** after the 2007–09 global financial crisis, by raising both **quality and quantity** of capital and adding buffers. ([Bank for International Settlements](https://www.bis.org/bcbs/basel3.htm))

### 2. Protect depositors and the real economy

Most depositors **cannot analyse** bank risk themselves.

* Capital serves as a **shield** between depositors and unexpected losses.
* Even if a bank suffers credit and market losses, strong capital reduces the probability that **depositors lose money** or that the government/taxpayers have to bail out the bank.

### 3. Constrain excessive risk-taking (moral hazard)

Banks fund themselves largely with **other people’s money** (deposits and wholesale funding). Without constraints, they might:

* Take **high risk** for short-term return.
* Rely on **implicit government support** if things go wrong.

High capital requirements force banks to keep more of **their own skin in the game**, reducing incentives to gamble.`
            }
          ]
        },
        {
          id: "1-3",
          title: "1.3 Who sets these rules? Global vs national regulators",
          content: [
            {
              type: "markdown",
              content: `### 1.3.1 Basel Committee on Banking Supervision (BCBS) – global standard setter

* The **Basel Committee on Banking Supervision (BCBS)** sits at the Bank for International Settlements (BIS) in Basel, Switzerland.
* It issues **global standards** like Basel I, Basel II, Basel III and Basel 3.1 (Endgame). ([Bank for International Settlements](https://www.bis.org/bcbs/basel3.htm))
* These are **not laws**; they are **soft standards** agreed among central banks and supervisors.

Key point:
Basel defines **minimums and methodologies** (e.g. 8% minimum total capital ratio), but **each country’s regulator** decides:

* How to **implement** them in local rules.
* Whether to be **stricter** (higher ratios, stricter definitions).

### 1.3.2 National implementation – example: India (RBI)

In India:

* The **Reserve Bank of India (RBI)** is the central bank and prudential regulator for banks.
* RBI has implemented Basel II and Basel III through detailed **circulars / master directions** (e.g. Basel III Capital Regulations implemented from 1 April 2013). ([Reserve Bank of India](https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf))
* RBI explicitly states that it uses the **CRAR framework advocated by the Basel Accord**, which links capital to risk-weighted assets including off-balance sheet items. ([Reserve Bank of India](https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=615))

India is **more conservative** than the Basel template:

* Basel minimum total capital ratio: **8% of RWA**.
* RBI minimum total capital adequacy ratio for banks: **9% of RWA**.
* Plus capital conservation buffer (CCB) and, where applicable, other buffers to reach about **11.5%** total requirement in normal times.

> **Basel = global standard; RBI = local implementation (often stricter).**`
            }
          ]
        },
        {
          id: "1-4",
          title: "1.4 Where does capital adequacy sit inside the bank?",
          content: [
            {
              type: "markdown",
              content: `Think of the bank as several layers of functions (all very real in practice):

1. **Accounting & financial reporting**
   * Prepares **balance sheet** and **P&L** based on accounting standards (Ind AS / IFRS).
   * Shows total assets, liabilities, and equity – but **not** risk-weighted.

2. **Risk management**
   * Identifies and measures:
     * **Credit risk** (borrowers defaulting).
     * **Market risk** (interest rate, FX, equity, commodity moves).
     * **Operational risk** (fraud, system failures, legal issues).
   * Maintains risk limits, models, and **risk appetite**.

3. **Regulatory capital / capital adequacy**
   * Takes input from:
     * Balance sheet + off-balance sheet exposures.
     * Risk parameters (risk weights, CCFs, etc.).
   * Produces:
     * **Regulatory capital** (CET1, AT1, Tier 2).
     * **RWA** by risk type.
     * Capital ratios: **CET1 ratio, Tier 1 ratio, Total capital ratio (CRAR)**.
   * Ensures these are **above regulatory minima + buffers** at all times.

4. **Stress testing and capital planning**
   * Projects capital and RWA under **adverse scenarios**.
   * Checks if the bank stays above requirements in **stressed conditions**.
   * Supports **ICAAP** (Internal Capital Adequacy Assessment Process) and supervisory dialogue (Pillar 2 – detailed later).

5. **Disclosures and market communication**
   * Prepares **Pillar 3 disclosures**, annual reports, investor presentations.
   * Communicates capital ratios, leverage, and risk metrics to:
     * Regulators.
     * Investors.
     * Rating agencies.
     * Analysts.

Capital adequacy is therefore at the **intersection** of:
* Accounting (source of raw numbers),
* Risk measurement (RWA),
* Strategy / business planning (capital allocation, growth),
* Supervision & disclosure.`
            }
          ]
        },
        {
          id: "1-5",
          title: "1.5 The core mechanics: capital, RWA, and ratios",
          content: [
            {
              type: "markdown",
              content: `### 1.5.1 Regulatory capital (very high level, detailed later)

At Basel III level, total regulatory capital is:

$$
\\text{Total Capital} = \\text{CET1} + \\text{AT1} + \\text{Tier 2} - \\text{Regulatory Deductions}
$$

You will later break down what goes into:

* **CET1 (Common Equity Tier 1)** – core equity.
* **AT1 (Additional Tier 1)** – perpetual instruments with loss-absorption features.
* **Tier 2** – subordinated debt etc.

Basel III and national implementations focus heavily on the **quality** of capital, especially CET1.

### 1.5.2 Risk-Weighted Assets (RWA) – conceptual structure

At a high level:

$$
\\text{Total RWA} = \\text{RWA}_{\\text{Credit}} + \\text{RWA}_{\\text{Market}} + \\text{RWA}_{\\text{Operational}} + \\text{(other components as applicable)}
$$

* **Credit risk RWA**: based on exposures to borrowers (sovereign, bank, corporate, retail, etc.), adjusted by **risk weights** under the Standardised or IRB approaches.
* **Market risk RWA**: based on trading book positions and related price risks.
* **Operational risk RWA**: based on business indicators or modelled metrics.

Basel frameworks formally state that **minimum capital requirements are calculated for credit, market, and operational risk**, and the total capital ratio must be at least 8% of RWA.

### 1.5.3 Capital adequacy ratio (CAR / CRAR)

Formally:

$$
\\text{CAR (or CRAR)} = \\frac{\\text{Total Regulatory Capital}}{\\text{Total RWA}}
$$

with regulatory floors such as:

* Basel template:
  * CET1 ≥ 4.5% of RWA,
  * Tier 1 ≥ 6%,
  * Total capital ≥ 8%, plus capital buffers. ([Wikipedia](https://en.wikipedia.org/wiki/Basel_III))

* India (simplified view for now):
  * Total capital ≥ **9%** of RWA (plus CCB, etc.).

Later modules will go into **exact minimums**, **buffers**, and **India-specific calibrations**.`
            }
          ]
        },
        {
          id: "1-6",
          title: "1.6 Regulatory environment: India-focused view",
          content: [
            {
              type: "markdown",
              content: `### 1.6.1 RBI’s role

RBI acts as:

* **Regulator** (prudential norms, capital adequacy, risk management guidelines).
* **Supervisor** (onsite/offsite inspections, SREP, enforcement).
* **Monetary authority** (monetary policy, liquidity management).
* **Resolution role** (through various frameworks, though resolution is a broader legal ecosystem).

RBI’s capital adequacy framework:

* Uses the **CRAR approach** “advocated by the Basel Accord”, considering risk of both **on-balance sheet and off-balance sheet** items.
* Implements Basel II and III via **master circulars / master directions**, which are legally binding for banks.

Key implementation facts:

* Basel III capital regulations in India are implemented **from 1 April 2013**, in a phased manner.
* RBI has periodically updated these directions (e.g. buffers, transitional arrangements, Basel 3.1-related changes).

### 1.6.2 India vs global Basel – why slightly stricter?

Reasons why RBI often sets **higher** capital standards (like 9% vs 8%):

* Banking system in many emerging markets may be **more exposed** to concentration risk, group exposures, or macro volatility.
* Higher minima give **additional comfort** to depositors and foreign investors.
* It also provides a **cushion** against implementation / data quality issues during transitions.

For you, as a risk / capital adequacy professional, this matters because:

* When you design or analyse capital metrics for an Indian bank, you must know both:
  * **Basel template minimums** and
  * **RBI-specific overlays**.`
            }
          ]
        },
        {
          id: "1-7",
          title: "1.7 How are capital and RWA numbers actually used?",
          content: [
            {
              type: "markdown",
              content: `### 1.7.1 Internal uses (inside the bank)

1. **Regulatory compliance monitoring**
   * Daily or at least monthly monitoring of:
     * CET1 ratio,
     * Tier 1 ratio,
     * Total capital ratio,
     * Leverage ratio,
     * Key buffers.
   * Early-warning thresholds set **above** regulatory minima.

2. **Risk appetite & limits**
   * Board sets **capital targets** and **risk appetite** (e.g. minimum 1–2% headroom over regulatory requirements).
   * Business units get:
     * RWA limits (e.g., max RWA per segment),
     * Capital usage metrics.

3. **Business planning and product strategy**
   * Capital is a **scarce resource**; banks allocate it to businesses with:
     * Acceptable risk profile, and
     * Good **return on capital**.
   * Pricing models incorporate **cost of capital** (we’ll touch this conceptually later, not in deep quant detail here).

4. **Risk & finance integration**
   * RWA numbers reconciled with:
     * Book exposures,
     * Impairments / provisions,
     * Risk parameters.
   * Consistency checks (e.g., RWA changes vs balance-sheet growth, mix, CRM, etc.).

### 1.7.2 External / supervisory uses

1. **Regulatory returns and onsite supervision**
   * Banks submit **detailed returns** on capital, RWA breakdowns, exposures, and risk concentrations.
   * Supervisors use these to:
     * Assess capital adequacy,
     * Set **Pillar 2 add-ons** or specific conditions,
     * Decide on **supervisory interventions** where needed.

2. **Pillar 3 and market discipline**
   * Basel III requires **disclosures** on:
     * Capital structure (CET1, AT1, Tier 2),
     * Capital ratios,
     * RWA by risk type and major portfolios,
     * Credit risk mitigation, etc.
   * Investors and rating agencies use these to:
     * Judge bank safety,
     * Compare across peers.

3. **Triggers and constraints**
   * Breaching capital buffers may trigger:
     * Restrictions on **dividends / distributions**,
     * Supervisory actions,
     * Reputation and rating impacts.`
            }
          ]
        },
        {
          id: "1-8",
          title: "1.8 Practical “bulb” section – how to think about Module 1 in industry",
          content: [
            {
              type: "markdown",
              content: `💡 **Bulb 1 – Separate numerator and denominator clearly**
Always think of capital adequacy as:

* **Numerator problem**: how much **high-quality capital** the bank has (CET1, AT1, Tier 2).
* **Denominator problem**: how much **risk-weighted exposure** it carries (credit, market, operational).

Most real-life capital actions (rights issue, AT1 issuance, RWA optimisation) target **one of these two pieces**.

---

💡 **Bulb 2 – Know the regulatory “stack”**

When reading any bank’s capital numbers, be clear on:

1. **Basel template minimums** (8% total capital, 4.5% CET1, etc.).
2. **National overlays** (e.g., RBI’s 9% CAR and buffers).
3. **Bank’s internal targets** (often above the regulatory minimum plus buffers).

In an interview, you sound very strong if you can say:

> “Basel minimum is 8%, but RBI requires 9% plus a 2.5% capital conservation buffer, so effectively Indian banks target around 11.5% or more in normal conditions.”

---

💡 **Bulb 3 – RWA is not the same as total assets**

* Total assets are **accounting numbers**.
* RWAs are **risk-adjusted**; low-risk exposures can get lower weights; high-risk exposures get higher weights.
* Two banks with the **same balance-sheet size** can have very different **RWA and capital ratios**.

Understanding this is core to explaining capital adequacy to both **technical and non-technical** audiences.

---

💡 **Bulb 4 – Capital adequacy connects all 13 modules**

Everything else in your curriculum is basically:

* Decomposing **capital**: CET1, AT1, Tier 2.
* Decomposing **RWA**:
  * Credit risk (standardised vs IRB),
  * Market risk,
  * Operational risk,
  * Securitisation,
  * Off-balance sheet treatment,
  * CRM, etc.
* Translating these into:
  * **Reporting**,
  * **Disclosures**,
  * **Capital planning**,
  * **Scenario analysis**.

If you keep the simple picture in mind:

> **CAR = Capital / RWA**

everything else becomes “just” a more detailed breakdown of numerator and denominator.`
            }
          ]
        }
      ]
    },
    {
      id: "2",
      slug: "basel-framework",
      title: "Module 2 – Basel Framework & Three Pillars",
      goal: "Build a solid conceptual foundation of Basel I/II/III and the Three Pillars.",
      sections: [
        {
          id: "2-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `Module 2 is all about putting **Basel I → Basel II → Basel III** and the **Three Pillars** into a clean mental map, so you always know:

* *What changed*,
* *Why it changed*, and
* *Where it sits in the framework (Pillar 1 / 2 / 3)*.

---

## 2.1 Basel timeline at a high level

### Basel I (1988, updated in 1996)

* First global capital standard from the Basel Committee.
* Focus: **credit risk** in the banking book.
* Introduced:

  * **Risk-weighted assets (RWA)** with simple buckets (0%, 20%, 50%, 100%, etc.).
  * A minimum **total capital ratio of 8% of RWA**. ([Bank for International Settlements][1])
  * Two capital tiers: **Tier 1** and **Tier 2** (no CET1/AT1 split yet).

Later, in 1996, a market risk amendment added **trading book capital**.

---

### Basel II (2004)

* Aim: make capital requirements more **risk-sensitive** and better aligned to banks’ internal risk measurement.
* Introduced:

  * **Three Pillars** (minimum capital, supervisory review, market discipline). ([Reserve Bank of India][2])
  * Capital charges for **operational risk** under Pillar 1 (besides credit and market).
  * **Standardised Approaches** and **Internal Ratings-Based (IRB)** approaches for credit risk.
* Still keeps the **8% minimum total capital ratio** – but with more sophisticated RWA calculation. ([Bank for International Settlements][1])

---

### Basel III (2010 onwards)

* Basel II proved too weak in the 2007–09 crisis (low-quality capital, under-estimated risks, poor liquidity).
* Basel III is a **strengthening and extension** of Basel II, not a completely new idea.
* Key enhancements: ([Bank for International Settlements][3])

  * **Higher and better-quality capital**, especially CET1.
  * **Capital buffers** (Capital Conservation Buffer, Countercyclical Buffer).
  * A **leverage ratio** (non-risk-based backstop).
  * **Liquidity standards**:

    * Liquidity Coverage Ratio (**LCR**).
    * Net Stable Funding Ratio (**NSFR**).
  * More robust treatment of trading book, securitisation, counterparty credit risk.

---

### Basel 3.1 / “Basel IV” (finalisation of Basel III)

* Official name: *Basel III: Finalising post-crisis reforms* (Dec 2017 onwards).
* Markets often call it “Basel IV”, but BCBS calls it part of Basel III.
* Main themes: ([Bank for International Settlements][4])

  * Stronger **Standardised Approaches** for credit, market, operational risk.
  * Tighter constraints on **IRB** (input floors, model restrictions).
  * **Output floor**: bank’s total RWA under models cannot fall below **72.5%** of RWA under the standardised approaches.

We’ll go deep into these mechanics in later modules (especially Modules 4, 8, 12).

---

## 2.2 The Three Pillars – overview

Basel II (and Basel III/3.1) rest on **three mutually reinforcing pillars**: ([Reserve Bank of India][2])

1. **Pillar 1 – Minimum capital requirements**

   * Quantitative rules:

     * How to compute **RWA** for credit, market, operational risk.
     * How much **regulatory capital** must be held (minimum ratios).

2. **Pillar 2 – Supervisory review process**

   * Qualitative + quantitative:

     * Banks must assess their **overall capital adequacy** relative to *all* risks (ICAAP).
     * Supervisors perform their own assessment (SREP) and can require **extra capital/add-ons**.

3. **Pillar 3 – Market discipline**

   * **Disclosure** requirements:

     * Capital structure, capital ratios.
     * RWA by risk type and exposure class.
     * Risk management practices and key parameters.
   * Idea: transparent banks face more discipline from investors and markets.

You can think:

* Pillar 1 → formula-based **minimum** capital.
* Pillar 2 → **extra** capital + risk management expectations.
* Pillar 3 → **transparency** so the market can judge.

---

## 2.3 Basel I – what it actually did (numerator + denominator)

Basel I is simpler but sets the foundation.

### 2.3.1 Numerator: capital

Regulatory capital was split into: ([Reserve Bank of India][5])

* **Tier 1 capital**: mainly core equity (paid-up capital + disclosed reserves).
* **Tier 2 capital**: supplementary (revaluation reserves, subordinated debt, etc.).
* Tier 2 was capped at **100% of Tier 1** for regulatory capital purposes.

Total capital (Basel I level):

$$
\\text{Total Capital} = \\text{Tier 1} + \\text{Tier 2} \\quad (\\text{subject to caps})
$$

### 2.3.2 Denominator: RWA using simple risk weights

Assets were grouped into broad buckets like 0%, 20%, 50%, 100% based on counterparty type and risk. ([Reserve Bank of India][5])

Conceptually:

$$
\\text{RWA} = \\sum_j (\\text{Exposure}_j \\times \\text{Risk Weight}_j)
$$

For example (conceptually; details come in Module 4):

* Claims on OECD sovereigns → 0%
* Interbank claims → 20%
* Residential mortgages → 50%
* Corporate loans → 100%

### 2.3.3 Basel I capital ratio

Basel I required:

$$
\\frac{\\text{Total Capital}}{\\text{RWA}} \\ge 8\\%
$$

This 8% minimum is still the **global template** under Basel II and Basel III (before buffers and local overlays). ([Bank for International Settlements][1])

---

## 2.4 Basel II – more risk-sensitive + Three Pillars

Basel II did *not* change the 8% minimum but changed **how you get to RWA** and introduced the Three Pillars.

### 2.4.1 Pillar 1 in Basel II

Capital requirements for: ([Bank for International Settlements][1])

1. **Credit risk**:

   * Approaches:

     * **Standardised Approach (SA)** – regulator-prescribed risk weights.
     * **IRB approaches** (Foundation and Advanced) – bank’s internal estimates of PD, LGD, etc., used in regulatory formulas (Module 12).

2. **Market risk**:

   * Standardised or internal model-based capital for trading book and FX, commodities, etc.

3. **Operational risk**:

   * Basic Indicator, Standardised, or Advanced Measurement approaches.

Total minimum capital requirement is:

$$
K_{\\text{total}} = 0.08 \\times (\\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}})
$$

Equivalently, define total RWA:

$$
\\text{Total RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}
$$

and check:

$$
\\frac{\\text{Total Capital}}{\\text{Total RWA}} \\ge 8\\%
$$

(Exactly how each RWA component is calculated is what the rest of the course is about.)

### 2.4.2 Pillar 2 in Basel II

* Banks must have an **Internal Capital Adequacy Assessment Process (ICAAP)**.
* They assess whether capital is adequate given:

  * All material risks (including those not fully captured in Pillar 1, like concentration risk, interest rate risk in the banking book, reputational risk, etc.).
  * Their business plans, stress scenarios, and risk appetite.
* Supervisors run a **Supervisory Review and Evaluation Process (SREP)** and can:

  * Require **extra capital buffers**,
  * Impose **risk limits**, or
  * Require improvements in governance/risk management. ([Bank for International Settlements][6])

### 2.4.3 Pillar 3 in Basel II

* Requires **regular public disclosures** on:

  * Risk exposures and assessment.
  * Capital structure and adequacy.
* Aim: market participants can compare banks and apply **market discipline**. ([UN Trade and Development (UNCTAD)][7])

---

## 2.5 Basel III – strengthening each Pillar

Basel III keeps the same three pillars but **strengthens the rules** in several ways. ([Bank for International Settlements][3])

### 2.5.1 Pillar 1 under Basel III

1. **Capital quality and minimums**

   * Clear split of capital into:

     * **CET1**, **AT1**, **Tier 2** (detailed in Module 3).
   * Stricter criteria for what counts as capital (permanence, loss-absorption).
   * Basel template minimum ratios (before buffers):

     * **CET1 ≥ 4.5% of RWA**
     * **Tier 1 ≥ 6% of RWA**
     * **Total capital ≥ 8% of RWA**

2. **Capital buffers**

   * **Capital Conservation Buffer (CCB)**:

     * 2.5% of RWA, in CET1, above the minimum.
     * Breaching it triggers restrictions on dividends, bonuses, etc.
   * **Countercyclical Capital Buffer (CCyB)**:

     * 0–2.5% of RWA in CET1, activated by national authorities during credit booms.
   * Some jurisdictions also add **systemic risk buffers** for SIFIs.

3. **Leverage ratio**

   * Non-risk-based backstop: ([Bank for International Settlements][8])

$$
\\text{Leverage Ratio} = \\frac{\\text{Tier 1 Capital}}{\\text{Exposure Measure}} \\ge 3\\%
$$

* Exposure measure = on-balance sheet exposures + derivatives and SFT add-ons + off-balance sheet items (converted using CCFs).

4. **Liquidity standards**

   * **Liquidity Coverage Ratio (LCR)**:

$$
\\text{LCR} = \\frac{\\text{High-Quality Liquid Assets (HQLA)}}{\\text{Net cash outflows over 30 days}} \\ge 100\\%
$$

\`\`\`
 – ensures short-term liquidity resilience. :contentReference[oaicite:14]{index=14}  
\`\`\`

* **Net Stable Funding Ratio (NSFR)** (high level here):

  * Available stable funding / required stable funding ≥ 100%.
  * Ensures longer-term funding stability. ([ICMA][9])

5. **Enhanced risk coverage**

   * Stronger rules for:

     * Securitisation,
     * Counterparty credit risk,
     * Trading book capital.

### 2.5.2 Pillar 2 under Basel III

* Greater emphasis on:

  * **Stress testing**,
  * Capital planning over the cycle,
  * Systemic risk considerations.
* Supervisors can impose **Pillar 2 capital add-ons**, restrictions, or other measures.
* ICAAP and SREP are more structured and documented.

### 2.5.3 Pillar 3 under Basel III

* More **standardised, detailed templates** for disclosure:

  * Harmonised tables and templates for capital, RWA, buffers, leverage, LCR/NSFR.
* Objective: make it easier for market participants to **compare banks across countries**. ([Bank for International Settlements][10])

---

## 2.6 How jurisdictions implement and calibrate Basel

Basel standards are **not self-executing law**. Each jurisdiction translates them into local regulations and may **tighten** them.

### 2.6.1 European Union

* Implements Basel II/III mainly via:

  * **Capital Requirements Regulation (CRR)**,
  * **Capital Requirements Directive (CRD)**. ([European Banking Authority][11])
* The European Banking Authority (EBA) issues detailed technical standards, reporting templates, etc.

### 2.6.2 India (RBI)

* RBI explicitly states that Basel II is built on the three pillars and has issued detailed guidelines accordingly. ([Reserve Bank of India][2])
* Basel III Capital Regulations implemented in India **from 1 April 2013 in a phased manner**. ([Reserve Bank of India][12])
* India is **more conservative**:

  * Total capital minimum **9% of RWA** (vs Basel 8%).
  * Full CCB to bring effective requirement to about **11.5%** in normal times.
  * RBI has also set its own **leverage ratio floors** during transition and adopted LCR/NSFR with local calibration. ([Reserve Bank of India][13])

### 2.6.3 Other jurisdictions (conceptual)
* **US**: implements via rules of Federal Reserve, OCC, FDIC; has additional leverage ratios (SLR, eSLR) for large banks.
* **Others** (e.g., Saudi Arabia, Singapore, etc.) implement Basel rules via national rulebooks, sometimes with local risk-weight adjustments or extra buffers. ([SAMA Rulebook][14])

For your interviews and your web app, the key message:

> Basel defines the **framework**. Each regulator (RBI, ECB, Fed, etc.) defines the **calibration** and **local rules**.

---

## 2.7 India-specific note on the Three Pillars

In India, RBI’s Basel guidelines and training material (e.g. IIBF) explicitly describe capital adequacy as resting on **three Pillars**: ([IIBF][15])

1. **Pillar 1 – Minimum Capital Ratio**

   * RBI prescribes:

     * Calculation of RWA for credit, market, operational risk.
     * **Minimum CRAR** (9%) and buffer framework.

2. **Pillar 2 – Supervisory Review Process (SRP) & ICAAP**

   * Banks must:

     * Prepare a formal **ICAAP document** and submit it to RBI annually.
     * Assess capital for all material risks, including those not fully covered by Pillar 1.
   * RBI:

     * Reviews ICAAP as part of SREP.
     * Can impose **Pillar 2 capital charges**, qualitative requirements, etc.

3. **Pillar 3 – Market Discipline**

   * RBI has issued disclosure requirements for:

     * Capital structure,
     * Capital adequacy,
     * Credit risk, CRM, securitisation, etc.
   * Banks publish **Pillar 3 disclosures** on their websites and in annual reports.

For your app, you can literally tag features:

* “This dashboard is mainly **Pillar 1** (RWA, ratios).”
* “This narrative is **Pillar 2** (ICAAP/stress test).”
* “These tables are **Pillar 3** (public disclosure).”

---

## 2.8 Practical maths & calculation flow at the Basel / Three Pillars level

We’ll go deep into formulas later, but at the **global Basel framework level**, the core maths you should internalise is:

### 2.8.1 Capital ratios under Basel III

Let:

* $C_{\\text{CET1}}$ = CET1 capital
* $C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}$ = Tier 1 capital
* $C_{\\text{Total}} = C_{\\text{CET1}} + C_{\\text{AT1}} + C_{\\text{Tier 2}}$ (after deductions)
* $\\text{RWA}$ = total risk-weighted assets

Then the key ratios are:

$$
\\text{CET1 Ratio} = \\frac{C_{\\text{CET1}}}{\\text{RWA}}
$$

$$
\\text{Tier 1 Ratio} = \\frac{C_{\\text{T1}}}{\\text{RWA}}
$$

$$
\\text{Total Capital Ratio} = \\frac{C_{\\text{Total}}}{\\text{RWA}}
$$

Regulators then impose constraints such as (Basel template):

* CET1 Ratio ≥ 4.5% + buffers,
* Tier 1 Ratio ≥ 6% + buffers,
* Total Capital Ratio ≥ 8% + buffers. ([Bank for International Settlements][3])

India overlays its own minimums and buffer structure on top of this.

### 2.8.2 How a bank “does” Pillar 1 in practice (conceptual algorithm)

Very high level, repeated monthly / daily:

1. **Collect data**:

   * Exposures (on- and off-balance sheet).
   * Counterparty attributes, ratings, collateral, guarantees.
   * Trading book positions.
   * Operational risk inputs (gross income / business indicator, etc.).

2. **Classify exposures**:

   * Exposure class (sovereign, bank, corporate, retail, etc.).
   * Approach (Standardised vs IRB, etc.).

3. **Apply rules**:

   * Assign **risk weights** or use **regulatory formulas** (credit, market, operational).
   * Convert off-balance sheet items using **CCFs**.
   * Recognise **CRM** (collateral/guarantees) where allowed.

4. **Compute RWA**:

   * Sum across exposures and risk types.

5. **Compute capital & ratios**:

   * Aggregate CET1, AT1, Tier 2 as per regulatory definitions.
   * Calculate CET1, Tier 1, Total capital ratios, leverage ratio, LCR/NSFR.

6. **Compare to minima & buffers**:

   * Check compliance with Basel / RBI thresholds.
   * Report internally and externally.

Pillar 2 then **adds additional capital if needed** (ICAAP/SREP). Pillar 3 requires **disclosing** key parts of this calculation.

---

## 2.9 “Bulb” section – interview & implementation angles

💡 **Bulb 1 – One-sentence evolution**

* **Basel I**: simple 8% capital vs RWA, mainly credit risk, few buckets.
* **Basel II**: still 8%, but with **more risk-sensitive RWA** and **Three Pillars**.
* **Basel III**: higher and better-quality capital, **buffers**, **leverage ratio**, **liquidity standards**, and **tighter risk coverage**.

If you say this cleanly, you sound very structured.

---

💡 **Bulb 2 – How to explain the Three Pillars in 10 seconds**

> “Pillar 1 gives you the **formula** for minimum capital,
> Pillar 2 checks if that’s **truly enough** given all risks and strategy,
> Pillar 3 makes the bank **show its work** to the market.”

Then you can go deeper if they ask.

---

💡 **Bulb 3 – Always ask: ‘Which Pillar am I talking about?’**

When you encounter any regulatory topic:

* New risk-weight rules → **Pillar 1**.
* ICAAP, stress testing, SREP findings → **Pillar 2**.
* Disclosure templates, quarterly risk reports → **Pillar 3**.

For your web app, you can actually structure the UI around these pillars – it shows conceptual clarity.

---

💡 **Bulb 4 – Jurisdiction overlay is a differentiator**

In interviews, don’t stop at “Basel says 8%”. Add:

* “In India, RBI implements Basel II/III with **9% minimum CRAR** and full CCB, so effective requirements are higher than the Basel template.” ([Reserve Bank of India][12])

This shows you understand **both global standards and local implementation**, which is exactly what a capital adequacy / regulatory reporting role needs.

---


[1]: https://www.bis.org/publ/bcbs128b.pdf?utm_source=chatgpt.com "Part 2: The First Pillar – Minimum Capital Requirements"
[2]: https://rbi.org.in/upload/notification/pdfs/61023.pdf?utm_source=chatgpt.com "61023.pdf"
[3]: https://www.bis.org/publ/bcbs189.pdf?utm_source=chatgpt.com "Basel III: A global regulatory framework for more resilient ..."
[4]: https://www.bis.org/basel_framework/?utm_source=chatgpt.com "Basel Framework"
[5]: https://www.rbi.org.in/commonman/english/scripts/Notification.aspx?Id=1033&utm_source=chatgpt.com "Prudential Norms on Capital Adequacy - Basel I Framework"
[6]: https://www.bis.org/review/r050715g.pdf?utm_source=chatgpt.com "Regulation and risk management - implementing Basel II"
[7]: https://unctad.org/system/files/official-document/osgdp20052_en.pdf?utm_source=chatgpt.com "BASEL II: THE REVISED FRAMEWORK OF JUNE 2004"
[8]: https://www.bis.org/publ/bcbs270.htm?utm_source=chatgpt.com "Basel III leverage ratio framework and disclosure ..."
[9]: https://www.icmagroup.org/assets/documents/Events/test/20%20-%20ICMA%20Presentation%20-%20Liquidity%20%26%20Leverage_v1.pdf?utm_source=chatgpt.com "An overview of the LCR, NSFR and LR"
[10]: https://www.bis.org/bcbs/basel3.htm?utm_source=chatgpt.com "Basel III: international regulatory framework for banks"
[11]: https://www.eba.europa.eu/activities/basel-framework-global-regulatory-standards-banks?utm_source=chatgpt.com "The Basel framework: the global regulatory standards for banks"
[12]: https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=1488&utm_source=chatgpt.com "Master Circular – Basel III Capital Regulations"
[13]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf?utm_source=chatgpt.com "Master Circular – Basel III Capital Regulations"
[14]: https://rulebook.sama.gov.sa/en/minimum-capital-requirements-credit-risk?utm_source=chatgpt.com "Minimum Capital Requirements for Credit Risk"
[15]: https://www.iibf.org.in/documents/BASEL-III.pdf?utm_source=chatgpt.com "Basel III Capital Regulations"
`
            }
          ]
        }
      ]
    },
    {
      id: "3",
      slug: "regulatory-capital-structure",
      title: "Module 3 – Regulatory Capital Structure: CET1, AT1, Tier 2",
      goal: "Achieve a detailed understanding of the regulatory capital stack and its components.",
      sections: [
        {
          id: "3-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `## 3.1 Capital quality hierarchy & going-concern vs gone-concern

Under Basel III, regulatory capital is split into **three layers**: ([Bank for International Settlements][1])

* **Common Equity Tier 1 (CET1)** – highest quality, pure equity.
* **Additional Tier 1 (AT1)** – going-concern capital, but lower quality than CET1.
* **Tier 2** – gone-concern capital.

Grouped:

* **Tier 1 (going-concern)**
  * CET1
  * AT1
* **Tier 2 (gone-concern)**

**Going-concern capital** = capital that can absorb losses while the bank is still operating *without* triggering insolvency or resolution. (Tier 1) ([Bank for International Settlements][1])

**Gone-concern capital** = capital that absorbs losses **only when the bank fails** (e.g. in liquidation or resolution). (Tier 2) ([Bank for International Settlements][1])

Basel III also requires that **all AT1 and Tier 2 instruments** must be able to absorb losses at the **Point of Non-Viability (PoNV)** – typically via conversion to equity or write-down when the supervisor decides the bank would otherwise fail or needs public support. ([Bank for International Settlements][1])

---

## 3.2 Overall structure of regulatory capital (Basel and India)

### 3.2.1 Basel structure

At Basel III level: ([Bank for International Settlements][1])

* **CET1** – common shares + share premium + retained earnings + other reserves + eligible minority interest – **regulatory adjustments**.
* **AT1** – eligible AT1 instruments + related share premium + eligible minority interest – **AT1 adjustments**.
* **Tier 2** – eligible Tier 2 instruments + related share premium + eligible minority interest + certain loan-loss provisions – **Tier 2 adjustments**.

Total capital:

$$
\\text{Tier 1} = \\text{CET1} + \\text{AT1}
$$

$$
\\text{Total Capital} = \\text{Tier 1} + \\text{Tier 2}
$$

Basel template minimums (before buffers): ([Bank for International Settlements][2])

* CET1 ≥ **4.5%** of RWA
* Tier 1 ≥ **6%** of RWA
* Total capital ≥ **8%** of RWA

plus the **Capital Conservation Buffer (CCB)** of 2.5% of RWA in CET1, and possibly a **Countercyclical Buffer** up to another 2.5%. ([Bank for International Settlements][2])

### 3.2.2 India (RBI) structure & minima

RBI adopts the same capital stack, but with **higher minima**: ([IIBF][3])

* **Tier 1 (going-concern)**
  * CET1
  * AT1
* **Tier 2 (gone-concern)**

RBI requires (on a fully-loaded basis):

| Requirement                  | % of RWA (India – banks) |
| ---------------------------- | ------------------------ |
| Minimum CET1                 | **5.5%**                 |
| CCB (CET1 only)              | **2.5%**                 |
| CET1 incl. CCB               | **8.0%**                 |
| AT1 (within Tier 1)          | up to **1.5%**           |
| Minimum Tier 1 (CET1+AT1)    | **7.0%**                 |
| Tier 2                       | up to **2.0%**           |
| Minimum Total Capital (CRAR) | **9.0%**                 |
| Total Capital incl. CCB      | **11.5%**                |

These values come from RBI’s Basel III capital regulations and IIBF Basel III text. ([IIBF][3])

So, in India, a “normally compliant” bank is typically expected to operate **comfortably above 11.5%** total capital ratio.

---

## 3.3 CET1 – components, deductions & formula

### 3.3.1 Concept and role

CET1 is the **highest quality capital**: it absorbs losses **immediately** when they occur, without any contractual trigger. It is mostly ordinary equity and retained earnings. ([Bank for International Settlements][1])

Regulators want **most** of a bank’s capital to be CET1, because it is:

* Permanently available,
* Fully loss-absorbing,
* Subordinate to all other claims.

### 3.3.2 Basel definition – high level

Basel III defines CET1 as: ([Bank for International Settlements][1])

**Positive elements (before deductions)** – conceptually:

* Common shares (or equivalent instruments for non-joint stock banks) that meet strict CET1 criteria.
* Stock surplus / share premium on those shares.
* Retained earnings (audited).
* Other comprehensive income (OCI) and other disclosed reserves that are freely available.
* Eligible minority interest from fully consolidated banking subsidiaries.

**Minus: regulatory adjustments**, such as:

* Goodwill and other intangible assets.
* Certain deferred tax assets (DTAs).
* Significant and non-significant investments in the capital of other financial entities (subject to threshold rules).
* Any shortfall of provisions to expected loss under IRB approaches, etc. ([Bank for International Settlements][1])

General CET1 formula (conceptual):

$$
\\text{CET1} = \\sum \\text{(CET1 instruments and reserves)} - \\sum \\text{(CET1 regulatory adjustments)}
$$

### 3.3.3 India-specific CET1 components (Indian banks)

RBI’s Basel III regulations give a very clear list for Indian banks’ CET1 elements: ([IIBF][3])

**Positive CET1 components (Indian banks)** include:

1. **Paid-up equity share capital** that meets Basel/RBI criteria for common shares.
2. **Share premium** arising from issue of common shares.
3. **Statutory reserves** (e.g. reserve fund under Banking Regulation Act).
4. **Capital reserves** arising from sale of assets (not revaluation reserves).
5. **Other disclosed free reserves** – genuinely available to absorb losses.
6. **Balance in Profit & Loss (P&L) account** at end of the previous financial year.
7. **Portion of current-year profits** that can be included subject to conditions and formula (net of expected dividends). RBI gives a formula for “eligible profit” $EP_t$ for quarter $t$: ([IIBF][3])

$$
EP_t = NP_t - 0.25 \\times D
$$

where

* $NP_t$ = net profit up to quarter $t$,
* $D$ = average annual dividend of the last 3 years,

subject to RBI’s conditions on provisioning stability.

8. **Eligible minority interest** in the common equity of consolidated banking subsidiaries.
9. **Less: all CET1 regulatory adjustments required by RBI** (goodwill, DTAs, capital investments, shortfalls, etc.).

So for an Indian bank, you can think:

$$
\\text{CET1}_{\\text{India}} = \\text{Equity Capital} + \\text{Reserves} + \\text{Retained Profits} + \\text{Eligible MI} - \\text{Regulatory Adjustments}
$$

### 3.3.4 Regulatory adjustments (CET1)

Basel III tries to **clean up** CET1 by removing items whose value is uncertain, double-counted, or not reliably loss-absorbing in stress. The main categories are: ([Bank for International Settlements][1])

1. **Intangible assets**
   * Goodwill and other intangibles (net of associated deferred tax liabilities) are fully deducted from CET1.

2. **Deferred tax assets (DTAs)**
   * DTAs that rely on future profitability and are not already netted are deducted, subject to threshold treatment:
     * Certain DTAs, mortgage servicing rights and significant investments in the common shares of unconsolidated financial institutions each have a **10% of CET1** individual cap and a **15% combined cap**; any excess is deducted. ([Bank for International Settlements][1])

3. **Investments in other financial institutions**
   * To avoid double counting of capital, banks must either:
     * **Consolidate** the entity, or
     * **Deduct** the investment from CET1 (corresponding deduction approach – deduction from the same tier in which the investee recognises the capital). ([Bank for International Settlements][1])

4. **Shortfall of provisions to expected loss (IRB banks)**
   * If expected loss > total eligible provisions, the shortfall is deducted from CET1. ([Central Bank of The Bahamas][4])

5. **Other filters / adjustments**
   * Certain prudential filters applied to unrealised gains, cash-flow hedge reserves, defined-benefit pension assets, etc., depending on local implementation.

In Indian regulations, these concepts are implemented via a detailed list of CET1 regulatory adjustments in para 4.4 of the Basel III Circular. ([IIBF][3])

---

## 3.4 Additional Tier 1 (AT1) – instruments, criteria & India flavour

### 3.4.1 Concept and role

**AT1** is still **going-concern capital**, but instruments are usually **hybrid** in nature:

* They behave like debt (pay coupons) but
* They are designed to absorb losses **before** depositors and senior creditors, either through:
  * **Going-concern triggers** (conversion/write-down), or
  * **PoNV write-down**.

It sits **below CET1 in quality**, but above Tier 2.

### 3.4.2 Basel AT1 components

Basel defines AT1 as: ([Bank for International Settlements][1])

* AT1 instruments issued by the bank that meet **all Basel AT1 criteria** (and are not CET1).
* Associated share premium.
* Eligible AT1 instruments issued by consolidated subsidiaries and held by third parties.
* Minus: regulatory adjustments specific to AT1.

### 3.4.3 Basel AT1 – key eligibility criteria (simplified)

From Basel text (summarised): ([Central Bank of The Bahamas][4])

AT1 instruments must:

1. Be **issued and fully paid-in**.
2. Be **subordinated** to depositors, general creditors and senior subordinated debt.
3. Be **perpetual** (no contractual maturity).
4. Have **no step-ups or incentives to redeem** (e.g. no big coupon jump at a call date).
5. Be **callable only** after at least 5 years, and only with:
   * Prior supervisory approval, and
   * Either replacement with capital of same or better quality, *or* proof that capital remains well above minima after call.
6. Have **fully discretionary coupons/dividends**:
   * Bank must be able to cancel distributions at any time, for any reason.
   * Cancellation is **not** an event of default.
   * Cancelled payments are not cumulative and cannot later be “made up”.
7. Not have **credit-sensitive** coupon features (coupon cannot directly depend on the bank’s credit spread/rating).
8. For instruments classified as liabilities, include a **principal loss absorption mechanism**:
   * Conversion to common equity or
   * Write-down at a pre-specified trigger (in addition to PoNV loss absorption).
9. Not be funded or purchased by the bank (directly or indirectly).

These conditions are why Basel III AT1 instruments are sometimes called **“contingent capital”** or **CoCos**.

### 3.4.4 India-specific AT1 instruments

RBI’s Basel III circular specifies AT1 components for Indian banks: ([IIBF][3])

**AT1 for Indian banks includes**:

1. **Perpetual Non-Cumulative Preference Shares (PNCPS)** that meet Basel/RBI criteria.
2. **Perpetual Debt Instruments (PDIs)** (Basel III-compliant AT1 bonds) meeting RBI criteria.
3. Share premium from the above instruments.
4. Eligible AT1 instruments issued by consolidated subsidiaries and held by third parties.
5. Other instruments RBI may notify.
6. Less: AT1-specific regulatory deductions.

RBI references detailed Annexes (3, 4, 16) with:

* Terms like **perpetual, subordinated, no step-up/incentives to redeem**.
* **Discretionary, non-cumulative coupons**.
* **Loss absorption through conversion/write-off** on breach of a trigger or at PoNV. ([IIBF][3])

In India, these are the **Basel III-compliant AT1 bonds** you see in markets / rating reports. ([Crisil Ratings][5])

---

## 3.5 Tier 2 – components, criteria & India flavour

### 3.5.1 Concept and role

**Tier 2** is **gone-concern capital** – it absorbs losses once the bank is no longer viable and is being wound up or resolved. Requirements are less strict than for AT1: instruments can have **maturity** and may be less permanent. ([Bank for International Settlements][1])

### 3.5.2 Basel Tier 2 components

Basel defines Tier 2 as: ([Central Bank of The Bahamas][4])

* Debt capital instruments meeting Tier 2 criteria (and not in Tier 1).
* Related share premium.
* Eligible Tier 2 instruments issued by consolidated subsidiaries and held by third parties.
* Certain **loan-loss provisions** (general provisions) subject to caps.
* Minus: Tier 2 regulatory adjustments.

### 3.5.3 Basel Tier 2 – key eligibility criteria

Summarising Basel requirements: ([Central Bank of The Bahamas][4])

A Tier 2 instrument must:

1. Be **issued and fully paid-in**.
2. Be **subordinated** to depositors and general creditors.
3. Be **unsecured** (no collateral or guarantees increasing seniority).
4. Have a **minimum original maturity of 5 years**.
5. Be recognised in regulatory capital on an **amortised basis** during the last 5 years:
   * If remaining maturity is $m$ years ($0 < m ≤ 5$):

$$
\\text{Recognised Amount} = \\text{Nominal} \\times \\frac{m}{5}
$$

6. Have **no step-ups or incentives to redeem**.
7. Be callable only after 5 years and under similar conditions as AT1 (supervisory approval, replacement or strong capital).
8. Not give investors rights to **accelerate principal** except in bankruptcy/liquidation.
9. Not have credit-sensitive coupons.
10. Not be funded or purchased by the bank itself.

Basel also allows certain **general provisions** to be recognised in Tier 2, up to: ([Central Bank of The Bahamas][4])

* **1.25% of credit-risk RWA** for Standardised Approach banks.
* **0.60% of credit-risk RWA** (excess provisions over expected loss) for IRB banks.

### 3.5.4 India-specific Tier 2 components

RBI’s Basel III circular gives a detailed list: ([IIBF][3])

**Tier 2 for Indian banks** includes:

1. **General provisions and loss reserves** that are freely available to meet *presently unidentified* losses, for example:
   * General provisions on standard assets,
   * Floating provisions,
   * Provisions for unhedged FX exposures,
   * Country risk provisions,
   * Investment Reserve Account,
   * Excess provisions from NPA sales,
   * Countercyclical provisioning buffer, etc.
     These are recognised in Tier 2 **up to 1.25% of total credit-risk RWA**.

2. **Tier 2 debt capital instruments**:
   * Subordinated debt meeting Basel Tier 2 criteria (5-year minimum maturity, amortisation, etc.).

3. **Preference share capital instruments**:
   * Certain forms like Perpetual Cumulative Preference Shares (PCPS), Redeemable Non-Cumulative Preference Shares (RNCPS), and Redeemable Cumulative Preference Shares (RCPS) that meet Tier 2 criteria.

4. **Share premium** from Tier 2 instruments.

5. **Revaluation reserves**:
   * Recognised in Tier 2 but only **45% of the revaluation reserve** is counted (i.e. 55% discount) due to valuation uncertainty. ([IIBF][3])

6. **Eligible Tier 2 instruments from subsidiaries** held by third parties.

7. **Less: Tier 2 regulatory adjustments / deductions.**

So conceptually, for India:

$$
\\text{Tier 2}_{\\text{India}} = \\text{Subordinated Debt} + \\text{Eligible Pref Shares} + \\text{Allowed Provisions} + 0.45 \\times \\text{Revaluation Reserves} + \\text{Minority Interest} - \\text{Tier 2 Adjustments}
$$

---

## 3.6 Capital ratios in practice – formulas & India mapping

Let:

* $C_{\\text{CET1}}$ = CET1 capital (after all adjustments)
* $C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}$
* $C_{\\text{Total}} = C_{\\text{T1}} + C_{\\text{Tier 2}}$
* $\\text{RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}$

**Ratios** (Basel & RBI use the same formulas): ([IIBF][3])

$$
\\text{CET1 Ratio} = \\frac{C_{\\text{CET1}}}{\\text{RWA}}
$$

$$
\\text{Tier 1 Ratio} = \\frac{C_{\\text{T1}}}{\\text{RWA}}
$$

$$
\\text{Total Capital Ratio (CRAR)} = \\frac{C_{\\text{Total}}}{\\text{RWA}}
$$

**Basel template minimums (before buffers):** CET1 4.5%; Tier 1 6%; Total 8%. ([Bank for International Settlements][2])

**India effective stack (fully implemented, banks):** CET1 ≥ 5.5%; Tier 1 ≥ 7%; Total ≥ 9%; and CCB 2.5% on top of this in CET1, taking effective total requirement to 11.5%. ([IIBF][3])

---

## 3.7 How a bank actually calculates regulatory capital (process view)

In practice, capital calculation is a **data + mapping + adjustments** exercise done at least quarterly, often monthly.

### Step 1 – Pull accounting data

* Start from **regulatory consolidation** (not necessarily identical to accounting consolidation).
* Extract from the general ledger:
  * Share capital accounts,
  * Reserves and surplus,
  * Retained earnings,
  * Hybrid capital accounts,
  * Subordinated debt, preference shares, etc.
* Identify **minority interests** and capital in subsidiaries.

### Step 2 – Map accounting items to regulatory capital categories

* Maintain a **mapping table**:
  * GL code → CET1 / AT1 / Tier 2 / Not capital.
* Example mapping logic:
  * Paid-up equity capital → CET1 (if Basel/RBI criteria are met).
  * Securities premium on equity → CET1.
  * PNCPS / AT1 bonds → AT1 (if they satisfy Annex criteria).
  * Subordinated debt with ≥5 years maturity → Tier 2.
  * General provisions on standard assets → Tier 2, up to the cap.
  * Revaluation reserves → Tier 2 (45% only).

### Step 3 – Compute gross capital amounts

* Sum mapped balances for:
  * **Gross CET1 before adjustments**.
  * **Gross AT1 before adjustments**.
  * **Gross Tier 2 before adjustments**.
* Apply RBI rules on **current-year profit inclusion** for CET1.

### Step 4 – Apply regulatory adjustments

For each tier:

* Deduct **goodwill and other intangibles** from CET1.
* Deduct **DTAs** to the extent required by Basel/RBI rules.
* Deduct **investments in capital of other financial institutions** using “corresponding deduction” logic.
* Deduct **shortfalls** of provisions versus expected loss from CET1.
* Apply any **prudential filters** (e.g. treatment of unrealised gains).

Result:

* $C_{\\text{CET1}}$ – net CET1.
* $C_{\\text{AT1}}$ – net AT1.
* $C_{\\text{Tier 2}}$ – net Tier 2.

### Step 5 – Derive Tier 1 and Total capital

$$
C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}
$$

$$
C_{\\text{Total}} = C_{\\text{T1}} + C_{\\text{Tier 2}}
$$

Check that Tier 2 doesn’t exceed caps relative to Tier 1 if any are prescribed.

### Step 6 – Calculate capital ratios

* Take **RWA** from the RWA engine (credit, market, operational).
* Apply ratio formulas for:
  * CET1, Tier 1, Total.
* Compare against:
  * Basel minima, and
  * RBI minima + CCB.

### Step 7 – Internal controls

Typical controls:

* Reconcile capital figures with published balance sheet and prior period.
* Movement analysis: opening vs closing capital by component.
* Check that changes in capital instruments (issuance/redemption) are properly reflected.
* Control over **PoNV / trigger language** in new AT1/Tier 2 issuances to ensure eligibility.

---

## 3.8 Bulb section – industry tips & pitfalls

💡 **Bulb 1 – “Regulatory capital” ≠ “Shareholders’ funds”**

* Accounting equity can contain items that are **not fully loss-absorbing** or too uncertain (e.g. some intangibles, certain DTAs).
* Regulatory capital **strips those out** via adjustments. ([Bank for International Settlements][1])
* In interviews, it’s strong to say:
  > “We start from accounting equity and then apply Basel/RBI adjustments to derive regulatory CET1.”

---

💡 **Bulb 2 – Understand ‘going-concern’ vs ‘gone-concern’ language**

If you see:

* **Tier 1 / AT1** – think **going-concern**, able to take losses while the bank is alive.
* **Tier 2** – think **gone-concern**, mainly relevant in resolution or liquidation. ([Bank for International Settlements][1])

Dropping this distinction clearly in an interview shows conceptual maturity.

---

💡 **Bulb 3 – India’s capital stack is stricter than Basel**

Instead of just quoting Basel 4.5 / 6 / 8, explicitly tie it to India:

> “Basel minimum CET1 is 4.5%, but RBI requires 5.5% CET1, 7% Tier 1 and 9% total capital, plus a 2.5% CET1 conservation buffer, so Indian banks effectively target at least around 11.5% total capital.” ([IIBF][3])

That’s exactly the kind of line a capital adequacy hiring manager loves to hear.

---

💡 **Bulb 4 – AT1/Tier 2 eligibility is about ‘behaviour in stress’**

When reviewing an instrument term sheet (for the product / implementation flavour):

* Ask:
  * Is it **perpetual** (for AT1) or at least 5-year maturity (for Tier 2)?
  * Are coupons **fully discretionary and non-cumulative** (for AT1)?
  * Is there a clear **loss-absorption mechanism** at trigger / PoNV?
  * Are there **no incentives to redeem** and no credit-linked coupons? ([Central Bank of The Bahamas][4])

This is how real-world Basel implementation / validation teams think.

---

💡 **Bulb 5 – Provisions as capital are capped**

In India:

* General provisions and similar buffers can only be counted in **Tier 2 up to 1.25% of credit-risk RWA** (and up to 0.6% for certain IRB excess provisions). ([Central Bank of The Bahamas][4])

So you can’t “solve” capital by over-provisioning; provision capital is strictly limited.

---



[1]: https://www.bis.org/fsi/fsisummaries/defcap_b3.pdf "Definition of capital in Basel III – Executive Summary"
[2]: https://www.bis.org/publ/bcbs189.pdf?utm_source=chatgpt.com "Basel III: A global regulatory framework for more resilient ..."
[3]: https://www.iibf.org.in/documents/BASEL-III.pdf "Basel III Capital Regulations"
[4]: https://cdn.centralbankbahamas.com/download/001004900.pdf "Microsoft Word - Extract from Basel III - A Global Regulatory Framework for More Resilient Banks and Banking Systems"
[5]: https://www.crisilratings.com/mnt/winshare/Ratings/SectorMethodology/MethodologyDocs/criteria/Rating%20criteria%20for%20Basel%20III%20-%20compliant%20non-equity%20capital%20instruments.pdf?utm_source=chatgpt.com "Rating criteria for Basel-III non-equity instruments"
`
            }
          ]
        }
      ]
    },

    {
      id: "4",
      slug: "credit-risk-sa-global",
      title: "Module 4 – Credit Risk: Standardised Approach (Global)",
      goal: "Understand the mechanics of the Standardised Approach (SA) for credit risk thoroughly.",
      sections: [
        {
          id: "4-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `## 4.1 Where the Standardised Approach (SA) fits

Under Basel (II, III, 3.1), **Pillar 1** minimum capital has three big components:

* Credit risk
* Market risk
* Operational risk

Here we focus on **credit risk under the Standardised Approach (SA)** – the simplest (but still technical) way to compute **credit risk RWA**. Banks either:

* Use **SA** (mandatory for many portfolios and many banks), or
* Use **IRB** (internal models) – but even then, SA remains important (e.g. output floor, some portfolios).

The core SA formula is:

$$
\\text{RWA}_j = \\text{EAD}_j \\times \\text{Risk Weight}_j
$$

and

$$
\\text{Total RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

Basel explicitly states that under SA, RWA are calculated as **product of standardised risk weights and exposure amounts**, with exposures taken **net of specific provisions**. ([Bank for International Settlements][1])

---

## 4.2 What is credit risk (in Basel sense)?

From a capital perspective, **credit risk** is:

> The risk that a counterparty will fail to meet its contractual obligations, causing financial loss to the bank.

It includes:

* Classic loans and advances
* Bonds and other debt securities
* Commitments, guarantees, letters of credit
* OTC derivatives (counterparty credit risk – advanced topic; not deep here)

Capital calculations focus on **unexpected loss**; provisioning handles **expected loss** (conceptually).

---

## 4.3 Exposure at Default (EAD) – SA view

**EAD** is the amount that is considered **exposed to default at the time of default**.

Under SA, for **on-balance sheet exposures**, the EAD is conceptually:

$$
\\text{EAD}_{\\text{on-balance}, j} = \\max(0,\\ \\text{Accounting Exposure}_j - \\text{Specific Provisions}_j - \\text{Write-offs}_j)
$$

Basel says exposures should be risk-weighted **net of specific provisions (including partial write-offs)**. ([SIF][2])

For **off-balance sheet items** (commitments, guarantees, etc.), you use **Credit Conversion Factors (CCFs)**:

$$
\\text{EAD}_{\\text{off-balance}, k} = \\text{Notional}_k \\times \\text{CCF}_k
$$

Total EAD for a counterparty/obligor can be:

$$
\\text{EAD}_{\\text{total}} = \\sum_j \\text{EAD}_{\\text{on}, j} + \\sum_k \\text{EAD}_{\\text{off}, k}
$$

(We go deep into **CCFs & off-balance sheet** in **Module 6**; here it’s enough to know: EAD already reflects these conversions.)

---

## 4.4 Main exposure classes under the Standardised Approach

Basel’s SA assigns **risk weights** based mainly on: ([Bank for International Settlements][1])

* **Exposure class** (what type of counterparty / product),
* **External rating / credit quality**,
* **Collateral / guarantees** (via credit risk mitigation, Module 7),
* For some classes under Basel 3.1, **LTV**, product type, etc.

Key SA credit exposure classes (global view):

1. **Exposures to sovereigns and central banks**

   * Central governments, central banks, some central government-guaranteed exposures.
   * Risk weights depend largely on **country risk / rating** and national discretion.

2. **Exposures to non-central government public sector entities (PSEs)**

   * Regional governments, municipalities, certain public sector bodies.
   * Often receive treatment linked to sovereign or bank/corporate-style risk weights, depending on national rules.

3. **Exposures to banks**

   * Claims on banks and eligible securities firms.
   * SA risk weights depend on:

     * External rating of the bank (where allowed), and/or
     * Country of incorporation and its sovereign rating, or
     * Under Basel 3.1, the **Standardised Credit Risk Assessment Approach (SCRA)** for **unrated** banks. ([KPMG Assets][3])

4. **Exposures to corporates**

   * Claims on corporates (non-bank, non-sovereign).
   * Risk weights depend on external rating where allowed; **unrated corporates** typically have a standard risk weight (often 100% under the Basel template). ([European Central Bank][4])

5. **Regulatory retail portfolio**

   * Granular, diversified exposures to individuals and small businesses meeting **regulatory retail criteria** (e.g. low individual exposure, many borrowers, etc.).
   * Typically get **preferential risk weight** compared to large corporates (e.g. 75% in legacy Basel II template), subject to conditions. ([Gestion de Riesgo][5])

6. **Exposures secured by residential real estate**

   * Loans secured by residential property meeting specific criteria.
   * Under Basel 3.1, risk weights are heavily driven by **loan-to-value (LTV)**. ([KPMG Assets][6])

7. **Exposures secured by commercial real estate**

   * Loans secured by income-producing or commercial property.
   * Basel 3.1 introduces more risk-sensitive, often higher, risk weights depending on LTV and jurisdictional choices. ([Bank of England][7])

8. **Past-due exposures**

   * Exposures that are past due (non-performing).
   * Receive **higher risk weights** depending on:

     * Number of days past due,
     * Level of provisions / specific impairment.

9. **Covered bonds**

   * Debt instruments secured by pools of assets (like mortgages) that remain on the issuer’s balance sheet.
   * Receive specific preferential risk weights if criteria are met.

10. **Securitisation exposures**

    * Tranches of securitised pools (senior, mezzanine, equity).
    * Treated under **separate securitisation framework**, with high risk weights (sometimes 1250%) for certain tranches. ([IIBF][8])

11. **Equity exposures**

    * Direct equity holdings, funds, etc.
    * Risk weights are high (e.g. 100%, 250% or more depending on approach / jurisdiction), recognising higher volatility.

12. **Other assets**

    * Cash items in process of collection, fixed assets, prepayments, certain intangibles not already deducted, etc.
    * Typically given a standard risk weight (frequently 100% for many items in the template).

Exact details are in chapter **CRE20 – Standardised approach: individual exposures** of the Basel framework. ([Bank for International Settlements][1])

---

## 4.5 External ratings and ECAIs in SA

### 4.5.1 Role of ratings

Under SA, for certain exposure classes (sovereign, bank, corporate, some securitisations), regulatory risk weights are **tied to external credit ratings** where the jurisdiction allows their use.

The logic:

1. Identify an **eligible ECAI** (External Credit Assessment Institution) – e.g. S&P, Moody’s, Fitch, approved local agencies.
2. Map the **rating** (AAA, AA, A, BBB, etc. or local scales) to a **Credit Quality Step (CQS)**.
3. Each CQS is assigned a **regulatory risk weight** (e.g. high grades → lower risk weight, low grades → higher risk weight, below a threshold → 150% etc.). ([Bank for International Settlements][9])

Basel CRE21 sets criteria for ECAIs (objectivity, independence, transparency, etc.) and rules for using ratings (consistency, no cherry-picking). ([Bank for International Settlements][9])

### 4.5.2 Key principles when using ratings

Basel requires: ([Bank for International Settlements][9])

* **ECAI eligibility** – supervisor must recognise them for regulatory purposes.
* **Credibility and transparency** – methodologies publicly available; performance monitored.
* **No cherry-picking** – if a bank uses a rating of a particular ECAI for one exposure in a class, it must **use that ECAI consistently** for all similar exposures.
* **Issue vs issuer rating**:

  * Use **issue rating** where available.
  * If only issuer rating exists, apply mapping rules (e.g. corporate exposure treated according to issuer rating subject to prudential conditions).
* **Multiple ratings**:

  * Generally, take the **two most conservative** and then the **higher risk weight** of those two (or similar rules, depending on jurisdiction).

### 4.5.3 Unrated exposures

Basel’s SA must still work when **no external rating** is available. Key patterns (simplified): ([European Central Bank][4])

* **Unrated corporates**: default risk weight (template historically 100%; Basel 3.1 keeps a similar concept with added sensitivity and some national choices).
* **Unrated banks**:

  * Under Basel 3.1, use **SCRA**: banks are categorised into grades (e.g. A/B/C) based on balance-sheet strength and supervisory information; each grade has risk weights.
* **Retail and many real estate exposures**: often **don’t require ratings** – risk weights based on product type and LTV instead.

---

## 4.6 The Standardised Approach pipeline – step-by-step

Here’s the **conceptual algorithm** SA banks run (this is exactly the kind of flow your web app could implement).

### Step 1 – Identify exposure and exposure amount

For each position:

* Get **counterparty & product information** (sovereign/bank/corporate/retail/etc.).
* Determine **on-balance vs off-balance**.
* Calculate **EAD**:

  * On-balance: exposure net of specific provisions/write-offs.
  * Off-balance: notional × CCF (Basel gives CCF tables; details in Module 6). ([SIF][2])

### Step 2 – Assign exposure class

Based on Basel CRE20 rules: ([Bank for International Settlements][1])

Examples:

* Government bond → sovereign exposure.
* Loan to another bank → bank exposure.
* Term loan to large corporate → corporate exposure.
* Credit card exposure to individuals → regulatory retail.
* Mortgage on a house → secured by residential real estate.

This classification is **critical** – risk weights differ heavily by class.

### Step 3 – Determine rating information (if relevant)

For classes that use ratings:

* Check if exposure (or obligor) has an **eligible external rating** from a recognised ECAI.
* Map that rating:

  * Rating → CQS → **risk weight** for that exposure type. ([Bank for International Settlements][9])
* Apply **jurisdiction rules** for multiple ratings or issue vs issuer rating.

If no rating or rating usage not allowed → use **unrated risk weight** rules.

### Step 4 – Apply Credit Risk Mitigation (CRM) where eligible

If there is:

* **Eligible financial collateral**,
* **Eligible guarantees or credit derivatives**,

then:

* Adjust EAD and/or **substitute risk weight** of the guarantor/collateral (detailed in **Module 7**).
* In SA, CRM is usually handled by:

  * Splitting the exposure into **secured** and **unsecured** parts, or
  * Substituting risk weight to that of the **protection provider** (for guarantees).

Basel’s CRE20 and CRM sections give the exact rules. ([SIF][2])

### Step 5 – Assign risk weight

Using:

* Exposure class (sovereign/bank/corp/retail/real estate/etc.),
* Rating (if used),
* Product characteristics (e.g. LTV for mortgages under Basel 3.1),

look up the **risk weight** from the relevant SA table.

Conceptually:

$$
\\text{RW}_j = f(\\text{Class}_j , \\text{Rating}_j , \\text{LTV}_j , \\text{Other attributes})
$$

Basel 3.1 reforms **revised these functions** to make them more risk-sensitive (e.g. more LTV buckets, new SCRA for banks). ([Wikipedia][10])

### Step 6 – Compute RWA for each exposure

For each exposure j:

$$
\\text{RWA}_j = \\text{EAD}_j \\times \\text{RW}_j
$$

(Where RW is a decimal; e.g. 100% → 1.0, 50% → 0.5, etc.)

### Step 7 – Aggregate

Sum across exposures:

$$
\\text{RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

Then:

$$
\\text{Total RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}
$$

Capital requirement for credit risk:

$$
K_{\\text{credit}} = 0.08 \\times \\text{RWA}_{\\text{credit}}
$$

Total minimum capital (template):

$$
K_{\\text{total}} = 0.08 \\times \\text{Total RWA}
$$

(before adding buffers and jurisdictional overlays). ([European Central Bank][4])

---

## 4.7 SA under Basel 3.1 (Endgame) – high-level enhancements

Basel 3.1 significantly **updates** the Standardised Approach for credit risk (SA-CR), not just tweaks it. The main themes: ([Wikipedia][10])

1. **More risk sensitivity**

   * For **real estate**, risk weights now depend on **loan-to-value (LTV)** ratios and property type.
   * For **corporates**, exposures are split into **general corporates** and **specialised lending**, with different treatments. ([New Link Consulting][11])
   * Some retail segments and specialised products get more granularity.

2. **Standardised Credit Risk Assessment Approach (SCRA)** for banks

   * For **unrated bank exposures**, Basel 3.1 introduces SCRA categories (A/B/C) with associated risk weights.

3. **Stronger due diligence expectations**

   * Banks must **not rely mechanically on ratings**; they must perform their own **credit risk assessment**.
   * If internal assessment and rating diverge materially, risk weight may need to be higher.

4. **Consistency with output floor**

   * Revised SA-CR forms the **basis for the 72.5% output floor**, constraining how low IRB RWAs can go relative to SA RWAs.

For your web app / interview, you don’t need every table, but you should be ready to say:

> “Basel 3.1 makes SA-CR more risk-sensitive via LTV-based real estate risk weights, SCRA for unrated banks, and more granular corporate/retail treatment, and uses SA-CR as the reference for the 72.5% output floor.” ([Wikipedia][10])

---

## 4.8 Implementation view – what an SA credit risk engine needs

An industrial RWA engine for SA credit risk needs at least:

1. **Core data model**

   * Counterparty master (type, sector, rating references).
   * Facility/exposure master:

     * Product type (loan, bond, guarantee, LC, etc.).
     * On-balance vs off-balance.
     * Currency, maturity, interest structure (for some jurisdictions).
   * Collateral and guarantee data (type, market value, haircuts, guarantor details).
   * External ratings:

     * ECAI name, rating, type (issue/issuer), validity dates.

2. **Classification logic**

   * Rules to assign each exposure to a **Basel exposure class** and sub-class.
   * Logic for **regulatory retail criteria**, SME definitions, etc. (global, India-specific later in Module 5).

3. **Rating & due diligence module**

   * Mapping of each rating scale → CQS → risk weight.
   * Rules for multiple ratings, issue vs issuer, etc.
   * Flags and controls for **due diligence overrides** (when internal assessment suggests higher risk).

4. **CCF & EAD engine**

   * CCF mapping by product type and commitment type (unconditionally cancellable vs not, etc.).
   * EAD calculation net of specific provisions / write-offs.

5. **CRM engine**

   * Collateral recognition logic (eligible/ineligible).
   * Haircut application and exposure splitting.
   * Guarantee treatment using substitution (exposure partly or fully mapped to guarantor’s risk weight).

6. **Aggregation & reporting**

   * RWA by exposure class, rating grade, business line, region, etc.
   * Movement analysis (period-on-period changes in RWA: volume vs mix vs CRM vs methodology).

This is exactly the “data & calculation flow” we expand in **Module 9**, but already here you can see how SA is very **implementable** in a web app / portfolio project.

---

## 4.9 Bulb section – practical tips & pitfalls (SA credit risk)

💡 **Bulb 1 – Exposure class is everything**
Two loans with the **same counterparty** may fall into **different exposure classes** (e.g. corporate loan vs retail SME, depending on criteria). This can **drastically change risk weights**. Implementation must have robust classification rules based on Basel CRE20. ([Bank for International Settlements][1])

---

💡 **Bulb 2 – Ratings are a tool, not an excuse**
Basel 3.1 explicitly warns against **mechanistic reliance** on ratings. Banks must do their own **due diligence**, and if internal analysis suggests higher risk than the rating implies, they are expected to apply **higher** risk weights or take other measures. ([Bank for International Settlements][9])

This is a good point to mention in interviews when they ask: “What is the role of ratings in SA?”

---

💡 **Bulb 3 – EAD is net of specific provisions**
A common misunderstanding is to use **gross exposure** for RWA. Basel is clear: exposures are risk-weighted **net of specific provisions and write-offs**. ([SIF][2])

In a build, you’d explicitly subtract specific provisions from gross exposure before applying risk weight.

---

💡 **Bulb 4 – Unrated corporates ≠ zero information**
In many banking books (especially in emerging markets), most corporates are **unrated**. Under SA, they often sit in a **standard 100% (or similar) bucket**. But in an interview / real role you can say:

> “Unrated corporates get the default SA risk weight, but the bank should still internally distinguish risk within that bucket for pricing, limits, and provisioning – SA is just the regulatory minimum.”

---

💡 **Bulb 5 – Basel 3.1 makes real estate very LTV-centric**
Regulators and investors are watching **real estate** exposures closely. Under Basel 3.1:

* Real estate risk weights now depend strongly on **LTV and property type**.
* Implementation requires **good collateral valuation data** and frequent updates. ([KPMG Assets][6])

This is a strong talking point for product / implementation roles.

---



[1]: https://www.bis.org/basel_framework/chapter/CRE/20.htm?utm_source=chatgpt.com "CRE20 - Standardised approach: individual exposures"
[2]: https://www.sif.admin.ch/dam/de/sd-web/GmUQnVy5H4eY/cre20.pdf?utm_source=chatgpt.com "CRE20 Standardised approach: individual exposures"
[3]: https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/10/basel-III-standardised-approach-credit-and-operational-risk.pdf.coredownload.inline.pdf?utm_source=chatgpt.com "Basel III Standardised Approach – Credit and Operational risk"
[4]: https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp517.pdf?utm_source=chatgpt.com "Credit ratings and the standardised approach to credit risk in ..."
[5]: https://gestionderiesgo.org/wp-content/uploads/2021/03/BaselFramework.pdf?utm_source=chatgpt.com "Basel Committee on Banking Supervision The Basel Framework"
[6]: https://assets.kpmg.com/content/dam/kpmg/cn/pdf/en/2021/02/basel-iv-credit-risk-standardised-approach.pdf?utm_source=chatgpt.com "BASEL IV Credit Risk Standardised Approach (SA)"
[7]: https://www.bankofengland.co.uk/prudential-regulation/publication/2022/november/implementation-of-the-basel-3-1-standards/credit-risk-standardised-approach?utm_source=chatgpt.com "Chapter 3 – Credit risk – standardised approach"
[8]: https://www.iibf.org.in/documents/BASEL-III.pdf?utm_source=chatgpt.com "Basel III Capital Regulations"
[9]: https://www.bis.org/basel_framework/chapter/CRE/21.htm?utm_source=chatgpt.com "CRE21 - Standardised approach: use of external ratings"
[10]: https://en.wikipedia.org/wiki/Basel_III%3A_Finalising_post-crisis_reforms?utm_source=chatgpt.com "Basel III: Finalising post-crisis reforms"
[11]: https://new-linkconsulting.com/wp-content/uploads/2023/11/The-Road-to-Basel-IV-Wholesale-Credit-Risk.pdf?utm_source=chatgpt.com "The Road to Basel IV: Wholesale Credit Risk"
`
            }
          ]
        }
      ]
    },
    {
      id: "5",
      slug: "credit-risk-sa-india",
      title: "Module 5 – Credit Risk: Standardised Approach (India)",
      goal: "Apply global SA concepts to an Indian regulatory environment.",
      sections: [
        {
          id: "5-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `## 5.1 Where the SA rules live in Indian regulation

In India, the Standardised Approach for credit risk is implemented through **RBI Basel II / Basel III master circulars**, now consolidated under updated Basel III capital regulations.

Key regulatory anchors:

* **Basel III Capital Regulations – Master Circular**
  – Originally issued July 1, 2013: “Master Circular – Basel III Capital Regulations”.
  – Part A, Section 5 = **“Capital charge for credit risk”**, with detailed sub-sections:

  * 5.2 Claims on domestic sovereigns
  * 5.3 Claims on foreign sovereigns
  * 5.4 Public sector entities
  * 5.5 MDBs/BIS/IMF
  * 5.6 Banks
  * 5.7 Primary dealers
  * 5.8 Corporates / AFCs / NBFC-IFCs
  * 5.9 Regulatory retail
  * 5.10 Claims secured by residential property
  * 5.11 Commercial real estate
  * 5.12 NPAs
  * 5.13 Specified categories, etc. ([Reserve Bank of India][1])

* RBI decided that **all commercial banks in India** (except LABs & RRBs) must adopt:
  – **Standardised Approach (SA)** for credit risk,
  – **Basic Indicator Approach (BIA)** for operational risk,
  – Standardised Duration Approach for market risk, at least to start with. ([Reserve Bank of India][1])

* Basel III has since been updated (e.g. Master Circular dated **1 April 2025** for Basel III capital regulations) but the *structure* of SA – exposure classes + risk-weight tables – is the same. ([PDICAI][2])

> 💡 **Implementation tip (for your app):**
> In your code/data model, treat the RBI Basel III master circular as the **“parameter file”** for India:
>
> * A table per exposure class (sovereign, banks, corporates, regulatory retail, housing, CRE, NPAs, etc.).
> * Each table has **rating bucket / LTV / product-type → risk weight**.
> * SA math remains: \`RWA_i = EAD_i × RW_i\` – only the **jurisdictional parameters** (risk weights, thresholds) are Indian.

---

## 5.2 ECAIs & ratings in the Indian SA

### 5.2.1 RBI-approved ECAIs

Under SA, risk weights depend heavily on **external ratings**. In India, RBI specifies which credit rating agencies are eligible as **External Credit Assessment Institutions (ECAIs)**.

RBI / IIBF material lists domestic ECAIs whose ratings may be used for risk-weighting: 

Common domestic ECAIs include (RBI-accredited list – names may be slightly updated over time):

* CRISIL Ratings Limited
* ICRA Limited
* CARE Ratings Limited
* India Ratings & Research Pvt Ltd
* Brickwork Ratings India Pvt Ltd
* Acuite (formerly SMERA)
* Infomerics, etc. 

RBI’s 9 June 2025 circular on ECAIs confirms that the list of **domestic credit rating agencies accredited for risk-weighting** is given in the latest Basel III capital Master Circular. 

### 5.2.2 How ratings are used in practice

Key mechanics from RBI’s Basel III / NCAF guidance: ([Reserve Bank of India][1])

* Banks must:

  * Choose ECAIs from RBI’s approved list.
  * **Map** rating symbols (AAA, AA+, AA, etc.) to RBI-prescribed risk-weight buckets.
  * Use a given ECAI **consistently for each type of claim** (no rating shopping).
* Both **long-term** and **short-term** ratings have mapping tables under SA.
* Guidance on:

  * How to treat **unsolicited ratings**.
  * How to handle **multiple ratings**.
  * When an **issue rating** can be used for an issuer or other exposures.

> 💡 **Engine design tip:**
> For each exposure, you need:
>
> 1. \`rating_provider\` (CRISIL / ICRA / etc.)
> 2. \`rating_symbol\` (e.g. CRISIL AA+, ICRA BBB−)
> 3. A **jurisdictional mapping table**: \`{asset_class, rating_bucket} → risk_weight\`.
>    In the engine, you don’t care *who* the ECAI is, as long as your mapping has already normalized each rating into the RBI bucket.

---

## 5.3 Exposure classification nuances – India vs generic Basel

The logic is still the SA pipeline from Module 4:

> **Exposure → Classify → Determine rating/LTV/category → Get risk weight from RBI table → RWA = EAD × RW.**

The “India flavour” is in *how* exposures are classified and what risk weights apply.

### 5.3.1 Sovereigns: domestic vs foreign

RBI’s Basel III circular has separate sections for: **claims on domestic sovereigns** and **claims on foreign sovereigns**. ([Reserve Bank of India][1])

Typical pattern (high-level, not every number):

* **Claims on Government of India / RBI**

  * If denominated in INR and funded in INR, they normally get **0% risk weight** (like Basel template).
* **Claims on state governments**

  * Often get favourable risk weights; details depend on RBI tables (usually 0% or 20% depending on type and guarantee).
* **Foreign sovereigns**

  * Risk-weighted based on their external rating (Basel-style 0–150% range).

> 💡 **Practical takeaway:**
> For Indian banks, a large chunk of **SLR securities & GoI bonds** sit at **0% RW** → they boost the denominator (total assets) but not RWA, and therefore help CRAR.

---

### 5.3.2 Banks & primary dealers

RBI has specific sub-sections for:

* **Claims on banks**, and
* **Claims on primary dealers (PDs)**. ([Reserve Bank of India][1])

Pattern:

* Risk weights are **rating-sensitive**, similar to Basel:

  * Better-rated banks → lower RW (e.g. 20% / 30% type buckets).
  * Weaker or unrated banks → typically 50%–100%+.
* For some short-term interbank exposures, there can be more favourable treatment (tenor & rating sensitive).

> 💡 **Implementation tip:**
> In many Indian RWA engines, the “counterparty type” dimension explicitly distinguishes:
> \`Bank (scheduled commercial)\`, \`Foreign bank branch\`, \`Primary Dealer\`, \`NBFC\`, etc., because each is mapped to a different **SA rule section** and risk-weight table.

---

### 5.3.3 Corporates, NBFCs & SMEs vs regulatory retail

Under RBI’s Basel III circular:

* **Corporates / AFCs / NBFC-IFCs** are grouped in section 5.8 (“Claims on corporates, AFCs & NBFC-IFCs”). ([Reserve Bank of India][1])
* **Regulatory retail** is section 5.9 – this is critical in India. ([Reserve Bank of India][1])

#### (a) Corporate exposures

High-level pattern from RBI tables:

* **Rated corporates**: RW varies by rating (roughly 20%, 50%, 100%, 150%).
* **Unrated corporates**: default **100% RW**.
* **Restructured standard corporates**: RBI explicitly prescribes **higher risk weight (e.g. 125%)** until satisfactory performance under revised terms for a set period. ([Reserve Bank of India][1])

Additionally, RBI clarifies that **claims on corporates** include *all* exposures that don’t fall into sovereign, bank, regulatory retail, residential mortgage, NPAs, or other specified categories. ([Reserve Bank of India][1])

#### (b) Regulatory retail – Indian definition

RBI gives a *very detailed definition* of what qualifies as **regulatory retail portfolio**. If all criteria are met, qualifying exposures get a **75% risk weight** (vs 100% for corporates). ([Reserve Bank of India][1])

To be in **regulatory retail**, an exposure must satisfy 4 criteria:

1. **Orientation** – exposure to an individual or small business

   * Small business = average annual turnover < ₹50 crore (3-year average / projections). ([Reserve Bank of India][1])

2. **Product** – allowed retail products (term loans, small business facilities, revolving credits, etc.). ([Reserve Bank of India][1])

3. **Granularity** – portfolio must be well diversified.

   * No **aggregate exposure** to one counterparty > 0.2% of the overall regulatory retail portfolio. ([Reserve Bank of India][1])

4. **Low value of individual exposures** – **total exposure to one counterparty ≤ ₹5 crore** (sanctioned limit or outstanding, whichever is higher, including off-balance sheet). ([Reserve Bank of India][1])

Important exclusions: even if the borrower is a retail customer, some products **cannot** be in regulatory retail (and hence don’t get the 75% RW), for example: ([Reserve Bank of India][1])

* Mortgage loans that qualify as **residential mortgage** (those go to the housing bucket).
* **Consumer credit**, personal loans, credit cards.
* Capital market exposures, venture capital, etc.

> 💡 **Industry practice:**
> A lot of Indian banks aggressively structure SME / small-business exposures to qualify for **regulatory retail** (if they meet 5 crore threshold + granularity) → this drops RW from 100% to 75%. A good RWA engine needs a **clean “retail eligibility” module** that checks all four conditions mechanically.

---

### 5.3.4 Housing loans & Indian LTV-based risk weights

RBI gives a dedicated section for **claims secured by residential property** and links risk weights to **LTV** and **loan size** (Table 7A in the Basel III circular). ([Reserve Bank of India][1])

Current (Basel III 2013 circular, still referenced in later housing finance master circulars):

> **Table 7A – Claims secured by residential property – individual housing loans**
> (simplified summary) ([Reserve Bank of India][1])

* Up to ₹20 lakh, LTV ≤ 90% → **50% RW**
* ₹20–75 lakh, LTV ≤ 80% → **50% RW**
* > ₹75 lakh, LTV ≤ 75% → **75% RW**
* CRE–RH → 75% RW
* CRE → 100% RW

RBI also prescribes **LTV caps** (e.g. 90% for small loans up to ₹20 lakh, 80% for mid-sized, 75% for high-value loans). ([Reserve Bank of India][3])

**Important nuances:**

* **Third and subsequent dwelling unit to the same individual** is treated as **CRE** exposure (not residential mortgage) → 100% RW. ([Reserve Bank of India][1])
* **Restructured housing loans** carry **an additional 25 percentage points** on the usual risk weight. ([Reserve Bank of India][1])
* Some temporary relaxations (e.g., in 2020 RBI allowed lower risk weights 35%/50% linked to LTV) have been used as macro-prudential support. ([Reserve Bank of India][4])

> 💡 **Formula detail – LTV (RBI definition):**
> $$
> \\text{LTV} = \\frac{\\text{Total outstanding in the account}}{\\text{Realisable value of the residential property}}
> $$
> where “total outstanding” = principal + accrued interest + other charges, *without netting off* any provisions. ([Reserve Bank of India][1])

> 💡 **Engine design tip:**
> For housing loans, the RWA logic becomes **piecewise**:
>
> 1. Determine **if exposure qualifies** as “individual housing loan fully secured by residential property” (not CRE / CRE-RH / intermediary lending).
> 2. Compute **LTV** using RBI’s exact definition.
> 3. Use \`(loan_amount_bucket, LTV_bucket)\` to pull the risk weight from Table 7A.
> 4. For restructured loans, add **25 percentage points** to the risk weight.

---

### 5.3.5 Commercial Real Estate (CRE) vs CRE–RH

RBI separates:

* Standard **CRE** exposures (commercial real estate), and
* **CRE–RH (Commercial Real Estate – Residential Housing)** – a sub-category introduced with its own RW of **75%**. ([CloudFront][5])

Key points:

* **CRE** normally gets **100% RW**.
* **CRE–RH** (e.g., residential projects for sale) gets **75% RW**, reflecting somewhat lower risk vs pure commercial real estate.

Proper classification of a project as **CRE vs CRE–RH vs plain residential mortgage** is a *huge* driver of capital.

---

### 5.3.6 Non-performing assets (NPAs)

RBI’s Basel III circular has a dedicated section on **NPAs**. Key concept: risk weights depend on **how much specific provision** the bank has made. ([Reserve Bank of India][1])

For **unsecured portion** of NPAs (excluding qualifying residential mortgages):

* Specific provisions < 20% → **150% RW**
* Specific provisions ≥ 20% and < 50% → **100% RW**
* Specific provisions ≥ 50% → **50% RW**

For NPA home loans secured by residential property, RBI sets slightly different but conceptually similar rules (e.g. at least 100% RW, potentially lower when provision coverage is high). ([IIBF][6])

> 💡 **Conceptual link to provisioning:**
>
> * **Higher provisions** (more loss already recognised) → **lower RW** on the remaining net exposure.
> * Capital is then focused on the **unprovided**, still-risky portion of the NPA.

---

## 5.4 How SA is actually applied in India – end-to-end flow

You already know the global SA pipeline from Module 4. Here’s the same pipeline with **RBI-specific decisions** plugged in.

### Step 1 – Classify exposure under RBI categories

For each facility (loan, LC, BG, derivatives, etc.) the engine determines:

1. **Counterparty type**

   * Govt of India / RBI / state govt
   * Bank / Primary Dealer
   * Corporate / NBFC / AFC / NBFC-IFC
   * Retail individual / small business
   * HFC, NBFC, etc. (if relevant to bank’s books)

2. **Product / collateral / purpose**

   * Is it a **residential mortgage**?
   * Is it **CRE** or **CRE–RH**?
   * Is it a **consumer loan / credit card** (excluded from regulatory retail)?
   * Is it an NPA?

3. **Portfolio designation**

   * Does it meet **regulatory retail** criteria (orientation + product + granularity + 5 crore limit)? ([Reserve Bank of India][1])

### Step 2 – Determine EAD

* **On-balance sheet**:
  $$
  \\text{EAD} = \\text{Book value of exposure (net of specific provisions where RBI allows)}
  $$
* **Off-balance sheet**:
  $$
  \\text{EAD} = \\text{Notional} \\times \\text{CCF}
  $$
  (The specific CCFs are given in RBI’s off-balance sheet item tables and we’ll deep-dive in Module 6.)

### Step 3 – Pick the risk weight

Use:

* **Ratings + asset class** for rated sovereigns, banks, corporates, etc.
* **Unrated rules** for unrated corporates, SMEs.
* **Retail rule** (75%) if regulatory retail conditions hold.
* **Housing / CRE / CRE-RH tables** for property-secured exposures. ([Reserve Bank of India][1])
* **NPA rules** driven by provisioning level.

Mathematically, per exposure (i):

$$
\\text{RWA}_i = \\text{EAD}_i \\times \\text{RW}_i
$$

Overall:

$$
\\text{Total Credit RWA} = \\sum_i \\text{RWA}_i
$$

Then:

$$
\\text{CRAR} = \\frac{\\text{Regulatory Capital}}{\\text{Total RWA (credit + market + operational)}}
$$

### Step 4 – Aggregation & reporting (India-flavour)

For regulatory returns & Pillar 3 disclosures, Indian banks must split RWA by RBI categories, e.g.: ([Reserve Bank of India][1])

* Sovereign, bank, corporate, retail.
* Residential mortgage, CRE, CRE–RH.
* NPAs.
* Securitisation exposures, etc.

This is why your engine should be able to **aggregate by SA exposure class**, not just by internal business line.

---

## 5.5 Conceptual “Indian portfolio” walk-through (no numbers, just logic)

Imagine an Indian commercial bank with the following simplified portfolios:

1. **SLR government securities**

   * Counterparty = Govt of India, INR, funded in INR → **0% RW**.
   * Result: large EAD but zero RWA.

2. **Corporate term loans to mid-sized Indian companies**

   * Rated BBB by a domestic ECAI → risk weight as per RBI’s corporate rating table (e.g. 100%). ([Reserve Bank of India][1])
   * Unrated SME exposures → 100% RW as corporates unless they qualify for regulatory retail.

3. **SME working capital limits**

   * Turnover < ₹50 crore; total exposure per borrower < ₹5 crore; well-granular portfolio.
   * Orientation + product + granularity + exposure size tests all satisfied → **regulatory retail**, **75% RW**.

4. **Individual housing loans**

   * LTV and loan size determine RW using Table 7A (50% / 75%).
   * Restructured housing loans: RW increased by 25 percentage points.

5. **CRE project loans** (commercial malls, offices)

   * Classified as **CRE** → **100% RW**; if CRE-RH, then **75% RW**.

6. **NPAs**

   * Unsecured NPAs with low provisioning → attract **150% RW**.
   * As specific provisions increase (≥20%, ≥50%), the RW may reduce to 100%, then 50%.

Combine:

* For each facility: classify → compute EAD → fetch RW from RBI tables → RWA.
* Aggregate RWA by category and report in RBI formats.

> 💡 **Why this matters for interviews / portfolio app:**
> If you can clearly explain why:
>
> * a ₹3 crore SME CC limit at a small branch gets **75% RW**,
> * while a ₹100 crore unrated term loan to a large corporate gets **100% or 125% RW**,
> * and an LTV-90% ₹18 lakh home loan gets **50% RW**,
>   you’re already thinking exactly like a **Basel / capital adequacy analyst in India**.

---

## 5.6 Forward-looking note – Basel 3.1 / SA revisions in India

RBI is now in the process of **updating the Standardised Approach** to align with Basel 3.1 (Basel “endgame”), including more granular risk weights:

* Proposals include revised risk weights for **corporates, MSMEs, real estate, and some retail loans**, and allowing some credit card “transactors” to be treated as regulatory retail (lower RW). ([Reuters][7])
* Risk weights for some housing and MSME exposures are proposed to be **reduced**, to ease capital and support credit growth. ([Business Standard][8])

For your learning and app:

* The **logic and structure** of SA in India will remain: **exposure class + rating / LTV / product → RW**.
* Only the **parameter tables** change. If you build your engine correctly now (parameter-driven), it will adapt easily to Basel 3.1 updates.

---



[1]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf "Basel III Capital Regulations"
[2]: https://www.pdicai.org/Docs/RBI-2025-26-08_242025172491.pdf?utm_source=chatgpt.com "भारतीय रज़वर् बैंक"
[3]: https://www.rbi.org.in/commonperson/English/Scripts/Notification.aspx?Id=1582&utm_source=chatgpt.com "Master Circular – Housing Finance"
[4]: https://www.rbi.org.in/commonman/english/scripts/PressReleases.aspx?Id=3254&utm_source=chatgpt.com "Reserve Bank of India"
[5]: https://dyvmwwyqozzzb.cloudfront.net/main/86BS010715F_A9.pdf?utm_source=chatgpt.com "ANNEX 9 Risk Weights for Calculation of Capital Charge for ..."
[6]: https://www.iibf.org.in/documents/NCAF-2014.pdf?utm_source=chatgpt.com "CAPITAL ADEQUACY AND MARKET DISCIPLINE-NEW ..."
[7]: https://www.reuters.com/sustainability/boards-policy-regulation/indias-central-bank-proposes-changes-credit-risk-rules-lenders-2025-10-07/?utm_source=chatgpt.com "India's central bank proposes changes to credit risk rules for lenders"
[8]: https://www.business-standard.com/economy/news/rbi-basel-iii-norms-to-reduce-bank-capital-requirements-2027-125100601110_1.html?utm_source=chatgpt.com "RBI's Basel III norms to lower banks' capital requirement ..."
`
            }
          ]
        }
      ]
    },
    {
      id: "6",
      slug: "obs-ccf-ead",
      title: "Module 6 – Off-Balance Sheet Exposures, CCFs & EAD",
      goal: "Master treatment of off-balance sheet exposures and EAD calculations.",
      sections: [
        {
          id: "6-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `# Module 6 – Off-Balance Sheet Exposures, CCFs & EAD

## 6.1 Why OBS matters for capital

Banks don’t only take risk via **funded loans**. They also:

* Give **undrawn credit lines** (cash credit limits, overdraft limits, term loan undrawn portions),
* Issue **guarantees** and **letters of credit**,
* Write **standby facilities**,
* Enter **derivatives**.

Many of these **don’t show up fully on the balance sheet**, but they **create credit risk**.

Basel solves this by:

1. Applying a **Credit Conversion Factor (CCF)** to convert OBS notional → an EAD-like amount.
2. Applying **risk weight** to that EAD as usual.

Conceptually:

$$
\\text{EAD}_{\\text{off-balance}} = \\text{Notional} \\times \\text{CCF}
$$

$$
\\text{RWA} = \\text{EAD}_{\\text{off-balance}} \\times \\text{RW (based on counterparty / exposure class)}
$$

---

## 6.2 EAD – general concept recap

For **Standardised Approach (SA)**:

* **On-balance sheet**:

$$
\\text{EAD}_{\\text{on}} = \\max\\big(0,\\ \\text{Gross exposure} - \\text{Specific provisions} - \\text{write-offs}\\big)
$$

* **Off-balance sheet**:

$$
\\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
$$

Total EAD for a facility or counterparty:

$$
\\text{EAD}_{\\text{total}} = \\sum \\text{EAD}_{\\text{on}} + \\sum \\text{EAD}_{\\text{off}}
$$

Under **IRB**, EAD has more complex modelling, but in SA it’s essentially **book values plus CCF logic**.

---

## 6.3 Types of off-balance sheet items (Basel view)

Basel categorises OBS items broadly (Standardised Approach – Original Exposure Method, CCFs tables):

1. **Undrawn credit facilities**

   * Committed lines (term loans undrawn, revolving credit, CC/OD unused limits).
   * Some are **unconditionally cancellable**; others are not.

2. **Direct credit substitutes**

   * Bank guarantees **that act like direct substitutes** for a loan:

     * Guarantees of financial obligations,
     * Standby letters of credit serving as financial guarantees.
   * These are treated almost like **funded exposures**.

3. **Performance-related contingencies**

   * Performance guarantees, bid bonds, warranty bonds, etc.
   * Bank only pays if customer fails to perform some **non-financial** obligation.

4. **Trade-related contingencies**

   * Letters of credit (documentary LCs) for trade, shipping, etc.

5. **Other commitments**

   * Note issuance facilities, revolving underwriting facilities, some securitisation-related liquidity facilities.

6. **Derivatives**

   * Treated through **separate counterparty credit risk rules** (not the generic CCF table – more advanced; you can reference but no need to go deep here in this module).

Basel II/III SA gives **CCF bands** like 0%, 20%, 50%, 100% depending on type and cancelability/maturity.

---

## 6.4 CCF categories – conceptual structure

### 6.4.1 Unconditionally cancellable commitments (UCCs)

Definition:
A commitment where the bank **can cancel the facility at any time unconditionally and without prior notice**, or where it can automatically terminate on deterioration in the borrower’s creditworthiness.

These receive the **lowest CCF**, because:

* In theory, the bank could **withdraw the facility** before the borrower fully draws it in stress.
* But Basel still assigns **non-zero CCF** in newer frameworks (Basel 3.1 tends to move from 0% to something >0% in many jurisdictions).

Classic SA world:

$$
\\text{CCF}_{\\text{UCC}} \\approx 0\\% \\text{ (legacy Basel II template)}
$$

Basel 3.1 increases effective CCFs for some types (jurisdiction-dependent).

Examples:

* Many **credit card limits**,
* Some **overdraft / cash credit limits** that the bank can cancel without notice.

---

### 6.4.2 Other commitments (non-UCC)

For other OBS items that are **not unconditionally cancellable**, Basel assigns **higher CCFs**, often based on **original maturity**:

Example pattern (template-style, exact percentages vary by document/jurisdiction):

* Commitments with **original maturity ≤ 1 year** → lower CCF (e.g. 20%).
* Commitments with **original maturity > 1 year** → higher CCF (e.g. 50%).

$$
\\text{EAD} = \\text{Notional} \\times 0.20 \\quad \\text{(shorter commitments)}
$$

$$
\\text{EAD} = \\text{Notional} \\times 0.50 \\quad \\text{(longer commitments)}
$$

---

### 6.4.3 Direct credit substitutes

These are “as good as funded” because the bank basically **guarantees a financial obligation**.

Typical Basel CCF:

$$
\\text{CCF}_{\\text{direct substitute}} = 100\\%
$$

Examples:

* Financial guarantees,
* Standby LCs that guarantee repayment of a loan or debt,
* Acceptances that substitute for loans.

OBS notional is treated almost exactly as if the bank had given a normal funded loan:

$$
\\text{EAD} = \\text{Notional} \\times 1.0
$$

Then apply risk weight as if it were **a direct exposure to the underlying obligor**.

---

### 6.4.4 Performance-related contingencies

Bank promises to pay if the customer fails to perform a **contractual obligation** (non-financial).

Typical Basel template:

* CCF often around **50%**, reflecting moderate likelihood of conversion to funded exposure.

$$
\\text{EAD} = \\text{Notional} \\times 0.50
$$

Examples:

* Bid bonds,
* Performance bonds,
* Warranty guarantees.

---

### 6.4.5 Trade-related contingencies

Short-term trade instruments (e.g., documentary LCs, shipping guarantees, etc.).

Often given **lower CCF** than direct credit substitutes but non-zero, reflecting moderate risk.

Examples of template values:

* **20%** or **50%** depending on nature and maturity.

---

## 6.5 OBS & CCFs in the Indian (RBI) context

RBI’s Basel III capital regulations include a table of OBS items and **prescribed CCFs** very similar in structure to Basel II/III, with India-specific clarifications.

High-level RBI patterns:

1. **Direct credit substitutes** → **100% CCF**

   * Financial guarantees, standby LCs serving as financial guarantees, etc.

2. **Transaction-related contingencies (performance guarantees)** → **50% CCF**

   * Performance guarantees, bid bonds, etc.

3. **Short-term self-liquidating trade-related contingencies** → typically **20% CCF**

   * Documentary LCs collateralised by the underlying shipment.

4. **Commitments with original maturity up to 1 year** → **20% CCF**

5. **Commitments with original maturity over 1 year** → **50% CCF**

6. **Unconditionally cancellable commitments** (e.g. some CC/OD, certain credit card lines) → **0% CCF** under older RBI Basel II/III, though this may shift under newer Basel 3.1 implementations.

> 💡 Exact percentages and definitions (incl. derivative add-on rules) are given in RBI’s **off-balance sheet items** section. For the app, treat this as a **parameter table**:
> \`product_type, cancellable_flag, original_maturity_bucket → CCF\`.

---

## 6.6 EAD formulae – putting it together

### 6.6.1 On-balance sheet

For a given exposure ( i ):

$$
\\text{EAD}_{\\text{on}, i} = \\max\\big(0,\\ \\text{Gross exposure}_i - \\text{Specific provisions}_i - \\text{write-offs}_i\\big)
$$

For capital, some frameworks consider **netting** or **eligible collateral** at the CRM step (Module 7), but EAD formula basically starts from book value.

### 6.6.2 Off-balance sheet – plain vanilla

For a commitment or guarantee ( k ):

$$
\\text{EAD}_{\\text{off}, k} = \\text{Notional}_k \\times \\text{CCF}_k
$$

Then the **full credit risk RWA**:

$$
\\text{RWA}_k = \\text{EAD}_{\\text{off}, k} \\times \\text{RW}_k
$$

Where ( \\text{RW}_k ) is based on **counterparty / exposure class** as per SA rules (Modules 4 & 5).

### 6.6.3 Facilities with drawn + undrawn parts

Take a typical Indian term loan facility:

* Sanctioned limit: ( L )
* Amount already disbursed (on-balance): ( D )
* Undisbursed but committed: ( U = L - D )

Capital engine logic:

1. **On-balance EAD:**

$$
\\text{EAD}_{\\text{on}} = \\max\\big(0,\\ D - \\text{specific provisions}\\big)
$$

2. **Off-balance EAD (if not UCC):**

$$
\\text{EAD}_{\\text{off}} = U \\times \\text{CCF}
$$

3. **Total EAD for this facility:**

$$
\\text{EAD}_{\\text{total}} = \\text{EAD}_{\\text{on}} + \\text{EAD}_{\\text{off}}
$$

4. **RWA**:

$$
\\text{RWA} = \\text{EAD}_{\\text{total}} \\times \\text{RW}
$$

(where RW is based on the **obligor class** – corporate, retail, etc.)

---

## 6.7 How CRM interacts with OBS EAD

Credit Risk Mitigation (CRM) – **collateral and guarantees** – applies **after** EAD is computed.

Rough sequencing (SA):

1. Compute **EAD** for each component (on + off, CCF already applied).
2. Identify **eligible collateral/guarantees** attached to that exposure or part of it.
3. Adjust EAD and/or substitute **risk weight** according to CRM rules:

   * For **financial collateral** (simple approach), you may split exposure into:

     * Collateralised portion (risk-weighted using collateral issuer / 0% if cash on deposit),
     * Unsecured portion (keep original RW).
   * For **guarantees**, you may substitute the **guarantor’s risk weight** for the covered part of EAD.

Mathematically, if guarantee covers proportion ( \\alpha ) of EAD:

$$
\\text{EAD}_{\\text{guaranteed}} = \\alpha \\times \\text{EAD}
$$
$$
\\text{EAD}_{\\text{unguaranteed}} = (1 - \\alpha) \\times \\text{EAD}
$$

Then:

$$
\\text{RWA} = \\text{EAD}_{\\text{guaranteed}} \\times \\text{RW}_{\\text{guarantor}} + \\text{EAD}_{\\text{unguaranteed}} \\times \\text{RW}_{\\text{obligor}}
$$

We’ll deep dive this in **Module 7**, but it’s important to see that **OBS exposures behave exactly like funded exposures once CCF is applied** – CRM logic is identical.

---

## 6.8 Implementation view – building an OBS/CCF/EAD engine

### 6.8.1 Data fields you must capture

For each **facility / limit**:

* \`facility_id\`
* \`counterparty_id\`
* \`product_type\` (term loan, CC/OD, LC, BG, SBLC, performance guarantee, etc.)
* \`sanction_limit\` (overall limit)
* \`current_outstanding\` (funded)
* \`undrawn_amount\` (limit – outstanding, adjusted for blocking/margins)
* \`original_maturity\` (or residual if regulation uses original)
* \`is_unconditionally_cancellable\` flag (true/false)
* \`specific_provisions\`
* \`off_balance_notional\` (if separate from limit – e.g. for LCs, BGs)
* \`collateral_flag\`, \`guarantee_flag\`

This allows you to compute:

* **On-balance EAD**,
* **Off-balance EAD** via CCF,
* Clear mapping to **CCF table**.

### 6.8.2 CCF engine logic

Pseudo-logic:

\`\`\`text
for each facility:
    if on_balance:
        EAD_on = max(0, outstanding - specific_provisions)
    if off_balance:
        # Determine CCF bucket
        category = determine_obs_category(product_type, is_ucc, original_maturity)
        CCF = CCF_table[category]
        EAD_off = notional * CCF

    EAD_total = EAD_on + EAD_off
\`\`\`

Then pass \`EAD_total\` + exposure class + rating/LTV/etc. into the **SA RWA engine** from Modules 4 & 5.

### 6.8.3 Typical pitfalls (banks & implementations)

* Misclassifying **unconditionally cancellable** vs **non-cancellable** commitments → wrong CCF.
* Ignoring undrawn portions of term loans (treating only disbursed part as exposure).
* Using **gross limit** as EAD instead of applying correct CCF.
* Failing to update **original maturity** field → mis-bucketing commitments.

---

## 6.9 Bulb section – interview & practical hints

💡 **Bulb 1 – One-line EAD explanation**

> “In SA, EAD is **book exposure after provisions** for on-balance items, and **notional × CCF** for off-balance items; once you have EAD, you treat OBS exposures just like funded loans for RWA.”

That one line alone shows solid clarity.

---

💡 **Bulb 2 – Why CCFs exist**

If someone asks “Why not just use full notional?”:

> “Because only a *fraction* of undrawn commitments is expected to be drawn down **at the time of default**, Basel uses empirically calibrated CCFs to approximate that fraction, which differ by product type and cancelability.”

You’re explaining **risk-based reasoning**, not just quoting rules.

---

💡 **Bulb 3 – India capital optimisation angle**

In Indian banks, a lot of capital optimisation happens by:

* Structuring some facilities as **unconditionally cancellable**, where appropriate,
* Ensuring correct classification of **trade-related vs direct credit substitutes** (20–50% vs 100% CCF),
* Monitoring **undrawn exposures** on wholesale lines.

Being able to say this shows you get **practical RWA management**, not just formulas.

---

💡 **Bulb 4 – Facilities with mixed utilisation**

For any limit-based facility (say a ₹100 crore working capital line to a corporate):

* **Don’t forget**:

  * Drawn portion → on-balance EAD,
  * Undrawn portion → off-balance EAD with CCF.

Interview line:

> “For a ₹100 crore limit with ₹60 crore drawn and ₹40 crore undrawn, we compute EAD as:
> EAD = max(0, 60 – provisions) + 40 × CCF, then apply the corporate/retail risk weight to that total.”

---

💡 **Bulb 5 – CRM + OBS is just splitting the EAD**

Good mental model:

* First, convert *everything* (on + off) into a clean **EAD**.
* Then, apply **CRM** to that EAD: split into guaranteed/collateralised vs unsecured chunks and assign risk weights accordingly.

This separation (EAD step vs CRM step) is exactly how proper engines and regulatory teams think.
`
            }
          ]
        }
      ]
    },
    {
      id: "7",
      slug: "crm-collateral",
      title: "Module 7 – Credit Risk Mitigation (CRM): Collateral & Guarantees",
      goal: "Understand how collateral reduces capital requirements and the rules for using it.",
      sections: [
        {
          id: "7-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `# Module 7 – Credit Risk Mitigation (CRM): Collateral & Guarantees

## 1. Big picture: Why CRM exists

**Goal of CRM:**
Reduce **RWA** (and therefore required capital) *for the same underlying credit risk*, by recognising:

* Security you hold (collateral)
* Third-party support (guarantees / credit derivatives)
* Netting (loans vs deposits with same counterparty)

Basel and RBI **never** let CRM reduce capital below what is justified by good-quality, *legally enforceable* protection – so legal and operational conditions are as important as the formulas.

**Key principles:**

* CRM can **reduce RWA**, it **does not** change EAD or PD of the borrower.
* Legal enforceability across all relevant jurisdictions is mandatory.
* CRM works **portion-wise**: if only part of an exposure is secured/guaranteed, you split into “protected” and “unprotected” portions and risk-weight separately.

---

## 2. Taxonomy of CRM techniques

Under Basel SA (and RBI implementation), main CRM tools are:

1. **Financial collateral**

   * Cash, gold, certain debt/equity securities, eligible mutual funds, etc.
   * Recognised under either *simple* or *comprehensive* approach (India uses **comprehensive** for banking-book credit exposures).

2. **On-balance sheet netting**

   * Loans/advances vs deposits with same counterparty under a legally enforceable netting agreement.

3. **Guarantees**

   * Direct, explicit, irrevocable, unconditional guarantees that meet eligibility criteria.
   * Substitution approach: you swap obligor’s risk weight with guarantor’s for the protected portion.

4. **Credit derivatives** (conceptual here)

   * Credit default swaps and similar – treated like guarantees if they meet Basel operational requirements.

In practice, banks often combine them – e.g. loan secured by collateral and partially guaranteed; regulation then forces you to **split the exposure into multiple slices**, each with its own CRM.

---

## 3. Legal & operational pre-conditions (for *any* CRM)

Before you even touch formulas, you must be able to say “yes” to:

1. **Legal certainty**

   * Documentation is binding and **legally enforceable** in all relevant jurisdictions.
   * Bank has done and periodically refreshed **independent legal opinions** to confirm this.

2. **Right to liquidate / call on protection**

   * For collateral: right to **seize and liquidate** promptly on defined credit events (default, insolvency etc.).
   * For guarantees/credit derivatives: unconditional obligation to pay upon qualifying default/non-payment.

3. **Clear linkage**

   * The CRM must be explicitly linked to **specific exposure(s)** or a clearly defined pool (e.g. pool guarantee).

If these conditions fail, CRM is **ignored** for regulatory capital.

---

## 4. Financial collateral – global Basel view

### 4.1 Simple vs comprehensive approaches

Basel SA allows **two** methods for collateralised transactions:

1. **Simple approach**

   * Replace the **risk weight of the counterparty** with the **risk weight of the collateral** for the collateralised portion (subject to 20% floor, with some exceptions like cash/sovereign repos).
   * No maturity mismatches allowed (collateral must last at least the life of the exposure).
   * Easier but less risk-sensitive.

2. **Comprehensive approach**

   * Keep counterparty risk weight, but **reduce exposure amount** by a *volatility-adjusted* collateral value using haircuts.
   * More sensitive to:

     * Market price volatility of collateral
     * Holding period
     * Currency mismatch
   * Requires a bit more data and processing; this is what **RBI requires for Indian banks** for collateralised credit transactions.

---

## 5. Financial collateral – Indian implementation (RBI view)

### 5.1 India uses the Comprehensive Approach

RBI Basel III Capital Regulations explicitly say:

> “Banks in India shall adopt the Comprehensive Approach” and use **standard supervisory haircuts** (no internal estimates).

So for your portfolio / app design: **assume comprehensive approach for banking-book credit exposures**.

---

### 5.2 Eligible financial collateral (RBI list – key items)

Under the comprehensive approach, RBI recognises (high-level):

1. **Cash and own bank deposits**

   * Cash on deposit with the lending bank (including FDRs/CDs issued by the bank itself).

2. **Gold**

   * Bullion and jewellery, with jewellery valued after notional conversion to **99.99% purity**.

3. **Central & State Government securities**

4. **National Savings Certificates (NSC) and Kisan Vikas Patra (KVP)**

   * Provided no lock-in and can be encashed within the holding period.

5. **Life insurance policies**

   * With declared surrender value from insurers regulated by IRDAI.

6. **Rated debt securities** (non-sovereign)

   * Rated at least BBB- (or equivalent short-term rating) and with sufficient market liquidity.

7. **Certain unrated bank debt securities**

   * If senior, exchange-listed, and all other same-seniority issues are at least BBB- / A3 etc., and liquidity is adequate.

8. **Units of mutual funds**

   * Daily NAV publicly available.
   * MF invests only in instruments from the eligible list.

**Re-securitisations** are explicitly **not** eligible financial collateral.

---

### 5.3 Haircuts – intuition and formula

**Haircut** = percentage adjustment applied to account for **market volatility** and **FX risk**.

RBI language: haircuts produce **volatility-adjusted exposure** and **volatility-adjusted collateral**; exposure adjusted upward, collateral adjusted downward (unless cash/zero haircut).

**Core formula (comprehensive approach – RBI):**

> **E*** = max { 0, E × (1 + Hₑ) − C × (1 − H꜀ − Hfx) }

Where:

* **E*** = exposure value after CRM
* **E** = current exposure value
* **Hₑ** = haircut on exposure
* **C** = current collateral value
* **H꜀** = haircut on collateral
* **Hfx** = haircut for currency mismatch

**Risk-weighted assets after CRM:**

$$
\\text{RWA} = E^* \\times \\text{RW}_{\\text{counterparty}}
$$

Haircuts **increase** E and **reduce** C to model market moves between last margining and liquidation.

#### 5.3.1 Supervisory haircuts in India

RBI gives detailed tables of standard haircuts (Table 14 & 15), for example:

* Government securities:

  * ≤ 1 year: 0.5%
  * > 1–5 years: 2%
  * > 5 years: 4%
* High-rated corporate/PSU debt:

  * ≤ 1 year: 1%
  * > 1–5 years: 4%
  * > 5 years: 8%
* Medium-rated debt: higher haircuts.
* Gold: 15%.
* **Cash in same currency**: 0% haircut.
* **Currency mismatch haircut**: 8% for FX (standard supervisory value).

Also: **zero haircut** is allowed for some items like NSC, KVP, surrender value of eligible insurance policies, banks’ own deposits.

In your engine logic: pick **Hₑ, H꜀, Hfx** from these tables based on:

* Instrument type
* Issuer / rating
* Residual maturity
* Currency pairing

(If you later want: we can codify this into Python/SQL logic for your app.)

---

### 5.4 Special case – repo-style transactions

For **repos / reverse repos / securities lending**, RBI follows Basel:

* **Capital on both sides** of transaction: both repo and reverse repo exposures are risk-weighted.
* Some high-quality, short-term, same-currency repos may get very low risk weight (e.g. 0% or 10%) if strict conditions are met (core market participants, daily MTM and remargining, etc.)

---

## 6. On-balance sheet netting (loans vs deposits)

**Concept:**
If you have **loans** to a counterparty and **deposits** from the *same* counterparty, and a robust netting arrangement, you can treat **deposits as collateral** and compute capital on the **net** position.

RBI conditions (summarised):

1. Legal enforceability of the netting agreement in all relevant jurisdictions (also under insolvency).
2. Bank can **identify at all times** which balances are covered by the netting arrangement.
3. Bank monitors & controls exposures on a **net basis**.
4. Bank monitors roll-off risk.

For such cases:

* Treat **loans/advances = exposure E**
* Treat **deposits = collateral C**
* Use the **comprehensive approach** formula with haircuts (usually **0 haircuts** except FX).

So in your engine:

1. Identify eligible loan–deposit pairs with netting agreements.
2. Compute E* using the same formula, with **Hₑ = H꜀ = 0** if same currency.
3. Risk weight E* by counterparty RW.

---

## 7. Guarantees – deep dive

### 7.1 Basic idea: substitution approach

When a guarantee qualifies, you treat the **protected part** of the exposure as if it were to the **guarantor**, not the original borrower.

**Formula view:**

Let:

* **E** = total exposure (post CCF if OBS)
* **G_adj** = guaranteed amount after maturity/FX adjustments (explained below)
* **RW_o** = risk weight of original obligor
* **RW_g** = risk weight of guarantor

Then conceptually:

* Protected portion = min(E, G_adj) → gets **RW_g**
* Unprotected portion = max(0, E − G_adj) → gets **RW_o**

$$
\\text{RWA} = \\min(E, G_\\text{adj}) \\times RW_g + \\max(0, E - G_\\text{adj}) \\times RW_o
$$

This is exactly the **substitution approach** described in Basel CRE22 and RBI guidelines.

Only guarantees by entities with **lower risk weight than the borrower** can reduce capital (otherwise RWA won’t go down).

---

### 7.2 Eligibility conditions (RBI wording, simplified)

RBI operational requirements for guarantees used as CRM boil down to:

1. **Direct claim** on guarantor

   * Guarantee must create a direct, legally enforceable claim on the protection provider.

2. **Explicit reference**

   * Must clearly refer to **specific exposures** or a well-defined pool.
   * Extent of coverage must be “clearly defined and incontrovertible”.

3. **Irrevocable**

   * No unilateral right for guarantor to cancel.
   * No contractual terms that increase cost or reduce coverage purely because the obligor’s credit quality deteriorates.

4. **Unconditional**

   * No external conditions that could block payment (e.g. “only if underlying borrower first pays X”, etc.)
   * Bank must be able to **pursue guarantor in a timely manner** once default happens, without first exhausting legal remedies against the borrower.

5. **Coverage**

   * Ideally covers **principal + interest** and all material payments under the loan agreement.
   * If only principal is covered, unpaid interest is treated as **unsecured**.

6. **Non-performing exposures**

   * RBI: once the underlying exposure becomes **non-performing**, guarantee ceases to be recognised as CRM; exposure is risk-weighted net of provisions and realisable value of eligible collaterals/mitigants.

**Range of eligible guarantors** (high-level, from RBI/Basel):

* Sovereigns, central banks
* Certain sovereign entities (BIS, IMF, etc.)
* PSEs treated like sovereigns
* Banks and other supervised financial institutions
* Highly rated corporates meeting criteria
* Export credit agencies and similar official agencies

(Exact lists are in RBI circular; your notes can link to that from your app.)

---

### 7.3 Partial guarantees & “proportional cover”

If guarantee covers **only part** of E:

* **Pro rata split** assumption is standard: assume same seniority for covered and uncovered portions.
* Apply substitution approach to the **covered amount only**; rest retains borrower RW.

If structure is more complex (first-loss, second-loss, tranched guarantee) then treatment may fall under securitisation / specific CRM rules – beyond our basic SA scope.

---

## 8. Credit derivatives (high-level, SA view)

Treat these like **“synthetic guarantees”** if they meet conditions. Basel and RBI require:

* Reference entity and obligation *clearly specified*.
* Clearly defined credit events (bankruptcy, failure to pay, restructuring – depending on product and local rules).
* Settlement mechanics (cash / physical) and post-default valuation methodology clearly set.

Then:

* Use same **substitution approach** as for guarantees.
* If there is **currency mismatch**, apply **Hfx** haircut (8% in India) to reduce effective protection.
* If **maturity mismatch**, adjust protection using the **Pₐ formula** (next section).

We are NOT going deep into exotic structures here (first-to-default baskets etc.); those are treated under specialised CRM/securitisation rules.

---

## 9. Maturity mismatches – key math

**Maturity mismatch** = residual maturity of CRM (guarantee / credit derivative / some collateral structures) is **shorter** than residual maturity of the exposure.

Basel rules (also adopted broadly in national implementations):

* CRM with maturity mismatches is recognised **only if**:

  * Original maturity of CRM ≥ **1 year**, and
  * Residual maturity of CRM > **3 months**.

If recognised, the **effective protection value is scaled down** using:

$$
P_a = P \\times \\frac{t - 0.25}{T - 0.25}
$$

Where:

* **Pₐ** = protection value adjusted for maturity mismatch
* **P** = protection amount after any haircuts
* **t** = min(T, residual maturity of CRM), in years
* **T** = min(5 years, residual maturity of exposure), in years

Intuition: if hedge is materially shorter than exposure, only some proportion counts.

In your engine, you would:

1. Compute T and t in years.
2. If eligibility conditions fail (original maturity <1 year or residual ≤3 months), set **Pₐ = 0** (no CRM).
3. Otherwise compute **Pₐ**, then use that instead of P in the substitution / E* formulas.

---

## 10. Currency mismatches – haircuts

If collateral / guarantee / credit derivative is **not in the same currency** as the exposure:

* Basel & RBI require a **currency mismatch haircut Hfx**.
* For India, standard **Hfx = 8%** (10-business-day holding period, daily MTM).

Implementation:

* For collateral: already embedded in **E*** formula: \`C × (1 − H꜀ − Hfx)\`.
* For guarantees/credit derivatives: effective protection is:

$$
G_\\text{FX-adj} = G \\times (1 - H_{fx})
$$

Then you may also apply maturity-mismatch adjustment (Pₐ formula) if applicable.

---

## 11. Combining CRM with OBS exposures (link to Module 6)

Pipeline when you have **off-balance sheet exposures + CRM**:

1. **Determine EAD** using CCFs (Module 6):

   * EAD = Notional × CCF.

2. **Apply CRM on EAD**, not on notional:

   * For collateral: treat E = EAD in E* formula.
   * For guarantees / credit derivatives: treat E = EAD in substitution logic.

So for an OBS exposure with guarantee:

* Compute: **E = EAD = Notional × CCF**
* Compute **G_adj** (FX + maturity adjustments).
* Split into protected/unprotected portions as earlier and risk-weight separately.

This is how you keep **consistency** in your engine (first CCF, then CRM, then RW).

---

## 12. Engine / implementation view – how banks actually calculate

For a **single exposure** (on- or off-balance sheet), a realistic SA + CRM pipeline looks like:

1. **Read core attributes**

   * Counterparty, product, exposure class (sovereign, bank, corporate, retail, etc.).
   * On-balance vs off-balance; notional; drawn/undrawn.
   * Currency; maturity (original + residual).

2. **EAD computation**

   * On-balance sheet: EAD ≈ book value (with any specific rules – e.g. some repo exposures).
   * Off-balance sheet: apply **CCF** based on type of commitment (Module 6).

3. **Identify CRM attached**

   * Collateral position(s) (type, value, FX, maturity, mapping to exposure).
   * Guarantees / credit derivatives (notional, guarantor, currencies, maturities).
   * Netting agreements (loans vs deposits, repo netting sets, etc.).

4. **Split into slices** (if multiple CRM)

   * Example: portion covered by collateral, portion by guarantee, residual unprotected.
   * Basel explicitly says exposures covered by multiple CRM types must be **split** and treated separately.

5. **For each slice:**

   * **Collateral slice:**

     * Pick **Hₑ, H꜀, Hfx** from supervisory tables.
     * Compute **E*** = max{0, E × (1+Hₑ) − C × (1 − H꜀ − Hfx)}.
     * Risk weight E* by **RW of counterparty**.

   * **Guaranteed/CDS slice:**

     * Adjust protection for FX (Hfx) and maturity (Pₐ formula).
     * Use **substitution approach** to allocate EAD between guarantor RW and borrower RW.

   * **Netted slice (loans vs deposits):**

     * Treat deposit as collateral with zero haircut (if same currency and conditions met), apply E* formula.

6. **Aggregate**

   * Sum RWA across all slices and exposures.
   * Feed into total **credit risk RWA**, then into capital ratios.

---

## 13. “Bulb” / practical & exam-style insights 💡

These are the kind of sharp lines that impress interviewers and are useful for your portfolio app documentation.

1. **“Sequence matters: CCF → CRM → RW”**

   * Always compute **EAD first**, then apply CRM, and **then** risk-weight.

2. **Collateral vs guarantees – conceptual difference**

   * Collateral reduces **loss severity** → treated by adjusting **exposure (E*)**.
   * Guarantees reduce **default risk** → treated by changing **risk weight (substitution)**.

3. **Indian peculiarity – only comprehensive approach + standard haircuts**

   * For banking-book SA credit risk, Indian banks do **not** choose between simple/comprehensive nor use internal haircuts – they must use the **comprehensive approach and RBI’s standard tables**.

4. **Cash collateral in same currency is king**

   * Haircut = 0; in many cases capital can be almost eliminated for that portion.
   * However, remember that the exposure is still to the **counterparty**, not to cash itself – you still use counterparty RW on E*.

5. **Guarantor must be “better” than borrower**

   * If guarantor risk weight ≥ borrower’s risk weight, substitution won’t reduce RWA – capital relief may be zero.

6. **Non-performing exposures and CRM**

   * RBI’s rule that guarantees cease to be CRM once exposure is NPA is very interview-relevant – shows you understand conservative treatment.

7. **Engine design tip**

   * Model CRM not as a separate flag but as a **separate object**:

     * Type (collateral / guarantee / CDS / netting)
     * Coverage (% of exposure, or absolute amount)
     * Currency, maturity, provider type, eligibility flags
   * This makes it easier to implement Basel logic and also do “what-if” scenario analysis later (e.g. turn off a guarantee, change haircut tables, etc.).
`
            }
          ]
        }
      ]
    },
    {
      id: "8",
      slug: "securitisation-market-ops",
      title: "Module 8 – Securitisation & Other Pillar 1 Risks",
      goal: "Conceptual understanding of securitisation, market, and operational risk capital.",
      sections: [
        {
          id: "8-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# 8.1 What securitisation actually is (in capital language)

**Securitisation** =
Taking a pool of exposures (typically loans), putting them into an SPV, and issuing **tranches of securities** backed by the pool.

Core ingredients:

1. **Originator** – bank that owns the original loans (mortgages, auto loans, etc.).
2. **SPV / trust** – special-purpose vehicle that buys the loans from the originator.
3. **Underlying pool** – the loans or receivables.
4. **Tranches** issued by SPV:

   * **Senior** – gets paid first, lowest credit risk.
   * **Mezzanine** – absorbs losses after the equity tranche.
   * **Equity / first-loss** – absorbs initial losses; highest risk.
5. **Loss waterfall** – cashflows and losses flow **bottom-up**:

   * Losses hit **equity** first → then mezzanine → then senior.
   * This is how you “transform” a pool of similar loans into tranches with different risk profiles.

From a **bank capital** view, a securitisation exposure is **any claim the bank has on this structure** (holding a tranche, providing liquidity, credit enhancement, etc.), not the underlying loans themselves.

---

# 8.2 Why regulators treat securitisation harshly

Post-2008, Basel found three big issues:

1. **Model risk & complexity** – structured products were mis-rated and mis-modelled.
2. **Correlation & tail risk** – when the cycle turned, correlations spiked and senior tranches were riskier than expected.
3. **Opacity & incentives** – originators had incentives to “arbitrage” capital.

So Basel III’s securitisation framework is built on:

* **Stricter operational criteria** (true sale, risk retention, etc.).
* A hierarchy of **capital calculation approaches**, and
* A powerful **fallback**: **1250% risk weight** if you can’t (or won’t) meet requirements.

---

# 8.3 Basel securitisation capital – high-level mechanics

In Basel’s current framework (CRE40+ and “revisions to the securitisation framework”), banks apply a **hierarchy of approaches** to securitisation exposures:

* Approaches (simplified names):

  * **SEC-IRBA** – uses IRB parameters of underlying pool.
  * **SEC-ERBA** – uses external ratings and prescribed risk-weight tables.
  * **SEC-SA** – uses SA parameters (KSA) when bank uses Standardised for the underlying.

If a bank **cannot** apply any of these approaches or fails to meet the operational requirements:

> It **must** assign a **1250% risk weight** to that securitisation exposure.

### 8.3.1 The 1250% risk weight – maths and intuition

Suppose a bank holds a securitisation exposure of amount **E**, and the fallback rule applies:

$$
\\text{RWA} = E \\times 1250\\%
= 12.5 \\times E
$$

Capital requirement (Basel Pillar 1):

$$
K = 8\\% \\times \\text{RWA}
= 8\\% \\times 12.5 E
= 1.0 \\times E
$$

So the **capital charge = 100% of exposure** – economically equivalent to **deducting the exposure from capital**.

That’s why you often hear “1250% is like a deduction”. Basel literally says that where approaches cannot be applied, exposures must be risk-weighted at 1250%, instead of being directly deducted as under older rules.

**Intuition:**
Regulators are saying: *“If you can’t properly model or meet conditions for this securitisation, you don’t get any capital relief from it.”*

---

# 8.4 Simple view of Basel securitisation capital

Staying conceptual (no deep formulas):

1. **Identify securitisation exposure**

   * Tranche held (senior/mezz/equity),
   * Liquidity facility or credit enhancement to the SPV,
   * Warehouse lines, etc.

2. **Check operational requirements**

   * True sale / transfer of credit risk,
   * Risk retention (“skin in the game”),
   * No severe misalignment of incentives.

3. **Choose appropriate approach (per Basel hierarchy)**

   * Use IRB-based, External Ratings-based, or Standardised-based securitisation formulas.

4. **Calculate risk weight**

   * Lower risk weights for senior, well-protected tranches of high-quality pools,
   * Higher risk weights for lower tranches, thin tranches, or higher-risk pools,
   * **Cap/floor effects** ensure **K_securitisation ≥ capital on underlying** in many structures.

5. **Apply 1250% RW fallback**

   * If bank can’t apply any permitted approach or fails operational conditions → **1250% RW**.

For your web app / notes, you don’t need to code the whole SEC-IRBA/ERBA formulas; the key concept is:

> *Securitisation capital = approach-specific RW × EAD, with a harsh 1250% RW fallback to prevent under-capitalisation.*

---

# 8.5 India: securitisation capital (concept only)

RBI’s **Basel III Capital Regulations** adopt Basel’s securitisation framework (for Indian banks), with:

* Definitions of securitisation exposures (tranches, credit enhancement, liquidity facilities),
* Risk weight tables for securitisation exposures by rating/position,
* Disclosure requirements (Pillar 3) for securitisation.

Indian guidance echoes Basel: some securitisation exposures are risk-weighted under the framework, others (like certain credit-enhancing interest-only strips) are **deducted from capital** or treated with **1250% RW**.

For your learning, two key lines to remember:

* **“Securitisation exposures either sit in special RW bands or at 1250% if conditions aren’t met.”**
* **“1250% RW ≈ full deduction from capital.”**

---

# 8.6 Market risk capital – global Basel view

## 8.6.1 Trading book vs banking book

Basel draws a boundary between:

* **Trading book**:

  * Positions held with **intent to trade**,
  * Marked-to-market daily,
  * Includes:

    * Bonds and interest-rate instruments,
    * Equities,
    * FX positions,
    * Commodities,
    * Trading-book derivatives.

* **Banking book**:

  * Loans, deposits, held-to-collect investments, etc.,
  * Interest rate risk in banking book (IRRBB) handled separately (Pillar 2 / dedicated guidelines).

Market risk capital = **Pillar 1 capital for trading book positions + FX / commodities positions** etc.

## 8.6.2 Old Basel II / “Basel II.5” view (high-level)

Earlier framework:

* **Standardised Approach**:

  * Separate capital charges for:

    * Specific risk + general market risk in interest-rate instruments,
    * Equity risk,
    * FX risk,
    * Commodity risk.
  * Based on **position amounts × regulatory risk weights / duration bands**.

* **Internal Models Approach (IMA)**:

  * Capital based on **Value-at-Risk (VaR)** plus add-ons (stressed VaR, incremental risk charge, etc.), with supervisor approval.

## 8.6.3 FRTB – Minimum Capital Requirements for Market Risk (Basel III)

Basel’s **Fundamental Review of the Trading Book (FRTB)** replaces the old market risk rules. Key features:

* **Clearer trading/banking book boundary** (less scope for arbitrage).

* Two main approaches:

  1. **Standardised Approach (SA-MR)** – risk-sensitive, uses sensitivities to risk factors and prescribed risk weights.
  2. **Internal Models Approach (IMA)** – based on **Expected Shortfall**, with:

     * Backtesting,
     * “Non-modellable risk factor” (NMRF) capital add-ons.

* Calibration intent:

  * Make SA-MR a **credible fallback** – if models fail, SA-MR gives similar or slightly more conservative capital.
  * Reduce variability in RWAs across banks for similar trading books.

For your narrative:

> “Under Basel III FRTB, market risk capital is computed either via a new Standardised Approach using risk factor sensitivities, or via an Expected Shortfall-based Internal Models Approach; both sit on top of a much stricter trading/banking book boundary.”

## 8.6.4 India – market risk capital context

Historically, RBI has:

* Required Indian banks to use **Standardised Duration Approach** for interest rate risk and standardised methods for equity, FX, and commodity risk.
* Allowed **Tier III capital** (now phased out globally) previously to support market risk capital.

Under Basel III implementation:

* RBI has issued **draft guidelines** to align market risk capital with **Basel III FRTB** for scheduled commercial banks, with implementation targeted (in various drafts) from **2024 onwards**, and still under finalisation.

For your app, it’s enough to treat India’s current practical state as:

* **Trading book market risk** → standardised, duration/position-based formulas (today),
* Migrating towards FRTB-style approaches (tomorrow).

---

# 8.7 Operational risk capital – global Basel view

Operational risk =

> “Risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.” (Basel definition)

## 8.7.1 Basel II approaches (legacy)

Under Basel II, there were three methods:

1. **Basic Indicator Approach (BIA)**

   * Single formula:

     * **Capital charge** = **α × Gross Income**,
       where α = 15%, and Gross Income averaged over 3 years.
   * Very simple, low risk-sensitivity.

2. **Standardised Approach (TSA/ASA)**

   * Bank’s activities split into **8 business lines** (corporate finance, trading & sales, retail banking, etc.).
   * For each business line:

     * Capital = βᵢ × Gross Incomeᵢ.
   * Total capital = 3-year average of sum across business lines.
   * βᵢ differ by business line (e.g. 18% for trading & sales, 12% for retail, etc.).

3. **Advanced Measurement Approaches (AMA)**

   * Banks use internal models (loss distributions, scenario analysis) subject to supervisory approval.

## 8.7.2 Basel III reforms – Standardised Measurement Approach (SMA)

Basel III replaced BIA/TSA/AMA with **one single approach**: the **Standardised Measurement Approach (SMA)**.

Key SMA concepts:

1. **Business Indicator (BI)** – a financial statement-based proxy for bank’s size & activity:

   * Combination of:

     * Interest, leases & dividend component,
     * Services component (fee/commission),
     * Financial component (trading, fair value changes),
   * Averaged over 3 years.

2. **Business Indicator Component (BIC)** –

   * Certain piecewise function of BI (like tax slabs), with marginal coefficients increasing in BI buckets.

3. **Loss Component (LC)** –

   * Based on bank’s internal **loss data** over 10 years. Loss history influences capital via **Internal Loss Multiplier (ILM)**.

4. **Final operational risk capital**:

   Conceptually:

   $$
   K_{\\text{oprisk}} = \\text{BIC} \\times \\text{ILM}
   $$

   where ILM adjusts BIC up or down depending on **actual operational loss experience** (ILM ≥ 1 for worse-than-average loss history).

The result is:

* More sensitive to bank size and complexity (via BI),
* Still standardised (no more AMA),
* Penalises banks that have poor operational risk track records.

## 8.7.3 India – operational risk approach

Historically, RBI required Indian banks to at least adopt **Basic Indicator Approach (BIA)**, with scope for migration to Standardised Approach with approval.

As Basel III SMA becomes the global standard, RBI is working on aligning Indian regulations (e.g. recent KPMG/RBI discussions on Basel III standardised approaches including operational risk).

For your prep:

* Know **BIA** (α × Gross Income) – still relevant historically and possibly in local rules.
* Understand **SMA** conceptually – BI + loss data → BIC × ILM.

---

# 8.8 Putting it all together – Total RWA and capital requirement

At the end of Pillar 1, the bank computes:

1. **Credit risk RWA** (including securitisation positions):

   * **Standardised credit risk** (Modules 4–6, plus Module 5 for India),
   * **Securitisation exposures** (with possible 1250% RW fallback).

2. **Market risk RWA**

   * Trading book, FX, commodities under standardised or FRTB rules.

3. **Operational risk RWA**

   * Legacy BIA/TSA/AMA or new SMA.

Optionally (Basel III):

4. **CVA risk RWA** (credit valuation adjustment),
5. **Counterparty credit risk RWA** (for derivatives).

Total RWA:

$$
\\text{RWA}_{\\text{total}} =
\\text{RWA}_{\\text{credit}} +
\\text{RWA}_{\\text{market}} +
\\text{RWA}_{\\text{operational}}
\\ (+,\\text{CVA} + \\text{other if applicable})
$$

Minimum capital requirement (Basel template):

$$
K_{\\text{Pillar 1}} = 8\\% \\times \\text{RWA}_{\\text{total}}
$$

Then you overlay **Basel III buffers** (CCB, CCyB, systemic buffers) and **jurisdiction overlays** (e.g. India’s 9% minimum plus buffers) to get final ratio targets.

Capital ratios (from Module 3):

$$
\\text{CET1 Ratio} = \\frac{\\text{CET1}}{\\text{RWA}_{\\text{total}}},
\\quad
\\text{Tier 1 Ratio} = \\frac{\\text{Tier 1}}{\\text{RWA}_{\\text{total}}},
\\quad
\\text{Total Capital Ratio} = \\frac{\\text{Total Capital}}{\\text{RWA}_{\\text{total}}}
$$

---

# 8.9 Bulb section – “interview-ready” insights 💡

💡 **Bulb 1 – Securitisation capital in one line**

> “Basel treats securitisation exposures via dedicated formulas, but if you can’t meet criteria or apply a method, you must hold capital as if the whole exposure were deducted – that’s the 1250% risk weight.”

---

💡 **Bulb 2 – Trading vs banking book soundbite**

> “Trading book is mark-to-market, held for short-term resale or hedging; banking book is mainly hold-to-collect. Market risk capital (FRTB) sits on the trading book and FX/commodity positions, while IRRBB goes mostly into Pillar 2.”

---

💡 **Bulb 3 – FRTB’s big picture**

> “FRTB replaces VaR with Expected Shortfall, tightens the trading/banking boundary, and makes the standardised approach risk-sensitive enough to be a credible fallback if internal models fail.”

---

💡 **Bulb 4 – Old vs new operational risk**
You can say:

* “Basel II used **BIA/TSA/AMA**, mostly Gross Income × factor.”
* “Basel III’s **SMA** uses a Business Indicator plus internal loss history to get a capital figure (BIC × ILM).”

This shows you understand the evolution.

---

💡 **Bulb 5 – How to tie all Pillar 1 risks together**

> “At the end of the day, every risk type is converted to RWA – credit (including securitisation), market, and operational – and total capital requirement is 8% of total RWA. Jurisdictions like India then overlay higher minima and buffers on top.”

That’s exactly the “helicopter view” an interviewer for a capital adequacy / regulatory reporting role looks for.
`
            }
          ]
        }
      ]
    },
    {
      id: "9",
      slug: "rwa-engine-flow",
      title: "Module 9 – Data & Calculation Flow for a RWA Engine",
      goal: "Understand how to translate regulatory rules into a structured calculation flow.",
      sections: [
        {
          id: "9-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# 9.1 What this module is really about

So far you’ve learned **rules** (Basel / RBI) and **math** (capital, RWA, CCFs, haircuts).

Module 9 = how a real bank **turns all that into a working engine**:

* What data you need
* How it flows
* In what order you apply rules
* Where typical **controls** and **pitfalls** are

Perfect for your **web app + portfolio**: you can literally say “My app implements a simplified RWA engine, following the same flow banks use for regulatory reporting.”

---

## 9.2 Core data model – what the engine must “know”

At minimum, an SA-based RWA engine for an Indian bank needs these **logical entities**:

### 9.2.1 Counterparty / customer

Key fields (conceptual):

* \`counterparty_id\`
* \`name\`
* \`counterparty_type\`

  * Sovereign / central bank
  * PSE / local authority
  * Bank / PD / FI
  * Corporate / SME / NBFC
  * Retail individual / small business
* \`country_of_domicile\`
* \`group_id\` (for group exposure / concentration)
* \`NPA_status\` at counterparty level (optional, usually done at facility level)

Used for:

* Exposure class decision (sovereign vs bank vs corporate vs retail).
* Country risk, large exposure limits, etc.

---

### 9.2.2 Facility / exposure / limit

The **heart** of RWA:

* \`facility_id\`
* \`counterparty_id\`
* \`product_type\`

  * Term loan, WC limit, CC/OD, BG, LC, SBLC, derivatives, investment, etc.
* \`on_balance_flag\` (funded vs purely OBS)
* \`sanction_limit\` (facility-level limit)
* \`current_outstanding\` (funded)
* \`undrawn_amount\`
* \`off_balance_notional\` (for pure OBS like standalone guarantees)
* \`original_maturity\` & \`residual_maturity\`
* \`interest_rate_type\` (fixed/floating) – useful for IRRBB / ALM, but not core for SA credit RWA
* \`purpose_code\` / \`loan_purpose\` (helps classify CRE, CRE-RH, housing, etc.)
* \`NPA_flag\` and \`NPA_category\` (standard / substandard / doubtful / loss)
* \`specific_provisions\` (loan loss provisions)
* \`portfolio_code\` (corporate / SME / retail / agri, etc.)

Used for:

* EAD (exposure amount + CCFs),
* Exposure class (e.g., CRE vs Residential mortgage vs Retail),
* NPA capital treatment.

---

### 9.2.3 Collateral & guarantees (CRM)

**Collateral table** (per collateral item):

* \`collateral_id\`
* \`linked_facility_id\`
* \`collateral_type\`

  * Cash, gold, GoI security, corporate bond, equity, MF units, property, etc.
* \`eligibility_flag\` (Basel/RBI eligible or not)
* \`market_value\`
* \`valuation_date\`
* \`haircut_category\` (maps to supervisory haircut table)
* \`currency\`
* \`maturity\` (if relevant – e.g., term deposits)
* \`seniority_flag\` (is collateral senior to exposure in insolvency?)

**Guarantee / credit protection table**:

* \`guarantee_id\`
* \`linked_facility_id\`
* \`guarantor_id\` (must be a counterparty)
* \`guarantee_amount\`
* \`coverage_percentage\`
* \`currency\`
* \`original_maturity\`, \`residual_maturity\`
* \`guarantee_type\` (corporate, sovereign, bank, ECAs, etc.)
* \`meets_Basel_RBI_eligibility_flag\` (irrevocable, unconditional, etc.)
* \`covers_principal_interest_flag\`

Used for:

* CRM (Module 7): E* formula, substitution approach, FX + maturity mismatch adjustments.

---

### 9.2.4 Ratings & mapping

**Rating table**:

* \`rating_id\`
* \`counterparty_id\` or \`issue_id\`
* \`ECAI_name\` (CRISIL, ICRA, CARE, India Ratings, etc.)
* \`rating_symbol\` (AA, BBB-, etc.)
* \`rating_type\` (long-term / short-term, issue / issuer)
* \`rating_scale\`
* \`effective_date\`, \`expiry_date\`

Plus **reference tables**:

* \`ECAI_rating_to_CQS\` (rating → Credit Quality Step)
* \`CQS_to_RW_by_asset_class\` (CQS → RW for sovereign, banks, corporates, etc.; per RBI tables)

Used for:

* Risk-weight selection under SA (Modules 4 & 5).

---

### 9.2.5 Regulatory parameter tables

Your engine must externalise **all Basel / RBI parameters** into tables / config, not hard-code them:

* **Risk weight tables**:

  * For each asset class (sovereign, bank, corporate, retail, housing, CRE, CRE-RH, NPAs).
  * For each rating bucket / LTV bucket / product category.

* **CCF tables** (Module 6):

  * OBS type → CCF (direct credit substitute, performance, trade, commitments ≤1 yr, >1 yr, UCC).

* **Haircut tables** (Module 7):

  * Instrument type, rating, maturity → supervisory haircut (Hₑ, H꜀).
  * FX pair → Hfx (e.g. 8%).

* **Buffer thresholds** (for capital ratios & constraints):

  * Minimum CET1, Tier 1, Total capital,
  * CCB, CCyB, etc. (Basel + India).

This makes your engine robust to future Basel 3.1 / RBI changes – just update parameter tables.

---

## 9.3 High-level RWA engine pipeline

Think of this as **one big pipeline** that runs monthly/quarterly (and often daily in simplified form):

1. **Data ingestion**
2. **Exposure classification**
3. **EAD calculation (on + off balance)**
4. **Apply CRM (collateral & guarantees)**
5. **Assign risk weights**
6. **Compute RWA & capital**
7. **Aggregate + reconcile + explain movements**

We’ll walk each step.

---

## 9.4 Step 1 – Data ingestion & staging

### 9.4.1 Sources

Typical real-world sources:

* **Core banking system** – loans, limits, deposits, NPAs, provisions.
* **Treasury / trading systems** – bonds, derivatives, repos, FX, etc.
* **Collateral management system** – pledged securities, valuations.
* **Market data** – prices, FX rates, haircuts sometimes derived from ratings.
* **Reference data** – customer master, ratings master, internal product taxonomy.

Data is loaded into a **staging / data warehouse layer**, often via ETL jobs.

### 9.4.2 Data quality checks

Before running RWA, banks run **DQ checks**:

* Missing critical fields:

  * Counterparty ID, product type, limit, outstanding, maturity, NPA flag, etc.
* Referential integrity:

  * Every facility’s counterparty exists in counterparty table.
* Reasonableness:

  * Negative outstandings? Limit < outstanding?
  * Maturity dates in the past?
  * Provisions > exposure?

Failures go to **exceptions** and must be corrected or flagged (e.g., conservative assumptions).

---

## 9.5 Step 2 – Exposure classification

This is where all your **Basel / RBI logic** comes alive.

### 9.5.1 Global Basel classification (Module 4)

Using **counterparty_type**, **product_type**, **purpose**, **collateral_type**, etc., you determine:

* Sovereign / central bank,
* PSE,
* Bank / securities firm,
* Corporate,
* Retail (regulatory retail or not),
* Secured by residential / commercial real estate,
* Securitisation exposure,
* Equity exposure,
* Past-due/ NPA,
* Other assets.

### 9.5.2 India-specific classification (Module 5)

For Indian SA engine, classification needs extra **RBI-specific logic**, e.g.:

* **Regulatory retail** – check all 4 conditions:

  * Orientation (individual / small business with turnover < ₹50 crore),
  * Product type (retail products, not capital market exposures, etc.),
  * Granularity (no single counterparty >0.2% of regulatory retail portfolio),
  * Total exposure per counterparty ≤ ₹5 crore.

* **Residential housing loans** – check:

  * Fully secured by residential property,
  * LTV buckets (<=90%, <=80%, <=75%),
  * Loan size brackets (≤ ₹20 lakh, 20–75 lakh, >75 lakh),
  * Whether it is first/second/third dwelling unit (3rd onwards often CRE).

* **CRE vs CRE–RH vs non-CRE** – based on project type and cash flow.

* **NPAs** – standard / substandard / doubtful / loss + provisioning levels → NPA RW table.

Your engine will have **classification rules** like:

\`\`\`pseudo
if counterparty_type in {GoI, RBI, state_govt} and currency='INR' and funded_in_INR:
    class = 'Domestic Sovereign'
elif product_type in {Housing Loan} and purpose = 'Residential' and LTV <= 90% and exposure <= 20L:
    class = 'Residential Mortgage – Bucket X'
elif meets_reg_retail_tests:
    class = 'Regulatory Retail'
elif is_CRE_project:
    class = 'Commercial Real Estate'
...
\`\`\`

These classification flags are then used to pick **which risk-weight table** to use.

---

## 9.6 Step 3 – EAD calculation (on + off balance)

You already know the formulas from Modules 4 & 6; here we plug them into the engine.

### 9.6.1 On-balance sheet

Per exposure (i):

$$
\\text{EAD}_{\\text{on}, i} = \\max(0,\\ \\text{Gross exposure}_i - \\text{specific provisions}_i - \\text{write-offs}_i)
$$

Basel SA clearly states that exposures are taken **net of specific provisions / partial write-offs** for risk-weighting.

### 9.6.2 Off-balance sheet

Per OBS item (k):

1. Determine OBS category: direct credit substitute, performance guarantee, trade LC, commitment ≤1 year, >1 year, UCC, etc.
2. Get CCF from RBI Basel III CCF table.
3. Compute:

$$
\\text{EAD}_{\\text{off}, k} = \\text{Notional}_k \\times \\text{CCF}_k
$$

### 9.6.3 Mixed facilities (drawn + undrawn)

For facility with limit (L), drawn (D), undrawn (U):

$$
\\text{EAD}_{\\text{on}} = \\max(0,\\ D - \\text{provisions})
$$

$$
\\text{EAD}_{\\text{off}} = U \\times \\text{CCF}
$$

$$
\\text{EAD}_{\\text{total}} = \\text{EAD}_{\\text{on}} + \\text{EAD}_{\\text{off}}
$$

This EAD is what flows into CRM and risk-weighting.

---

## 9.7 Step 4 – Apply CRM (collateral, guarantees, netting)

This is where Module 7 logic plugs in.

### 9.7.1 Decompose exposure into CRM slices

For each facility:

* Identify attached **collateral** and **guarantees/CDS**.
* Decide splitting logic:

  * e.g., first X is fully covered by cash collateral, next Y is guaranteed, rest unsecured.

You then have multiple **slices**:

* Slice A – cash-collateralised
* Slice B – financial collateral (securities)
* Slice C – guaranteed by sovereign/bank
* Slice D – unprotected

Basel & RBI explicitly recommend splitting exposures when multiple CRM techniques cover one facility.

### 9.7.2 Collateral (comprehensive approach – India)

For collateral slice:

Use RBI’s comprehensive approach formula:

$$
E^* = \\max\\{0,\\ E \\times (1 + H_e) - C \\times (1 - H_c - H_{fx})\\}
$$

Where:

* E = EAD of that slice
* C = collateral value
* Hₑ, H꜀ = exposure & collateral haircuts
* Hfx = FX mismatch haircut

Then:

$$
\\text{RWA}_{\\text{collateral slice}} = E^* \\times \\text{RW}_{\\text{counterparty}}
$$

### 9.7.3 Guarantees / credit derivatives (substitution approach)

For guaranteed slice:

1. Start from EAD of that slice = E.
2. Adjust protection for FX (Hfx) and maturity mismatch (Pₐ formula).

$$
P_a = P \\times \\frac{t - 0.25}{T - 0.25}
$$

3. Protected part = min(E, Pₐ) → RW = **RW_guarantor**
   Unprotected part = E − protected → RW = **RW_borrower**

$$
\\text{RWA} = \\min(E, P_a) \\times RW_g + \\max(0, E - P_a) \\times RW_o
$$

For your engine, that’s just arithmetic once you’ve computed Pₐ.

---

## 9.8 Step 5 – Risk weight assignment

Once you have **final EAD / E*** for each slice, you assign **risk weights** using:

* Exposure class (from classification step),
* Rating (if allowed/available),
* LTV / product type (for mortgages),
* NPA status & provisioning (for NPAs),
* Securitisation flags (for securitisation exposures).

### 9.8.1 Standardised Approach (SA) – global

You pick risk weight from Basel SA tables (CRE20/21) for:

* Sovereigns,
* Banks (incl. SCRA under Basel 3.1),
* Corporates,
* Retail,
* Real estate,
* Equity,
* Past due,
* Securitisation (if under SA).

### 9.8.2 SA in India – RBI tables

You instead use **RBI’s** SA tables:

* Claims on sovereigns & central banks (GoI, RBI, foreign sovereigns).
* Banks & PDs (risk weights by rating, short/long term).
* Corporates / NBFC-IFC / AFC.
* Regulatory retail (75% RW if criteria met).
* Residential housing loans (LTV × loan size matrix: 50%, 75%, etc.).
* Commercial real estate & CRE–RH.
* NPAs (RW 150%, 100%, 50% based on provision coverage).
* Securitisation exposures per RBI’s securitisation guidelines (rating-based RW or 1250% fallback).

In your app, you’ll basically have:

\`\`\`pseudo
RW = RW_table[exposure_class][rating_bucket or LTV_bucket or NPA_bucket]
\`\`\`

---

## 9.9 Step 6 – Compute RWA & capital

For each slice (exposure j):

$$
\\text{RWA}_j = \\text{EAD or } E^*_j \\times \\text{RW}_j
$$

Sum up:

$$
\\text{RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

Then add:

$$
\\text{RWA}_{\\text{total}} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}} + \\dots
$$

Capital requirement (Basel template):

$$
K_{\\text{Pillar 1}} = 8\\% \\times \\text{RWA}_{\\text{total}}
$$

India uses **9% minimum total capital ratio** plus **CCB** 2.5%, etc., so banks target higher (≈11.5%+).

---

## 9.10 Step 7 – Aggregation, reporting & controls

### 9.10.1 Aggregation dimensions

You’ll need to aggregate RWA, EAD, and exposures by:

* Regulatory exposure class (sovereign, bank, corporate, retail, housing, CRE, NPA, securitisation, etc.).
* Internal portfolio / segment (corporate, SME, retail, agri, etc.).
* Counterparty / group / sector / region.
* Rating grade, LTV band.

These feed:

* **Regulatory returns** (Basel III capital adequacy forms to RBI),
* **Pillar 3 disclosure tables** (capital structure, RWA by risk type / asset class),
* **Internal MI** (RWA by business, profitability vs capital, etc.).

### 9.10.2 Reconciliation controls

Regulators expect strong **reconciliation** between:

* RWA engine outputs and
* Accounting / GL balances.

Common controls:

1. **Balance sheet reconciliation**

   * Sum of exposure amounts used for RWA (plus certain deductions) ≈ total assets (plus off-balance sheet items accounted for).
   * Differences explained by scope (regulatory vs accounting consolidation, exposures deducted from capital, etc.).

2. **Movement analysis**

   * Opening RWA vs closing RWA:

     * Volume effect (increase/decrease in balances),
     * Mix effect (shift in portfolios),
     * CRM effect (new collateral/guarantees),
     * Methodology effect (parameter or rule changes),
     * FX effect.

3. **Ratio checks**

   * Compare CRAR, CET1, Tier 1, leverage ratio from engine vs **regulatory returns** and **published financials**.

4. **Data quality dashboards**

   * # of records failing classification, CCF, CRM eligibility tests.
   * Coverage (e.g. how much of book has rating / LTV / collateral data filled).

---

## 9.11 How this becomes a killer portfolio project for you

Your web app can showcase:

1. **A mini data model**

   * Allow user to upload a CSV of sample exposures with fields like:

     * Counterparty type, product, limit, outstanding, LTV, rating, collateral, guarantee, etc.
   * Internally map this into the entities we described.

2. **Rule-based classification**

   * Expose rules in the UI:

     * “This exposure classified as Regulatory Retail because: turnover < 50cr, exposure ≤ 5cr, granularity met.”

3. **EAD + CRM + RW breakdown per exposure**

   * Show step-by-step:

     * Gross exposure → provisions → EAD,
     * CCF applied for OBS,
     * CRM adjustments,
     * RW chosen,
     * Final RWA.

4. **Portfolio dashboards**

   * RWA by exposure class / rating grade / product.
   * Capital requirement at 9% / 11.5% / etc.
   * What-if analysis: e.g., “What if these SME loans qualify as regulatory retail?” or “What if LTV goes up/down?”

5. **Full audit trail**

   * For any exposure, show the **“regulatory reasoning”**:

     * “RBI Para X.Y: housing loans with LTV ≤ 80% & loan size ≤ 75 lakh → 50% RW” etc. (you don’t have to quote paragraph numbers exactly in UI but conceptually show the link).

This screams **“I understand Basel AND I can build systems”** – exactly what capital adequacy / reg reporting & product roles love.

---

## 9.12 Bulb section – crisp talking points 💡

💡 **Bulb 1 – One-sentence description of an RWA engine**

> “An RWA engine is basically a rules engine plus a data warehouse: it classifies exposures, converts them to EAD (including CCFs), applies CRM, assigns regulatory risk weights, and then aggregates RWA for capital ratios and reporting.”

---

💡 **Bulb 2 – Separation of concerns**

> “A clean design separates reference data (RW/CCF/haircut tables) from logic; when Basel or RBI change parameters, you update tables, not code.”

That line alone signals product + architecture thinking.

---

💡 **Bulb 3 – Reconciliation is as important as formulas**

> “It’s not enough to get the math right; the engine must reconcile to GL, explain RWA movements, and support Pillar 3 disclosures. Supervisors care a lot about that traceability.”

---

💡 **Bulb 4 – Where most implementation bugs happen**

* Misclassification (e.g. SME vs regulatory retail vs corporate).
* Wrong CCF on OBS items.
* Ignoring undrawn portions of loans.
* Wrong LTV calculation.
* Incorrect CRM eligibility (over-recognising collateral/guarantees).

If you can list these in an interview, they will immediately see you’ve thought about real-world implementations.
`
            }
          ]
        }
      ]
    },
    {
      id: "10",
      slug: "regulatory-reporting",
      title: "Module 10 – Regulatory Capital Reporting & Disclosures",
      goal: "Connect RWA and capital numbers to their reporting and disclosure outputs.",
      sections: [
        {
          id: "10-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# Module 10 – Regulatory Capital Reporting & Disclosures (Pillar 3 + RBI)

## 10.1 What “regulatory capital reporting” actually means

By now your **RWA engine** (Module 9) can compute:

* Capital components (CET1, AT1, Tier 2)
* Total RWA = Credit + Market + Operational (and maybe CVA etc.)
* Capital ratios (CET1 / RWA, Tier 1 / RWA, Total capital / RWA)

**Module 10** is about:

1. **Regulatory reporting to supervisor**

   * Detailed templates/returns sent to RBI (or other regulator) with capital, RWA, exposures, etc.

2. **Public disclosures (Pillar 3)**

   * Published docs (usually PDFs on the bank’s website + notes in financial statements) that allow **investors and analysts to see capital strength and risk profile**. Basel calls this **Pillar 3 – market discipline**.

Your app/portfolio story:

> “My engine doesn’t just compute RWA; it’s designed to **feed Pillar 3 templates and regulatory returns** in a traceable way.”

---

## 10.2 Pillars recap – where Module 10 sits

Quick mental map:

* **Pillar 1** – minimum capital requirements

  * Quantitative rules for credit, market, operational risk.
* **Pillar 2** – supervisory review & ICAAP

  * Internal capital assessment, buffers, risks not captured in Pillar 1.
* **Pillar 3** – **market discipline via disclosures**

  * Standardised set of tables and narrative to **show** Pillar 1 & 2 numbers to the outside world.

So Module 10 = **“export layer”** of everything we built in Modules 1–9.

---

## 10.3 Basel Pillar 3 – global framework

### 10.3.1 Purpose

Basel Committee’s Pillar 3 framework says:

* Aim is to **promote market discipline** by requiring banks to disclose:

  * Capital structure,
  * Capital adequacy (ratios and RWA),
  * Risk exposures and risk management processes.

Investors can compare banks based on **capital strength and risk profile** – that’s the whole point.

### 10.3.2 Consolidated Pillar 3 framework

Basel’s 2017 “consolidated and enhanced” Pillar 3 framework groups disclosure requirements into thematic sets:

High-level categories:

1. **Overview of risk management & risk profile**
2. **Capital & RWA**

   * Capital structure, capital adequacy, leverage.
3. **Credit risk & CRM**

   * Credit risk exposures, SA/IRB breakdown, collateral & guarantees.
4. **Counterparty credit risk, CVA**
5. **Securitisation**
6. **Market risk**
7. **Operational risk**
8. **IRRBB (interest rate risk in banking book)**
9. **Remuneration & governance**
10. **(New) ESG / climate risk disclosures in some jurisdictions**

Basel provides **standard table formats** so banks across countries are more comparable.

---

## 10.4 Capital structure reporting – what gets disclosed

You already studied components in Modules 2–3. Pillar 3 + RBI require banks to present a **structured capital composition**:

### 10.4.1 Composition of capital

Globally, Basel prescribes templates (often called **CC1, CC2** under Pillar 3) that show:

* CET1:

  * Paid-up common shares, share premium,
  * Retained earnings, statutory reserves,
  * Other reserves,
  * Regulatory adjustments (goodwill, intangibles, DTAs, significant investments, etc.).
* AT1:

  * Perpetual non-cumulative preference shares,
  * AT1 bonds with loss-absorption features,
  * Regulatory deductions.
* Tier 2:

  * Eligible subordinated debt,
  * General provisions (within caps),
  * Regulatory deductions.

RBI issued separate guidelines on **“Composition of Capital Disclosure Requirements”** under Basel III; these are directly referenced in the Basel III Master Circular.

**Your mental model:**

* There’s a **reconciliation** from accounting equity → regulatory capital:

  1. Start from equity in balance sheet.
  2. Strip out ineligible items & apply regulatory adjustments.
  3. What’s left is CET1, AT1, Tier 2 as per rules.

In interviews, you can say:

> “Capital structure reporting is basically the detailed walk from accounting equity to CET1, AT1, and Tier 2 after all Basel/RBI adjustments.”

---

### 10.4.2 Capital adequacy – the core ratios (Table DF-2 in India)

The main output table is **Capital Adequacy** – in India this is **Table DF-2** under RBI’s Basel III disclosure framework.

Key metrics disclosed:

* **Total RWA**, broken down by:

  * Credit risk,
  * Market risk,
  * Operational risk (and sometimes CVA/other).

* **Capital ratios**:

  * CET1 ratio,
  * Tier 1 ratio,
  * Total capital ratio (CRAR).

Mathematically:

$$
\\text{CET1 ratio} = \\frac{\\text{CET1}}{\\text{RWA}_{\\text{total}}}
$$
$$
\\text{Tier 1 ratio} = \\frac{\\text{Tier 1}}{\\text{RWA}_{\\text{total}}}
$$
$$
\\text{Total Capital Ratio (CRAR)} = \\frac{\\text{Total Capital}}{\\text{RWA}_{\\text{total}}}
$$

Plus, banks disclose **minimum requirements** and **buffers**:

* Basel III template minima:

  * CET1 ≥ 4.5%,
  * Tier 1 ≥ 6%,
  * Total capital ≥ 8%, plus
  * CCB (up to 2.5%) and CCyB.

* **India (Basel III implementation)**:

  * Minimum **Pillar 1** CRAR = **9%** (not 8%) of RWA.
  * Capital Conservation Buffer (CCB) = 2.5% of RWA fully phased in from Oct 1, 2021.
  * So minimum **Total capital including CCB = 11.5%** of RWA.

So in India:

$$
\\text{Regulatory Minimum Total Capital (incl. CCB)} = 11.5\\% \\times \\text{RWA}_{\\text{total}}
$$

> **Headroom concept (link to Module 11 later):**
> **Capital headroom = Actual Capital − Minimum Required Capital**
> = Capital − (Regulatory minimum % × RWA).

---

## 10.5 Pillar 3 in India – the DF tables

RBI has embedded Basel Pillar 3 into the **Basel III Capital Regulations** via standard tables called **“DF-1, DF-2, …”**.

Older Basel II master circular and the IIBF Basel III document summarise these as:

Core ones (slightly simplified, but conceptually correct for current Indian practice):

1. **DF-1: Scope of application**

   * Which entities are included in consolidation,
   * Solo vs consolidated basis.

2. **DF-2: Capital structure / capital adequacy**

   * Composition of capital (CET1, AT1, Tier 2),
   * Capital ratios and RWA by risk type.

3. **DF-3: Credit risk – general disclosures**

   * Definitions of NPAs, impaired assets,
   * Credit risk management governance, policies, and processes,
   * Collateral policy at high level.

4. **DF-4: Credit risk – Standardised Approach portfolios**

   * Exposure amounts and RWA by:

     * Exposure class (sovereign, bank, corporate, retail, etc.),
     * Risk weight buckets (0%, 20%, 50%, 75%, 100%, 150% etc.).

5. **DF-5: Credit Risk Mitigation (CRM) – Standardised Approach**

   * Amount of exposures covered by:

     * Eligible financial collateral,
     * Guarantees/credit derivatives,
   * Qualitative description of collateral/guarantee usage and policies.

6. **DF-6: Securitisation**

   * Exposures securitised,
   * Roles (originator/investor),
   * Outstanding securitisation positions and their RWA.

7. **DF-7: Market risk in trading book**

8. **DF-8: Operational risk**

9. **DF-10 / others**: Equities in banking book, IRRBB, remuneration, leverage, etc., depending on RBI’s latest mapping.

Recent Indian Pillar 3 reports (Yes Bank, NaBFID, foreign branches) show exactly these DF tables being used today under Basel III capital regulations.

### 10.5.1 Frequency & location of disclosures

RBI’s Basel III guidance (and IIBF summary) say:

* Pillar 3 disclosures must be made **at least half-yearly**,
* But **DF-2 (capital adequacy), DF-3 (credit risk general), DF-4 (credit risk SA)** must be disclosed **at least quarterly**.
* Disclosures must appear:

  * Either in **published financial statements**, or
  * At minimum, on the **bank’s website**, with clear references from the financials.

So, for your app narrative:

> “My engine produces DF-2/DF-3/DF-4 data ready for quarterly publication, and the full DF suite for half-yearly/annual Pillar 3 reports.”

---

## 10.6 Scope of application – solo vs consolidated, regulatory vs accounting

### 10.6.1 Basel view

Basel III says minimum capital standards apply on a **consolidated basis** to internationally active banks (so capital is measured against the consolidated group’s risks) and, as appropriate, at the solo level as per national rules.

### 10.6.2 RBI’s implementation

RBI’s Basel III documents and IIBF summary emphasise:

* Pillar 1 capital adequacy is assessed:

  * On **consolidated basis** for the banking group (where applicable),
  * On **solo basis** for individual banks.

* Pillar 3:

  * Banks at top of a banking group make disclosures on **consolidated basis**.
  * Other banks within group must also make Pillar 3 disclosures on **stand-alone basis**.

**Regulatory vs accounting consolidation:**

* Regulatory consolidation **may exclude** some entities that are:

  * Insurance companies,
  * Non-financial subsidiaries,
  * JV/associates where only equity risk is taken.
* Instead, exposures to these entities are often:

  * **Risk-weighted**, or
  * **Deducted** from capital (for certain investments).

So in your notes, keep this crisp:

> “Regulatory scope of consolidation is usually narrower than full accounting consolidation – some entities are deconsolidated and treated as equity exposures or deductions instead.”

Pillar 3 **DF-1** specifically asks banks to describe this scope and any material differences.

---

## 10.7 How RWA engine outputs map into reporting templates

Now we plug Module 9 into Module 10.

### 10.7.1 From engine to DF-2: Capital adequacy

From your engine you have:

* CET1, AT1, Tier 2 (after regulatory adjustments),
* RWA_credit, RWA_market, RWA_operational, (RWA_CVA, etc).

DF-2 then shows (in concept):

* **Capital**:

  * Row: CET1, AT1, Tier 1, Tier 2, Total capital.
* **RWA**:

  * Row: Credit risk, Market risk, Operational risk, total RWA.
* **Ratios**:

  * CET1/Tier 1/Total capital ratios vs minimum + buffers.

Your engine must **summarise** RWA by risk type (credit/market/operational) – that’s exactly what we set up in Module 9.

---

### 10.7.2 From engine to DF-3 & DF-4: Credit risk

**DF-3 – Credit Risk: General Disclosures** mostly uses:

* Qualitative info:

  * Definitions of NPA,
  * Description of credit risk policy, organisation, limits, risk rating systems.
* Quantitative info:

  * Total gross credit risk exposures,
  * Geographic/industry splits,
  * NPA and provisioning breakdowns.

Your engine:

* Already has **exposure by counterparty, segment, geography, rating** – you aggregate this into the DF-3 tables.

**DF-4 – Credit risk: portfolios subject toSA**

This is where your **SA classification rules** shine. DF-4 typically includes:

* RWA and exposure amounts by exposure class:

  * Sovereigns, banks, corporates, regulatory retail, residential mortgage, CRE, NPAs, securitisation, etc.
* Amount of credit RWA in different **risk-weight buckets**:

  * e.g. below 100%, exactly 100%, >100%.

Your engine already knows, for each exposure:

* \`exposure_class\`
* \`EAD\`
* \`risk_weight\`

So DF-4 is just:

$$
\\text{RWA}_{\\text{bucket}} = \\sum_{i;\\text{with RW in bucket}} EAD_i \\times RW_i
$$

---

### 10.7.3 From engine to DF-5: Credit risk mitigation

From Module 7, you know which exposures are covered by **eligible CRM** (collateral/guarantees).

DF-5 wants:

* Qualitative:

  * Policies for collateral valuation & management,
  * Types of collateral/guarantees used and any concentration concerns.

* Quantitative:

  * Exposure amounts covered by:

    * Eligible financial collateral (after haircuts),
    * Guarantees & credit derivatives,
  * Sometimes by exposure class or product.

Your engine uses the **post-haircut collateral and guarantee coverage** used in CRM calculations and aggregates:

* “Exposure covered by eligible financial collateral (after haircuts)”
* “Exposure covered by guarantees/credit derivatives”

Straightforward once you track CRM at slice level.

---

### 10.7.4 Market risk and operational risk templates

Using outputs from bank’s market risk and operational risk engines (often separate, but conceptually similar to your credit engine):

* **DF-7 (Market risk)**:

  * Capital required by risk type (interest rate, equity, FX, commodity),
  * Approach used (Standardised / IMA/FRTB),
  * Qualitative description of trading book risk management.

* **DF-8 (Operational risk)**:

  * Approach (BIA/TSA/AMA or SMA),
  * Business Indicator / Gross Income metrics (for SMA/BIA),
  * Qualitative description of operational risk management.

Again, these are just **aggregations** of the risk-type-specific engines.

---

## 10.8 RBI reporting beyond Pillar 3 – notes to accounts & regulatory returns

### 10.8.1 Notes to accounts in financial statements

RBI issues a Master Circular on **“Disclosure in Financial Statements – Notes to Accounts”** that requires banks to present:

* Capital adequacy information (Basel II/III),
* Credit concentration, sectoral exposure, NPAs, provisioning, etc.

It explicitly says that **disclosure requirements in the Basel III Capital Regulations also apply**, i.e., Pillar 3 is integrated into broader financial statement disclosure.

So you have:

* **Notes to accounts** = accounting + regulatory view together.
* **Pillar 3 PDF** = expanded regulatory detail, often on the website.

### 10.8.2 Supervisory returns (to RBI)

Apart from public Pillar 3, banks submit **detailed capital adequacy returns** (often in XBRL form) to RBI each quarter.

Example (for PDs): RBI requires quarterly **PDR III return** for capital adequacy with supporting schedules.

For commercial banks, similar detailed Basel III returns exist (names & XML formats change over time). Conceptually they contain:

* Capital components & adjustments,
* RWA by risk type and exposure class,
* Off-balance sheet exposures & CCFs,
* CRM breakdowns, securitisation, large exposures, etc.

In interviews, you don’t need the exact form names; it’s enough to say:

> “The RWA engine feeds both RBI’s XBRL capital adequacy returns and the public Pillar 3 disclosures; both must reconcile to each other and to the financial statements.”

Some banks’ Pillar 3 docs even mention governance over **automation of regulatory reports & metadata** – exactly the kind of thing you want to show you understand.

---

## 10.9 Process & governance: how banks make sure everything ties out

From a “job” perspective, this is gold.

### 10.9.1 Typical reporting workflow

1. **Run RWA engine(s)** as of reporting date.

2. **Extract summaries**:

   * Capital components from finance / capital module,
   * RWA by risk type & exposure class,
   * Credit risk parameters (NPAs, provisions, exposure by buckets),
   * CRM usage, securitisation exposures, market/operational risk numbers.

3. **Populate templates**:

   * RBI XBRL returns,
   * DF tables for Pillar 3,
   * Note disclosures for financial statements.

4. **Reconciliations & controls**:

   * Capital & RWA totals vs internal MI and previous quarter,
   * Exposure totals vs GL / balance sheet,
   * Pillar 3 numbers vs supervisory returns (RBI),
   * Consistency across DF tables (e.g., total credit RWA in DF-4 = credit RWA in DF-2).

5. **Review & sign-off**:

   * Risk, Finance, Regulatory Reporting, and sometimes Internal Audit review,
   * Senior management and Board / Risk Committee sign-off, as required.

6. **Publication & submission**:

   * Upload Pillar 3 PDF to website,
   * File XBRL returns with RBI,
   * Include key disclosures in annual and interim financial statements.

### 10.9.2 Key consistency checks you should know how to talk about

* **RWA reconciliation**:

  * Opening RWA + RWA changes from new business, repayments, mix changes, FX, model/parameter updates, etc. = closing RWA.
* **Ratio consistency**:

  * Capital / RWA from Pillar 3 = same ratios published in financial statements.
* **DF table consistency**:

  * Total credit exposures and RWA in DF-3/DF-4 should reconcile to DF-2 and to underlying engine.

---

## 10.10 Bulb section – interview & app design insights 💡

💡 **Bulb 1 – One-liner for Pillar 3**

> “Pillar 3 is the **disclosure leg** of Basel – it turns internal capital and risk numbers into standardised tables and narratives so that markets can discipline banks.”

---

💡 **Bulb 2 – India-specific Pillar 3 summary**

> “In India, Pillar 3 is implemented via DF tables (DF-1 to DF-x) defined in RBI’s Basel III Capital Regulations. DF-2/3/4 are quarterly, full suite is at least half-yearly, and they sit alongside RBI’s Notes-to-Accounts disclosure circular.”

That shows you know local practice, not just Basel textbooks.

---

💡 **Bulb 3 – Scope of consolidation soundbite**

> “Regulatory consolidation usually **excludes** some non-banking entities; those are treated via risk weights or deductions instead of being consolidated, and DF-1 explicitly explains that difference.”

---

💡 **Bulb 4 – How you’d explain your app**

If someone asks what your web app does:

> “Functionally it’s a mini Basel/RBI reporting stack:
> ① Take exposures, classify them (sovereign/bank/corporate/retail etc.),
> ② Compute EAD (including CCFs), RWA and capital,
> ③ Then show DF-2/DF-3/DF-4-style summaries, with drilldown from each line item back to the underlying facilities.”

That’s exactly the “RWA → Pillar 3 → RBI returns” story.

---

💡 **Bulb 5 – Showing you think like governance, not just maths**

You can throw this line:

> “Getting the formulas right is just step one; high-quality capital reporting also needs robust **data lineage, reconciliations to GL, and sign-off governance** across Risk, Finance, and Regulatory Reporting, because Pillar 3 numbers must match regulatory returns and published financials.”

That’s the mindset of a **Senior/Lead Capital Adequacy & Regulatory Reporting Analyst**.

---
`
            }
          ]
        }
      ]
    },
    {
      id: "11",
      slug: "capital-buffers-planning",
      title: "Module 11 – Capital Buffers, Headroom & Planning Concepts",
      goal: "Move beyond 'static ratios' to understanding how capital is managed over time.",
      sections: [
        {
          id: "11-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# Module 11 – Capital Buffers, Headroom & Planning Concepts

## 11.1 From “minimum” to “management view”

Up to now:

* You know **how to compute capital** (CET1, AT1, Tier 2 – Modules 2–3).
* You know **how to compute RWA** (Modules 4–9).
* You know **how to report** (Module 10).

Now we answer:

> *Given capital and RWA today, how does a bank make sure it has **enough capital tomorrow** for growth + stress + regulations?*

Key ideas:

1. **Minimum capital ratios** – hard regulatory floors (Pillar 1).
2. **Capital buffers** – extra CET1 that *must* be held on top of minima.
3. **Headroom** – actual capital **above minima + buffers**.
4. **Capital planning** – projecting capital and RWA forward, ensuring headroom isn’t eaten up by growth or stress.

---

## 11.2 Basel III: minimums vs buffers – concepts

### 11.2.1 Minimum risk-based ratios (Basel template)

Basel III baseline minimums (ignoring buffers):

* **CET1 ratio ≥ 4.5%** of RWA
* **Tier 1 ratio ≥ 6%** of RWA
* **Total capital ratio ≥ 8%** of RWA

These must be met **at all times**.

### 11.2.2 Capital Conservation Buffer (CCB / CCBf)

Basel III then adds a **Capital Conservation Buffer**:

* Size: **2.5% of RWA**
* Must be met with **pure CET1**.
* Sits **on top of** the minimum ratios.

Purpose:

* Ensure banks build **extra CET1 in good times**.
* Allow that buffer to be **used in stress**, but then **restrict distributions** (dividends, buybacks, bonuses) when CET1 falls into the buffer range so they rebuild capital over time.

Basel explicitly describes CCB as:

> 2.5% CET1 above minimum to ensure banks build up buffers in normal times and can draw them down in periods of stress.

### 11.2.3 Countercyclical Capital Buffer (CCyB)

Basel III also introduces **Countercyclical Capital Buffer**:

* Range: **0% to 2.5% of RWA**, **CET1 only**.
* Set by national authorities based on indicators of **excess credit growth / systemic risk**.
* Objective:

  * Build extra capital in **credit booms**,
  * Allow release of buffer in **downturns** to support lending.

### 11.2.4 Systemic buffers (G-SIB / D-SIB)

For **systemically important banks**, Basel also allows/mandates:

* **G-SIB buffers** (global SIBs),
* **D-SIB / O-SII buffers** (domestic systemically important).

These are **extra CET1** on top of minimum + CCB + CCyB.

You don’t need the exact calibration for interviews; the key is:

> “Systemic banks carry additional CET1 buffers to reflect their higher impact on the system.”

---

## 11.3 India’s implementation of buffers

### 11.3.1 Minimum and CCB in India

RBI’s Basel III framework sets:

* **Minimum Total Capital Ratio (Pillar 1) = 9% of RWA** (higher than Basel’s 8%).
* **Capital Conservation Buffer = 2.5% of RWA** (CET1), fully in place from **1 October 2021**.

So in India:

$$
\\text{Regulatory minimum Total Capital incl. CCB} = 9\\% + 2.5\\% = 11.5\\% \\text{ of RWA}
$$

RBI/IIBF clearly states banks must maintain **CCB of 2.5% CET1 over the 9% minimum**, and that **capital distribution constraints** apply when they fall into the buffer range.

### 11.3.2 CCyB in India

* RBI issued **guidelines for CCyB** in February 2015, consistent with Basel III.
* The framework allows RBI to set CCyB in the **0–2.5% of RWA** range based on indicators of credit growth and system-wide risk.
* As of **April 2025**, RBI has **not activated CCyB** – it remains at **0%**; recent RBI statements explicitly say CCyB is not required in present conditions.

So for Indian banks today:

* CCyB requirement = **0** (but they must be ready for it to be >0 in future).

### 11.3.3 Management buffers beyond regulatory ones

Regulators (including RBI) and supervisors keep emphasising that banks should **not stop at the legal minimum**:

* BIS research defines **capital headroom** as the surplus of a bank’s capital above *all* minimum requirements and buffers.
* RBI Deputy Governor recently said PSBs should **proactively strengthen capital buffers** based on their own risk profile and growth, not just meet minimums.

So typical Indian banks target **management buffers** above 11.5% total capital, e.g., 13–14%+ (varies by bank).

---

## 11.4 Capital headroom – definition & formula

### 11.4.1 Concept

**Capital headroom** = how much “free capital” you have **above** all mandatory requirements (including buffers).

BIS doc defines:

> “Capital headroom is the surplus of a bank’s capital resources above all minimum regulatory requirements and buffers.”

Think of it as the **margin of safety** available for:

* **Growth** (RWA expansion),
* **Unexpected losses**,
* **Regulatory changes**,
* **Stress scenarios**.

### 11.4.2 Simple formula (India flavour)

Let:

* $K_{\\text{actual}}$ = total regulatory capital (CET1 + AT1 + Tier 2)
* $\\text{RWA}_{\\text{total}}$ = total RWA
* $r_{\\text{min}}$ = **required** total capital ratio (including CCB, CCyB, any SIB buffer, etc.)

Then:

$$
\\text{Required capital} = r_{\\text{min}} \\times \\text{RWA}_{\\text{total}}
$$

$$
\\text{Capital headroom} = K_{\\text{actual}} - r_{\\text{min}} \\times \\text{RWA}_{\\text{total}}
$$

Expressed as ratio:

$$
\\text{Headroom ratio} = \\frac{K_{\\text{actual}}}{\\text{RWA}_{\\text{total}}} - r_{\\text{min}}
$$

In India *today* for total capital:

* $r_{\\text{min}} = 11.5\\%$ (9% min + 2.5% CCB, CCyB = 0).

Exactly same logic applies for **CET1 headroom** and **Tier 1 headroom** using the respective regulatory requirements.

---

## 11.5 Capital conservation constraints – how buffers “bite”

The CCB is not just a number; it comes with **distribution constraints**:

* If CET1 ratio is **within the buffer range** (i.e., above minimum but below minimum + 2.5%), the bank must conserve a **percentage of its earnings** (i.e., limit dividends, buybacks, bonuses).

Basel and RBI specify **capital conservation ratios**:

* The **lower your CET1** (still > minimum), the **more earnings you must conserve** (i.e., less you can pay out).
* At the bottom of the buffer (just above minimum), payout can be **0** – essentially everything must be retained.

For interviews, a crisp way to put it:

> “If CET1 falls into the CCB range, the bank can keep operating but faces **automatic constraints** on distributions until it rebuilds capital.”

---

## 11.6 Simple one-period capital planning logic

Capital planning = projecting **capital** and **RWA** forward and checking if **future ratios** stay above **targets**.

### 11.6.1 Capital evolution (one period, deterministic)

Let:

* $K_0$ = capital at start of period
* $\\Pi$ = net profit during period (after tax)
* $D$ = dividends / distributions
* $\\Delta K_{\\text{ext}}$ = external capital raised (net of redemptions)

Then:

$$
K_1 = K_0 + \\Pi - D + \\Delta K_{\\text{ext}}
$$

(ignoring OCI / FX / fair-value changes for simplicity).

At the same time, suppose RWA changes from $\\text{RWA}_0$ to $\\text{RWA}_1$:

$$
\\text{RWA}_1 = \\text{RWA}_0 + \\Delta \\text{RWA}
$$

Then the **future capital ratio** is:

$$
\\text{CRAR}_1 = \\frac{K_1}{\\text{RWA}_1}
$$

**Capital planning question:**

> Given $K_0, \\Pi, D, \\Delta K_{\\text{ext}}, \\Delta \\text{RWA}$, does
> $\\displaystyle \\frac{K_1}{\\text{RWA}_1} \\ge r_{\\text{target}}$ ?

Where $r_{\\text{target}}$ is usually **higher** than regulatory minimum (e.g. 12–13% vs 11.5% in India).

### 11.6.2 Rearranging: required capital vs available capital

From:

$$
K_1 \\ge r_{\\text{target}} \\times \\text{RWA}_1
$$

Plug in the first equation:

$$
K_0 + \\Pi - D + \\Delta K_{\\text{ext}} \\ge r_{\\text{target}} \\times \\text{RWA}_1
$$

You can solve for:

* **Maximum RWA growth** given profit, dividends, and capital target.
* **Maximum dividend** consistent with maintaining target ratios.
* **Required external capital** to support planned growth.

This is exactly what banks do in capital planning and ICAAP processes.

---

## 11.7 Capital consumption & RWA density

### 11.7.1 Incremental capital consumption

For a given **incremental RWA** ($\\Delta \\text{RWA}$) and **target total capital ratio** ($r_{\\text{target}}$):

$$
\\text{Incremental capital needed} \\approx r_{\\text{target}} \\times \\Delta \\text{RWA}
$$

Example structure (no numbers, just form):

* If your bank targets total capital ratio of $r_{\\text{target}} = 13\\%$, each ₹100 of additional RWA “consumes” roughly ₹13 of capital.

This simple rule is widely used in pricing and portfolio decisions:

> “Does this new business generate enough **return on capital** to justify the capital it consumes?”

### 11.7.2 RWA density – concept

**RWA density** = RWA / Exposure (or RWA / total assets).

At portfolio level:

$$
\\text{RWA density} = \\frac{\\text{RWA}}{\\text{Exposure measure}}
$$

* If portfolio is mostly **0% / 20% RW** assets (Govt securities, top sovereigns) → low RWA density.
* If portfolio is heavy in **100% / 150% RW** corporate/retail risk, NPAs, securitisation → higher density.

For capital planning:

* **Growth in low-density assets** (e.g. GoI SLR securities) consumes **less capital per rupee** than growth in high-density assets.
* Risk teams often look at **product-specific RWA density** (RWA / EAD) to understand capital intensity.

Capital planners & business heads use this to manage mix:

* Shift towards products with **lower RWA density** (e.g., better-rated corporates, secured exposures, qualifying retail) – *without* taking unacceptable risk.

---

## 11.8 Using CRM and portfolio mix to manage capital

Tie back to Modules 5–7:

1. **CRM (collateral and guarantees)**

   * By recognising eligible collateral/guarantees, banks can **reduce RW** for given EAD:

     * e.g. converting a 100% RW exposure into partial 20% RW (via cash collateral or sovereign guarantee).
   * This reduces **RWA density** for that product segment.

2. **Portfolio mix**

   * More exposures in **regulatory retail** (75% RW) vs **unsecured corporate** (100% RW) reduces capital intensity – but comes with its own credit risk/strategy trade-offs.
   * More exposures in **low-LTV housing** (50% RW) vs **high-LTV or CRE** (75–100% RW) can reduce capital consumption.

3. **NPA management**

   * NPAs with low provisioning attract **150% RW** in India; increasing specific provisions reduces RW (towards 100%, then 50%) for remaining exposure, lowering RWA over time.

From a planning perspective, you always think:

> “If I grow in this segment/product, how much RWA and capital will it add, and can I offset it with capital-lite segments or better CRM elsewhere?”

---

## 11.9 Scenarios, stress testing & ICAAP – the planning toolbox

### 11.9.1 ICAAP – Internal Capital Adequacy Assessment Process

Under Basel II/III, banks must have an **ICAAP** under Pillar 2:

* Assess whether **capital is adequate** to cover:

  * Pillar 1 risks (credit, market, operational), and
  * **Pillar 2 risks** (IRRBB, concentration, liquidity, model risk, etc.).
* Perform **stress tests** to see how capital and ratios behave under adverse scenarios.
* Produce a **capital plan** over a multi-year horizon.

Indian banks’ Pillar 3 and ICAAP disclosures (e.g. Axis Bank, Bank of China Mumbai, NBFCs, etc.) explicitly say:

* ICAAP assesses capital adequacy under **current and stress conditions**,
* Compares capital vs projected RWA and business growth.

### 11.9.2 Basic scenario components

In a simple planning engine, a scenario is a path for:

* **Profitability** (NII, fees, credit cost, etc.) → future capital.
* **Growth / RWA** (loan growth, portfolio mix, CRM usage) → future RWA.
* **Losses / provisions** (higher in stress) → hit to capital **and** RWA (via NPA risk weights).
* Possible **regulatory changes** (higher RW for some exposures, new buffers).

Mathematically, for each year ( t ) in planning horizon:

$$
K_{t+1} = K_t + \\Pi_t - D_t + \\Delta K_{\\text{ext}, t}
$$
$$
\\text{RWA}_{t+1} = \\text{RWA}_t + \\Delta \\text{RWA}_t
$$
$$
\\text{CRAR}_{t+1} = \\frac{K_{t+1}}{\\text{RWA}_{t+1}}
$$

Then check:

$$
\\text{CRAR}_{t+1} \\ge r_{\\text{target}} \\quad \\forall t
$$

Under:

* **Base case** (expected conditions).
* **Adverse case** (mild recession).
* **Severe stress** (systemic shock).

Capital planning = making sure **even under the stress path**, you either:

* Still stay above required buffers, or
* Have **contingency actions** (cut growth, reduce dividends, raise capital, etc.) to restore ratios.

---

## 11.10 Bulb section – crisp talking points 💡

💡 **Bulb 1 – Buffers in one sentence**

> “Basel III minimums tell you the floor; capital buffers – CCB, CCyB, systemic buffers – sit on top and must be met with CET1 so banks build extra protection in good times and can use it in stress.”

---

💡 **Bulb 2 – India’s combined minimum**

> “For Indian banks today, effective total capital requirement is **11.5% of RWA** (9% minimum + 2.5% CCB), with CCyB currently set at 0%; banks usually hold additional management buffers on top of that.”

---

💡 **Bulb 3 – Capital headroom definition**

> “Capital headroom is just **actual capital minus required capital** (minimum + buffers). If headroom shrinks, your ability to grow and pay dividends shrinks.”

(Can also say “as ratio: actual CRAR − required CRAR”.)

---

💡 **Bulb 4 – Incremental capital cost**

> “If my target total capital ratio is 13%, every ₹100 of extra RWA consumes about ₹13 of capital – that’s the basic logic behind ‘capital consumption’ and RWA-based pricing.”

This shows you really get how capital and business interact.

---

💡 **Bulb 5 – ICAAP & planning**

> “ICAAP is where the bank checks if it has **enough capital not just for today’s RWA, but for future growth and stress**. It runs scenarios (base and stress), projects capital and RWA forward, and ensures ratios stay above internal targets, not just the regulatory minimum.”

---

💡 **Bulb 6 – How you’d pitch this in an interview**

> “I understand Basel III not just as static rules. I can explain how CCB/CCyB and India’s 11.5% requirement translate into **headroom**, how **RWA density and CRM** affect capital consumption, and how an **RWA engine feeds capital planning and ICAAP** over a multi-year horizon.”

That’s exactly the “capital adequacy + planning” mindset they want.

---
`
            }
          ]
        }
      ]
    },
    {
      id: "12",
      slug: "irb-basel-3-1",
      title: "Module 12 – IRB Approaches & Basel 3.1 (Endgame)",
      goal: "Be able to clearly explain IRB approaches and the Basel 3.1 constraints on internal models.",
      sections: [
        {
          id: "12-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# Module 12 – IRB Approaches & Basel 3.1 (Endgame)

## 12.1 Why IRB exists (vs Standardised Approach)

So far you’ve lived in **Standardised Approach (SA)** world:

* Regulator gives you **fixed risk weights** by rating, LTV, product, etc.
* Simple, transparent, but **not very risk-sensitive**.

Regulators also allow, for big sophisticated banks, a more advanced way:

> **Internal Ratings-Based (IRB) approach** – bank uses its **own risk parameters** (PD, LGD, EAD, M) in a **regulatory formula** to compute capital.

Goals of IRB:

* Make capital **more aligned with true risk**.
* Reward **better risk management + data + modelling**.
* But under strict **minimum standards** and **supervisory approval**.

Basel 3.1 (“finalising Basel III”, “Basel endgame”) then **tightens** IRB to fix problems discovered after the crisis: huge **variation of RWAs** across banks with similar portfolios.

---

## 12.2 Core IRB risk parameters – PD, LGD, EAD, M

Under IRB, capital formula depends on four key risk components:

1. **PD – Probability of Default**

   * One-year **default probability** associated with an internal rating grade.
   * Must be a **long-run average**, usually over an economic cycle, not just current year.
   * Minimum PD floors apply (e.g. **0.05%** for many corporate / bank / sovereign exposures under Basel 3.1).

2. **LGD – Loss Given Default**

   * Percentage of exposure that will be **lost if default happens** (1 − recovery rate).
   * Basel requires **“downturn LGD”** – calibrated to economic downturn conditions, not benign times.

3. **EAD – Exposure At Default**

   * Amount you are exposed to **at the moment of default**:

     * On-balance exposure + expected usage of limits / undrawn lines.
   * For revolving/OBS facilities you must model **credit conversion** into EAD.

4. **M – Effective Maturity**

   * Effective remaining maturity of the exposure (years), usually between 1 and 5.
   * Captures the fact that **longer tenor ⇒ more risk** (more time for bad things to happen).

These four drive both **expected loss** and **unexpected loss (capital)**.

---

## 12.3 Expected Loss (EL) and regulatory capital (UL) under IRB

### 12.3.1 Expected Loss

Under Basel IRB:

$$
\\text{EL} = PD \\times LGD \\times EAD
$$

This is the **average loss** the bank expects each year on that exposure. Basel documents and multiple summaries state exactly this relationship.

### 12.3.2 Unexpected Loss (capital) – concept

Regulatory capital under IRB is designed to cover **unexpected loss** =
“loss at a very high confidence (99.9%) − expected loss”.

Basel uses an **asymptotic single risk factor (ASRF)** model (essentially a Vasicek-style portfolio model) to compute capital charge **K**.

For a typical corporate exposure, the regulatory formula (simplified description):

* Compute a **correlation** (R(PD)) that depends on PD.
* Transform PD through standard normal inverse CDF and combine with a **99.9% quantile** of portfolio shock.
* Multiply by LGD, subtract EL component, and apply a **maturity adjustment** factor based on M.

The result is:

$$
K = \\text{regulatory capital requirement as a \\% of EAD (per exposure)}
$$

Then:

$$
\\text{RWA} = 12.5 \\times K \\times EAD
$$

(12.5 = 1 / 8% so that 8% × RWA = capital).

You don’t need to memorise the full formula; **structure** is enough for interviews:

> “IRB capital uses a Vasicek-type formula where K is roughly LGD × (tail default probability at 99.9%) – EL, scaled by maturity; RWA is then 12.5 × K × EAD.”

---

## 12.4 Foundation vs Advanced IRB (F-IRB vs A-IRB)

Basel offers two flavours:

| Parameter | Foundation IRB (F-IRB)                                                   | Advanced IRB (A-IRB)                             |
| --------- | ------------------------------------------------------------------------ | ------------------------------------------------ |
| **PD**    | Bank estimates (subject to standards & floors)                           | Bank estimates                                   |
| **LGD**   | **Supervisory values** (fixed by regulator by collateral type/seniority) | Bank estimates (subject to minimum LGD floors)   |
| **EAD**   | **Supervisory rules** (e.g. fixed CCFs)                                  | Bank estimates (subject to floors & constraints) |
| **M**     | Bank calculates using rules                                              | Bank calculates                                  |

* For **corporate / bank / sovereign**: both F-IRB and A-IRB possible.
* For **retail**: only **A-IRB** (bank must estimate all parameters).

**Idea**: F-IRB = half-way house; A-IRB = fully internal modelling, but more stringent standards.

---

## 12.5 IRB minimum requirements (governance side)

To use IRB, a bank must meet **strict minimum standards** – Basel dedicates full chapters (CRE33/36) to this, also summarised in many supervisory docs.

Key themes you should be able to say:

1. **Rating system design**

   * Clear **obligor rating** (borrower grade) and **facility rating / LGD**.
   * Meaningful **risk differentiation** across grades.

2. **Definition of default**

   * Harmonised default definition (90+ DPD, distressed restructuring etc.) used **consistently** for models and reporting.

3. **Data history**

   * Sufficient years of **internal default and loss data**:

     * PD: long-run default rates,
     * LGD: downturn experience,
     * EAD: credit conversion behaviour.

4. **Model development & validation**

   * Documented methodology, segmentation, calibration.
   * Independent **validation** and **backtesting**.

5. **Use test**

   * Ratings and parameters must be used in **day-to-day risk management**, pricing, limits – not just for regulatory capital.

6. **Governance**

   * Board & senior management oversight,
   * Regular review, audit, model risk management.

These are exactly the kind of **ICAAP / model governance** points Indian regulators also emphasise in IRB presentations.

---

## 12.6 Expected loss vs provisions – capital adjustment

Under IRB, **EL is not covered by capital** – it should be covered by **provisions**. Capital covers **unexpected loss**.

Basel therefore requires a comparison:

* Compute **total IRB EL** = Σ PD × LGD × EAD across IRB exposures.
* Compare with **total accounting provisions** (specific + general) related to those exposures.

Then:

* If **EL > provisions**:

  * **Shortfall** = EL − provisions is deducted **50% from CET1, 50% from Tier 1/Tier 2** (depending on version; details vary slightly across frameworks).
* If **EL < provisions**:

  * **Excess provisions** (up to a cap) can be included in **Tier 2** capital.

Conceptual takeaway:

> “Under IRB, expected credit losses are supposed to be provisioned; capital is adjusted so that IRB banks are not double-counting or under-reserving.”

---

## 12.7 Basel 3.1 / “Endgame” – why IRB was reformed

Post-crisis, regulators saw **huge differences** in RWA across banks with similar portfolios, driven by internal models. Basel 3.1 reforms therefore aim to:

1. **Make SA stronger and more risk-sensitive**.
2. **Constrain the use of IRB** (especially for low-default portfolios).
3. Introduce an **aggregate output floor** so that internal models can’t push RWA too low relative to SA.

Quote-style summary from BCBS/EBA:

* Reforms revise SA for credit risk, revise IRB for credit risk, revise CVA & operational risk, and **introduce an output floor to ensure RWA from internal models is no lower than 72.5% of RWA from SA.**

---

## 12.8 Basel 3.1 – constraints on IRB

Key elements (you will *definitely* get points for knowing these at a high level):

### 12.8.1 Where IRB is **no longer allowed**

Basel 3.1 removes or restricts IRB for some **low-default portfolios**, because models were too unstable there.

* **No A-IRB** for:

  * Exposures to **large corporates** above a certain revenue threshold,
  * Exposures to **banks and other financial institutions**.
* For some of these, only **F-IRB** or **SA** is allowed.
* **IRB for equity exposures** is largely removed; equity must use **standardised** or **simple approaches**.

Idea: where data is thin and modelling is fragile, Basel wants **less modelling, more standardisation**.

### 12.8.2 Input floors and parameter constraints

Basel 3.1 introduces stronger **input floors** for IRB parameters:

* **PD floors**:

  * e.g. for many corporate / bank / sovereign exposures, PD used in formula **cannot be below 0.05%** (higher than old 0.03%).
* **LGD floors**:

  * e.g. minimum LGD of **25% for unsecured corporate exposures**, lower floors for specific collateral types.
* **EAD constraints**:

  * Minimum CCFs for certain undrawn commitments,
  * Restrictions on how low modelled EAD can go.

These are meant to stop very optimistic models producing unrealistically low capital.

### 12.8.3 Stronger minimum standards

Basel also tightens:

* Default definition alignment,
* Data quality,
* Model validation expectations.

Supervisors (BoE/PRA, ECB, etc.) are updating IRB rules to reflect these Basel 3.1 changes.

---

## 12.9 Basel 3.1 – the aggregate output floor (72.5%)

This is *the* headline reform.

### 12.9.1 Definition

The **output floor** says:

> Bank’s total RWA based on internal models **cannot** be lower than **72.5%** of RWA computed under the **revised Standardised Approaches**.

More explicitly (as many summaries put it):

$$
\\text{RWA}_{\\text{final}} = \\max\\left(\\text{RWA}_{\\text{internal}},\\ 72.5\\% \\times \\text{RWA}_{\\text{SA}}\\right)
$$

Where:

* $\\text{RWA}_{\\text{internal}}$ = sum of IRB credit RWA + internal model market RWA + other model-based components.
* $\\text{RWA}_{\\text{SA}}$ = RWA if the bank applied **only Standardised Approaches** (for credit, market, op risk, etc.), under the revised rules.

The 72.5% calibration and phased-in timeline (starting from 50%, rising to 72.5%) are documented in multiple Basel 3.1 summaries.

**Important nuance**:

* Output floor is applied at **total RWA level**, **not per exposure**.

### 12.9.2 Intuition

* IRB still matters – you can get capital benefit from being more risk-sensitive.
* But **no matter how low models say your RWA is, you can’t go below 72.5% of SA RWA**.

So SA becomes a **benchmark** that sets a **hard floor** under model-based capital.

For your RWA engine design:

> Even if a bank is IRB, it must **always run SA in parallel** to calculate the floor.

That’s a nice system design insight to mention in interviews.

---

## 12.10 How SA and IRB co-exist in a Basel 3.1 bank

Under Basel 3.1:

1. **Some portfolios** must use **SA** (e.g., some equity, some low-default corporate/bank exposures).
2. **Some portfolios** may use **F-IRB** (PD internal, LGD/EAD supervisory).
3. **Some portfolios** may use **A-IRB** (PD, LGD, EAD internal).

At total-bank level:

* Compute **RWA_internal** =

  * SA credit RWA (for SA portfolios)

  - IRB credit RWA (for IRB portfolios)
  - other risk RWAs (market, op, CVA, etc.).

* Compute **RWA_SA** =

  * RWA assuming **everything** uses standardised frameworks.

* Then apply **output floor**:
  **RWA_final = max(RWA_internal, 0.725 × RWA_SA)**.

So IRB world is: **multi-approach + aggregate floor**.

---

## 12.11 India’s status – IRB still conceptual, SA is the workhorse

### 12.11.1 RBI’s IRB guidelines

RBI has formally acknowledged IRB as part of Basel II/III framework:

* 2005 note: lists **Standardised, Foundation IRB, Advanced IRB** as credit risk options under Basel II.
* 2011 circular **“Implementation of the Internal Rating Based (IRB) Approach for Credit Risk”** lays out framework for Indian banks to migrate to IRB (F-IRB first, then A-IRB), subject to strict eligibility and RBI approval.

RBI & CAFRAL presentations highlight:

* Very few Indian banks are ready in terms of **data & systems**.
* IRB adoption is a **long-term objective**; RBI wants robust internal rating systems and governance first.

### 12.11.2 Practical state today

* **For credit risk capital**, Indian banks are effectively on **Standardised Approach**; IRB implementation is **limited / not yet the mainstream** route.
* However, Indian regulators **know** and **reference IRB**, and many global banks operating in India **do** use IRB at group level.

So for your role:

> You don’t need to implement full IRB calculations for Indian books today, but you **must be able to explain IRB conceptually and how Basel 3.1 constraints and output floor change the global picture** – especially if you work with global banks/clients or vendor products.

---

## 12.12 If your web app evolved from SA to IRB + Basel 3.1

This is where you show **product + risk** thinking.

To extend your SA RWA engine (Modules 4–9) to IRB + Basel 3.1, you’d need:

1. **Additional data fields**

   * Internal **rating grade** per obligor and facility,
   * PD, LGD, EAD, M estimates,
   * Default history and loss data for backtesting,
   * Flags for asset class eligibility (SA vs F-IRB vs A-IRB).

2. **Two parallel calculators**

   * **IRB calculator**:

     * Use PD, LGD, EAD, M and regulatory risk-weight formula to compute K and RWA_IRB.
   * **Standardised calculator (Basel 3.1 SA)**:

     * Updated SA risk weights (more granular rating buckets, revised real estate treatment, etc.) to compute RWA_SA.

3. **Output floor logic**

   * At total-bank level:

     * Show:

       * RWA_internal, RWA_SA, 72.5% × RWA_SA, and **RWA_final**.
   * Visually highlight how **floor binds** (i.e., when internal RWA < 72.5% of SA).

4. **Parameter floors and eligibility rules**

   * Validate that:

     * PD ≥ regulatory floor,
     * LGD, EAD respect minimums,
     * IRB used only for permitted portfolios.
   * Show errors / warnings when model inputs violate Basel 3.1 constraints.

5. **Capital + headroom analytics**

   * For any scenario:

     * Show CET1, Tier 1, Total capital ratios using **RWA_final**.
     * Show how much capital is “lost” due to **output floor binding**.

That kind of app would *really* impress: it shows you understand **Basel 3.1 architecture**, not just formulas.

---

## 12.13 Bulb section – IRB & Basel 3.1 interview bullets 💡

💡 **Bulb 1 – Explain IRB in one clean line**

> “Under IRB, banks use their own estimates of PD, LGD, EAD and maturity in a Basel-specified formula to calculate risk-weighted assets; the formula comes from a portfolio credit risk model calibrated at 99.9% confidence.”

---

💡 **Bulb 2 – F-IRB vs A-IRB**

> “In Foundation IRB the bank estimates only PD (LGD/EAD are supervisory), whereas in Advanced IRB the bank also estimates LGD and EAD, subject to floors and strict minimum standards.”

---

💡 **Bulb 3 – EL vs capital**

> “IRB separates **expected loss** (PD×LGD×EAD, covered by provisions) from **unexpected loss** (capital). If EL is above provisions, the shortfall is deducted from capital; if provisions exceed EL, some excess can go into Tier 2.”

---

💡 **Bulb 4 – Basel 3.1 constraints on IRB**

> “Basel 3.1 restricts IRB for low-default portfolios, introduces PD/LGD input floors and stricter standards, and makes the **Standardised Approach more risk-sensitive** – all to reduce unwarranted RWA variability.”

---

💡 **Bulb 5 – Output floor formula**

> “In the endgame, total RWA is **max(RWA_internal, 72.5% × RWA_SA)**, so even IRB banks must calculate SA RWA for the whole book; SA becomes the benchmark floor under model-based capital.”

---

💡 **Bulb 6 – India positioning**

> “RBI has issued IRB guidelines and a few large banks have explored it, but in practice Indian banks use the **Standardised Approach** for credit risk; IRB is mainly relevant conceptually and for global groups.”

---
`
            }
          ]
        }
      ]
    },
    {
      id: "13",
      slug: "summary-reference",
      title: "Module 13 – Summary & Reference Module",
      goal: "Provide a compact, structured recap of the entire curriculum for ongoing reference.",
      sections: [
        {
          id: "13-1",
          title: "Master Class Notes",
          content: [
            {
              type: "markdown",
              content: `# Module 13 – Summary & Reference Module

## 13.1 The Big Picture: From Basel I to Basel 3.1

### 13.1.1 Evolution

* **Basel I (1988):** Simple, flat risk weights (0%, 20%, 50%, 100%). No operational risk.
* **Basel II (2004):** Introduced **3 Pillars**, **IRB approach**, and **Operational Risk**.
* **Basel III (2010+):** Response to 2008 crisis.
  * **Quality:** Stricter definition of CET1.
  * **Quantity:** Higher minimum ratios (4.5% / 6% / 8%).
  * **Buffers:** CCB, CCyB.
  * **Leverage Ratio:** Non-risk-based backstop.
  * **Liquidity:** LCR & NSFR.
* **Basel 3.1 (Endgame):**
  * **Output Floor (72.5%)**.
  * **Revised SA** (more granular).
  * **Constraints on IRB**.

### 13.1.2 The 3 Pillars (Basel II/III)

1. **Pillar 1 (Minimum Capital Requirements):**
   * Rules for calculating RWA (Credit, Market, Op Risk) and minimum capital.
   * **Hard numbers**.
2. **Pillar 2 (Supervisory Review - ICAAP/SREP):**
   * Banks assess their own risk (ICAAP) including risks not in Pillar 1 (IRRBB, concentration).
   * Supervisors review and add extra capital charges (Pillar 2A/2B).
3. **Pillar 3 (Market Discipline):**
   * **Disclosure** requirements (DF tables) so market can judge risk.

---

## 13.2 Capital Structure (The Numerator)

**Total Capital = CET1 + AT1 + Tier 2**

1. **CET1 (Common Equity Tier 1):**
   * **Purest capital:** Common shares + Retained earnings.
   * **Absorbs losses immediately** (going concern).
   * **Adjustments:** Deduct goodwill, intangibles, DTAs.
2. **AT1 (Additional Tier 1):**
   * **Perpetual bonds** with loss absorption (write-down or conversion).
   * No maturity, discretionary coupons.
3. **Tier 2:**
   * **Subordinated debt** (min 5 year maturity).
   * **Gone concern:** Absorbs losses in liquidation.
   * Includes general provisions (up to 1.25% of RWA).

**Ratios:**
* CET1 Ratio = CET1 / RWA
* Tier 1 Ratio = (CET1 + AT1) / RWA
* Total Capital Ratio (CRAR) = Total Capital / RWA

---

## 13.3 Credit Risk RWA (The Denominator - Part 1)

### 13.3.1 Standardised Approach (SA) Pipeline

1. **Classification:**
   * Identify **Exposure Class** (Sovereign, Bank, Corporate, Retail, Residential Mortgage, CRE, Equity, Defaulted).
2. **Credit Risk Mitigation (CRM):**
   * **Financial Collateral:** Apply haircuts ($H_c, H_{fx}$) to collateral.
   * **Guarantees:** Substitute risk weight of guarantor.
   * **Netting:** Reduce EAD.
3. **Risk Weighting:**
   * Look up RW based on **Rating** (External Credit Rating) or **Regulatory Rules** (e.g. 75% for reg retail, 35%/50% for mortgages).
   * **RW depends on:** Asset class, Rating, LTV (for mortgages), Granularity (for retail).
4. **RWA Calculation:**
   * $RWA = EAD \\times RW$

### 13.3.2 Internal Ratings-Based (IRB)

* **Parameters:**
  * **PD:** Probability of Default.
  * **LGD:** Loss Given Default.
  * **EAD:** Exposure at Default.
  * **M:** Maturity.
* **Formula:** $K = f(PD, LGD, M)$. $RWA = 12.5 \\times K \\times EAD$.
* **F-IRB:** Bank estimates PD; Regulator gives LGD, EAD.
* **A-IRB:** Bank estimates PD, LGD, EAD.
* **Basel 3.1:** Output floor (72.5% of SA), input floors, no IRB for some portfolios.

---

## 13.4 Other Risks (The Denominator - Part 2)

### 13.4.1 Market Risk
* Risk of loss in **Trading Book** due to price movements.
* **Approaches:**
  * **Standardised:** Risk charges for Interest Rate, Equity, FX, Commodity risk.
  * **IMA (Internal Models):** VaR (Value at Risk), Stressed VaR.
  * **FRTB (Fundamental Review of the Trading Book):** New stricter standard (Sensitivities-based + Expected Shortfall).

### 13.4.2 Operational Risk
* Risk of loss from inadequate processes, people, systems, or external events.
* **Approaches:**
  * **BIA (Basic Indicator):** 15% of average gross income.
  * **TSA (Standardised):** 12-18% of gross income by business line.
  * **AMA (Advanced):** Internal models (phased out in Basel 3.1).
  * **SMA (Standardised Measurement Approach):** New Basel 3.1 standard (Business Indicator Component $\\times$ Loss Component).

---

## 13.5 Capital Planning & Reporting

### 13.5.1 Buffers & Planning
* **CCB (2.5%):** Conservation buffer.
* **CCyB (0-2.5%):** Countercyclical buffer.
* **Headroom:** Actual Capital - (Minimum + Buffers).
* **Planning:** Projecting Supply (Retained Earnings) vs Demand (RWA Growth).

### 13.5.2 Reporting (Module 10)
* **DF Tables:** Pillar 3 disclosures (DF-2 Capital, DF-3/4 Credit, etc.).
* **Regulatory Returns:** XBRL submissions to RBI.
* **Consistency:** RWA engine $\\to$ Returns $\\to$ Disclosures $\\to$ Financials.

---

## 13.6 Key Formulas Cheat Sheet

| Concept | Formula |
| :--- | :--- |
| **RWA (SA)** | $\\sum (EAD_i \\times RW_i)$ |
| **CET1 Ratio** | $CET1 / RWA_{Total}$ |
| **Leverage Ratio** | $Tier 1 / Total Exposure_{Leverage}$ |
| **Haircut Adjusted Collateral** | $C_{star} = C \\times (1 - H_c - H_{fx})$ |
| **Net Exposure (Simple)** | $E^* = \\max(0, E - C_{star})$ |
| **Capital Headroom** | $Capital_{Actual} - (RWA \\times Ratio_{Min+Buffer})$ |
| **Output Floor** | $RWA_{Final} = \\max(RWA_{Internal}, 0.725 \\times RWA_{SA})$ |

---

## 13.7 Interview "Power Phrases"

* **"Capital is the numerator, Risk is the denominator."**
* **"RWA is a common currency for risk."**
* **"CRM reduces RWA density."**
* **"Pillar 3 is about market discipline."**
* **"Basel 3.1 restores credibility via the output floor."**
* **"ICAAP is about capital for the future, not just today."**

---
`
            }
          ]
        }
      ]
    }
  ]
};
