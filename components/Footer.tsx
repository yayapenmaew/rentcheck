import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 pt-14 pb-10 bg-bg">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          <div>
            <Image
              src="/logo_transparent.png"
              alt="RentCheck"
              width={140}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <p className="text-ink-soft text-[0.95rem] max-w-[320px] mt-3">
              ค้นหาร้านเช่าแฟชั่นในไทย ครบในที่เดียว สร้างอย่างโปร่งใส — ติดตามได้เลย
            </p>
          </div>
          <div className="flex gap-6 text-[0.92rem] font-semibold flex-wrap">
            <a href="#" target="_blank" rel="noopener noreferrer" className="no-underline text-ink-soft hover:text-ink transition-colors duration-150">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="no-underline text-ink-soft hover:text-ink transition-colors duration-150">TikTok</a>
            <a href="#waitlist" className="no-underline text-ink-soft hover:text-ink transition-colors duration-150">ลงทะเบียนรอ</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ink/10 text-[0.82rem] text-ink-soft flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 RentCheck — เร็วๆ นี้ในกรุงเทพฯ</span>
          <span>เราไม่ใช่ร้านเช่าชุด เราช่วยคุณหาร้าน</span>
        </div>
      </div>
    </footer>
  );
}
