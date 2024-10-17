import { useState } from "react";
export const InputToDo = ({ addNewTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("")

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const prioritySelected = (e : React.ChangeEvent<HTMLSelectElement> ) =>{
    setPriority(e.target.value)
  }

  const sendTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(task)
    console.log(priority)
    addNewTask(task, priority);
    setTask("");
  };

  return (
    <>
      <div className="col-span-2 row-start-2">
        <form className="grid grid-cols-4 grid-rows-1 gap-4 mb-3">
          <input
            onChange={inputChange}
            value={task}
            className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Ingrese la tarea"
          ></input>
          <div className="col-start-3 flex items-center">
            <label htmlFor="priority" className="mr-3 text-white">
              Prioridad:
            </label>
            <select name="priority" value={'Alta'} onChange={prioritySelected} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value={'Alta'}>🔴Alta</option>
              <option value={'Media'}>🟠Media</option>
              <option value={'Baja'}>🔵Baja</option>
            </select>
          </div>
          <button
            onClick={sendTask}
            className="col-start-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Guardar Tarea
          </button>
        </form>
      </div>
    </>
  );
};
