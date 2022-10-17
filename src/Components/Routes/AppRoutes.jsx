import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Login";
import { RecoveryPassword } from "../RecoveryPassword";
import { Register } from "../Register";
import { HomeRoutes } from "./HomeRoutes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery-password" element={<RecoveryPassword />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
}
