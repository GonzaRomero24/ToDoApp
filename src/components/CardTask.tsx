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
  taskArray: TaskInterface[];
  taskStartArray: TaskInterface[];
  deleteTask: (value: string) => void;
  startTask: (value: string) => void;
};

export const CardTask = ({
  taskArray,
  taskStartArray,
  deleteTask,
  startTask,
}: Props) => {
  const [taskView, setTaskView] = useState<TaskInterface[]>([]);
  const [view, setView] = useState<boolean>(false);

  const viewTask = (id: string): void => {
    const viewTaskArray = taskArray.filter((task) => task.id === parseInt(id));
    if (viewTaskArray.length > 0) {
      setView(true);
      setTaskView(viewTaskArray);
    } else {
      setView(false);
    }
  };

  const closeModal = (close: boolean): void => {
    setView(close);
  };
  return (
    <>
      <article className="grid grid-cols-1 grid-rows-1 gap-4 m-5">
        {taskArray.map((task) => (
          <div
            key={task.id}
            className="max-w-sm h-64 rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tarea N°{task.id}</div>
              <p className="text-gray-700 text-base">{task.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {}
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
      <article className="grid grid-cols-1 grid-rows-1 gap-4 m-5">
        {taskStartArray.map((task) => (
          <div
            key={task.id}
            className="max-w-sm h-64 rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tarea N°{task.id}</div>
              <p className="text-gray-700 text-base">{task.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {}
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
      {view ? (
        <Modal view={view} closeModal={closeModal} taskView={taskView} />
      ) : (
        console.log("fuera")
      )}
    </>
  );
};
