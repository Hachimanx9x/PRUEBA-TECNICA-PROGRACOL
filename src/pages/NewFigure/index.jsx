import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Buttonback from "../../components/ButtonBack";
import { saveFigure } from "../../utils/customFetch";
import "./newfigure.scss";

const initialArray = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

export default function NewFigure() {
  const [nameNewFigure, setnameNewFigure] = useState("");
  const [selectGroup, setSelectGroup] = useState(0);
  const [selectElement, setSelectElement] = useState(initialArray);
  const [action, setAction] = useState(false);
  const { allgroups } = useSelector((state) => state.getGroups);
  const { user } = useSelector((state) => state.authUser);
  const history = useHistory();

  const onSelectGroup = (e) => {
    // console.log(e.currentTarget.value);
    setSelectGroup(e.currentTarget.value);
  };
  const updateSelect = (id) => {
    let tempArray = selectElement;
    //   console.log(id);
    if (id !== 12) {
      tempArray[id] = tempArray[id] ? false : true;
    }

    setSelectElement(tempArray);
  };
  const onChangeName = (e) => {
    setnameNewFigure(e.currentTarget.value);
  };
  const onSaveFigure = () => {
    if (selectGroup && nameNewFigure !== "") {
      saveFigure({
        token: user.Authorization,
        name: nameNewFigure,
        idgroup: selectGroup,
        positions: selectElement,
      }).then((result) => {
        setSelectElement(initialArray);
        setAction(!action);
        if (result.codeStatus) {
          history.push("/");
        }
        history.goBack();
      });
    }
  };
  useEffect(() => {
    // console.log(selectElement);
  }, [action]);
  return (
    <div className="o-container-new-figure">
      <div className="o-container-new-figure__content">
        {/*top-bar */}
        <div className="o-container-new-figure__content__top-bar">
          <Buttonback
            type="back"
            tohistory={() => {
              history.goBack();
            }}
          />
          <select
            className="o-container-new-figure__content__top-bar__select"
            onChange={onSelectGroup}
          >
            {allgroups.map((ele) => (
              <option
                className="o-container-new-figure__content__top-bar__select__option"
                key={ele.id}
                value={ele.id}
              >
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        {/*constructor*/}
        {selectGroup > 0 ? (
          <div className="o-container-new-figure__content__contructor-figure">
            {/*constructor--title*/}
            <div className="o-container-new-figure__content__contructor-figure__title">
              Añadir nueva figura
            </div>
            <div className="o-container-new-figure__content__contructor-figure__contructor">
              <div className="o-form__field">
                <input type="text" id="name" required onChange={onChangeName} />
                <label
                  htmlFor="name"
                  className={
                    nameNewFigure !== ""
                      ? "o-label-change"
                      : "o-label-color-normal"
                  }
                >
                  Nombre de la Figura
                </label>
              </div>
              <div className="o-form-constructor-figure">
                {selectElement.map((ele, id) => (
                  <div
                    key={id}
                    className={`o-figure ${
                      id === 12
                        ? "o-figure-block"
                        : ele
                        ? "o-figure-active"
                        : "o-figure-default"
                    }`}
                    onClick={() => {
                      updateSelect(id);
                      setAction(!action);
                    }}
                  />
                ))}
              </div>
              <div className="o-figure-save">
                <button
                  className={`o-figure-save__button ${
                    nameNewFigure !== ""
                      ? "o-figure-save__active"
                      : "o-figure-save__default"
                  }`}
                  onClick={onSaveFigure}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        ) : (
          true
        )}
      </div>
    </div>
  );
}
