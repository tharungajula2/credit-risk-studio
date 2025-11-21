import { Callout } from "@/components/content/Callout";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";

const REFERENCES_CONTENT = `
## 1. Global Basel / BIS Sources (Basel Committee on Banking Supervision)

### 1.1 Basel Framework – Big Picture

**1. Basel III: international regulatory framework for banks (overview page)**

* **What:** Main Basel III landing page on BIS. High-level explanation plus links to all detailed standards (capital, leverage, liquidity, market risk etc.).
* **Modules:** 1, 2, 3, 8, 11, 12, 13.
* **How to use as a beginner:**

  * Start here when you’re confused about *where* a particular rule lives.
  * Scroll down and you’ll see sections for capital, leverage ratio, liquidity, macro-prudential tools etc.
* **Link:**
  [https://www.bis.org/bcbs/basel3.htm](https://www.bis.org/bcbs/basel3.htm)

**2. Background to the Basel Framework**

* **What:** Short explainer on what the “Basel Framework” is and why BIS created a *consolidated* online version.
* **Modules:** 1, 2, 13.
* **How to use:**

  * Good 5-minute read when you want to explain Basel’s role in interviews.
  * Use it to understand that the online Basel Framework is the *current* rulebook, not just PDFs.
* **Link:**
  [https://www.bis.org/baselframework/background.htm](https://www.bis.org/baselframework/background.htm)

---

### 1.2 Core Capital Framework – Basel II & Basel III

**3. Basel II – International Convergence of Capital Measurement and Capital Standards: A Revised Framework (Comprehensive Version, BCBS 128)**

* **What:** Full Basel II book. Contains minimum capital rules, IRB formulas, Pillar 2, Pillar 3 (original).
* **Modules:** 2, 4, 7, 8, 11, 12.
* **How to use:**

  * Use as the **maths bible** for IRB formula derivations and original Pillar 2/3 language.
  * Search within the PDF for “IRB”, “PD”, “LGD”, “Pillar 2” etc.
* **Link:**
  [https://www.bis.org/publ/bcbs128.pdf](https://www.bis.org/publ/bcbs128.pdf)

**4. Basel III: A global regulatory framework for more resilient banks and banking systems (BCBS 189 – core capital text)**

* **What:** Original Basel III capital reform text (Tier 1/Tier 2 definitions, buffers, leverage ratio, counterparty credit risk). Now integrated into the consolidated framework but still very useful.
* **Modules:** 2, 3, 4, 6, 7, 8, 11, 12.
* **How to use:**

  * Read the *Executive Summary* and early chapters to really understand CET1/AT1/Tier2 quality.
  * Use tables/paras when you want precise language for capital components and buffers.
* **Info page:** [https://www.bis.org/publ/bcbs189.htm](https://www.bis.org/publ/bcbs189.htm)
* **PDF (one copy):** [https://enzoscannella.com/wp-content/uploads/2014/09/bcbs_basel_iii_global_regulatory_framework.pdf](https://enzoscannella.com/wp-content/uploads/2014/09/bcbs_basel_iii_global_regulatory_framework.pdf) (same BCBS 189 text)

**5. Basel III: Finalising post-crisis reforms (Basel 3.1 / Endgame, BCBS 424)**

* **What:** The “Basel 3.1” package – revises SA credit risk, IRB constraints, output floor (72.5%), revised op-risk and market-risk links.
* **Modules:** 2, 4, 8, 11, 12, 13.
* **How to use:**

  * For **output floor and Basel 3.1** explanations, this is the main official source.
  * Search for “output floor”, “credit risk standardised approach”, “IRB”.
* **Info page:** [https://www.bis.org/bcbs/publ/d424.htm](https://www.bis.org/bcbs/publ/d424.htm)
* **PDF:** [https://www.bis.org/bcbs/publ/d424.pdf](https://www.bis.org/bcbs/publ/d424.pdf)

---

### 1.3 Standardised Approach, CRM, Securitisation, Market & Op Risk

**6. Revisions to the Standardised Approach for Credit Risk (consultative / pre-Basel 3.1)**

* **What:** Detailed proposals for the revised SA for credit risk (risk weights by LTV, ratings, etc.) that feed into Basel 3.1.
* **Modules:** 4, 5, 6, 7, 8, 12.
* **How to use:**

  * Good for **understanding logic** behind new SA risk weights even if final numbers moved.
  * Look at tables by exposure class (sovereign, bank, corporate, retail, real estate).
* **Info page:** [https://www.bis.org/bcbs/publ/d307.htm](https://www.bis.org/bcbs/publ/d307.htm)

**7. Revisions to the Securitisation Framework (banking-book securitisation capital rules)**

* **What:** Basel III overhaul of securitisation capital (hierarchy of approaches, 1250% risk weights for certain tranches).
* **Modules:** 8, 12.
* **How to use:**

  * Use to understand why some securitisation tranches are effectively “capital deduction” (1250%).
  * Focus on high-level sections; the full formulas are heavy.
* **Info page:** [https://www.bis.org/bcbs/publ/d303.htm](https://www.bis.org/bcbs/publ/d303.htm)

**8. Minimum capital requirements for market risk (FRTB final standard, BCBS 457)**

* **What:** Final FRTB text – standardised and internal-model approaches for trading book market risk.
* **Modules:** 8, 12.
* **How to use:**

  * For your course, just read the intro and “Standardised Approach overview” to be able to summarise how FRTB works.
* **Info page:** [https://www.bis.org/bcbs/publ/d457.htm](https://www.bis.org/bcbs/publ/d457.htm)

**9. Standardised Measurement Approach (SMA) for Operational Risk (consultative)**

* **What:** Consultative documents introducing the SMA, which replaces Advanced Measurement Approaches.
* **Modules:** 8, 12.
* **How to use:**

  * Focus on the **Business Indicator (BI)** and **loss component** ideas – that’s enough for conceptual interviews.
* **(Referenced in)** Basel III monitoring instructions which point to the SMA consultative docs:
  [https://www.bis.org/bcbs/qis/biiiimplmoninstr_aug16.pdf](https://www.bis.org/bcbs/qis/biiiimplmoninstr_aug16.pdf)

**10. Interest Rate Risk in the Banking Book (IRRBB, BCBS 368)**

* **What:** Pillar 2 standard for IRRBB – how supervisors expect banks to measure and manage interest-rate risk in the banking book.
* **Modules:** 2 (Pillar 2), 8, 11, 12.
* **How to use:**

  * Read the early sections that define IRRBB and describe standardised outlier tests.
  * Helps you talk about risks beyond simple RWAs.

---

### 1.4 Pillar 3 – Disclosure Framework

**11. Revised Pillar 3 disclosure requirements (Phase I, BCBS 309)**

* **What:** 2015 standard that revamped Pillar 3 – introduces fixed templates/tables for RWA, capital, leverage, liquidity etc.
* **Modules:** 2, 10, 13.
* **How to use:**

  * Look at the **templates** to understand what supervisors expect banks to publish.
  * Use the paragraph structure to design your own “Pillar 3-like” summaries in the app.
* **Info page:** [https://www.bis.org/bcbs/publ/d309.htm](https://www.bis.org/bcbs/publ/d309.htm)

**12. Pillar 3 disclosure requirements – consolidated and enhanced framework (Phase II, BCBS 400)**

* **What:** 2017 consolidation of Pillar 3 rules, building on BCBS 309 and integrating more risk types and detailed tables.
* **Modules:** 2, 8, 10, 13.
* **How to use:**

  * Use for **table names and structure** (e.g. capital, RWA by risk, credit risk, CRM, securitisation).
  * Good reference when mapping which of your RWA engine outputs go into which disclosure table.
* **Info page:** [https://www.bis.org/bcbs/publ/d400.htm](https://www.bis.org/bcbs/publ/d400.htm)

**13. Pillar 3 disclosure requirements – updated framework (Phase III, BCBS 455)** – referenced doc

* **What:** 2018 update that integrates Basel 3.1 changes into Pillar 3 templates (esp. SA/IRB, market risk, op risk).
* **Modules:** 10, 12, 13.
* **How to use:**

  * If you want to be very up-to-date, read the summary to see how new Basel 3.1 metrics flow into public disclosures.

---

### 1.5 Monitoring & “Meta” Documents

**14. Basel III Monitoring Report (regular QIS / monitoring publication)**

* **What:** Periodic BIS report summarising how banks’ capital, leverage and liquidity look under Basel III and 3.1.
* **Modules:** 1, 11, 12, 13.
* **How to use:**

  * Skim latest version to quote real-world data points on how much capital big banks hold, impact of output floor, etc.

---

## 2. India / RBI Sources

For Indian references, the **landing pages / master circular indices** are the safest single bookmarks because RBI updates documents over time.

### 2.1 Capital Adequacy – Basel III in India

**15. Master Circular – Basel III Capital Regulations (RBI)**

* **What:** Consolidated prudential guidelines on capital adequacy under Basel III for Indian scheduled commercial banks (minimum ratios, buffers, capital components, risk-weights references, leverage, etc.).
* **Modules:** 3, 4, 5, 6, 7, 8, 11, 12.
* **How to use:**

  * Go via **Master Circulars index** and always download the **latest Basel III Capital Regulations** PDF.
  * For each capital ratio in your notes, you can tie it to specific paragraphs here.
* **Master Circular index:**
  [https://www.rbi.org.in/commonman/English/Scripts/MasterCircular.aspx](https://www.rbi.org.in/commonman/English/Scripts/MasterCircular.aspx)
  (Look for *“Master Circular – Basel III Capital Regulations”* entry.)

*(There are older PDFs like \`70BIIIMC010713.pdf\` that are still good for studying structure and wording, but always check the index for the current version.)*

**16. Basel II / NCAF – Prudential Guidelines on Capital Adequacy and Market Discipline – New Capital Adequacy Framework (NCAF)**

* **What:** Indian implementation of Basel II (Standardised Approach credit risk, Basic Indicator / Standardised Approaches for op-risk, Pillar 2/3 guidance).
* **Modules:** 2, 4, 5, 8, 10, 12.
* **How to use:**

  * Good reference when you want to see *exact Indian wording* on SA exposure classes, ECAIs, risk weights.
  * Still relevant because Basel III capital in India often cross-refers to NCAF for SA details.

---

### 2.2 Asset Quality, NPAs & Provisioning (link to RWA & buffers)

**17. Prudential norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP / IRAC norms)**

* **What:** Master Direction / master circular setting out NPA classification, restructuring norms, provisioning percentages, etc.
* **Modules:** 5, 6, 8, 10, 11.
* **How to use:**

  * For each of your “past-due / NPA” risk-weight discussions, map them to NPA buckets defined here.
  * Important for linking **provisions** (P&L / balance-sheet) to **capital and buffers**.
* **Practical trick:** When reading bank financial statements or Pillar-3 reports, IRAC section explains why provisioning numbers look the way they do.

---

### 2.3 Financial Statements & Notes to Accounts (including Basel links)

**18. Master Direction – Financial Statements – Presentation and Disclosures (RBI/DOR/2021-22/83)**

* **What:** Current Master Direction that tells banks how to present financial statements and what must appear in **Notes to Accounts** (capital, NPAs, sectoral exposure, etc.). Supersedes older “Disclosure in Financial Statements – Notes to Accounts” master circulars.
* **Modules:** 1, 3, 5, 10, 11.
* **How to use:**

  * When you design your app’s “reporting views”, this is the **template** for what RBI expects to see in published accounts.
  * Cross-link with Basel III Master Circular and IRAC norms for the underlying rules.

**19. Master Circular – Disclosure in Financial Statements – Notes to Accounts (older but still good for learning disclosure style)**

* **What:** 2013/2014 versions of the Notes-to-Accounts guidance that many banks still follow in spirit.
* **Modules:** 1, 10.
* **How to use:**

  * Good to study because it lists **specific disclosure tables** – capital adequacy, asset quality, concentration, etc.
  * Many Pillar-3 and annual report tables you’ll see are based on these formats.

---

### 2.4 Pillar 3 Disclosures & Basel III Reporting in India

RBI doesn’t have a single glossy “Basel III – Disclosure Requirements” PDF on the public site that’s as easy to grab as BIS standards, but the requirements are embedded in:

* Basel III capital regulations (which include disclosure references),
* NCAF / Basel II disclosure sections,
* Financial statements Master Direction / Notes to Accounts.

For **practical learning**, the best approach is to read actual Indian Pillar-3 / Basel III disclosure reports, which follow RBI’s DF-tables.

**20. Example – Basel III / Pillar 3 Disclosure: National Housing Bank (DF-tables)**

* **What:** NHB’s Basel III disclosure document with DF-1, DF-2, etc., based explicitly on RBI Basel III disclosure requirements.
* **Modules:** 4, 5, 7, 8, 10, 13.
* **How to use:**

  * Use as a **live template** for how Indian institutions fill DF tables for capital, RWAs, CRM, securitisation, etc.

You can similarly bookmark 1–2 more recent Pillar-3 reports (e.g. from foreign banks’ India branches or large public sector banks) – structure is the same.

---

### 2.5 Buffers & Macro-Prudential Tools

**21. Guidelines for implementation of Countercyclical Capital Buffer (CCCB) in India**

* **What:** RBI circular (2015) implementing CCCB framework in India (0–2.5% of RWA based on credit-to-GDP gap).
* **Modules:** 3, 11, 12.
* **How to use:**

  * Read the introductory parts to understand:

    * When CCCB is activated,
    * How the buffer is built and released,
    * Interaction with Capital Conservation Buffer.
* **Note:** The PDF on RBI’s own domain may require CAPTCHA in browser; the text is fully reproduced in reliable legal portals like TaxGuru / CorporateLawReporter.

---

### 2.6 Securitisation & Exposures

**22. Reserve Bank of India (Securitisation of Standard Assets) Directions, 2021 (Master Directions)**

* **What:** The current Indian securitisation framework for *standard* assets, replacing earlier scattered guidelines.
* **Modules:** 8, 10.
* **How to use:**

  * Use to understand:

    * When an exposure can be derecognised from books,
    * How credit enhancement, tranching, and risk retention work under RBI rules.
  * Combine with Basel securitisation framework (source 7) for theory + Indian implementation.

---

### 2.7 IRB / Advanced Approaches in India

**23. Implementation of the Internal Rating Based (IRB) Approach for credit risk – RBI final guidelines (2011)**

* **What:** RBI circular giving final guidelines for banks that want to adopt IRB approaches for credit risk.
* **Modules:** 12.
* **How to use:**

  * Focus on chapters that describe **minimum data / governance requirements**, validation and “use test” – these are very useful when explaining IRB in interviews from an Indian regulator’s angle.

**24. Implementation of New Capital Adequacy Framework (Basel II) in India – 2005 / 2007 circulars**

* **What:** Early RBI circulars that:

  * Announce migration to Basel II,
  * Define which approaches (SA for credit risk, BIA/SA for op-risk) are allowed initially.
* **Modules:** 2, 4, 12.
* **How to use:**

  * Historical context – helpful when you want to talk about India’s phased implementation of Basel standards and “parallel run” concepts.

---

## 3. Illustrative Disclosures & Example Documents

These are **not** regulations themselves, but show how the rules are applied in practice and are very useful for your app’s “case study” flavour.

**25. Basel III Disclosures – examples from Indian entities (various years)**

* Examples include Basel III disclosure PDFs for:

  * Indian branches of foreign banks,
  * All-India financial institutions (e.g., NABARD, NHB),
  * Private banks.
* **Modules:** 4–8, 10, 13.
* **How to use:**

  * Treat them as **worked examples of DF-tables**.
  * When your curriculum talks about “DF-4 Credit Risk: Standardised Approach” or “DF-7 Securitisation”, you can open the corresponding table in one of these PDFs and see real numbers.
`;

export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-3xl p-8 md:p-12">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          References & Source Documents
        </h1>
        <p className="text-lg text-slate-400">
          Official documentation from the Basel Committee and the Reserve Bank of India.
        </p>
      </header>

      <div className="prose prose-invert max-w-none">
        <MarkdownRenderer content={REFERENCES_CONTENT} />
      </div>

      <div className="mt-12">
        <Callout variant="warning" title="Educational Disclaimer">
          This material is for educational purposes only. It is NOT legal, regulatory, accounting, or supervisory advice.
          Rules and numbers may change; users must verify against latest official BIS / Basel Committee and RBI publications
          before relying on anything for decisions or official reporting.
        </Callout>
      </div>
    </div>
  );
}

