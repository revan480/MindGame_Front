import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Confirm from "./pages/Auth/Confirm";
import Forgot from "./pages/Auth/Forgot";
import LandingLayout from "./pages/Landing/LandingLayout";
import Lobby from "./pages/Lobby/Lobby";
import Reset from "./pages/Auth/Reset";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<LandingLayout />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="reset" element={<Reset />} />
      </Route>

      {/* private routes */}
      <Route element={<RequireAuth />}>{/* <Route path="/room" element={<Room />} /> */}</Route>

      <Route path="/lobby" element={<Lobby />} />

      {/* undefined routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
