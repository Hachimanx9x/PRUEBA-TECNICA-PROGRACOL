import React from "react";
import { XIcon } from "../Icons";
import "./cardfigure.scss";
export default function CardFigure({ id, name, positions }) {
  return (
    <div className="o-card-figure-container">
      <div className="o-card-figure-container__content">
        {/*title */}
        <div className="o-card-figure-container__content__title">
          {name} <XIcon className="o-icon" />{" "}
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
