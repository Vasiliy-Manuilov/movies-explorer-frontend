import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, component: Component, ...props }) => {
  return  isAllowed ? <Component {...props} /> : <Navigate to="/" replace/>
}

export default ProtectedRoute;
