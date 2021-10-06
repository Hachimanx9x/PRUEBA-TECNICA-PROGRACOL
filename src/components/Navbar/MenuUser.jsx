import React, { useState, useRef, useEffect, createRef } from "react";
import { UserIcon, UserCircle, IconBrush, IconLogout } from "../Icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authLogoutUser } from "../../redux";
import "./navbar.scss";

export default function MenuUser() {
  const [visible, setVisible] = useState(false);

  const user = useSelector((state) => state.authUser.InfoUser);
  const buttonRef = createRef();
  let history = useHistory();

  const dispatch = useDispatch();
  const onclickVisible = () => {
    setVisible(!visible);
  };

  const toProfile = () => {
    history.push("/profile");
  };
  const toTopics = () => {
    history.push("/topics");
  };
  const logOut = () => {
    dispatch(authLogoutUser());
  };

  //onClick={onclickVisible}
  return (
    <div className="o-dropdowMenu">
      <div>
        <button ref={buttonRef} onClick={onclickVisible}>
          <UserIcon className="o-icon-width o-icon-white" />
        </button>
        <div
          className={`o-dropdowMenu__default   ${
            visible ? "o-dropdowMenu__visible" : "o-dropdowMenu__no-visible"
          }`}
        >
          <div className="o-tilte">
            {user.name} {user.lastname}
          </div>

          <div className="o-item-menu" onClick={toProfile}>
            <UserCircle className="o-icon-width o-icon-grey " />{" "}
            <span>Perfil</span>
          </div>
          <div className="o-item-menu" onClick={toTopics}>
            <IconBrush className="o-icon-width o-icon-grey " />{" "}
            <span>Temas</span>
          </div>
          <div className="o-item-menu" onClick={logOut}>
            <IconLogout className="o-icon-width o-icon-grey " />{" "}
            <span>Cerrar sesión</span>
          </div>
        </div>
      </div>
    </div>
  );
}
