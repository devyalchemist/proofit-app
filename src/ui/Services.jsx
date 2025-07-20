import Card from "./Card";

export default function Services() {
  return (
    <div className="w-full">
      <h2 className="font-default mb-[4rem] text-center text-[4rem]">
        Services
      </h2>
      <div className="flex w-full justify-between">
        <Card src="/images/write.png" />
        <Card />
        <Card src="/images/stretching-exercises.png" />
      </div>
    </div>
  );
}
