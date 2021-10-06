import React from "react";
import { useHistory } from "react-router-dom";
import { MenuIcons } from "../Icons";
import "./navbar.scss";

import MenuUser from "./MenuUser";
export default function Navbar() {
  let history = useHistory();
  return (
    <div className="o-navbar">
      <div className="o-navbar__content">
        <div className="o-info-app">
          <button>
            <MenuIcons className="o-icon-width o-icon-white" />
          </button>
          <div
            onClick={() => {
              history.push("/");
            }}
          >
            SALA Verano 22
          </div>
        </div>
        <MenuUser />
      </div>
    </div>
  );
}
