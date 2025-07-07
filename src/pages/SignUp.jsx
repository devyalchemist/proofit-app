import LoginForm from "../features/authentication/LoginForm";
import SignUpForm from "../features/authentication/SignUpForm";
import Footer from "../ui/Footer";

export default function SignUp() {
  return (
    <div className="grid h-[100vh] grid-rows-[1fr_auto]">
      <div className="flex items-center justify-center bg-blue-300">
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}
