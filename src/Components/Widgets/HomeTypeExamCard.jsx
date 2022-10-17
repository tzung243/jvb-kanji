import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function HomeTypeExamCard({ type }) {
  const user = useSelector((state) => state.authentication.user);
  const navigate = useNavigate();
  
  return (
    <div className="w-48 bg-rose-300 rounded-md drop-shadow-sm shadow-sm flex flex-col justify-center items-center px-4 py-5">
      <button
        onClick={() => {
          if (user) {
          } else {
            navigate("/login");
          }
        }}
        className="text-white rounded-md bg-rose-500 w-32 py-1.5 text-sm font-medium drop-shadow-sm shadow-sm"
      >
        Start
      </button>
    </div>
  );
}
