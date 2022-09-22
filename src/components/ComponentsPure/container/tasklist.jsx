import React, { useState, useEffect } from "react";
import { Task } from "../../../models/class";
import { LEVELS } from "../../../models/levels";
import { TaskForm } from "../forms/taskform";
import Taskk from "../task";

export default function TaskList() {
  const defaultTask = new Task("example", "description", true, LEVELS.normal);
  const defaultTask2 = new Task(
    "example2",
    "description2",
    false,
    LEVELS.urgente
  );
  const defaultTask3 = new Task(
    "example3",
    "description3",
    false,
    LEVELS.bloqueante
  );

  const [state, setState] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("tarea modificada");
    setLoading(false);
    return () => {
      console.log("tarea por desaparecer");
    };
  }, [state]);

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5> Your Task: </h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Level</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.map((props, index) => {
                  return <Taskk key={index} props={props}></Taskk>;
                })}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
}
