import React from "react";

export const InputToDo = () => {
  return (
    <>
    <div className="col-span-2 row-start-2">
      <form className="grid grid-cols-2 grid-rows-1 gap-4 mb-3">
        <input className="col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder="Ingrese la tarea"></input>
        <button className="col-start-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar Tarea</button>
      </form>
    </div>
      
    </>
  );
};
