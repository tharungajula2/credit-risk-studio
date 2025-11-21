"use client";

import { useState, useEffect } from "react";
import { ProgressService } from "@/lib/progress";

export function useProgress() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCompletedModules(ProgressService.getCompletedModules());
  }, []);

  const markComplete = (moduleId: string) => {
    const updated = ProgressService.markModuleComplete(moduleId);
    setCompletedModules(updated);
  };

  const markIncomplete = (moduleId: string) => {
    const updated = ProgressService.markModuleIncomplete(moduleId);
    setCompletedModules(updated);
  };

  const resetProgress = () => {
    ProgressService.resetProgress();
    setCompletedModules([]);
  };

  const isComplete = (moduleId: string) => completedModules.includes(moduleId);

  return {
    completedModules,
    markComplete,
    markIncomplete,
    resetProgress,
    isComplete,
    mounted,
  };
}
