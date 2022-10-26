import React from "react";
import UndrawLearningSketching from "../../Assets/UndrawLearningSketching.svg";

export const BlogInHome = () => {
  return (
    <section className="w-full flex justify-center">
      <main className="lg:w-lg w-full flex flex-col space-y-12 justify-center items-center py-4">
        <p className="text-gray-700 font-bold text-3xl">Blog</p>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <img src={UndrawLearningSketching} alt="" className="w-96" />
          <a
            href="/"
            className="w-16 h-16 bg-rose-400 duration-300 transition-all ring-4 ring-rose-200 hover:ring-rose-300 rounded-full justify-center items-center flex text-2xl text-white"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </main>
    </section>
  );
};
