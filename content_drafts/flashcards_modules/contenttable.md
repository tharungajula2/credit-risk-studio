🔹 Module 1 – Core Banking & Risk Overview

(foundation layer)

What a bank’s balance sheet looks like (assets, liabilities, capital).

Types of risks: credit, market, operational, liquidity, IRRBB.

Where CapAd and ALM sit in this picture.

🔹 Module 2 – Credit Risk Fundamentals & EL vs UL

Default, recovery, NPL / NPA, stages.

PD, LGD, EAD definitions and intuition.

Expected Loss vs Unexpected Loss

How provisions (IFRS 9 ECL) vs capital (Basel) cover EL vs UL.

🔹 Module 3 – PD / LGD / EAD Modelling & Scoring

Scorecards, feature types, target definitions.

Basel perspective on PD/LGD/EAD (relevant bits from RBI circular).

IFRS 9 perspective for ECL.

Your PD scorecard project mapping.

🔹 Module 4 – Model Validation, Monitoring & Backtesting

Confusion matrix with your coding (0 = default, 1 = non-default).

Accuracy, precision, recall (with your convention).

AUC, Gini, KS – what they measure and how they’re used in credit risk.

PSI and CSI for drift.

Backtesting for PD/LGD/EAD/ECL & how it feeds into ICAAP/model governance.

🔹 Module 5 – Basel III Capital Framework (RBI Master Circular focus)

Only the slices that matter for this role:

Capital structure: CET1, AT1, Tier 2 (RBI definitions).

Minimum capital ratios + buffers (CET1, Tier 1, Total – from circular).

Credit Risk approaches: Standardised vs IRB (where Surya CapAd fits).

High-level Operational Risk and Market Risk just enough to talk about CapAd coverage.

Leverage ratio concept.

Where RWA and CapAd outputs plug into capital ratios.

🔹 Module 6 – IFRS 9 / Ind AS 109 ECL & its Link to Basel

Staging (1/2/3), 12-month vs lifetime ECL.

ECL formula (multi-period PD × LGD × EAD × DF).

How the same PD/LGD/EAD engine can feed both CapAd (capital) and ECL (provisions).

Role in ICAAP & stress testing.

🔹 Module 7 – ALM & IRRBB

RSA/RSL, gap analysis & ΔNII.

Duration, PV01 ladder, ΔEVE under shocks.

RBI IRRBB / supervisory shock logic (where relevant to CapAd/ALM).

Hedging to pass Supervisory Outlier Test (using your toy bank project).

🔹 Module 8 – Liquidity: LCR, LST/CFP, NSFR

LCR: HQLA, net cash outflows, 30-day horizon (RBI text where relevant).

Liquidity stress test & survival horizon.

Contingency Funding Plan tiers.

NSFR: ASF / RSF, 1-year structural funding.

How ALM engine + CapAd outputs support these.

🔹 Module 9 – Data, BCBS 239 & Model Documentation

BCBS 239 principles that matter to this role: accuracy, completeness, timeliness, adaptability.

Data lineage from source → staging → CapAd / ALM / ECL / reports.

Good model documentation structure: dev doc, validation, implementation, monitoring, governance.

🔹 Module 10 – Implementation: CapAd / ALM Project Lifecycle & Tools

CapAd project lifecycle: Requirements → Config & data → UAT → Go-live.

BRD vs FRD in CapAd/ALM context.

Agile/Scrum/Kanban + Jira for these projects.

Postman for API testing, SQL basics (only what’s needed).