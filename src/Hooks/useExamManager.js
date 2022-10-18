import React from "react";
import { Exam } from "../Network/Exam";

export const useExamManager = () => {
  const [exams, setExams] = React.useState([]);

  React.useEffect(() => {
    Exam.getAllExamOfUser().then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setExams(json.data);
        });
      }
    });
  }, []);

  return exams;
};
