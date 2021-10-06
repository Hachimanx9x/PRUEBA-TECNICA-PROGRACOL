import store from "./store";
import {
  authLoginUser,
  authLogoutUser,
  getInfoUser,
} from "./actions/authLogin";
import { clearfiguresMethod, getfiguresMethod } from "./actions/actionsfigures";
import { setGroupFigures } from "./actions/actionsGroups";
import { selectAuthUser } from "./slices/authLoginUser";
export {
  authLoginUser,
  authLogoutUser,
  selectAuthUser,
  getInfoUser,
  clearfiguresMethod,
  getfiguresMethod,
  setGroupFigures,
};
export default store;
