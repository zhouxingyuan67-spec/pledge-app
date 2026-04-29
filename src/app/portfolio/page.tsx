import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Eye,
    ArrowDownCircle,
    Sparkles,
    PieChart,
    FileText,
    Diamond,
    ArrowRight,
    FolderOpen
} from "lucide-react";

// --- 模拟仓位数据 ---
const POSITIONS = [
    {
        id: 'eth',
        symbol: 'ETH',
        tag: '主流资产',
        stakedAmount: '2.0500 ETH',
        stakedValue: '≈ $6,120.45',
        apy: '4.85%',
        earned: '$ 310.25',
        earnedCrypto: '+0.0521 ETH',
        lockPeriod: '灵活 (随时取回)',
        iconBg: 'bg-[#627EEA]',
    },
    {
        id: 'steth',
        symbol: 'stETH',
        tag: '流动性质押',
        stakedAmount: '1.5000 stETH',
        stakedValue: '≈ $3,780.30',
        apy: '6.32%',
        earned: '$ 238.75',
        earnedCrypto: '+0.0912 stETH',
        lockPeriod: '灵活 (随时取回)',
        iconBg: 'bg-[#00A3FF]',
    },
    {
        id: 'usdc',
        symbol: 'USDC',
        tag: '稳定收益',
        stakedAmount: '1,000.00 USDC',
        stakedValue: '= $1,000.00',
        apy: '8.75%',
        earned: '$ 87.50',
        earnedCrypto: '+87.50 USDC',
        lockPeriod: '30 天',
        iconBg: 'bg-[#2775CA]',
    },
    {
        id: 'matic',
        symbol: 'MATIC',
        tag: '高收益',
        stakedAmount: '5,000.00 MATIC',
        stakedValue: '≈ $410.03',
        apy: '12.50%',
        earned: '$ 51.04',
        earnedCrypto: '+622.50 MATIC',
        lockPeriod: '90 天',
        iconBg: 'bg-[#8247E5]',
    }
];

export default function PortfolioPage() {
    return (
        <>
            <div>
                {/* 1. Hero Section */}
                <section className="mt-[20px] flex justify-between items-center relative">
                    <div>
                        <h1 className="text-[32px] font-extrabold tracking-tight">我的仓位</h1>
                        <p className="text-[14px] text-gray-400 mt-[4px]">查看和管理您的质押资产</p>
                    </div>
                    {/* 右侧 3D 插画占位 */}
                    <div className="w-[100px] h-[80px] relative">
                        <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full" />
                        <FolderOpen className="w-[64px] h-[64px] text-purple-500 absolute right-0 top-[10px] drop-shadow-2xl opacity-90" />
                        <PieChart className="w-[24px] h-[24px] text-indigo-400 absolute left-[-10px] bottom-[10px]" />
                    </div>
                </section>

                {/* 2. Overview Card 资产总览 */}
                <section className="mt-[24px] bg-gradient-to-br from-[#1C1E2D] to-[#12131D] rounded-2xl p-[20px] border border-white/5 shadow-xl relative overflow-hidden">
                    {/* 顶部：总资产（核心视觉） */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-[6px] text-gray-400">
                            <span className="text-[13px] font-medium">总质押资产(USD)</span>
                            <Eye className="w-[14px] h-[14px] cursor-pointer hover:text-gray-300 transition-colors" />
                        </div>
                        <div className="text-[36px] font-extrabold font-mono mt-[8px] tracking-tight leading-none">
                            $ 12,560.78
                        </div>
                        <div className="text-[13px] text-gray-500 mt-[6px]">
                            ≈ 4.2516 ETH
                        </div>
                    </div>

                    {/* 分割线 */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-[20px] relative z-10" />

                    {/* 底部：收益与数量（次级数据） */}
                    <div className="relative z-10 grid grid-cols-2 gap-[16px]">
                        <div>
                            <div className="text-[12px] text-gray-400">总收益(USD)</div>
                            <div className="mt-[6px] text-[17px] font-bold">$ 1,250.34</div>
                            <div className="mt-[4px] inline-flex rounded-md bg-emerald-400/10 px-[6px] py-[2px] text-[12px] font-medium text-emerald-400">
                                +12.50%
                            </div>
                        </div>

                        <div className="">
                            <div className="text-[12px] text-gray-400">总质押数量(USD)</div>
                            <div className="mt-[6px] text-[17px] font-bold">$ 11,310.44</div>
                            <div className="mt-[4px] text-[12px] text-gray-500">≈ 3.8529 ETH</div>
                        </div>
                    </div>

                    {/* 背景装饰光晕，增加立体感 */}
                    <div className="absolute right-[-40px] top-[-40px] w-[120px] h-[120px] bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                </section>

                {/* 3. Quick Actions 快捷操作 */}
                <section className="mt-[24px] grid grid-cols-4 gap-[8px] px-[8px]">
                    <div className="flex flex-col items-center gap-[8px] cursor-pointer group">
                        <div className="w-[44px] h-[44px] bg-[#1A1B23] rounded-full flex items-center justify-center group-hover:bg-[#22232e] transition-colors">
                            <ArrowDownCircle className="w-[20px] h-[20px] text-purple-400" />
                        </div>
                        <span className="text-[12px] text-gray-300">全部赎回</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] cursor-pointer group">
                        <div className="w-[44px] h-[44px] bg-[#1A1B23] rounded-full flex items-center justify-center group-hover:bg-[#22232e] transition-colors">
                            <Sparkles className="w-[20px] h-[20px] text-purple-400" />
                        </div>
                        <span className="text-[12px] text-gray-300">收益复投</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] cursor-pointer group">
                        <div className="w-[44px] h-[44px] bg-[#1A1B23] rounded-full flex items-center justify-center group-hover:bg-[#22232e] transition-colors">
                            <PieChart className="w-[20px] h-[20px] text-purple-400" />
                        </div>
                        <span className="text-[12px] text-gray-300">仓位分析</span>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] cursor-pointer group">
                        <div className="w-[44px] h-[44px] bg-[#1A1B23] rounded-full flex items-center justify-center group-hover:bg-[#22232e] transition-colors">
                            <FileText className="w-[20px] h-[20px] text-purple-400" />
                        </div>
                        <span className="text-[12px] text-gray-300">历史记录</span>
                    </div>
                </section>

                {/* 4. Position List 仓位列表 */}
                <section className="mt-[32px]">
                    <h2 className="text-[16px] font-bold mb-[16px]">我的质押仓位</h2>

                    <div className="flex flex-col gap-[12px]">
                        {POSITIONS.map((pos) => (
                            <div key={pos.id} className="bg-[#151620] rounded-xl p-[16px] border border-white/5">
                                {/* 头部：币种信息 */}
                                <div className="flex items-center gap-[12px] mb-[16px]">
                                    <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center ${pos.iconBg}`}>
                                        <Diamond className="w-[16px] h-[16px] text-white" />
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <span className="text-[16px] font-bold">{pos.symbol}</span>
                                        <Badge variant="secondary" className="bg-[#1A1B23] text-purple-300 hover:bg-[#22232e] text-[10px] px-[6px] py-[2px] border-none">
                                            {pos.tag}
                                        </Badge>
                                    </div>
                                </div>

                                {/* 中间：数据网格 */}
                                <div className="flex justify-between items-start">
                                    <div className="w-[30%]">
                                        <div className="text-[11px] text-gray-500">质押数量</div>
                                        <div className="text-[14px] font-bold mt-[4px]">{pos.stakedAmount}</div>
                                        <div className="text-[11px] text-gray-400 mt-[2px]">{pos.stakedValue}</div>
                                    </div>
                                    <div className="w-[22%]">
                                        <div className="text-[11px] text-gray-500">年化收益率</div>
                                        <div className="text-[14px] font-bold text-emerald-400 mt-[4px]">{pos.apy}</div>
                                    </div>
                                    <div className="w-[28%]">
                                        <div className="text-[11px] text-gray-500">累计收益</div>
                                        <div className="text-[14px] font-bold mt-[4px]">{pos.earned}</div>
                                        <div className="text-[11px] text-emerald-400 mt-[2px]">{pos.earnedCrypto}</div>
                                    </div>
                                    <div className="w-[20%] text-right">
                                        <div className="text-[11px] text-gray-500">锁仓期限</div>
                                        <div className="text-[12px] font-medium text-gray-200 mt-[4px]">{pos.lockPeriod}</div>
                                    </div>
                                </div>

                                {/* 底部：操作按钮 */}
                                <div className="flex justify-end gap-[10px] mt-[16px]">
                                    <Button className="bg-transparent hover:bg-white/5 border border-white/10 text-gray-300 rounded-lg h-[32px] px-[20px] text-[13px] font-medium">
                                        赎回
                                    </Button>
                                    <Button className="bg-[#5D3FD3] hover:bg-[#4d32b8] text-white rounded-lg h-[32px] px-[20px] text-[13px] font-medium">
                                        加仓
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Promo Banner */}
                <section className="mt-[24px] mb-[16px] bg-gradient-to-r from-[#2B235A] to-[#1A163B] rounded-xl p-[20px] relative overflow-hidden border border-purple-500/20 flex items-center justify-between">
                    <div className="relative z-10">
                        <h3 className="text-[15px] font-bold text-white">想获得更多收益？</h3>
                        <p className="text-[11px] text-purple-200 mt-[6px]">
                            探索更多优质质押资产，分散风险，提升收益
                        </p>
                        <div className="flex items-center gap-[4px] text-purple-300 text-[12px] font-medium mt-[12px] cursor-pointer">
                            去质押 <ArrowRight className="w-[12px] h-[12px]" />
                        </div>
                    </div>
                    <div className="relative z-10 w-[60px] h-[60px]">
                        {/* 简单的右侧图形占位 */}
                        <Diamond className="w-full h-full text-purple-400 opacity-80" />
                    </div>
                </section>
            </div>
        </>
    );
}
