import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
    disabled={pending}
      className="
      group 
      flex items-center gap-2 justify-center 
      h-[3rem] w-[8rem] 
      text-white bg-gray-900 
      rounded-full 
      outline-none 
      px-4
      hover:bg-gray-950
      transition-all 
      hover:scale-110
      focus:scale-105
      active:scale-105
      disabled:scale-100
      disabled:bg-opacity-75
    "
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane
            className='
              text-xs opacity-70 transition-all
              group-hover:translate-x-1 
              group-hover:-translate-y-1
              focus:scale-105 
              hover:scale-110 
              active:scale-105
              "
            '
          />
        </>
      )}
    </button>
  );
}
