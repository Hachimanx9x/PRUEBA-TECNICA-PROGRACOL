import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getfiguresMethod, setGroupFigures } from "../../redux";

//components generals

import CardFigure from "../../components/CardFigure";
//internal components
import Container from "./Container";
//styles
import "./figures.scss";
export default function Figures() {
  const { allfigures } = useSelector((state) => state.getfigures);
  const { allgroups } = useSelector((state) => state.getGroups);
  const { user, userlog } = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.Authorization !== "") {
      dispatch(getfiguresMethod(user.Authorization));
      dispatch(setGroupFigures(user.Authorization));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (userlog === "error") {
    history.push("/");
  }
  // console.log(allfigures);
  //console.log(allgroups);

  return (
    <div className="o-container-figures">
      <Container text="Lista con Figuras">
        {allfigures?.map((ele) => (
          <CardFigure
            key={`cardfig${ele.id}`}
            id={ele.id}
            name={ele.name}
            positions={ele.positions}
          />
        ))}
      </Container>
    </div>
  );
}
