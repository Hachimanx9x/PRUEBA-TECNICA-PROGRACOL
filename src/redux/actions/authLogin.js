import { customFetchLogin, customFetchProfile } from "../../utils/customFetch";

import {
  loginUser,
  logout,
  setInfoUser,
  setUserlog,
} from "../slices/authLoginUser";

export const authLoginUser = ({ username, password }) => {
  return (dispatch, getState) => {
    customFetchLogin({ username, password }).then((resolve) => {
      dispatch(loginUser(resolve));
      getState();
    });
  };
};

export const getInfoUser = (token) => {
  return (dispatch, getState) => {
    customFetchProfile(token).then((result) => {
      if (result.codeStatus) {
        console.log(result.codeStatus);
        dispatch(setUserlog());
        getState();
      } else {
        const { data } = result;
        const Infodata = {
          name: data.names,
          lastname: data.lastNames,
          nickname: data.username,
          rol: data.rolDTO.name,
          dateCreation: data.createdAt,
        };

        dispatch(setInfoUser(Infodata));
        getState();
      }
    });
  };
};
export const authLogoutUser = () => {
  //  console.log("authLogoutUser");
  return logout();
};
