import { Link } from "react-router";
import Button from "./Button";
import Logo from "./Logo";

export default function HomeHeader() {
  return (
    <header className="border-opacity-25 absolute flex w-full items-center justify-between border-b-[0.25px] border-gray-100/10 bg-white/30 px-4 py-1 backdrop-blur-md sm:px-20 sm:py-4">
      <Logo />
      <Link to={"/login"}>
        <Button type="base">login</Button>
        {/* <div className="rounded-full transition-colors   border-white border-[1px] bg-transparent"></div>transition-colors hover:bg-blue-600 hover:outline-none */}
      </Link>
    </header>
  );
}
