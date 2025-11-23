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

* A bank **takes risk**: lending, investing, trading, providing guarantees, etc.
* Some loans will **default**, markets will move, operations will fail.
* To withstand these losses without failing, the bank needs a **loss-absorbing buffer**.

That buffer is **regulatory capital**.
“Capital adequacy” asks:

> Does the bank have **enough** regulatory capital compared to the **risk-weighted** size of its exposures?

Regulators measure this through **capital ratios**, especially:

$$
\\text{Capital Adequacy Ratio (CAR / CRAR)} = \\frac{\\text{Regulatory Capital}}{\\text{Risk-Weighted Assets (RWA)}}
$$

* **Regulatory capital** = the parts of a bank’s funding that regulators recognise as loss-absorbing (CET1, AT1, Tier 2 – detailed in Modules 2–3).
* **RWA** = the bank’s exposures, but **adjusted for risk** (credit, market, operational, etc.).

BCBS standards (Basel I, II and III) are built around a **minimum total capital ratio of 8% of RWA**, with more detailed minimums for CET1 and Tier 1 under Basel III.

In India, the Reserve Bank of India (RBI) requires a **minimum total capital adequacy ratio of 9% of RWA**, higher than the Basel 8% benchmark. On top of this, banks must hold a **Capital Conservation Buffer (CCB) of 2.5% of RWA in CET1**, bringing the effective total capital requirement to **11.5% of RWA** once fully phased in.

> In practice, “CAR” and “CRAR” are used interchangeably for the capital-to-RWA ratio.`
            }
          ]
        },
        {
          id: "1-2",
          title: "1.2 Why do capital adequacy rules exist?",
          content: [
            {
              type: "markdown",
              content: `Regulators use capital rules to achieve three main objectives.

### 1. Financial stability

Under-capitalised banks are vulnerable:

* A moderate shock can **wipe out equity**.
* This can trigger **runs**, contagion, and a broader financial crisis.

Basel III was introduced after the 2007–09 global financial crisis specifically to **strengthen the resilience** of banks by raising both the **quality and quantity** of capital and by adding capital buffers.

### 2. Protect depositors and the real economy

Most depositors **cannot independently assess** bank risk.

* Capital acts as a **shield** between depositors and unexpected losses.
* Strong capital reduces the probability that depositors or taxpayers have to absorb losses via bail-outs.

### 3. Constrain excessive risk-taking (moral hazard)

Banks fund themselves largely with **other people’s money** (deposits and wholesale funding). Without capital constraints they could:

* Take **very high risk** to maximise short-term returns.
* Rely on expected public support if things go wrong.

Higher capital requirements force banks to keep more of their **own loss-absorbing resources** at risk, reducing incentives to take excessive risk.`
            }
          ]
        },
        {
          id: "1-3",
          title: "1.3 Who sets these rules? Global vs national regulators",
          content: [
            {
              type: "markdown",
              content: `### 1.3.1 Basel Committee on Banking Supervision (BCBS)

* The **Basel Committee on Banking Supervision (BCBS)**, hosted by the **Bank for International Settlements (BIS)** in Basel, develops global standards such as **Basel I, Basel II, Basel III and the “Basel III: Finalising post-crisis reforms” package (Basel 3.1)**.
* These standards are **not laws** by themselves; they are **agreed benchmarks** for bank capital and risk management.

Key idea:

> Basel defines **concepts, minimum ratios and methodologies**.
> Each **national authority** decides how to adopt or **tighten** them in local regulation.

### 1.3.2 National implementation – example: India (RBI)

In India:

* The **Reserve Bank of India (RBI)** is the central bank and primary prudential regulator for banks.
* RBI has implemented Basel II and Basel III through detailed **guidelines, master circulars and master directions**, including the **“Master Circular – Basel III Capital Regulations”** and related updates.
* RBI explicitly states that the **CRAR framework advocated by the Basel Accord** has been adopted for capital adequacy, covering risk on both **on-balance-sheet** and **off-balance-sheet** items.

India’s calibration is **more conservative** than the Basel template:

* Basel minimum total capital ratio: **8% of RWA**.
* RBI minimum CRAR for banks: **9% of RWA**, on an ongoing basis.
* Capital Conservation Buffer (CCB): **2.5% of RWA in CET1**, fully in place from 1 October 2021.

So, in normal conditions, the **effective minimum total capital requirement in India is 11.5% of RWA** (9% minimum + 2.5% CCB), with scope for additional buffers where relevant.`
            }
          ]
        },
        {
          id: "1-4",
          title: "1.4 Where does capital adequacy sit inside the bank?",
          content: [
            {
              type: "markdown",
              content: `Capital adequacy is part of a wider internal ecosystem.

1. **Accounting & financial reporting**

   * Prepares the **balance sheet** and **profit & loss account** under accounting standards (e.g. Ind AS / IFRS).
   * Shows total assets, liabilities and equity – but **not risk-weighted**.

2. **Risk management**

   * Identifies and quantifies:
     * **Credit risk** – borrowers or counterparties defaulting.
     * **Market risk** – movements in interest rates, FX, equities, commodities.
     * **Operational risk** – process failures, fraud, legal and system issues.
   * Sets risk appetite, limits and measurement models.

3. **Regulatory capital / capital adequacy**

   * Uses:
     * Accounting data (on-balance and off-balance exposures).
     * Risk parameters (risk weights, credit conversion factors, etc.).
   * Produces:
     * **Regulatory capital** (CET1, AT1, Tier 2).
     * **RWA** by risk type and portfolio.
     * **Capital ratios**: CET1 ratio, Tier 1 ratio, Total capital ratio (CRAR).
   * Ensures ratios remain **above regulatory minimums plus buffers** at all times.

4. **Stress testing and capital planning**

   * Projects capital and RWA under **baseline and stressed scenarios**.
   * Checks whether the bank stays above requirements in stress.
   * Forms part of **ICAAP** (Internal Capital Adequacy Assessment Process) under Pillar 2.

5. **Disclosures and market communication**

   * Prepares **Pillar 3 disclosures**, annual report sections and investor information.
   * Communicates capital adequacy, leverage, liquidity and key risk metrics to regulators, investors, analysts and rating agencies.

Capital adequacy therefore sits at the **intersection** of:

* Accounting (source of exposure data),
* Risk measurement (RWA),
* Strategy and business planning (capital allocation, growth decisions),
* Supervision and public disclosure.`
            }
          ]
        },
        {
          id: "1-5",
          title: "1.5 Core mechanics: capital, RWA and ratios",
          content: [
            {
              type: "markdown",
              content: `### 1.5.1 Regulatory capital – very high level

At Basel III level, total regulatory capital can be summarised as:

$$
\\text{Total Capital} = \\text{CET1} + \\text{AT1} + \\text{Tier 2} - \\text{Regulatory Deductions}
$$

Where:

* **CET1 (Common Equity Tier 1)** = ordinary shares and related reserves, retained earnings and other qualifying elements, net of adjustments such as goodwill and certain deferred tax assets.
* **AT1 (Additional Tier 1)** = perpetual, subordinated instruments with fully discretionary coupons and loss-absorption features.
* **Tier 2** = lower-tier capital such as dated subordinated debt and certain provisions.

Basel III emphasises both the **quality of capital** (especially CET1) and clear eligibility criteria for AT1 and Tier 2 instruments.

### 1.5.2 Risk-Weighted Assets (RWA) – conceptual structure

Total RWA can be broken down as:

$$
\\text{Total RWA} = \\text{RWA}_{\\text{Credit}} + \\text{RWA}_{\\text{Market}} + \\text{RWA}_{\\text{Operational}} + \\text{(other components)}
$$

- **Credit risk RWA** – exposures to borrowers (sovereign, bank, corporate, retail, etc.), risk-weighted under either the **Standardised Approach (SA)** or **Internal Ratings-Based (IRB)** approaches.
- **Market risk RWA** – trading book positions exposed to market price movements.
- **Operational risk RWA** – based on size and loss experience (e.g. Standardised Measurement Approach).

Basel frameworks state that **minimum capital requirements are calculated for credit, market and operational risk**, and that minimum ratios (CET1, Tier 1, Total capital) are expressed as percentages of **total RWA**.

### 1.5.3 Capital adequacy ratios

The general form:

$$
\\text{Capital Adequacy Ratio (CAR / CRAR)} = \\frac{\\text{Total Regulatory Capital}}{\\text{Total RWA}}
$$

Basel III minimum levels are:

* **CET1 ratio** ≥ **4.5%** of RWA
* **Tier 1 ratio** ≥ **6.0%** of RWA
* **Total capital ratio** ≥ **8.0%** of RWA

These are supplemented by **capital buffers** (CCB, possible CCyB, systemic buffers).

In India:

* **Minimum total capital ratio (CRAR)** = **9% of RWA**.
* **Capital Conservation Buffer** = **2.5% of RWA in CET1** when fully implemented.

Detailed calibrations and buffer mechanics are developed further in later modules.`
            }
          ]
        },
        {
          id: "1-6",
          title: "1.6 Regulatory environment – India-focused view",
          content: [
            {
              type: "markdown",
              content: `### 1.6.1 RBI’s role

RBI’s key roles relevant to capital adequacy:

* **Prudential regulator** – issues norms on capital adequacy, risk management, income recognition, asset classification and provisioning.
* **Supervisor** – conducts onsite inspections and offsite monitoring, and applies the Supervisory Review and Evaluation Process (SREP).
* **Monetary authority and liquidity manager** – indirectly influencing bank balance sheets and risks.

On capital adequacy specifically:

* RBI uses the **CRAR methodology** advocated by the Basel Accord, covering risk in both on- and off-balance sheet items.
* Basel III capital regulations for Indian banks began implementation from **1 April 2013**, on a phased schedule aligned with, but sometimes more conservative than, global timelines.

### 1.6.2 India vs global Basel – stricter calibration

Reasons often cited for India’s more conservative stance (e.g. 9% vs 8% minimum, and early adoption of buffers) include:

* Higher perceived **macro-financial volatility** and concentration risk in certain segments.
* Desire to maintain **strong depositor and investor confidence**.
* Need for additional safety margins during phases when data, systems or models are still evolving towards global best practice.

For analysis and implementation work, it is important to keep both layers in mind:

* The **Basel global template**; and
* The **RBI implementation**, which may impose **higher ratios or additional conditions**.`
            }
          ]
        },
        {
          id: "1-7",
          title: "1.7 How are capital and RWA numbers used in practice?",
          content: [
            {
              type: "markdown",
              content: `### 1.7.1 Internal uses inside the bank

1. **Regulatory compliance monitoring**

   * Regular tracking of:
     * CET1, Tier 1 and Total capital ratios,
     * Leverage ratio,
     * Position relative to CCB and any other buffers.
   * Internal triggers are set **above** regulatory minimums to provide early warning.

2. **Risk appetite and limits**

   * Board and senior management define **target capital levels** and **risk appetite** (for example, a target headroom of 1–2 percentage points above the regulatory stack).
   * Business units receive:
     * **RWA limits** by portfolio or segment, and
     * Capital-usage metrics to incorporate into planning.

3. **Business planning and product strategy**

   * Capital is treated as a **scarce resource**.
   * New products and portfolios are evaluated on both:
     * Risk profile, and
     * **Return on capital** and RWA consumption.

4. **Risk–finance integration**

   * RWA numbers are reconciled to:
     * Accounting exposures,
     * Provisioning and impairments,
     * Internal risk parameters.
   * Change analysis distinguishes between **volume effects**, **mix effects**, and **risk-parameter/CRM effects**.

### 1.7.2 External and supervisory uses

1. **Regulatory reporting and supervision**

   * Banks submit **capital adequacy and RWA returns** to the supervisor at required frequency.
   * Supervisors use these for:
     * Assessing capital adequacy,
     * Setting **Pillar 2 capital add-ons** where needed,
     * Determining any restrictions or supervisory actions.

2. **Pillar 3 disclosures and market discipline**

   * Basel III and corresponding national rules require detailed **Pillar 3 disclosures** on:
     * Capital structure and capital ratios,
     * RWA by risk type and portfolio,
     * Credit risk, CRM and securitisation exposures,
     * Leverage and other key metrics.
   * Investors, analysts and rating agencies use these disclosures to compare risk profiles and capital strength across banks.

3. **Triggers and constraints**

   * Falling into the **capital conservation buffer range** does not necessarily mean breaching minimums, but it triggers **automatic restrictions on distributions** (dividends, share buy-backs, variable remuneration) until capital is rebuilt.`
            }
          ]
        },
        {
          id: "1-8",
          title: "1.8 Key takeaways for Module 1",
          content: [
            {
              type: "markdown",
              content: `**1. Capital adequacy = capital vs risk-weighted size of the balance sheet**

* Numerator: **quality and quantity of regulatory capital** (CET1, AT1, Tier 2).
* Denominator: **risk-weighted assets**, combining credit, market and operational risk.
* Most practical capital actions work by either increasing capital or optimising RWA.

---

**2. Understand the regulatory “stack”**

Always distinguish between:

* **Global Basel minimums** (e.g. CET1 4.5%, Tier 1 6%, Total capital 8%).
* **RBI overlays** (e.g. **9% CRAR minimum** plus **2.5% CCB** = 11.5% effective total capital requirement).
* Any **bank-specific internal targets**, which are usually set above the regulatory minimum stack.

---

**3. RWA is not the same as total assets**

* Total assets are **accounting values**.
* RWA incorporates **risk sensitivity** via risk weights.
* Two banks of similar asset size can have **very different RWA and capital ratios**, depending on portfolio mix, collateral, ratings and CRM.

---

**4. Everything else in the course is a deeper breakdown of CAR = Capital / RWA**

Subsequent modules:

* Decompose the **capital side** (CET1, AT1, Tier 2, buffers).
* Decompose the **RWA side**:
  * Standardised Approach details,
  * Off-balance sheet items and CCFs,
  * CRM, securitisation and other risk types,
  * Data flows, reporting and planning.

Keeping the simple equation

$$
\\text{CAR} = \\frac{\\text{Capital}}{\\text{RWA}}
$$

in mind makes it much easier to connect each later module back to the overall picture.

---

### Reference links for Module 1

[1]: https://www.bis.org/bcbs/basel3.htm "Basel III: international regulatory framework for banks"
[2]: https://www.bis.org/fsi/fsisummaries/defcap_b3.pdf "FSI Executive Summary – Definition of capital in Basel III"
[3]: https://www.bis.org/publ/bcbs128.pdf "International Convergence of Capital Measurement and Capital Standards – A Revised Framework (Basel II)"
[4]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf "Master Circular – Basel III Capital Regulations (example version; always check latest)"
[5]: https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=615 "RBI note on CRAR framework"
[6]: https://www.rbi.org.in/commonman/english/scripts/Notification.aspx?Id=1461 "Prudential Norms on Capital Adequacy – Basel I Framework (9% CRAR minimum)"
[7]: https://www.rbi.org.in/commonman/english/scripts/Notification.aspx?Id=3269 "Basel III Capital Regulations – Review of transitional arrangements (CCB 2.5%)"
[8]: https://www.bis.org/bcbs/publ/d378.pdf "Basel III monitoring report – confirms 4.5% CET1, 6% Tier 1, 8% total capital minimums"`
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
          title: "2.1 Basel timeline – high level",
          content: [
            {
              type: "markdown",
              content: `### Basel I (1988, market-risk amendment 1996)

* First global capital standard issued by the Basel Committee.
* Focus: **credit risk** in the banking book.
* Introduced:

  * **Risk-weighted assets (RWA)** with simple buckets (0%, 20%, 50%, 100%, etc.).
  * A minimum **total capital ratio = 8% of RWA** for internationally active banks.
  * Two tiers of capital: **Tier 1** and **Tier 2** (no CET1 / AT1 split yet).

A 1996 amendment added **market risk capital** for the trading book and allowed both a standardised and an internal-models approach.

---

### Basel II (2004)

Objectives: make capital requirements more **risk-sensitive** and align them better with internal risk measurement.

Main changes:

* Introduced the **Three Pillars**:

  1. Minimum capital requirements,
  2. Supervisory review,
  3. Market discipline.

* Added capital for **operational risk** under Pillar 1 (on top of credit and market risk).

* Introduced:

  * **Standardised Approaches** for credit and operational risk, and
  * **Internal Ratings-Based (IRB)** approaches for credit risk.

The **8% minimum total capital ratio** against total RWA remained unchanged; what changed was **how RWA is calculated**.

---

### Basel III (2010 onwards)

Basel II did not fully address problems revealed in the 2007–09 global financial crisis (insufficient high-quality capital, under-estimated risks, inadequate liquidity). Basel III is a **strengthening and extension** of Basel II.

Key enhancements:

* **Higher and better-quality capital**, especially CET1.

* Introduction of **capital buffers** (Capital Conservation Buffer and Countercyclical Buffer).

* A **leverage ratio** as a non-risk-based backstop.

* **Liquidity standards**:

  * Liquidity Coverage Ratio (**LCR**),
  * Net Stable Funding Ratio (**NSFR**).

* More robust treatment of trading book, securitisation and counterparty credit risk.

---

### Basel 3.1 / “Basel IV” (finalising Basel III)

Official name: **“Basel III: Finalising post-crisis reforms”** (December 2017).

Main themes:

* Stronger **Standardised Approaches** for credit, market and operational risk.
* Restrictions and floors on **IRB models** to reduce unwarranted variability in RWA.
* An **aggregate output floor** so that **model-based RWA cannot fall below 72.5% of RWA under the standardised approaches** once fully phased in.

Detailed mechanics are explored later (especially Modules 4, 8 and 12).`
            }
          ]
        },
        {
          id: "2-2",
          title: "2.2 Basel framework organised by the Three Pillars",
          content: [
            {
              type: "markdown",
              content: `Basel II and Basel III / 3.1 are built on **three mutually reinforcing pillars**:

1. **Pillar 1 – Minimum capital requirements**

   * Quantitative rules for:

     * Calculating **RWA** for credit, market and operational risk.
     * Determining how much **regulatory capital** must be held (minimum ratios).

2. **Pillar 2 – Supervisory review process**

   * Banks must assess their **overall capital adequacy** relative to all material risks (the **Internal Capital Adequacy Assessment Process – ICAAP**).
   * Supervisors perform their own assessment (**Supervisory Review and Evaluation Process – SREP**) and can require **additional capital or qualitative measures**.

3. **Pillar 3 – Market discipline**

   * **Disclosure** requirements on:

     * Capital structure and capital ratios,
     * RWA by risk type and exposure class,
     * Risk management frameworks and key risk parameters.

   * Objective: improve **transparency** so that market participants can assess banks and apply discipline.

A useful mapping:

* **Pillar 1** – formula-driven **minimum capital**.
* **Pillar 2** – **additional capital and governance expectations**.
* **Pillar 3** – **public transparency**.

---

### Reference links for Module 2

1. **Basel II comprehensive version (includes 1988 Accord & market-risk amendment)** – International Convergence of Capital Measurement and Capital Standards, BCBS.
   \`https://www.bis.org/publ/bcbs128.pdf\`

2. **Basel III main capital text** – Basel III: A global regulatory framework for more resilient banks and banking systems.
   \`https://www.bis.org/publ/bcbs189.htm\`

3. **Basel III: Finalising post-crisis reforms (Basel 3.1 / Endgame)** – output floor and revised approaches.
   \`https://www.bis.org/bcbs/publ/d424.htm\`

4. **Pillar 3 disclosure requirements – consolidated and enhanced framework**.
   \`https://www.bis.org/bcbs/publ/d400.htm\`

5. **Basel III leverage ratio framework and disclosure requirements**.
   \`https://www.bis.org/publ/bcbs270.htm\`

6. **Basel III: The Liquidity Coverage Ratio (LCR)**.
   \`https://www.bis.org/publ/bcbs238.pdf\`

7. **Basel III: The Net Stable Funding Ratio (NSFR)**.
   \`https://www.bis.org/bcbs/publ/d295.pdf\`

8. **RBI – Draft/Final guidelines on New Capital Adequacy Framework (Basel II / NCAF) and Three Pillars**.
   \`https://rbi.org.in/upload/notification/pdfs/61023.pdf\`

9. **RBI – Master Circular / notifications on Basel III Capital Regulations and implementation from 1 April 2013**.
   Example master circular entry:
   \`https://www.rbi.org.in/CommonPerson/english/Scripts/Notification.aspx?Id=1264\`

10. **EBA – The Basel framework: global regulatory standards for banks (EU implementation via CRR/CRD)**.
    \`https://www.eba.europa.eu/activities/basel-framework-global-regulatory-standards-banks\``
            }
          ]
        },
        {
          id: "2-3",
          title: "2.3 Basel I – building the basic capital ratio",
          content: [
            {
              type: "markdown",
              content: `Basel I is conceptually simple but sets the foundation for everything that followed.

### 2.3.1 Numerator: capital under Basel I

Regulatory capital was split into:

* **Tier 1 capital** – mainly core equity (paid-up capital and disclosed reserves).
* **Tier 2 capital** – supplementary capital (revaluation reserves, certain subordinated debt, general provisions, etc.).
* Tier 2 that counted for regulatory capital was **capped at 100% of Tier 1**.

Total capital (Basel I):

$$
\\text{Total Capital} = \\text{Tier 1} + \\text{Tier 2} \\quad (\\text{subject to regulatory caps})
$$

### 2.3.2 Denominator: RWA with simple buckets

Assets were grouped into broad risk-weight categories (0%, 20%, 50%, 100%) based on counterparty type and risk.

Conceptually:

$$
\\text{RWA} = \\sum_j \\left(\\text{Exposure}_j \\times \\text{Risk Weight}_j\\right)
$$

Examples (high level):

* Claims on certain sovereigns → 0%
* Inter-bank claims → 20%
* Residential mortgages → 50%
* Corporate loans → 100%

### 2.3.3 Basel I capital ratio

Basel I required:

$$
\\frac{\\text{Total Capital}}{\\text{RWA}} \\ge 8\\%
$$

This **8% minimum total capital ratio** remains the global template in Basel II and Basel III (before capital buffers and national overlays).`
            }
          ]
        },
        {
          id: "2-4",
          title: "2.4 Basel II – more risk-sensitive and the Three Pillars",
          content: [
            {
              type: "markdown",
              content: `Basel II preserves the **8% minimum**, but fundamentally changes **how RWA is calculated** and formalises the Three Pillars.

### 2.4.1 Pillar 1 in Basel II

Minimum capital requirements cover three major risk categories:

1. **Credit risk**

   Approaches:

   * **Standardised Approach (SA)** – uses regulator-prescribed risk weights, often based on external ratings and exposure class.
   * **IRB approaches** – banks estimate internal parameters such as **PD**, **LGD**, **EAD** which are then used in regulatory formulas.

2. **Market risk**

   * Standardised and internal models approaches for trading book positions and FX / commodities.

3. **Operational risk**

   * Basic Indicator, Standardised, or Advanced Measurement approaches (AMA).

If we define:

$$
\\text{Total RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}
$$

then the Basel II minimum condition remains:

$$
\\frac{\\text{Total Capital}}{\\text{Total RWA}} \\ge 8\\%
$$

### 2.4.2 Pillar 2 in Basel II

Core elements:

* Banks must operate an **ICAAP**, assessing whether capital is adequate for:

  * All material risks (including those not fully captured in Pillar 1, e.g. concentration risk, interest-rate risk in the banking book, reputational risk).
  * Their business model, strategy and stress scenarios.

* Supervisors conduct **SREP** and can:

  * Require **additional capital (“Pillar 2 add-ons”)**,
  * Impose **risk-management or governance improvements**,
  * In serious cases, apply other supervisory measures.

### 2.4.3 Pillar 3 in Basel II

Pillar 3 introduces **public disclosure requirements** on:

* Capital structure and adequacy,
* Risk exposure amounts,
* Risk-management systems and methodologies.

The goal is to make **market discipline** a complement to Pillars 1 and 2.`
            }
          ]
        },
        {
          id: "2-5",
          title: "2.5 Basel III – strengthening each Pillar",
          content: [
            {
              type: "markdown",
              content: `Basel III keeps the three pillars but **tightens** and **extends** them.

### 2.5.1 Pillar 1 under Basel III

1. **Capital quality and minimums**

   * Clear split into:

     * **CET1**,
     * **Additional Tier 1 (AT1)**,
     * **Tier 2**.

   * Stricter eligibility criteria emphasising permanence and loss-absorption.

   * Basel template minimum ratios (before buffers):

     * **CET1 ratio ≥ 4.5% of RWA**,
     * **Tier 1 ratio ≥ 6% of RWA**,
     * **Total capital ratio ≥ 8% of RWA**.

2. **Capital buffers**

   * **Capital Conservation Buffer (CCB)**:

     * **2.5% of RWA in CET1** above the minimum.
     * Breaching it triggers limits on distributions until capital is rebuilt.

   * **Countercyclical Capital Buffer (CCyB)**:

     * 0–2.5% of RWA in CET1, set by national authorities to lean against excessive credit growth.

   * Some jurisdictions also add **systemic risk buffers** for systemically important banks.

3. **Leverage ratio**

   * Non-risk-based backstop:

$$
\\text{Leverage Ratio} = \\frac{\\text{Tier 1 Capital}}{\\text{Exposure Measure}} \\ge 3\\%
$$

* Exposure measure includes on-balance sheet exposures, derivatives, securities-financing transactions and certain off-balance sheet items.

4. **Liquidity standards**

   * **LCR** (short-term liquidity resilience):

$$
\\text{LCR} = \\frac{\\text{High-Quality Liquid Assets (HQLA)}}{\\text{Net cash outflows over 30 calendar days}} \\ge 100\\%
$$

* **NSFR** (structural funding stability):

$$
\\text{NSFR} = \\frac{\\text{Available Stable Funding (ASF)}}{\\text{Required Stable Funding (RSF)}} \\ge 100\\%
$$

5. **Enhanced risk coverage**

   * Revised frameworks for:

     * Securitisation,
     * Counterparty credit risk,
     * Trading book (Fundamental Review of the Trading Book – FRTB),
     * Operational risk (Standardised Measurement Approach).

### 2.5.2 Pillar 2 under Basel III

* Greater emphasis on **stress testing**, **forward-looking capital planning** and **systemic risk considerations**.
* ICAAP and SREP expectations are more detailed and documented.
* Supervisors can impose **Pillar 2 capital guidance or requirements**, and other supervisory measures.

### 2.5.3 Pillar 3 under Basel III

* Introduction of **standardised tables and templates** to make disclosures more consistent and comparable.
* The **consolidated and enhanced Pillar 3 framework** (2017 and subsequent updates) sets out detailed templates for capital, RWA, leverage, liquidity and risk-type-specific disclosures.`
            }
          ]
        },
        {
          id: "2-6",
          title: "2.6 Implementation and calibration by jurisdiction",
          content: [
            {
              type: "markdown",
              content: `Basel standards are **minimum international benchmarks**; they are implemented through local laws and regulations, often with **stricter calibration**.

### 2.6.1 European Union

* The Basel framework is implemented mainly via:

  * **Capital Requirements Regulation (CRR)**, and
  * **Capital Requirements Directive (CRD)**.

* The **European Banking Authority (EBA)** develops technical standards, reporting templates and guidelines to implement many detailed elements (liquidity, own funds, internal models, disclosure).

### 2.6.2 India – Reserve Bank of India (RBI)

Key points from RBI communications:

* Basel II in India is referred to as the **New Capital Adequacy Framework (NCAF)** and is explicitly described as resting on **three pillars** (minimum capital, supervisory review, market discipline).
* **Basel III capital regulations** are implemented in India **from 1 April 2013 in a phased manner**, via master circulars and subsequent updates.
* India applies a **higher minimum total capital ratio (CRAR) of 9% of RWA**, plus buffers (notably the 2.5% CCB in CET1 when fully phased in).
* RBI has issued separate guidelines for the **leverage ratio**, **LCR**, and **NSFR**, calibrated for Indian conditions.

### 2.6.3 Other jurisdictions (conceptual)

* **United States** – implements Basel via Federal Reserve, OCC and FDIC rules; has its own leverage and stress-testing frameworks on top.
* **Other regulators** (e.g. Bank of England/PRA, Saudi Central Bank, etc.) implement Basel standards through national rulebooks and may apply additional buffers or risk-weight adjustments.

The important idea for analysis and implementation work:

> Basel provides the **architecture and minimums**; each jurisdiction (RBI, ECB/EBA, Fed, etc.) applies its own **calibration, timelines and additional conditions**.`
            }
          ]
        },
        {
          id: "2-7",
          title: "2.7 Basel-level maths and calculation flow",
          content: [
            {
              type: "markdown",
              content: `### 2.7.1 Capital ratios under Basel III

Let:

* $C_{\\text{CET1}}$ = CET1 capital,
* $C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}$ = Tier 1 capital,
* $C_{\\text{Total}} = C_{\\text{CET1}} + C_{\\text{AT1}} + C_{\\text{Tier 2}}$ (after regulatory deductions),
* $\\text{RWA}$ = total risk-weighted assets.

Key ratios:

$$
\\text{CET1 Ratio} = \\frac{C_{\\text{CET1}}}{\\text{RWA}}
$$

$$
\\text{Tier 1 Ratio} = \\frac{C_{\\text{T1}}}{\\text{RWA}}
$$

$$
\\text{Total Capital Ratio} = \\frac{C_{\\text{Total}}}{\\text{RWA}}
$$

Basel III then requires (before buffers):

* CET1 ratio ≥ 4.5% of RWA,
* Tier 1 ratio ≥ 6% of RWA,
* Total capital ratio ≥ 8% of RWA,

and adds buffer requirements (CCB, CCyB, systemic buffers) on top.

### 2.7.2 Conceptual Pillar-1 calculation flow

At a high level, repeated at whatever frequency the regulator requires:

1. **Collect data**

   * Exposure data (on- and off-balance sheet).
   * Counterparty attributes, ratings, collateral, guarantees.
   * Trading book positions.
   * Operational-risk drivers (e.g. business indicator or income).

2. **Classify exposures**

   * Exposure classes (sovereign, bank, corporate, retail, real estate, etc.).
   * Approach applied (Standardised vs IRB, market-risk and op-risk approaches).

3. **Apply rules**

   * Assign **risk weights** or use **regulatory formulas** to compute risk-weighted exposure amounts.
   * Convert off-balance sheet items using **credit conversion factors (CCFs)**.
   * Recognise **credit risk mitigation (CRM)** where the framework allows.

4. **Compute RWA**

   * Sum RWA by exposure and risk type to obtain **total RWA**.

5. **Compute capital and ratios**

   * Determine eligible CET1, AT1 and Tier 2 under the regulatory definition.
   * Calculate capital ratios, leverage ratio and liquidity ratios.

6. **Compare to minima & buffers**

   * Check compliance with Basel / RBI thresholds.
   * Feed results into internal governance and external reporting.

Pillar 2 then adds **additional capital and qualitative measures** if necessary; Pillar 3 requires **disclosure** of key elements.`
            }
          ]
        },
        {
          id: "2-8",
          title: "2.8 Key takeaways for Module 2",
          content: [
            {
              type: "markdown",
              content: `1. **Simple evolution**

   * **Basel I** – 8% capital vs RWA, few risk-weight buckets, mainly credit risk.
   * **Basel II** – same 8%, but much more **risk-sensitive RWA** and the **Three Pillars**.
   * **Basel III** – higher and better-quality capital, explicit **buffers**, **leverage ratio**, **liquidity standards**, and enhanced risk coverage.
   * **Basel 3.1** – refines the framework, strengthens standardised approaches and IRB constraints, and introduces the **output floor** (model RWA ≥ 72.5% of SA RWA).

2. **Three Pillars are the organising logic**

   * **Pillar 1** – formula-based minimum capital requirements.
   * **Pillar 2** – supervisory review, ICAAP/SREP, and possible extra capital.
   * **Pillar 3** – disclosure and market discipline.

3. **Jurisdiction overlay matters**

   * Global Basel standards provide a **baseline**.
   * Jurisdictions like **India** implement them with **higher minimum ratios and local calibration** (for example, 9% CRAR + 2.5% CCB under RBI) and their own timelines.

4. **Everything else in later modules is detail**

   * Modules 3–8 break down the **numerator** (capital structure) and **denominator** (RWA computation) under this Basel / Three-Pillar architecture.
   * Modules 9–12 connect the framework to **data flows, reporting, capital planning and IRB/Endgame topics**.

---

### Reference links for Module 2

[1]: https://www.bis.org/publ/bcbs128.pdf "Basel II comprehensive version"
[2]: https://www.bis.org/publ/bcbs189.htm "Basel III main capital text"
[3]: https://www.bis.org/bcbs/publ/d424.htm "Basel III: Finalising post-crisis reforms (Basel 3.1 / Endgame)"
[4]: https://www.bis.org/bcbs/publ/d400.htm "Pillar 3 disclosure requirements"
[5]: https://www.bis.org/publ/bcbs270.htm "Basel III leverage ratio framework"
[6]: https://www.bis.org/publ/bcbs238.pdf "Basel III: The Liquidity Coverage Ratio (LCR)"
[7]: https://www.bis.org/bcbs/publ/d295.pdf "Basel III: The Net Stable Funding Ratio (NSFR)"
[8]: https://rbi.org.in/upload/notification/pdfs/61023.pdf "RBI – Draft/Final guidelines on New Capital Adequacy Framework"
[9]: https://www.rbi.org.in/CommonPerson/english/Scripts/Notification.aspx?Id=1264 "RBI – Master Circular on Basel III Capital Regulations"
[10]: https://www.eba.europa.eu/activities/basel-framework-global-regulatory-standards-banks "EBA – The Basel framework"`
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
          title: "3.1 Capital quality hierarchy & going-concern vs gone-concern",
          content: [
            {
              type: "markdown",
              content: `Under Basel III, regulatory capital is structured in **three main layers**:

* **Common Equity Tier 1 (CET1)** – highest quality capital.
* **Additional Tier 1 (AT1)** – still going-concern capital, but lower quality than CET1.
* **Tier 2** – gone-concern capital.

Grouped by their role:

* **Tier 1 capital (going-concern):**

  * CET1
  * AT1

* **Tier 2 capital (gone-concern):**

  * Eligible Tier 2 instruments and provisions

**Going-concern capital**
Capital that can absorb losses **while the bank is still operating as a going concern**, without automatically triggering insolvency, resolution, or liquidation. Under Basel III, this is **Tier 1 (CET1 + AT1)**.

**Gone-concern capital**
Capital that mainly absorbs losses **once the bank has failed** and is in liquidation or resolution. This is **Tier 2**.

Basel III also requires that **AT1 and Tier 2 instruments** include features that allow them to absorb losses at the **Point of Non-Viability (PoNV)**—for example, mandatory conversion into equity or write-down when the supervisor determines that the bank would otherwise fail or needs public support.`
            }
          ]
        },
        {
          id: "3-2",
          title: "3.2 Basel III capital structure and minimum ratios",
          content: [
            {
              type: "markdown",
              content: `### 3.2.1 Global Basel structure

At Basel III level, the components are:

* **CET1**

  * Common shares that meet strict CET1 criteria
  * Share premium (stock surplus) on those shares
  * Retained earnings
  * Other reserves and accumulated other comprehensive income that are freely available
  * Eligible minority interest in the common equity of consolidated subsidiaries
  * **Less: CET1 regulatory adjustments** (intangible assets, certain DTAs, investments in other financial institutions, etc.)

* **AT1**

  * Qualifying AT1 instruments (that are not CET1)
  * Associated share premium
  * Eligible AT1 instruments issued by subsidiaries and held by third parties
  * **Less: AT1-specific regulatory adjustments**

* **Tier 2**

  * Qualifying Tier 2 debt and preference instruments
  * Associated share premium
  * Eligible Tier 2 instruments issued by subsidiaries and held by third parties
  * Certain **loan-loss provisions / general provisions** subject to caps
  * **Less: Tier 2-specific regulatory adjustments**

Aggregations:

$$
\\text{Tier 1 Capital} = \\text{CET1} + \\text{AT1}
$$

$$
\\text{Total Capital} = \\text{Tier 1} + \\text{Tier 2}
$$

**Basel III (global template) minimum ratios (before buffers):**

* CET1 ratio ≥ **4.5%** of RWA
* Tier 1 ratio ≥ **6.0%** of RWA
* Total capital ratio ≥ **8.0%** of RWA

On top of this, Basel III prescribes buffers (capital conservation buffer and counter-cyclical buffer) to be held in **CET1**.

### 3.2.2 India (RBI) – capital stack and minima

RBI adopts the same **CET1 / AT1 / Tier 2** stack but with **stricter minimum ratios** for banks.

On a fully-implemented basis (for scheduled commercial banks):

| Requirement                        | % of RWA (India – typical Basel III banks) |
| ---------------------------------- | ------------------------------------------ |
| Minimum CET1                       | **5.5%**                                   |
| Capital Conservation Buffer (CET1) | **2.5%**                                   |
| **CET1 incl. CCB**                 | **8.0%**                                   |
| Minimum Tier 1 (CET1 + AT1)        | **7.0%**                                   |
| Minimum Total Capital (CRAR)       | **9.0%**                                   |
| **Total Capital incl. CCB**        | **11.5%**                                  |

RBI guidelines and IIBF training material also present this as:

* Within the **9%** minimum CRAR, **Tier 1** is expected to be the dominant part, and
* Tier 2 has practical caps relative to Tier 1 (for some entities and legacy frameworks).

For practical purposes, an Indian bank is usually expected to operate **comfortably above 11.5%** total capital ratio under normal conditions.`
            }
          ]
        },
        {
          id: "3-3",
          title: "3.3 CET1 – components, deductions and structure",
          content: [
            {
              type: "markdown",
              content: `### 3.3.1 Role of CET1

**Common Equity Tier 1 (CET1)** is the **highest-quality capital** in the Basel framework. It is designed to absorb losses **immediately and fully**, without needing any contractual trigger, and without creating legal claims on the bank.

Key characteristics:

* Permanently available to the bank
* Fully loss-absorbing
* Most subordinated in the capital structure (equity holders are paid last)

This is why Basel III insists that **most of a bank’s capital stack must be CET1**.

### 3.3.2 Basel III CET1 – high-level definition

The Basel III definition of CET1 (simplified) is:

**Positive CET1 components:**

* Common shares (or equivalent instruments for non-joint stock banks) meeting strict eligibility criteria
* Share premium (stock surplus) on those common shares
* Retained earnings (audited)
* Other disclosed reserves and accumulated other comprehensive income that are freely available
* Eligible minority interests in CET1 of consolidated banking subsidiaries

**Less, CET1 regulatory adjustments:**

* Goodwill and other intangible assets (net of related deferred tax liabilities)
* Certain **deferred tax assets (DTAs)** that rely on future profitability, subject to **10% and 15% threshold** rules (at the consolidated level, for specified items)
* Significant and non-significant investments in the capital of other financial institutions, above thresholds
* Shortfall of provisions to expected loss (for IRB banks)
* Other prudential filters (e.g. certain unrealised gains, cash flow hedge reserves, pension assets), depending on national implementation

Conceptual formula:

$$
\\text{CET1} = \\text{(CET1 instruments and reserves)} - \\text{(CET1 regulatory adjustments)}
$$

### 3.3.3 CET1 components – India (RBI / Indian banks)

RBI’s Basel III regulations and IIBF material set out the CET1 components for Indian banks.

**Positive CET1 elements (India – simplified list):**

1. **Paid-up equity share capital** that meets Basel/RBI criteria for common shares.
2. **Share premium** related to qualifying common shares.
3. **Statutory reserves** (such as the reserve fund under the Banking Regulation Act).
4. **Capital reserves** arising from sale of assets (not revaluation reserves).
5. **Other disclosed free reserves** that are genuinely available to absorb losses.
6. **Retained earnings / balance in the Profit & Loss account** at the previous year-end.
7. **Portion of current-year profits**, subject to conditions (e.g. verification, consistent profitability, and deduction of proposed dividends / tax) as specified by RBI.
8. **Eligible minority interest** in common equity of consolidated banking subsidiaries.

**Less, India-specific CET1 regulatory adjustments:**

* Goodwill and other intangible assets
* DTAs and specified investments in financial sector entities in line with Basel threshold rules
* Shortfall of provisions to expected loss (for IRB banks, if applicable)
* Other filters specified in RBI’s Basel III circular (e.g. certain unrealised gains and reserves)

Conceptually, for an Indian bank:

$$
\\text{CET1}_{\\text{India}} = \\text{Equity Capital} + \\text{(Eligible Reserves)} + \\text{Retained Profits} + \\text{Eligible Minority Interest} - \\text{(Regulatory Adjustments)}
$$

A real-world implementation will follow the **exact line items and adjustments** in RBI’s Basel III capital regulations.`
            }
          ]
        },
        {
          id: "3-4",
          title: "3.4 Additional Tier 1 (AT1) – role, instruments and criteria",
          content: [
            {
              type: "markdown",
              content: `### 3.4.1 Conceptual role

**Additional Tier 1 (AT1)** is still **going-concern capital**, but sits **below CET1 in quality**. Instruments are usually **hybrid securities**:

* They often pay coupons like debt,
* But they are designed to absorb losses **before** depositors and senior creditors, through **conversion or write-down** when triggers are hit or at PoNV.

### 3.4.2 Basel AT1 components

Under Basel III, AT1 consists of:

* Eligible AT1 instruments issued by the bank (that are *not* CET1)
* Associated share premium
* Eligible AT1 instruments issued by consolidated subsidiaries and held by third parties
* Less: AT1-specific regulatory adjustments

### 3.4.3 Basel AT1 – key eligibility criteria (simplified)

The main Basel III entry criteria for AT1 instruments can be summarised as follows:

1. **Issued and fully paid-in**
2. **Subordinated** to depositors, general creditors, and senior subordinated debt
3. **Perpetual** – no contractual maturity
4. **No step-ups or incentives to redeem** (e.g. no large coupon increases at call dates)
5. **Callable only** after at least 5 years and only with:

   * Prior supervisory approval, and
   * Either replacement with capital of equal or better quality, or demonstration that capital will remain well above regulatory minima after call
6. **Fully discretionary coupons / dividends**:

   * Bank must be able to cancel distributions at any time, for any reason
   * Cancellation is not an event of default
   * Cancelled payments are **non-cumulative**
7. No **credit-sensitive** coupon features (coupon cannot link directly to the institution’s own credit spread)
8. If structured as liabilities, they must include **principal loss-absorption** (conversion to CET1 or write-down) when a pre-specified trigger is breached, in addition to PoNV loss-absorption
9. Instruments must **not be funded or purchased by the bank itself** (directly or indirectly)

These criteria ensure that AT1 behaves like **capital in stress**, not like ordinary senior debt.

### 3.4.4 AT1 in India (RBI flavour)

For Indian banks, RBI’s Basel III regulations specify the types of instruments that can count as AT1.

Typical AT1 elements include:

1. **Perpetual Non-Cumulative Preference Shares (PNCPS)** that meet Basel/RBI AT1 criteria.
2. **Perpetual Debt Instruments (PDIs)** (Basel III-compliant AT1 bonds).
3. Share premium related to these instruments.
4. Eligible AT1 instruments issued by consolidated subsidiaries and held by third parties.
5. Less: AT1-specific regulatory deductions.

Key Indian features (summarised from RBI/IIBF material):

* Instruments must be **perpetual** and **subordinated**.
* **Coupons are discretionary and non-cumulative**.
* Terms must include **loss-absorption**, either via write-down or conversion, if:

  * CET1 ratio falls below a specified trigger level, and/or
  * The bank reaches **PoNV**, as determined by RBI.

These are the **Basel III-compliant AT1 bonds** that appear in Indian banks’ capital structures and rating reports.`
            }
          ]
        },
        {
          id: "3-5",
          title: "3.5 Tier 2 – components, criteria and India specifics",
          content: [
            {
              type: "markdown",
              content: `### 3.5.1 Conceptual role

**Tier 2 capital** is primarily **gone-concern capital**.

It is intended to absorb losses **in resolution or liquidation**, once Tier 1 has been exhausted. Instruments can have a **fixed maturity**, and requirements on permanence are less strict than for AT1.

### 3.5.2 Basel Tier 2 – components

Tier 2 includes:

* Qualifying Tier 2 debt instruments (subordinated, long-dated)
* Certain qualifying preference share instruments (where allowed)
* Related share premium
* Eligible Tier 2 instruments issued by consolidated subsidiaries and held by third parties
* **General provisions / loan-loss reserves** recognised within limits
* Less: Tier 2-specific regulatory adjustments

### 3.5.3 Basel Tier 2 – key eligibility criteria (simplified)

Main criteria (from Basel III framework) include:

1. **Issued and fully paid-in**

2. **Subordinated** to depositors and general creditors

3. **Unsecured** (no collateral that elevates seniority)

4. **Minimum original maturity of 5 years** for debt instruments

5. **Amortisation in final 5 years** before maturity – the amount recognised in Tier 2 decreases linearly as remaining maturity falls below 5 years:

   If remaining maturity = $m$ years (with $0 < m \\le 5$):

   $$
   \\text{Recognised Amount} = \\text{Nominal} \\times \\frac{m}{5}
   $$

6. **No step-ups or incentives to redeem**

7. Callable only after 5 years, with supervisory approval and capital replacement / strong capital position

8. No investor right to accelerate repayment except in liquidation/insolvency

9. No credit-sensitive coupons

10. Not funded or purchased by the bank itself

**General provisions / loan-loss reserves** can be recognised in Tier 2 subject to caps:

* Up to **1.25% of credit-risk RWA** for banks using the Standardised Approach
* Up to **0.60% of credit-risk RWA** for IRB banks (excess provisions over expected loss)

### 3.5.4 Tier 2 in India (RBI rules)

RBI’s Basel III capital regulations and related circulars apply these ideas in an Indian context.

Typical **Tier 2 elements for Indian banks** (simplified):

1. **General provisions and loss reserves**, not tied to identified losses, for example:

   * General provisions on standard assets
   * Floating provisions (general in nature)
   * Country risk provisions
   * Provisions for unhedged FX exposures
   * Investment Reserve Account
   * Excess provisions arising from sale of NPAs
   * Countercyclical provisioning buffer
     These are recognised in Tier 2 **up to 1.25% of total credit-risk RWA** (and up to 0.6% of credit-risk RWA for certain IRB excess provisions, where applicable).

2. **Tier 2 debt capital instruments**

   * Subordinated debt with minimum 5-year original maturity
   * Recognised on an amortised basis in the last 5 years to maturity
   * Other conditions similar to Basel (no step-ups, limited call options, etc.)

3. **Preference share capital instruments** where allowed as Tier 2

   * E.g. certain redeemable preference shares meeting Tier 2 criteria

4. **Revaluation reserves**

   * Recognised in Tier 2 but only **45% of the revaluation reserve** is counted (i.e. a 55% discount), due to valuation uncertainty.

5. **Share premium** on Tier 2 instruments

6. **Eligible Tier 2 instruments issued by subsidiaries** and held by third parties

7. Less: **Tier 2 regulatory adjustments / deductions** as per RBI rules

Conceptually:

$$
\\text{Tier 2}_{\\text{India}} = \\text{Subordinated Debt} + \\text{Eligible Preference Shares} + \\text{Allowed Provisions} + 0.45 \\times \\text{Revaluation Reserves} + \\text{Eligible Minority Interest} - \\text{Tier 2 Adjustments}
$$

Actual implementation must follow the detailed lists and caps in the RBI Basel III circulars.`
            }
          ]
        },
        {
          id: "3-6",
          title: "3.6 Capital ratios – formulas and India mapping",
          content: [
            {
              type: "markdown",
              content: `Let:

* $C_{\\text{CET1}}$ = CET1 capital (after all regulatory adjustments)
* $C_{\\text{AT1}}$ = AT1 capital (net of adjustments)
* $C_{\\text{Tier2}}$ = Tier 2 capital (net of adjustments)

Define:

$$
C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}
$$

$$
C_{\\text{Total}} = C_{\\text{T1}} + C_{\\text{Tier2}}
$$

Let total risk-weighted assets (RWA) be:

$$
\\text{RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}} + \\text{other components, if applicable}
$$

Then the **regulatory capital ratios** are:

$$
\\text{CET1 Ratio} = \\frac{C_{\\text{CET1}}}{\\text{RWA}}
$$

$$
\\text{Tier 1 Ratio} = \\frac{C_{\\text{T1}}}{\\text{RWA}}
$$

$$
\\text{Total Capital Ratio (CRAR)} = \\frac{C_{\\text{Total}}}{\\text{RWA}}
$$

**Basel III template minimums (before buffers):**

* CET1 ≥ **4.5%** of RWA
* Tier 1 ≥ **6.0%** of RWA
* Total capital ≥ **8.0%** of RWA

**India (banks – fully implemented Basel III):**

* CET1 ≥ **5.5%** of RWA
* Tier 1 ≥ **7.0%** of RWA
* Total capital ≥ **9.0%** of RWA
* Capital Conservation Buffer (CCB) = **2.5%** of RWA, in CET1

So the **effective target stack** in normal conditions is:

* CET1 (minimum + CCB) = **8.0%**
* Total capital (minimum + CCB) = **11.5%**`
            }
          ]
        },
        {
          id: "3-7",
          title: "3.7 How capital is actually calculated in a bank (process view)",
          content: [
            {
              type: "markdown",
              content: `In practice, the regulatory capital calculation is a structured **data + mapping + adjustment** process, usually run quarterly (and monitored more frequently).

### Step 1 – Determine scope and pull source data

* Use the **regulatory consolidation** perimeter (which may differ from pure accounting consolidation).
* Extract from the general ledger / consolidation system:

  * Share capital accounts
  * Reserves and surplus
  * Retained earnings
  * Hybrid capital accounts (PNCPS, PDIs, etc.)
  * Subordinated debt, preference shares
  * Provisions and loss reserves
  * Minority interests

### Step 2 – Map accounting items to regulatory capital categories

* Maintain a governance-approved **mapping table**:

  * GL code → CET1 / AT1 / Tier 2 / not capital

* Examples:

  * Paid-up equity capital that meets criteria → CET1
  * Securities premium on equity → CET1
  * Perpetual non-cumulative preference shares that meet AT1 criteria → AT1
  * Perpetual debt instruments meeting AT1 rules → AT1
  * Subordinated debt with ≥5 years original maturity and proper terms → Tier 2
  * General provisions on standard assets (subject to conditions) → Tier 2 (within 1.25% cap)
  * Revaluation reserves → Tier 2 (only 45% recognised)

### Step 3 – Compute gross capital amounts

* Sum balances per category to obtain:

  * **Gross CET1 before adjustments**
  * **Gross AT1 before adjustments**
  * **Gross Tier 2 before adjustments**

* Apply RBI rules on inclusion of **current-year profits** in CET1 (audited / verified, net of expected dividends and taxes, etc.).

### Step 4 – Apply regulatory adjustments

For each tier:

* Deduct **goodwill and other intangibles** from CET1.
* Deduct DTAs and certain investments according to the Basel threshold rules and RBI implementation.
* Deduct any **shortfall of provisions to expected loss** (for IRB banks) from CET1.
* Apply any **prudential filters** (e.g. on unrealised gains, hedging reserves, pension assets) as required.

Result:

* $C_{\\text{CET1}}$ – net CET1
* $C_{\\text{AT1}}$ – net AT1
* $C_{\\text{Tier2}}$ – net Tier 2

### Step 5 – Aggregate to Tier 1 and Total capital

$$
C_{\\text{T1}} = C_{\\text{CET1}} + C_{\\text{AT1}}
$$

$$
C_{\\text{Total}} = C_{\\text{T1}} + C_{\\text{Tier2}}
$$

Check any **caps** (e.g. Tier 2 vs Tier 1, or caps on provisions) defined by RBI/Basel.

### Step 6 – Compute capital ratios

* Take total RWA from the **RWA engine** (credit, market, operational, etc.).
* Compute:

  * CET1 ratio
  * Tier 1 ratio
  * Total capital (CRAR)
* Compare against:

  * Basel template minima, and
  * **RBI minimum + buffer** structure.

### Step 7 – Controls and governance

Typical controls include:

* Reconciliation of capital figures with published financial statements.
* Movement analysis: opening vs closing capital by component (issues, redemptions, profit retention, FX, etc.).
* Checks that new issuances actually comply with **Basel/RBI eligibility criteria** (no incentives to redeem, proper subordination, PoNV clauses, etc.).
* Internal and external review as part of ICAAP and supervisory processes.`
            }
          ]
        },
        {
          id: "3-8",
          title: "3.8 Key points and practitioner notes",
          content: [
            {
              type: "markdown",
              content: `1. **Regulatory capital is not the same as “shareholders’ funds”**

   * Some items in accounting equity (e.g. intangibles, certain DTAs) are **not** accepted as high-quality capital and are removed via regulatory adjustments.

2. **Going-concern vs gone-concern is a fundamental split**

   * **Tier 1 (CET1 + AT1)** is designed to absorb losses while the bank continues to operate.
   * **Tier 2** mainly works in failure / resolution scenarios.

3. **India’s calibration is stricter than the Basel template**

   * Instead of 4.5 / 6 / 8 (CET1 / Tier 1 / Total), Indian banks face 5.5 / 7 / 9, plus a **2.5% CET1 CCB**, implying an effective total capital requirement of **11.5%** in normal conditions.

4. **Eligibility of AT1 and Tier 2 instruments is about behaviour in stress**

   * When reviewing an instrument, the central questions are:

     * Will it **remain available** in stress (no hard maturity, or long-dated with amortisation)?
     * Are payments **discretionary** (for AT1) or can they be constrained?
     * Does the instrument clearly **absorb losses** at trigger / PoNV?

5. **Provisions in capital are capped**

   * General provisions and similar buffers can be recognised in **Tier 2 only up to specified percentages of credit-risk RWA** (1.25% for standardised banks, 0.6% for certain IRB excess provisions).

Keeping these points clear makes it much easier to design, read, and explain capital structures and capital adequacy metrics.

---

### Reference links for Module 3

* **[1]** BIS – *Definition of capital in Basel III – Executive Summary* (FSI Summary) – overview of CET1, AT1, Tier 2 structure and regulatory adjustments.
* **[2]** BCBS – *Basel III: A global regulatory framework for more resilient banks and banking systems* – core Basel III text, including capital definitions and minimum ratios (Annex 1).
* **[3]** IIBF – *Basel III Capital Regulations* – India-focused training material summarising RBI’s Basel III implementation (CET1, AT1, Tier 2, minima and buffers).
* **[4]** RBI – *Master Circular / Master Direction – Basel III Capital Regulations* – legally binding implementation of Basel III capital standards for Indian banks.
* **[5]** RBI – various CRAR / capital adequacy circulars – treatment of revaluation reserves (only 45% recognised in Tier 2) and other Tier 2 elements.
* **[6]** IIBF / NCAF material – *Capital Adequacy and Market Discipline* – explanation of Tier 1 / Tier 2 structure, recognition of provisions, and caps relative to RWA.
* **[7]** BIS FSI – *Accounting provisions and prudential filters* / related summaries – global guidance on recognition of general provisions in Tier 2 (1.25% / 0.60% caps).`
            }
          ]
        }
      ]
    },
    {
      id: "4",
      slug: "credit-risk-standardised-approach",
      title: "Module 4 – Credit Risk: Standardised Approach (Global Basel View)",
      goal: "Understand the core mechanics of the Standardised Approach (SA) for credit risk.",
      sections: [
        {
          id: "4-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `## 4.1 Where the Standardised Approach (SA) fits

Under Basel II / III / 3.1, **Pillar 1** minimum capital covers three major risk types:

* Credit risk
* Market risk
* Operational risk

This module focuses on **credit risk under the Standardised Approach (SA)**.

Banks either:

* Use **SA** (mandatory for many banks and many portfolios), or
* Use **IRB** for some portfolios – but even then, SA remains important (e.g. for the **output floor** and for portfolios where IRB is not permitted).

Under SA, the core relationship is:

$$
\\text{RWA}_j = \\text{EAD}_j \\times \\text{Risk Weight}_j
$$

$$
\\text{Total RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

The Basel framework (chapter CRE20) explicitly states that under SA, **risk-weighted assets are calculated as the product of regulatory risk weights and exposure amounts**, with **exposure values taken net of specific provisions and partial write-offs**.

---

## 4.2 Credit risk in the Basel capital framework

For regulatory capital purposes, **credit risk** is:

> The risk that a counterparty or obligor fails to meet its contractual obligations in full and on time, causing a loss to the bank.

It includes (among others):

* Loans and advances
* Bonds and other debt securities
* Commitments, guarantees, letters of credit
* OTC derivatives and securities financing transactions (counterparty credit risk – handled in more specialised chapters)

Capital requirements target **unexpected loss** over a regulatory horizon, while provisioning (accounting and prudential) mainly covers **expected loss** at the portfolio level.

---

## 4.3 Exposure at Default (EAD) in the SA

**Exposure at Default (EAD)** is the amount that is considered **exposed to default at the moment of default**.

### 4.3.1 On-balance sheet exposures

Under SA, for **on-balance sheet** items, the exposure value is generally:

$$
\\text{EAD}_{\\text{on}, j}
= \\max\\Bigl(0,\\ \\text{Accounting Exposure}_j - \\text{Specific Provisions}_j - \\text{Write-offs}_j\\Bigr)
$$

CRE20 and related guidance confirm that exposures should be **taken net of specific provisions and partial write-offs** for the purpose of calculating risk-weighted assets.

### 4.3.2 Off-balance sheet items

For **off-balance sheet items** (commitments, guarantees, letters of credit, etc.), Basel applies **Credit Conversion Factors (CCFs)**:

$$
\\text{EAD}_{\\text{off}, k} = \\text{Notional}_k \\times \\text{CCF}_k
$$

CCFs are prescribed by the framework (e.g. 0%, 20%, 50%, 100%, etc.) depending on the nature of the commitment (unconditionally cancellable, other commitments, direct credit substitutes, etc.).

### 4.3.3 Total EAD

Conceptually, total EAD for a counterparty or portfolio can be:

$$
\\text{EAD}_{\\text{total}} = \\sum_j \\text{EAD}_{\\text{on}, j} + \\sum_k \\text{EAD}_{\\text{off}, k}
$$

Module 6 goes deeper into **CCFs and off-balance sheet treatment**; here it is enough to remember that **SA RWA is always based on EAD**, not just raw accounting balances.

---

## 4.4 Main exposure classes under the Standardised Approach

In the Basel SA, **risk weights** depend primarily on:

* **Exposure class** (type of counterparty / product)
* **External rating** (for certain classes where permitted)
* **Credit risk mitigation** (collateral, guarantees – Module 7)
* For revised SA-CR (Basel 3.1), sometimes **loan-to-value (LTV)**, product type, or other attributes

Key exposure classes (global Basel view, CRE20):

1. **Exposures to sovereigns and central banks**

   * Central governments, central banks, and certain central-government-guaranteed exposures.
   * Risk weights strongly influenced by **country risk / rating** and national discretion.

2. **Exposures to non-central government public sector entities (PSEs)**

   * Regional governments, municipalities and similar entities.
   * Often treated either like sovereigns or like banks/corporates, depending on supervisory decisions.

3. **Exposures to banks**

   * Claims on banks and certain securities firms subject to equivalent capital / prudential regimes.
   * Risk weights depend on:

     * External rating (where permitted), and/or
     * Home sovereign rating and regulatory regime, or
     * Under Basel 3.1, the **Standardised Credit Risk Assessment Approach (SCRA)** for **unrated banks**.

4. **Exposures to corporates**

   * Claims on non-financial corporates and some financial institutions treated as corporates.
   * Risk weights depend on external rating where allowed; **unrated corporates** typically receive a **standard risk weight** (historically 100% in the Basel II template, adjusted but conceptually similar in Basel 3.1).

5. **Regulatory retail exposures**

   * Exposures to individuals and small businesses that meet **regulatory retail criteria** (granularity, low individual exposure, etc.).
   * Benefit from **preferential risk weights** compared to large corporates.

6. **Exposures secured by residential real estate**

   * Loans fully or partly secured by residential property, subject to conditions.
   * Under Basel 3.1, risk weights are heavily driven by **LTV** and property type.

7. **Exposures secured by commercial real estate**

   * Loans secured by income-producing or commercial property.
   * Basel 3.1 introduces more risk-sensitive and, in some cases, higher risk weights, often LTV-based and subject to national choices.

8. **Past-due exposures**

   * Exposures that are past due / non-performing.
   * Receive **higher risk weights** depending on days past due and level of specific provisions.

9. **Covered bonds**

   * Debt instruments backed by specific pools of assets (e.g. mortgages) that remain on-balance sheet.
   * Receive preferential risk weights if strict eligibility conditions are met.

10. **Securitisation exposures**

    * Tranches of securitised asset pools (senior, mezzanine, equity).
    * Treated under a **separate securitisation framework**, with high risk weights (up to 1250%) for certain high-risk tranches.

11. **Equity exposures**

    * Direct ownership interests in companies or funds.
    * Risk weights are high (e.g. 100%, 250% or higher, depending on approach and reform package).

12. **Other assets**

    * Cash items in process of collection, fixed assets, prepayments, some intangibles not otherwise deducted, etc.
    * Typically assigned standard risk weights (commonly 100% in the template, subject to local rules).

Full technical definitions and risk-weight tables are given in **CRE20 – Standardised approach: individual exposures**.

---

## 4.5 External ratings and ECAIs in SA

### 4.5.1 Use of ratings

For certain classes (sovereigns, banks, corporates, some securitisations), SA uses **external credit ratings** where national authorities allow this.

High-level flow:

1. The supervisor recognises one or more **External Credit Assessment Institutions (ECAIs)** (e.g. S&P, Moody’s, Fitch, or domestic agencies).
2. ECAI ratings (AAA, AA, A, BBB, etc., or local-scale equivalents) are mapped to **Credit Quality Steps (CQS)**.
3. Each CQS corresponds to a **regulatory risk weight** for a given exposure class.

Chapter **CRE21 – Standardised approach: use of external ratings** sets out eligibility criteria for ECAIs and the mapping rules.

### 4.5.2 Core principles for rating use

Basel’s key principles under CRE21 include:

* **Supervisor recognition of ECAIs** – ECAIs must meet criteria on objectivity, independence, transparency and disclosure.
* **Consistency** – a bank using a given ECAI for one exposure class must **apply it consistently** across similar exposures (no cherry-picking).
* **Issue vs issuer ratings** – use specific **issue ratings** where available; otherwise, apply issuer ratings under prescribed rules.
* **Multiple ratings** – apply conservative combination rules (e.g. generally take the most conservative of the relevant risk weights derived from the available ratings).

### 4.5.3 Unrated exposures

The framework must handle **unrated** exposures as well:

* **Unrated corporates**: receive default risk weights (e.g. 100% under the Basel II template; recalibrated but conceptually similar under Basel 3.1).
* **Unrated banks**: under Basel 3.1, are treated under **SCRA**, with banks grouped into categories (A/B/C) based on prudential and financial indicators, each with prescribed risk weights.
* **Retail and many real estate exposures**: often use **product and collateral characteristics** (e.g. LTV) rather than external ratings.

---

## 4.6 Standardised Approach pipeline – step-by-step

This is the conceptual SA credit risk workflow that a bank (or an RWA engine) will implement.

### Step 1 – Identify exposure and exposure amount

For each position:

* Determine **counterparty and product information** (sovereign, bank, corporate, retail, real estate, etc.).
* Classify as **on-balance sheet** or **off-balance sheet**.
* Calculate **EAD**:

  * On-balance: net of specific provisions and write-offs.
  * Off-balance: notional × CCF, using Basel CCF tables for commitments and guarantees.

### Step 2 – Assign exposure class

Using CRE20 rules:

* Government bond → sovereign exposure.
* Interbank placement → bank exposure.
* Loan to a large corporate → corporate exposure.
* Credit card to an individual → regulatory retail (if criteria met).
* Mortgage loan secured by a dwelling → residential real estate exposure.

Accurate exposure classification is critical, as **risk weights differ materially** across classes.

### Step 3 – Determine rating information (if applicable)

For exposure classes that use ratings:

* Check if the exposure or obligor has an **eligible rating** from a recognised ECAI.
* Map the rating to a **CQS**, then to the regulatory **risk weight** for the relevant exposure type.
* Apply the jurisdiction’s rules for multiple ratings and for using issue vs issuer ratings.

If rating use is not permitted or exposure is unrated, apply the **unrated risk-weight rules**.

### Step 4 – Apply Credit Risk Mitigation (CRM)

If eligible collateral or guarantees exist:

* Recognise **eligible financial collateral** (e.g. cash, certain securities), subject to haircuts and conditions.
* Recognise **guarantees** and credit derivatives that meet eligibility conditions.

In SA, CRM is often implemented by:

* Splitting the exposure into **secured** and **unsecured** portions, or
* Using a **substitution approach**, where the risk weight of the guarantor/collateral provider is applied to the protected portion.

Full CRM rules are in CRE22 and are elaborated in Module 7.

### Step 5 – Assign risk weight

Using:

* Exposure class
* Rating (where applicable)
* Attributes such as LTV (real estate under Basel 3.1), product type, etc.

look up the **regulatory risk weight** from the SA tables.

Conceptually:

$$
\\text{RW}_j = f\\bigl(\\text{Exposure Class}_j,\\ \\text{Rating}_j,\\ \\text{LTV}_j,\\ \\text{Other attributes}\\bigr)
$$

Basel 3.1 revisions make this function **more granular and risk-sensitive**, especially for real estate and some corporate/retail segments.

### Step 6 – Compute RWA for each exposure

For each exposure (j):

$$
\\text{RWA}_j = \\text{EAD}_j \\times \\text{RW}_j
$$

(where RW is expressed as a decimal; e.g. 100% → 1.0, 50% → 0.5).

### Step 7 – Aggregate RWA and capital requirement

Aggregate across exposures:

$$
\\text{RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

Combine with market and operational risk:

$$
\\text{Total RWA}
= \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}
$$

Basel template minimum capital requirement:

$$
K_{\\text{total}} = 0.08 \\times \\text{Total RWA}
$$

before adding capital buffers and national overlays.

---

## 4.7 SA under Basel 3.1 (“Endgame”) – high-level enhancements

The **Basel III: Finalising post-crisis reforms** package significantly revises the Standardised Approach for credit risk (SA-CR).

Key themes:

1. **Greater risk sensitivity**

   * Real estate exposures (both residential and commercial) are now strongly driven by **LTV** and property type, with multiple risk-weight buckets.
   * Corporate exposures are split into **general corporates**, **specialised lending**, etc., with tailored treatments.
   * Some retail exposures receive more granularity.

2. **SCRA for bank exposures**

   * For **unrated banks**, Basel 3.1 introduces **SCRA** categories (A/B/C) with different risk weights, based on the bank’s prudential and financial characteristics.

3. **Stronger due diligence requirements**

   * Banks must perform **their own credit analysis** and must not rely **mechanically** on external ratings.
   * Where internal analysis indicates higher risk than implied by the rating, the framework expects appropriate action (including potentially more conservative risk weights).

4. **Alignment with the output floor**

   * Revised SA-CR forms the reference for the **72.5% output floor**: total RWA from internal models cannot go below 72.5% of RWA computed under SA once the floor is fully phased in.

In summary, Basel 3.1 turns SA into a **more risk-sensitive and central** part of the framework, not just a fallback to IRB.

---

## 4.8 Implementation view – what an SA credit risk engine needs

A practical SA credit risk engine (for regulatory reporting or internal monitoring) typically needs:

1. **Core data model**

   * **Counterparty master**: legal entity, sector, sovereign, regulatory classification.
   * **Facility / exposure master**: product type, drawn/undrawn amounts, currency, maturity, interest type.
   * **Collateral and guarantee data**: type, market value, currency, haircuts, guarantor.
   * **Rating data**: ECAI, rating grade, rating type (issue/issuer), effective dates.

2. **Classification logic**

   * Rules to assign exposures to **Basel exposure classes and sub-classes** (sovereign, bank, corporate, retail, residential/commercial real estate, etc.).
   * Implementation of **regulatory retail criteria**, SME definitions and any local variants.

3. **Rating and mapping module**

   * Mapping tables from each ECAI’s scale to **CQS** and then to **risk weights** by exposure class.
   * Rules for multiple ratings, use of issue vs issuer ratings.
   * Flags for **due diligence overrides** where internal analysis suggests more conservative treatment.

4. **CCF and EAD engine**

   * Mapping of product types and commitment types to **CCFs** in line with Basel and local rules.
   * EAD calculation explicitly **net of specific provisions** and write-offs.

5. **CRM engine**

   * Eligibility checks on collateral and guarantees.
   * Haircut application for collateral and exposure splitting into secured/unsecured parts.
   * Substitution logic for guarantees and credit derivatives (mapping to guarantor’s risk weight).

6. **Aggregation and reporting**

   * Aggregation of EAD and RWA by exposure class, rating grade, product type, business unit, region, etc.
   * Movement analysis: decomposing RWA changes into volume, mix, rating changes, CRM, methodology changes.
   * Regulatory templates (credit-risk SA returns, Pillar 3 tables).

This engine-level view connects directly with Module 9’s more detailed **data and calculation flow**.

---

## 4.9 Key points and practical notes (SA credit risk)

1. **Exposure class drives everything**

   * Two exposures to the same counterparty can have different **exposure classes** (e.g. one corporate facility vs another qualifying as regulatory retail), and therefore **very different risk weights**. CRE20’s classification rules must be implemented carefully.

2. **Exposures are net of specific provisions**

   * Under SA, exposures are risk-weighted **net of specific provisions and partial write-offs**, not gross accounting balances. This has a direct effect on RWA and must be handled systematically in the EAD calculation.

3. **Ratings are an input, not a substitute for due diligence**

   * Basel 3.1 emphasises that banks must perform their own **credit assessment**; reliance on external ratings must not be purely mechanical. Where internal analysis points to higher risk, more conservative treatment is expected.

4. **Unrated corporates and banks remain central in practice**

   * Many corporates (especially in emerging markets) are unrated; SA assigns them standard risk weights, but internally banks still differentiate risk for pricing and internal limits.
   * For unrated banks, SCRA under Basel 3.1 introduces a more granular, risk-sensitive framework.

5. **Real estate exposures are now very LTV-centric**

   * Under Basel 3.1, the treatment of real estate is a key area of focus: risk weights depend heavily on **LTV** and property type, so accurate collateral data and valuation processes become critical for both RWA and capital planning.

---

### Reference links for Module 4

[1]: https://www.bis.org/basel_framework/chapter/CRE/20.htm – **CRE20 – Standardised approach: individual exposures** (official Basel framework chapter)

[2]: https://www.sif.admin.ch/dam/de/sd-web/GmUQnVy5H4eY/cre20.pdf – PDF reproduction of CRE20 showing exposure values net of specific provisions and partial write-offs

[3]: https://www.bis.org/publ/bcbs128.pdf – *International Convergence of Capital Measurement and Capital Standards – A Revised Framework (Basel II)* (includes original SA and CCF principles)

[4]: https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp517.pdf – ECB Working Paper on credit ratings and the standardised approach to credit risk

[5]: https://www.bis.org/bcbs/publ/d424.pdf – *Basel III: Finalising post-crisis reforms* (Basel 3.1 / Endgame) – revised SA-CR and output floor

[6]: https://www.bankofengland.co.uk/prudential-regulation/publication/2022/november/implementation-of-the-basel-3-1-standards/credit-risk-standardised-approach – Bank of England PRA CP on implementing Basel 3.1 SA-CR (real estate, SCRA, etc.)

[7]: https://www.bis.org/basel_framework/chapter/CRE/21.htm – **CRE21 – Standardised approach: use of external ratings**

[8]: https://www.bis.org/basel_framework/chapter/CRE/22.htm – **CRE22 – Standardised approach: credit risk mitigation**

[9]: https://www.eba.europa.eu/sites/default/files/document_library/881123/Policy%20Advice%20on%20Basel%20III%20reforms%20-Credit%20Risk.pdf – EBA Policy Advice on Basel III reforms: credit risk (due diligence, ratings, CCFs, SCRA)

[10]: https://en.wikipedia.org/wiki/Basel_III:_Finalising_post-crisis_reforms – High-level summary of Basel 3.1 reforms (including SA-CR changes and the output floor)

[11]: https://assets.kpmg.com/content/dam/kpmg/cn/pdf/en/2021/02/basel-iv-credit-risk-standardised-approach.pdf – KPMG technical note on revised SA-CR under “Basel IV” (LTV-based real estate, SCRA, corporate segmentation)`
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

In India, the Standardised Approach (SA) for credit risk is embedded in **RBI’s Basel II / Basel III capital regulations**, and kept up to date through revised Master Circulars / Master Directions on **Basel III Capital Regulations**.

Key anchors:

* **Master Circular – Basel III Capital Regulations**

  * Initial Basel III circular for banks issued July 1, 2013 (No. DBOD.BP.BC.2/21.06.201/2013-14).
  * Subsequent consolidated versions (e.g. July 1, 2014; and updated Master Circular / Master Direction dated April 1, 2025) keep the same *structure* but update details.
  * **Section 5 (“Capital charge for credit risk”)** holds the SA rules, including sub-sections for:

    * 5.2 Claims on domestic sovereigns
    * 5.3 Claims on foreign sovereigns
    * 5.4 Public sector entities (PSEs)
    * 5.5 MDBs/BIS/IMF
    * 5.6 Banks
    * 5.7 Primary dealers
    * 5.8 Corporates / AFCs / NBFC-IFCs
    * 5.9 Regulatory retail
    * 5.10 Claims secured by residential property
    * 5.11 Commercial real estate / CRE–RH
    * 5.12 NPAs
    * 5.13 Other specified categories

* **Approach mandated for Indian banks**
  Under the Basel II “New Capital Adequacy Framework (NCAF)” and carried into Basel III, RBI decided that **all commercial banks in India (excluding Local Area Banks and Regional Rural Banks)** must adopt:

  * **Standardised Approach (SA)** for credit risk,
  * **Basic Indicator Approach (BIA)** for operational risk,
  * **Standardised Duration Approach (SDA)** for market risk (at least initially).

So, conceptually:

> **Basel global template → RBI Basel III Master Circular → SA parameter tables for India.**

Mathematically the logic is unchanged from Module 4:

$$
\\text{RWA}_i = \\text{EAD}_i \\times \\text{RW}_i,\\quad
\\text{Total RWA}_{\\text{credit}} = \\sum_i \\text{RWA}_i
$$

The “India flavour” lies in **how exposures are classified** and **which risk-weight percentages** apply in RBI’s tables.

---

## 5.2 ECAIs & ratings in the Indian SA

### 5.2.1 RBI-approved ECAIs

Risk weights under SA depend heavily on **external ratings**. In India, RBI explicitly specifies which **domestic credit rating agencies** are recognised as **External Credit Assessment Institutions (ECAIs)** for Basel III capital purposes.

* A January 9, 2023 RBI circular on “Basel III Capital Regulations – Eligible Credit Rating Agencies” lists six domestic CRAs that banks may use (in alphabetical order):

  * Acuite Ratings & Research Limited (Acuite)
  * CARE Ratings Limited (CARE)
  * CRISIL Ratings Limited (CRISIL)
  * ICRA Limited (ICRA)
  * India Ratings and Research Pvt. Ltd. (India Ratings)
  * Infomerics Valuation and Rating Pvt. Ltd. (INFOMERICS)

* RBI has subsequently allowed / clarified the use of **Brickwork Ratings India Pvt. Ltd.** again for Basel III purposes (earlier its use was temporarily restricted).

* RBI’s **June 9, 2025** and **July 10, 2025** circulars further refine the ECAI framework (e.g. allowing CareEdge Global IFSC ratings for IFSC exposures); these circulars reference the current Basel III Master Circular paragraph on ECAIs.

**Practical view:**

* The **official list of usable ECAIs can change**, so the engine should **not hard-code** a CRA list; instead it should:

  * Maintain a **parameter table** of “RBI-approved ECAIs” pulled from the latest circular.
  * Map each ECAI’s rating scale to a **regulatory rating grade / credit quality step (CQS)**, then to the RBI risk-weight table for each exposure class.

### 5.2.2 How ratings are used in practice

Core mechanics (mirrors Basel CRE21 but implemented through RBI tables):

* For rating-based classes (sovereigns, banks, corporates, certain securitisations), the bank must:

  1. Use only **RBI-accredited ECAIs**.
  2. Map **rating symbols** (e.g. CRISIL AA+, ICRA BBB−) to the RBI’s **rating buckets** and then to **risk weights**.
  3. Apply **consistent use** of a given ECAI for a particular type of claim (no cherry-picking).
  4. Follow RBI rules for:

     * Long-term vs short-term ratings.
     * Issue vs issuer ratings.
     * Multiple ratings (typically take the more conservative of the relevant risk weights).
     * Treatment of unsolicited ratings.

From an engine point of view, for each exposure you need at least:

* \`ecaI_id\` (link to a parameter table: Acuite / CARE / CRISIL / etc.)
* \`rating_symbol\` (e.g. “CRISIL AA+”)
* \`asset_class\` (sovereign / bank / corporate / PSE / securitisation, etc.)

Then:

$$
(\\text{asset class},\\ \\text{rating bucket}) \\longrightarrow \\text{risk weight}
$$

The heavy lifting (mapping each CRA’s scale into RBI buckets) sits in **parameter configuration**, not in the calculation engine.

---

## 5.3 Exposure classification nuances – India vs generic Basel

The **pipeline** is the same as in Module 4:

> **Exposure → classify under RBI’s SA categories → apply rating / LTV / provisioning rules → pull risk weight from table → ( \\text{RWA} = \\text{EAD} \\times \\text{RW} ).**

The Indian twist is in **how** exposures are classified and **what risk weights** RBI assigns.

### 5.3.1 Sovereigns: domestic vs foreign

RBI splits sovereign exposures into:

* **Claims on domestic sovereign (Government of India / RBI)**
* **Claims on foreign sovereigns**

Typical patterns (high level):

* **GoI / RBI in INR, funded in INR**

  * Generally **0% risk weight** (similar to Basel template).
* **State governments**

  * Often receive preferential risk weights as per RBI table (commonly 0% or 20%, depending on type and guarantee).
* **Foreign sovereigns**

  * Risk weights depend on **external rating** and follow Basel-style 0–150% buckets, with RBI’s national discretions.

**Capital insight:**

A large stock of SLR-eligible Government securities at **0% RW**:

* Increases **total assets** but **not** credit RWA.
* Therefore **improves CRAR** (denominator is smaller than simple total assets).

### 5.3.2 Banks & primary dealers

RBI has separate sections for:

* **Claims on banks**
* **Claims on primary dealers (PDs)**

Patterns (conceptual):

* **Risk-weights depend on rating and sometimes residual maturity**:

  * Better-rated banks → lower RW (for example, around 20–50% in older tables).
  * Weaker or unrated banks → higher RW (e.g. 50–100% or more).
* Certain **short-term interbank exposures** may have more favourable treatment (tenor + rating-sensitive).

Engine-wise, counterparty type needs to be granular (e.g. \`SCB\`, \`foreign bank branch\`, \`PD\`, \`NBFC\`) so that each is mapped to the correct RBI rule section.

### 5.3.3 Corporates, NBFCs, SMEs vs regulatory retail

#### (a) Corporate exposures

RBI section 5.8 covers **claims on corporates, AFCs, NBFC-IFCs**, etc.

High-level patterns (simplified):

* **Rated corporates**

  * RW varies with rating (e.g. 20%, 50%, 75–100%, 150% buckets depending on grade and current tables).
* **Unrated corporates**

  * Default RW of **100%** under both Basel II NCAF and Basel III Master Circular.
* **Restructured standard corporate exposures**

  * RBI requires a **higher RW (125%)** until “satisfactory performance” is observed for at least one year under the revised repayment schedule.

If an exposure does not meet conditions for sovereign/bank/regulatory retail/mortgage/CRE etc., it usually falls into the **corporate bucket** by default.

#### (b) Regulatory retail – Indian definition

RBI gives a detailed **regulatory retail** definition. Under earlier NCAF guidelines, exposures meeting all conditions could be risk-weighted at **75%** instead of 100%.

The four key tests (original framework):

1. **Orientation** – exposure to individuals or small businesses.
2. **Product** – suitable retail products (term loans, working capital to small businesses, revolving credit, etc.).
3. **Granularity** – portfolio must be well-diversified (no single counterparty dominates).
4. **Low value of individual exposure** – total exposure to one counterparty limited (originally **₹5 crore** including off-balance sheet; exposures above this failed retail treatment).

RBI later **raised the per-borrower threshold from ₹5 crore to ₹7.5 crore** while keeping the 75% RW for qualifying retail portfolio, as part of measures to support credit flow (press release October 9, 2020).

So conceptually today:

* **If ALL of the following hold**:

  * Orientation = individual / small business,
  * Product = qualifying retail product,
  * Portfolio = granular (no single obligor overly large),
  * Total exposure per obligor ≤ current RBI threshold (now ₹7.5 crore),
* → the exposure can be classified as **regulatory retail** and get the **preferential 75% RW** (subject to any updated Basel III tables).

**Important exclusions** (even if borrower is an individual):

* Exposures that fall under **residential mortgage** or **CRE / CRE–RH** categories.
* Certain high-risk segments (capital markets, venture capital, etc.).

**Industry angle:**

A lot of SME / small business lending is actively structured to **qualify for regulatory retail** (turnover, ticket size, granularity), because dropping RW from 100% to 75% materially reduces required capital.

### 5.3.4 Housing loans & Indian LTV-based risk weights

RBI has a dedicated section for **claims secured by residential property** in the Basel III Master Circular, and more detailed parameters in the **Master Circular on Housing Finance** (most recently updated April 3, 2023).

Key ideas:

* **Risk weights depend on**:

  * **Loan size** (₹ bands), and
  * **Loan-to-Value (LTV)** bucket.

* Original Basel III (2013) table for individual housing loans (Table 7A) used 50% and 75% risk weights:

  * Up to ₹20 lakh, LTV ≤ 90% → 50% RW
  * > ₹20–75 lakh, LTV ≤ 80% → 50% RW
  * > ₹75 lakh, LTV ≤ 75% → 75% RW
  * CRE–RH → 75% RW

* Subsequently, RBI **reduced risk weights** on well-collateralised residential mortgages (e.g. loans up to ₹30 lakh with lower LTVs can attract **35%** RW) through circulars in 2013–2020, consolidated in the 2023 Housing Finance Master Circular.

**Working LTV definition (RBI)**:

$$
\\text{LTV} = \\frac{\\text{Total outstanding in the account}}{\\text{Realisable value of the residential property}}
$$

where “total outstanding” includes principal, accrued interest, and other charges **without deducting provisions**.

Important nuances from RBI guidance:

* RBI prescribes **maximum LTV caps** (e.g. 90% for small loans, 80% for mid-sized, 75% for high-value), and risk weights are linked to whether the loan respects those caps.
* **Third (and subsequent) dwelling unit** exposures are generally treated as **CRE**, not residential mortgage.
* **Restructured housing loans** attract higher risk weights (e.g. add 25 percentage points over the applicable RW).

Engine logic becomes **piecewise**:

1. Check product qualifies as **individual housing loan fully secured by residential house / flat** (not CRE / CRE–RH / land-only).
2. Compute LTV using RBI formula and validate against **LTV cap**.
3. Use \`(loan_amount_bucket, LTV_bucket)\` to look up the risk weight in the **current** RBI table.
4. Apply any **add-ons** (e.g. +25 p.p. for restructured loans).

Because these tables have been revised, a robust implementation should **parameterise the table** and **version-control** it (2013 vs 2020 vs 2023 vs future Basel 3.1 alignment).

### 5.3.5 Commercial Real Estate (CRE) vs CRE–RH

RBI distinguishes:

* **CRE** – commercial real estate (income-producing property; repayment depends primarily on rents/sales from the property).
* **CRE–RH (Commercial Real Estate – Residential Housing)** – loans to builders/developers for **residential** housing projects (for sale, not for captive use).

Key points:

* **CRE** → typically **100% RW**.
* **CRE–RH** → **75% RW** as a distinct, somewhat lower-risk sub-sector.
* Loans for **third dwelling unit onwards** to an individual are also treated as **CRE** exposures.

Correct classification between **retail mortgage vs CRE–RH vs CRE** has a **big impact on RWA**, so engines need explicit rules and flags.

### 5.3.6 Non-performing assets (NPAs)

RBI’s Basel III capital regulations include a dedicated treatment for **NPAs** (non-performing advances), especially the **unsecured portion**.

For **unsecured NPAs (excluding certain residential mortgages)**, Basel II / RBI rules prescribe **higher risk weights** based on **specific provision coverage**:

* Specific provisions < 20% of the outstanding → **150% RW**
* Specific provisions ≥ 20% and < 50% → **100% RW**
* Specific provisions ≥ 50% → **50% RW**

For NPA housing loans secured by residential property, similar concepts apply but with slightly different minimum RWs (e.g. 100% with possible reduction when provision coverage is high, subject to RBI rules).

**Conceptual link:**

* As **specific provisions increase**, capital is focused on the **unprovided** portion.
* Risk weight on the remaining net exposure can **reduce** as more loss is already recognised through provisions.

---

## 5.4 How SA is actually applied in India – end-to-end flow

This is simply the global SA pipeline (Module 4) with **RBI rulebook plugged in**.

### Step 1 – Classify exposure under RBI categories

For each facility (loan, LC, BG, derivative, etc.), the engine determines:

1. **Counterparty type**

   * Govt of India / RBI / state govt
   * Bank / Primary Dealer
   * Corporate / NBFC / AFC / NBFC-IFC
   * Individual / small business (potential regulatory retail)
   * Others (HFCs, etc., where relevant)

2. **Product / security / purpose flags**

   * Residential mortgage?
   * CRE vs CRE–RH?
   * Consumer credit / credit card?
   * NPA / restructured?

3. **Portfolio designation**

   * Does exposure meet **regulatory retail** conditions (orientation + product + granularity + updated exposure limit)?

Correct mapping here determines **which paragraph/table** of the RBI circular applies.

### Step 2 – Determine EAD

As per RBI + Basel:

* **On-balance sheet items**

  $$
  \\text{EAD} = \\text{Book value of exposure} - \\text{specific provisions} - \\text{partial write-offs (if netted for RWA)}
  $$

  (Local detail can vary slightly; some reporting formats use gross exposure with provisions reported separately, but the conceptual RWA is on net exposure).

* **Off-balance sheet items**

  $$
  \\text{EAD} = \\text{Notional} \\times \\text{CCF}
  $$

  CCFs come from RBI’s SA off-balance sheet tables (unconditionally cancellable commitments vs other commitments, guarantees, LCs, etc.).

(Off-balance sheet and CCFs are fully explored in Module 6.)

### Step 3 – Pick the risk weight (RW)

For each exposure ( i ):

* Use **rating + asset class** for rated sovereign / bank / corporate / PSE exposures.
* For **unrated corporates/SMEs**, apply the unrated corporate RW (typically 100%, unless RBI introduces new differentiated buckets).
* If exposure qualifies for **regulatory retail**, apply the **retail RW (e.g. 75%)**.
* If it is a **housing loan**, use the **current RBI LTV/loan size table** from the Housing Finance circular.
* For **CRE / CRE–RH**, apply 100% / 75% as appropriate.
* For **NPAs**, use the **provision-based RW table**.

Mathematically:

$$
\\text{RWA}_i = \\text{EAD}_i \\times \\text{RW}_i
$$

### Step 4 – Aggregate & feed capital ratios

* Sum across exposures:

  $$
  \\text{Total Credit RWA} = \\sum_i \\text{RWA}_i
  $$

* Combine with market and operational risk RWAs:

  $$
  \\text{Total RWA} = \\text{RWA}_{\\text{credit}} + \\text{RWA}_{\\text{market}} + \\text{RWA}_{\\text{operational}}
  $$

* Then capital ratios:

  $$
  \\text{CRAR} = \\frac{\\text{Total Regulatory Capital}}{\\text{Total RWA}}
  $$

RBI’s reporting formats require breakdowns of RWA by **RBI exposure class** (sovereign, bank, corporate, retail, residential mortgage, CRE, CRE–RH, NPAs, securitisation, etc.), not just by internal business line.

---

## 5.5 Conceptual “Indian portfolio” walk-through (logic only)

Consider a simplified Indian bank portfolio:

1. **SLR government securities**

   * Counterparty = Government of India, INR, funded in INR.
   * RW = 0%.
   * High EAD, zero credit RWA → helpful for CRAR.

2. **Corporate term loans to mid-sized Indian companies**

   * Rated **BBB** by a domestic ECAI → RW as per RBI corporate rating table (often around 100% under current norms).
   * Unrated corporates → 100% RW unless they classify as regulatory retail.

3. **SME working-capital limits**

   * Borrowers’ turnover < ₹50 crore; exposure per borrower ≤ ₹7.5 crore; portfolio granular.
   * All four regulatory retail criteria satisfied → **regulatory retail**, **75% RW**.

4. **Individual housing loans**

   * LTV ≤ cap; loan size small / mid; risk weights from RBI’s current Housing Finance table (e.g. 35–50% for many standard loans).
   * Restructured loans → higher RW (add-on).

5. **CRE project loans (malls/offices)**

   * Classified as **CRE** → 100% RW.
   * Residential builder projects for sale → **CRE–RH** → 75% RW.

6. **NPAs**

   * Unsecured NPAs with low provisioning → 150% RW on unsecured portion.
   * As specific provisions rise to ≥20% or ≥50%, RW can drop to 100% or 50% on the remaining net exposure.

Exactly the same algorithm runs on all of them: classification → EAD → risk weight → RWA → aggregation.

---

## 5.6 Forward-looking note – Basel 3.1 / SA revisions in India

RBI is in the process of **aligning India’s SA for credit risk with Basel 3.1 (“Finalising post-crisis reforms”)**.

* On **October 7, 2025**, RBI issued **draft directions** on “Capital Charge for Credit Risk – Standardised Approach” for scheduled commercial banks, aiming to implement the revised Basel III SA-CR with effect from **April 1, 2027**.
* These draft norms:

  * Introduce more **granular risk weights** for **corporates, MSMEs, retail**, and **real-estate exposures**.
  * Propose **lower risk weights** for some well-rated corporates and MSMEs.
  * Adjust housing loan risk weights further (especially for **third-home** and higher LTV exposures), and refine treatment for personal loans and credit cards.

For learning and for any implementation project:

* The **structure** of SA in India remains the same:

  > **Exposure class + rating / LTV / product / provisions → risk weight**

* What changes are mainly the **parameter tables** and some classification rules.

* If the engine is built to be **parameter-driven**, with risk weights and thresholds in configurable tables, it should adapt smoothly from the current Basel III framework to the Basel 3.1-aligned RBI regime.

---

## 5.7 Key points and practical notes (India SA)

1. **Classification drives capital in India**

   * Getting the **correct RBI exposure category** (sovereign vs bank vs corporate vs regulatory retail vs housing vs CRE/CRE–RH vs NPA) often has a bigger impact on total RWA than the exact rating notch.
   * Classification rules should be implemented as **explicit code/logic**, not informal judgement, because different sections of the RBI circular and different risk weights apply.

2. **Regulatory retail is a major capital lever**

   * Moving an SME exposure from “corporate 100% RW” to “regulatory retail 75% RW” materially reduces required capital.
   * Always test the four conditions: orientation, product, granularity, and the updated exposure limit (now **₹7.5 crore** per borrower).

3. **Housing loans are strongly LTV-driven under modern RBI rules**

   * Well-collateralised housing loans (lower LTVs, smaller ticket sizes) can attract **reduced risk weights** (e.g. 35–50%), while high-LTV or third-house exposures face stricter treatment.
   * Implementations require **reliable, up-to-date property valuations** and recalculated LTVs, rather than relying only on original sanction values.

4. **Provisioning and capital interact via the NPA risk-weight rules**

   * For NPAs, higher **specific provisions** allow lower risk weights on the remaining net exposure (150% → 100% → 50% bands), but there are explicit caps and floors.
   * This means banks cannot treat provisioning as an unlimited substitute for capital; both need to be optimised together.

5. **Build everything as parameter tables**

   * For a robust SA engine in India, treat **RBI circulars as sources of configuration**, not hard-coded logic:

     * Risk-weight tables by exposure class and rating,
     * LTV and loan-size thresholds for housing,
     * ECAI lists and rating-bucket mappings,
     * NPA provision bands and risk-weight rules.
   * When Basel 3.1-aligned norms go live (target from 2027), the goal is that only the **parameter sets** change, while the core calculation logic stays the same.

---

### Reference links for Module 5

[1]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf – RBI **Master Circular – Basel III Capital Regulations** (2013)

[2]: https://www.pdicai.org/Docs/RBI-2025-26-08_242025172491.pdf – Example of later consolidated Basel III capital regulation circular (2025)

[3]: https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=6276 – **Prudential Guidelines on Capital Adequacy and Market Discipline – New Capital Adequacy Framework (NCAF)** (Basel II implementation)

[4]: https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11674 – Master Circular on **Housing Finance** / LTV and risk weight guidance (consolidated later in the 2023 circular)

[5]: https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=7720 – Clarification on **CRE** and **CRE–RH** classification and capital/provisioning norms

[6]: https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10035 – Master Circular on **Income Recognition, Asset Classification and Provisioning (IRAC)** norms, including provisioning rules for NPAs

[7]: https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11902 – Circular increasing the regulatory retail exposure cap to **₹7.5 crore** per borrower while retaining 75% RW

[8]: https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12205 – January 9, 2023 circular on **eligible credit rating agencies** for Basel III capital regulations

[9]: https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12345 – Illustrative reference to 2024–2025 updates on ECAIs (e.g. Brickwork, CareEdge IFSC) for Basel III

[10]: https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13001 – Draft directions dated October 7, 2025 on **Capital Charge for Credit Risk – Standardised Approach (Basel 3.1 implementation)**`
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
              content: `# Module 6 – Off-Balance Sheet Exposures, CCFs & EAD (Basel + Indian Context)

## 6.1 Why off-balance sheet (OBS) matters

Banks create credit risk not only via funded loans but also via **off-balance sheet (OBS)** items, such as:

* Undrawn credit lines and commitments
* Guarantees and standby letters of credit
* Documentary letters of credit (LCs)
* Performance and bid bonds
* Certain derivative contracts (counterparty credit risk)

Under the **Standardised Approach (SA)**, Basel converts OBS items into **credit exposure equivalents** using **Credit Conversion Factors (CCFs)** and then applies the usual **risk weights (RWs)** to obtain **RWA**.

Conceptually:

$$
\\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
$$

$$
\\text{RWA} = \\text{EAD}_{\\text{off}} \\times \\text{RW}
$$

The Basel framework explicitly states that off-balance sheet items are first converted into credit exposure equivalents using CCFs and then risk-weighted like on-balance sheet exposures.

RBI’s Basel III capital regulations use the same structure, defining a **credit equivalent amount** as **contract amount × CCF** for non-market related OBS items.

---

## 6.2 EAD – recap in the Standardised Approach

Under SA, **Exposure at Default (EAD)** is defined differently for **on-balance sheet** and **off-balance sheet** items.

### 6.2.1 On-balance sheet items

On-balance sheet exposures are generally taken at their **accounting value**, adjusted for **specific provisions and partial write-offs**.

Conceptually, for exposure ( i ):

$$
\\text{EAD}_{\\text{on}, i} = \\max\\Big(0,\\ \\text{Gross carrying amount}_i - \\text{specific provisions}_i - \\text{partial write-offs}_i\\Big)
$$

### 6.2.2 Off-balance sheet items

For an OBS item ( k ) with contractual notional ( N_k ):

$$
\\text{EAD}_{\\text{off}, k} = N_k \\times \\text{CCF}_k
$$

### 6.2.3 Total EAD

For a counterparty or facility:

$$
\\text{EAD}_{\\text{total}} = \\sum_i \\text{EAD}_{\\text{on}, i} + \\sum_k \\text{EAD}_{\\text{off}, k}
$$

RBI’s Basel III circular uses the same logic: OBS items are first converted into a **credit equivalent amount** via CCFs and then risk-weighted under SA.

---

## 6.3 Types of off-balance sheet items (Basel classification)

The Basel framework groups non-derivative OBS items roughly into:

1. **Direct credit substitutes**

   * Economically similar to having extended a loan.
   * Examples: financial guarantees of indebtedness, standby LCs that guarantee repayment, acceptances equivalent to loans.

2. **Transaction-related (performance) contingencies**

   * Support **non-financial** obligations.
   * Examples: performance bonds, bid bonds, warranty bonds, performance-related standby LCs.

3. **Short-term, self-liquidating trade-related contingencies**

   * Linked to trade and movement of goods.
   * Examples: documentary LCs collaterised by underlying shipments.

4. **Commitments**

   * Undrawn portions of term loans and revolving credit facilities.
   * Distinguish between:

     * **Unconditionally cancellable commitments (UCCs)**, and
     * Other commitments with **original maturity ≤ 1 year** or **> 1 year**.

5. **Other OBS items**

   * Note issuance facilities, revolving underwriting facilities, some securitisation-related liquidity lines.

6. **Derivatives**

   * Treated under specific **counterparty credit risk** rules (replacement cost + add-ons, SA-CCR or older Current Exposure Method), not the simple non-market CCF table.

---

## 6.4 CCF categories – conceptual Basel structure

Basel uses **standard CCF bands** to approximate how much of the OBS notional is likely to become an actual on-balance sheet exposure **by the time of default**. Exact percentages vary by vintage and jurisdiction, but the structure is stable.

### 6.4.1 Direct credit substitutes – typically 100% CCF

For direct credit substitutes:

$$
\\text{CCF}_{\\text{direct credit substitute}} = 100\\%
$$

$$
\\text{EAD} = \\text{Notional} \\times 1.0
$$

Examples: general guarantees of indebtedness, standby LCs that serve as **financial guarantees** for loans or securities.

Risk weight is then based on the **underlying obligor** (sovereign, bank, corporate, etc.).

---

### 6.4.2 Transaction-related contingencies (performance guarantees) – typically 50% CCF

Performance-related contingencies usually attract:

$$
\\text{CCF}_{\\text{performance}} \\approx 50\\%
$$

$$
\\text{EAD} = \\text{Notional} \\times 0.50
$$

This reflects that there is a meaningful, but not full, probability that the guarantee will be called.

---

### 6.4.3 Short-term trade-related contingencies – typically 20% CCF

Short-term, self-liquidating trade contingencies (e.g. documentary LCs on movement of goods) are often given a lower CCF, typically:

$$
\\text{CCF}_{\\text{trade}} \\approx 20\\%
$$

$$
\\text{EAD} = \\text{Notional} \\times 0.20
$$

---

### 6.4.4 Other commitments (non-UCC) – 20% / 50% CCF by maturity

For **non-UCC commitments** such as undrawn term loans or revolving limits:

* **Original maturity ≤ 1 year** → lower CCF (often 20%)
* **Original maturity > 1 year** → higher CCF (often 50%)

$$
\\text{EAD} =
\\begin{cases}
N \\times 0.20, & \\text{if original maturity} \\le 1\\ \\text{year} \\\\[4pt]
N \\times 0.50, & \\text{if original maturity} > 1\\ \\text{year}
\\end{cases}
$$

RBI’s Basel III circular reproduces this pattern for non-market related OBS items (Table on Credit Conversion Factors).

---

### 6.4.5 Unconditionally cancellable commitments (UCC)

Definition (Basel / RBI): commitments where the bank can **cancel or reduce** the commitment **at any time, unconditionally and without prior notice**, or where the facility automatically cancels upon deterioration in creditworthiness.

* Under older Basel II and many existing national frameworks, such commitments often receive **0% CCF**.
* Basel 3.1 reforms introduce **positive CCFs** (e.g. 10%) for UCCs to better reflect that banks may not fully exercise their cancellation rights in stress.

For a UCC with notional ( N ):

$$
\\text{EAD} = N \\times \\text{CCF}_{\\text{UCC}}
$$

In India, as per the current RBI Basel III capital regulations, UCCs in the non-market OBS table are still given **0% CCF**; future Basel 3.1-aligned updates may change this, but those will come via explicit RBI circulars.

---

## 6.5 OBS & CCFs in the Indian (RBI) implementation

RBI’s **Basel III Capital Regulations – Master Circular** sets out how Indian banks must treat off-balance sheet items.

RBI defines:

$$
\\text{Credit equivalent amount} = \\text{Contract amount} \\times \\text{CCF}
$$

and then applies the Standardised Approach risk weight to this credit equivalent amount.

For **non-market related** OBS items (direct substitutes, trade and performance contingencies, commitments, etc.), the table in the circular broadly gives:

1. **Direct credit substitutes** – **100% CCF**

   * General guarantees of indebtedness (including standby LCs acting as financial guarantees), acceptances, etc.

2. **Transaction-related contingencies** – **50% CCF**

   * Performance guarantees, bid bonds, warranties and similar instruments.

3. **Short-term, self-liquidating trade-related contingencies** – **20% CCF**

   * Documentary LCs, usance LCs collaterised by underlying shipment.

4. **Commitments (non-UCC)**

   * Original maturity up to 1 year → **20% CCF**
   * Original maturity over 1 year → **50% CCF**

5. **Unconditionally cancellable commitments (UCC)**

   * **0% CCF** in the current RBI Basel III framework.

For **market-related** OBS items (derivatives), RBI gives a separate table of **add-on factors** by product type and maturity to calculate potential future exposure, which is then added to current exposure for EAD.

In practice, banks treat the RBI CCF table as a **parameter table** in their engines:

* \`OBS_category → CCF\`
* \`CCF\` then feeds into EAD, which feeds SA risk weighting.

---

## 6.6 EAD formulas – fully spelled out

### 6.6.1 On-balance sheet items

For each on-balance sheet exposure ( i ):

$$
\\text{EAD}_{\\text{on}, i} = \\max\\Big(0,\\ \\text{Gross carrying amount}_i - \\text{specific provisions}_i - \\text{partial write-offs}_i\\Big)
$$

This reflects the Basel requirement that exposures are risk-weighted **net of specific provisions and partial write-offs** under SA.

### 6.6.2 Off-balance sheet items (plain vanilla SA)

For an OBS item ( k ) with contractual notional ( N_k ):

1. Determine **OBS category**:

   * Direct credit substitute
   * Performance contingency
   * Trade LC
   * Other commitment ≤ 1 year
   * Other commitment > 1 year
   * UCC, etc.

2. Look up the applicable **CCF(_k)** from the RBI CCF table.

3. Compute:

$$
\\text{EAD}_{\\text{off}, k} = N_k \\times \\text{CCF}_k
$$

The **RWA** for that OBS item is then:

$$
\\text{RWA}_k = \\text{EAD}_{\\text{off}, k} \\times \\text{RW}_k
$$

where ( \\text{RW}_k ) is the SA risk weight based on the **obligor / exposure class** (sovereign, bank, corporate, retail, etc.).

---

### 6.6.3 Facilities with both drawn and undrawn parts

Consider a limit-based facility with:

* Sanction limit: ( L )
* Disbursed amount: ( D )
* Undrawn amount: ( U = L - D )

Steps:

1. **On-balance EAD**:

$$
\\text{EAD}_{\\text{on}} = \\max\\big(0,\\ D - \\text{specific provisions}\\big)
$$

2. **Off-balance EAD** (if the undrawn part is not UCC):

   * Determine the correct OBS category and CCF (e.g., 20% if original maturity ≤ 1 year; 50% if > 1 year).

$$
\\text{EAD}_{\\text{off}} = U \\times \\text{CCF}
$$

3. **Total facility EAD**:

$$
\\text{EAD}_{\\text{total}} = \\text{EAD}_{\\text{on}} + \\text{EAD}_{\\text{off}}
$$

4. **RWA**:

$$
\\text{RWA} = \\text{EAD}_{\\text{total}} \\times \\text{RW}
$$

where ( \\text{RW} ) is determined under SA (Module 4 / 5 logic).

This is exactly how Indian banks treat term loans and working capital limits with undrawn components for Basel credit risk RWA.

---

## 6.7 How CRM (collateral & guarantees) interacts with OBS EAD

Under SA, **Credit Risk Mitigation (CRM)** is applied **after** EAD is defined.

1. First compute **EAD** (on + off using provisions and CCFs).
2. Then, if part of that EAD is covered by **eligible financial collateral**, **guarantees**, or **credit derivatives**, apply CRM rules.

### 6.7.1 Collateral – simple approach (high-level)

For eligible **financial collateral** under the simple approach:

* Split the EAD into:

  * Collateralised portion
  * Unsecured portion

* Apply risk weights separately:

$$
\\text{RWA} = \\text{EAD}_{\\text{collateralised}} \\times \\text{RW}_{\\text{collateral}} + \\text{EAD}_{\\text{unsecured}} \\times \\text{RW}_{\\text{obligor}}
$$

(Exact haircut formulae and eligibility rules are covered in Module 7.)

### 6.7.2 Guarantees and credit derivatives – substitution approach

For eligible guarantees / credit derivatives, SA uses a **substitution approach**:

If a guarantee covers fraction ( \\alpha ) of EAD:

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

This logic applies equally to OBS exposures **once** they have been converted into EAD via CCFs.

---

## 6.8 Implementation view – building an OBS / CCF / EAD engine

### 6.8.1 Key data fields per facility / limit

A realistic RWA engine for SA credit risk needs, at minimum, the following fields per facility / OBS item:

* \`facility_id\`
* \`counterparty_id\`
* \`product_type\`

  * e.g. term loan, CC/OD limit, financial guarantee, performance guarantee, LC, SBLC, etc.
* \`sanction_limit\` / \`credit_limit\`
* \`current_outstanding\` (funded amount)
* \`undrawn_amount\` (limit – outstanding, adjusted for blocked margins)
* \`original_maturity\` (or bucket: ≤ 1 year / > 1 year)
* \`is_unconditionally_cancellable\` (true/false, based on contract)
* \`specific_provisions\` / \`interest_suspense\`
* \`off_balance_notional\` (for pure OBS items without limits, e.g. standalone guarantees)
* CRM flags and details (collateral, guarantees)

### 6.8.2 CCF engine – conceptual logic

In pseudocode:

\`\`\`text
for each facility or OBS item:
    if funded (on-balance):
        EAD_on = max(0, outstanding - specific_provisions - writeoffs)

    if off-balance:
        category = determine_OBS_category(product_type,
                                         is_unconditionally_cancellable,
                                         original_maturity)
        CCF = CCF_lookup_table[category]   # from RBI Basel III CCF table
        EAD_off = off_balance_notional * CCF

    EAD_total = EAD_on + EAD_off

    # pass EAD_total into:
    #   - SA risk-weight engine (exposure class, rating, LTV, etc.)
    #   - CRM engine (collateral and guarantees)
\`\`\`

All jurisdiction-specific values (CCFs and RWs) sit in **parameter tables**, so Basel 3.1 or RBI updates can be implemented by changing configuration rather than code.

### 6.8.3 Typical implementation pitfalls

Common issues observed in practice:

* **Misclassification of UCC**

  * Facilities that are not truly unconditionally cancellable being tagged as UCC and given 0% CCF.

* **Ignoring undrawn portions**

  * Only funded outstandings being treated as exposure, leaving committed but undrawn parts out of EAD.

* **Incorrect maturity bucket**

  * Wrong capture of original maturity → wrong CCF (20% vs 50%).

* **Using gross limit as EAD**

  * EAD should be **limit × CCF**, not the full limit, unless CCF = 100%.

A robust engine enforces clear rules for each OBS category and ties them back to RBI’s Basel III tables.

---

## 6.9 Key points and practical notes for Module 6

1. **Two-step logic: EAD first, then risk weight**

   * Step 1: convert **all** exposures (funded + OBS) into EAD using accounting values, provisions and CCFs.
   * Step 2: apply **Standardised Approach risk weights**, including CRM, on that EAD.
     Keeping this separation clear avoids double-counting or missing exposures.

2. **OBS ≠ “free” of capital**

   * Guarantees, LCs and undrawn commitments **consume capital** once CCFs are applied.
   * Direct credit substitutes (100% CCF) are almost indistinguishable from loans from a capital perspective.

3. **UCC classification is a powerful lever**

   * Where facilities are **genuinely** unconditionally cancellable, assigning them to the UCC category with 0% CCF (under current RBI rules) materially reduces EAD and RWA.
   * Misclassification here is a supervisory red flag, so documentation and legal review of “unconditional” cancellation rights are important.

4. **Trade vs financial guarantees**

   * Correctly separating **trade-related LCs** (typically 20% CCF) from **financial guarantees** (100% CCF) has a large impact on RWA, especially for banks with strong trade finance books.

5. **Drawn vs undrawn – always think in both legs**

   * For limit-based facilities, internal analysis and regulatory reporting both rely on a clean view of:

     * Net drawn exposure after provisions, and
     * Undrawn exposure multiplied by CCF.
       This is exactly how Indian Basel engines treat corporate and SME working capital limits.

6. **Basel 3.1 direction of travel**

   * Globally, Basel 3.1 **raises CCFs for some categories and introduces positive CCFs for UCCs**, recognising that banks may not fully cut lines in stress.
   * A parameter-driven engine (separate tables for CCFs and RWs) is ready for RBI’s future Basel 3.1 alignment with minimal code change.

---

### Reference links for Module 6

* **Basel framework – Standardised Approach & OBS**

  * CRE20 – Standardised approach: individual exposures (includes treatment of OBS items and EAD definitions).
  * High-level summary of Basel III reforms – notes more risk-sensitive CCFs and positive CCFs for UCCs under Basel 3.1.

* **Basel framework – Credit risk mitigation (CRM)**

  * CRE22 – Standardised approach: credit risk mitigation (collateral and guarantees).

* **RBI – Basel III capital regulations & CCFs (India)**

  * RBI Master Circular – Basel III Capital Regulations (includes credit risk under SA and OBS CCF tables).
  * IIBF “Basel III Capital Regulations” – training material summarising RBI’s CCF rules for non-market and market related OBS items.
  * RBI update / legal summary on Basel III capital framework (2025) – confirms continued use of CCF tables for non-market related OBS items.

* **Other useful references**

  * RBI guidance / FAQs on capital adequacy (older NCAF circulars) – explain calculation of credit equivalent amounts and treatment of OBS items.
  * Bank of England Basel 3.1 consultation chapter on credit risk SA – helpful for understanding the revised OBS categorisation and positive CCFs for UCCs in a Basel 3.1 world.
`
            }
          ]
        }
      ]
    },
    {
      id: "7",
      slug: "crm-collateral",
      title: "Module 7 – Credit Risk Mitigation (CRM): Collateral, Guarantees & Netting",
      goal: "Understand how collateral reduces capital requirements and the rules for using it.",
      sections: [
        {
          id: "7-1",
          title: "Master Class Notes",
          content: [
            {
              type: 'markdown',
              content: `# Module 7 – Credit Risk Mitigation (CRM): Collateral, Guarantees & Netting

## 7.1 Big picture: why CRM exists

**Goal of CRM**
Credit Risk Mitigation allows banks to **reduce RWA (and capital)** for a given exposure by recognising:

* Security they hold (**collateral**),
* Support from third parties (**guarantees / credit derivatives**),
* Certain **netting** arrangements (loans vs deposits).

Basel and RBI are very strict: CRM is recognised only when protection is **high-quality, legally enforceable, and operationally robust**.

Key ideas:

* CRM reduces **RWA**, not the underlying contractual exposure or PD of the borrower.

* CRM is usually applied to **portions** of exposure:

  * Protected portion → mitigated treatment,
  * Unprotected portion → standard treatment.

* If legal or operational conditions fail, CRM is **ignored** for capital purposes.

---

## 7.2 Taxonomy of CRM techniques

Under the Basel Standardised Approach (and RBI’s implementation), the recognised CRM techniques for **non-securitisation** credit risk are:

1. **Financial collateral**

   * Cash, gold, certain debt and equity securities, eligible mutual funds / UCITS, etc.
   * Treated under **simple** or **comprehensive** approach globally; India uses **comprehensive** for banking-book credit risk.

2. **On-balance sheet netting**

   * Netting of loans/advances against deposits with the **same counterparty** under a legally enforceable netting agreement.

3. **Guarantees**

   * Direct, explicit, irrevocable, unconditional guarantees that meet Basel / RBI eligibility criteria.
   * Treated under the **substitution approach** (swap obligor RW with guarantor RW on the protected part).

4. **Credit derivatives**

   * Credit default swaps (CDS) and similar products.
   * If they meet conditions, treated similarly to guarantees.

Basel and RBI allow multiple CRM types on the same exposure, but then the exposure must be **split into slices**, each treated separately.

---

## 7.3 Legal & operational pre-conditions (for any CRM)

Before applying formulas, regulators require **legal certainty and operational capability**.

Minimum conditions:

1. **Legal enforceability**

   * Documentation is **binding and enforceable** in all relevant jurisdictions (including insolvency).
   * Institutions are expected to obtain and periodically review **independent legal opinions**.

2. **Right to realise protection**

   * For collateral: right to **seize and liquidate** promptly on defined credit events.
   * For guarantees / credit derivatives: clear **right to payment** when a qualifying credit event occurs.

3. **Clear linkage**

   * CRM must clearly reference **specific exposures** or a **well-defined pool**.
   * Extent of coverage (amount, seniority, what cash flows are covered) must be unambiguous.

If these conditions are not met, the CRM is **not recognised** in the capital calculation.

---

## 7.4 Financial collateral – global Basel view

### 7.4.1 Simple vs comprehensive approaches (Basel)

Basel allows two main approaches for recognising **financial collateral**:

1. **Simple approach**

   * For the collateralised portion, the **counterparty’s risk weight** can be replaced by the **collateral’s risk weight** (subject to floors).
   * No maturity mismatches; collateral must have at least the same maturity as the exposure.
   * Structurally simpler, less granular.

2. **Comprehensive approach**

   * Keep the **counterparty risk weight**.

   * Adjust the **exposure amount** using haircuts to reflect:

     * Market volatility of collateral,
     * Holding period / margining frequency,
     * Currency mismatches.

   * Requires more data (type of collateral, rating, residual maturity, currency, etc.).

Under the comprehensive approach, Basel defines **volatility-adjusted exposure** and **collateral** using supervisory haircuts.

---

## 7.5 Financial collateral – Indian implementation (RBI view)

### 7.5.1 India uses the comprehensive approach

RBI’s Basel capital regulations explicitly require banks using the Standardised Approach to adopt the **Comprehensive Approach** for financial collateral in the banking book, using **standard supervisory haircuts** (no internal estimates).

For your engine / app, you can safely assume **comprehensive approach** for non-trading book credit exposures in India.

---

### 7.5.2 Eligible financial collateral – key Indian list

RBI’s Basel III regulations and training material (IIBF) list the main types of **eligible financial collateral** under the comprehensive approach.

High-level categories:

1. **Cash and deposits with the lending bank**

   * Cash margins, fixed deposits, certificates of deposit etc. with the bank itself.

2. **Gold and gold jewellery**

   * Bullion and jewellery, valued after converting to an equivalent fine gold content.

3. **Securities issued by Government of India / State Governments**

   * SLR-eligible government securities.

4. **National Savings Certificates (NSC) and Kisan Vikas Patra (KVP)**

   * Provided there is no lock-in and they can be encashed within the holding period.

5. **Life insurance policies**

   * Recognised to the extent of their **surrender value**, where issued by insurers regulated by IRDAI.

6. **Rated non-sovereign debt securities**

   * Senior debt rated at least BBB- (or equivalent) with adequate market liquidity.

7. **Certain unrated bank debt instruments**

   * Senior, exchange-listed bank bonds where **all** senior issues of that bank are rated at least investment-grade.

8. **Units of mutual funds / UCITS-type schemes**

   * Daily NAV publicly available.
   * Fund invests **only** in instruments from the eligible list.

Re-securitisations are generally **not eligible** as financial collateral.

---

### 7.5.3 Haircuts – formula and typical values

Under the comprehensive approach, the exposure and collateral are adjusted using **supervisory haircuts**.

**Core formula (Basel / RBI comprehensive approach):**

\[
E^* = \max\{0,\ E \times (1 + H_e) - C \times (1 - H_c - H_{fx})\}
\]

Where:

* \(E^*\) = exposure value after CRM (volatility-adjusted),
* \(E\) = current exposure value,
* \(H_e\) = haircut on exposure (often 0 for loans),
* \(C\) = current collateral value,
* \(H_c\) = haircut on collateral (market price volatility),
* \(H_{fx}\) = haircut for **currency mismatch**.

**RWA after CRM:**

\[
\text{RWA} = E^* \times \text{RW}_{\text{counterparty}}
\]

Haircuts are specified by instrument type, rating, and residual maturity. Typical patterns (exact values to be taken from the latest RBI tables):

* Government securities:

  * Very low haircuts (e.g. around 0.5% for ≤1 year, increasing with maturity).
* High-quality corporate / PSU debt:

  * Higher haircuts (e.g. around 1% for ≤1 year, 4% for >1–5 years, 8% for >5 years).
* Gold:

  * Significantly higher haircut (commonly 15% under Basel templates, also reflected in many training materials).
* Cash in the **same currency**:

  * **0% haircut**.
* Currency mismatch haircut (H_{fx}):

  * Basel’s standard supervisory value is **8% for a 10-business-day holding period** assuming daily marking to market; this calibration is widely adopted in national rulebooks.

Some Indian instruments like NSC, KVP and surrender value of certain insurance policies may effectively attract **zero haircut** under RBI’s detailed rules, reflecting their low volatility and predictable value.

---

### 7.5.4 Repo-style transactions (high level)

For **repos / reverse repos / securities lending**, Basel and RBI apply similar collateral principles with some specific conditions.

Key points:

* Both legs (cash and securities) may attract capital requirements.
* Where strict conditions are met (e.g. high-quality securities, short maturity, daily margining), the **effective exposure** can be very low.
* In India, repos in SLR securities under standard market conditions often behave close to **secured interbank exposures**.

For this curriculum, it is enough to know that repo-style transactions also sit under the comprehensive approach logic.

---

## 7.6 On-balance sheet netting (loans vs deposits)

**Concept**
If a bank has **loans** to a counterparty and **deposits** from the *same* counterparty, and a robust netting agreement, then for capital purposes the bank may treat **deposits as collateral** and calculate capital on the **net** exposure.

Regulatory conditions (Basel and adopted by RBI):

1. Netting agreement is **legally enforceable** in all relevant jurisdictions, including in insolvency.
2. The bank can **identify at all times** the balances covered by the agreement.
3. The bank **monitors and controls** exposures on a **net basis**.
4. Roll-off / renewal risk is appropriately monitored.

If conditions are met, treat:

* Loans/advances = exposure (E),
* Deposits = collateral (C),

and use the **comprehensive approach formula**, often with:

* \(H_e = 0\),
* \(H_c = 0\),
* \(H_{fx} = 0\) if same currency (or 8% if currency-mismatched).

Then risk-weight (E^*) by the **counterparty risk weight**.

---

## 7.7 Guarantees – substitution approach

### 7.7.1 Concept

When an eligible guarantee exists, the **protected portion** of the exposure can be treated as if it were an exposure to the **guarantor** instead of the original obligor. Basel calls this the **substitution approach**, and RBI follows the same logic.

Let:

* \(E\) = exposure amount (after CCF if OBS; after any collateral E* if relevant),
* \(G_{\text{adj}}\) = effective guaranteed amount after any FX / maturity adjustments,
* \(\text{RW}_o\) = risk weight of original obligor,
* \(\text{RW}_g\) = risk weight of guarantor.

Then:

* Protected portion = \(\min(E,\ G_{\text{adj}})\) → gets \(\text{RW}_g\),
* Unprotected portion = \(\max(0,\ E - G_{\text{adj}})\) → gets \(\text{RW}_o\).

\[
\text{RWA} = \min(E,\ G_{\text{adj}})\times \text{RW}_g + \max(0,\ E - G_{\text{adj}})\times \text{RW}_o
\]

This only reduces RWA if \(\text{RW}_g < \text{RW}_o\).

---

### 7.7.2 Eligibility conditions (RBI / Basel)

Summarised operational requirements for a guarantee to be recognised as CRM:

1. **Direct claim**

   * Guarantee must create a **direct, legally enforceable claim** on the guarantor.

2. **Explicit reference**

   * Guarantee must **clearly reference** the specific exposure(s) or well-defined pool.
   * Coverage must be “clearly defined and incontrovertible”.

3. **Irrevocable**

   * Guarantor cannot cancel unilaterally.
   * No contractual clauses that reduce coverage or increase cost purely because the borrower’s credit quality worsens.

4. **Unconditional**

   * No external conditions are allowed that could block payment.
   * Bank must be able to **pursue the guarantor promptly** upon default, without first exhausting legal remedies against the borrower.

5. **Coverage of principal and interest**

   * Ideally covers **principal + interest** and all material payments.
   * If interest is not covered, that part of the exposure remains **unsecured**.

6. **Non-performing exposures**

   * In India, once an exposure becomes **NPA**, guarantees generally **cease to be recognised** as CRM; the exposure is then risk-weighted net of provisions and any realisable collateral only.

**Eligible guarantors** include (at high level): sovereigns and central banks, certain PSEs, MDBs, banks and supervised financial institutions, export credit agencies, and some highly rated corporates, subject to detailed criteria.

---

### 7.7.3 Partial guarantees

If a guarantee covers only **part** of E:

* Standard assumption is **pro-rata** coverage (same seniority for covered and uncovered portions).
* Apply substitution approach only to the **covered amount**.
* Remaining amount continues under the borrower’s risk weight.

If the guarantee structure is tranched (first-loss / second-loss), treatment may fall under **securitisation** rules and is more complex.

---

## 7.8 Credit derivatives – high-level view

Credit derivatives (e.g. **credit default swaps**) can be recognised as CRM if they meet Basel conditions:

* Reference entity and obligation are **clearly specified**.
* Credit events are clearly defined (e.g. bankruptcy, failure to pay, restructuring – as allowed by domestic rules).
* Settlement mechanics (cash / physical), valuation method and timing are clearly specified.

Recognised credit derivatives are treated like **synthetic guarantees**:

* Effective protection amount is determined (subject to FX and maturity adjustments).
* Apply the **substitution approach** using the protection seller’s risk weight.

Currency mismatch and maturity mismatch are handled via **haircuts** and the **maturity adjustment formula** (see sections 7.9 and 7.10).

---

## 7.9 Maturity mismatches – adjustment formula

A **maturity mismatch** occurs when the residual maturity of the CRM (guarantee / credit derivative / some collateral structures) is **shorter** than the residual maturity of the underlying exposure.

Basel rules (adopted by many regulators) recognise CRM with maturity mismatches only if:

* Original maturity of the CRM ≥ **1 year**, and
* Residual maturity of the CRM > **3 months**.

When recognised, the **effective protection** is scaled down using:

\[
P_a = P \times \frac{t - 0.25}{T - 0.25}
\]

Where:

* \(P_a\) = protection value **after** maturity mismatch adjustment,
* \(P\) = protection amount after any other adjustments (e.g. FX),
* \(t\) = \(\min(T, \text{residual maturity of CRM})\) in years,
* \(T\) = \(\min(5,\ \text{residual maturity of exposure})\) in years.

If eligibility conditions fail (e.g. CRM original maturity less than 1 year, or residual maturity ≤ 3 months), then **no CRM recognition**: \(P_a = 0\).

In an implementation, \(P_a\) is then used instead of \(P\) in the **substitution** or **E*** formulas.

---

## 7.10 Currency mismatches – FX haircut

If the CRM (collateral / guarantee / credit derivative) is denominated in a **different currency** from the exposure, Basel requires an additional **currency mismatch haircut** (H_{fx}).

Standard Basel calibration:

* For a 10-business-day holding period, assuming daily marking-to-market, the **supervisory FX haircut** is **8%**.
* For less frequent revaluation / longer holding periods, the haircut is **scaled up** using the square-root-of-time formula.

Implementation:

* For collateral, (H_{fx}) appears directly in the E* formula:

  \[
  E^* = \max\{0,\ E (1 + H_e) - C(1 - H_c - H_{fx})\}
  \]

* For guarantees / CDS, a simple implementation is:

  \[
  G_{\text{FX-adj}} = G \times (1 - H_{fx})
  \]

  and then, if there is a maturity mismatch, apply the (P_a) formula on (G_{\text{FX-adj}}).

---

## 7.11 Combining CRM with OBS exposures (link to Module 6)

For **off-balance sheet (OBS)** items under the Standardised Approach, the sequence is:

1. **Convert to EAD using CCFs** (Module 6):

   \[
   \text{EAD} = \text{Notional} \times \text{CCF}
   \]

2. **Apply CRM on EAD**, not on gross notional:

   * For collateral: take \(E = \text{EAD}\) in the E* formula.
   * For guarantees / CDS: take \(E = \text{EAD}\) when applying substitution and maturity / FX adjustments.

3. **Apply SA risk weights** to the resulting protected and unprotected portions.

So for an OBS exposure with a guarantee:

* Compute EAD via CCF,
* Adjust guarantee for FX and maturity → (G_{\text{adj}}),
* Split EAD into protected / unprotected portions and risk-weight accordingly.

Basel and RBI follow this **CCF → CRM → RW** ordering for consistency.

---

## 7.12 Engine / implementation view – how banks actually calculate

A realistic SA + CRM pipeline for **one exposure** looks like:

1. **Read core attributes**

   * Counterparty type, exposure class (sovereign, bank, corporate, retail, etc.).
   * Product type (loan, guarantee, LC, etc.).
   * On-balance vs off-balance.
   * Notional, drawn / undrawn amounts, currencies, original and residual maturities.

2. **Compute EAD**

   * On-balance: book value (net of specific provisions / partial write-offs where rules allow).
   * Off-balance: notional × CCF based on OBS category (Module 6).

3. **Identify attached CRM**

   * Collateral: type, value, currency, maturity, issuer / rating.
   * Guarantees / CDS: provider, notional, currency, maturity.
   * Netting agreements (loans vs deposits).

4. **Split into slices if multiple CRM**

   * For example: one portion covered by collateral, another by guarantee, remainder unprotected.
   * Basel explicitly requires separate treatment of each slice when multiple CRM types apply.

5. **Apply CRM per slice**

   * **Collateral slice**:

     * Select (H_e, H_c, H_{fx}) from supervisory tables.
     * Compute (E^*) using the comprehensive approach formula.
     * Risk-weight (E^*) by the counterparty’s risk weight.

   * **Guarantee / CDS slice**:

     * Adjust protection for FX (use (H_{fx})) and, if needed, maturity (use (P_a) formula).
     * Apply the substitution approach to allocate EAD between guarantor RW and borrower RW.

   * **Netting slice**:

     * Treat deposit as collateral; apply comprehensive approach (often with zero haircuts if same-currency cash).

6. **Aggregate**

   * Sum RWA across all slices and all exposures.
   * Feed into **total credit risk RWA**, and then into CET1 / Tier 1 / Total capital ratios.

For a product / engine design mindset, it helps to model CRM as **separate objects** linked to exposures (with type, coverage %, currency, maturity, eligibility flags) rather than just a boolean flag.

---

## 7.13 Key points and practical notes for Module 7

1. **Always think in sequence: EAD → CRM → RW**

   * First turn everything into **EAD** (including CCF for OBS).
   * Then apply CRM (collateral formula or substitution).
   * Finally apply **Standardised Approach risk weights**.

2. **Collateral vs guarantees target different dimensions**

   * **Collateral** reduces **loss severity** → adjust **exposure** (E*).
   * **Guarantees / CDS** reduce **default risk** → change **who you risk-weight against** (substitution).

3. **Indian banking-book SA = comprehensive approach + standard haircuts**

   * No choice between simple and comprehensive for most credit exposures.
   * No internal haircut estimates; banks use **RBI’s standard supervisory haircuts**.

4. **Cash collateral in same currency is extremely powerful**

   * Haircuts are typically zero; in many cases **E* can be very small** for the cash-collateralised portion.
   * But the risk weight is still that of the **counterparty** – CRM reduces exposure, not the counterparty class.

5. **Guarantor must be “better” than the borrower**

   * If the guarantor’s risk weight is **not lower** than the borrower’s, substitution will not reduce RWA.
   * This is why guarantees from sovereigns / strong banks are extremely capital-efficient.

6. **Non-performing exposures: CRM recognition becomes conservative**

   * RBI’s treatment of NPAs emphasises **provisions and realisable collateral**.
   * Guarantees often stop being recognised as CRM once the exposure is NPA – very important for discussions around stressed portfolios.

7. **Maturity and currency mismatches quietly eat into protection**

   * Shorter-dated protection or FX-mismatched protection results in **scaled-down effective cover** via (P_a) and (H_{fx}).
   * In design / analysis, always check: *“Is the protection aligned in maturity and currency with the exposure?”*

8. **Implementation practice: CRM as a separate data layer**

   * In real RWA engines, CRM is usually maintained in **separate tables** (mitigant master, collateral positions, guarantees) and then linked to exposures via IDs and coverage percentages.
   * This design also makes **what-if analysis** easy (e.g. switch off a guarantee, change haircuts, or model a new RBI circular).

---

### Reference links for Module 7

[1]: https://www.bis.org/basel_framework/chapter/CRE/22.htm "CRE22 – Standardised approach: credit risk mitigation (Basel Framework)"
[2]: https://www.bis.org/publ/bcbs128.pdf "International Convergence of Capital Measurement and Capital Standards: A Revised Framework (Basel II – CRM annexes)"
[3]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf "RBI – Master Circular: Basel III Capital Regulations (includes CRM and off-balance sheet treatment)"
[4]: https://www.iibf.org.in/documents/BASEL-III.pdf "IIBF – Basel III Capital Regulations (Indian implementation, CRM & haircuts summary)"
[5]: https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/capital-adequacy-requirements-car-2024-chapter-4-credit-risk-standardized-approach "OSFI Canada – Capital Adequacy Requirements, Chapter 4 (Standardised Approach; FX haircut 8%)"
[6]: https://rbi.org.in/upload/notification/pdfs/61023.pdf "RBI – Guidelines on Comprehensive Approach haircuts (gold, supervisory haircuts, scaling)"
[7]: https://www.fsa.go.jp/inter/bis/bj_20010117_1/1k.pdf "Basel Committee – Consultative document with examples on CRM, currency mismatch and maturity mismatch (Pa formula, 8% FX haircut)"
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
              content: `# Module 8 – Securitisation & Other Pillar 1 Risks (Market & Operational)

## 8.1 What securitisation is (in capital language)

In regulatory capital terms, **securitisation** means:

> Taking a pool of exposures (usually loans), transferring them to a special-purpose vehicle (SPV), and issuing **tranches** of securities backed by the cash flows of that pool.

Core elements:

1. **Originator**
   The bank (or other lender) that owns the original loans (e.g. mortgages, auto loans, credit card receivables).

2. **SPV / trust**
   A bankruptcy-remote entity that buys the loans and issues securities backed by them.

3. **Underlying pool**
   The set of loans or receivables whose cash flows support the securities.

4. **Tranches issued by the SPV**

   * **Senior tranche** – paid first; lowest credit risk.
   * **Mezzanine tranche(s)** – paid after senior; absorbs losses after equity.
   * **Equity / first-loss tranche** – takes losses first; highest credit risk.

5. **Loss waterfall**

   * Cash flows and losses are allocated **bottom-up**:

     * Losses hit **equity** first,
     * then **mezzanine**,
     * then **senior**.
   * This allows a pool of similar loans to be sliced into tranches with very different risk profiles.

From a **bank capital** point of view, a **securitisation exposure** is any exposure the bank has **to the securitisation structure**, for example:

* Holding a senior/mezzanine/equity tranche.
* Providing a **liquidity facility** to the SPV.
* Providing **credit enhancement** (e.g. guarantees, letters of credit).
* Providing warehouse or bridge funding linked to the securitisation.

It is **not** the underlying loans themselves (those have been transformed into securitisation exposures for capital purposes).

---

## 8.2 Why regulators treat securitisation harshly

After the 2007–09 crisis, supervisors identified several problems with pre-crisis securitisation:

1. **Model risk and complexity**

   * Very complex structures and models.
   * Heavy dependence on assumptions that broke down in stress.

2. **Correlation and tail risk**

   * Correlations between borrowers and housing markets spiked.
   * Senior tranches turned out to be more vulnerable than expected.

3. **Opacity and incentives**

   * Originators could “arbitrage” capital, moving risky exposures off balance sheet but still retaining economic risk.
   * Investors often relied on ratings without understanding the structure.

Basel III’s securitisation framework reacts by:

* Setting **strict operational requirements** (true sale, risk retention, etc.).
* Creating a **hierarchy of capital approaches** with prescribed parameters.
* Introducing a very punitive **fallback risk weight of 1250%** for exposures where the bank cannot (or is not allowed to) use the securitisation approaches.

The overall philosophy is: **no capital relief without strong evidence and strict conditions**.

---

## 8.3 Basel securitisation capital – high-level mechanics

The Basel framework treats securitisation exposures under a **dedicated set of rules** (CRE40+). The key features are:

1. **Operational requirements**

   * Requirements for “traditional” vs “synthetic” securitisations.
   * Conditions to recognise significant risk transfer.
   * Risk retention rules (“skin in the game”).

2. **Hierarchy of approaches**

   Depending on whether the bank uses Standardised or IRB for the underlying pool and on data availability, Basel prescribes:

   * **SEC-IRBA** – IRB-based securitisation approach (uses underlying IRB parameters).
   * **SEC-ERBA** – External Ratings-Based Approach (uses recognised external ratings).
   * **SEC-SA** – Standardised Approach (uses underlying Standardised Approach parameters, often denoted KSA).

   The bank must use the **highest-priority approach for which it meets all conditions**.

3. **Risk-weighting of tranches**

   Each approach gives formulas / tables that assign **risk weights** to tranches based on:

   * Tranche **seniority and thickness**.
   * Attachment and detachment points (how much subordination is beneath the tranche).
   * Quality of the underlying pool (e.g. KIRB or KSA).
   * Presence of credit enhancement, liquidity facilities, etc.

4. **Fallback: 1250% risk weight**

   If none of the securitisation approaches can be applied (or if operational requirements are not met), the exposure must receive a **1250% risk weight**.

### 8.3.1 The 1250% risk weight – maths and intuition

Let **E** be the exposure amount of a securitisation position.

Fallback rule:

\[
\text{RWA} = E \times 1250\% = 12.5 \times E
\]

Minimum Pillar 1 capital (Basel template):

\[
K = 8\% \times \text{RWA}
= 8\% \times (12.5 \times E)
= 1.0 \times E
\]

So under the **8% global minimum**, the capital charge equals **100% of the exposure** – economically very similar to **deducting the exposure from capital** (pre-Basel III, such exposures were often directly deducted).

Intuition:

> If the bank cannot meet securitisation conditions or apply the formulas, **no capital relief is granted**. It must hold capital as if the exposure might be fully lost.

This is why people often say “**1250% is like a deduction**”.

---

## 8.4 Simple view of securitisation capital in practice

At a high level, the securitisation capital process is:

1. **Identify securitisation exposures**

   * Tranches held (senior / mezzanine / equity).
   * Liquidity lines, credit enhancement, facilities to the SPV.
   * Warehousing exposures that will be securitised.

2. **Check operational requirements**

   * For traditional securitisation: true sale, transfer of credit risk, no implicit support, etc.
   * For synthetic securitisation: credit derivatives/guarantees meet Basel conditions.

3. **Determine applicable approach**

   * Use hierarchy: SEC-IRBA → SEC-ERBA → SEC-SA (if conditions met).
   * If none apply (or conditions not fulfilled) → **1250% RW**.

4. **Calculate risk weight**

   * Use the relevant securitisation formula / table to get RW for that tranche or exposure.
   * Risk weight will typically:

     * Be **lowest** for thick, senior tranches of high-quality pools.
     * Be **highest** for thin, mezzanine or equity tranches.

5. **Compute RWA and capital**

   * \(\text{RWA} = \text{EAD} \times \text{RW}\).
   * Capital = 8% × RWA (before buffers and overlays).

In these notes, the focus is on the **logic** and **1250% fallback**, rather than coding the full SEC-IRBA/ERBA/SA formulas.

---

## 8.5 India – securitisation capital (conceptual view)

RBI’s **Basel III Capital Regulations** adopt the Basel securitisation framework for Indian banks. Key points from RBI material and IIBF notes:

* RBI defines **securitisation exposures** consistently with Basel:

  * Tranches held (including pass-through certificates),
  * Credit-enhancing interest-only strips,
  * Liquidity facilities and credit enhancements,
  * Other exposures to securitisation structures.

* For many positions, risk weights depend on:

  * External rating of the tranche,
  * Seniority (senior vs mezzanine vs junior),
  * Whether the exposure qualifies as **resecuritisation** (which is treated especially harshly).

* Certain exposures (e.g. some credit-enhancing IO strips, deeply subordinated positions) are required to be:

  * **Deducted from capital**, or
  * **Risk-weighted at 1250%**.

The Indian flavour is mainly in:

* The **exact risk-weight tables**, and
* RBI’s detailed conditions for recognising securitisations and risk transfer.

Conceptually:

> Securitisation exposures in India either get **specific risk-weight bands** under the securitisation framework or, if conditions are not met, are treated with very high RW (e.g. 1250%) or deductions.

---

## 8.6 Market risk capital – global Basel view

### 8.6.1 Trading book vs banking book

Basel makes a formal distinction between:

* **Trading book**

  * Positions held with **intent to trade** or to hedge other trading book positions.
  * Short-term, liquid, marked-to-market daily.
  * Includes debt and equity instruments, FX, commodities and most trading derivatives.

* **Banking book**

  * Loans, deposits, held-to-collect investments.
  * Interest Rate Risk in the Banking Book (IRRBB) is typically handled under **Pillar 2** (or dedicated guidelines), not under market risk Pillar 1.

**Market risk capital** in Basel Pillar 1 is about **trading book** (plus certain structural FX/commodity positions).

### 8.6.2 Pre-FRTB (Basel II / “Basel 2.5”) – high level

Historically, there were two main approaches:

1. **Standardised Approach**

   * Separate capital charges for:

     * Specific risk and general market risk in interest-rate instruments,
     * Equity risk,
     * FX risk,
     * Commodity risk.

   * Based on position amounts multiplied by **prescribed risk weights**, and **duration / maturity bands** for interest-rate risk.

2. **Internal Models Approach (IMA)**

   * Capital based on **Value-at-Risk (VaR)** models, often with:

     * Stressed VaR,
     * Incremental Risk Charge (IRC),
     * Comprehensive risk measures for correlation trading.

   * Requires supervisory approval and extensive back-testing / validation.

The crisis showed limitations of VaR and the flexibility of the trading/banking boundary, leading to the **Fundamental Review of the Trading Book (FRTB)**.

### 8.6.3 FRTB – Basel III market risk standard

Under FRTB (“Minimum capital requirements for market risk”):

1. **Stricter trading/banking boundary**

   * Detailed rules for what can sit in trading vs banking book.
   * Reduces “capital arbitrage” by shifting positions back and forth.

2. **Two approaches**

   * **Standardised Approach for Market Risk (SA-MR)**

     * Uses **sensitivities** of positions to risk factors (interest rates, credit spreads, equity prices, FX, commodities).
     * Applies **risk weights** to these sensitivities.
     * Includes additional default risk and residual risk add-ons.

   * **Internal Models Approach (IMA)**

     * Based on **Expected Shortfall (ES)** (not VaR) at a high confidence level.
     * Requires:

       * Back-testing,
       * Profit-and-loss attribution,
       * Identification of **modellable** vs **non-modellable** risk factors (NMRFs).

3. **Calibration goal**

   * Make the standardised approach **risk-sensitive** enough to be a credible fallback.
   * Reduce **RWA variability** between banks with similar trading books.

In short:

> Under FRTB, market risk capital is calculated either via a **sensitivity-based Standardised Approach** or an **ES-based Internal Models Approach**, with strict rules on what counts as trading book.

### 8.6.4 India – market risk capital context

Historically, RBI’s capital adequacy guidelines for Indian banks have:

* Required the **Standardised Duration Approach** for interest-rate risk in the trading book.
* Used standardised methods for equity, FX and commodity risk.
* Treated market risk charges as part of total RWA.

In recent years, RBI has published draft guidelines to move towards **Basel III FRTB** for market risk for scheduled commercial banks, with phased implementation (timelines still under evolution).

For this module’s purposes, the key ideas are:

* Market risk = Pillar 1 capital for **trading book + some FX/commodity positions**.
* Approaches are **standardised** and/or **model-based** (FRTB).
* In India, the framework is moving from older standardised methods towards FRTB-style methods.

---

## 8.7 Operational risk capital – global Basel view

**Operational risk** is defined by Basel as:

> “The risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.”

### 8.7.1 Basel II methods (legacy)

Under Basel II, three main approaches were available:

1. **Basic Indicator Approach (BIA)**

   * Very simple formula:

     \[
     K_{\text{operational}} = \alpha \times GI
     \]

     where:

     * \(GI\) = **Gross Income** (3-year average),
     * \(\alpha = 15\%\).

2. **Standardised Approach (TSA/ASA)**

   * Bank’s activities split into **business lines** (corporate finance, trading & sales, retail banking, etc.).

   * For each business line \(i\):

     \[
     K_i = \beta_i \times GI_i
     \]

     where \(GI_i\) = gross income for business line \(i\), and \(\beta_i\) is a prescribed percentage (differs by business line).

   * Total capital = 3-year average of \(\sum_i K_i\).

3. **Advanced Measurement Approaches (AMA)**

   * Banks used **internal models** (loss distribution, scenario analysis, etc.), subject to supervisory approval.

These methods were criticised for weak link to actual loss experience and for complexity in AMA.

### 8.7.2 Basel III – Standardised Measurement Approach (SMA)

Basel III replaces all of BIA, TSA and AMA with a single **Standardised Measurement Approach (SMA)**.

Key components:

1. **Business Indicator (BI)**

   * A financial-statement-based measure combining:

     * Interest, leases and dividend component,
     * Services component (fees/commissions),
     * Financial component (trading, fair-value gains/losses).

   * Calculated as a 3-year average.

2. **Business Indicator Component (BIC)**

   * A **piecewise function** of BI (similar to income tax brackets).
   * As BI increases, marginal coefficients increase → larger banks pay higher BIC.

3. **Loss Component (LC)**

   * Based on the bank’s **historical operational loss data** over 10 years.
   * Large, frequent losses push LC higher.

4. **Internal Loss Multiplier (ILM)**

   * A function of LC and BIC.
   * If losses are high relative to BI, ILM > 1; if losses are in line with the industry, ILM is closer to 1.

5. **Final capital charge**

   \[
   K_{\text{operational}} = \text{BIC} \times \text{ILM}
   \]

So:

* BI captures **size and activity**.
* ILM introduces **penalty or uplift** based on actual loss experience.

### 8.7.3 India – operational risk implementation

In Indian implementation of Basel II:

* RBI required banks to adopt at least the **Basic Indicator Approach** for operational risk, with scope to move to Standardised Approach with approval.

As Basel III SMA becomes the global standard, RBI is working on aligning Indian regulations (e.g. recent KPMG/RBI discussions on Basel III standardised approaches including operational risk).

For conceptual understanding:

* BIA (α × Gross Income) remains important to know for **legacy and local rules**.
* SMA (BI + LC + ILM) is the **direction of travel** in the global Basel III framework.

---

## 8.8 Putting it all together – total RWA and capital requirement

At the end of Pillar 1, the bank aggregates risk across three main buckets:

1. **Credit risk RWA**

   * Includes:

     * On-balance-sheet credit exposures (Standardised or IRB),
     * Off-balance-sheet exposures (after CCFs, Module 6),
     * **Credit Risk Mitigation** (Module 7),
     * **Securitisation positions** (this module),
     * Counterparty credit risk for derivatives (where applicable),
     * CVA risk (where applicable).

2. **Market risk RWA**

   * Trading book market risk (FRTB SA-MR or IMA, or legacy approaches),
   * FX and commodity positions where included in Pillar 1.

3. **Operational risk RWA**

   * Under BIA, TSA/ASA, AMA or SMA, depending on the regime.

The basic Pillar 1 minimum capital requirement uses:

\[
\text{RWA}_{\text{total}} =
\text{RWA}_{\text{credit}} +
\text{RWA}_{\text{market}} +
\text{RWA}_{\text{operational}}
\ (+\text{CVA, etc. where applicable})
\]

\[
K_{\text{Pillar 1}} = 8\% \times \text{RWA}_{\text{total}}
\]

Capital ratios (from Module 3) are then:

\[
\text{CET1 Ratio} = \frac{\text{CET1}}{\text{RWA}_{\text{total}}},
\quad
\text{Tier 1 Ratio} = \frac{\text{Tier 1}}{\text{RWA}_{\text{total}}},
\quad
\text{Total Capital Ratio} = \frac{\text{Total Capital}}{\text{RWA}_{\text{total}}}
\]

Jurisdictions overlay:

* **Basel III buffers** (CCB, CCyB, systemic buffers), and
* **Local minima** (for example, India’s 9% minimum total capital vs Basel’s 8%).

So:

> **Total RWA** is the common denominator; every Pillar 1 risk type eventually feeds into the same RWA stack.

---

## 8.9 Key points and practical notes

1. **Securitisation capital in one line**

   * Securitisation exposures are handled in a dedicated framework; if the bank cannot meet conditions or apply one of the securitisation approaches, the exposure is given **1250% RW**, which is roughly equivalent (under the 8% minimum) to **deducting it from capital**.

2. **Trading book vs banking book**

   * Trading book = positions held for short-term resale or hedging other trading positions, marked-to-market daily.
   * Banking book = hold-to-collect exposures (loans, deposits, many investments).
   * Market risk capital under FRTB sits on the trading book; **IRRBB** is mainly a **Pillar 2** topic.

3. **FRTB big picture**

   * Replaces VaR with **Expected Shortfall**, introduces modellable vs non-modellable risk factors and stricter trading/banking boundaries, and makes the **standardised approach risk-sensitive enough** to serve as a fallback if internal models are not allowed or fail validation.

4. **Old vs new operational risk approaches**

   * Basel II: BIA, TSA/ASA, AMA – mostly **Gross Income × factor** logic.
   * Basel III: SMA – combines a **Business Indicator (BI)** with **internal loss experience** via BIC × ILM.

5. **Helicopter view of Pillar 1**

   * Credit risk (including securitisation) + market risk + operational risk are all converted to **RWA** and then multiplied by **8%** to obtain Pillar 1 capital.
   * Local regulators (like RBI) implement higher minima and buffers, so banks must manage not just the global template but also **local overlays**.

---

### Reference links for Module 8

[1]: https://www.bis.org/basel_framework/chapter/CRE/40.htm "Basel Framework – Securitisation: General provisions (CRE40)"
[2]: https://www.bis.org/bcbs/publ/d457.htm "Basel Committee – Minimum capital requirements for market risk (FRTB)"
[3]: https://www.bis.org/bcbs/publ/d424.htm "Basel Committee – Basel III: Finalising post-crisis reforms (includes Operational Risk SMA)"
[4]: https://rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12678 "RBI Master Circular – Basel III Capital Regulations (India)"
[5]: https://www.iibf.org.in/documents/BASEL-III.pdf "IIBF – Basel III Capital Regulations (Indian context)"
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
              content: `# Module 9 – RWA Engine Design & Implementation (Basel + RBI SA)

## 9.1 What this module is really about

So far you’ve learned **rules** (Basel / RBI) and **math** (capital, RWA, CCFs, haircuts).

Module 9 is about how a real bank **turns all that into a working engine**:

* What data you need
* How it flows
* In what order you apply rules
* Where typical **controls** and **pitfalls** are

This is exactly the layer your **web app / portfolio project** can simulate: a simplified RWA engine that follows the same flow banks use for regulatory reporting.

---

## 9.2 Core data model – what the engine must “know”

At minimum, an SA-based RWA engine for an Indian bank needs these **logical entities**.

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

* \`NPA_status\` at counterparty level (optional; NPAs usually tracked at facility level)

Used for:

* Exposure class decision (sovereign vs bank vs corporate vs retail).
* Country risk, large exposure limits, etc.

---

### 9.2.2 Facility / exposure / limit

This is the **heart** of RWA:

* \`facility_id\`

* \`counterparty_id\`

* \`product_type\`

  * Term loan, working capital limit, CC/OD, BG, LC, SBLC, derivatives, investments, etc.

* \`on_balance_flag\` (funded vs purely OBS)

* \`sanction_limit\` (facility-level limit)

* \`current_outstanding\` (funded)

* \`undrawn_amount\`

* \`off_balance_notional\` (for pure OBS like standalone guarantees)

* \`original_maturity\` and \`residual_maturity\`

* \`interest_rate_type\` (fixed/floating) – useful for IRRBB/ALM, not core for SA credit RWA

* \`purpose_code\` / \`loan_purpose\` (helps classify CRE, CRE-RH, housing, etc.)

* \`NPA_flag\` and \`NPA_category\` (standard / substandard / doubtful / loss)

* \`specific_provisions\` (loan loss provisions)

* \`portfolio_code\` (corporate / SME / retail / agri, etc.)

Used for:

* EAD (exposure amount + CCFs),
* Exposure class (e.g. CRE vs residential mortgage vs retail),
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

* \`maturity\` (if relevant – e.g. term deposits)

* \`seniority_flag\` (is collateral senior to exposure in insolvency?)

**Guarantee / credit protection table**:

* \`guarantee_id\`
* \`linked_facility_id\`
* \`guarantor_id\` (must be a counterparty)
* \`guarantee_amount\`
* \`coverage_percentage\`
* \`currency\`
* \`original_maturity\`, \`residual_maturity\`
* \`guarantee_type\` (sovereign / bank / corporate / ECA, etc.)
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
* \`rating_symbol\` (AAA, AA, BBB−, etc.)
* \`rating_type\` (long-term / short-term, issue / issuer)
* \`rating_scale\`
* \`effective_date\`, \`expiry_date\`

Plus **reference tables**:

* \`ECAI_rating_to_CQS\` (rating → Credit Quality Step)
* \`CQS_to_RW_by_asset_class\` (CQS → RW for sovereign, banks, corporates, etc., per RBI tables)

Used for:

* Risk-weight selection under SA (Modules 4 & 5).

---

### 9.2.5 Regulatory parameter tables

Your engine should externalise **all Basel / RBI parameters** into tables / config instead of hard-coding them:

* **Risk-weight tables**:

  * For each asset class (sovereign, bank, corporate, retail, housing, CRE, CRE-RH, NPAs, etc.).
  * For each rating bucket / LTV bucket / product category.

* **CCF tables** (Module 6):

  * OBS type → CCF (direct credit substitutes, performance guarantees, trade LCs, commitments ≤1 year, >1 year, UCC).

* **Haircut tables** (Module 7):

  * Instrument type, rating, maturity → supervisory haircuts (Hₑ, H꜀).
  * FX pair → Hfx (e.g. 8%).

* **Buffer thresholds** (for capital ratios & constraints):

  * Minimum CET1, Tier 1, Total capital.
  * CCB, CCyB, systemic buffers (Basel + India).

This design makes your engine robust to Basel 3.1 / RBI changes: you update **parameter tables**, not code.

---

## 9.3 High-level RWA engine pipeline

Think of one **big pipeline** that runs monthly/quarterly (and often in simplified form daily):

1. Data ingestion
2. Exposure classification
3. EAD calculation (on + off balance)
4. Apply CRM (collateral & guarantees)
5. Assign risk weights
6. Compute RWA & capital
7. Aggregate, reconcile, and explain movements

We’ll walk through each step.

---

## 9.4 Step 1 – Data ingestion & staging

### 9.4.1 Sources

Typical real-world sources:

* **Core banking system** – loans, limits, deposits, NPAs, provisions.
* **Treasury / trading systems** – bonds, derivatives, repos, FX, etc.
* **Collateral management system** – pledged securities, valuations.
* **Market data** – prices, FX rates.
* **Reference data** – customer master, ratings master, internal product taxonomy.

Data is loaded into a **staging / data warehouse** layer, often via ETL jobs.

### 9.4.2 Data quality checks

Before running RWA, banks run **data quality (DQ) checks**:

* Missing critical fields:

  * Counterparty ID, product type, limit, outstanding, maturity, NPA flag, etc.

* Referential integrity:

  * Every facility’s counterparty exists in the counterparty table.

* Reasonableness:

  * Negative outstandings? Limit < outstanding?
  * Maturity dates in the past?
  * Provisions > exposure?

Failures go to **exceptions** and must be corrected or treated conservatively (e.g. higher RW).

---

## 9.5 Step 2 – Exposure classification

This is where your **Basel / RBI logic** is applied.

### 9.5.1 Global Basel classification (Module 4)

Using \`counterparty_type\`, \`product_type\`, \`purpose\`, \`collateral_type\`, etc., you determine:

* Sovereign / central bank
* PSE
* Bank / securities firm
* Corporate
* Retail (regulatory retail or not)
* Secured by residential / commercial real estate
* Securitisation exposure
* Equity exposure
* Past-due / NPA
* Other assets

### 9.5.2 India-specific classification (Module 5)

For an Indian SA engine, classification needs **RBI-specific** logic, for example:

* **Regulatory retail** – check all 4 conditions:

  * Orientation – individual / small business with turnover < ₹50 crore.
  * Product – allowed retail products (not capital market, not certain excluded categories).
  * Granularity – no single counterparty > 0.2% of regulatory retail portfolio.
  * Total exposure per counterparty ≤ ₹5 crore (including off-balance sheet).

* **Residential housing loans** – check:

  * Fully secured by residential property.
  * LTV buckets (≤90%, ≤80%, ≤75%).
  * Loan size buckets (≤₹20 lakh, ₹20–75 lakh, >₹75 lakh).
  * Whether it is first / second / third dwelling unit (3rd onwards often CRE).

* **CRE vs CRE–RH vs non-CRE** – based on project type and cash flows.

* **NPAs** – NPA category + level of specific provisions → maps to NPA RW table.

Implementation-wise, your engine will have rule logic such as:

\`\`\`text
if counterparty_type in {GoI, RBI, state_govt} and currency='INR' and funded_in_INR:
    exposure_class = 'Domestic Sovereign'
elif product_type = 'Housing Loan' and purpose = 'Residential' and qualifies_LTV_and_amount_buckets:
    exposure_class = 'Residential Mortgage – bucket X'
elif meets_regulatory_retail_tests:
    exposure_class = 'Regulatory Retail'
elif is_CRE_project:
    exposure_class = 'Commercial Real Estate'
...
\`\`\`

These classification flags then drive **which risk-weight table** is used.

---

## 9.6 Step 3 – EAD calculation (on + off balance)

We now plug the EAD formulas from Modules 4 and 6 into the engine.

### 9.6.1 On-balance sheet

For each on-balance exposure (i):

$$
\\text{EAD}_{\\text{on}, i}
= \\max\\bigl(0,\\ \\text{Gross exposure}_i - \\text{specific provisions}_i - \\text{write-offs}_i\\bigr)
$$

Basel SA uses exposures **net of specific provisions / partial write-offs** for risk-weighting.

### 9.6.2 Off-balance sheet

For each OBS item (k):

1. Determine OBS category (direct credit substitute, performance guarantee, trade LC, commitment ≤1 year, >1 year, UCC, etc.).
2. Get CCF from the RBI Basel III CCF table.
3. Compute:

$$
\\text{EAD}_{\\text{off}, k} = \\text{Notional}_k \\times \\text{CCF}_k
$$

### 9.6.3 Mixed facilities (drawn + undrawn)

For a facility with:

* Limit (L)
* Drawn (D)
* Undrawn (U = L - D)

Then:

$$
\\text{EAD}_{\\text{on}} = \\max(0,\\ D - \\text{provisions})
$$

$$
\\text{EAD}_{\\text{off}} = U \\times \\text{CCF}
$$

$$
\\text{EAD}_{\\text{total}} = \\text{EAD}_{\\text{on}} + \\text{EAD}_{\\text{off}}
$$

This $\\text{EAD}_{\\text{total}}$ then flows into CRM and risk-weighting.

---

## 9.7 Step 4 – Apply CRM (collateral, guarantees, netting)

This is where Module 7 logic plugs in.

### 9.7.1 Decompose exposures into CRM slices

For each facility:

* Identify attached **collateral** and **guarantees/CDS**.
* Decide how to **split** the exposure:

  * e.g. first X fully covered by cash collateral, next Y guaranteed, remainder unsecured.

You end up with multiple **slices**:

* Slice A – cash-collateralised
* Slice B – other financial collateral
* Slice C – guaranteed by sovereign/bank/corporate
* Slice D – unprotected

Regulations explicitly expect that when multiple CRM techniques apply to the same exposure, the exposure is split and each slice treated separately.

### 9.7.2 Collateral (comprehensive approach – India)

For a collateralised slice:

$$
E^* = \\max\\{0,\\ E \\times (1 + H_e) - C \\times (1 - H_c - H_{fx})\\}
$$

Where:

* $E$ = EAD of that slice
* $C$ = collateral value
* $H_e$, $H_c$ = supervisory haircuts for exposure and collateral
* $H_{fx}$ = currency mismatch haircut

Then:

$$
\\text{RWA}_{\\text{slice}} = E^* \\times \\text{RW}_{\\text{counterparty}}
$$

### 9.7.3 Guarantees / credit derivatives (substitution approach)

For a guaranteed slice:

1. Start from $E = \\text{EAD of slice}$.
2. Adjust protection for FX and maturity mismatch:

$$
P_a = P \\times \\frac{t - 0.25}{T - 0.25}
$$

where $P$ = nominal protection, $t$ = min(T, residual maturity of CRM), $T$ = min(5 years, residual maturity of exposure).

3. Then:

* Protected part = $\\min(E, P_a)$ → risk-weighted at **guarantor’s RW ($RW_g$)**.
* Unprotected part = $E - \\min(E, P_a)$ → risk-weighted at **borrower’s RW ($RW_o$)**.

$$
\\text{RWA}
= \\min(E, P_a)\\times RW_g
+ \\max(0, E - P_a)\\times RW_o
$$

From an implementation standpoint, once Pₐ is computed, this is straightforward arithmetic.

---

## 9.8 Step 5 – Risk weight assignment

Once you have final EAD / E* for each slice, you assign **risk weights** using:

* Exposure class (classification step),
* Rating (if allowed / available),
* LTV / product type (for mortgages),
* NPA status & provisioning (for NPAs),
* Securitisation flags (if applicable).

### 9.8.1 SA – global view

Under Basel SA, you reference CRE20/21 tables for:

* Sovereigns,
* Banks (including SCRA under Basel 3.1),
* Corporates,
* Retail,
* Real estate,
* Equity,
* Past-due exposures,
* Securitisation positions (under SA).

### 9.8.2 SA – India (RBI) view

In India, you use **RBI’s** SA tables instead of the Basel template numbers:

* Claims on sovereigns & central banks (GoI, RBI, foreign sovereigns).
* Banks & PDs (RW by rating, sometimes by tenor).
* Corporates / NBFC-IFCs / AFCs.
* Regulatory retail (typically 75% RW if the criteria are satisfied).
* Residential housing loans (LTV × loan size matrix – 50%, 75%, etc.).
* CRE and CRE–RH buckets.
* NPAs (RW 150%, 100%, 50% depending on coverage).
* Securitisation exposures (rating-based RWs or 1250% / deductions for certain positions).

In code, this is conceptually:

\`\`\`text
RW = RW_table[exposure_class][rating_or_LTV_or_NPA_bucket]
\`\`\`

---

## 9.9 Step 6 – Compute RWA & capital

For each slice (j):

$$
\\text{RWA}_j = \\text{EAD or } E^*_j \\times \\text{RW}_j
$$

Sum across all slices/exposures:

$$
\\text{RWA}_{\\text{credit}} = \\sum_j \\text{RWA}_j
$$

Then add market and operational risk components:

$$
\\text{RWA}_{\\text{total}} =
\\text{RWA}_{\\text{credit}} +
\\text{RWA}_{\\text{market}} +
\\text{RWA}_{\\text{operational}}
\\ (+\\text{CVA, etc. where applicable})
$$

Pillar 1 capital requirement (Basel template):

$$
K_{\\text{Pillar 1}} = 8% \\times \\text{RWA}_{\\text{total}}
$$

In India, banks must also satisfy:

* Minimum total capital ratio **9%** of RWA, plus
* Capital Conservation Buffer (**2.5%** of RWA in CET1), and any other buffers set by RBI.

So in practice, Indian banks often target total capital ratios of **~11.5% or higher** in normal conditions.

---

## 9.10 Step 7 – Aggregation, reporting & controls

### 9.10.1 Aggregation dimensions

The engine must be able to aggregate EAD and RWA by multiple dimensions:

* Regulatory exposure class (sovereign, bank, corporate, retail, housing, CRE, CRE–RH, NPA, securitisation, etc.).
* Internal portfolio / business segment (corporate, SME, retail, agri, etc.).
* Counterparty / group / sector / region.
* Rating grade, LTV bucket, product type.

These feed:

* **Regulatory returns** (Basel III capital adequacy returns to RBI),
* **Pillar 3 disclosures** (tables by risk type / exposure class),
* **Internal management information** (RWA by business, RoRWA, etc.).

### 9.10.2 Reconciliation and controls

Key control themes:

1. **Balance sheet reconciliation**

   * Sum of exposures in the RWA engine (plus any items deducted from capital) should reconcile to:

     * Total assets,
     * Off-balance sheet commitments,

     after adjusting for differences in consolidation scope and measurement.

2. **Movement analysis**

   * Analyse change in RWA from period t−1 to t as:

     * Volume effect (balances up/down),
     * Mix effect (portfolio shift),
     * CRM effect (new collateral / guarantees),
     * Parameter/ methodology changes (e.g. new RW tables),
     * FX effect.

3. **Capital ratios check**

   * CRAR / CET1 / Tier 1 and leverage ratio from the engine should tie to:

     * Regulatory capital returns,
     * Public financial statements (within known reconciliation items).

4. **Data quality dashboards**

   * KPIs: missing rating / LTV / collateral data,
   * Number and value of exposures failing classification/CCF/CRM eligibility checks,
   * Percentage of book covered by “clean” data.

---

## 9.11 How this becomes a strong portfolio project

Your web app can showcase a **mini RWA engine** by:

1. **Implementing a simplified data model**

   * Let users upload a CSV with fields like counterparty type, product, limit, outstanding, LTV, rating, collateral, guarantee, etc.
   * Map those into internal entities (\`counterparty\`, \`facility\`, \`collateral\`, \`guarantee\`, etc.).

2. **Running rule-based classification**

   * Show clearly why something is classified as:

     * Sovereign vs bank vs corporate, or
     * Regulatory retail vs corporate, or
     * Housing vs CRE vs CRE–RH.

3. **Showing step-by-step calculation for each exposure**

   * Gross exposure → provisions → EAD (on + off) → CRM adjustments → risk weight → RWA.
   * This **audit trail** is exactly what supervisors and internal model validation teams expect.

4. **Building simple dashboards**

   * RWA by exposure class / rating / product / segment.
   * Capital requirement at 8%, 9%, 11.5%, etc.
   * What-if toggles: “treat this SME as regulatory retail”, “change LTV”, “turn off this guarantee”.

5. **Documenting the regulatory logic**

   * Short descriptions like:

     * “Regulatory retail: turnover < 50 crore, exposure ≤ 5 crore, granularity and product conditions met.”
     * “Housing loan: LTV ≤ 80%, loan amount 20–75 lakh → 50% RW as per RBI table.”

That combination (regulatory understanding + data model + engine + UI) is exactly what product / implementation roles in capital adequacy and regulatory reporting look for.

---

## 9.12 Key points and practical notes

1. **One-sentence description of an RWA engine**

   > “An RWA engine is basically a rules engine plus a data warehouse: it classifies exposures, converts them to EAD (including CCFs), applies CRM, assigns regulatory risk weights, and aggregates RWA for capital ratios and reporting.”

2. **Separation of logic and parameters**

   * Keep regulatory parameters (RW / CCF / haircut tables, minima, buffers) in **config tables**, not in code.
   * When Basel or RBI change numbers, you update **data**, not the engine logic.

3. **Reconciliation and explainability are as important as formulas**

   * It’s not enough to compute RWA correctly; you must:

     * Reconcile to GL / balance sheet, and
     * Explain RWA movements and capital ratios period-to-period.

4. **Where most implementation bugs happen**

   * Misclassification: SME vs regulatory retail vs corporate; CRE vs residential.
   * Wrong CCF on off-balance sheet items.
   * Ignoring undrawn portions of facilities.
   * Incorrect LTV calculation for mortgages.
   * Over-recognition of CRM (ineligible collateral or guarantees treated as eligible).

5. **How to talk about this in interviews**

   * Emphasise the **flow**: data ingestion → classification → EAD → CRM → RW → RWA → capital → reporting controls.
   * Be ready with 1–2 concrete examples (e.g. how a ₹3 crore SME CC limit is treated, or how a housing loan’s LTV drives RW).

---

### Reference links for Module 9

[1]: https://www.bis.org/basel_framework/index.htm "Basel Committee on Banking Supervision – Basel Framework (overview)"
[2]: https://www.bis.org/publ/bcbs189.pdf "Basel Committee – Basel III: A global regulatory framework for more resilient banks and banking systems"
[3]: https://gestionderiesgo.org/wp-content/uploads/2021/03/BaselFramework.pdf "Basel Committee – The Basel Framework (compiled PDF)"
[4]: https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf "Reserve Bank of India – Master Circular: Basel III Capital Regulations (July 1, 2013)"
[5]: https://www.iibf.org.in/documents/BASEL-III.pdf "Indian Institute of Banking & Finance – Basel III Capital Regulations"
[6]: https://www.iibf.org.in/documents/NCAF-2014.pdf "Indian Institute of Banking & Finance – Capital Adequacy and Market Discipline (NCAF)"
[7]: https://www.apra.gov.au/sites/default/files/2024-07/Final%20APG%20112%20-%20Capital%20adequacy%20-%20standardised%20approach%20to%20credit%20risk.pdf "APRA – Prudential Practice Guide APG 112: Capital Adequacy – Standardised Approach to Credit Risk"
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
              content: `# Module 12 – IRB Approaches, Vasicek Model & Basel 3.1 (Endgame)

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

$$
\\text{EL} = PD \\times LGD \\times EAD
$$

* This is **average credit loss per year** (in money terms if you multiply by EAD).
* Basel wants EL to be covered by **provisions**, not by capital.

### 12.3.2 Unexpected Loss (capital concept)

Regulatory capital under IRB is designed to cover:

> **Unexpected loss** = “loss at a very high confidence level (99.9%) minus EL”.

* “99.9%” means: **one bad year out of 1000** – very extreme, but not impossible.
* Basel uses a **portfolio model** (the **Vasicek / ASRF model**) to get this high-quantile loss.

In the IRB framework, we denote the **capital requirement as a percentage of EAD** by K:

$$
K = \\text{capital charge as % of EAD}
$$

Then Basel defines **RWA** as:

$$
\\text{RWA} = 12.5 \\times K \\times EAD
$$

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

$$
X_i = \\sqrt{\\rho}, Y + \\sqrt{1-\\rho}, \\varepsilon_i
$$

Where:

* (Y) = **systematic factor**, common to all borrowers (state of the economy),
  (Y \\sim N(0,1))
* (\\varepsilon_i) = **idiosyncratic factor**, specific to borrower i,
  (\\varepsilon_i \\sim N(0,1)), independent across i and of Y
* (\\rho) = **asset correlation** between borrowers (0 < ρ < 1)

Default rule:

$$
\\text{Borrower } i \\text{ defaults if } X_i < a
$$

The threshold (a) is set so that **unconditional** probability of default equals PD:

$$
PD = \\Phi(a) \\quad \\Rightarrow \\quad a = \\Phi^{-1}(PD)
$$

Where:

* (\\Phi) is the **standard normal CDF**
* (\\Phi^{-1}) (often denoted G in Basel) is its **inverse**.

### 12.4.3 Conditional default probability

Given a particular state of the economy (Y = y):

$$
P(\\text{default} \\mid Y=y) =
\\Phi!\\left(\\frac{\\Phi^{-1}(PD) - \\sqrt{\\rho}, y}{\\sqrt{1-\\rho}}\\right)
$$

* If (y) is **very low** (bad economy), this conditional PD becomes **much higher**.
* If (y) is **high** (good economy), conditional PD is lower.

### 12.4.4 Portfolio loss and high-quantile

Assume a very large number of **identical** borrowers (same PD, LGD, EAD).

Conditional on (Y=y), the **portfolio loss rate** is approximately:

$$
L(y) \\approx LGD \\times
\\Phi!\\left(\\frac{\\Phi^{-1}(PD) - \\sqrt{\\rho}, y}{\\sqrt{1-\\rho}}\\right)
$$

We want the **99.9% quantile** of loss, i.e. loss when the economy is extremely bad.

* The 0.1% worst economy corresponds to a low value of Y.
* For quantile level α = 99.9%, the corresponding quantile of Y is
  (y_\\alpha = \\Phi^{-1}(1-\\alpha) = \\Phi^{-1}(0.001)), which is a **large negative** number.

After rearranging (this is the maths Basel did for us), the **loss at 99.9% quantile** becomes:

$$
L_{\\text{0.999}} =
LGD \\times
\\Phi!\\left(\\frac{\\Phi^{-1}(PD) + \\sqrt{\\rho},\\Phi^{-1}(0.999)}{\\sqrt{1-\\rho}}\\right)
$$

Then the **capital per unit of EAD** is:

$$
K = L_{\\text{0.999}} - EL
= LGD \\left[
\\Phi!\\left(\\frac{\\Phi^{-1}(PD) + \\sqrt{\\rho},\\Phi^{-1}(0.999)}{\\sqrt{1-\\rho}}\\right)

* PD
  \\right]
  $$

*This is the classic **Vasicek capital formula** for a homogeneous portfolio.*

Basel IRB essentially **uses this structure**, with:

* a more sophisticated **correlation function** (R(PD)) instead of a fixed ρ, and
* a **maturity adjustment** to account for M.

---

## 12.5 Basel IRB corporate formula – tying it all together

For **corporate / bank / sovereign** exposures under IRB, Basel uses a risk-weight function that looks like:

### 12.5.1 Notation

* (\\Phi(x)) = standard normal CDF (often written N(·))
* (G(p) = \\Phi^{-1}(p)) = inverse CDF
* (R(PD)) = **asset correlation** as a function of PD
* (b(PD)) = function used in maturity adjustment
* (M) = effective maturity (years, typically between 1 and 5)
* (K) = capital requirement **as % of EAD**

### 12.5.2 Correlation function (R)

For corporate exposures, Basel uses a PD-dependent correlation:

$$
R(PD) =
0.12 \\cdot \\frac{1 - e^{-50 PD}}{1 - e^{-50}} +
0.24 \\cdot \\left[1 -
\\frac{1 - e^{-50 PD}}{1 - e^{-50}}
\\right]
$$

Intuition:

* **Safer borrowers (low PD)** → higher correlation (they tend to default together only in very bad systemic events).
* **Riskier borrowers (high PD)** → lower correlation (more idiosyncratic).

### 12.5.3 Maturity adjustment

Define:

$$
b(PD) = \\big(0.11852 - 0.05478 \\ln(PD)\\big)^2
$$

Then **maturity adjustment (MA)** is:

$$
\\text{MA}(PD,M) =
\\frac{1 + (M-2.5),b(PD)}
{1 - 1.5,b(PD)}
$$

* If **M = 2.5**, MA ≈ 1 (no adjustment).
* Longer M → MA > 1 → higher capital.
* Shorter M → MA < 1 → lower capital.

*(Exact constants are taken from the Basel II IRB risk-weight function for corporates; later reforms keep the same structure but may tweak details for specific asset classes.)*

### 12.5.4 Capital requirement K (corporates)

Using Vasicek structure plus correlation and maturity adjustment, Basel defines:

$$
K(PD,LGD,M) =
LGD \\left[
\\Phi!\\left(
\\frac{1}{\\sqrt{1-R}}
G(PD) +
\\sqrt{\\frac{R}{1-R}}
G(0.999)
\\right)

* PD
  \\right]
  \\times \\text{MA}(PD,M)
  $$

Where:

* (R = R(PD)) from above.
* (G(0.999) = \\Phi^{-1}(0.999)) is the **99.9% systemic shock**.
* The term in square brackets is just the **Vasicek capital formula** with correlation R(PD) instead of ρ.
* MA adjusts for maturity.

Then:

$$
\\text{RWA} = 12.5 \\times K(PD,LGD,M) \\times EAD
$$

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

   $$
   EL_{\\text{total}} = \\sum_i PD_i \\times LGD_i \\times EAD_i
   $$

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

* (\\text{RWA}_{\\text{internal}}) = total RWA using **IRB + internal models + SA** where applicable (what the bank’s chosen approaches give).
* (\\text{RWA}_{\\text{SA}}) = total RWA if the bank applied **only the revised Standardised Approaches**.

The **output floor** says:

$$
\\text{RWA}*{\\text{final}} =
\\max\\Big(
\\text{RWA}*{\\text{internal}},
\\ 0.725 \\times \\text{RWA}_{\\text{SA}}
\\Big)
$$

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

$$
\\text{CET1 ratio} = \\frac{\\text{CET1}}{\\text{RWA}*{\\text{final}}},\\quad
\\text{Total capital ratio} = \\frac{\\text{Total capital}}{\\text{RWA}*{\\text{final}}}
$$

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
   * IRB is still **conceptual / future**, but understanding it (especially Vasicek & output floor) is a big plus for capital adequacy / regulatory reporting roles.`
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
              content: `
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
\\text{CET1 ratio} = \\frac{\\text{CET1}}{\\text{RWA}_{\\text{total}}}, \\quad
\\text{Tier 1 ratio} = \\frac{\\text{Tier 1}}{\\text{RWA}_{\\text{total}}}, \\quad
\\text{Total Capital Ratio (CRAR)} = \\frac{\\text{Total Capital}}{\\text{RWA}_\\text{total}}
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
\\text{Effective minimum Total Capital (incl. CCB) in India} = 11.5% \\times \\text{RWA}
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
     \\text{EAD}_{\\text{on}} = \\max(0,\\ \\text{gross exposure} - \\text{specific provisions} - \\text{write-offs})
     ]

   * **Off-balance sheet**:
     [
     \\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
     ]
     CCFs from Basel / RBI tables (e.g. 100% for direct credit substitutes, 50% performance guarantees, 20% trade LCs, 20/50% other commitments, 0% unconditionally cancellable lines in current RBI rules).

3. **Apply CRM (if any)**

   * **Collateral** – comprehensive approach (India):
     [
     E^* = \\max{0,\\ E(1+H_e) - C(1 - H_c - H_{fx})}
     ]
   * **Guarantees / CDS** – substitution approach: protected part takes **guarantor RW**, adjusted for FX + maturity mismatch.

4. **Assign risk weight (RW)**

   * From Basel / RBI SA tables based on exposure class, rating, LTV / loan size, NPA bucket, etc.

5. **Compute RWA**

   [
   \\text{RWA} = (\\text{EAD or }E^*) \\times \\text{RW}
   ]

Sum across all exposures → **credit risk RWA**.

---

## 13.5 Quick memory blocks – OBS, CCF & CRM

### 13.5.1 Off-balance sheet exposures (Module 6)

* **Rule:**
  [
  \\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
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
* (\\text{RWA}) = total risk-weighted assets,
* (r_{\\min}) = **required** total capital ratio (min + buffers + SIB + Pillar 2 etc.).

Then:

[
\\text{Required capital} = r_{\\min} \\times \\text{RWA}
]

[
\\text{Headroom} = K - r_{\\min} \\times \\text{RWA}
]

[
\\text{Headroom ratio} = \\frac{K}{\\text{RWA}} - r_{\\min}
]

BIS and supervisors describe **capital headroom** exactly as “surplus capital above all minimum requirements and buffers.”

### 13.8.3 Capital planning equations (1-period, simple)

Capital evolution:

[
K_{t+1} = K_t + \\Pi_t - D_t + \\Delta K_{\\text{ext}, t}
]

RWA evolution:

[
\\text{RWA}_{t+1} = \\text{RWA}_t + \\Delta \\text{RWA}_t
]

Future capital ratio:

[
\\text{CRAR}_{t+1} = \\frac{K_{t+1}}{\\text{RWA}_{t+1}}
]

Planning question:

> For my **target ratio (r_\\text{target})** (usually above 11.5%), is
> (\\text{CRAR}_{t+1} \\ge r_\\text{target}) under base & stress scenarios?

---

## 13.9 IRB & Basel 3.1 – tiny conceptual cheat sheet

### 13.9.1 IRB parameters & EL

* **PD** – one-year probability of default (with floors like 0.05% for certain corporate / bank / sovereign exposures under Basel 3.1).
* **LGD** – downturn loss given default (subject to minimum LGD floors).
* **EAD** – exposure at default (on-balance + modelled CCF for undrawn lines).
* **M** – effective maturity, usually 1–5 years.

Core identity:

[
\\text{EL} = PD \\times LGD \\times EAD
]

Capital function:

[
\\text{RWA} = 12.5 \\times K \\times EAD
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
\\text{RWA}_{\\text{final}} = \\max\\left(\\text{RWA}_{\\text{internal}},\\ 0.725 \\times \\text{RWA}_\\text{SA}\\right)
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

$$
\\text{CET1 ratio} = \\frac{\\text{CET1}}{\\text{RWA}_{\\text{total}}}, \\quad
\\text{Tier 1 ratio} = \\frac{\\text{Tier 1}}{\\text{RWA}_{\\text{total}}}, \\quad
\\text{Total Capital Ratio (CRAR)} = \\frac{\\text{Total Capital}}{\\text{RWA}_\\text{total}}
$$

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

$$
\\text{Effective minimum Total Capital (incl. CCB) in India} = 11.5\\% \\times \\text{RWA}
$$

(plus any systemic / Pillar 2 add-ons).

---

## 13.4 SA credit risk – tiny “how to” pipeline

For **each exposure**, Standardised Approach (SA) works like this:

1. **Classify exposure (Basel + RBI rules)**

   * Sovereign, bank, corporate, regulatory retail, housing, CRE / CRE-RH, NPA, securitisation, equity, other.
   * RBI adds extra tests: regulatory retail, LTV-based housing buckets, CRE vs CRE-RH, NPA provisioning buckets, etc.

2. **Compute EAD**

   * **On-balance sheet**:
     $$
     \\text{EAD}_{\\text{on}} = \\max(0,\\ \\text{gross exposure} - \\text{specific provisions} - \\text{write-offs})
     $$

   * **Off-balance sheet**:
     $$
     \\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
     $$
     CCFs from Basel / RBI tables (e.g. 100% for direct credit substitutes, 50% performance guarantees, 20% trade LCs, 20/50% other commitments, 0% unconditionally cancellable lines in current RBI rules).

3. **Apply CRM (if any)**

   * **Collateral** – comprehensive approach (India):
     $$
     E^* = \\max\\{0,\\ E(1+H_e) - C(1 - H_c - H_{fx})\\}
     $$
   * **Guarantees / CDS** – substitution approach: protected part takes **guarantor RW**, adjusted for FX + maturity mismatch.

4. **Assign risk weight (RW)**

   * From Basel / RBI SA tables based on exposure class, rating, LTV / loan size, NPA bucket, etc.

5. **Compute RWA**

   $$
   \\text{RWA} = (\\text{EAD or }E^*) \\times \\text{RW}
   $$

Sum across all exposures → **credit risk RWA**.

---

## 13.5 Quick memory blocks – OBS, CCF & CRM

### 13.5.1 Off-balance sheet exposures (Module 6)

* **Rule:**
  $$
  \\text{EAD}_{\\text{off}} = \\text{Notional} \\times \\text{CCF}
  $$

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
* (\\text{RWA}) = total risk-weighted assets,
* (r_{\\min}) = **required** total capital ratio (min + buffers + SIB + Pillar 2 etc.).

Then:

$$
\\text{Required capital} = r_{\\min} \\times \\text{RWA}
$$

$$
\\text{Headroom} = K - r_{\\min} \\times \\text{RWA}
$$

$$
\\text{Headroom ratio} = \\frac{K}{\\text{RWA}} - r_{\\min}
$$

BIS and supervisors describe **capital headroom** exactly as “surplus capital above all minimum requirements and buffers.”

### 13.8.3 Capital planning equations (1-period, simple)

Capital evolution:

$$
K_{t+1} = K_t + \\Pi_t - D_t + \\Delta K_{\\text{ext}, t}
$$

RWA evolution:

$$
\\text{RWA}_{t+1} = \\text{RWA}_t + \\Delta \\text{RWA}_t
$$

Future capital ratio:

$$
\\text{CRAR}*{t+1} = \\frac{K*{t+1}}{\\text{RWA}_{t+1}}
$$

Planning question:

> For my **target ratio (r_\\text{target})** (usually above 11.5%), is
> (\\text{CRAR}*{t+1} \\ge r*\\text{target}) under base & stress scenarios?

---

## 13.9 IRB & Basel 3.1 – tiny conceptual cheat sheet

### 13.9.1 IRB parameters & EL

* **PD** – one-year probability of default (with floors like 0.05% for certain corporate / bank / sovereign exposures under Basel 3.1).
* **LGD** – downturn loss given default (subject to minimum LGD floors).
* **EAD** – exposure at default (on-balance + modelled CCF for undrawn lines).
* **M** – effective maturity, usually 1–5 years.

Core identity:

$$
\\text{EL} = PD \\times LGD \\times EAD
$$

Capital function:

$$
\\text{RWA} = 12.5 \\times K \\times EAD
$$

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

$$
\\text{RWA}*\\text{final} = \\max\\left(\\text{RWA}*\\text{internal},\\ 0.725 \\times \\text{RWA}_\\text{SA}\\right)
$$

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
`
            }
          ]
        }
      ]
    }
  ]
};
