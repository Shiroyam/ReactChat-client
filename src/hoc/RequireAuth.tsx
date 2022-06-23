import { useLocation, Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: any) => {
  const location = useLocation();
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};
