import "./App.css";
import React from "react";
import Signup from "./components/pages/Signup";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.js";
import Login from "./components/pages/Login.js";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import ForgotPassword from "./components/pages/ForgotPassword";
import UpdateProfile from "./components/pages/UpdateProfile";
import Resume from "./components/pages/Resume"

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Dashboard />} path="/" exact/>
              <Route element={<UpdateProfile />} path="/update-profile"/>
              <Route element={<Dashboard />} path="/react-site"/>

            </Route>
            <Route element={<Login />} path="/login"  />
            <Route element={<Signup />} path="/signup" />
            <Route element={<ForgotPassword />} path="/forgot-password" />
            <Route element={<Resume />} path="/resume"  />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
