"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, BookOpen, Zap } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

export function Sidebar() {
  const pathname = usePathname();
  const { completedModules, mounted } = useProgress();

  // Calculate progress
  const progress = Math.round((completedModules.length / curriculum.modules.length) * 100);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <aside className="hidden w-80 flex-col border-r border-slate-800 bg-slate-900/50 md:flex h-screen sticky top-0 overflow-hidden">
      <div className="p-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 mb-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-slate-100">Tharun Kumar Gajula's Personal Notes on Credit Risk</span>
        </Link>
        <p className="text-xs text-slate-500 pl-10">India-Focused Edition</p>

        <div className="mt-6">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Course Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {curriculum.modules.map((module) => {
          const isActive = pathname === `/modules/${module.id}`;
          const isCompleted = completedModules.includes(module.id);

          return (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className={cn(
                "group flex items-start gap-3 rounded-lg p-3 text-sm transition-colors",
                isActive
                  ? "bg-indigo-500/10 text-indigo-300"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              )}
            >
              <div className="mt-0.5 shrink-0">
                {isCompleted ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <Circle className={cn(
                    "h-4 w-4",
                    isActive ? "text-indigo-500" : "text-slate-600 group-hover:text-slate-500"
                  )} />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium">{module.title}</div>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-1">
        <Link
          href="/flashcards"
          className={cn(
            "flex items-center gap-3 rounded-lg p-3 text-sm font-medium transition-colors",
            pathname.startsWith("/flashcards")
              ? "bg-indigo-500/10 text-indigo-300"
              : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
          )}
        >
          <Zap className="h-4 w-4" />
          Flashcards
        </Link>
        <Link
          href="/references"
          className={cn(
            "flex items-center gap-3 rounded-lg p-3 text-sm font-medium transition-colors",
            pathname === "/references"
              ? "bg-indigo-500/10 text-indigo-300"
              : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
          )}
        >
          <div className="h-4 w-4" /> {/* Spacer for alignment */}
          References & Sources
        </Link>
      </div>
    </aside>
  );
}
