import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../404";
import { ExamResult } from "../ExamResult";
import { ExamTesting } from "../ExamTesting";

export const ExamRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/result/:examId" element={<ExamResult />} />
        <Route path="/testing/:examId/*" element={<ExamTesting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};
