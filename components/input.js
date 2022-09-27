import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";

export default function InputField({ userID, check }) {
  const router = useRouter();
  console.log(userID);
  const [task, settask] = useState("");
  const Send = async () => {
    try {
      const data = doc(db, "userchats", userID);
      await updateDoc(data, {
        todos: arrayUnion(task),
      });
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
        <button
          className="mg-3 bg-slate-200 rounded py-2 px-2 m-1"
          onClick={() => {
            check(false);
          }}
        >
          close
        </button>
      </span>
      <hr className="w-4/5 mx-auto mt-6" />
    </div>
  );
}
