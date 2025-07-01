import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex justify-between px-18 py-4">
      Home
      <Link to={"/login"}>
        <button className="rounded-[12px] bg-blue-600 px-6 py-2 text-white">
          login
        </button>
      </Link>
    </div>
  );
}
