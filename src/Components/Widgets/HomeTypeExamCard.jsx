import React from "react";

export function HomeTypeExamCard({ type }) {
  return (
    <div className="w-48 bg-rose-100 rounded-md drop-shadow-sm shadow-sm flex flex-col justify-center items-center px-4 py-5">
      <div className="bg-rose-300 rounded-full w-14 h-14 drop-shadow-sm shadow-sm items-center justify-center flex">
        <p className="text-white font-extrabold text-base">{type}</p>
      </div>
    </div>
  );
}
