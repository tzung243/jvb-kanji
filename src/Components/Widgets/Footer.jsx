/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-700 flex justify-center items-center">
      <main className="lg:w-lg w-full justify-start flex flex-col p-4 items-center">
        <div className="w-full justify-between flex flex-row items-start">
          <div className="flex flex-col items-start justify-start space-y-4">
            <p className="font-bold text-2xl text-white border-dashed border-b-2 border-rose-400">
              Contact
            </p>
            <div className="flex flex-row justify-start items-center text-white space-x-4">
              <span className="flex justify-center items-center rounded-full w-8 h-8 bg-white">
                <i className="fa-solid fa-location-dot text-gray-500 text-lg"></i>
              </span>
              <div className="flex flex-col justify-start items-start">
                <p className="text-base font-semibold">Location</p>
                <p className="text-sm font-light">
                  334 Đ.Nguyễn Trãi, Thanh Xuân Trung, Thanh Xuân
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center text-white space-x-4">
              <span className="flex justify-center items-center rounded-full w-8 h-8 bg-white">
                <i className="fa-solid fa-envelope text-gray-500 text-lg"></i>
              </span>
              <div className="flex flex-col justify-start items-start">
                <p className="text-base font-semibold">Email</p>
                <a
                  className="text-sm font-light"
                  href="mailto:hamic@hus.edu.vn"
                >
                  CLB HAMIC
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center text-white space-x-4">
              <span className="flex justify-center items-center rounded-full w-8 h-8 bg-white">
                <i className="fa-solid fa-phone text-gray-500 text-lg"></i>
              </span>
              <div className="flex flex-col justify-start items-start">
                <p className="text-base font-semibold">Phone Number</p>
                <p className="text-sm font-light">
                  Ngô Phương Trang +8498 7292624
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <a
              href="https://www.facebook.com/hamictoantin"
              target={"_blank"}
              rel="noreferrer"
              className="text-white text-3xl"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <div className="w-80 flex flex-col items-start space-y-1">
              <p className="text-white font-light text-sm">Directions guide</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.67715690811!2d105.8079772!3d20.9958722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd740a66998e1a0ed!2sUniversity%20of%20Science%2C%20Vietnam%20National%20University%20Hanoi!5e0!3m2!1sen!2s!4v1666769441159!5m2!1sen!2s"
                width="600"
                height="450"
                className="border-0 rounded-md w-80 h-40"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}
