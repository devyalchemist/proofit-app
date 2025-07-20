import React from "react";

export default function AccordionItem({
  openedIndex,
  index,
  title,
  about,
  openIndex,
}) {
  return (
    <div className="font-default overflow-hidden rounded-[1rem] border border-gray-200 bg-white">
      <h1
        onClick={() => openIndex((prev) => (prev !== index ? index : ""))}
        className={`cursor-pointer rounded-t-[1rem] bg-gray-100 px-6 py-8 text-center text-lg font-semibold transition-colors duration-300 hover:bg-green-700 hover:text-white ${index === openedIndex && "bg-green-700 text-white"}`}
      >
        {title}
      </h1>

      {openedIndex === index && (
        <p className="font-writing border-t  border-gray-200 px-[8rem] py-12 text-gray-700">
          {about}
        </p>
      )}
    </div>
  );
}
