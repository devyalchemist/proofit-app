import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logOut, isPending: isLoggingOUt } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      toast.success("Logged out successful");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { logOut, isLoggingOUt };
}
