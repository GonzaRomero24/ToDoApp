import { useState } from "react";
import { InputToDo } from "./components/InputToDo";
import { CardTask } from "./components/CardTask";

interface TaskInterface {
  id: number;
  description: string;
  statusTask: string;
  priority: string
  finish: boolean;
  date?: Date;
}



function App() {

  const [tasksArray, setTasksArray] = useState<TaskInterface[]>([]);
  const [lastId, setLastId] = useState(1)

  const addNewTask = (valueTask: string, priority: string): void => {
    if (valueTask.length < 1) return;
    const objectTask: TaskInterface = {
      id: lastId ,
      description: valueTask,
      statusTask: "No Iniciado",
      priority : priority,
      finish: false,
      date: new Date(),
    };
    setTasksArray([...tasksArray, objectTask]);
    setLastId(lastId + 1);
  };

  const deleteTask = (id:string):void =>{
    const updateTask = tasksArray.filter((task) => task.id !== parseInt(id)); 
    setTasksArray(updateTask)

  }

  return (
    <>
      <main className=" ">
        <section className="grid justify-items-center grid-cols-2 grid-rows-2 gap-4 bg-[#001c26] max-h-full max-w-full">
          <h1 className="col-span-2  grid justify-items-center font-mono text-7xl text-white">ToDoApp</h1>
          <InputToDo addNewTask={addNewTask} />
        </section>
        <section className=" grid grid-cols-3 grid-rows-1 gap-4">
          <CardTask taskArray = {tasksArray} deleteTask ={deleteTask} />
        </section>
      </main>
    </>
  );
}

export default App;
