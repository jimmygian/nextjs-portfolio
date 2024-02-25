"use client";

import React, { useState, createContext, useContext } from "react";

type contextProviderProps = {
  children: React.ReactNode;
};

type ExpCardContextType = {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  expandedContainer: string;
  setExpandedContainer: React.Dispatch<React.SetStateAction<string>>;
};

const ExpCardContext = createContext<ExpCardContextType | null>(null);

export function ExperienceContextProvider({ children }: contextProviderProps) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [expandedContainer, setExpandedContainer] = useState("");

  return (
    <ExpCardContext.Provider
      value={{
        isHidden,
        setIsHidden,
        expandedContainer,
        setExpandedContainer,
      }}
    >
      {children}
    </ExpCardContext.Provider>
  );
}

export function useExpCardDialogContext() {
  const context = useContext(ExpCardContext);

  if (context === null) {
    throw new Error(
      "useExpCardDialogContext must be used within an GlobalContextProvider"
    );
  }

  return context;
}
