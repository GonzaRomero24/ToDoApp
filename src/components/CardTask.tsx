import {Buttons} from './Buttons'
type Props = {
  taskArray: Array<{
    id: number;
    description: string;
    statusTask: string;
    priority: string;
    finish: boolean;
    date?: Date;
  }>;
  deleteTask: (value: string) => void;
};

export const CardTask = ({ taskArray, deleteTask }: Props) => {
  return (
    <>
      <article className="grid grid-cols-1 grid-rows-1 gap-4 m-5">
        {taskArray.map((task) => (
          <div
            key={task.id}
            className="grid grid-cols-1 grid-rows-1 gap-4 p-5 bg-[#00accc] bg-opacity-60"
          >
            <div className=" grid justify-items-center col-span-3 m-1 bg-[#4339a9] max-h-full max-w-full ">
              <p className="text-[#f8ecd4]" key={task.id}>
                {task.description} {task.id}
              </p>
              <p className='text-[#f8ecd4]'>{task.priority}</p>
            </div>
            <div className="col-start-4">
              <Buttons typeButton={"Eliminar"} idButton = {task.id} onClick = {deleteTask}/>
              <Buttons typeButton={"vebder"} idButton = {task.id} onClick = {deleteTask} />
            </div>
          </div>
        ))}
      </article>
    </>
  );
};
