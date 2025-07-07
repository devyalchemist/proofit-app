import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-white px-8 py-2">
      <ul className="flex gap-[2rem]">
        <li>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </ul>
      <span>&copy;devyalchemist🔸🐥🔸</span>
    </footer>
  );
}
