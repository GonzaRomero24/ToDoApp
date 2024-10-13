import { ButtonEdit } from "./ButtonEdit";

export const CardTask = ({ taskArray }) => {
  console.log(taskArray);
  return (
    <>
      <article className="grid grid-cols-1 grid-rows-1 gap-4 m-5">
        {taskArray.map((task) => (
          <>{console.log(task)}
            <div className="grid grid-cols-1 grid-rows-1 gap-4 p-5 bg-[#00accc] bg-opacity-60">
              <div className=" grid justify-items-center col-span-3 m-1 bg-[#00f4ff] max-h-full max-w-full ">
                <p className="text-gray-900" key={task.id}>
                  {task.description}
                </p>
              </div>
              <div className="col-start-4">
                <ButtonEdit />
              </div>
            </div>
          </>
        ))}
      </article>
    </>
  );
};
