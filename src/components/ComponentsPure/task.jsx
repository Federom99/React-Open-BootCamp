import React from "react";
import { Task } from "../../models/class";

export default function Taskk({props}){
    return(
        <div>
            <h2>  name:{props.name} </h2>
            <h2>  description:{props.description} </h2>
            <h2>  level:{props.level} </h2>
            <h5> completed: {props.completed?"completada":"no completada"}  </h5>
        </div>
    )
}