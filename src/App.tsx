import { useState } from "react";
import { InputToDo } from "./components/InputToDo";
import { CardTask } from "./components/CardTask";

interface TaskInterface {
  id: number;
  description: string;
  statusTask: string;
  priority: string;
  taskType: string;
  finish: boolean;
  date?: Date;
}



function App() {

  const [tasksArray, setTasksArray] = useState<TaskInterface[]>([]);
  const [taskStartArray, setTaskStartArray] = useState<TaskInterface[]>([]);
  const [taskFinishArray, setTaskFinishArray] = useState<TaskInterface[]>([]);
  const [lastId, setLastId] = useState(1)

  const addNewTask = (valueTask: string, priority: string, taskType:string): void => {
    if (valueTask.length < 1) return;
    const objectTask: TaskInterface = {
      id: lastId ,
      description: valueTask,
      statusTask: "No Iniciado",
      priority : priority,
      taskType: taskType,
      finish: false,
      date: new Date(),
    };
    setTasksArray([...tasksArray, objectTask]);
    setLastId(lastId + 1);
  };

  const foundId = (id:string) =>{
    const foundTaskArray = tasksArray.filter((task) => task.id === parseInt(id));
    if(foundTaskArray.length > 0){
      return 'taskArray'
    }else{
      const foundTastStartArray = taskStartArray.filter((task) => task.id === parseInt(id));
      if(foundTastStartArray.length > 0){
        return 'taskStartArray'
      }else{
        return 'Finish'
      }
      
    }
  }

  const deleteTask = (id:string):void =>{
    const found  = foundId(id);
    if(found == 'taskArray'){
      const updateTask = tasksArray.filter((task) => task.id !== parseInt(id));
      setTasksArray(updateTask);
    }else if(found == 'taskStartArray'){
      const updateTaskStart = taskStartArray.filter((task) => task.id !== parseInt(id));
      setTaskStartArray(updateTaskStart);
    }else{
      const updateTaskFinish = taskFinishArray.filter((task) => task.id !== parseInt(id));
      setTaskFinishArray(updateTaskFinish);
    }
  }

  const startTask = (id:string):void =>{
    const getTask = tasksArray.filter((task) => task.id === parseInt(id));
    getTask.map((task) =>{
      const objectTask : TaskInterface ={
        id: task.id,
        description: task.description,
        statusTask: "Iniciado",
        priority: task.priority,
        taskType: task.taskType,
        finish: false,
        date: task.date,
      };
      setTaskStartArray([...taskStartArray, objectTask]);
      deleteTask(id);
    })
  }

  const finishTask = (id: string) =>{
    const getTaskStart = taskStartArray.filter((task) => task.id === parseInt(id));
    getTaskStart.map((task) =>{
      const objectTask : TaskInterface = {
        id: task.id,
        description: task.description,
        statusTask: "Finalizado",
        priority: task.priority,
        taskType: task.taskType,
        finish: false,
        date: new Date(),
      };

      setTaskFinishArray([...taskFinishArray, objectTask]);
      deleteTask(id);
    })

  }

  return (
    <>
      <main className=" ">
        <section className="grid justify-items-center grid-cols-2 grid-rows-2 gap-4 bg-[#4A90E2] max-h-full max-w-full">
          <h1 className="col-span-2  grid justify-items-center font-mono text-7xl text-white">ToDoApp</h1>
          <InputToDo addNewTask={addNewTask} />
        </section>
        <section className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
          <CardTask taskArray = {tasksArray} taskStartArray={taskStartArray} taskFinishArray={taskFinishArray} deleteTask ={deleteTask} startTask={startTask} finishTask ={finishTask}/>
        </section>
      </main>
    </>
  );
}

export default App;
