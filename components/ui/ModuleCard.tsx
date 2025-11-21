import Link from "next/link";
import { Module } from "@/types/curriculum";
import { CheckCircle, Circle } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  isCompleted: boolean;
}

export function ModuleCard({ module, isCompleted }: ModuleCardProps) {
  return (
    <Link 
      href={`/modules/${module.id}`}
      className="group block rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-indigo-500/50 hover:bg-slate-800/50"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0 text-indigo-500">
          {isCompleted ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 text-slate-600 group-hover:text-indigo-400" />
          )}
        </div>
        <div>
          <h3 className="font-medium text-slate-200 group-hover:text-white">
            {module.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400 line-clamp-2">
            {module.goal}
          </p>
        </div>
      </div>
    </Link>
  );
}
