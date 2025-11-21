import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, Lightbulb } from "lucide-react";

interface CalloutProps {
  variant?: "info" | "warning" | "example" | "success";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ variant = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      container: "border-blue-900/30 bg-blue-900/10 text-blue-200",
      icon: <Info className="h-5 w-5 text-blue-400" />,
      title: "text-blue-300",
    },
    warning: {
      container: "border-yellow-900/30 bg-yellow-900/10 text-yellow-200",
      icon: <AlertCircle className="h-5 w-5 text-yellow-400" />,
      title: "text-yellow-300",
    },
    example: {
      container: "border-indigo-900/30 bg-indigo-900/10 text-indigo-200",
      icon: <Lightbulb className="h-5 w-5 text-indigo-400" />,
      title: "text-indigo-300",
    },
    success: {
      container: "border-green-900/30 bg-green-900/10 text-green-200",
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      title: "text-green-300",
    },
  };

  const style = styles[variant];

  return (
    <div className={cn("my-6 rounded-lg border p-4", style.container)}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className={cn("mb-1 font-semibold", style.title)}>{title}</h4>
          )}
          <div className="text-sm leading-relaxed opacity-90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
