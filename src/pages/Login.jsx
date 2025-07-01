import LoginForm from "../features/authentication/LoginForm";
import Footer from "../ui/Footer";

export default function Login() {
  return (
    <div className="grid h-[100vh] grid-rows-[1fr_auto]">
      <div className="flex items-center justify-center bg-blue-300">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
