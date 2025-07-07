import Footer from "../ui/Footer";
import HomeBody from "../ui/HomeBody";
import HomeHeader from "../ui/HomeHeader";

export default function Home() {
  return (
    <div className="bg-background/99 relative grid h-[100dvh] grid-rows-[auto_1fr_auto] bg-[url('images/workout-1.jpg')] bg-blend-overlay  inset-0 bg-cover bg-center bg-">
      <HomeHeader />
      <HomeBody />
      <Footer />
    </div>
  );  
}
