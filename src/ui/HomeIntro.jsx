import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function HomeIntro() {
  // const previousPStyle =
  //   "font-default w-[90%] text-center text-[2rem] text-blue-200/80 sm:text-7xl sm:leading-[5rem]";

  return (
    <div className="mt-[2rem] mb-[6rem] flex flex-col items-center gap-[4rem] sm:w-[64rem]">
      <p className="font-default text-center text-[1.8rem] sm:text-7xl sm:leading-[5rem]">
        Train <span className="text-green-500">Smarter</span>. See Real{" "}
        <span className="text-green-500">Progress</span>.
      </p>
      <p className="font-writing text-[1.2rem] text-gray-700">
        "Crush your goals, connect with niches, and own your fitness universe."
      </p>
      <div className="flex justify-center sm:w-[80%]">
        <Link to="/app">
          <Button type="outline">
            <span className="relative flex items-center">Get Started</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
