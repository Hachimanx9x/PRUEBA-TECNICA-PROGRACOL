import { getFiguresAll } from "../../utils/customFetch";
import {
  getfigures,
  faildLoad,
  clearfigures,
  deleteFigure,
} from "../slices/figuresGetSet";
import { setUserlog } from "../slices/authLoginUser";

export const clearfiguresMethod = () => clearfigures();
export const deleteFigureMethod = ({ name, id }) => {
  console.log({ name, id });

  return deleteFigure({ name, id });
};
export const faildLoadFigures = () => faildLoad();
export const getfiguresMethod = (token) => (dispatch, getState) => {
  getFiguresAll(token).then((result) => {
    if (result.codeStatus) {
      console.log("fail load figures");
      dispatch(setUserlog());
      getState();
    } else {
      let newdata = result.data.map((ele) => ({
        id: ele.id,
        name: ele.name,
        positions: ele.positionsWinner,
      }));

      dispatch(getfigures(newdata));
      getState();
    }
  });
};
