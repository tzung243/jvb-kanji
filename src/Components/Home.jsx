import React from "react";
import UndrawReadingTime from "../Assets/UndrawReadingTime.svg";
import { HomeTypeExamCard } from "./Widgets/HomeTypeExamCard";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img src={UndrawReadingTime} alt="" srcSet="" className="w-96 my-10" />
      <div className="flex flex-row space-x-5">
        <HomeTypeExamCard type="N2" />
        <HomeTypeExamCard type="N3" />
        <HomeTypeExamCard type="N4" />
        <HomeTypeExamCard type="N5" />
      </div>
    </div>
  );
}
