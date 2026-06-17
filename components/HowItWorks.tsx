const steps = [
  {
    num: "01",
    title: "Search by occasion",
    body: "Filter by what you're dressing for, your size, where you can pick up, and what you want to spend — see every shop that fits.",
  },
  {
    num: "02",
    title: "Compare shops side by side",
    body: "No more opening tabs across a dozen of irrelevant Instagram profiles.",
  },
  {
    num: "03",
    title: "Message the shop directly",
    body: "Once you've found the right fit, contact the shop yourself to confirm availability and book. No extra fees, no middleman.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="max-w-[560px] mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-gold mb-[14px]">
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
            How it will work
          </div>
          <h2 className="font-fraunces mb-[14px]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}>
            Three steps, less hussles.
          </h2>
          <p className="text-ink-soft text-[1.02rem]">
            RentCheck doesn't hold your booking — it gets you to the right shop faster, then gets out of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="font-fraunces italic font-semibold text-[1.1rem] text-gold mb-[14px]">{s.num}</div>
              <h3 className="font-fraunces text-[1.2rem] mb-[10px]">{s.title}</h3>
              <p className="text-ink-soft text-[0.96rem]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
