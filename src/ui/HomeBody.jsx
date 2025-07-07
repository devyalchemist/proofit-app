import Features from "./Features";
import HomeAbout from "./HomeAbout";
import HomeIntro from "./HomeIntro";

export default function HomeBody() {
  return (
    <main className="overflow-y-scroll">
      <div className="m-auto mt-[12rem] flex flex-col items-center gap-[4rem]   ">
        <HomeIntro />
        <Features />
        <HomeAbout />
      </div>
    </main>
  );
}
