import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });
  return { user, isAuthenticated: user?.role === "authenticated", isLoading };
}
