import React from "react";
import Buttonback from "../../components/ButtonBack";
import { useHistory } from "react-router-dom";
//styles
import "./figures.scss";
export default function Container({ children, text }) {
  let history = useHistory();
  return (
    <div className="o-container-basic-figures">
      <div className="o-container-basic-figures__top-bar">
        <div className="o-container-basic-figures__top-bar__button">{text}</div>
      </div>

      <div className="o-container-basic-figures__menu-options">
        <Buttonback
          type="plus"
          tohistory={() => {
            history.push("/figures/new");
          }}
        />
      </div>
      <div className="o-container-basic-figures__list-figures">{children}</div>
    </div>
  );
}
