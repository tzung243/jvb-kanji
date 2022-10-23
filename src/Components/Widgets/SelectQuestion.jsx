import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { getApiUrl } from "../../Utils/Config/getApiUrl";
import { Authentication } from "../../Network/Authentication";

export const SelectQuestion = ({ exam }) => {
  const { examId, questionId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start space-y-4">
      <Countdown
        date={new Date(exam.startedAt).getTime() + 40 * 1000 * 60}
        intervalDelay={0}
        precision={3}
        renderer={(props) => {
          return (
            <div className="flex flex-row font-bold text-gray-500 text-3xl bg-white w-48 justify-center items-center py-2 rounded-md shadow-sm drop-shadow-sm hover:ring-4 hover:ring-rose-300 duration-300 transition-all">
              <p>{props.minutes}</p>
              <p>:</p>
              <p>{props.seconds}</p>
            </div>
          );
        }}
        onComplete={() => {
          window
            .fetch(`${getApiUrl()}/api/exam/submit`, {
              body: JSON.stringify({
                examId: Number(examId),
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Authentication.getAccessToken()}`,
              },
            })
            .then((response) => {
              if (response.ok) {
                navigate(`/exam/result/${examId}`);
              }
            });
        }}
      />
      <div className="grid grid-cols-10 gap-2 place-content-center">
        {exam.questions.map((question, index) => {
          return (
            <a
              href={`/exam/testing/${examId}/${question.id}`}
              className={`w-8 h-8 flex justify-center items-center shadow-sm drop-shadow-sm rounded-md hover:ring-4 hover:ring-rose-300 duration-300 transition-all ${
                // eslint-disable-next-line eqeqeq
                questionId == question.id
                  ? "bg-gray-500"
                  : question.answer
                  ? "bg-rose-400"
                  : "bg-white"
              }`}
              key={index}
            >
              <p
                className={`font-bold text-base ${
                  // eslint-disable-next-line eqeqeq
                  question.answer || questionId == question.id
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {index + 1}
              </p>
            </a>
          );
        })}
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <ButtonPreviousNext exam={exam} questionId={questionId} />
      </div>
      <button
        onClick={() => {
          window
            .fetch(`${getApiUrl()}/api/exam/submit`, {
              body: JSON.stringify({
                examId: Number(examId),
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Authentication.getAccessToken()}`,
              },
            })
            .then((response) => {
              if (response.ok) {
                navigate(`/exam/result/${examId}`);
              }
            });
        }}
        className="bg-rose-400 w-full py-2 font-bold text-white rounded-md hover:ring-4 hover:ring-rose-300 duration-300 transition-all shadow-sm drop-shadow-sm"
      >
        Submit
      </button>
    </div>
  );
};

const ButtonPreviousNext = ({ exam, questionId }) => {
  /**
   * @type {Array}
   */
  const questions = exam.questions;
  const [disableNext, setDisableNext] = React.useState(true);
  const [disablePrevious, setDisablePrevious] = React.useState(true);
  const [indexOfQuestion, setIndexOfQuestion] = React.useState(true);

  React.useEffect(() => {
    for (let counter = 0; counter < questions.length; counter++) {
      const question = questions[counter];
      // eslint-disable-next-line eqeqeq
      if (question.id == questionId) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIndexOfQuestion(counter);
        if (counter < questions.length - 1) {
          setDisableNext(false);
        } else {
          setDisableNext(true);
        }
        if (counter > 0) {
          setDisablePrevious(false);
        } else {
          setDisablePrevious(true);
        }
      }
    }
  }, [questionId, questions]);

  return (
    <React.Fragment>
      <a
        href={`/exam/testing/${exam.id}/${
          disablePrevious ? "" : questions[indexOfQuestion - 1]?.id
        }`}
        className={`w-28 py-2 text-center text-white rounded-md hover:ring-4 ${
          disablePrevious
            ? "bg-gray-500 hover:ring-gray-300 pointer-events-none"
            : "bg-rose-400 hover:ring-rose-300"
        } font-bold duration-300 transition-all shadow-sm drop-shadow-sm`}
      >
        Previous
      </a>
      <a
        href={`/exam/testing/${exam.id}/${
          disableNext ? "" : questions[indexOfQuestion + 1]?.id
        }`}
        className={`w-28 py-2 text-center text-white rounded-md hover:ring-4 ${
          disableNext
            ? "bg-gray-500 hover:ring-gray-300 pointer-events-none"
            : "bg-rose-400 hover:ring-rose-300"
        } font-bold duration-300 transition-all shadow-sm drop-shadow-sm`}
      >
        Next
      </a>
    </React.Fragment>
  );
};
