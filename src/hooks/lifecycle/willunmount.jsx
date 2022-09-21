import React, { useEffect } from "react";

export const WillUnMount = () => {
  useEffect(() => {
    return () => {
      console.log("comportamiento antes que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>willunmount</h1>
    </div>
  );
};
