import { useState } from "react";
import { InputToDo } from "./components/InputToDo";
import { CardTask } from "./components/CardTask";

interface TaskInterface {
  id: number;
  description: string;
  statusTask: string;
  finish: boolean;
  date?: Date;
}

function App() {

  const [tasksArray, setTasksArray] = useState<TaskInterface[]>([]);

  const addNewTask = (valueTask: string): void => {
    if (valueTask.length < 1) return;
    const objectTask: TaskInterface = {
      id: tasksArray.length + 1,
      description: valueTask,
      statusTask: "No Iniciado",
      finish: false,
      date: new Date(),
    };
    setTasksArray([...tasksArray, objectTask]);
  };

  return (
    <>
      <main className=" ">
        <section className="grid justify-items-center grid-cols-2 grid-rows-2 gap-4 bg-[#001c26] max-h-full max-w-full">
          <h1 className="col-span-2  grid justify-items-center font-mono text-7xl text-white">ToDoApp</h1>
          <InputToDo addNewTask={addNewTask} />
        </section>
        <section className=" grid grid-cols-3 grid-rows-1 gap-4">
          <CardTask taskArray = {tasksArray} />
          
        </section>
      </main>
    </>
  );
}

export default App;
