export default function AppHeader() {
  return (
    <header className="col-[1/-1] text-white flex items-center border-b-1 border-white/20 justify-between px-6 py-2 sm:px-12 sm:py-4">
      <span className="sm:text-[1.5rem] text-[1.2rem] font-default text-white font-bold">proo<span className="text-green-600">fit</span></span>
      <div className="flex items-center gap-4">
        <div className="aspect-square w-[30px] overflow-hidden rounded-full">
          <img
            className="h-full w-full object-cover"
            src="/images/workout-1.jpg"
            alt=""
          />
        </div>
        <span>Gospel Ugwuja</span>
      </div>
    </header>
  );
}
