import React from "react";
import { useRouter } from "next/router";

import {
  deleteDoc,
  getDoc,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Task(props) {
  const router = useRouter();
  const refresh = () => {
    router.reload(window.location.pathname);
  };
  const delete_in_array = () => {
    for (let index = 0; index < props.array.length; index++) {
      if (props.task == props.array[index]) {
        props.array.splice(
          props.array.length,
          0,
          props.array.splice(index, 1)[0]
        );
        props.array.pop();
      }
    }
  };
  const Delete = async () => {
    try {
      const data = doc(db, "userchats", props.userID_);
      delete_in_array();
      console.log(props.array);
      await updateDoc(data, {
        todos: props.array,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="flex flex-row mt-1">
      <span className="w-4/5 py-2 px-3">{props.task}</span>
      <button
        className="mg-3 bg-red-600 text-white rounded py-2 px-2 w-1/5"
        onClick={Delete}
      >
        delete
      </button>
    </div>
  );
}
