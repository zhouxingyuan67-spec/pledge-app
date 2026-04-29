import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ShieldCheck,
    TrendingUp,
    Share2,
    Wallet,
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

                {/* 3. Dashboard Card 未连接钱包状态 */}
                <section className="relative mt-[30px] min-h-[158px] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1C1E2D] to-[#12131D] p-[18px] shadow-xl">
                    <div className="relative z-10 max-w-[205px]">
                        <h2 className="text-[17px] font-extrabold leading-[23px]">连接钱包，开启质押之旅</h2>
                        <p className="mt-[8px] text-[12px] leading-[18px] text-purple-200/85">
                            连接钱包后，您可以查看资产、选择质押资产并开始赚取收益
                        </p>

                        <div className="mt-[14px] grid gap-[7px] text-[11px] leading-[16px] text-[#B9A7FF]">
                            {["查看实时收益和资产情况", "选择多种主流资产进行质押", "灵活管理质押资产，随时取回"].map((item) => (
                                <div key={item} className="flex items-center gap-[6px]">
                                    <span className="grid h-[14px] w-[14px] shrink-0 place-items-center rounded-full border border-purple-400/70 text-[10px] text-purple-300">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute right-[-12px] top-[10px] h-[134px] w-[142px]">
                        <div className="absolute inset-[12px] rounded-full bg-purple-500/15 blur-2xl" />
                        <div className="absolute right-[20px] top-[52px] h-[58px] w-[90px] rounded-[18px] border border-purple-300/25 bg-gradient-to-br from-[#7E4DFF] to-[#3B2478] shadow-[0_18px_40px_rgba(126,77,255,0.35)]">
                            <div className="absolute right-[-8px] top-[24px] h-[20px] w-[25px] rounded-full border border-purple-200/35 bg-[#6E45E8]" />
                            <div className="absolute left-[12px] top-[13px] h-[6px] w-[45px] rounded-full bg-white/12" />
                        </div>
                        <div className="absolute right-[58px] top-[2px] grid h-[42px] w-[42px] place-items-center rounded-full border border-purple-100/30 bg-gradient-to-br from-[#BDA7FF] to-[#6E45E8] shadow-[0_0_24px_rgba(157,112,255,0.5)]">
                            <Diamond className="h-[20px] w-[20px] text-white" />
                        </div>
                        <div className="absolute right-[18px] top-[18px] grid h-[31px] w-[31px] place-items-center rounded-full border border-purple-100/25 bg-gradient-to-br from-[#A487FF] to-[#6E45E8] text-[13px] font-black text-white">
                            B
                        </div>
                        <div className="absolute right-[8px] bottom-[6px] grid h-[28px] w-[28px] place-items-center rounded-full border border-purple-100/25 bg-gradient-to-br from-[#A487FF] to-[#6E45E8] text-[12px] font-black text-white">
                            M
                        </div>
                        <div className="absolute right-[0px] top-[36px] h-[72px] w-[125px] rounded-[50%] border border-purple-300/45" />
                        <span className="absolute left-[9px] top-[32px] h-[5px] w-[5px] rounded-full bg-purple-200" />
                        <span className="absolute right-[33px] top-[0px] h-[5px] w-[5px] rounded-full bg-purple-200" />
                        <span className="absolute left-[28px] bottom-[24px] h-[4px] w-[4px] rounded-full bg-purple-300" />
                        <Wallet className="absolute right-[50px] top-[72px] h-[18px] w-[18px] text-purple-100/70" />
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
        </>
    );
}
