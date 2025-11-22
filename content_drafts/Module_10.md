---

# Module 10 – Regulatory Capital Reporting & Disclosures (Pillar 3 + RBI)

## 10.1 What “regulatory capital reporting” actually means

By now **RWA engine** (Module 9) can compute:

* Capital components (CET1, AT1, Tier 2)
* Total RWA = Credit + Market + Operational (and maybe CVA etc.)
* Capital ratios (CET1 / RWA, Tier 1 / RWA, Total capital / RWA)

**Module 10** is about:

1. **Regulatory reporting to supervisor**

   * Detailed templates/returns sent to RBI (or other regulator) with capital, RWA, exposures, etc.

2. **Public disclosures (Pillar 3)**

   * Published docs (usually PDFs on the bank’s website + notes in financial statements) that allow **investors and analysts to see capital strength and risk profile**. Basel calls this **Pillar 3 – market discipline**.

Note:

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

Basel’s updated Pillar 3 framework (2015–2018 updates) groups disclosure requirements into thematic sets. High-level categories:

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

10. **(Increasingly) ESG / climate risk disclosures in some jurisdictions**

Basel provides **standard table formats** so banks across countries are more comparable.

---

## 10.4 Capital structure reporting – what gets disclosed

You already studied components in Modules 2–3. Pillar 3 + RBI require banks to present a **structured capital composition**.

### 10.4.1 Composition of capital

Globally, Basel prescribes templates (often called **CC1, CC2** under Pillar 3) that show:

* **CET1**:

  * Paid-up common shares, share premium,
  * Retained earnings, statutory reserves,
  * Other reserves,
  * Regulatory adjustments (goodwill, intangibles, DTAs, significant investments, etc.).

* **AT1**:

  * Perpetual non-cumulative preference shares,
  * AT1 bonds with loss-absorption features,
  * Regulatory deductions.

* **Tier 2**:

  * Eligible subordinated debt,
  * General provisions (within caps),
  * Regulatory deductions.

RBI issued separate guidelines on **“Composition of Capital Disclosure Requirements”** under Basel III; these are also referenced in the Basel III Capital Regulations master circular.

**Your mental model:**

* There’s a **reconciliation** from accounting equity → regulatory capital:

  1. Start from equity in balance sheet.
  2. Strip out ineligible items & apply regulatory adjustments.
  3. What’s left is CET1, AT1, Tier 2 as per rules.

In interviews, you can say:

> “Capital structure reporting is basically the detailed walk from accounting equity to CET1, AT1, and Tier 2 after all Basel/RBI adjustments.”

---

### 10.4.2 Capital adequacy – the core ratios (Table DF-2 in India)

The main output table is **Capital Adequacy** – in India this is **Table DF-2** under RBI’s Basel III disclosure framework (Pillar 3).

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

[
\text{CET1 ratio} = \frac{\text{CET1}}{\text{RWA}_\text{total}}
]

[
\text{Tier 1 ratio} = \frac{\text{Tier 1}}{\text{RWA}_\text{total}}
]

[
\text{Total Capital Ratio (CRAR)} = \frac{\text{Total Capital}}{\text{RWA}_\text{total}}
]

Plus, banks disclose **minimum requirements** and **buffers**:

* Basel III template minima:

  * CET1 ≥ 4.5%,
  * Tier 1 ≥ 6%,
  * Total capital ≥ 8%, plus
  * CCB (up to 2.5%) and CCyB.

* **India (Basel III implementation)**:

  * Minimum **Pillar 1** CRAR = **9%** (not 8%) of RWA.
  * Capital Conservation Buffer (CCB) = 2.5% of RWA (fully phased-in).
  * So minimum **Total capital including CCB = 11.5%** of RWA.

So in India:

[
\text{Regulatory Minimum Total Capital (incl. CCB)} = 11.5% \times \text{RWA}_\text{total}
]

> **Headroom concept (link to Module 11 later):**
> **Capital headroom = Actual Capital − Minimum Required Capital**
> = Capital − (Regulatory minimum % × RWA).

---

## 10.5 Pillar 3 in India – the DF tables

RBI has embedded Basel Pillar 3 into the **Basel III Capital Regulations** via standard tables called **“DF-1, DF-2, …”**. Older Basel II master circulars and the IIBF Basel III text summarise these.

Core ones (simplified, but conceptually in line with current Indian practice):

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

Recent Indian Pillar 3 reports (e.g. from Indian banks and foreign bank branches) show exactly these DF tables being used under the Basel III capital regulations.

### 10.5.1 Frequency & location of disclosures

RBI’s Basel III guidance (and IIBF summaries) say broadly:

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
* RWA_credit, RWA_market, RWA_operational (and possibly RWA_CVA, etc.).

DF-2 then shows (conceptually):

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

**DF-4 – Credit risk: portfolios subject to SA**

This is where your **SA classification rules** shine. DF-4 typically includes:

* RWA and exposure amounts by exposure class:

  * Sovereigns, banks, corporates, regulatory retail, residential mortgage, CRE, NPAs, securitisation, etc.

* Amount of credit RWA in different **risk-weight buckets**:

  * e.g. below 100%, exactly 100%, >100%.

Your engine already knows, for each exposure:

* `exposure_class`
* `EAD`
* `risk_weight`

So DF-4 is just:

[
\text{RWA}*\text{bucket} = \sum*{\text{i in bucket}} EAD_i \times RW_i
]

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

This becomes straightforward once you track CRM at slice level.

---

### 10.7.4 Market risk and operational risk templates

Using outputs from the bank’s market risk and operational risk engines (often separate, but conceptually similar to your credit engine):

* **DF-7 (Market risk)**:

  * Capital required by risk type (interest rate, equity, FX, commodity),
  * Approach used (Standardised / Internal Models / FRTB),
  * Qualitative description of trading book risk management.

* **DF-8 (Operational risk)**:

  * Approach (BIA/TSA/AMA or SMA),
  * Business Indicator / Gross Income metrics (for SMA/BIA),
  * Qualitative description of operational risk management.

Again, these are just **aggregations** of the risk-type-specific engines.

---

## 10.8 RBI reporting beyond Pillar 3 – notes to accounts & regulatory returns

### 10.8.1 Notes to accounts in financial statements

RBI issues a Master Circular on **“Disclosure in Financial Statements – Notes to Accounts”** that requires banks to present, among other things:

* Capital adequacy information (Basel II/III),
* Credit concentration, sectoral exposure, NPAs, provisioning, etc.

It explicitly says that **disclosure requirements in the Basel II/III Capital Regulations also apply**, i.e., Pillar 3 is integrated into broader financial statement disclosure.

So you have:

* **Notes to accounts** = accounting + regulatory view together.
* **Pillar 3 PDF** = expanded regulatory detail, often on the website.

### 10.8.2 Supervisory returns (to RBI)

Apart from public Pillar 3, banks submit **detailed capital adequacy returns** (often in XBRL form) to RBI each quarter.

Examples (conceptually):

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

  * Total credit exposures and RWA in DF-3/DF-4 should reconcile to DF-2 and to underlying engine data.

---

## 10.10 Key points & practical notes – interviews & app design 💡

1. **Pillar 3 in one line**

   > “Pillar 3 is the **disclosure leg** of Basel – it turns internal capital and risk numbers into standardised tables and narratives so that markets can discipline banks.”

---

2. **India-specific Pillar 3 summary**

   > “In India, Pillar 3 is implemented via DF tables (DF-1 to DF-x) defined in RBI’s Basel III Capital Regulations. DF-2/3/4 are quarterly, the full suite is at least half-yearly, and they sit alongside RBI’s Notes-to-Accounts disclosure circular.”

This shows you know local practice, not just Basel theory.

---

3. **Scope of consolidation soundbite**

   > “Regulatory consolidation usually **excludes** some non-banking entities; those are treated via risk weights or deductions instead of being consolidated, and DF-1 explicitly explains that difference.”

---

4. **How you’d explain your app**

   If someone asks what your web app does:

   > “Functionally it’s a mini Basel/RBI reporting stack:
   > ① Take exposures, classify them (sovereign/bank/corporate/retail etc.),
   > ② Compute EAD (including CCFs), RWA and capital,
   > ③ Then show DF-2/DF-3/DF-4-style summaries, with drilldown from each line item back to the underlying facilities.”

   That’s the full “RWA → Pillar 3 → RBI returns” story.

---

5. **Thinking like governance, not just maths**

   You can drop a line like:

   > “Getting the formulas right is just step one; high-quality capital reporting also needs robust **data lineage, reconciliations to GL, and sign-off governance** across Risk, Finance, and Regulatory Reporting, because Pillar 3 numbers must match regulatory returns and published financials.”

   That’s the mindset of a **Senior/Lead Capital Adequacy & Regulatory Reporting Analyst**.

---

### Reference links for Module 10

* **Basel Pillar 3 – consolidated/enhanced framework & updates** – Basel Committee papers that define the modern Pillar 3 disclosure templates and thematic structure (capital, credit risk, securitisation, market, op-risk, etc.).
  Link (consolidated/enhanced framework): [https://www.bis.org/bcbs/publ/d400.pdf](https://www.bis.org/bcbs/publ/d400.pdf)
  Link (updated framework): [https://www.bis.org/bcbs/publ/d455.pdf](https://www.bis.org/bcbs/publ/d455.pdf)

* **Basel III international regulatory framework (overview page)** – High-level description of Basel III, including the three pillars, capital ratios and buffers, and links to detailed standards.
  Link: [https://www.bis.org/basel_framework/](https://www.bis.org/basel_framework/)

* **RBI – Basel III Capital Regulations (Master Circular / Master Direction)** – Indian implementation of Basel III, including capital structure, minimum ratios (9% + CCB), credit risk SA rules and embedded Pillar 3 DF tables.
  Example link (older master circular PDF): [https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf](https://www.rbi.org.in/commonman/Upload/English/Notification/PDFs/70BIIIMC010713.pdf)

* **IIBF – “Basel III Capital Regulations” / NCAF material** – Training material that summarises RBI’s Basel III framework, DF-1 to DF-x disclosure tables, scope of application and capital adequacy norms.
  Link: [https://www.iibf.org.in/documents/BASEL-III.pdf](https://www.iibf.org.in/documents/BASEL-III.pdf)

* **Example Indian bank Basel III – Pillar 3 disclosures** – Public Pillar 3 report showing DF-1, DF-2, DF-3, DF-4 etc., plus narrative on risk management and capital adequacy (you can search any large Indian bank’s “Basel III – Pillar 3 disclosures” PDF).
  Example (one bank’s Pillar 3 report): search “Basel III – Pillar 3 Disclosures DF-2 DF-3 DF-4 India PDF” and open a recent year’s report from a scheduled commercial bank.

* **RBI – Master Circular “Disclosure in Financial Statements – Notes to Accounts”** – Lays out additional disclosure requirements (capital adequacy, NPAs, sectoral exposure, etc.) and how they sit alongside Basel II/III capital regulations.
  Example link: [https://rbidocs.rbi.org.in/rdocs/notification/PDFs/MCNOTAC010715.pdf](https://rbidocs.rbi.org.in/rdocs/notification/PDFs/MCNOTAC010715.pdf)
