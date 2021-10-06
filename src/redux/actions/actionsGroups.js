import { getFiguresGroupsAll } from "../../utils/customFetch";
import { setUserlog } from "../slices/authLoginUser";
import {
  getGroups,
  faildLoadGroups,
  clearGroupFigure,
} from "../slices/figuresGroup";

export const clearGroupFigureMethods = () => clearGroupFigure();
export const faildLoadGroupsmethod = () => faildLoadGroups();
export const setGroupFigures = (token) => (dispatch, getState) => {
  getFiguresGroupsAll(token).then((result) => {
    if (result.codeStatus) {
      console.log("fail load groups");
      dispatch(setUserlog());
      getState();
    } else {
      dispatch(getGroups(result.data));
      getState();
    }
  });
};
