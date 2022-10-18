import React from "react";
import { ExamManager } from "./ExamManager";
import { QuickStartExam } from "./QuickStartExam";

export function Home() {
  return (
    <React.Fragment>
      <QuickStartExam />
      <ExamManager />
    </React.Fragment>
  );
}
