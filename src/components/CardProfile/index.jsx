import React from "react";
import { UserSolid, UsersSolid, CodeIcon, RolIcon, Calendar } from "../Icons";

import pelota from "../../assets/svg/pelota.svg";
import "./cardprofile.scss";
export default function CardProfile({
  name,
  lastname,
  nickname,
  rol,
  dateCreation,
}) {
  const newDate = new Date(dateCreation);
  const stringDate = `${newDate.getDay()} ${listMoth(
    newDate.getMonth() + 1
  )} ${newDate.getFullYear()}`;
  return (
    <div className="o-container-card">
      {/*info user */}
      <div className="o-container-card__info">
        {/*name */}
        <div className="o-info-item">
          <div className="o-info-item__content">
            <UserSolid className="o-icon-info" />
            <div className="o-info-item__text-list">
              <h4>Nombre</h4>
              <h3>{name}</h3>
            </div>
          </div>
        </div>
        {/*lastname */}
        <div className="o-info-item">
          <div className="o-info-item__content">
            <UsersSolid className="o-icon-info" />
            <div className="o-info-item__text-list">
              <h4>Apellido </h4>
              <h3>{lastname}</h3>
            </div>
          </div>
        </div>
        {/*nickname */}
        <div className="o-info-item">
          <div className="o-info-item__content">
            <CodeIcon className="o-icon-info" />
            <div className="o-info-item__text-list">
              <h4>Nombre del usuario </h4>
              <h3>{nickname}</h3>
            </div>
          </div>
        </div>
        {/*rol */}
        <div className="o-info-item">
          <div className="o-info-item__content">
            <RolIcon className="o-icon-info" />
            <div className="o-info-item__text-list">
              <h4>Rol</h4>
              <h3>{rol}</h3>
            </div>
          </div>
        </div>
        {/*date creation*/}
        <div className="o-info-item">
          <div className="o-info-item__content">
            <Calendar className="o-icon-info" />
            <div className="o-info-item__text-list">
              <h4>Fecha de creacion</h4>
              <h3>{stringDate}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="o-container-card__image">
        <div className="o-containet-image">
          <img src={pelota} alt="profile" />
        </div>
      </div>
    </div>
  );
}

function listMoth(position) {
  const list = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return list[position];
}
