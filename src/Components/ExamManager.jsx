import { Paper, TableContainer } from "@mui/material";
// import md5 from "md5";
import React from "react";
// import { useSelector } from "react-redux";

export const ExamManager = () => {
  // const user = useSelector((state) => state.authentication.user);

  return (
    <React.Fragment>
      <section className="w-full flex justify-center">
        <main className="lg:w-lg w-full flex flex-row justify-start items-start my-4">
          {/* <div className="w-80 flex flex-col justify-center items-center py-4">
            <div className="w-72 flex flex-col items-center">
              {(() => {
                if (user) {
                  return (
                    <React.Fragment>
                      <a href="/edit-profile">
                        <img
                          alt="Avatar"
                          src={`https://www.gravatar.com/avatar/${md5(
                            user.email
                          )}?d=identicon&f=y`}
                          className="w-72 h-72 rounded-full shadow-sm drop-shadow-sm ring-4 ring-gray-300"
                        />
                      </a>
                    </React.Fragment>
                  );
                }
              })()}
            </div>
            <div className="w-72 flex flex-col items-start my-4 px-4">
              <p className="text-gray-500 text-xl font-bold">{`${user.username}`}</p>
            </div>
          </div>
          <div className="w-full px-4 my-4">{
            
          }</div> */}
          <TableContainer component={Paper}></TableContainer>
        </main>
      </section>
    </React.Fragment>
  );
};
