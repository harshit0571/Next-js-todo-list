import React from "react";

export default function () {
  return (
    <div className="flex-col flex mx-auto items-center align-middle">
      <input
        type="text"
        placeholder="enter name"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
      />
      <input
        type="text"
        placeholder="enter username"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
      />
      <input
        type="text"
        placeholder="enter password"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
      />
      <button className="bg-neutral-400 w-44 rounded py-2 px-2 text-center text-gray-50 mt-4">
        Signup
      </button>
    </div>
  );
}
