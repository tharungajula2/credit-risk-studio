import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
    return (
        <div className={cn("prose prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-li:text-slate-300 prose-blockquote:border-l-indigo-500 prose-blockquote:bg-slate-800/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-slate-300", className)}>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    // Custom link rendering if needed, or just let prose handle it
                    a: ({ node, ...props }) => (
                        <a {...props} className="text-indigo-400 hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer" />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
