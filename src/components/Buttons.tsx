import React from 'react'

type typeButton ={
  typebutton : React.ReactNode;
  idButton : number;
  onClick : (value: string) => void;
  colorButton : string;
};

export const Buttons = ({typebutton , idButton, onClick , colorButton} : typeButton) => {


  const typeEvent = (event) =>{
    console.log(event.target.value)
    onClick(event.target.value)
  }
  return (
    <>
      <button value={idButton} onClick={typeEvent} className={colorButton}>
        {typebutton}
      </button>
    </>
  );
};
