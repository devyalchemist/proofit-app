import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeIntro() {

  
  return (
    <div className="flex flex-col items-center gap-[6rem] sm:w-[64rem] mt-[2rem] mb-[8rem]">
      <p className="font-default w-[90%] text-center text-[2rem] text-blue-200/80 sm:text-7xl sm:leading-[5rem]">
        Don't just <span className="text-green-500">engage</span>, be a part of
        something <span className="text-green-500">bigger</span>
      </p>
      <div className="flex justify-center sm:w-[80%]">
        <Button  type="outline">
          <span className="relative flex items-center">Get Started</span>
        </Button>
      </div>
    </div>
  );
}
