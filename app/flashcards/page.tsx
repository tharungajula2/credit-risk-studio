"use client";

import React from "react";
import Link from "next/link";
import { flashcards } from "@/data/flashcards";
import { BookOpen, ArrowRight } from "lucide-react";

export default function FlashcardsPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Flashcards
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Reinforce your knowledge of Credit Risk, Basel III, and Regulatory Capital with these curated flashcards.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {flashcards.map((module) => (
                    <Link
                        key={module.id}
                        href={`/flashcards/${module.id}`}
                        className="group relative bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full">
                                {module.cards.length} Cards
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                            {module.title}
                        </h3>

                        <div className="flex items-center text-sm text-slate-400 mt-4 group-hover:translate-x-1 group-hover:text-indigo-400 transition-all duration-200">
                            <span>Start Review</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
