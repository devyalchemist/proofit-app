import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginUser as loginUserApi } from "../../services/apiAuth";

export function useLogin() {
  const {
    mutate: loginUser,
    isPending: isLoggingUser,
    error,
  } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: () => {
      toast.success("Login Succesful");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { loginUser, isLoggingUser, error };
}
