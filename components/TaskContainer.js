import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";
import Task from "./tasks";

export default function TaskContainer({ userID }) {
  const [Tasks, setTasks] = useState([]);

  // const GetData = async () => {
  //   console.log("hello");
  //   const doc = await getDocs(collection(db, "tasks"));
  //   doc.forEach((doc) => {
  //     setTasks((prevArray) => [...prevArray, { id: doc.id, task: doc.data() }]);
  //   });
  //   console.log(Task);
  // };

  const newarray = [];

  useEffect((newarray) => {
    const create = async () => {
      const data = doc(db, "userchats", userID);
      await setDoc(data, { todos: [] });
    };
    console.log(userID);
    const DATA = onSnapshot(doc(db, "userchats", userID), (doc) => {
      if (doc.exists()) {
        setTasks(doc.data().todos);
      } else {
        create();
      }
    });
    return () => DATA;
  }, []);

  return (
    <div>
      {Tasks.forEach((item, index) => {
        newarray.push(
          <Task task={item} key={index} array={Tasks} userID_={userID} />
        );
      })}
      {newarray}
    </div>
  );
}
