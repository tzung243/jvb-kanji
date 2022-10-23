import React from "react";
import { useParams } from "react-router-dom";
import { Authentication } from "../../Network/Authentication";
import { getApiUrl } from "../../Utils/Config/getApiUrl";
import { Question } from "./Question";

export function QuestionTesting() {
  const { examId, questionId } = useParams();
  const [question, setQuestion] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    window
      .fetch(`${getApiUrl()}/api/exam/${examId}/${questionId}`, {
        headers: {
          Authorization: `Bearer ${Authentication.getAccessToken()}`,
        },
      })
      .then(async (response) => {
        if (response.ok) {
          const json = await response.json();
          setQuestion(json.data);
          document.title = `Question - ${json.data.question.topic}`;
        }
        setLoading(false);
      });
  }, [examId, questionId]);

  return (
    <div>
      {(() => {
        if (loading) {
          return <React.Fragment></React.Fragment>;
        } else {
          return (
            <Question question={question.question} answer={question.answer} />
          );
        }
      })()}
    </div>
  );
}
