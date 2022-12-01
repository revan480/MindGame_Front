import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ConfirmEmail from "./pages/Auth/ConfirmEmail";
import Forgot from "./pages/Auth/Forgot";
import Recover from "./pages/Auth/Recover";
import LandingLayout from "./pages/Landing/LandingLayout";
import Room from "./pages/Room/Room";

const App = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingLayout />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="confirm" element={<ConfirmEmail />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="recover" element={<Recover />} />
        </Route>

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/room" element={<Room />} />
        </Route>

        {/* undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
