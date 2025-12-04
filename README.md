# Basel III Capital & Credit Risk Studio – India Focus

A comprehensive, interactive learning application for understanding **Credit Risk** and **Capital Adequacy Compliance** under the Basel III framework, with a special focus on Indian (RBI) regulations.

---

## 🎯 What is This Project?

This is a **personal learning web application** designed to help finance professionals, students, and anyone interested in banking regulations understand:

- **Basel Framework** – The global banking regulations (Basel I, II, III, and 3.1)
- **Capital Adequacy** – How banks calculate and maintain sufficient capital
- **Credit Risk** – How banks measure and manage the risk of borrower default
- **RBI Implementation** – How India's Reserve Bank of India implements Basel rules

Think of it as a **"Master Class"** in banking capital regulations, presented in an interactive, easy-to-navigate web format.

---

## ✨ Key Features

### 📚 13 Comprehensive Learning Modules
Each module covers a specific topic with detailed explanations, formulas, examples, and practical insights:

| Module | Topic |
|--------|-------|
| 1 | Capital Adequacy & Basel Basics |
| 2 | Basel Framework & Three Pillars |
| 3 | Regulatory Capital Structure (CET1, AT1, Tier 2) |
| 4 | Credit Risk – Standardised Approach (Global) |
| 5 | Credit Risk – Standardised Approach (India/RBI) |
| 6 | Off-Balance Sheet Exposures, CCFs & EAD |
| 7 | Credit Risk Mitigation (CRM) |
| 8 | Securitisation & Other Pillar 1 Risks |
| 9 | RWA Engine Design & Implementation |
| 10 | Regulatory Capital Reporting & Disclosures (Pillar 3) |
| 11 | Capital Buffers, Headroom & Planning |
| 12 | IRB Approaches & Basel 3.1 (Endgame) |
| 13 | Summary & Reference Module |

### 🃏 Interactive Flashcards
- **10 Modules** of flashcards for quick revision
- Flip-card interface for active recall
- Progress tracking per module

### 🧮 Mathematical Formulas
- Beautifully rendered **LaTeX formulas** using KaTeX
- Block equations and inline math support
- Real Basel/RBI formulas with explanations

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Dark mode optimized interface
- Clean, professional UI

### ✅ Progress Tracking
- Mark modules as complete/incomplete
- Visual progress indicators
- Confetti celebration on 100% completion!

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS styling |
| **KaTeX** | LaTeX math rendering |
| **React Markdown** | Markdown content rendering |
| **LocalStorage** | Client-side progress persistence |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/credit-risk-studio.git
   cd credit-risk-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── modules/           # Module pages (dynamic routes)
│   ├── flashcards/        # Flashcard pages
│   ├── references/        # References page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/            # Reusable React components
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── MobileHeader.tsx   # Mobile navigation
│   ├── ModuleNavigation.tsx  # Module nav & completion
│   └── ...
│
├── data/                  # Content data files
│   ├── curriculum.ts      # All 13 modules content
│   └── flashcards.ts      # Flashcard content
│
├── hooks/                 # Custom React hooks
│   └── useProgress.ts     # Progress tracking hook
│
├── types/                 # TypeScript type definitions
│
├── public/                # Static assets
│
└── package.json           # Project dependencies
```

---

## 📖 How to Use

### Navigating Modules
1. Use the **sidebar** (desktop) or **hamburger menu** (mobile) to navigate
2. Click on any module to view its content
3. Scroll through the detailed notes
4. Use the **"Mark Complete"** button when done

### Using Flashcards
1. Click **"Flashcards"** in the sidebar
2. Select a module to study
3. Click the card to **flip** between question and answer
4. Use **Previous/Next** buttons to navigate

### Tracking Progress
- Your progress is saved automatically in your browser
- The progress bar shows overall completion
- Click **"Completed"** to mark a module as incomplete if needed

---

## 📐 Key Concepts Covered

### Capital Adequacy Basics
```
Capital Ratio = Capital / Risk-Weighted Assets (RWA)
```

In India:
- **Minimum Total Capital**: 9% of RWA (higher than Basel's 8%)
- **Capital Conservation Buffer (CCB)**: 2.5% of RWA in CET1
- **Effective Requirement**: 11.5% of RWA

### Risk-Weighted Assets (RWA)
```
RWA = Σ (EAD × Risk Weight)
```

Where:
- **EAD** = Exposure at Default
- **Risk Weight** = Assigned based on counterparty type, rating, collateral, etc.

### Credit Risk Mitigation
```
E* = max{0, E(1 + Hₑ) - C(1 - Hc - Hfx)}
```

Where E* is the exposure after applying collateral haircuts.

---

## 🎓 Who Is This For?

- **Banking professionals** preparing for capital adequacy roles
- **Finance students** studying banking regulations
- **Risk analysts** wanting to understand Basel III
- **Anyone** interested in how banks maintain financial stability

---

## 📝 Development Notes

### What Was Built
1. **Full curriculum** with 13 detailed modules
2. **Interactive flashcards** for revision
3. **Progress tracking** with local storage
4. **Responsive design** for all devices
5. **Math rendering** for Basel formulas
6. **Reference page** with official sources

### Recent Updates
- Removed duplicate module headings for cleaner display
- Fixed LaTeX rendering issues
- Added flashcard flip animations
- Implemented confetti celebration on completion

---

## 📚 References

This application references official documents from:
- **Basel Committee on Banking Supervision (BCBS/BIS)**
- **Reserve Bank of India (RBI)**
- **Indian Banks' Association (IBA)**
- **IIBF (Indian Institute of Banking & Finance)**

See the in-app **References** page for complete links.

---

## 🤝 Contributing

This is a personal learning project, but suggestions are welcome! Feel free to:
- Open issues for bugs or improvements
- Submit pull requests
- Share feedback

---

## 📄 License

This project is for educational purposes. Content is based on publicly available regulatory documents.

---

## 👤 Author

**Tharun Kumar Gajula**

Personal notes and learning platform for Credit Risk & Capital Adequacy.

---

*"Understanding capital adequacy isn't just about passing exams – it's about understanding why banks exist and how they stay safe."*
