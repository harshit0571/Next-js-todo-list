

export default function Container() {
  return (
    <div className="flex h-screen	 flex-wrap align-middle justify-around ">
        <div className="w-1/2 h-1/2 min-w-200px md:w-screen md:bg-black 2xl:w-2/3 sm:w-screen sm:bg-stone-300	 h-400 bg-slate-500 block m-3">
            <div className="w-full bg-red-600 h-1/5">hello</div>
        </div>
        <div className="w-1/2 h-1/2  min-w-200  m-3 h-400 bg-slate-500">hello</div>
        <div className="w-1/2  h-1/2  min-w-200 m-3 h-400 bg-slate-500">hello</div>
        <div className="w-1/2  h-1/2 min-w-200 m-3 h-400 bg-slate-500">hello</div>
    </div>
  )
}
