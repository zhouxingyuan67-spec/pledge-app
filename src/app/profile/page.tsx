import React from "react";
import {
  Bell,
  ChevronRight,
  Copy,
  Diamond,
  Eye,
  Gift,
  HelpCircle,
  Pencil,
  Settings,
  ShieldCheck,
  UserRoundPlus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const assets = [
  {
    symbol: "ETH",
    amount: "2.0500 ETH",
    value: "$ 6,120.45",
    apy: "+4.85%",
    color: "from-[#8EA2FF] to-[#7157FF]",
  },
  {
    symbol: "stETH",
    amount: "1.5000 stETH",
    value: "$ 3,780.30",
    apy: "+6.32%",
    color: "from-[#63C7FF] to-[#2796FF]",
  },
  {
    symbol: "USDC",
    amount: "1,000.00 USDC",
    value: "$ 1,000.00",
    apy: "+8.75%",
    color: "from-[#54A9FF] to-[#2775CA]",
  }
];

const menuItems = [
  {
    title: "安全中心",
    desc: "保障账户与资产安全",
    icon: ShieldCheck,
  },
  {
    title: "奖励中心",
    desc: "完成任务，领取更多奖励",
    icon: Gift,
  },
  {
    title: "我的邀请",
    desc: "查看邀请记录与返佣",
    icon: UserRoundPlus,
  },
  {
    title: "消息中心",
    desc: "系统消息与活动通知",
    icon: Bell,
    badge: "3",
  },
  {
    title: "帮助中心",
    desc: "常见问题与使用指南",
    icon: HelpCircle,
  },
  {
    title: "设置",
    desc: "偏好设置与更多选项",
    icon: Settings,
  },
];

function TokenIcon({ symbol }: { symbol: string }) {
  if (symbol === "USDC") {
    return <span className="grid h-[28px] w-[28px] place-items-center rounded-full border-[2px] border-white/85 text-[17px] font-bold">$</span>;
  }

  if (symbol === "MATIC") {
    return (
      <span className="relative block h-[28px] w-[28px]">
        <span className="absolute left-[2px] top-[8px] h-[10px] w-[10px] rounded-[3px] border-[2px] border-white/90" />
        <span className="absolute right-[2px] top-[8px] h-[10px] w-[10px] rounded-[3px] border-[2px] border-white/90" />
        <span className="absolute left-[10px] top-[13px] h-[2px] w-[8px] bg-white/90" />
      </span>
    );
  }

  return <Diamond className="h-[27px] w-[27px] text-white" />;
}

function Avatar() {
  return (
    <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#B958E8] to-[#D476E8]">
      <div className="absolute left-[17px] top-[15px] h-[51px] w-[42px] bg-[#FFE792]" />
      <div className="absolute left-[12px] top-[19px] h-[28px] w-[27px] bg-[#63E6BE]" />
      <div className="absolute left-[21px] top-[13px] h-[8px] w-[33px] bg-[#C9FFE0]" />
      <div className="absolute left-[36px] top-[39px] h-[7px] w-[7px] bg-[#A52BC8]" />
      <div className="absolute left-[50px] top-[40px] h-[6px] w-[6px] bg-[#E4478A]" />
      <div className="absolute left-[45px] top-[53px] h-[5px] w-[16px] bg-[#E4478A]" />
      <div className="absolute left-[18px] bottom-[-11px] h-[27px] w-[45px] bg-[#063E35]" />
      <div className="absolute bottom-[2px] right-[1px] grid h-[28px] w-[28px] place-items-center rounded-full bg-gradient-to-br from-[#8F6BFF] to-[#673DE4] shadow-lg">
        <Pencil className="h-[12px] w-[12px] text-white" />
      </div>
    </div>
  );
}

function InviteCoin() {
  return (
    <div className="relative h-[54px] w-[54px] shrink-0">
      <div className="absolute inset-[8px] rounded-full bg-[#6F4DFF] blur-[14px]" />
      <div className="absolute left-[7px] top-[6px] grid h-[41px] w-[41px] rotate-[-18deg] place-items-center rounded-full bg-gradient-to-br from-[#C7B3FF] to-[#6640F0] shadow-[0_0_24px_rgba(137,86,255,0.58)]">
        <Diamond className="h-[21px] w-[21px] text-white" />
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <>
        <section className="mt-[22px] flex items-center gap-[12px]">
          <Avatar />

          <div className="min-w-0 flex-1 pt-[2px]">
            <div className="flex items-center gap-[8px]">
              <h1 className="truncate text-[24px] font-black leading-none tracking-normal">0x8a...3f2e</h1>
              <Copy className="h-[16px] w-[16px] shrink-0 text-[#9EA6C5]" />
            </div>

            <div className="mt-[12px] flex items-center gap-[8px]">
              <Badge className="h-[20px] rounded-[6px] border-none bg-purple-500/10 px-[8px] text-[12px] font-bold text-purple-300 hover:bg-purple-500/20">
                Lv.3
              </Badge>
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#1A1B23]">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#7648FF] to-[#B154FF]" />
              </div>
              <span className="whitespace-nowrap text-[12px] text-[#AEB6CF]">1250 / 2000 XP</span>
            </div>

            <div className="mt-[9px] flex items-center gap-[7px]">
              <span className="text-[13px] font-semibold">资深质押者</span>
              <Badge className="h-[22px] rounded-[7px] border-none bg-[#1A1B23] px-[8px] text-[12px] font-semibold text-white hover:bg-[#22232e]">
                享受 15% 返佣加成
              </Badge>
            </div>
          </div>
          <ChevronRight className="h-[22px] w-[22px] shrink-0 text-[#9EA6C5]" />
        </section>

        <section className="mt-[22px] rounded-2xl border border-white/5 bg-gradient-to-br from-[#1C1E2D] to-[#12131D] px-[15px] py-[16px] shadow-xl">
          <div className="flex items-center gap-[9px]">
            <h2 className="text-[19px] font-extrabold leading-none">资产概览</h2>
            <Eye className="h-[16px] w-[16px] text-[#DDE4F7]" />
          </div>

          <div className="mt-[20px]">
            <div>
              <div className="text-[12px] font-medium text-[#AAB3CC]">总资产 (USD)</div>
              <div className="mt-[9px] whitespace-nowrap text-[30px] font-black leading-none">$ 12,560.78</div>
              <div className="mt-[8px] text-[14px] text-[#9CA6C0]">≈ 4.2516 ETH</div>
            </div>

            <div className="mt-[15px] grid grid-cols-[1fr_auto] items-end gap-[12px] border-t border-white/5 pt-[14px]">
              <div className="grid grid-cols-2 gap-[14px]">
                <div className="min-w-0 border-r border-white/5 pr-[12px]">
                  <div className="text-[12px] font-medium text-[#AAB3CC]">总收益 (USD)</div>
                  <div className="mt-[8px] whitespace-nowrap text-[19px] font-bold">$ 1,250.34</div>
                  <div className="mt-[6px] text-[13px] font-semibold text-[#42F0A1]">+12.50%</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-medium text-[#AAB3CC]">可领取收益 (USD)</div>
                  <div className="mt-[8px] whitespace-nowrap text-[19px] font-bold">$ 45.68</div>
                  <div className="mt-[6px] select-none text-[13px] text-transparent">-</div>
                </div>
              </div>
              <button className="h-[36px] shrink-0 rounded-[9px] bg-gradient-to-br from-[#8A58FF] to-[#653CE6] px-[17px] text-[14px] font-bold shadow-[0_10px_24px_rgba(115,74,239,0.35)]">
                去领取
              </button>
            </div>
          </div>
        </section>

        <section className="mt-[15px] rounded-xl border border-purple-500/20 bg-gradient-to-r from-[#2B235A] to-[#1A163B] px-[13px] py-[13px] shadow-xl">
          <div className="flex items-center gap-[10px]">
            <InviteCoin />
            <div className="min-w-0 flex-1">
              <div className="text-[16px] font-extrabold leading-[22px]">邀请好友，赚取更多收益</div>
              <div className="mt-[5px] text-[12px] font-medium leading-[18px] text-[#AEB7D1]">您将获得最高 20% 返佣奖励</div>
            </div>
            <button className="h-[34px] shrink-0 rounded-[9px] bg-gradient-to-br from-[#8A58FF] to-[#653CE6] px-[13px] text-[13px] font-bold">
              邀请好友
            </button>
          </div>

          <div className="mt-[11px] flex items-center justify-between rounded-[9px] border border-white/5 bg-[#151620]/60 px-[11px] py-[9px]">
            <div className="min-w-0">
              <div className="text-[11px] text-[#AEB7D1]">我的邀请码</div>
              <div className="mt-[4px] flex items-center gap-[7px] text-[14px] font-medium">
                STAKELY2024
                <Copy className="h-[14px] w-[14px] shrink-0 text-[#A889FF]" />
              </div>
            </div>
            <div className="ml-[10px] h-[28px] w-px bg-white/10" />
            <div className="ml-[10px] whitespace-nowrap text-[11px] font-semibold text-[#A889FF]">返佣加成 15%</div>
          </div>
        </section>

        <section className="mt-[15px] rounded-xl border border-white/5 bg-[#151620] px-[13px] py-[16px] shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-extrabold">我的质押</h2>
            <button className="flex items-center gap-[4px] text-[13px] font-semibold text-[#A76BFF]">
              查看全部
              <ChevronRight className="h-[15px] w-[15px]" />
            </button>
          </div>

          <div className="mt-[18px] grid grid-cols-3">
            {assets.map((asset, index) => (
              <div
                key={asset.symbol}
                className={`flex min-w-0 flex-col items-center px-[7px] text-center ${
                  index !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <div className={`grid h-[40px] w-[40px] place-items-center rounded-full bg-gradient-to-br ${asset.color}`}>
                  <TokenIcon symbol={asset.symbol} />
                </div>
                <div className="mt-[11px] text-[16px] font-extrabold leading-none">{asset.symbol}</div>
                <div className="mt-[14px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-semibold leading-[16px]">
                  {asset.amount}
                </div>
                <div className="mt-[7px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-[#9CA6C0]">
                  {asset.value}
                </div>
                <div className="mt-[9px] text-[13px] font-bold text-[#42F0A1]">{asset.apy}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[15px] rounded-xl border border-white/5 bg-[#151620] px-[12px] py-[8px] shadow-xl">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className={`flex items-center gap-[12px] px-[2px] py-[13px] ${index !== menuItems.length - 1 ? "border-b border-white/7" : ""}`}>
                <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full border border-white/5 bg-[#1A1B23]">
                  <Icon className="h-[19px] w-[19px] text-[#965EFF]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[16px] font-extrabold leading-none">{item.title}</div>
                  <div className="mt-[8px] text-[13px] font-medium text-[#8F99B4]">{item.desc}</div>
                </div>
                {item.badge ? (
                  <span className="mr-[10px] grid h-[21px] w-[21px] place-items-center rounded-full bg-[#F12E7B] text-[12px] font-bold">
                    {item.badge}
                  </span>
                ) : null}
                <ChevronRight className="h-[18px] w-[18px] shrink-0 text-[#9EA6C5]" />
              </div>
            );
          })}
        </section>
    </>
  );
}
