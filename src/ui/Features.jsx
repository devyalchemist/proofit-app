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
     <div className="mb-[8rem]">
      <h1 className="font-default py-[4rem] text-center text-[2rem] sm:text-[4rem]">
        Features
      </h1>

      {/* Scrollable container on mobile, wraps on desktop */}
      <div className="m-auto flex w-[90%] flex-nowrap gap-4 overflow-x-auto sm:flex-wrap sm:justify-center sm:gap-x-16">
        {tips.map((tip) => (
          <TipCard key={tip}>{tip}</TipCard>
        ))}
      </div>
    </div>
    // <section className="mx-auto mt-10 mb-20 w-[95%] max-w-7xl px-4">
    //   <h1 className="font-default mb-10 text-center text-[2rem] sm:text-[3rem] md:text-[4rem]">
    //     Features
    //   </h1>
    //   <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    //     {tips.map((tip) => (
    //       <TipCard key={tip}>{tip}</TipCard>
    //     ))}
    //   </div>
    // </section>
    // <div className="mb-[8rem]">
    //   <h1 className="font-default py-[4rem] text-center text-[2rem] sm:text-[4rem] ">
    //     Features
    //   </h1>
    //   <div className="m-auto flex w-[90%] flex-wrap gap-4 gap-y-6 sm:gap-x-16">
    //     {tips.map((tip) => (
    //       <TipCard key={tip}>{tip}</TipCard>
    //     ))}
    //   </div>
    // </div>
  );
}
