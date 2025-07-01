import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-white px-8 py-2">
      <ul className="flex gap-[2rem]">
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li></li>
        <li></li>
      </ul>
      <span>&copy;devyalchemist🔸🐥🔸</span>
    </footer>
  );
}
