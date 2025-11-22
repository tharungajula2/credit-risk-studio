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
