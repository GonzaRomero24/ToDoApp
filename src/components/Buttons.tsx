
type typeButton ={
  typeButton : string;
  idButton : number;
  onClick : (value: number) => void;
};

export const Buttons = ({typeButton , idButton, onClick} : typeButton) => {
  const typeEvent = (event) =>{
    onClick(event.target.value)
  }
  return (
    <>
      <button value={idButton} onClick={typeEvent} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
        {typeButton}
      </button>
    </>
  );
};
