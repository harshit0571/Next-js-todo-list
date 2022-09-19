import React from "react";
import { useRouter } from "next/router";

import {
  deleteDoc,
  getDoc,
  getDocs,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Task(props) {
  const router = useRouter();

  const Delete = async () => {
    const id = props.id;
    const docRef = await doc(db, "tasks", id);
    deleteDoc(docRef);
    router.reload(window.location.pathname);
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
