import React, { useRef } from "react";

export const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pulsarBoton() {
    const text = messageRef.current.value;
    alert(`default ${text}`);
  }
  function pulsarBotonParams(texto) {
    alert(`texto: ${texto}`);
  }

  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ background: "cyan", padding: "30px" }}>
      <p onMouseOver={() => console.log("mouse over")}>Hello,{name}</p>
      <button onClick={() => console.log("boton 1 pulsado")}>Boton1</button>
      <button onClick={pulsarBoton}>Boton2</button>
      <button onClick={() => pulsarBotonParams("hola")}>Boton3</button>
      <input
        placeholder="send anothertext"
        onFocus={() => console.log("focus")}
        onChange={(e) => console.log("input cambiado", e.target.value)}
        onCopy={() => console.log("copy text")}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>
        send message
      </button>

      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitForm}>
          <input placeholder="new name" ref={nameRef} />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};
