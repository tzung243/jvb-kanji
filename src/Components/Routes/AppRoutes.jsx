import React from "react";
import { Route, Routes } from "react-router-dom";
import { Exam } from "../Exam";
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/exam" element={<Exam />} />
    </Routes>
  );
}
