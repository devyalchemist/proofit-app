import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUpUser as signUpUserApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useSignUp() {
  const navigate = useNavigate();

  const {
    mutate: signUpUser,
    isPending: isSigningUp,
    error,
  } = useMutation({
    mutationFn: signUpUserApi,
    onSuccess: () => {
      toast.success("Account Created");
      navigate("/app");
      // navigate("/login")
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUpUser, isSigningUp, error };
}
