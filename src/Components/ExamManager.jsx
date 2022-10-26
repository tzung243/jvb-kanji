/* eslint-disable eqeqeq */
// import md5 from "md5";
import React from "react";
import { Authentication } from "../Network/Authentication";
import { getApiUrl } from "../Utils/Config/getApiUrl";
// import { useSelector } from "react-redux";
import UndrawEmptyStreet from "../Assets/UndrawEmptyStreet.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import UndrawSmallTown from "../Assets/UndrawSmallTown.svg";

export const ExamManager = (props) => {
  // const user = useSelector((state) => state.authentication.user);

  const [searchParams, setSearchParams] = useSearchParams();

  const [exams, setExams] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    window
      .fetch(`${getApiUrl()}/api/exam/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Authentication.getAccessToken()}`,
        },
      })
      .then(async (response) => {
        if (response) {
          const json = await response.json();
          setExams(json.data);
        }
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full flex justify-center">
      <main className="lg:w-lg w-full flex flex-col justify-center items-center my-4 space-y-12 px-4 py-8">
        <p className="font-bold text-5xl text-gray-700">Exam Manager</p>
        {(() => {
          if (loading) {
            return (
              <div
                role="status"
                className="w-96 h-1/2 flex justify-center items-center"
              >
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin dark:text-rose-200 fill-rose-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
              </div>
            );
          } else {
            if (!exams || exams.length === 0) {
              return (
                <div className="flex flex-col justify-center items-center space-y-4">
                  <img src={UndrawEmptyStreet} alt="" className="w-96" />
                  <p className="text-gray-500 text-3xl font-bold">Empty</p>
                </div>
              );
            } else {
              const length = exams.length;
              const limit = 6;
              const pages = Math.ceil(length / limit);
              const page = parseInt(searchParams.get("page")) || 0;
              if (page > pages - 1) {
                return (
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={UndrawEmptyStreet} alt="" className="w-96" />
                    <p className="text-gray-500 text-3xl font-bold">Empty</p>
                  </div>
                );
              }
              return (
                <React.Fragment>
                  <img src={UndrawSmallTown} alt="" className="w-96" />
                  <div className="w-full flex flex-col space-y-12 justify-center items-center">
                    <div className="w-full grid grid-cols-2 gap-2">
                      {exams
                        .slice(page * limit, page * limit + limit)
                        .map((exam, index) => {
                          return (
                            <div
                              key={exam.id}
                              className="bg-white rounded-md shadow-md drop-shadow-md p-5 hover:ring-rose-300 hover:ring-4 duration-300 transition-all"
                            >
                              <div className="flex flex-row justify-between items-center border-b border-rose-300 pb-4">
                                <div className="flex flex-row justify-center items-center space-x-2">
                                  <p className="text-xl font-bold text-gray-600">
                                    {`${index + 1}. ${
                                      exam.label ?? `KANJI-${exam.id}`
                                    }`}
                                  </p>
                                  {exam.status == "DONE" ? (
                                    <p className="py-1 px-2 text-white bg-rose-400 rounded-md font-bold">{`${exam.score}/100`}</p>
                                  ) : (
                                    <React.Fragment></React.Fragment>
                                  )}
                                </div>
                                <p className="text-white px-3 py-1 rounded-md shadow-sm drop-shadow-sm bg-rose-300 text-base font-bold">
                                  {(() => {
                                    if (exam.status === "IN_PROGRESS") {
                                      return "In progress";
                                    } else if (exam.status === "DONE") {
                                      return "Done";
                                    }
                                    return "Draft";
                                  })()}
                                </p>
                              </div>
                              <div className="flex flex-row justify-between pt-2 items-center">
                                <p className="font-bold text-gray-400">
                                  {exam.type}
                                </p>
                                <button
                                  onClick={() => {
                                    if (exam.status === "IN_PROGRESS") {
                                      let index = 0;
                                      for (
                                        let counter = 0;
                                        counter < exam.questions.length;
                                        counter++
                                      ) {
                                        const answerOfUser =
                                          exam.questions[counter];
                                        if (!answerOfUser.answer) {
                                          index = counter;
                                          break;
                                        }
                                      }
                                      navigate(
                                        `/exam/testing/${exam.id}/${exam.questions[index].id}`
                                      );
                                    } else if (exam.status === "DONE") {
                                      navigate(`/exam/result/${exam.id}`);
                                    } else {
                                    }
                                  }}
                                  className="bg-rose-400 text-white w-8 h-8 rounded-md flex justify-center items-center drop-shadow-sm shadow-sm duration-300 transition-all hover:ring-rose-300 hover:ring-4"
                                >
                                  {(() => {
                                    if (exam.status == "DRAFT") {
                                      return (
                                        <i className="fa-regular fa-play"></i>
                                      );
                                    }
                                    return (
                                      <i className="fa-solid fa-arrow-right"></i>
                                    );
                                  })()}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                      <button
                        disabled={page <= 0}
                        className="text-white w-10 h-10 bg-rose-400 rounded-md hover:ring-4 ring-rose-300 duration-300 transition-all disabled:ring-gray-300 disabled:bg-gray-400"
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      {[...Array(pages).keys()].map((counter, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              navigate(`/exam?page=${counter}`);
                            }}
                            className={`w-10 h-10 rounded-md hover:ring-4 ring-rose-300 duration-300 transition-all font-bold ${
                              index == page
                                ? "bg-gray-500 text-white"
                                : "text-gray-500"
                            }`}
                          >
                            {counter}
                          </button>
                        );
                      })}
                      <button
                        disabled={page >= pages - 1}
                        className="text-white w-10 h-10 bg-rose-400 rounded-md hover:ring-4 ring-rose-300 duration-300 transition-all disabled:ring-gray-300 disabled:bg-gray-400"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          }
        })()}
      </main>
    </section>
  );
};
