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

export default function TaskContainer({ userID }) {
  const [Tasks, setTasks] = useState([]);

  const data = [
    {
      task: "attend cla",
      id: 1,
    },
    { task: "do work", id: 2 },
    { task: "homework", id: 3 },
    { task: "college", id: 3 },
  ];

  // const GetData = async () => {
  //   console.log("hello");
  //   const doc = await getDocs(collection(db, "tasks"));
  //   doc.forEach((doc) => {
  //     setTasks((prevArray) => [...prevArray, { id: doc.id, task: doc.data() }]);
  //   });
  //   console.log(Task);
  // };
  const create = async () => {
    const data = doc(db, "userchats", userID);
    await setDoc(data, { todos: [] });
  };

  useEffect(() => {
    console.log(userID);
    const DATA = onSnapshot(doc(db, "userchats", userID), (doc) => {
      if (doc.exists()) {
        console.log(doc.data());
      } else {
        create();
      }
    });
    return () => DATA;
  }, []);

  return (
    <div>
      {/* {Tasks.map((data) => {
        return <Task key={data.id} task={data.Task} id={data.id} />;
      })} */}
    </div>
  );
}
