import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../404";
import { Start } from "../Start";
import { AppRoutes } from "./AppRoutes";

export function StartRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/*" element={<AppRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
