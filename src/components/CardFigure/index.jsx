import React from "react";
import { XIcon } from "../Icons";
import { useDispatch } from "react-redux";
import { deleteFigureMethod } from "../../redux";
import "./cardfigure.scss";
export default function CardFigure({ id, name, positions }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    console.log("delete");

    if (id !== 0 && id !== undefined && name !== "" && name !== undefined) {
      console.log(id);
      console.log(name);
      dispatch(deleteFigureMethod({ id, name }));
    }
  };
  if (id) {
    return (
      <div className="o-card-figure-container">
        <div className="o-card-figure-container__content">
          {/*title */}
          <div className="o-card-figure-container__content__title">
            {name}{" "}
            <div onClick={onDelete} className="o-click">
              <XIcon className="o-icon" />
            </div>
          </div>
          {/*figure */}
          <div className="o-card-figure-container__content__figures">
            {positions?.map((ele, id) => (
              <div
                key={id}
                className={`o-figure ${
                  ele ? "o-figure-active" : "o-figure-default"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return "";
}
