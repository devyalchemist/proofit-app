import { Link } from "react-router";
import Button from "./Button";

export default function HomeHeader() {
  return (
    <header className="border-opacity-25 am:px-32 absolute flex w-full items-center justify-between border-b-[0.25px] border-gray-100/10 bg-white/25 px-4 py-1 backdrop-blur-md sm:py-4">
      <h1 className="text-[1.4rem] font-bold text-blue-200">
        proo<span className="text-green-500">fit</span>
      </h1>
      <Link to={"/login"}>
        <Button>login</Button>
      </Link>
    </header>
  );
}
