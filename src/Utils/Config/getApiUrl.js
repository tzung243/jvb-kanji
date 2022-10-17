/**
 * @return {string}
 */
export const getApiUrl = () => {
  return process.env.REACT_APP_API_URL ?? "http://localhost:1337";
};
