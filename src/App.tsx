import { useState } from 'react'
import {InputToDo} from './components/InputToDo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="grid justify-items-center content-center bg-orange-200 max-h-full max-w-full ">
        
        <section className='grid grid-cols-2 grid-rows-2 gap-4'>
          <h1 className='col-span-2  grid justify-items-center'>ToDo App</h1>
          <InputToDo />
        </section>
      </main>

    </>
  )
}

export default App
