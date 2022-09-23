import React, { useEffect } from "react";
import { Task } from "../../models/class";
import { LEVELS } from "../../models/levels";

export default function Taskk({ props, complete }) {
  useEffect(() => {
    console.log("tarea creada");
    return () => {
      console.log(`la tarea ${props.name} va a desaparecer`);
    };
  }, [props]);

  function taskLevelBadge() {
    switch (props.level) {
      case LEVELS.normal:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{props.level}</span>
          </h6>
        );
      case LEVELS.urgente:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{props.level}</span>
          </h6>
        );
      case LEVELS.bloqueante:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{props.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  function taskIcon(){
    if(props.completed){
        return(<i onClick={()=>complete(props)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>)
    }else{
        return(<i  onClick={()=>complete(props)} className="bi-toggle2-off task-action" style={{ color: "grey" }}></i>)
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{props.name}</span>
      </th>
      <td className="align-middle">
        <span>{props.description}</span>
      </td>
      <td className="align-middle">
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {taskIcon()}
        <i className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
}
