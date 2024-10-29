import { useReducer, useState } from "react";
import { InputToDo } from "./components/InputToDo";
import { CardTask } from "./components/CardTask";
import 'boxicons'

type TaskInterface = {
  id: number;
  description: string;
  statusTask: string;
  priority: string;
  taskType: string;
  finish: boolean;
  date?: Date;
}

type action  = {
  type: 'Add-Task'| 'Delete-Task' | 'Start-Task' |'View-Task'| 'Finish-Task';
  payload: TaskInterface | number;
}

const initialState : TaskInterface[]   = []

const taskReduce = (state : typeof initialState, action: action) =>{
  switch(action.type){
    case 'Add-Task':
      console.log(state)
      return [...state, action.payload as TaskInterface]
    case 'Delete-Task':
      return state.filter((task) => task.id !== action.payload as number)

    case 'Start-Task':
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, statusTask: 'Iniciado' };
        }
        return task;
      });

    case 'View-Task':
      return state
    case 'Finish-Task':
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, statusTask: 'Finalizado' , finish: !task.finish };
        }
        return task;
      });
    default:
      return state
  }
}



function App() {

  const [state, dispatch] = useReducer( taskReduce, initialState)
  const [lastId, setLastId] = useState<number>(1);
  const [isOpenAddTask, setIsOpenAddTask] = useState<boolean>(false);
  

  //Funcion para crear un Obketo dependiendo que desea realizar con la tareanpmxwd
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
    setLastId(lastId + 1);
    dispatch({type:'Add-Task', payload: objectTask})
  };
  
   /*Funcion para para Inicializar una tarea */
  const startTask = (id:string):void =>{
    const foundID = parseInt(id);
    console.log('entra')
    dispatch({type:'Start-Task' , payload: foundID})
  }

  /*Funcion para para finalizar una tarea */
  const finishTask = (id: string) =>{
    const foundID = parseInt(id);
    dispatch({type:'Finish-Task', payload: foundID})
  }

   /* Fumcion para borrar las tareas*/
  const deleteTask = (id:string):void =>{
    const foundID = parseInt(id);
    dispatch({type:'Delete-Task' , payload: foundID})
  }

  const openAddTask = () =>{
    console.log(isOpenAddTask)
    setIsOpenAddTask(true)
  }

  const closeAddTask = (isClose : boolean) =>{
    setIsOpenAddTask(isClose)
  }




  return (
    <>
      <main className=" ">
        <section className="flex bg-[#4A90E2] max-h-full max-w-full">
          <h1 className=" justify-start mx-2 my-2 font-mono text-7xl text-white">ToDoApp</h1>
          <button className="flex items-center justify-center bg-sky-500 active:bg-sky-700 mx-5 my-5 text-center rounded-lg p-2" onClick={openAddTask}><i className='bx bx-menu bx-md'></i></button>
        </section>
        <div className={`w-full block flex-grow ${isOpenAddTask ? "block" : "hidden"}`} >
            <InputToDo addNewTask={addNewTask} isOpenAddTask={isOpenAddTask} closeAddTask={closeAddTask} />
        </div>
        <section className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
          <CardTask state= {state}  /*taskArray={tasksArray} taskStartArray={taskStartArray} taskFinishArray={taskFinishArray}*/ deleteTask ={deleteTask} startTask={startTask} finishTask ={finishTask}/>
        </section>
      </main>
    </>
  );
}

export default App;
