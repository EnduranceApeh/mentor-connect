import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Review from "./Review";
import CallToAction from "./CallToAction";

function Home() {
  return(
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Review />
      <CallToAction />
    </>
  )
}

export default Home