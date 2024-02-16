import React from "react";
// import type { expDataObj } from "@lib/types";

type ExpCardDialogProps = {
  isHidden: boolean;
};

export function ExpCardDialog({ isHidden }: ExpCardDialogProps) {

  return (
    <>
      {isHidden ? (
        <></>
      ) : (
        <div
          className={`fixed bg-red-600 w-[90%] max-w-[50rem] min-h-[30%] max-h-[70%] inset-0 m-auto z-50 rounded-[1rem] opacity-[0.5] backdrop-blur-md`}
        >
          <p></p>
        </div>
      )}
    </>
  );
}
