import React from "react";
import { useSelector } from "react-redux";
import { BlogInHome } from "./Widgets/BlogInHome";
import { ExamManager } from "./Widgets/ExamManager";
import { QuickStartExam } from "./Widgets/QuickStartExam";

export function Home() {
  const user = useSelector((state) => state.authentication.user);

  React.useEffect(() => {
    document.title = "CHIP CHIP - Home";
  });

  return (
    <React.Fragment>
      <QuickStartExam />
      {(() => {
        if (user) {
          return <ExamManager />;
        }
      })()}
      <BlogInHome />
    </React.Fragment>
  );
}
