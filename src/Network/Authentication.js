import { getApiUrl } from "../Utils/Config/getApiUrl";

const AUTHENTICATION_STORAGE_KEY = {
  JWT_TOKEN: "jwt_token",
};

export const Authentication = {
  /**
   * Login local with identify & password
   * @param {{identify: string, password: string}} certificate
   */
  async loginWithIdentify(
    { identifier, password },
    success,
    failure,
    completed
  ) {
    return window
      .fetch(`${getApiUrl()}/api/auth/local`, {
        method: "POST",
        body: JSON.stringify({ identifier, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            /**
             * @type {{user: User}}
             */
            const { jwt, user } = json;
            // Save JWT
            window.localStorage.setItem(
              AUTHENTICATION_STORAGE_KEY.JWT_TOKEN,
              jwt
            );
            success(user);
          } else {
            failure(json);
          }
          completed();
        });
      });
  },

  /**
   * Sign out system use remove key JWT reload token
   * @return {void}
   * @param {() => void} callback
   */
  signOut(callback) {
    window.localStorage.removeItem(AUTHENTICATION_STORAGE_KEY.JWT_TOKEN);
    callback();
  },

  /**
   * Sign up with username (Example: tzung2403), password, email
   * @param {{username: string, password: string, email: string}} certificate
   */
  async signUpWithCertificate(
    { username, password, email },
    success,
    failure,
    completed
  ) {
    /**
     *
     */
    return window
      .fetch(`${getApiUrl()}/api/auth/local/register`, {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        response.json().then((json) => {
          if (response.ok) {
            /**
             * @type {{user: User}}
             */
            const { user } = json;
            success(user);
          } else {
            failure(json);
          }
          completed();
        });
      });
  },
  async refreshStateUser(accessToken) {
    return window.fetch(`${getApiUrl()}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "GET",
    });
  },
  /**
   * @returns {string}
   */
  getAccessToken() {
    return window.localStorage.getItem(AUTHENTICATION_STORAGE_KEY.JWT_TOKEN);
  },
};
