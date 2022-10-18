import React from "react";
import { useExamManager } from "../Hooks/useExamManager";
import UndrawStripPayments from "../Assets/UndrawStripPayments.svg";

export function ExamManager() {
  const exams = useExamManager();
  return (
    <section className="w-full flex justify-center">
      <main className="lg:w-lg w-full flex flex-col space-y-4 justify-center items-center my-4">
        <img src={UndrawStripPayments} alt="" className="w-96" />
        <p className="py-3 font-bold text-3xl text-gray-500">
          All exam of User
        </p>
        {exams.map((exams, index) => {
          return (
            <div
              key={exams.id}
              className="w-96 bg-rose-100 rounded-md shadow-sm drop-shadow-sm p-5"
            >
              <div className="flex flex-row justify-between border-b border-rose-300 pb-4">
                <p className="text-base font-bold text-gray-700">{index + 1}</p>
                <p className="text-white px-3 py-1 rounded-md shadow-sm drop-shadow-sm bg-rose-300 text-sm font-bold">
                  {(() => {
                    if (exams.status === "IN_PROGRESS") {
                      return "In progress";
                    } else if (exams.status === "DONE") {
                      return "Done";
                    }
                    return "Draft";
                  })()}
                </p>
              </div>
              <div className="flex flex-row "></div>
            </div>
          );
        })}
      </main>
    </section>
  );
}
