export default function TipCard({ children }) {
  return (
    <div className={`flex min-w-[100px] sm:min-w-[250px] items-center gap-4 rounded-full border-[1px] border-white/20 bg-blue-300/25 p-1 hover:border-green-500  transition-all duration-300 cursor-pointer`}>

      <div className="p-[2px] bg-gradient-to-r rounded-full from-purple-500 to-pink-500">
          <div className="aspect-square w-[40px] rounded-full overflow-hidden   ">
            <img
              className="h-full w-full object-cover"
              src="/images/workout-1.jpg"
              alt=""
            />
          </div>
      </div>
      <span className="text-blue-50 sm:text-[1rem] text-[12px] font-default">{children}</span>
    </div>
  );
}
