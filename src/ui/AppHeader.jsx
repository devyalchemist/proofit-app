import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useLogOut } from "../features/authentication/useLogOut";
import Spinner from "./Spinner";

export default function AppHeader() {
  const { isLoggingOut, logOut } = useLogOut();
  if (isLoggingOut) return <Spinner />;
  function handleLogOut() {
    logOut();
  }
  return (
    <header className="col-[1/-1] flex items-center justify-between border-b-1 border-gray-200/10 px-6 py-2 text-white sm:px-12 sm:py-3">
      <span className="font-default text-[1.2rem] text-white sm:text-[1.4rem]">
        proo<span className="text-green-600">fit</span>
      </span>
      <div className="flex items-center gap-4">
        <Avatar src="/images/workout-1.jpg" />

        <span>Gospel Ugwuja</span>
        <button
          className="bg-blue-400/40 p-2 text-white"
          onClick={handleLogOut}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
        </button>
      </div>
    </header>
  );
}
