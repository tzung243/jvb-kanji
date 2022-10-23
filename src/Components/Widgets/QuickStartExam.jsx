import React from "react";
import UndrawReadingTime from "../../Assets/UndrawReadingTime.svg";
import { HomeTypeExamCard } from "./HomeTypeExamCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Exam } from "../../Network/Exam";
import { Alert, AlertTitle } from "@mui/material";
import styles from "./QuickStartExam.module.css";

export function QuickStartExam() {
  const [type, setType] = React.useState("N2");
  const user = useSelector((state) => state.authentication.user);
  const navigate = useNavigate();
  const [executing, setExecuting] = React.useState(false);
  const [alert, setAlert] = React.useState();
  return (
    <section className="w-full flex justify-center">
      <main className="lg:w-lg w-full flex flex-col space-y-4 justify-center items-center">
        <form
          className="flex flex-col justify-center items-center w-full"
          onChange={(event) => {
            setType(event.target.value);
          }}
          onSubmit={(event) => {
            event.preventDefault();
            if (user) {
              setExecuting(true)
              Exam.generate({
                length: 40,
                quickstart: true,
                type,
              }).then((response) => {
                response.json().then((json) => {
                  if (response.ok) {
                    setAlert({
                      title: "Success",
                      content: "Generate success! Redirecting...",
                      severity: "success",
                    });
                    const timeOut = setTimeout(() => {
                      setExecuting(false);
                      navigate(
                        `/exam/testing/${json.data.id}/${json.data.questions[0].id}`,
                        {
                          preventScrollReset: true,
                        }
                      );
                      clearTimeout(timeOut);
                    }, 1000);
                    console.log("Redirecting...");
                  } else {
                    setAlert({
                      title: "Error",
                      content: json.error.message,
                      severity: "error",
                    });
                    setExecuting(false);
                  }
                });
              });
            } else {
              navigate("/login");
            }
          }}
        >
          <img
            src={UndrawReadingTime}
            alt=""
            srcSet=""
            className="w-96 my-10"
          />
          <h1 className="text-3xl font-bold text-gray-700">Quick Start</h1>
          <p className="text-base font-light text-gray-500 w-96 text-center my-4">
            Get started right away by choosing the type of question you want to
            practice on
          </p>
          {(() => {
            if (alert) {
              return (
                <Alert
                  severity={alert.severity}
                  onClose={() => {
                    setAlert(null);
                  }}
                  className="w-96 mb-4"
                >
                  <AlertTitle>{alert.title}</AlertTitle>
                  {alert.content}
                </Alert>
              );
            }
          })()}
          <div className="flex flex-row space-x-5">
            <div className="flex flex-col justify-center items-center space-y-5">
              <HomeTypeExamCard type="N2" />
              <input
                type="radio"
                value={"N2"}
                name="type"
                defaultChecked
                className="accent-green-600 w-5 h-5 duration-300 transition-all"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <HomeTypeExamCard type="N3" />
              <input
                type="radio"
                value={"N3"}
                name="type"
                className="accent-green-600 w-5 h-5 duration-300 transition-all"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <HomeTypeExamCard type="N4" />
              <input
                type="radio"
                value={"N4"}
                name="type"
                className="accent-green-600 w-5 h-5 duration-300 transition-all"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <HomeTypeExamCard type="N5" />
              <input
                type="radio"
                value={"N5"}
                name="type"
                className="accent-green-600 w-5 h-5 duration-300 transition-all disabled:accent-gray-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className={styles["button--quickstart"]}
            disabled={executing}
          >
            Start now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </main>
    </section>
  );
}
