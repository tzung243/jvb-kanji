import React from "react";
import { useParams } from "react-router-dom";
import { Authentication } from "../../Network/Authentication";
import { getApiUrl } from "../../Utils/Config/getApiUrl";

export function Question({ question, answer }) {
  const [executing, setExecuting] = React.useState(false);

  const { examId, questionId } = useParams();

  return (
    <form
      className="w-[640px] bg-white p-6 shadow-md drop-shadow-sm rounded-md space-y-3 hover:ring-rose-300 hover:ring-4 duration-300 transition-all"
      onChange={(event) => {
        setExecuting(true);
        window
          .fetch(`${getApiUrl()}/api/exam/selection/${examId}/${questionId}`, {
            method: "POST",
            body: JSON.stringify({
              answer: event.target.value,
            }),
            headers: {
              Authorization: `Bearer ${Authentication.getAccessToken()}`,
              "Content-Type": "application/json",
            },
          })
          .then(async (response) => {
            if (response.ok) {
            }
            setExecuting(false);
          });
      }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p className="text-3xl font-bold text-gray-500">{question.topic}</p>
      <div className="flex flex-row items-center justify-start space-x-2">
        <input
          type="radio"
          name="answer"
          value={"A"}
          className="accent-rose-500 disabled:accent-gray-500"
          disabled={executing}
          defaultChecked={answer === "A"}
        />
        <p className="font-medium text-lg text-gray-500">{`A. ${question.a}`}</p>
      </div>
      <div className="flex flex-row items-center justify-start space-x-2">
        <input
          type="radio"
          name="answer"
          value={"B"}
          className="accent-rose-500 disabled:accent-gray-500"
          disabled={executing}
          defaultChecked={answer === "B"}
        />
        <p className="font-medium text-lg text-gray-500">{`B. ${question.b}`}</p>
      </div>
      <div className="flex flex-row items-center justify-start space-x-2">
        <input
          type="radio"
          name="answer"
          value={"C"}
          className="accent-rose-500 disabled:accent-gray-500"
          disabled={executing}
          defaultChecked={answer === "C"}
        />
        <p className="font-medium text-lg text-gray-500">{`C. ${question.c}`}</p>
      </div>
      <div className="flex flex-row items-center justify-start space-x-2">
        <input
          type="radio"
          name="answer"
          value={"A"}
          className="accent-rose-500 disabled:accent-gray-500"
          disabled={executing}
          defaultChecked={answer === "D"}
        />
        <p className="font-medium text-lg text-gray-500">{`D. ${question.d}`}</p>
      </div>
    </form>
  );
}
