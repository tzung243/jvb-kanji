import md5 from "md5";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Authentication } from "../../Network/Authentication";
import { setUser, signOut } from "../../Redux/AuthenticationSlice";

export function Header() {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <header className="z-50 sticky top-0 right-0 left-0 w-full h-16 bg-rose-100 flex justify-center items-center">
      <main className="lg:w-lg w-full justify-between items-center flex flex-row px-4">
        <a
          className="flex flex-row justify-center items-end space-x-1"
          href="/"
        >
          <p className="text-rose-400 text-3xl font-bold">Chip</p>
          <p className="text-rose-300 text-xl font-semibold">Chip</p>
        </a>
        <nav className="flex flex-row justify-center items-center">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="px-4"
          >
            <i className="fa-solid fa-house text-rose-400 text-xl"></i>
          </button>
          {(() => {
            if (!user) {
              return (
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="px-8 py-3 bg-rose-400 rounded-md text-white font-bold text-base hover:ring-4 hover:ring-rose-300 focus:ring-rose-300 focus:right-4 drop-shadow-sm shadow-sm duration-300 transition-all"
                >
                  Login
                </button>
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
                    // onFocus={() => {
                    //   setDropdownAvatarMenuOpen(true);
                    // }}
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
                      } py-2`}
                    >
                      <span
                        onClick={() => {
                          navigate("/edit-profile");
                        }}
                        className="w-full border-b border-rose-300 text-start px-4 py-2 block hover:bg-rose-50 duration-300 transition-all"
                      >
                        <p className="text-gray-700 text-base font-semibold">
                          {user.name ?? "Guest"}
                        </p>
                        <p className="text-rose-300 text-sm font-semibold">{`@${user.username}`}</p>
                      </span>
                      <span
                        className="w-full text-start px-4 py-2 text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                        onClick={() => {
                          navigate("/exam");
                        }}
                      >
                        Exam Manager
                      </span>
                      <span
                        className="w-full text-start px-4 py-2 text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                        onClick={() => {
                          window.location.href = "https://flashcard.hamic.org";
                          // navigate("/vocabulary");
                        }}
                      >
                        Vocabulary
                      </span>
                      <span
                        className="w-full text-start px-4 py-2 text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                        onClick={() => {
                          window.location.href = "https://blog.hamic.org";
                          // navigate("/blog");
                        }}
                      >
                        Blog
                      </span>
                      <span
                        className="w-full text-start px-4 py-2 text-gray-500 text-sm font-semibold hover:bg-rose-50 duration-300 transition-all"
                        onClick={() => {
                          dispatch(signOut());
                          navigate("/login");
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
