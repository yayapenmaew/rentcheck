"use client";

import { useState } from "react";

const fields = [
  {
    id: "occasion",
    label: "ไปงานอะไร?",
    options: ["งานแต่งงาน", "เพื่อนเจ้าสาว", "รับปริญญา", "แจ็คเก็ตฤดูหนาว", "หมั้น", "ทุกโอกาส"],
  },
  {
    id: "location",
    label: "สะดวกแถวไหน?",
    options: ["สุขุมวิท", "ทองหล่อ", "อารีย์", "สีลม", "ทุกทำเล"],
  },
];

export default function SearchPanel() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
      <div className="rounded-lg border border-ink/10 bg-card shadow-card p-4 sm:p-[22px] mt-10 sm:mt-14 relative z-[5]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowMessage(true);
          }}
          className="flex flex-col sm:flex-row sm:items-stretch gap-0"
        >
          {fields.map((field, i) => (
            <div
              key={field.id}
              className={`flex flex-col gap-1 px-4 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-ink/10 ${i === 0 ? "sm:pl-[10px]" : ""}`}
            >
              <label htmlFor={field.id} className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
                {field.label}
              </label>
              <select
                id={field.id}
                className="border-none bg-transparent text-[0.95rem] font-semibold text-ink cursor-pointer py-[2px] focus:outline-none font-jakarta"
              >
                {field.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <div className="flex items-center p-2 pt-3 sm:pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-[1rem] bg-ink text-bg hover:bg-plum transition-colors duration-150 border-none cursor-pointer whitespace-nowrap"
            >
              ลองค้นหาร้าน
            </button>
          </div>
        </form>

        {showMessage && (
          <div className="mt-4 px-4 py-[14px] rounded-md bg-bg-deep text-[0.92rem] text-ink">
            <strong className="text-pink-deep">เรายังตามหาร้านสำหรับการค้นหานี้อยู่ 💛</strong>{" "}
            ลงทะเบียนรอด้านล่าง แล้วเราจะแจ้งเตือนคุณทาง LINE ทันทีที่พร้อม
          </div>
        )}
      </div>
    </div>
  );
}
