import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SearchPanel from "@/components/SearchPanel";
import StorePreview from "@/components/StorePreview";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SearchPanel />
        <StorePreview />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
