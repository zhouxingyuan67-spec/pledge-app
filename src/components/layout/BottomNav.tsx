import React from 'react';
import { Lock, Wallet, User } from "lucide-react";

export function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-[80px] bg-[#0A0B10]/95 backdrop-blur-lg border-t border-white/5 flex items-center justify-around pb-[16px] z-50">
            <div className="flex flex-col items-center gap-[4px] text-purple-400 cursor-pointer">
                <Lock className="w-[24px] h-[24px]" />
                <span className="text-[10px] font-medium">质押</span>
            </div>
            <div className="flex flex-col items-center gap-[4px] text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                <Wallet className="w-[24px] h-[24px]" />
                <span className="text-[10px] font-medium">我的仓位</span>
            </div>
            <div className="flex flex-col items-center gap-[4px] text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                <div className="w-[24px] h-[24px] rounded-full border-2 border-current flex items-center justify-center">
                    <span className="text-[14px] font-bold">$</span>
                </div>
                <span className="text-[10px] font-medium">收益</span>
            </div>
            <div className="flex flex-col items-center gap-[4px] text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                <User className="w-[24px] h-[24px]" />
                <span className="text-[10px] font-medium">我的</span>
            </div>
        </nav>
    );
}
