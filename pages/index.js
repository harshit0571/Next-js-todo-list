import { useState } from "react";
import Container from "../components/container";
import InputField from "../components/input";
import TaskContainer from "../components/TaskContainer";
import Task from "../components/tasks";

export default function Home() {
  const [Show, setShow] = useState(false);
  const Input = () => {
    setShow(true);
  };

  return (
    <div>
      <div className="flex justify-around items-center w-screen mx-auto py-1 bg-slate-600 container mb-2">
        <h1 className="text-blue-50 text-2xl">Enter new task: </h1>
        <button className="bg-slate-200 rounded py-2 px-2" onClick={Input}>
          create
        </button>
      </div>
      {/* {Show ? <InputField /> : null} */}
      <InputField check={true} />
      <TaskContainer />
    </div>
  );
}
