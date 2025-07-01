import Footer from "../ui/Footer";
import HomeBody from "../ui/HomeBody";
import HomeHeader from "../ui/HomeHeader";

export default function Home() {
  return (
    <div className="bg-background relative grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      <HomeHeader  />
      <HomeBody />
      <Footer />
    </div>
  );
}
