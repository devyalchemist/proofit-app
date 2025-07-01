export default function Header() {
  return (
    <header className="font-default flex items-center justify-between bg-blue-950 px-20 py-4">
      <div className="text-4xl font-bold text-white">proofit</div>
      <button
        onClick={() => alert("Hello Dear")}
        className="rounded-full bg-blue-500 p-2 px-4 text-white hover:cursor-pointer"
      >
        Get started
      </button>
    </header>
  );
}
