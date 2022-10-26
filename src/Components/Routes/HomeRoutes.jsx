import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Widgets/Header";
import { Home } from "../Home";
import { NotFound } from "../404";
import { Footer } from "../Widgets/Footer";
import { ExamRoutes } from "./ExamRoutes";
import { ExamManager } from "../ExamManager";
import { EditProfile } from "../EditProfile";
import { Vocabulary } from "../Vocabulary";

export function HomeRoutes() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/exam" element={<ExamManager />} />
        <Route path="/exam/*" element={<ExamRoutes />} />
        <Route path="/" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
