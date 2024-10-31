import { useAddTask } from "../hooks/useAddTask";
import 'boxicons'

type Props ={
  addNewTask :(task:string, priority:string, taskType:string) => void ;
  isOpenAddTask: boolean;
  closeAddTask : (isClose : boolean)=> void;
}

export const InputToDo = ({ addNewTask, isOpenAddTask, closeAddTask}: Props) => {

  const{task, priority, taskType, inputChangeval, prioritySelectedval, taskTypeSelectedval } = useAddTask()

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    inputChangeval(e.target.value)
  };

  const prioritySelected = (e : React.ChangeEvent<HTMLSelectElement> ) =>{
    e.preventDefault()
    prioritySelectedval(e.target.value)
  }

  const taskTypeSelected = (e : React.ChangeEvent<HTMLSelectElement> ) =>{
    e.preventDefault()
    taskTypeSelectedval(e.target.value)
  }

  const isClose = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    closeAddTask(false)
  } 

  const sendTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(task)
    console.log(priority)
    addNewTask(task, priority, taskType);
    inputChangeval("")
    prioritySelectedval("");
    taskTypeSelectedval("");
  };

  return (
    <>
      <div className=" grid bg-[#232F34] rounded-b-xl">
        <form className="grid gap-4 p-6 m-5 bg-[#344955] rounded-lg">
          <div className="flex items-center">
            <label htmlFor="input">
              Descripcion: 
            </label>
            <input
              name="input"
              onChange={inputChange}
              value={task}
              className="shadow appearance-none border rounded w-full py-2 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="Ingrese la descripcion de la  tarea"
            ></input>
          </div>
          <div className="flex items-center">
            <label htmlFor="priority" className="mr-3 text-white">
              Prioridad:
            </label>
            <select name="priority" value={priority} onChange={prioritySelected} className=" shadow appearance-none border rounded w-30 py-2 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value={""}  selected >Escoge una opcion</option>
              <option value={'Alta'}>🔴 Alta</option>
              <option value={'Media'}>🟠 Media</option>
              <option value={'Baja'}>🔵 Baja</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="priority" className="mr-3 text-white">
              Tipo tarea:
            </label>
            <select name="taskType" value={taskType} onChange={taskTypeSelected} className=" shadow appearance-none border rounded w-full py-2 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value={""}  selected >Escoge una opcion</option>
              <option value={'Programacion'}>💻 Programacion</option>
              <option value={'Trabajo'}>⚙️ Trabajo</option>
              <option value={'Estudio'}>📖 Estudio</option>
            </select>
          </div>
          <div className="grid justify-items-center py-3 ">
            <button
              onClick={sendTask}
              className="bg-[#f8b652] active:bg-[#f7c171] text-white font-bold rounded p-2"
            >
              Guardar Tarea
            </button>
          </div>
          {}
          <div className={`grid justify-items-center py-3 ${isOpenAddTask ? "block" : "hidden"}`}>
            <button
              onClick={isClose}
              className="bg-transparent  active:bg-green-400 text-white font-bold rounded-full p-2"
            >
              <i className='bx bx-x-circle bx-md'></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
