import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-black/10">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 flex items-center justify-between py-5 sm:py-7">
        <Link href="/" aria-label="RentCheck home">
          <Image
            src="/logo_transparent.png"
            alt="RentCheck"
            width={130}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8 text-[0.95rem] font-semibold">
          <a
            href="#how-it-works"
            className="no-underline text-ink-soft hover:text-ink transition-colors duration-150 hidden sm:block"
          >
            How it works
          </a>
          <a
            href="#for-shops"
            className="no-underline text-ink-soft hover:text-ink transition-colors duration-150 hidden sm:block"
          >
            For shop owners
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full font-bold text-[0.85rem] sm:text-[0.9rem] px-4 sm:px-[22px] py-[10px] sm:py-[11px] no-underline bg-ink text-bg hover:bg-plum transition-colors duration-150 whitespace-nowrap"
          >
            Join the waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
