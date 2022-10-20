import React from "react";
import { useParams } from "react-router-dom";

export function QuestionTesting({ exam }) {
  const { examId, questionId } = useParams();
  const [question, setQuestions] = React.useState();

  return <div>QuestionTesting</div>;
}
