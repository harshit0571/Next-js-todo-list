export default function InputField() {
  const [Show, setShow] = useState(false);
  const Input = () => {
    setShow(true);
  };
  return (
    <div className="flex flex-col justify-center align-middle items-center mx-auto ">
      <input
        placeholder="Enter a new task"
        type={"text"}
        className="w-4/5 py-3 px-3 text-neutral-600 text-lg text-center m-3"
      />
      <span className="flex">
        <button className=" bg-slate-200 rounded py-2 px-2 m-1">Add</button>
        <button className="mg-3 bg-slate-200 rounded py-2 px-2 m-1">
          close
        </button>
      </span>
      <hr className="w-4/5 mx-auto mt-6" />
    </div>
  );
}
