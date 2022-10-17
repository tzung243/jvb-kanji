import React from "react";
import { Route, Routes } from "react-router-dom";
import { Exam } from "../Exam";
import { Login } from "../Login";
import { RecoveryPassword } from "../RecoveryPassword";
import { Register } from "../Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/recovery-password" element={<RecoveryPassword />} />
    </Routes>
  );
}
