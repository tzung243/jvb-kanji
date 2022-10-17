/**
 * @return {string}
 */
export const getApiUrl = (environment = "production") => {
  if (environment === "production") {
    return "https://jvb-kanji-server.herokuapp.com/"
  }     
  return "http://localhost:1337/";
};
