import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemSideBar from "./ItemSideBar";
//redux
import { getInfoUser } from "../../redux";
//icons
import { Dashboard, FigureIcon } from "../Icons";
//img
import logo from "../../assets/png/logo.png";
import "./sidebar.scss";
export default function Sidebar() {
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.Authorization !== "") {
      dispatch(getInfoUser(user.Authorization));
    }
  }, [user]);
  return (
    <div className="o-container-sidebar">
      <div className="o-top-bar-side">
        <img src={logo} alt="logo" />
      </div>

      <div className="o-container-name">{user.name}</div>

      <div className="o-containe-sidebar-options">
        <ItemSideBar icon={Dashboard} to="/" text="Dashboard" />
        <ItemSideBar icon={Dashboard} to="/" text="Usuarios" />
        <ItemSideBar icon={Dashboard} to="/" text="Reyes" />
        <ItemSideBar icon={Dashboard} to="/" text="Acumulados" />
        <ItemSideBar icon={Dashboard} to="/" text="Catones y Modulos" />
        <ItemSideBar
          icon={FigureIcon}
          to="/figures"
          text="Figuras Y modalidades"
        />
        <ItemSideBar icon={Dashboard} to="/" text="Valores Unitarios" />
        <ItemSideBar icon={Dashboard} to="/" text="Tablets" />
      </div>
    </div>
  );
}
