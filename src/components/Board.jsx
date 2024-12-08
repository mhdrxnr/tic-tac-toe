

import Square from "./Square";
import { useState } from "react";
import { delay, easeIn, easeInOut, motion } from "motion/react"


export default function Board() {
    const [tic, setTic] = useState(Array(9).fill(null));
    const [Xnext, setXnext] = useState(true);

    let winnerIs = winner(tic);
    let statu ;

    if(winnerIs){
      statu = "the winner : " + winnerIs;
    }else if(!tic.includes(null)){
      statu = "no one win try again ";
    }else{
      statu="next player: "+ (Xnext? 'X' : 'O');
    }

    const handleClick = (i)=>{
        if(tic[i] || winnerIs){
          return;
        } //to not let change the shape in single square

        const nextTic = tic.slice(); //this method to give us copie of an array without touch original one
        Xnext? nextTic[i]= 'X': nextTic[i]= 'O';
        setTic(nextTic);
        setXnext(!Xnext);
    }
    const handlePlayAgain = ()=>{
      if(!tic.includes(null)){
        setTic(Array(9).fill(null));
      }
    }

    const container = (delay)=>({
      hidden: { y: -100, opacity: 0},
      visible: {
          y:0, 
          opacity: 1,
          transition: {duration: .5, delay:delay, easeIn}
          
      }
  });

  return (
    <div 
    //className=" flex justify-center flex-col items-center h-screen bg-gradient-to-tr from-cyan-700 to-green-500 "
    className="flex justify-center flex-col items-center min-h-screen bg-gradient-to-tr from-purple-700 to-blue-900 p-4 "
    >
      <motion.h1  
       variants={container(0)}
       initial="hidden"
       animate="visible"
      //className='text-center mb-10  text-5xl font-mono font-bold bg-blue-500 px-6 py-4 flex justify-center items-center rounded-lg shadow-xl'
      className='text-center mb-10 text-3xl sm:text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-sky-600 to-purple-600 text-neutral-300  px-4 py-2 sm:px-6 sm:py-4 flex justify-center items-center rounded-lg shadow-xl'
      >tic tac toe game</motion.h1>
      <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration: 1.3}} 
       className="bg-gradient-to-r from-sky-600 to-purple-600 px-4 py-2 mb-4 rounded-lg font-bold font-mono shadow-lg text-neutral-300 text-xl">{statu}</motion.h2>

      <div 
      // className="board-container rounded-lg w-80 h-80 flex flex-col gap-2 justify-center items-center"
      className="board-container  rounded-lg w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 flex flex-col gap-2 justify-center items-center"
      >
      <div className="board-row items-center flex gap-2 justify-evenly">
        <Square onclick={()=>handleClick(0)} tic={tic[0]} />
        <Square onclick={()=>handleClick(1)} tic={tic[1]}/>
        <Square onclick={()=>handleClick(2)} tic={tic[2]}/>
      </div>
      <div className="board-row  items-center flex gap-2 justify-evenly">
        <Square onclick={()=>handleClick(3)} tic={tic[3]}/>
        <Square onclick={()=>handleClick(4)} tic={tic[4]}/>
        <Square onclick={()=>handleClick(5)} tic={tic[5]}/>
      </div>
      <div className="board-row  items-center flex gap-2 justify-evenly">
        <Square onclick={()=>handleClick(6)} tic={tic[6]}/>
        <Square onclick={()=>handleClick(7)} tic={tic[7]}/>
        <Square onclick={()=>handleClick(8)} tic={tic[8]}/>
      </div>
      </div>
      
      <button
      // initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration: .3}}  whileHover={{scale: 1.25}}
     onClick={handlePlayAgain} className="px-2 py-1 bg-gradient-to-r from-sky-600 to-purple-600 rounded-lg transition-transform duration-150 ease-in-out hover:scale-110 text-neutral-300 mt-4 font-bold z-50">play Again</button>
      
    </div>
  )
}


function winner (tic){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i=0; i<lines.length; i++){
        const [a, b, c] = lines[i];
        if(tic[a] && tic[a] === tic[b] && tic[a] === tic[c]){
            return tic[a];
        }
      }
      return null;
}