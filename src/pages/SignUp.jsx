import SignUpForm from "../features/authentication/SignUpForm";
import Footer from "../ui/Footer";
import { hideScrollStyle } from "../utils/hideScrollStyle";

export default function SignUp() {
  return (
    <div className="grid h-[100vh] grid-rows-[1fr_auto]">
      <div
        style={hideScrollStyle}
        className="flex items-center justify-center overflow-y-scroll bg-blue-300"
      >
        <div>
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
