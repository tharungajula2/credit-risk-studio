
---

# Module 7 – Credit Risk Mitigation (CRM): Collateral, Guarantees & Netting

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

[
E^* = \max{0,\ E \times (1 + H_e) - C \times (1 - H_c - H_{fx})}
]

Where:

* (E^*) = exposure value after CRM (volatility-adjusted),
* (E) = current exposure value,
* (H_e) = haircut on exposure (often 0 for loans),
* (C) = current collateral value,
* (H_c) = haircut on collateral (market price volatility),
* (H_{fx}) = haircut for **currency mismatch**.

**RWA after CRM:**

[
\text{RWA} = E^* \times \text{RW}_{\text{counterparty}}
]

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

* (H_e = 0),
* (H_c = 0),
* (H_{fx} = 0) if same currency (or 8% if currency-mismatched).

Then risk-weight (E^*) by the **counterparty risk weight**.

---

## 7.7 Guarantees – substitution approach

### 7.7.1 Concept

When an eligible guarantee exists, the **protected portion** of the exposure can be treated as if it were an exposure to the **guarantor** instead of the original obligor. Basel calls this the **substitution approach**, and RBI follows the same logic.

Let:

* (E) = exposure amount (after CCF if OBS; after any collateral E* if relevant),
* (G_{\text{adj}}) = effective guaranteed amount after any FX / maturity adjustments,
* (\text{RW}_o) = risk weight of original obligor,
* (\text{RW}_g) = risk weight of guarantor.

Then:

* Protected portion = (\min(E,\ G_{\text{adj}})) → gets (\text{RW}_g),
* Unprotected portion = (\max(0,\ E - G_{\text{adj}})) → gets (\text{RW}_o).

[
\text{RWA} = \min(E,\ G_{\text{adj}})\times \text{RW}*g + \max(0,\ E - G*{\text{adj}})\times \text{RW}_o
]

This only reduces RWA if (\text{RW}_g < \text{RW}_o).

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

[
P_a = P \times \frac{t - 0.25}{T - 0.25}
]

Where:

* (P_a) = protection value **after** maturity mismatch adjustment,
* (P) = protection amount after any other adjustments (e.g. FX),
* (t) = (\min(T, \text{residual maturity of CRM})) in years,
* (T) = (\min(5,\ \text{residual maturity of exposure})) in years.

If eligibility conditions fail (e.g. CRM original maturity less than 1 year, or residual maturity ≤ 3 months), then **no CRM recognition**: (P_a = 0).

In an implementation, (P_a) is then used instead of (P) in the **substitution** or **E*** formulas.

---

## 7.10 Currency mismatches – FX haircut

If the CRM (collateral / guarantee / credit derivative) is denominated in a **different currency** from the exposure, Basel requires an additional **currency mismatch haircut** (H_{fx}).

Standard Basel calibration:

* For a 10-business-day holding period, assuming daily marking-to-market, the **supervisory FX haircut** is **8%**.
* For less frequent revaluation / longer holding periods, the haircut is **scaled up** using the square-root-of-time formula.

Implementation:

* For collateral, (H_{fx}) appears directly in the E* formula:

  [
  E^* = \max{0,\ E (1 + H_e) - C(1 - H_c - H_{fx})}
  ]

* For guarantees / CDS, a simple implementation is:

  [
  G_{\text{FX-adj}} = G \times (1 - H_{fx})
  ]

  and then, if there is a maturity mismatch, apply the (P_a) formula on (G_{\text{FX-adj}}).

---

## 7.11 Combining CRM with OBS exposures (link to Module 6)

For **off-balance sheet (OBS)** items under the Standardised Approach, the sequence is:

1. **Convert to EAD using CCFs** (Module 6):

   [
   \text{EAD} = \text{Notional} \times \text{CCF}
   ]

2. **Apply CRM on EAD**, not on gross notional:

   * For collateral: take (E = \text{EAD}) in the E* formula.
   * For guarantees / CDS: take (E = \text{EAD}) when applying substitution and maturity / FX adjustments.

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
