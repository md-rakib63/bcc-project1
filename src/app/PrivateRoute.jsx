import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>; // লোডিং শেষ না হওয়া পর্যন্ত অপেক্ষা করুন
  }

  if (user) {
    return children; // ইউজার থাকলে ড্যাশবোর্ড দেখাবে
  }

  // ইউজার না থাকলে লগইন পেজে পাঠিয়ে দিন
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;