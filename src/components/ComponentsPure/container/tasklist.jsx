import React, {useState, useEffect} from "react";
import { Task } from "../../../models/class";
import { LEVELS } from "../../../models/levels";
import Taskk from "../task";

export default function TaskList(){
  const defaultTask = new Task("example", "default", false, LEVELS.normal)

    const [state, setState]=useState([defaultTask])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
      console.log("tarea modificada")
      setLoading(false)
      return()=>{
        console.log("tarea por desaparecer")
      }
    },[state])

    

    return(
        <div>

      <div>
        your task: 
      </div>

            <Taskk props={defaultTask} ></Taskk>

        </div>
    )
}