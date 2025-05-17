import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import Attractions from "./components/Attractions/Attractions";
import WhyTrustUs from "./components/WhyTrustUs/WhyTrustUs";
import Pricing from "./components/Pricing/Pricing";
import PricingPackages from "./components/PricingPackages/PricingPackages";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TopContent from "./components/TopContent/TopContent";

export default function Home() {
  return (
    <div>
      <TopContent />
      <AboutUsSection />
      <Attractions />
      <WhyTrustUs />
      <Pricing />
      <PricingPackages />
      <OpeningHours />
      <Contact />
      <Footer />
    </div >
  );
}
