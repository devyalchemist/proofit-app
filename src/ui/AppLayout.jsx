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

export default function AppLayout() {
  const sideIcons = [faBox, faUser, faCogs, faMarker, faBriefcase];
  return (
    <main className="bg-background grid h-[100dvh] grid-cols-1 grid-rows-[auto_100px_1fr_50px] sm:grid-cols-[minmax(200px,3fr)_7fr_70px] sm:grid-rows-[auto_1fr]">
      <AppHeader />
      <div className="h-full border-r-1 border-white/20">hello</div>
      <div className="flex h-full items-center justify-center border-r-1 border-white/20">
        {Outlet}
      </div>
      <div className="flex items-center justify-center border-t-1 border-white/20">
        <ul className="flex w-full items-center justify-between gap-4 px-[2rem] text-white sm:flex-col sm:px-0">
          {sideIcons.map((icon) => (
            <li className="flex aspect-square w-[30px] items-center justify-center rounded-[5px] border-white transition-all duration-200 hover:border-1 hover:bg-transparent sm:w-[50px] sm:bg-blue-400/20">
              <FontAwesomeIcon icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 
