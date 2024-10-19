import { useState } from "react";

type Props ={
  addNewTask :(task:string, priority:string, taskType:string) => void ;
}

export const InputToDo = ({ addNewTask }: Props) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("")
  const [taskType, setTaskType] = useState("")

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const prioritySelected = (e : React.ChangeEvent<HTMLSelectElement> ) =>{
    e.preventDefault();
    console.log(e.target)
    setPriority(e.target.value)
  }

  const taskTypeSelected = (e : React.ChangeEvent<HTMLSelectElement> ) =>{
    e.preventDefault();
    console.log(e.target)
    setTaskType(e.target.value)
  }

  const sendTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(task)
    console.log(priority)
    addNewTask(task, priority, taskType);
    setTask("");
    setPriority("");
    setTaskType("");
  };

  return (
    <>
      <div className="col-span-2 row-start-2">
        <form className="grid grid-cols-6 grid-rows-1 gap-4 mb-3">
          <input
            onChange={inputChange}
            value={task}
            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Ingrese la descripcion de la  tarea"
          ></input>
          <div className="col-start-3 flex items-center">
            <label htmlFor="priority" className="mr-3 text-white">
              Prioridad:
            </label>
            <select name="priority" value={priority} onChange={prioritySelected} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value={""}  selected >Escoge una opcion</option>
              <option value={'Alta'}>🔴 Alta</option>
              <option value={'Media'}>🟠 Media</option>
              <option value={'Baja'}>🔵 Baja</option>
            </select>
          </div>
          <div className="col-start-4 flex items-center">
            <label htmlFor="priority" className="mr-3 text-white">
              Tipo tarea:
            </label>
            <select name="taskType" value={taskType} onChange={taskTypeSelected} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value={""}  selected >Escoge una opcion</option>
              <option value={'Programacion'}>💻 Programacion</option>
              <option value={'Trabajo'}>⚙️ Trabajo</option>
              <option value={'Estudio'}>📖 Estudio</option>
            </select>
          </div>
          <button
            onClick={sendTask}
            className="col-start-5 bg-[#5CB85C] hover:bg-green-400 text-white font-bold rounded"
          >
            Guardar Tarea
          </button>
        </form>
      </div>
    </>
  );
};
