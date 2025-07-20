import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-black-200 text-[1.5rem] font-bold">
        proo<span className="text-green-500">fit</span>
      </h1>
    </Link>
  );
}
