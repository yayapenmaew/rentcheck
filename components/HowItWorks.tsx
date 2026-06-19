const steps = [
  {
    num: "01",
    title: "ค้นหาตามโอกาส",
    body: "กรองตามงานที่จะไป และโลเคชั่น — เห็นทุกร้านที่ตรงกับความต้องการของคุณ",
  },
  {
    num: "02",
    title: "เปรียบเทียบร้านแบบเคียงกัน",
    body: "ไม่ต้องเปิดสิบร้านจาก Instagram อีกต่อไป",
  },
  {
    num: "03",
    title: "ทักร้านโดยตรง",
    body: "เมื่อเจอชุดที่ใช่ ติดต่อร้านเองเพื่อยืนยันและจอง ไม่มีค่าธรรมเนียมเพิ่ม ไม่มีตัวกลาง",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="max-w-[560px] mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-pink mb-[14px]">
            <span className="w-2 h-2 rounded-full bg-pink inline-block" />
            วิธีการทำงาน
          </div>
          <h2 className="font-fraunces mb-[14px]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}>
            3 ขั้นตอน ง่ายกว่าเดิม
          </h2>
          <p className="text-ink-soft text-[1.02rem]">
            RentCheck ไม่ได้จัดการการจอง — แค่พาคุณไปถึงร้านที่ใช่ได้เร็วขึ้น
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="font-fraunces italic font-semibold text-[1.1rem] text-pink mb-[14px]">{s.num}</div>
              <h3 className="font-fraunces text-[1.2rem] mb-[10px]">{s.title}</h3>
              <p className="text-ink-soft text-[0.96rem]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
