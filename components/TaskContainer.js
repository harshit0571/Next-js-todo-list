import Task from "./tasks";

export default function TaskContainer() {
  const data = [
    {
      task: "attend cla",
      id: 1,
    },
    { task: "do work", id: 2 },
    { task: "homework", id: 3 },
    { task: "college", id: 3 },
  ];
  return (
    <div>
      {data.map((data) => {
        return <Task key={data.id} task={data.task} />;
      })}
    </div>
  );
}
