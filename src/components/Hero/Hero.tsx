import HeroContent from "./HeroContent";
// import FloatingCards from "./FloatingCards";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* <FloatingCards /> */}

      <div className="max-w-7xl mx-auto w-full px-6">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}