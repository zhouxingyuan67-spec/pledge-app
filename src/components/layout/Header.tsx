import React from 'react';
import { Diamond, ChevronDown } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center justify-between px-[16px] h-[60px] sticky top-0 z-10 bg-[#0A0B10]/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <div className="w-[24px] h-[24px] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                    <Diamond className="w-[14px] h-[14px] text-white" />
                </div>
                <span className="text-[18px] font-bold tracking-wide">Stakely</span>
            </div>
            <div className="flex items-center gap-[8px]">
                {/* 网络切换 */}
                {/*<div className="flex items-center gap-[4px] bg-[#1A1B23] px-[10px] py-[6px] rounded-full text-[12px] cursor-pointer hover:bg-[#22232e] transition-colors">*/}
                {/*    <Diamond className="w-[12px] h-[12px] text-[#627EEA]" />*/}
                {/*    <span>Ethereum</span>*/}
                {/*    <ChevronDown className="w-[12px] h-[12px] text-gray-400" />*/}
                {/*</div>*/}
                {/* 钱包地址 */}
                <div className="flex items-center gap-[6px] bg-[#1A1B23] px-[10px] py-[6px] rounded-full text-[12px] cursor-pointer hover:bg-[#22232e] transition-colors">
                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
                    <span>0x8a...3f2e</span>
                </div>
            </div>
        </header>
    );
}
