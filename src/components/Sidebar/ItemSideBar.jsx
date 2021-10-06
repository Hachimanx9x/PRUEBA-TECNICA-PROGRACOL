import React from "react";
import { useHistory } from "react-router-dom";
export default function ItemSideBar({ to, text, icon }) {
  let history = useHistory();
  const SVGIcon = icon;
  return (
    <div
      className="o-container-item-sidebar"
      onClick={() => {
        history.push(to);
      }}
    >
      <SVGIcon className="o-container-item-sidebar__icon" />
      <div className="o-container-item-sidebar__text">{text}</div>
    </div>
  );
}
