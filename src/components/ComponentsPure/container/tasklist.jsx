import React from "react";
import { Task } from "../../../models/class";
import { LEVELS } from "../../../models/levels";
import Taskk from "../task";

export default function TaskList(){

    const defaultTask = new Task("example", "default", false, LEVELS.normal)

    return(
        <div>

      <div>
        your task: 
      </div>

            <Taskk props={defaultTask} ></Taskk>

        </div>
    )
}