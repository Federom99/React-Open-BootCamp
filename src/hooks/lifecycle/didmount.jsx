import React, { useEffect } from "react";

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "comportamiento antes que el componente se añada al DOM(se renderice)"
    );
  }, []);

  return (
    <div>
      <h1>didmount</h1>
    </div>
  );
};
