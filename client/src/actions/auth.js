import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formdata, history) => async (dispatch) => {
  try {
    //Sign Up the user

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
