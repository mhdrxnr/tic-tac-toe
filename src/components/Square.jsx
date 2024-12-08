import { motion } from "motion/react";



export default function Square({tic,onclick}) {

  return (
    <>
    <button style={{color: tic == 'X'? '#52BBC4': '#E1EB63'}}  onClick={onclick} 
    // className="square bg-slate-400 w-24 h-24 p-8 rounded-lg text-6xl flex justify-center items-center font-bold text-blue-200"
    className="square bg-slate-400/10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-4 sm:p-6 md:p-8
     transition-transform duration-150 ease-in-out hover:scale-105
     rounded-lg text-4xl sm:text-5xl md:text-6xl flex justify-center items-center font-bold shadow-lg"
    >{tic}</button>
    </>
        
  )
}
