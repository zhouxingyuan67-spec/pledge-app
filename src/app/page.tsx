import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ShieldCheck,
    TrendingUp,
    Share2,
    Eye,
    ChevronDown,
    Lock,
    Wallet,
    User,
    ArrowRight,
    Diamond
} from "lucide-react";

// --- 模拟数据 ---
const STAKING_ASSETS = [
    {
        id: 'eth',
        symbol: 'ETH',
        tag: '主流资产',
        apy: '4.85%',
        minStake: '0.01 ETH',
        lockPeriod: '灵活 (随时取回)',
        iconBg: 'bg-[#627EEA]',
    },
    {
        id: 'steth',
        symbol: 'stETH',
        tag: '流动性质押',
        apy: '6.32%',
        minStake: '0.01 stETH',
        lockPeriod: '灵活 (随时取回)',
        iconBg: 'bg-[#00A3FF]',
    },
    {
        id: 'usdc',
        symbol: 'USDC',
        tag: '稳定收益',
        apy: '8.75%',
        minStake: '100 USDC',
        lockPeriod: '30 天',
        iconBg: 'bg-[#2775CA]',
    },
    {
        id: 'matic',
        symbol: 'MATIC',
        tag: '高收益',
        apy: '12.50%',
        minStake: '10 MATIC',
        lockPeriod: '90 天',
        iconBg: 'bg-[#8247E5]',
    }
];

export default function StakingPage() {
    return (
        <>
            <div>
                {/* 2. Hero Section 头部宣传区 */}
                <section className="mt-[20px] relative">
                    <h1 className="text-[32px] font-extrabold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">质押</span> 赚取收益
                    </h1>
                    <p className="text-[14px] text-gray-400 mt-[8px]">质押你的代币，获取稳定收益</p>

                    <div className="grid grid-cols-3 gap-[12px] mt-[24px]">
                        <div className="flex flex-col gap-[4px]">
                            <ShieldCheck className="w-[18px] h-[18px] text-purple-400" />
                            <span className="text-[12px] font-medium">安全可靠</span>
                            <span className="text-[10px] text-gray-500">智能合约审计</span>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <TrendingUp className="w-[18px] h-[18px] text-purple-400" />
                            <span className="text-[12px] font-medium">收益可观</span>
                            <span className="text-[10px] text-gray-500">年化收益最高 12.5%</span>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <Share2 className="w-[18px] h-[18px] text-purple-400" />
                            <span className="text-[12px] font-medium">灵活便捷</span>
                            <span className="text-[10px] text-gray-500">随时质押，随时取回</span>
                        </div>
                    </div>
                </section>

                {/* 3. Dashboard Card 我的质押总览 */}
                <section className="mt-[30px] bg-gradient-to-br from-[#1C1E2D] to-[#12131D] rounded-2xl p-[20px] border border-white/5 shadow-xl">
                    <div className="flex items-center gap-[6px] text-gray-300">
                        <span className="text-[14px] font-medium">我的质押总览</span>
                        <Eye className="w-[14px] h-[14px]" />
                    </div>

                    <div className="mt-[12px]">
                        <div className="text-[32px] font-bold font-mono">$ 12,560.78</div>
                        <div className="text-[12px] text-gray-500 mt-[4px]">≈ 4.2516 ETH</div>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 my-[16px]" />

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[12px] text-gray-400">累计收益</div>
                            <div className="text-[16px] font-semibold mt-[4px]">$ 1,250.34</div>
                            <div className="text-[12px] text-emerald-400 mt-[2px]">+12.50%</div>
                        </div>
                        <div>
                            <div className="text-[12px] text-gray-400">待领取收益</div>
                            <div className="text-[16px] font-semibold mt-[4px]">$ 45.68</div>
                            <div className="text-[12px] text-transparent mt-[2px] select-none">-</div> {/* 占位对齐 */}
                        </div>
                        <Button className="bg-[#5D3FD3] hover:bg-[#4d32b8] text-white rounded-xl px-[20px] h-[40px]">
                            领取
                        </Button>
                    </div>
                </section>

                {/* 4. Asset List 选择质押资产 */}
                <section className="mt-[32px]">
                    <h2 className="text-[16px] font-medium mb-[16px]">选择质押资产</h2>

                    <div className="flex flex-col gap-[12px]">
                        {STAKING_ASSETS.map((asset) => (
                            <div key={asset.id} className="bg-[#151620] rounded-xl p-[16px] border border-white/5 flex flex-col gap-[16px]">
                                {/* 资产头部 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[12px]">
                                        <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${asset.iconBg}`}>
                                            <Diamond className="w-[18px] h-[18px] text-white" />
                                        </div>
                                        <div className="flex items-center gap-[8px]">
                                            <span className="text-[16px] font-bold">{asset.symbol}</span>
                                            <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 text-[10px] px-[6px] py-[2px] border-none">
                                                {asset.tag}
                                            </Badge>
                                        </div>
                                    </div>
                                    <Button className="bg-[#3B2C84] hover:bg-[#4A3A9E] text-[#B8A3FF] rounded-lg h-[32px] px-[16px] text-[13px] font-medium">
                                        质押
                                    </Button>
                                </div>

                                {/* 资产数据 */}
                                <div className="grid grid-cols-3 gap-[8px]">
                                    <div>
                                        <div className="text-[11px] text-gray-500">年化收益率</div>
                                        <div className="text-[15px] font-bold text-emerald-400 mt-[2px]">{asset.apy}</div>
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-gray-500">最小质押</div>
                                        <div className="text-[13px] font-medium text-gray-200 mt-[2px]">{asset.minStake}</div>
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-gray-500">锁仓期限</div>
                                        <div className="text-[13px] font-medium text-gray-200 mt-[2px]">{asset.lockPeriod}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Promo Banner 邀请好友 */}
                <section className="mt-[24px] bg-gradient-to-r from-[#2B235A] to-[#1A163B] rounded-xl p-[20px] relative overflow-hidden border border-purple-500/20">
                    <div className="relative z-10 w-[60%]">
                        <h3 className="text-[15px] font-bold text-white">邀请好友，赚取额外奖励</h3>
                        <p className="text-[12px] text-purple-200 mt-[6px] leading-relaxed">
                            邀请好友一起质押，享受最高 20% 返佣
                        </p>
                        <div className="flex items-center gap-[4px] text-purple-300 text-[12px] font-medium mt-[12px]">
                            立即邀请 <ArrowRight className="w-[12px] h-[12px]" />
                        </div>
                    </div>
                    {/* 右侧装饰图形占位 */}
                    <div className="absolute right-[-20px] bottom-[-10px] opacity-80 pointer-events-none">
                        <TrendingUp className="w-[120px] h-[120px] text-purple-500/30" />
                    </div>
                </section>
            </div>

            {/* 6. Bottom Navigation 底部导航 */}
        </>
    );
}
