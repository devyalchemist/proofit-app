import { useState } from "react";

export default function TextShortener({ children, maxWords = 30 }) {
  const [isFullText, setIsFullText] = useState(true);

  const childrenArray = children.split(" ");
  const refinedChildren = isFullText
    ? children
    : childrenArray.slice(0, maxWords).join(" ") + " ...";
  return (
    <div>
      <p className="mt-4 text-sm text-white/60">{refinedChildren} </p>
      <span
        className="cursor-pointer"
        onClick={() => setIsFullText((prev) => !prev)}
      >
        {isFullText ? "showLess" : "showMore"}
      </span>
    </div>
  );
}
