import React from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Diamond,
  Eye,
  ExternalLink,
  Filter,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const earnings = [
  {
    symbol: "ETH",
    tag: "主流资产",
    amount: "2.0500 ETH",
    earned: "$ 310.25",
    crypto: "+0.0521 ETH",
    apy: "4.85%",
    color: "from-[#8EA2FF] to-[#7157FF]",
  },
  {
    symbol: "stETH",
    tag: "流动性质押",
    amount: "1.5000 stETH",
    earned: "$ 238.75",
    crypto: "+0.0912 stETH",
    apy: "6.32%",
    color: "from-[#63C7FF] to-[#2796FF]",
  },
  {
    symbol: "USDC",
    tag: "稳定收益",
    amount: "1,000.00 USDC",
    earned: "$ 87.50",
    crypto: "+87.50 USDC",
    apy: "8.75%",
    color: "from-[#54A9FF] to-[#2775CA]",
  },
  {
    symbol: "MATIC",
    tag: "高收益",
    amount: "5,000.00 MATIC",
    earned: "$ 51.04",
    crypto: "+622.50 MATIC",
    apy: "12.50%",
    color: "from-[#9C65FF] to-[#7040E8]",
  },
];

const records = [
  {
    value: "+0.0521 ETH",
    time: "2024-05-23 14:30:21",
    source: "来自 ETH 质押",
    tx: "Tx: 0x7d3a...e9f2",
  },
  {
    value: "+87.50 USDC",
    time: "2024-05-21 09:15:18",
    source: "来自 USDC 质押",
    tx: "Tx: 0x3b1c...a4d7",
  },
  {
    value: "+0.0912 stETH",
    time: "2024-05-18 18:45:33",
    source: "来自 stETH 质押",
    tx: "Tx: 0x9f2b...c1e8",
  },
];

const timeTabs = ["7天", "30天", "90天", "全部"];

function TokenIcon({
  symbol,
  className = "h-[20px] w-[20px]",
}: {
  symbol: string;
  className?: string;
}) {
  if (symbol === "USDC") {
    return <span className={`${className} grid place-items-center rounded-full border-[2px] border-white/85 text-[14px] font-bold`}>$</span>;
  }

  if (symbol === "MATIC") {
    return (
      <span className={`${className} relative block`}>
        <span className="absolute left-[2px] top-[7px] h-[9px] w-[9px] rounded-[3px] border-[2px] border-white/90" />
        <span className="absolute right-[2px] top-[7px] h-[9px] w-[9px] rounded-[3px] border-[2px] border-white/90" />
        <span className="absolute left-[9px] top-[11px] h-[2px] w-[7px] bg-white/90" />
      </span>
    );
  }

  return <Diamond className={`${className} text-white`} />;
}

function HeroChartArt() {
  return (
    <div className="relative h-[96px] w-[150px] overflow-visible">
      <div className="absolute bottom-[5px] right-[22px] flex items-end gap-[5px]">
        {[28, 40, 53, 68].map((height) => (
          <div
            key={height}
            className="w-[17px] rounded-t-[4px] border border-[#A789FF]/35 bg-gradient-to-t from-[#4C28B8] via-[#7B51FF] to-[#BCA3FF] shadow-[0_10px_26px_rgba(124,76,255,0.45)]"
            style={{ height }}
          >
            <div className="h-full w-[42%] rounded-tl-[4px] bg-white/15" />
          </div>
        ))}
      </div>
      <svg className="absolute right-[2px] top-[3px]" width="112" height="63" viewBox="0 0 132 74" fill="none">
        <path d="M7 61L35 44L54 47L79 22L101 25L124 5" stroke="#8A63FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M109 5L124 5L122 20" stroke="#BBA7FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute left-[4px] top-[31px] grid h-[40px] w-[40px] rotate-[-22deg] place-items-center rounded-full bg-gradient-to-br from-[#BBA2FF] to-[#6842FF] shadow-[0_0_24px_rgba(133,91,255,0.6)]">
        <Diamond className="h-[18px] w-[18px] text-white" />
      </div>
      <div className="absolute right-[-2px] bottom-[18px] grid h-[32px] w-[32px] rotate-[20deg] place-items-center rounded-full bg-gradient-to-br from-[#BBA2FF] to-[#6842FF] shadow-[0_0_20px_rgba(133,91,255,0.55)]">
        <Diamond className="h-[14px] w-[14px] text-white" />
      </div>
      <Sparkles className="absolute right-[31px] top-[23px] h-[10px] w-[10px] text-[#DCD1FF]" />
      <Sparkles className="absolute right-[5px] top-[33px] h-[8px] w-[8px] text-[#DCD1FF]" />
    </div>
  );
}

function TrendChart() {
  return (
    <div className="relative mt-[14px] h-[134px] overflow-hidden">
      <div className="absolute inset-x-0 bottom-[28px] top-[4px] flex flex-col justify-between">
        {[0, 1, 2, 3, 4].map((line) => (
          <div key={line} className="border-t border-dashed border-white/7" />
        ))}
      </div>
      <div className="absolute left-0 top-[-1px] flex h-[113px] flex-col justify-between text-[10px] text-[#9BA4BF]">
        <span>1.5K</span>
        <span>1.2K</span>
        <span>900</span>
        <span>600</span>
        <span>300</span>
        <span>0</span>
      </div>
      <svg className="absolute left-[30px] right-0 top-[7px] h-[98px] w-[calc(100%-30px)]" viewBox="0 0 292 118" preserveAspectRatio="none">
        <defs>
          <linearGradient id="earningsArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7D4CFF" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#5B35E6" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          d="M0 96 C11 100 14 72 27 74 C39 76 38 55 52 58 C65 62 67 42 83 45 C98 48 101 42 116 38 C132 34 138 29 156 34 C174 39 178 15 195 19 C211 23 216 22 232 14 C247 7 252 13 269 4 C281 -3 286 0 292 4 L292 118 L0 118 Z"
          fill="url(#earningsArea)"
        />
        <path
          d="M0 96 C11 100 14 72 27 74 C39 76 38 55 52 58 C65 62 67 42 83 45 C98 48 101 42 116 38 C132 34 138 29 156 34 C174 39 178 15 195 19 C211 23 216 22 232 14 C247 7 252 13 269 4 C281 -3 286 0 292 4"
          fill="none"
          stroke="#8658FF"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line x1="166" x2="166" y1="27" y2="118" stroke="#6B728F" strokeOpacity="0.55" />
        <circle cx="166" cy="38" r="5" fill="#201A59" stroke="#8A63FF" strokeWidth="3" />
      </svg>
      <div className="absolute right-[8px] top-0 rounded-[8px] bg-[#242B46]/95 px-[9px] py-[6px] shadow-xl">
        <div className="text-[10px] text-[#BDC5DB]">2024-05-09</div>
        <div className="mt-[3px] text-[12px] font-semibold text-white">$ 1,086.72</div>
      </div>
      <div className="absolute bottom-0 left-[39px] right-[4px] flex justify-between text-[10px] text-[#9BA4BF]">
        <span>04-18</span>
        <span>04-25</span>
        <span>05-02</span>
        <span>05-09</span>
        <span>05-16</span>
        <span>05-23</span>
      </div>
    </div>
  );
}

export default function EarningsPage() {
  return (
    <>
        <section className="relative mt-[20px] min-h-[122px] overflow-hidden">
          <div className="relative z-10 max-w-[180px] pt-[22px]">
            <h1 className="text-[32px] font-black leading-none tracking-normal">收益</h1>
            <p className="mt-[10px] text-[14px] font-medium leading-[20px] text-[#C7CBD8]">查看收益详情，追踪您的增长</p>
          </div>
          <div className="absolute right-[-4px] top-[-2px]">
            <HeroChartArt />
          </div>
        </section>

        <section className="mt-[10px] rounded-2xl border border-white/5 bg-gradient-to-br from-[#1C1E2D] to-[#12131D] px-[13px] py-[13px] shadow-xl">
          <div>
            <div className="flex items-center gap-[6px] text-[12px] font-semibold text-[#DCE2F6]">
              总收益 (USD)
              <Eye className="h-[13px] w-[13px]" />
            </div>
            <div className="mt-[8px] text-[28px] font-black leading-none tracking-normal">$ 1,250.34</div>
            <div className="mt-[7px] text-[13px] text-[#9BA4BF]">≈ 0.3987 ETH</div>
          </div>

          <div className="mt-[13px] grid grid-cols-3 gap-[8px] border-t border-white/10 pt-[12px]">
            {[
              ["今日收益", "$ 12.34", "+2.15%"],
              ["7日收益", "$ 86.72", "+6.91%"],
              ["30日收益", "$ 312.45", "+12.45%"],
            ].map(([label, value, change]) => (
              <div key={label} className="min-w-0">
                <div className="text-[11px] font-medium leading-[15px] text-[#AEB6CE]">{label}</div>
                <div className="mt-[6px] break-words text-[14px] font-bold leading-[18px]">{value}</div>
                <div className="mt-[4px] text-[12px] font-semibold text-[#42F0A1]">{change}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[24px]">
          <div className="flex flex-wrap items-center justify-between gap-[10px]">
            <h2 className="text-[20px] font-extrabold tracking-normal">收益趋势</h2>
            <div className="flex h-[32px] items-center rounded-[9px] border border-white/5 bg-[#1A1B23] p-[2px]">
              {timeTabs.map((tab) => (
                <button
                  key={tab}
                  className={`h-[26px] min-w-[40px] rounded-[7px] px-[7px] text-[12px] font-medium ${
                    tab === "30天" ? "bg-[#3B2C84] text-[#B8A3FF]" : "text-[#D5DBEA]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[11px] rounded-xl border border-white/5 bg-[#151620] px-[13px] pb-[12px] pt-[14px] shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-[10px]">
              <div className="min-w-0">
                <div className="text-[12px] font-semibold text-[#C3CAE0]">总收益 (USD)</div>
                <div className="mt-[7px] flex flex-wrap items-baseline gap-x-[10px] gap-y-[5px]">
                  <span className="text-[21px] font-extrabold leading-none">$ 1,250.34</span>
                  <span className="text-[13px] font-bold text-[#41F1A0]">+12.45%</span>
                </div>
              </div>
              <button className="flex h-[30px] shrink-0 items-center gap-[5px] rounded-[9px] border border-white/5 bg-[#1A1B23] px-[10px] text-[12px] font-semibold text-[#E7ECFA]">
                USD
                <ChevronDown className="h-[14px] w-[14px] text-[#9AA4C3]" />
              </button>
            </div>
            <TrendChart />
          </div>
        </section>

        <section className="mt-[22px]">
          <div className="flex flex-wrap items-center justify-between gap-[10px]">
            <h2 className="text-[20px] font-extrabold tracking-normal">收益明细</h2>
            <div className="flex items-center gap-[6px]">
              <button className="flex h-[31px] items-center gap-[5px] rounded-[9px] border border-white/5 bg-[#1A1B23] px-[10px] text-[12px] font-medium">
                全部资产
                <ChevronDown className="h-[14px] w-[14px]" />
              </button>
              <button className="grid h-[31px] w-[31px] place-items-center rounded-[9px] border border-white/5 bg-[#1A1B23]">
                <Filter className="h-[14px] w-[14px] text-[#B6BED5]" />
              </button>
            </div>
          </div>

          <div className="mt-[9px] rounded-xl border border-white/5 bg-[#151620] px-[9px]">
            {earnings.map((item, index) => (
              <div key={item.symbol} className={`relative px-[7px] py-[11px] pr-[18px] ${index !== earnings.length - 1 ? "border-b border-white/5" : ""}`}>
                <div className="flex min-w-0 items-center gap-[9px]">
                  <div className={`grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.color}`}>
                    <TokenIcon symbol={item.symbol} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-[5px]">
                      <span className="shrink-0 text-[17px] font-extrabold leading-none">{item.symbol}</span>
                      <Badge className="h-[16px] max-w-[82px] shrink overflow-hidden text-ellipsis whitespace-nowrap rounded-[4px] border-none bg-purple-500/10 px-[5px] text-[9px] font-semibold leading-[16px] text-purple-300 hover:bg-purple-500/20">
                        {item.tag}
                      </Badge>
                    </div>
                    <div className="mt-[5px] text-[11px] text-[#8E97B2]">质押数量</div>
                    <div className="mt-[2px] overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-medium leading-[18px]">{item.amount}</div>
                  </div>
                </div>

                <div className="mt-[11px] grid grid-cols-[1fr_82px] gap-[10px]">
                  <div className="min-w-0">
                    <div className="text-[11px] leading-[15px] text-[#8E97B2]">累计收益 (USD)</div>
                    <div className="mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-medium">{item.earned}</div>
                    <div className="mt-[2px] overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium leading-[16px] text-[#41F1A0]">{item.crypto}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] leading-[15px] text-[#8E97B2]">年化收益率</div>
                    <div className="mt-[7px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-medium text-[#41F1A0]">{item.apy}</div>
                  </div>
                </div>
                <ChevronRight className="absolute right-0 top-[50%] h-[17px] w-[17px] translate-y-[-50%] text-[#9AA4C3]" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[14px] rounded-xl border border-white/5 bg-[#151620] px-[9px] pb-[10px] pt-[13px]">
          <div className="flex flex-wrap items-center justify-between gap-[8px] px-[7px]">
            <h2 className="text-[18px] font-extrabold">收益领取记录</h2>
            <button className="flex items-center gap-[4px] text-[12px] font-semibold text-[#A76BFF]">
              查看全部
              <ArrowRight className="h-[13px] w-[13px]" />
            </button>
          </div>

          <div className="mt-[10px]">
            {records.map((record, index) => (
              <div key={record.time} className={`px-[7px] py-[11px] ${index !== records.length - 1 ? "border-b border-white/7" : ""}`}>
                <div className="flex items-start gap-[9px]">
                  <div className="grid h-[32px] w-[32px] shrink-0 place-items-center rounded-full bg-[#1A1B23]">
                    <ArrowDownToLine className="h-[16px] w-[16px] text-[#A889FF]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-[10px] gap-y-[3px]">
                      <div>
                        <div className="text-[12px] text-[#D6DCEF]">领取收益</div>
                        <div className="mt-[2px] text-[13px] font-medium leading-[18px]">{record.value}</div>
                      </div>
                      <div className="text-left text-[11px] leading-[16px] text-[#8E97B2]">{record.time}</div>
                    </div>
                    <div className="mt-[6px] flex flex-wrap items-center gap-x-[7px] gap-y-[3px] text-[11px] leading-[16px] text-[#8E97B2]">
                      <span>{record.source}</span>
                      <span className="inline-flex items-center gap-[4px] break-all">
                        {record.tx}
                        <ExternalLink className="h-[11px] w-[11px] shrink-0" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  );
}
