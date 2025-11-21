"use client";

const STORAGE_KEY = "completedModules";

export const ProgressService = {
  getCompletedModules: (): string[] => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  markModuleComplete: (moduleId: string): string[] => {
    const completed = ProgressService.getCompletedModules();
    if (!completed.includes(moduleId)) {
      const updated = [...completed, moduleId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }
    return completed;
  },

  markModuleIncomplete: (moduleId: string): string[] => {
    const completed = ProgressService.getCompletedModules();
    const updated = completed.filter((id) => id !== moduleId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  resetProgress: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
