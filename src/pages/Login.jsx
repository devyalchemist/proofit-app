import LoginForm from "../features/authentication/LoginForm";
import Footer from "../ui/Footer";

export default function Login() {
  return (
    <div className="grid h-[100vh] grid-rows-[1fr_auto]">
      <div className="flex items-center justify-center bg-green-50 bg-[radial-gradient(at_80%_20%,rgba(34,197,94,0.1)_0,transparent_50%),radial-gradient(at_20%_80%,rgba(255,127,80,0.1)_0,transparent_50%)]">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
