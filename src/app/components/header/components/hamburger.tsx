import React from "react";

type HamburgerBtnProps = {
  id?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export default function HamburgerBtn({id, className, onClick}: HamburgerBtnProps) {
  return (
    <button
    id={id ?? `hamburger-button`}
    className={`${className} group font-bold hover:scale-110 focus:scale-110 active:-translate-x-6 active:scale-105 transition-all hover:ps-8 hover:pe-4 focus:px-8 outline-none`}
    onClick={(e) => onClick?.(e)}
  >
    <div
      className="
        group 
        linesContainer 
        flex 
        w-[1.7rem] h-[1.5rem] 
        relative 
        transition-all 
        group-hover:scale-110 
        group-hover:-translate-x-3 
        group-focus:scale-110 
        group-focus:-translate-x-3 
        active:-translate-x-6 
        active:scale-105
      "
        
    >
      <div
        className="
          absolute 
          top-[25%] left-[15%] line h-[0.15rem] w-[70%] 
          bg-black 
          dark:bg-white/70 
          rotate-0 
          group-hover:scale-75 
          group-hover:rounded-full 
          group-hover:-rotate-45 
          group-focus:scale-75 
          group-focus:rounded-full 
          group-focus:-rotate-45 
          transition-all"
      ></div>
      <div
        className="
          absolute 
          top-[45%] 
          left-[15%] line h-[0.15rem] w-[70%] 
          bg-black 
          dark:bg-white/70 
          rounded-full 
          group-hover:scale-x-125 
          group-hover:translate-x-3 
          group-focus:scale-x-125 
          group-focus:translate-x-3 
          transition-all"
      ></div>
      <div
        className="
          absolute 
          bottom-[25%] left-[15%] line h-[0.15rem] w-[70%] 
          bg-black 
          dark:bg-white/70 
          group-hover:scale-75 
          group-hover:rounded-full 
          group-hover:rotate-45 
          group-focus:scale-75 
          group-focus:rounded-full 
          group-focus:rotate-45 
          transition-all"
      ></div>
    </div>
  </button>
  );
}
