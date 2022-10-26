import React from "react";
import UndrawForgotPassword from "../Assets/UndrawForgotPassword.svg";

export function RecoveryPassword() {
  const emailRef = React.useRef();

  return (
    <div className="flex flex-col justify-center items-center space-y-2  md:py-48 sm:py-32 py-24">
      <img src={UndrawForgotPassword} alt="" srcSet="" className="w-96" />
      <div className="w-96 my-10">
        <p className="text-gray-700 text-3xl font-extrabold">
          Forgot <br /> Password
        </p>
        <p className="text-gray-600 text-base font-medium py-2">
          Don't worry! It happens. Please enter the address associated with your
          account
        </p>
      </div>
      <form className="kanji__form__container">
        <input
          type="email"
          required
          ref={emailRef}
          className="kanji__input__field"
          placeholder="Recovery Email"
        />
        <button type="submit" className="kanji__button__submit ">
          Submit
        </button>
      </form>
      <a href="/login" className="kanji__link__form__container">
        <i className="fa-solid fa-arrow-left mr-2.5 mt-4"></i>Back
      </a>
    </div>
  );
}
