import React, { useEffect } from "react";

export const DidUpadte = () => {
  useEffect(() => {
    console.log(
      "comportamiento cuando el componente recibe nuevas props o cambia su estado"
    );
  });
  // si no le pasamos dependencias al useEffect, se va a renderizar todo el tiempo que se actualice el estado
  // en cambio si le dejamos el [] vacio, estariamos indicando que se ejecuta una vez

  return (
    <div>
      <h1>didupdate</h1>
    </div>
  );
};
