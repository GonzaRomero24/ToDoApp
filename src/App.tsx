import { useState } from "react";
import { InputToDo } from "./components/InputToDo";
import { CardTask } from "./components/CardTask";

type TaskInterface = {
  id: number;
  description: string;
  statusTask: string;
  priority: string;
  taskType: string;
  finish: boolean;
  date?: Date;
}



function App() {

  //UseState
  const [tasksArray, setTasksArray] = useState<TaskInterface[]>([]);
  const [taskStartArray, setTaskStartArray] = useState<TaskInterface[]>([]);
  const [taskFinishArray, setTaskFinishArray] = useState<TaskInterface[]>([]);
  const [lastId, setLastId] = useState<number>(1)

  //Funcion para crear un Obketo dependiendo que desea realizar con la tarea
  const createObjectTask = (id : number,  valueTask: string, statusTask:string, priority:string, taskType:string, finish:boolean) =>{
    const objectTask: TaskInterface = {
      id: id ,
      description: valueTask,
      statusTask: statusTask,
      priority : priority,
      taskType: taskType,
      finish: finish,
      date: new Date(),
    };
    return objectTask
  }

   /*Funcion para para Agregar una tarea */
  const addNewTask = (valueTask: string, priority: string, taskType:string): void => {
    if (valueTask.length < 1) return;
    const statusTask = 'No Iniciado';
    const finish = false
    const objectTask = createObjectTask(lastId,  valueTask, statusTask, priority, taskType, finish  )
    setTasksArray([...tasksArray, objectTask]);
    setLastId(lastId + 1);
  };
  
   /*Funcion para para Inicializar una tarea */
  const startTask = (id:string):void =>{
    const getTask = tasksArray.filter((task) => task.id === parseInt(id));
    const statusTask = 'Iniciado'
    const finish  = false;
    getTask.map((task) =>{
      const objectTask = createObjectTask(task.id,  task.description, statusTask, task.priority, task.taskType, finish )
      setTaskStartArray([...taskStartArray, objectTask]);
      deleteTask(id);
    })
  }

  /*Funcion para para finalizar una tarea */
  const finishTask = (id: string) =>{
    const getTaskStart = taskStartArray.filter((task) => task.id === parseInt(id));
    const statusTask = 'Finalizado'
    const finish  = false;
    getTaskStart.map((task) =>{
      const objectTask = createObjectTask(task.id,  task.description, statusTask, task.priority, task.taskType, finish )
      setTaskFinishArray([...taskFinishArray, objectTask]);
      deleteTask(id);
    })
  }
  /* Fumcion para Buscar la ID de la task en el array que le manden*/
  const foundId = (id:string , array: TaskInterface[]) =>{
    const isFound = array.some((task) =>{
      return task.id === parseInt(id)
    })
    return isFound
  }

   /* Fumcion para hacer un update al array, que se elimino*/
  const updateTask = (id: string , array : TaskInterface[]) => {
    const updateTask = array.filter((task) => task.id !== parseInt(id));
    return updateTask
  }

   /* Fumcion para borrar las tareas*/
  const deleteTask = (id:string):void =>{
    const found  = foundId(id, tasksArray);
    if(found){
      const updateArray = updateTask(id, tasksArray)
      setTasksArray(updateArray)
    }else{
      const found  = foundId(id, taskStartArray);
      if(found){
        const updateArrayStart = updateTask(id, taskStartArray)
        setTaskStartArray(updateArrayStart)
      }else{
        const updateArrayFinish = updateTask(id, taskFinishArray)
        setTaskFinishArray(updateArrayFinish)
      }
    }
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
