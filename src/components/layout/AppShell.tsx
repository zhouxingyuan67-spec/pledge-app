import React from "react";

import { cn } from "@/lib/utils";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

type AppShellProps = {
  children: React.ReactNode;
  contentClassName?: string;
  className?: string;
};

export function AppShell({ children, className, contentClassName }: AppShellProps) {
  return (
    <div
      className={cn(
        "flex h-dvh flex-col overflow-hidden bg-[#0A0B10] font-sans text-white selection:bg-purple-500/30",
        className
      )}
    >
      <Header />
      <main className={cn("min-h-0 flex-1 overflow-y-auto px-[16px] pb-[96px]", contentClassName)}>
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
