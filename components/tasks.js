import React from "react";

export default function Task(props) {
  return (
    <div className="flex flex-row mt-1">
      <span className="w-4/5 py-2 px-3">{props.task}</span>
      <button className="mg-3 bg-red-600 text-white rounded py-2 px-2 w-1/5">
        delete
      </button>
    </div>
  );
}
