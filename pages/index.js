import HeroSection from "../components/HeroSection" 
import Footer from "../components/Footer"
import IntroText from "../components/IntroText"
import ClientLogo from "../components/ClientLogo";
import ApplyNow from "../components/ApplyNow";
import HireNow from "../components/HireNow";
import LatestAssets from "../components/LatestAssets";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div>  
      <HeroSection />
      <ClientLogo />
      <IntroText />
      <ApplyNow /> 
      <HireNow />
      <LatestAssets />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}
