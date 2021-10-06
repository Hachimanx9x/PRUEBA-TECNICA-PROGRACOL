import React from "react";
import { useSelector } from "react-redux";

export default function Desktop() {
  const { user, InfoUser } = useSelector((state) => state.authUser);

  return (
    <div>
      hola desde desktop {user.name} {InfoUser.name}
    </div>
  );
}
