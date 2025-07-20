export default function Banner() {
  return (
    <div className="pt-12 flex w-full gap-16">
      <div className="h-[400px] w-[800px] ">
        <img className="w-full h-full object-cover" src="/images/workout-2.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="font-default text-[3rem] text-component">Pace yourself</h1>
        <p className="font-writing text-gray-700 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima
          non quis sed quam atque, perspiciatis repellat? Praesentium eveniet,
          maxime alias beatae nisi non quibusdam dolore ullam a natus. Sint.
        </p>
      </div>
    </div>
  );
}
