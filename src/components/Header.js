
import React from "react";
import useUser from "../hooks/useUser";

export default function Header() {
  const user = useUser();
  return (
    <div>
      <h1>{user.name[0]}</h1>
    </div>
  );
}