import { useRouteError } from "react-router";

export default function PageNotFound() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}
