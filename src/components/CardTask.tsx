import { useState } from "react";

import { Buttons } from "./Buttons";
import { Modal } from "./Modal";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

interface TaskInterface {
  id: number;
  description: string;
  statusTask: string;
  priority: string;
  taskType: string;
  finish: boolean;
  date?: Date;
}

type Props = {
  state: TaskInterface[];
  deleteTask: (value: string) => void;
  startTask: (value: string) => void;
  finishTask: (value: string) => void;
};

export const CardTask = ({
  state,
  deleteTask,
  startTask,
  finishTask
}: Props) => {
  //const [taskView, setTaskView] = useState<TaskInterface[]>([]);
  const [view, setView] = useState<boolean>(false);

  const viewTask = (id: string): void => {
    /*const viewTaskArray = taskArray.filter((task) => task.id === parseInt(id));
    if (viewTaskArray.length > 0) {
      setView(true);
      setTaskView(viewTaskArray);
    } else {
      setView(false);
    }*/
   console.log(id)
  };

  const viewTaskinitial = (id: string): void =>{
    /*const viewTaskArrayInitial = taskStartArray.filter((task) => task.id === parseInt(id));
    if(viewTaskArrayInitial.length > 0){
      setView(true);
      setTaskView(viewTaskArrayInitial);
    }else{
      setView(false);
    }*/
      console.log(id)
  }

  const closeModal = (close: boolean): void => {
    setView(close);
  };
  return (
    <>
      <article className={`grid justify-items-center grid-cols-1 grid-rows-1 gap-4 bg-slate-100 ${state.filter((taskFilter) => taskFilter.statusTask === 'No Iniciado').length === 0 ? 'hidden' : 'block'}`}>
        <h2 className="font-bold mt-3">Tareas No Iniciadas</h2>
        {state.filter((taskFilter) => taskFilter.statusTask === 'No Iniciado').map((task) => (
          
          <div
            key={task.id}
            className="bg-[#4a6572] max-w-max mx-2 rounded-xl overs shadow-lg"
          >
            
            <div className="mx-3 my-3">
              <p className="font-bold text-lg text-white mb-2">Tarea N°{task.id}</p>
              <p className="text-white text-base">{task.description} </p>
            </div>
            <div className="px-4">
              <>
              {task.priority == 'Alta' ? console.log('gads'): console.log('SADAS')}
              </>
              <span className={task.priority == 'Alta' ? "inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                : task.priority == 'Media'? 'inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2': 'inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'}>
                Prioridad: {task.priority}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tipo Tarea: {task.taskType}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Estado: {task.statusTask}
              </span>
            </div>
            <div className="flex justify-center my-2 ">
              <Buttons
                typebutton={<FaRegTrashAlt />}
                idButton={task.id}
                onClick={deleteTask}
                colorButton={
                  " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
              <Buttons
                typebutton={<FaEye />}
                idButton={task.id}
                onClick={viewTask}
                colorButton={
                  " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
              <Buttons
                typebutton={<FaArrowCircleRight />}
                idButton={task.id}
                onClick={startTask}
                colorButton={
                  " bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
            </div>
          </div>
        ))}
      </article>
      <article className={`grid justify-items-center grid-cols-1 grid-rows-1 gap-4 bg-slate-100 ${state.filter((taskFilter) => taskFilter.statusTask === 'Iniciado').length === 0 ? 'hidden' : 'block'}`}>
        <h3 className="font-bold mt-3">Tareas Iniciadas</h3>
        {state.filter((taskFilter) => taskFilter.statusTask === 'Iniciado').map((task) => (  
          <div
            key={task.id}
            className="bg-[#FFD54F] max-w-max mx-2 rounded-xl overs shadow-lg"
          >
            
            <div className="mx-3 my-3">
              <div className="font-bold text-xl mb-2">Tarea N°{task.id}</div>
              <p className="text-gray-700 text-base">{task.description}</p>
            </div>
            <div className=" px-4">
              <span className={task.priority == 'Alta' ? "inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                : task.priority == 'Media'? 'inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2': 'inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'}>
                Prioridad: {task.priority}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tipo Tarea: {task.taskType}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Estado: {task.statusTask}
              </span>
            </div>
            <div className="flex justify-center my-2">
              <Buttons
                typebutton={<FaRegTrashAlt />}
                idButton={task.id}
                onClick={deleteTask}
                colorButton={
                  " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
              <Buttons
                typebutton={<FaEye />}
                idButton={task.id}
                onClick={viewTaskinitial}
                colorButton={
                  " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
              <Buttons
                typebutton={<FaArrowCircleRight />}
                idButton={task.id}
                onClick={finishTask}
                colorButton={
                  " bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
            </div>
          </div>
        ))}
      </article>
      <article className={`grid justify-items-center grid-cols-1 grid-rows-1 gap-4 bg-slate-100 ${state.filter((taskFilter) => taskFilter.statusTask === 'Finalizado').length === 0 ? 'hidden' : 'block'}`}>
        <h3 className="font-bold mt-3">Tareas Finalizadas</h3>
        {state.filter((taskFilter) => taskFilter.statusTask === 'Finalizado').map((task) => (
          <div
            key={task.id}
            className="bg-green-500 max-w-max mx-2 my-2 rounded-xl overs shadow-lg"
          >
            
            <div className="mx-3 my-3">
              <div className="font-bold text-xl mb-2">Tarea N°{task.id}</div>
              <p className="text-gray-700 text-base">{task.description}</p>
            </div>
            <div className="px-4">
              <span className={task.priority == 'Alta' ? "inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                : task.priority == 'Media'? 'inline-block bg-orange-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2': 'inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'}>
                Prioridad: {task.priority}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tipo Tarea: {task.taskType}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Estado: {task.statusTask}
              </span>
            </div>
            <div className="flex justify-center">
              <Buttons
                typebutton={<FaRegTrashAlt />}
                idButton={task.id}
                onClick={deleteTask}
                colorButton={
                  " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
              <Buttons
                typebutton={<FaEye />}
                idButton={task.id}
                onClick={viewTask}
                colorButton={
                  " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
                }
              />
            </div>
          </div>
        ))}
      </article>
      
      {view ? (
        <Modal view={view} closeModal={closeModal} taskView={taskView} />
      ) : (
        console.log()
      )}
    </>
  );
};
