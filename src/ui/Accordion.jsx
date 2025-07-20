import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../constants/constants";

export default function Accordion({title}) {
  const [openedIndex, setOpenedIndex] = useState("");
  return (
    <div className="w-full">
      <h1 className="text-[4rem] text-center font-default">{title}</h1>
      <div className="w-full divide-y-2 divide-slate-500 p-4">
        {faqs.map((e, i) => (
          <AccordionItem
            openIndex={setOpenedIndex}
            key={i}
            title={e.title}
            about={e.about}
            index={i}
            openedIndex={openedIndex}
          />
        ))}
      </div>
    </div>
  );
}
