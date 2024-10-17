import { useState } from 'react'
import {InputToDo} from './components/InputToDo'

interface TaskInterface {
  id: number;
  description: string;
  statusTask: string
  finish: boolean;
  date?: Date;
}


function App() {
  let taskToDo = []
  
  const [tasksArray, setTTasksArray] = useState(taskToDo)

  const addNewTask = (valueTask:string): void =>{
    if(valueTask.length < 1 ) return
    const TaskInterface : TaskInterface = {
      id: tasksArray.length + 1,
      description: valueTask,
      statusTask: "No Iniciado",
      finish: false,
      date: new Date()
    }
    setTTasksArray([...tasksArray,TaskInterface])
  }

  return (
    <>
      <main className="grid justify-items-center content-center  bg-orange-200 max-h-full max-w-full ">
        
        <section className='grid grid-cols-2 grid-rows-2 gap-4 '>
          <h1 className='col-span-2  grid justify-items-center'>ToDo App</h1>
          <InputToDo addNewTask ={addNewTask} />
        </section>
        <section className=' bg-green-400 max-h-full max-w-full'>
          {tasksArray.map(task => <h1 key={task.id}>{task.description}</h1>)}
          <h1>hola mundoasdasdasdas</h1>
          
        </section>
      </main>

    </>
  )
}

export default App
