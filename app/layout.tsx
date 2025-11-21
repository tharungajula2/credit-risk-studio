import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";

export const metadata: Metadata = {
  title: "Credit Risk & Basel III - Zero to Hero",
  description: "A complete learning guide to Basel III capital adequacy and credit risk, focused on the Indian context.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background text-foreground antialiased")}>
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <MobileHeader />
          
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
