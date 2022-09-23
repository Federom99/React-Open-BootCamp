import React, { useRef } from "react";
import { Task } from "../../../models/class";
import { LEVELS } from "../../../models/levels";

export const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levleRef = useRef(LEVELS.normal);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levleRef.current.value
    );
    add(newTask);
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Ttitle"
        />
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Description"
        />
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select  ref={levleRef} defaultValue={LEVELS.normal} id="selectLevel">
            <option value={LEVELS.normal}>
                Normal
            </option>
            <option value={LEVELS.bloqueante}>
            bloqueante
            </option>
            <option value={LEVELS.urgente}>
            urgente
            </option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2" >
        Add
      </button>
    </form>
  );
};


