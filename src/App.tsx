import { useReducer, useState, useEffect } from "react";
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

  //UseState
  //const [tasksArray, setTasksArray] = useState<TaskInterface[]>([]);
  //const [taskStartArray, setTaskStartArray] = useState<TaskInterface[]>([]);
  //const [taskFinishArray, setTaskFinishArray] = useState<TaskInterface[]>([]);
  const [lastId, setLastId] = useState<number>(1)

  

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
    /*const getTask = tasksArray.filter((task) => task.id === parseInt(id));
    const statusTask = 'Iniciado'
    const finish  = false;
    getTask.map((task) =>{
      const objectTask = createObjectTask(task.id,  task.description, statusTask, task.priority, task.taskType, finish )
      setTaskStartArray([...taskStartArray, objectTask]);
      deleteTask(id);
    })*/

    dispatch({type:'Start-Task' , payload: foundID})
  }

  /*Funcion para para finalizar una tarea */
  const finishTask = (id: string) =>{
    const foundID = parseInt(id);
    /*const getTaskStart = taskStartArray.filter((task) => task.id === parseInt(id));
    const statusTask = 'Finalizado'
    const finish  = false;
    getTaskStart.map((task) =>{
      const objectTask = createObjectTask(task.id,  task.description, statusTask, task.priority, task.taskType, finish )
      setTaskFinishArray([...taskFinishArray, objectTask]);
      deleteTask(id);
    })*/
    dispatch({type:'Finish-Task', payload: foundID})
  }
  /* Fumcion para Buscar la ID de la task en el array que le manden*/
  /*const foundId = (id:string , array: TaskInterface[]) =>{
    const isFound = array.some((task) =>{
      return task.id === parseInt(id)
    })
    return isFound
  }*/

   /* Fumcion para hacer un update al array, que se elimino*/
  /*const updateTask = (id: string , array : TaskInterface[]) => {
    const updateTask = array.filter((task) => task.id !== parseInt(id));
    return updateTask
  }*/

   /* Fumcion para borrar las tareas*/
  const deleteTask = (id:string):void =>{
    const foundID = parseInt(id);
    /*const found  = foundId(id, tasksArray);
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
    }*/
    dispatch({type:'Delete-Task' , payload: foundID})
  }

  useEffect(() => {
    console.log("Current state:", state);
  }, [state]);


  return (
    <>
      <main className=" ">
        <section className="grid justify-items-center grid-cols-2 grid-rows-2 gap-4 bg-[#4A90E2] max-h-full max-w-full">
          <h1 className="col-span-2  grid justify-items-center font-mono text-7xl text-white">ToDoApp</h1>
          <InputToDo addNewTask={addNewTask} />
        </section>
        <section className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
          <CardTask state= {state}  /* taskArray={tasksArray} taskStartArray={taskStartArray} taskFinishArray={taskFinishArray}*/ deleteTask ={deleteTask} startTask={startTask} finishTask ={finishTask}/>
        </section>
      </main>
    </>
  );
}

export default App;
