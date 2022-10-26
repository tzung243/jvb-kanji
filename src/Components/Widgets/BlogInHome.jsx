import React from "react";
import UndrawLearningSketching from "../../Assets/UndrawLearningSketching.svg";

export const BlogInHome = () => {
  return (
    <section className="w-full flex justify-center">
      <main className="lg:w-lg w-full flex flex-col space-y-12 justify-center items-center py-4">
        <p className="text-gray-700 font-bold text-3xl">Blog</p>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-4 space-x-2 items-center justify-center transition-all duration-300">
          <img src={UndrawLearningSketching} alt="" className="w-96" />
          <a
            href="https://blog.hamic.org/"
            className="w-16 h-16 bg-rose-400 duration-300 transition-all ring-4 ring-rose-200 hover:ring-rose-300 rounded-full justify-center items-center flex text-2xl text-white"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </main>
    </section>
  );
};
