import Accordion from "./Accordion";
import Banner from "./Banner";
import Features from "./Features";
import HomeAbout from "./HomeAbout";
import HomeIntro from "./HomeIntro";
import Services from "./Services";

export default function HomeBody() {
  // const prev = "overflow-y-scroll   bg-blue-50";
  return (
    <main className="overflow-y-scroll bg-green-50 bg-[radial-gradient(at_80%_20%,rgba(34,197,94,0.1)_0,transparent_50%),radial-gradient(at_20%_80%,rgba(255,127,80,0.1)_0,transparent_50%)]">
      <div className="m-auto mt-[12rem] flex w-[90%] flex-col items-center gap-[6rem]">
        <HomeIntro />
        <Features />
        <Services />
        <Banner />
        <Accordion title={"FAQs"} />
        <HomeAbout /> 
      </div>
    </main>
  );
}
