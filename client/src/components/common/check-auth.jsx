import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // If not authenticated and trying to access a protected route
  if (!isAuthenticated) {
    if (
      !location.pathname.includes("/login") &&
      !location.pathname.includes("/register")
    ) {
      return <Navigate to="/auth/login" />;
    }
    // If authenticated but trying to access an admin page
  } else if (user?.role === "admin" && location.pathname.includes('shop')) {
    return <Navigate to="/admin/dashboard" />;
  } else if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    return <Navigate to="/unauth-page" />;
  } else if (isAuthenticated && user?.role === 'admin') {
    return <Navigate to="/admin/dashboard" />;
  }

  // If none of the conditions match, render the children
  return children;
}

export default CheckAuth;
