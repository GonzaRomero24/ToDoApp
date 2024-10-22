import { useState } from "react";

export const useAddTask = () => {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")
    const [taskType, setTaskType] = useState("")

    const inputChangeval = (value: string) => {
        setTask(value);
      };
    
      const prioritySelectedval = (value : string ) =>{
        setPriority(value)
      }
    
      const taskTypeSelectedval = (value: string ) =>{
        setTaskType(value)
      }
  return {
    task,
    priority,
    taskType,
    inputChangeval,
    prioritySelectedval,
    taskTypeSelectedval
  }
}
