import React from "react";
import UndrawEmptyStreet from "../Assets/UndrawEmptyStreet.svg";

export const NotFound = () => {
  return (
    <React.Fragment>
      <section className="w-full flex justify-center items-center">
        <main className="lg:w-lg w-full justify-between flex flex-col items-center py-12 px-6">
          <img src={UndrawEmptyStreet} alt="404 - Not Found" />
          <div className="flex flex-row justify-center items-end mt-14">
            <p className="text-7xl text-gray-600 font-bold">404</p>
            <p className="text-3xl text-gray-400 font-medium pl-4">
              Not Found Page
            </p>
          </div>
          <a
            href="/"
            className="mt-6 mb-12 bg-gray-700 text-white py-3 px-6 shadow-sm drop-shadow-sm rounded-md font-bold hover:ring-4 hover:ring-gray-400 duration-300 transition-all"
          >
            Go to Home <i className="fa-solid fa-arrow-right"></i>
          </a>
        </main>
      </section>
    </React.Fragment>
  );
};
