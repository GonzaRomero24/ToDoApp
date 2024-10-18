import React from 'react'

interface TaskInterface {
    id: number;
    description: string;
    statusTask: string;
    priority: string;
    taskType: string;
    finish: boolean;
    date?: Date;
  }

type Prop ={
    taskView :TaskInterface[];
    view: boolean;
    closeModal: (close:boolean) => void;
}

export const Modal = ({view , closeModal,taskView }:Prop) => {
    return (
      <>
        {view ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    {taskView.map((task) => (
                        <>
                            <h3 className="text-3xl font-semibold">Tarea N°{task.id}</h3>
                            <button className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => closeModal(false)}>
                                <span className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </>
                    ))}
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">aca va la descripcion</p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => closeModal(false)}>
                      Cerrar
                    </button>
                    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => closeModal(false)}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
}