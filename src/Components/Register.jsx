import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import UndrawMyPassword from "../Assets/UndrawMyPassword.svg";
import { Authentication } from "../Network/Authentication";

export function Register() {
  const usernameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [alert, setAlert] = React.useState();
  const [executing, setExecuting] = React.useState(false);

  React.useEffect(() => {
    document.title = "CHIP CHIP - Register an account";
  });

  return (
    <div className="flex flex-col md:py-48 sm:py-32 py-24 justify-center items-center">
      <div className="flex flex-row space-x-4">
        <form
          className="kanji__form__container"
          onSubmit={(event) => {
            event.preventDefault();
            setExecuting(true);
            Authentication.signUpWithCertificate(
              {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
              },
              () => {
                setAlert({
                  title: "Success",
                  content: (() => {
                    return (
                      <p>
                        Back to
                        <a href="/login" className="text-green-600 px-1">
                          Login
                        </a>
                      </p>
                    );
                  })(),
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
        >
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
          <div className="w-96">
            <p className="text-gray-700 text-3xl font-bold">
              Create an account
            </p>
          </div>
          <input
            type="text"
            name="username"
            ref={usernameRef}
            required
            className="kanji__input__field"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
            className="kanji__input__field"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            ref={passwordRef}
            required
            placeholder="Password"
            className="kanji__input__field"
          />
          <p className="font-bold text-gray-700">
            Joined us before?
            <a href="/login" className="kanji__link__form__container ml-1">
              Login
            </a>
          </p>
          <button
            type="submit"
            className="kanji__button__submit"
            disabled={executing}
          >
            Create account
          </button>
        </form>
        <img
          src={UndrawMyPassword}
          alt=""
          srcSet=""
          className="w-96 lg:block hidden"
        />
      </div>
    </div>
  );
}
