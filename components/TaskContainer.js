import Task from "./tasks";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function TaskContainer() {
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

  useEffect(() => {
    const GetData = async () => {
      setTasks([]);
      const Data = await getDocs(collection(db, "tasks"));

      Data.forEach((doc) => {
        setTasks((arr) => [
          ...arr,
          {
            id: doc.id,
            data: doc.data(),
          },
        ]);
      });
    };
    GetData();
  }, []);

  return (
    <div>
      {Tasks.map((data) => {
        return <Task key={data.id} task={data.data.Task} id={data.id} />;
      })}
    </div>
  );
}
