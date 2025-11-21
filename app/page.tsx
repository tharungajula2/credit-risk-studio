import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-8 md:p-12">
      <section className="mb-16 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Basel III Capital & <br />
          <span className="text-indigo-500">Credit Risk Studio – India Focus</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Master the regulatory capital landscape with a focus on RBI guidelines.
          From the Three Pillars to RWA calculations, go from beginner to job-ready intermediate.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/modules/1"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Start Learning
          </Link>
          <Link
            href="/references"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800"
          >
            View References
          </Link>
        </div>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-2 text-xl font-semibold text-white">India-Focused</h3>
          <p className="text-slate-400">
            While covering global Basel standards, we specifically dive into RBI's implementation, including local nuances in Standardised Approach and capital structure.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-2 text-xl font-semibold text-white">Practical & Conceptual</h3>
          <p className="text-slate-400">
            Learn the "why" behind the rules, supported by simple numeric examples for RWA, capital ratios, and credit conversion factors.
          </p>
        </div>
      </div>

      <section className="mt-16 rounded-xl border border-yellow-900/30 bg-yellow-900/10 p-6">
        <h3 className="mb-2 text-lg font-semibold text-yellow-500">Work in Progress & Disclaimer</h3>
        <p className="text-sm text-yellow-200/80">
          <strong>Personal Lab / Work in Progress:</strong> This project is a personal learning lab and notes collection. It is a work in progress and not intended for commercial use or as a definitive reference.
        </p>
        <p className="mt-2 text-sm text-yellow-200/80">
          <strong>Educational Only:</strong> This material is for educational purposes only. It is NOT legal, regulatory, accounting, or supervisory advice.
          Rules and numbers may change; users must verify against latest official BIS / Basel Committee and RBI publications
          before relying on anything for decisions or official reporting.
        </p>
      </section>
    </div>
  );
}
