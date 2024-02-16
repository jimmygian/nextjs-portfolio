"use client";

import React, { useState, createContext, useContext } from "react";
import type { expDataObj } from '@lib/types';


type contextProviderProps = { 
    children: React.ReactNode;
};

type ExpCardContextType = {
    isHidden: boolean;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}





const ExpCardContext = 
    createContext<ExpCardContextType | null>(null);

export default function ExpCardDialogContextProvider({
    children
}: contextProviderProps) {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    
    return (
        <ExpCardContext.Provider
            value={{
                isHidden,
                setIsHidden,
            }}
        >
            {children}
            {/* <div className={`${isHidden ? "hidden" : "absolute"} bg-red-600 w-[10rem] h-[10rem] top-0 z-50`}></div> */}
        </ExpCardContext.Provider>
    )
  }

  export function useExpCardDialogContext() {
    const context = useContext(ExpCardContext);
  
    if (context === null) {
      throw new Error(
        "useExpCardDialogContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }
  