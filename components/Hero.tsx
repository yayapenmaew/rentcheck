"use client";

import { useState } from "react";
import DressIcon from "./DressIcon";

const OCCASIONS = ["งานแต่งงาน", "เพื่อนเจ้าสาว", "รับปริญญา", "แจ็คเก็ตฤดูหนาว", "ฮาโลวีน"];

const swatches = [
  {
    label: "งานแต่งงาน",
    tileStyle: { background: "#FFE3ED", color: "#FF5C8A" },
    posClass: "top-0 left-[6%] -rotate-[7deg] z-[2]",
  },
  {
    label: "รับปริญญา",
    tileStyle: { background: "#E4E8F8", color: "#1B2255" },
    posClass: "top-[6%] right-0 rotate-[5deg] z-[1]",
  },
  {
    label: "เพื่อนเจ้าสาว",
    tileStyle: { background: "#FFD0E0", color: "#E0467D" },
    posClass: "bottom-[10%] left-0 -rotate-[4deg] z-[1]",
  },
  {
    label: "กาล่า",
    tileStyle: { background: "#D2D9F3", color: "#11163C" },
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
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-pink mb-[18px]">
              <span className="w-2 h-2 rounded-full bg-pink inline-block" />
              เร็วๆ นี้ในกรุงเทพฯ
            </div>
            <h1 className="font-fraunces mb-[22px]" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
              หยุดทักร้าน{" "}
              <em className="font-fraunces text-pink" style={{ fontStyle: "italic", fontWeight: 500 }}>
                ทีละสิบร้าน
              </em>{" "}
              เพื่อหาชุดเช่าสักตัว
            </h1>
            <p className="text-[1.08rem] text-ink-soft max-w-[480px] mb-7">
              RentCheck รวมร้านเช่าชุดแฟชั่นในกรุงเทพฯ ไว้ในที่เดียว ค้นหาตามโอกาส ไซส์ และทำเล โดยไม่ต้องเสียเวลาไถ Instagram
            </p>
          </div>

          {/* Moodboard — hidden on mobile */}
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
                ✷ ลองค้นหาด้านล่าง
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
