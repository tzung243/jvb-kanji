import React from "react";

export const Vocabulary = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <main className="lg:w-lg w-full flex justify-center items-center">
        <div className="w-full px-4 py-12 flex flex-row justify-between items-center">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 text-5xl font-bold">Term</p>
            <p className="text-gray-400 text-2xl font-semibold">Definition</p>
          </div>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </section>
  );
};
