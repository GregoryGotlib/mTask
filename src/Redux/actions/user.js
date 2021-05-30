import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuth from "../../Utils/setAuth";

export const regUser = (data) => (dispatch) => {
  axios
    .post("/api/users/register", data)
    .then((res) => {
      console.log("good", res);
      window.location.href = "/login";
    })
    .catch((error) => {
      dispatch({
        type: "ERRORS",
        payload: error.response.data,
      });
    });
};

export const logUser = (data, history) => (dispatch) => {
  axios
    .post("/api/users/login", data)
    .then((res) => {
      const auth_token = res.data.token;

      //Set token to local storage
      localStorage.setItem("userToken", auth_token);

      //Set token to auth
      setAuth(auth_token);

      //Decode token
      const decoded_token = jwt_decode(auth_token);

      //Set decoded user
      dispatch(setDecodedUser(decoded_token));
      window.location.href = "/home";
    })
    .catch((error) => {
      dispatch({
        type: "ERRORS",
        payload: error.response.data,
      });
    });
};

// Remove user token
export const logOutUser = () => (dispatch) => {
  // Remove user token
  localStorage.removeItem("userToken");
  // Remove user auth
  setAuth(false);
  // Delete user
  dispatch(setDecodedUser({}));
  window.location.href = "/";
};

// Set user token
export const setDecodedUser = (decoded_token) => {
  return {
    type: "DECODED_USER",
    payload: decoded_token,
  };
};
