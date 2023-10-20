import React from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const PrivateRoutes = () => {
    const { currentUser } = useAuth()
    const location = useLocation();
    return (
          currentUser ? <Outlet/> : <Navigate to="/login" replace state={{from: location}} />
    )
  }
export default PrivateRoutes;
