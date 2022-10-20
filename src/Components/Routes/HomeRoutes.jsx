import React from "react";
import { Route, Routes } from "react-router-dom";
import { ExamManager } from "../ExamManager";
import { Header } from "../Widgets/Header";
import { Home } from "../Home";
import { ExamTesting } from "../ExamTesting";
import { NotFound } from "../404";
import { Footer } from "../Widgets/Footer";

export function HomeRoutes() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/exam" element={<ExamManager />} />
        <Route path="/exam/:examId/*" element={<ExamTesting />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
