"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle, ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

interface ModuleNavigationProps {
  currentModuleId: string;
}

export function ModuleNavigation({ currentModuleId }: ModuleNavigationProps) {
  const router = useRouter();
  const { markComplete, markIncomplete, isComplete, completedModules, mounted } = useProgress();

  const currentIndex = curriculum.modules.findIndex((m) => m.id === currentModuleId);
  const prevModule = currentIndex > 0 ? curriculum.modules[currentIndex - 1] : null;
  const nextModule = currentIndex < curriculum.modules.length - 1 ? curriculum.modules[currentIndex + 1] : null;

  const completed = isComplete(currentModuleId);

  const handleComplete = async () => {
    if (completed) {
      markIncomplete(currentModuleId);
    } else {
      markComplete(currentModuleId);

      // Check if this was the last module to complete
      // We add 1 because the state update hasn't happened yet in this render cycle
      if (completedModules.length + 1 === curriculum.modules.length) {
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (error) {
          console.log("Confetti not available:", error);
        }
      }

      if (nextModule) {
        router.push(`/modules/${nextModule.id}`);
      } else {
        // End of course
        router.push("/");
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <button
          onClick={handleComplete}
          className={cn(
            "flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all",
            completed
              ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
          )}
        >
          {completed ? (
            <>
              <CheckCircle className="h-5 w-5" />
              Completed
            </>
          ) : (
            <>
              <Circle className="h-5 w-5" />
              Mark as Complete
            </>
          )}
        </button>

        {nextModule && (
          <Link
            href={`/modules/${nextModule.id}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            Next: {nextModule.title}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="flex justify-between text-sm text-slate-500">
        {prevModule ? (
          <Link
            href={`/modules/${prevModule.id}`}
            className="flex items-center gap-1 hover:text-slate-300"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Module
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
