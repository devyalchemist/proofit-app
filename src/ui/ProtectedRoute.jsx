import { useNavigate } from "react-router";
import { useGetUser } from "../features/authentication/useGetUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading: isLoadingUser } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("/login");
  }, [isAuthenticated, isLoadingUser, navigate]);
  if (isLoadingUser) return <Spinner />;
  return <div>{isAuthenticated && children}</div>;
}
