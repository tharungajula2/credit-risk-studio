

---

### #161 – What is a CapAd implementation project in a bank?

* A **CapAd implementation project** is where a bank deploys a **Capital Adequacy engine** (like Surya’s CapAd) to:

  * Automate **Basel II/III / RBI capital calculations** for credit, market, operational risk.
  * Generate **regulatory ratios (CET1, Tier 1, CRAR)** and regulatory returns.
* The project goal is to move from **manual/Excel-based capital calculations** to a **robust, repeatable, auditable system** that:

  * Reads granular exposure data,
  * Applies **RBI Basel III rules**,
  * Produces **RWA + capital numbers** with clear lineage & documentation.

---

### #162 – Typical stakeholders in a CapAd credit risk project

* **Business / Risk owners**

  * CRO, Head of Credit Risk, Head of Regulatory Reporting.
  * Define **requirements, thresholds, and interpretations** of RBI rules.
* **Finance / Regulatory Reporting team**

  * Owns final **RBI returns**, reconciliations, sign-offs.
* **IT / Data Engineering**

  * Build **ETL feeds**, manage infrastructure and production jobs.
* **Vendor / Product team (Surya)**

  * Provide **CapAd product**, configuration, enhancements, and SME input.
* **Internal Audit / Validation / Model Risk**

  * Review methodology, testing, and governance.

As a **CapAd analyst**, you sit in the middle: translating **business + regulatory requirements** into **system configuration and data specs**.

---

### #163 – High-level phases of a CapAd implementation

A credit-risk-focused CapAd project usually runs through these phases:

1. **Discovery & Requirements** – understand bank’s portfolios, current process, regulatory interpretations.
2. **Data Discovery & Mapping** – identify source systems, fields, quality issues, transformations needed.
3. **Solution Design & BRD/FRD sign-off** – define what CapAd must do and how.
4. **Configuration & Build** – set up CapAd rules, mappings, ETL pipelines.
5. **Testing (SIT/UAT)** – validate calculations, reports, and performance with real data.
6. **Parallel Run & Reconciliation** – run CapAd alongside existing process, compare outputs.
7. **Go-live & Hypercare** – switch to CapAd as “system of record” and support issues.
8. **BAU Support & Enhancements** – change requests, new regulations, new products.

---

### #164 – What is a BRD in a CapAd project?

* **BRD = Business Requirements Document.**
* Audience: **business, risk, finance, senior management**.
* Focus: **what** the bank needs, in **business language**, not technical detail.
* In a CapAd credit-risk context, a BRD typically covers:

  * Scope: which **portfolios** (retail, SME, corporate, off-BS, investments) are in scope.
  * Applicable **regulations**: RBI Basel III capital rules, SA/IRB, Pillar 1 & relevant parts of Pillar 2.
  * **Business definitions**: default, NPA classes, exposure classes, collateral types, guarantees, netting rules.
  * **High-level reports** needed: capital ratios, RWA by portfolio, RBI return templates, management dashboards.
  * **Control & governance expectations**: approval process, sign-off owners, frequency.

Think: BRD = **“This is what our CapAd solution must deliver for the bank.”**

---

### #165 – What is an FRD in a CapAd project?

* **FRD = Functional Requirements Document.**
* Audience: **product/config team + IT/data engineers**.
* Focus: **how** CapAd will fulfil the BRD in terms of **fields, rules, screens, mappings, and workflows**.
* In a CapAd credit-risk context, an FRD typically includes:

  * Detailed **data model**: required input fields, data types, allowed values.
  * **Exposure classification logic** (how to classify each record into Basel exposure classes).
  * **Risk-weight rules** or references to product configuration tables.
  * **Treatment of collateral/guarantees** and haircuts.
  * **Calculation formulas** for RWA, capital ratios, leverage ratio.
  * **Report layouts** and filter/drill-down behaviour.

Think: FRD = **“This is the functional blueprint the system will implement.”**

---

### #166 – BRD vs FRD: one-line difference for interview

* **BRD**: *“What the business needs”* – portfolios, regulations, reports, policies.
* **FRD**: *“How the system will behave”* – fields, rules, mappings, calculations, screens.

You can say:

> “In my previous roles I helped translate business requirements into functional specs – in a CapAd context, that means turning RBI Basel III expectations into detailed FRD rules for exposure classification, risk weights, and RWA calculations.”

---

### #167 – Typical BRD sections for CapAd credit risk

A strong **CapAd BRD for credit risk** often includes:

1. **Introduction & objectives**

   * Why the bank is implementing CapAd (reg compliance, automation, scalability).

2. **Scope**

   * Legal entities in scope
   * Portfolios: retail, SME, corporate, banks, sovereigns, off-BS, securitisations, etc.

3. **Regulatory references**

   * RBI Basel III Master Circular, any circulars specific to sectors/products.

4. **Business rules & definitions**

   * Default/NPA, forborne exposures, classification (sovereign/bank/corporate/retail/CRE/housing), treatment of NPAs, provisions.

5. **High-level process flow**

   * Data extraction → CapAd processing → review → approval → submission.

6. **Reporting requirements**

   * Capital ratios, RWA breakdowns, reconciliation reports, RBI return formats, internal management MIS.

---

### #168 – Typical FRD sections for CapAd credit risk

A detailed **CapAd FRD** might contain:

1. **Data requirements**

   * Per exposure: obligor ID, product, exposure amount, currency, days past due, collateral flags, rating, PD/LGD/EAD if applicable, etc.

2. **Mapping rules**

   * How each exposure maps to **Basel exposure classes**.
   * How internal product codes map to CapAd product taxonomy.

3. **Risk-weight rules & parameters**

   * For each exposure class: risk-weight logic (SA tables, IRB formulas).
   * Parameters like LGD%, CCF, haircuts, thresholds (e.g. LTV bands, retail exposure limits).

4. **Calculation logic**

   * RWA per exposure, portfolio aggregates, capital ratios, leverage ratio.

5. **Functional workflows & interfaces**

   * Batch schedule, file formats, error handling, audit logs.

6. **Security & access control**

   * Who can view/edit configuration, run scenarios, approve results.

---

### #169 – Discovery & requirement phase: what you actually do

In a **Discovery** phase for CapAd, a typical analyst:

* Reviews the bank’s current **Basel implementation & capital reports** (Excel/legacy systems).
* Collects **policy documents**: credit risk management, provisioning, product programs, ICAAP, Board-approved Basel interpretations.
* Conducts workshops with **Risk/Finance/IT** to clarify:

  * Exposure classes, product catalogue, NPA and default definitions.
  * Which **credit risk approaches** are used (SA only? any IRB-style models?)
  * Current **data limitations** (missing fields, inconsistent IDs, manual adjustments).
* Documents these in the **BRD** as baseline requirements and constraints.

This is where your **business + technical + regulatory understanding** will shine.

---

### #170 – Data discovery & mapping: key tasks

In the **Data discovery** phase, you:

* Identify **source systems**: CBS, LOS, treasury, collateral, guarantees, ratings, ECL engine, etc.
* For each source:

  * List the **tables/fields** you need (exposure amount, product code, DPD, etc.).
  * Understand **granularity** (account-level, facility-level, customer-level).
* Build a **mapping sheet**:

  * Source field → intermediate staging field → CapAd input field.
  * Include transformations (e.g. “if product_code in {X,Y,Z} then exposure_class = ‘Regulatory retail’”).
* Note **data quality issues** and BCBS 239-style controls (null checks, legal-entity filters, date cut-offs).

This becomes part of the **FRD + data lineage documentation**.

---

### #171 – Configuration & build for credit risk in CapAd

During **configuration/build**, CapAd analysts and product SMEs typically:

* Set up **reference data**: product hierarchies, exposure classes, rating scales, mapping tables.
* Configure **Basel SA rules**:

  * Risk weights for sovereign, banks, corporates, retail, housing, CRE, NPAs, off-BS CCFs, etc.
  * RBI-specific treatments (CGTMSE/NCGTC, state guarantees, consumer credit, VCFs, etc.).
* Input or integrate **PD/LGD/EAD** if IRB or internal models used (even if not regulatory IRB, can be used for Pillar 2 / ICAAP).
* Build **data ingestion & transformation scripts** (ETL or interfaces) to load exposures into CapAd.
* Set up **report templates** for capital ratios, RWA breakdowns, RBI returns.

Your credit risk + Basel SA RW knowledge from earlier modules sits directly here.

---

### #172 – Testing CapAd: SIT vs UAT (in simple terms)

* **SIT (System Integration Testing)**

  * Performed mainly by **IT + product team**.
  * Objective: verify that CapAd integrates correctly with data feeds and performs calculations as per **FRD logic**.
  * Uses test cases like: “Given this exposure with X product, Y rating, Z collateral → risk weight should be A%, RWA should be B.”

* **UAT (User Acceptance Testing)**

  * Performed by **business/risk/finance users**.
  * Objective: confirm that CapAd outputs make sense in **real-world scenarios** and align with business expectations & RBI practice.
  * Includes more realistic data, reconciliations vs **legacy capital reports**, and sign-off from owners.

---

### #173 – UAT scenarios for CapAd credit risk (examples)

Typical UAT test cases for credit risk in CapAd:

* **Single exposure tests**:

  * A sovereign bond with central govt risk → verify **0% RW**.
  * A corporate loan unrated → verify **100% RW**.
  * A regulatory retail loan meeting all criteria → verify **75% RW**.
  * A housing loan with specific LTV → verify **35–50% RW** as per policy.

* **Portfolio-level tests**:

  * Compare **total RWA** by exposure class vs legacy process.
  * Compare **capital ratios** (CET1, Tier 1, CRAR) vs old Basel templates.
  * Check **NPAs & provisions** are treated correctly (higher RWs or deductions).

* **Regression tests**:

  * Run same data across multiple CapAd versions to ensure no unintended changes.

---

### #174 – Parallel run & reconciliation: why it matters

Before full go-live, banks usually run **CapAd in parallel** with the existing process for a few reporting cycles:

* For each cycle (e.g. quarter-end):

  * Run **legacy Basel calculation** and **CapAd** on same data cut.
  * Compare:

    * Total RWA and breakdown by portfolio
    * Capital ratios (CET1/Tier 1/CRAR)
    * Key regulatory templates.
* Investigate **differences**:

  * Some differences are **intended** (e.g. corrected logic).
  * Others indicate **mapping/config issues** or data problems.
* Only after satisfactory reconciliation and **formal sign-off** does CapAd become **official system-of-record** for capital.

This is a key point you can mention to show you understand **production migration risk**.

---

### #175 – Go-live, hypercare and BAU support

* **Go-live**: bank switches its official regulatory capital process to **CapAd**:

  * Capital submissions to RBI (and internal dashboards) now use CapAd numbers.

* **Hypercare period** (e.g. 1–3 months):

  * Enhanced monitoring of jobs, outputs, reconciliations, and user issues.
  * Quick **fixes for urgent defects**.

* **BAU (Business-as-Usual) support**:

  * Regular operations: monthly/quarterly runs, reconciliations, small change requests.
  * Regulatory change updates: new RBI circulars (e.g. revised risk weights, new product treatments) → require **CapAd configuration updates**.
  * Model & data governance: integrate new PD/LGD/EAD models, new IFRS 9/ECL requirements, ICAAP enhancements.



---

