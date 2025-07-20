import Avatar from "./Avatar";

export default function TipCard({ children }) {
  // const prevConStyle = `flex min-w-[100px] cursor-pointer items-center gap-4 rounded-full border-[1px] border-white/20 bg-blue-300/25 p-1 transition-all duration-300 hover:border-green-500 sm:min-w-[250px]`;
  return (
    <div className="hover:bg-component flex min-w-[200px] flex-shrink-0 items-center gap-2 rounded-full border border-black/20 bg-blue-300/25 px-3 py-2 transition-all duration-300 hover:cursor-pointer hover:border-green-500 hover:text-white">
      <Avatar src="/images/workout-2.jpg" />
      <span className="font-writing text-[12px] sm:text-[1rem]">
        {children}
      </span>
    </div>
    // <div className="flex max-w-[90%] min-w-[45%] items-center gap-2 rounded-full border border-black/10 bg-blue-100/50 px-3 py-2 shadow-md transition-all hover:border-green-500 hover:bg-green-100 hover:text-green-900 sm:max-w-[300px] sm:min-w-[220px]">
    //   <Avatar src="/images/workout-2.jpg" />
    //   <span className="font-writing text-[12px] sm:text-[1rem]">
    //     {children}
    //   </span>
    // </div>
    // <div
    //   className={`hover:bg-component flex cursor-pointer items-center gap-2 rounded-full border-[1px] border-black/20 px-3 py-2 transition-all duration-300 hover:border-green-500 hover:text-white`}
    // >
    //   <Avatar src="/images/workout-2.jpg" />
    //   <span className="font-writing text-[12px] sm:text-[1rem]">
    //     {children}
    //   </span>
    // </div>
  );
}
