import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const PrivateRoutes = () => {
    const { currentUser } = useAuth()
    console.log(currentUser)
    return (
          currentUser ? <Outlet/> : <Navigate to="/login" />
    )
  }
export default PrivateRoutes;
