import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
    </div>
  );
}
