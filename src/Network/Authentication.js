import axios from "axios";
import { getApiUrl } from "../Utils/Config/getApiUrl";

const AUTHENTICATION_STORAGE_KEY = {
  JWT_TOKEN: "jvb.jwt_token",
};

export const Authentication = {
  callback(response, resolve) {
    const json = JSON.parse(response.data);
    /**
     * @type {{jwt: string, user: User}}
     */
    const { jwt, user } = json;
    // Save JWT
    localStorage.setItem(AUTHENTICATION_STORAGE_KEY, jwt);
    resolve(user);
  },
  /**
   * Login local with identify & password
   * @param {{identify: string, password: string}} certificate
   */
  async loginWithIdentify({ identifier, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${getApiUrl()}/api/auth/`)
        .then((response) => this.callback(response, resolve))
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Sign out system use remove key JWT reload token
   * @return {void}
   * @param {() => void} callback
   */
  signOut(callback) {
    localStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
    callback();
  },

  /**
   * Sign up with username (Example: tzung2403), password, email
   * @param {{username: string, password: string, email: string}} certificate
   */
  async signUpWithCertificate({ username, password, email }) {
    /**
     *
     */
    return new Promise((resolve, reject) => {
      axios
        .post(`${getApiUrl()}/api/auth/local/register`, {
          username,
          password,
          email,
        })
        .then((response) => this.callback(response, resolve))
        .catch((error) => {
          reject(error);
        });
    });
  },
  async isLogin() {
    return new Promise((resolve, reject) => {
      this.getAccessToken()
        .then((accessToken) => {
          axios
            .get(`${getApiUrl()}/api/users/me`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((response) => {
              const json = JSON.parse(response.data);
              resolve(json);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => reject(error));
    });
  },
  /**
   * @returns {Promise}
   */
  async getAccessToken() {
    return new Promise((resolve, reject) => {
      const jwt = localStorage.getItem(AUTHENTICATION_STORAGE_KEY);
      if (jwt) resolve(jwt);
      reject(Error("Not found JWT!"));
    });
  },
};
