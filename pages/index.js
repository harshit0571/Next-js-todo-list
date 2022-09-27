import { useState } from "react";
import Container from "../components/container";
import InputField from "../components/input";
import Login from "../components/login";
import Signup from "../components/signup";
import TaskContainer from "../components/TaskContainer";
import Task from "../components/tasks";

export default function Home() {
  const [Show, setShow] = useState(false);
  const [User, setUser] = useState("");
  const [Choice, setChoice] = useState(null);
  const Input = () => {
    setShow(true);
  };
  const ListChoice = (e) => {
    setChoice(e.target.value);
  };

  const Buttons = () => {
    return (
      <div className="flex items-center mx-auto flex-col">
        <button
          className="bg-blue-600 w-44 rounded py-2 px-2 text-center text-gray-50 mt-4"
          onClick={ListChoice}
          value="0"
        >
          Login
        </button>
        <button
          className="bg-neutral-400 w-44 rounded py-2 px-2 text-center text-gray-50 mt-4"
          onClick={ListChoice}
          value="1"
        >
          Signup
        </button>
        <button
          className="bg-slate-600 w-44 rounded py-2 px-2 text-center  text-gray-50 mt-4"
          onClick={ListChoice}
          value="local"
        >
          Local storage
        </button>
      </div>
    );
  };
  const choices = [<Login choice={setChoice} user={setUser} />, <Signup />];

  return (
    <div>
      <div className="flex justify-around items-center w-screen mx-auto py-1 bg-slate-600 container mb-2">
        <h1 className="text-blue-50 text-2xl">Enter new task: </h1>
        {Choice == null ? null : (
          <button className="bg-slate-200 rounded py-2 px-2" onClick={Input}>
            create
          </button>
        )}
      </div>
      {Show ? <InputField userID={User.uid} check={setShow} /> : null}
      {Choice == null ? (
        <Buttons />
      ) : Choice == 201 ? (
        <TaskContainer userID={User.uid} />
      ) : (
        choices[Choice]
      )}
      {Choice == null ? null : (
        <button
          className="bg-neutral-400 w-44 rounded justify-center mx-auto flex  py-2 px-2 text-center text-gray-50 mt-4"
          onClick={() => {
            setChoice(null);
          }}
        >
          back
        </button>
      )}
    </div>
  );
}
