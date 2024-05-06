import React from "react";

const EditModal = ({isVisible, onClose, children}) => {
    if(!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="lg:w-[75%] md:w-[65%] w-[90%] flex flex-col">
        <button onClick={() => onClose()} className="text-white text-xl place-self-end bg-red-600 hover:bg-red-700 rounded-lg px-2 py-1">X</button>
        <div className="bg-slate-200 p-2 mt-2 rounded-md">
                {children}
        </div>
      </div>
    </div>
  );
};

export default EditModal;
