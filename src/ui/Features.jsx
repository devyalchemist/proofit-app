import TipCard from "./TipCard";

const tips = [
  "Track workouts",
  "Post progress",
  "Join challenges",
  "Build community",
  "Real interaction",
  "Stay motivated",
  "View stats",
  "Grow consistency",
  "Crush goals",
  "AI coaching",
];
export default function Features() {
  //   const overflowStyle =
  //     "overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none]";
  //   const noScrollBar = {};
  return (
    <div>
      <h1 className="font-default py-[4rem] text-center text-[2rem] text-white sm:text-[4rem]">
        Features
      </h1>
      <div className="relative m-auto flex w-[90%] flex-wrap justify-between gap-x-2 sm:gap-4">
        {tips.map((tip) => (
          <TipCard key={tip}>{tip}</TipCard>
        ))}
        <div className="pointer-events-none sticky top-0 left-0 h-full w-10 bg-gradient-to-r from-white/20 to-transparent"></div>
        {/* Right fade */}
        <div className="pointer-events-none sticky top-0 right-0 h-full w-10 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>
    </div>
  );
}
