import React, {useRef} from "react";
import { Task } from "../../../models/class";
import { LEVELS } from "../../../models/levels";

 const TaskForm = ({add})=>{
    const nameRef=useRef("")
    const descriptionRef=useRef("")
    const levleRef=useRef(LEVELS.normal)

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levleRef.current.value
        );
        add(newTask)
    }   
    

    return(
        <form action="">
            
        </form>
    )
}

export default TaskForm