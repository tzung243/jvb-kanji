import React from "react";
import { useSelector } from "react-redux";
import { ExamManager } from "./Widgets/ExamManager";
import { QuickStartExam } from "./Widgets/QuickStartExam";

export function Home() {
  const user = useSelector((state) => state.authentication.user);

  return (
    <React.Fragment>
      <QuickStartExam />
      {(() => {
        if (user) {
          return <ExamManager />;
        }
      })()}
    </React.Fragment>
  );
}
