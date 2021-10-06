import React from "react";
import { ArrowLeft } from "../../components/Icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./profile.scss";
import Buttonback from "../../components/ButtonBack";
import CardProfile from "../../components/CardProfile";
export default function Profile() {
  const { InfoUser } = useSelector((state) => state.authUser);
  const history = useHistory();
  return (
    <div className="o-container-profile">
      <div className="o-container-profile__top-bar">
        <Buttonback
          type="back"
          tohistory={() => {
            history.goBack();
          }}
        />
      </div>

      <CardProfile
        name={InfoUser.name}
        lastname={InfoUser.lastname}
        nickname={InfoUser.nickname}
        rol={InfoUser.rol}
        dateCreation={InfoUser.dateCreation}
      />
    </div>
  );
}
