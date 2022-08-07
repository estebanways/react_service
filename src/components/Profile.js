
import React from "react";
import useUser from "../hooks/useUser";

export default function Profile() {
  const user = useUser();
  return (
    <div>
      <h1>{user.name[0]}</h1>
      <button onClick={() => {user.name[1]('hola')}}>Change Name</button>
    </div>
  );
}