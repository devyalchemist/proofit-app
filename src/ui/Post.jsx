import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import PostTextContent from "./PostTextContent";

export default function Post() {
  const interactionIcon = [faHeart, faComment, faBookmark];
  return (
    <div className="w-full px-4  sm:px-[4rem] text-white py-[6rem]">
      <div className="font-default flex items-center gap-1 sm:gap-4">
        <Avatar src="/images/workout-1.jpg" />
        <span className="flex sm:text-[1rem] text-[0.8rem] flex-col justify-center">
          Ameeh Chidera
          <span className="text-gray-300/40 cursor-pointer hover:text-green-300/80 transition-all duration-200">@ameer</span>
        </span>
      </div>
      <PostTextContent />
      <ul className="flex w-[12rem] items-center justify-between gap-4 px-[2rem] py-2 text-white sm:px-[4rem]">
        {interactionIcon.map((icon) => (
          <li
            key={icon}
            className="flex aspect-square w-[20px] items-center justify-center rounded-[5px] border-white transition-all duration-200 sm:w-[30px] sm:bg-blue-400/20"
          >
            <FontAwesomeIcon icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
