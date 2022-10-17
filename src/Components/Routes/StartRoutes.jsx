import { Home } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../404";
import { AppRoutes } from "./AppRoutes";

export function StartRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<AppRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
