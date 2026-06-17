"use client";

import { useState } from "react";
import DressIcon from "./DressIcon";

const OCCASIONS = ["Wedding guest", "Bridesmaid", "Graduation", "Winter jacket", "Halloween"];

const swatches = [
  {
    label: "Wedding guest",
    price: "From ฿800/day",
    tileStyle: { background: "#F4D9DC", color: "#D98A93" },
    posClass: "top-0 left-[6%] -rotate-[7deg] z-[2]",
  },
  {
    label: "Graduation gown",
    price: "From ฿1,200/day",
    tileStyle: { background: "#F1E2C8", color: "#C79A5B" },
    posClass: "top-[6%] right-0 rotate-[5deg] z-[1]",
  },
  {
    label: "Bridesmaid",
    price: "From ฿600/day",
    tileStyle: { background: "#E2EBDF", color: "#8FA88A" },
    posClass: "bottom-[10%] left-0 -rotate-[4deg] z-[1]",
  },
  {
    label: "Winter jacket",
    price: "From ฿1,500/day",
    tileStyle: { background: "#E7DAE3", color: "#5B3A4E" },
    posClass: "bottom-0 right-[8%] rotate-[6deg] z-[2]",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left copy */}
          <div className="flex-[1.05] w-full">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-gold mb-[18px]">
              <span className="w-2 h-2 rounded-full bg-gold inline-block" />
              Coming soon
            </div>
            <h1 className="font-fraunces mb-[22px]" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
              Stop messaging{" "}
              <em className="font-fraunces text-rose" style={{ fontStyle: "italic", fontWeight: 500 }}>
                ten different shops
              </em>{" "}
              for one dress.
            </h1>
            <p className="text-[1.08rem] text-ink-soft max-w-[480px] mb-7">
              RentCheck brings Bangkok's rental fashion shops into a single search — by occasion, size, location, and budget. Find your outfit without scrolling through Instagram.
            </p>
          </div>

          {/* Moodboard — hidden on mobile, visible md+ */}
          <div className="flex-[0.95] w-full hidden md:block">
            <div className="relative h-[420px]" aria-hidden="true">
              {swatches.map((s) => (
                <div
                  key={s.label}
                  className={`absolute w-[178px] rounded-md bg-card shadow-card overflow-hidden transition-transform duration-[250ms] hover:-translate-y-1.5 hover:rotate-0 ${s.posClass}`}
                >
                  <div className="h-[118px] flex items-center justify-center" style={s.tileStyle}>
                    <DressIcon className="w-[54px] h-[54px]" />
                  </div>
                  <div className="px-[14px] pt-3 pb-[14px]">
                    <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-soft mb-1">{s.label}</div>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-[-6px] left-[38%] hidden md:flex items-center gap-[6px] text-[0.95rem] -rotate-[3deg] text-ink-soft font-fraunces italic">
                ✷ try a search below
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
