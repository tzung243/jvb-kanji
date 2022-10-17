import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import UndrawWelcome from "../Assets/UndrawWelcome.svg";
import { Authentication } from "../Network/Authentication";

export function Login() {
  // Define ref
  const identifierRef = React.useRef();
  const passwordRef = React.useRef();

  const [alert, setAlert] = React.useState();
  const [executing, setExecuting] = React.useState(false);

  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <img src={UndrawWelcome} alt="" srcSet="" className="w-96 mr-8" />
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="w-96">
          <p className="text-gray-700 text-5xl font-extrabold">Welcome to</p>
          <p className="text-gray-700 text-3xl font-extrabold">KANJI</p>
        </div>
        {(() => {
          if (alert) {
            return (
              <Alert
                severity={alert.severity}
                onClose={() => {
                  setAlert(null);
                }}
                className="w-96"
              >
                <AlertTitle>{alert.title}</AlertTitle>
                {alert.content}
              </Alert>
            );
          }
        })()}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setExecuting(true);
            Authentication.loginWithIdentify(
              {
                identifier: identifierRef.current.value,
                password: passwordRef.current.value,
              },
              (user) => {
                setAlert({
                  title: "Success",
                  content: "Login success! Redirecting...",
                  severity: "success",
                });
              },
              (error) => {
                setAlert({
                  title: "Error",
                  content: error.error.message,
                  severity: "error",
                });
              },
              () => {
                setExecuting(false);
              }
            );
          }}
          className="kanji__form__container"
        >
          <input
            type="text"
            placeholder="Username/Email"
            name="identifier"
            ref={identifierRef}
            className="kanji__input__field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={passwordRef}
            className="kanji__input__field"
            required
          />
          <a href="/recovery-password" className="kanji__link__form__container">
            Forgot password?
          </a>
          <button
            type="submit"
            className="kanji__button__submit"
            disabled={executing}
          >
            Login
          </button>
          <p className="font-bold text-gray-700">
            Don't have an account yet?
            <a href="/register" className="kanji__link__form__container ml-1">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
