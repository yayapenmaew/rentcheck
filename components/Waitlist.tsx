import { LINE_OA_URL, SHOP_SIGNUP_FORM_URL } from "@/lib/constants";

export default function Waitlist() {
  return (
    <section id="waitlist" className="bg-bg-deep py-16 sm:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="max-w-[560px] mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.14em] uppercase text-gold mb-[14px]">
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
            Be first in line
          </div>
          <h2 className="font-fraunces mb-[14px]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}>
            Two ways to get involved early
          </h2>
          <p className="text-ink-soft text-[1.02rem]">
            We're gathering shops and building the directory now. Tell us who you are and we'll let you know the moment it's ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
          {/* Customer card */}
          <div className="bg-card rounded-lg p-6 sm:p-9 border border-black/10">
            <h3 className="font-fraunces text-[1.3rem] sm:text-[1.5rem] mb-[10px]">Looking for an outfit?</h3>
            <p className="text-ink-soft text-[0.96rem] mb-6">
              Follow our LINE official account and we'll notify you as soon as you can search real shops on RentCheck.
            </p>
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full font-bold text-[0.95rem] px-6 py-3 no-underline text-white transition-opacity duration-150 hover:opacity-90"
              style={{ background: "#06C755" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.03 2 11c0 3.25 1.82 6.1 4.58 7.83-.2.72-.73 2.62-.84 3.03-.13.5.18.49.38.36.16-.1 2.09-1.38 2.94-1.94.62.09 1.27.14 1.94.14 5.52 0 10-4.03 10-9S17.52 2 12 2z" />
              </svg>
              Add us on LINE
            </a>
          </div>

          {/* Shop owner card */}
          <div id="for-shops" className="bg-card rounded-lg p-6 sm:p-9 border border-black/10">
            <h3 className="font-fraunces text-[1.3rem] sm:text-[1.5rem] mb-[10px]">Own a rental shop?</h3>
            <p className="text-ink-soft text-[0.96rem] mb-6">
              Get listed before we launch, for free — with no commission for early partner shops. We'll reach out to confirm your details.
            </p>
            <a
              href={SHOP_SIGNUP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full font-bold text-[0.95rem] px-6 py-3 no-underline bg-rose hover:bg-rose-deep text-white transition-colors duration-150"
            >
              Submit your shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
