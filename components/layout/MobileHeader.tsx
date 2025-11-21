"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-slate-100">Tharun Kumar Gajula's Personal Notes on Credit Risk</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 mt-[65px] bg-slate-900">
          <div className="h-full overflow-y-auto pb-20 p-4">
            <p className="mb-4 text-sm font-semibold text-slate-500">Navigate Modules</p>
            <nav className="space-y-1">
              {/* We need to import curriculum to map over modules. 
                   Since this is a client component, we can import the data directly.
               */}
              <MobileNavLinks onItemClick={() => setIsOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

import { curriculum } from "@/data/curriculum";
import { usePathname } from "next/navigation";
import { CheckCircle, Circle } from "lucide-react";

import { useProgress } from "@/hooks/useProgress";

function MobileNavLinks({ onItemClick }: { onItemClick: () => void }) {
  const pathname = usePathname();
  const { completedModules, mounted } = useProgress();

  if (!mounted) return null;

  return (
    <>
      {curriculum.modules.map((module) => {
        const isActive = pathname === `/modules/${module.id}`;
        const isCompleted = completedModules.includes(module.id);

        return (
          <Link
            key={module.id}
            href={`/modules/${module.id}`}
            onClick={onItemClick}
            className={cn(
              "flex items-start gap-3 rounded-lg p-3 text-sm transition-colors",
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
                  isActive ? "text-indigo-500" : "text-slate-600"
                )} />
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium">{module.title}</div>
            </div>
          </Link>
        );
      })}
      <div className="mt-4 border-t border-slate-800 pt-4">
        <Link
          href="/references"
          onClick={onItemClick}
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
    </>
  );
}
