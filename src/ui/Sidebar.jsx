import { useReducer, useState } from "react";
import { hideScrollStyle } from "../utils/hideScrollStyle";
import TextShortener from "./TextShortener";
import Task from "./Task";
import { tasks } from "../constants/constants";
const initialState = {
  currentTab: "task",
};
function reducer(state, action) {
  switch (action.type) {
    case "one":
      return { ...state, currentTab: "task" };
    case "two":
      return { ...state, currentTab: "add" };
    default:
      return state;
  }
}
export default function Sidebar() {
  const [{ currentTab }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="font-default h-full border-r-1 border-gray-200/10 p-2 text-white">
      <div className="h-[500px] overflow-hidden rounded-2xl border-1 border-white/10 bg-blue-200/3 p-8 hover:bg-blue-200/5">
        <div className="flex gap-2">
          <span
            onClick={() => dispatch({ type: "one" })}
            className={`${
              currentTab === "task" && "bg-blue-500"
            } cursor-pointer rounded-full border-1 border-white/20 bg-blue-300/10 px-4 py-2 text-sm hover:bg-blue-500/40`}
          >
            Tasks🎯
          </span>
          <span
            onClick={() => dispatch({ type: "two" })}
            className={`${
              currentTab === "add" && "bg-blue-500"
            } cursor-pointer rounded-full border-1 border-white/20 bg-blue-300/10 px-4 py-2 text-sm hover:bg-blue-500/40`}
          >
            New task+
          </span>
        </div>
        <div className="mt-8 flex items-center border-b-1 border-white/10">
          <h1 className="mr-[4rem] p-2 text-[2rem] text-green-500/80">Goal</h1>
          <div className="flex flex-col items-start justify-between gap-2">
            <progress
              value={30}
              className="h-[5px] w-[14rem]"
              max={100}
            ></progress>
            <div className="flex w-full items-center justify-between text-white/40">
              <p className="">Lose 1500kcal</p>
              <p>
                <span className="font-bold text-green-500/80">3</span>/10
              </p>
            </div>
          </div>
        </div>

        <div style={hideScrollStyle} className="h-[18rem] overflow-y-scroll">
          {/* <div className="flex items-center justify-between gap-2"> */}
          {/* <span className="px-[2rem] text-[4rem] text-white/50">1</span>  */}
          {tasks.map((task) => (
            <Task key={task.summary} task={task} />
          ))}
          {/* <Task /> */}
          {/* </div> */}

          {/* <p className="mt-4 text-sm text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex, ut
            dignissimos facere doloremque exercitationem ab magni assumenda
            deserunt laboriosam cumque dolor ratione expedita impedit incidunt
            obcaecati perspiciatis accusantium veniam Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Illum eum, eligendi obcaecati
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
            <span className="text-red-400">read more</span>
          </p> */}
        </div>
      </div>
    </div>
  );
}
