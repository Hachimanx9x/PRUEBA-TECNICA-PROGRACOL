import React from "react";
import { ArrowLeft, PlusIcon } from "../Icons";
import "./buttonBack.scss";
export default function Buttonback({ type = "back", tohistory }) {
  return (
    <button className="o-button-back" onClick={tohistory}>
      {type === "back" ? (
        <ArrowLeft className="o-icon-back " />
      ) : (
        <PlusIcon className="o-icon-back" />
      )}
    </button>
  );
}
