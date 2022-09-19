import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";

export default function InputField(props) {
  const router = useRouter();

  const [task, settask] = useState("");
  const Send = async () => {
    try {
      console.log("working");
      const docRef = await addDoc(collection(db, "tasks"), {
        Task: task,
      });
      router.reload(window.location.pathname);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center mx-auto ">
      <input
        placeholder="Enter a new task"
        type={"text"}
        value={task}
        onChange={(e) => {
          settask(e.target.value);
        }}
        className="w-4/5 py-3 px-3 text-neutral-600 text-lg text-center m-3"
      />
      <span className="flex">
        <button className=" bg-slate-200 rounded py-2 px-2 m-1" onClick={Send}>
          Add
        </button>
        <button className="mg-3 bg-slate-200 rounded py-2 px-2 m-1">
          close
        </button>
      </span>
      <hr className="w-4/5 mx-auto mt-6" />
    </div>
  );
}
