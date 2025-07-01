import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
  return (
    <div className="grid h-[100vh] grid-rows-[1fr_auto]">
      <div className="flex items-center justify-center bg-blue-300">
        <LoginForm />
      </div>
      <footer className="flex justify-between bg-white px-8 py-2">
        Hello world
        <span>&copy;devyalchemist🔸🐥🔸</span>
      </footer>
    </div>
  );
}
