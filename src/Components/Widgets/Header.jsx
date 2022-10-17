import md5 from "md5";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Authentication } from "../../Network/Authentication";
import { setUser, signOut } from "../../Redux/AuthenticationSlice";

export function Header() {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const [dropdownAvatarMenuOpen, setDropdownAvatarMenuOpen] =
    React.useState(false);

  React.useEffect(() => {
    const accessToken = Authentication.getAccessToken();
    if (accessToken) {
      Authentication.refreshStateUser(accessToken).then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            dispatch(setUser(user));
          });
        } else {
          dispatch(signOut());
        }
      });
    }
  }, [dispatch]);

  return (
    <header className="sticky top-0 right-0 left-0 w-full h-16 bg-rose-100 flex justify-center items-center">
      <main className="lg:w-lg w-full justify-between flex flex-row px-4">
        <div></div>
        <nav>
          {(() => {
            if (!user) {
              return (
                <a
                  href="/login"
                  className="px-8 py-3 bg-rose-400 rounded-md text-white font-bold text-base hover:ring-4 hover:ring-rose-300 focus:ring-rose-300 focus:right-4 drop-shadow-sm shadow-sm duration-300 transition-all"
                >
                  Login
                </a>
              );
            } else {
              return (
                <React.Fragment>
                  <button
                    className="flex flex-row justify-center items-center space-x-4 bg-rose-400 shadow-sm drop-shadow-sm px-3.5 py-1.5 rounded-md hover:ring-4 hover:ring-rose-300 focus:ring-4 focus:ring-rose-300 duration-300 transition-all"
                    onClick={() => {
                      setDropdownAvatarMenuOpen(!dropdownAvatarMenuOpen);
                    }}
                    onBlur={() => {
                      setDropdownAvatarMenuOpen(false);
                    }}
                  >
                    <img
                      alt="Avatar"
                      src={`https://www.gravatar.com/avatar/${md5(
                        user.email
                      )}?d=identicon&f=y`}
                      className="w-8 h-8 rounded-full shadow-sm drop-shadow-sm ring-2 ring-rose-100"
                    />
                    <i
                      className={`fa-sharp fa-solid ${
                        dropdownAvatarMenuOpen ? "fa-caret-up" : "fa-caret-down"
                      } text-white duration-300 transition-all`}
                    ></i>
                    <div
                      className={`absolute top-12 right-0 bg-white shadow-md rounded-md w-64 duration-300 transition-all ${
                        dropdownAvatarMenuOpen ? "flex flex-col" : "hidden"
                      }`}
                    >
                      <a
                        href="/"
                        className="w-full border-b border-rose-300 text-start px-4 py-2 block hover:bg-rose-50 duration-300 transition-all"
                      >
                        <p className="text-gray-700 text-base font-semibold">
                          {user.name ?? "Guest"}
                        </p>
                        <p className="text-rose-300 text-sm font-semibold">{`@${user.username}`}</p>
                      </a>
                      <a
                        href="/"
                        className="w-full text-start px-4 py-2 block text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                      >
                        Edit profile
                      </a>
                      <a
                        href="/exam"
                        className="w-full text-start px-4 py-2 block text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                      >
                        Exam manager
                      </a>
                      <span
                        className="w-full text-start px-4 py-2 text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                        onClick={(event) => {
                          dispatch(signOut());
                        }}
                      >
                        Sign out
                      </span>
                    </div>
                  </button>
                </React.Fragment>
              );
            }
          })()}
        </nav>
      </main>
    </header>
  );
}
