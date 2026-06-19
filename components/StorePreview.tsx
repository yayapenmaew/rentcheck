import DressIcon from "./DressIcon";

const stores = [
  { name: "Thonglor Gown House", location: "ทองหล่อ, กรุงเทพฯ", tags: ["งานแต่งงาน", "S – L"], price: "฿900 – ฿1,800 / วัน", tileStyle: { background: "#FFE3ED", color: "#FF5C8A" } },
  { name: "Sukhumvit Silk & Lace", location: "สุขุมวิท, กรุงเทพฯ", tags: ["รับปริญญา", "XS – M"], price: "฿1,000 – ฿2,200 / วัน", tileStyle: { background: "#E4E8F8", color: "#1B2255" } },
  { name: "Ari Vintage Closet", location: "อารีย์, กรุงเทพฯ", tags: ["เพื่อนเจ้าสาว", "S – XL"], price: "฿500 – ฿1,200 / วัน", tileStyle: { background: "#FFD0E0", color: "#E0467D" } },
  { name: "Silom Formal Rentals", location: "สีลม, กรุงเทพฯ", tags: ["กาล่า", "M – XL"], price: "฿1,500 – ฿3,000 / วัน", tileStyle: { background: "#D2D9F3", color: "#11163C" } },
];

export default function StorePreview() {
  return (
    <section className="bg-bg-deep py-16 sm:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="max-w-[560px] mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-pink mb-[14px]">
            <span className="w-2 h-2 rounded-full bg-pink inline-block" />
            ตัวอย่างผลการค้นหา
          </div>
          <h2 className="font-fraunces mb-[14px]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}>
            หน้าตาผลการค้นหาจะเป็นแบบนี้
          </h2>
          <p className="text-ink-soft text-[1.02rem]">
            เมื่อร้านค้าพร้อมแล้ว ทุกการค้นหาจะแสดงรายการจริง — สไตล์ ไซส์ ทำเล และราคา ไว้ด้วยกัน
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5" style={{ filter: "saturate(0.85)" }}>
            {stores.map((s) => (
              <article key={s.name} className="rounded-md overflow-hidden border border-ink/10 bg-card">
                <div className="h-[100px] sm:h-[128px] flex items-center justify-center" style={s.tileStyle}>
                  <DressIcon className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px]" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-fraunces text-[0.95rem] sm:text-[1.05rem] mb-1">{s.name}</h3>
                  <div className="text-[0.8rem] sm:text-[0.85rem] text-ink-soft mb-2 sm:mb-3">{s.location}</div>
                  <div className="flex flex-wrap gap-[5px] mb-3 sm:mb-[14px]">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.06em] bg-bg-deep rounded-full px-[8px] sm:px-[10px] py-[4px] sm:py-[5px] text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-fraunces font-semibold text-[0.9rem] sm:text-[1rem] mb-3 sm:mb-[14px]">{s.price}</div>
                  <button disabled className="w-full rounded-full px-4 py-[8px] sm:py-[10px] text-[0.85rem] sm:text-[0.9rem] font-bold cursor-default border-none bg-bg-deep text-ink-soft">
                    ดูร้าน
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center text-center p-4 sm:p-6 rounded-lg"
            style={{ backdropFilter: "blur(5px)", background: "rgba(251,238,243,0.6)" }}
          >
            <div className="bg-card rounded-lg shadow-card px-6 sm:px-9 py-6 sm:py-8 max-w-[340px] sm:max-w-[380px]">
              <svg
                className="mx-auto mb-[14px] w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] text-pink"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              <h3 className="font-fraunces text-[1.1rem] sm:text-[1.25rem] mb-[10px]">เรากำลังสร้างรายการร้านค้า</h3>
              <p className="text-ink-soft text-[0.9rem] sm:text-[0.95rem] mb-[18px]">
                เรากำลังรวบรวมร้านค้าทั่วกรุงเทพฯ อยู่ขณะนี้ สมัครรับการแจ้งเตือนแล้วเราจะบอกทันทีที่พร้อม
              </p>
              <a
                href="#waitlist"
                className="inline-flex w-full items-center justify-center rounded-full font-bold px-6 py-3 no-underline bg-pink hover:bg-pink-deep text-white transition-colors duration-150"
              >
                แจ้งเตือนฉันตอนเปิดตัว
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
