import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextShortener from "./TextShortener";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Task({ task }) {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  //   const task = {
  //     title: "Run 4 miles",
  //     priority: "high",
  //     notes: "Make a 4 mile run in the morning at Campe Vorde",
  //     summary: "Run 4 miles in summary",
  //   };
  const taskStyle = {
    backgroundColor: task.priority === "high" ? "#0146e888" : "blue",
  };
  return (
    <div className="mt-[2rem] rounded-[0.4rem] border-2 border-white/10">
      <div
        // style={taskStyle}
        className="flex items-center justify-between gap-4 overflow-hidden rounded-[0.4rem] bg-blue-800/20 pr-4"
      >
        <div className="aspect-square w-[80px] overflow-hidden rounded-[3]">
          <img
            className="h-full w-full object-cover"
            src={"/images/workout-1.jpg"}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 px-1 py-2">
          <p className="">{task.title}</p>
          <p className="text-sm text-white/70">{task.summary}</p>
        </div>
        <FontAwesomeIcon
          className="cursor-pointer rounded-[0.5rem] bg-blue-200/30 p-2 text-[1.2rem] hover:bg-blue-100/40"
          icon={faCircleChevronDown}
          onClick={() => setShowTaskDetails((prev) => !prev)}
        />
      </div>
      {showTaskDetails && (
        <div className="px-2">
          <TextShortener>
            officiis qui eius totam alias at earum voluptates maiores reiciendis
            voluptatem quas consequatur? Deleniti fugit veniam Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Distinctio blanditiis
            pariatur minima tempora dolores quae sequi, culpa tempore minus
            corporis provident eligendi consequatur inventore aut similique
            deleniti, in magnam. Nemo.sit quos. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Perferendis iusto eaque soluta
            necessitatibus cupiditate obcaecati quasi, quas eius accusantium
            doloribus dolorum blanditiis minima reiciendis quam illo maxime est
            eum sapiente.
          </TextShortener>
        </div>
      )}
    </div>
  );
}
