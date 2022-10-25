/* eslint-disable eqeqeq */
import React from "react";

export default function QuestionCompleted({ answerOfUser, index }) {
  return (
    <div className="w-full shadow-sm drop-shadow-sm p-2 hover:ring-4 hover:ring-rose-300 rounded-sm duration-300 transition-all flex flex-col justify-between">
      <div className="w-full flex flex-col space-y-1">
        <p className="text-gray-500 font-bold text-xl">{`${index + 1}. ${
          answerOfUser.question.topic
        }`}</p>
        <p
          className={`duration-300 transition-all text-base font-semibold px-2 rounded-sm ${
            answerOfUser.answer
              ? answerOfUser.answer == "A"
                ? answerOfUser.question.answerCorrect == answerOfUser.answer
                  ? "text-white bg-green-400 hover:ring-4 hover:ring-green-300"
                  : "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
                : "text-gray-300"
              : answerOfUser.question.answerCorrect == "A"
              ? "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
              : "text-gray-300"
          }`}
        >{`A. ${answerOfUser.question.a}`}</p>
        <p
          className={`duration-300 transition-all text-base font-semibold px-2 rounded-sm ${
            answerOfUser.answer
              ? answerOfUser.answer == "B"
                ? answerOfUser.question.answerCorrect == answerOfUser.answer
                  ? "text-white bg-green-400 hover:ring-4 hover:ring-green-300"
                  : "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
                : "text-gray-300"
              : answerOfUser.question.answerCorrect == "B"
              ? "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
              : "text-gray-300"
          }`}
        >{`B. ${answerOfUser.question.b}`}</p>
        <p
          className={`duration-300 transition-all text-base font-semibold px-2 rounded-sm ${
            answerOfUser.answer
              ? answerOfUser.answer == "C"
                ? answerOfUser.question.answerCorrect == answerOfUser.answer
                  ? "text-white bg-green-400 hover:ring-4 hover:ring-green-300"
                  : "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
                : "text-gray-300"
              : answerOfUser.question.answerCorrect == "C"
              ? "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
              : "text-gray-300"
          }`}
        >{`C. ${answerOfUser.question.c}`}</p>
        <p
          className={`duration-300 transition-all text-base font-semibold px-2 rounded-sm ${
            answerOfUser.answer
              ? answerOfUser.answer == "D"
                ? answerOfUser.question.answerCorrect == answerOfUser.answer
                  ? "text-white bg-green-400 hover:ring-4 hover:ring-green-300"
                  : "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
                : "text-gray-300"
              : answerOfUser.question.answerCorrect == "D"
              ? "text-white bg-red-400 hover:ring-4 hover:ring-red-300"
              : "text-gray-300"
          }`}
        >{`D. ${answerOfUser.question.d}`}</p>
      </div>
      <p className="text-gray-500 text-base font-semibold">{`Result: ${answerOfUser.question.answerCorrect}`}</p>
    </div>
  );
}
