import React from "react";

export default function Card({ src = "/images/bar-chart.png" }) {
  return (
    <div className="flex w-[400px] flex-col items-center justify-center rounded-[6px] border-1 border-black/20 px-4 py-8">
      <div className="aspect-square h-[80px] w-[80px]">
        <img className="h-full w-full object-cover" src={src} alt="" />
      </div>
      <h3 className="font-default text-component py-6 text-[1.5rem]">
        Stay on track
      </h3>
      <p className="font-writing text-center text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
        consectetur qui, natu ullam facere, animi ratione maiores error. Ipsam
        ex nam nesciunt eaque.
      </p>
    </div>
  );
}
