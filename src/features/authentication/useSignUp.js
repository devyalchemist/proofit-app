import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUpUser as signUpUserApi } from "../../services/apiAuth";

export function useLogin() {
  const {
    mutate: signUpUser,
    isPending: isSigningUp,
    error,
  } = useMutation({
    mutationFn: signUpUserApi,
    onSuccess: () => {
      toast.success("Login Succesful");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUpUser, isSigningUp, error };
}
