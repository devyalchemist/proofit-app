export default function Button({ children }) {
  return (
    <button className="rounded-[12px] bg-blue-600 px-6 py-2 text-white">
      {children}
    </button>
  );
}
