
---

# Module 6 – Off-Balance Sheet Exposures, CCFs & EAD (Basel + Indian Context)

## 6.1 Why off-balance sheet (OBS) matters

Banks create credit risk not only via funded loans but also via **off-balance sheet (OBS)** items, such as:

* Undrawn credit lines and commitments
* Guarantees and standby letters of credit
* Documentary letters of credit (LCs)
* Performance and bid bonds
* Certain derivative contracts (counterparty credit risk)

Under the **Standardised Approach (SA)**, Basel converts OBS items into **credit exposure equivalents** using **Credit Conversion Factors (CCFs)** and then applies the usual **risk weights (RWs)** to obtain **RWA**.

Conceptually:

[
\text{EAD}_{\text{off}} = \text{Notional} \times \text{CCF}
]

[
\text{RWA} = \text{EAD}_{\text{off}} \times \text{RW}
]

The Basel framework explicitly states that off-balance sheet items are first converted into credit exposure equivalents using CCFs and then risk-weighted like on-balance sheet exposures.

RBI’s Basel III capital regulations use the same structure, defining a **credit equivalent amount** as **contract amount × CCF** for non-market related OBS items.

---

## 6.2 EAD – recap in the Standardised Approach

Under SA, **Exposure at Default (EAD)** is defined differently for **on-balance sheet** and **off-balance sheet** items.

### 6.2.1 On-balance sheet items

On-balance sheet exposures are generally taken at their **accounting value**, adjusted for **specific provisions and partial write-offs**.

Conceptually, for exposure ( i ):

[
\text{EAD}_{\text{on}, i} = \max\Big(0,\ \text{Gross carrying amount}_i - \text{specific provisions}_i - \text{partial write-offs}_i\Big)
]

### 6.2.2 Off-balance sheet items

For an OBS item ( k ) with contractual notional ( N_k ):

[
\text{EAD}_{\text{off}, k} = N_k \times \text{CCF}_k
]

### 6.2.3 Total EAD

For a counterparty or facility:

[
\text{EAD}*{\text{total}} = \sum_i \text{EAD}*{\text{on}, i} + \sum_k \text{EAD}_{\text{off}, k}
]

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

[
\text{CCF}_{\text{direct credit substitute}} = 100%
]

[
\text{EAD} = \text{Notional} \times 1.0
]

Examples: general guarantees of indebtedness, standby LCs that serve as **financial guarantees** for loans or securities.

Risk weight is then based on the **underlying obligor** (sovereign, bank, corporate, etc.).

---

### 6.4.2 Transaction-related contingencies (performance guarantees) – typically 50% CCF

Performance-related contingencies usually attract:

[
\text{CCF}_{\text{performance}} \approx 50%
]

[
\text{EAD} = \text{Notional} \times 0.50
]

This reflects that there is a meaningful, but not full, probability that the guarantee will be called.

---

### 6.4.3 Short-term trade-related contingencies – typically 20% CCF

Short-term, self-liquidating trade contingencies (e.g. documentary LCs on movement of goods) are often given a lower CCF, typically:

[
\text{CCF}_{\text{trade}} \approx 20%
]

[
\text{EAD} = \text{Notional} \times 0.20
]

---

### 6.4.4 Other commitments (non-UCC) – 20% / 50% CCF by maturity

For **non-UCC commitments** such as undrawn term loans or revolving limits:

* **Original maturity ≤ 1 year** → lower CCF (often 20%)
* **Original maturity > 1 year** → higher CCF (often 50%)

[
\text{EAD} =
\begin{cases}
N \times 0.20, & \text{if original maturity} \le 1\ \text{year} [4pt]
N \times 0.50, & \text{if original maturity} > 1\ \text{year}
\end{cases}
]

RBI’s Basel III circular reproduces this pattern for non-market related OBS items (Table on Credit Conversion Factors).

---

### 6.4.5 Unconditionally cancellable commitments (UCC)

Definition (Basel / RBI): commitments where the bank can **cancel or reduce** the commitment **at any time, unconditionally and without prior notice**, or where the facility automatically cancels upon deterioration in creditworthiness.

* Under older Basel II and many existing national frameworks, such commitments often receive **0% CCF**.
* Basel 3.1 reforms introduce **positive CCFs** (e.g. 10%) for UCCs to better reflect that banks may not fully exercise their cancellation rights in stress.

For a UCC with notional ( N ):

[
\text{EAD} = N \times \text{CCF}_{\text{UCC}}
]

In India, as per the current RBI Basel III capital regulations, UCCs in the non-market OBS table are still given **0% CCF**; future Basel 3.1-aligned updates may change this, but those will come via explicit RBI circulars.

---

## 6.5 OBS & CCFs in the Indian (RBI) implementation

RBI’s **Basel III Capital Regulations – Master Circular** sets out how Indian banks must treat off-balance sheet items.

RBI defines:

[
\text{Credit equivalent amount} = \text{Contract amount} \times \text{CCF}
]

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

* `OBS_category → CCF`
* `CCF` then feeds into EAD, which feeds SA risk weighting.

---

## 6.6 EAD formulas – fully spelled out

### 6.6.1 On-balance sheet items

For each on-balance sheet exposure ( i ):

[
\text{EAD}_{\text{on}, i} = \max\Big(0,\ \text{Gross carrying amount}_i - \text{specific provisions}_i - \text{partial write-offs}_i\Big)
]

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

[
\text{EAD}_{\text{off}, k} = N_k \times \text{CCF}_k
]

The **RWA** for that OBS item is then:

[
\text{RWA}*k = \text{EAD}*{\text{off}, k} \times \text{RW}_k
]

where ( \text{RW}_k ) is the SA risk weight based on the **obligor / exposure class** (sovereign, bank, corporate, retail, etc.).

---

### 6.6.3 Facilities with both drawn and undrawn parts

Consider a limit-based facility with:

* Sanction limit: ( L )
* Disbursed amount: ( D )
* Undrawn amount: ( U = L - D )

Steps:

1. **On-balance EAD**:

[
\text{EAD}_{\text{on}} = \max\big(0,\ D - \text{specific provisions}\big)
]

2. **Off-balance EAD** (if the undrawn part is not UCC):

   * Determine the correct OBS category and CCF (e.g., 20% if original maturity ≤ 1 year; 50% if > 1 year).

[
\text{EAD}_{\text{off}} = U \times \text{CCF}
]

3. **Total facility EAD**:

[
\text{EAD}*{\text{total}} = \text{EAD}*{\text{on}} + \text{EAD}_{\text{off}}
]

4. **RWA**:

[
\text{RWA} = \text{EAD}_{\text{total}} \times \text{RW}
]

where ( \text{RW} ) is determined under SA (Module 4 / 5 logic).

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

[
\text{RWA} = \text{EAD}*{\text{collateralised}} \times \text{RW}*{\text{collateral}} + \text{EAD}*{\text{unsecured}} \times \text{RW}*{\text{obligor}}
]

(Exact haircut formulae and eligibility rules are covered in Module 7.)

### 6.7.2 Guarantees and credit derivatives – substitution approach

For eligible guarantees / credit derivatives, SA uses a **substitution approach**:

If a guarantee covers fraction ( \alpha ) of EAD:

[
\text{EAD}_{\text{guaranteed}} = \alpha \times \text{EAD}
]

[
\text{EAD}_{\text{unguaranteed}} = (1 - \alpha) \times \text{EAD}
]

Then:

[
\text{RWA} = \text{EAD}*{\text{guaranteed}} \times \text{RW}*{\text{guarantor}} + \text{EAD}*{\text{unguaranteed}} \times \text{RW}*{\text{obligor}}
]

This logic applies equally to OBS exposures **once** they have been converted into EAD via CCFs.

---

## 6.8 Implementation view – building an OBS / CCF / EAD engine

### 6.8.1 Key data fields per facility / limit

A realistic RWA engine for SA credit risk needs, at minimum, the following fields per facility / OBS item:

* `facility_id`
* `counterparty_id`
* `product_type`

  * e.g. term loan, CC/OD limit, financial guarantee, performance guarantee, LC, SBLC, etc.
* `sanction_limit` / `credit_limit`
* `current_outstanding` (funded amount)
* `undrawn_amount` (limit – outstanding, adjusted for blocked margins)
* `original_maturity` (or bucket: ≤ 1 year / > 1 year)
* `is_unconditionally_cancellable` (true/false, based on contract)
* `specific_provisions` / `interest_suspense`
* `off_balance_notional` (for pure OBS items without limits, e.g. standalone guarantees)
* CRM flags and details (collateral, guarantees)

### 6.8.2 CCF engine – conceptual logic

In pseudocode:

```text
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
```

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
