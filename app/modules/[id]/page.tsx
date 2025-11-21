import { notFound } from "next/navigation";
import { curriculum } from "@/data/curriculum";
import { Callout } from "@/components/content/Callout";
import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { ModuleNavigation } from "@/components/layout/ModuleNavigation";

// This generates the static paths for all modules at build time
export function generateStaticParams() {
  return curriculum.modules.map((module) => ({
    id: module.id,
  }));
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const module = curriculum.modules.find((m) => m.id === params.id);

  if (!module) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl p-8 md:p-12">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <div className="mb-4 text-sm font-medium text-indigo-400">
          Module {module.id}
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {module.title}
        </h1>
        <p className="text-lg text-slate-400">{module.goal}</p>
      </header>

      <div className="space-y-12">
        {module.sections.map((section) => (
          <section key={section.id} className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-200">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.content.map((block, index) => {
                switch (block.type) {
                  case "markdown":
                    return (
                      <MarkdownRenderer
                        key={index}
                        content={block.content as string}
                      />
                    );
                  case "paragraph":
                    return (
                      <p key={index} className="leading-7 text-slate-300">
                        {block.content}
                      </p>
                    );
                  case "list":
                    return (
                      <ul key={index} className="list-disc space-y-2 pl-6 text-slate-300">
                        {(block.content as string[]).map((item, i) => (
                          <li key={i} dangerouslySetInnerHTML={{
                            // Basic markdown-like bold support
                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200 font-semibold">$1</strong>')
                          }} />
                        ))}
                      </ul>
                    );
                  case "heading":
                    return (
                      <h3 key={index} className="mt-8 text-xl font-medium text-slate-200">
                        {block.title || block.content}
                      </h3>
                    );
                  case "callout":
                    return (
                      <Callout
                        key={index}
                        variant={block.variant || "info"}
                        title={block.title}
                      >
                        {block.content}
                      </Callout>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-800 pt-8">
        <ModuleNavigation currentModuleId={module.id} />
      </div>
    </div>
  );
}
