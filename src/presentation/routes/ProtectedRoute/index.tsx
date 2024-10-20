import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  element,
}: {
  isAuthenticated: boolean;
  element: JSX.Element;
}) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
