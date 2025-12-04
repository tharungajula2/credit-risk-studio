"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { flashcards } from "@/data/flashcards";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { ChevronLeft, ChevronRight, ArrowLeft, RotateCcw } from "lucide-react";

export default function FlashcardViewerPage() {
    const params = useParams();
    const router = useRouter();
    const moduleId = params.id as string;

    const module = flashcards.find((m) => m.id === moduleId);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    if (!module) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h2 className="text-2xl font-bold text-white mb-4">Module Not Found</h2>
                <button
                    onClick={() => router.push("/flashcards")}
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Flashcards
                </button>
            </div>
        );
    }

    const currentCard = module.cards[currentCardIndex];
    const progress = ((currentCardIndex + 1) / module.cards.length) * 100;

    const handleNext = () => {
        if (currentCardIndex < module.cards.length - 1) {
            setIsFlipped(false);
            setCurrentCardIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentCardIndex > 0) {
            setIsFlipped(false);
            setCurrentCardIndex((prev) => prev - 1);
        }
    };

    const handleRestart = () => {
        setIsFlipped(false);
        setCurrentCardIndex(0);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <button
                    onClick={() => router.push("/flashcards")}
                    className="text-slate-400 hover:text-slate-200 flex items-center mb-4 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Modules
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {module.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>Card {currentCardIndex + 1} of {module.cards.length}</span>
                    <div className="flex-1 h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Flashcard Area */}
            <div className="relative min-h-[400px] perspective-1000">
                <div
                    className="w-full h-full min-h-[400px] relative cursor-pointer transition-all duration-500 transform-style-3d"
                    onClick={() => setIsFlipped(!isFlipped)}
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-8 flex flex-col items-center justify-center text-center">
                        <span className="absolute top-4 left-4 text-xs font-semibold text-indigo-400 uppercase tracking-wider">Question</span>
                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-100">
                            {currentCard.title}
                        </h3>
                        <p className="absolute bottom-4 text-sm text-slate-400 animate-pulse">
                            Click to flip
                        </p>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden bg-slate-900 rounded-2xl shadow-lg border border-slate-700 p-8 overflow-y-auto"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <span className="absolute top-4 left-4 text-xs font-semibold text-green-400 uppercase tracking-wider">Answer</span>
                        <div className="mt-6 prose prose-slate dark:prose-invert max-w-none">
                            <MarkdownRenderer content={currentCard.content} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
                <button
                    onClick={handlePrev}
                    disabled={currentCardIndex === 0}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${currentCardIndex === 0
                        ? "text-slate-600 cursor-not-allowed"
                        : "text-slate-200 hover:bg-slate-800"
                        }`}
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Previous
                </button>

                <button
                    onClick={handleRestart}
                    className="p-3 text-slate-400 hover:text-indigo-400 transition-colors"
                    title="Restart Module"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentCardIndex === module.cards.length - 1}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${currentCardIndex === module.cards.length - 1
                        ? "text-slate-600 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md hover:shadow-lg"
                        }`}
                >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                </button>
            </div>

            {/* Keyboard Hint */}
            <div className="mt-8 text-center text-sm text-slate-400">
                <p>Pro tip: Use Space to flip, Left/Right arrows to navigate</p>
            </div>
        </div>
    );
}
