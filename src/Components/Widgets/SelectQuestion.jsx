import React from "react";
import { useParams } from "react-router-dom";

export const SelectQuestion = ({ exam }) => {
  const { examId, questionId } = useParams();

  return (
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
          >
            <p
              className={`font-bold text-base ${
                // eslint-disable-next-line eqeqeq
                question.answer || questionId == question.id
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              {index}
            </p>
          </a>
        );
      })}
    </div>
  );
};
