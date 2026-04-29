"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleDollarSign, Lock, User, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
    {
        href: "/home",
        label: "质押",
        icon: Lock,
        activePaths: ["/", "/home"],
    },
    {
        href: "/portfolio",
        label: "我的仓位",
        icon: Wallet,
        activePaths: ["/portfolio"],
    },
    {
        href: "/earnings",
        label: "收益",
        icon: CircleDollarSign,
        activePaths: ["/earnings"],
    },
    {
        href: "/profile",
        label: "我的",
        icon: User,
        activePaths: ["/profile"],
    },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-[80px] items-center justify-around border-t border-white/5 bg-[#0A0B10]/95 pb-[16px] backdrop-blur-lg">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.activePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "flex min-w-[64px] flex-col items-center gap-[4px] text-gray-500 transition-colors hover:text-gray-300",
                            isActive && "text-purple-400 hover:text-purple-400"
                        )}
                    >
                        <Icon className="h-[24px] w-[24px]" />
                        <span className="text-[10px] font-medium">{tab.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
