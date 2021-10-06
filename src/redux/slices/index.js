import { combineReducers } from "@reduxjs/toolkit";
import authLoginUser from "./authLoginUser";
import figuresGetSet from "./figuresGetSet";
import figuresGroup from "./figuresGroup";
export default combineReducers({
  authUser: authLoginUser,
  getfigures: figuresGetSet,
  getGroups: figuresGroup,
});
