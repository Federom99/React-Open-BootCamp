import React, { useState } from "react";
import { Child } from "../child";

export const Father = () => {
  const [name, setName] = useState("Fede");

  function showMessage(text) {
    alert(`mensaje recibido ${text}`);
  }

  function updateName(newName) {
    setName(newName);
  }

  return (
    <div style={{ background: "tomato", padding: "10px" }}>
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  );
};
