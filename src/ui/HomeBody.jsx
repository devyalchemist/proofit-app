import Button from "./Button";

export default function HomeBody() {
  return (
    <div className="overflow-y-scroll">
      <div className="m-auto mt-[10rem] flex flex-col items-center gap-[4rem] sm:w-[64rem]">
        <p className="font-default w-[90%] text-center text-[2rem] text-blue-200/80 sm:text-6xl">
          Don't just <span className="text-green-500">engage</span>, be a part
          of something <span className="text-green-500">bigger</span>
        </p>
        <div className="sm:w-[50%]">
          <Button>Get Started</Button>
        </div>
        <div className="text-default pt-[12rem]">
          <h2 className="px-2 py-4 text-4xl text-amber-500">About Us</h2>
          <p className="px-4 text-white">
            Proofit is more than just a fitness tracker—it's your personal stage
            to prove every rep, log every milestone, and build a community
            grounded in real progress. Born out of the need for authenticity in
            the fitness world, Proofit gives you the tools to document your
            journey, challenge yourself, and connect with others grinding toward
            greatness. We believe fitness isn’t just personal—it’s proof.
            Whether you're lifting your first dumbbell, running your 100th
            kilometer, or simply trying to stay consistent, Proofit helps you
            track it, post it, and own it. Proofit is more than just a fitness
            tracker—it's your personal stage to prove every rep, log every
            milestone, and build a community grounded in real progress. Born out
            of the need for authenticity in the fitness world, Proofit gives you
            the tools to document your journey, challenge yourself, and connect
            with others grinding toward greatness. We believe fitness isn’t just
            personal—it’s proof. Whether you're lifting your first dumbbell,
            running your 100th kilometer, or simply trying to stay consistent,
            Proofit helps you track it, post it, and own it.Proofit is more than
            just a fitness tracker—it's your personal stage to prove every rep,
            log every milestone, and build a community grounded in real
            progress. Born out of the need for authenticity in the fitness
            world, Proofit gives you the tools to document your journey,
            challenge yourself, and connect with others grinding toward
            greatness. We believe fitness isn’t just personal—it’s proof.
            Whether you're lifting your first dumbbell, running your 100th
            kilometer, or simply trying to stay consistent, Proofit helps you
            track it, post it, and own it.Proofit is more than just a fitness
            tracker—it's your personal stage to prove every rep, log every
            milestone, and build a community grounded in real progress. Born out
            of the need for authenticity in the fitness world, Proofit gives you
            the tools to document your journey, challenge yourself, and connect
            with others grinding toward greatness. We believe fitness isn’t just
            personal—it’s proof. Whether you're lifting your first dumbbell,
            running your 100th kilometer, or simply trying to stay consistent,
            Proofit helps you track it, post it, and own it.
          </p>
        </div>
      </div>
    </div>
  );
}
