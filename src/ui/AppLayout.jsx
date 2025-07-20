import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faUser,
  faCogs,
  faMarker,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { hideScrollStyle } from "../utils/hideScrollStyle";

export default function AppLayout() {
  const sideIcons = [faBox, faUser, faCogs, faMarker, faBriefcase];
  return (
    <main className="bg-background grid h-[100dvh] grid-cols-1 grid-rows-[auto_1fr_50px] sm:grid-cols-[minmax(200px,3fr)_7fr_50px] sm:grid-rows-[auto_1fr]">
      <AppHeader />
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div
        style={hideScrollStyle}
        className="h-full overflow-y-scroll border-r-1 border-gray-200/10"
      >
        <Outlet />
      </div>
      {/* <div className="flex items-center justify-center border-t-1 border-gray-200/10">
        <ul className="flex w-full items-center justify-between gap-4 px-[2rem] text-white sm:flex-col sm:px-0">
          {sideIcons.map((icon) => (
            <li className="flex aspect-square w-[30px] items-center justify-center rounded-[5px] border-white transition-all duration-200 hover:border-1 hover:bg-transparent sm:w-[50px] sm:bg-blue-400/20">
              <FontAwesomeIcon icon={icon} />
            </li>
          ))}
        </ul>
      </div> */}
      <ul className="flex w-full items-center justify-start gap-[1rem] divide-slate-400/50 px-[2rem] py-[4rem] text-white sm:flex-col sm:divide-y-[1px] sm:px-0">
        {sideIcons.map((icon) => (
          <div className="p-0 sm:pb-[1rem]">
            <li className="flex aspect-square w-[30px] items-center justify-center rounded-[5px] border-white transition-all duration-200 hover:border-1 hover:bg-white/20 sm:w-[30px] sm:hover:border-0">
              <FontAwesomeIcon icon={icon} />
            </li>
          </div>
        ))}
      </ul>
    </main>
  );
}
