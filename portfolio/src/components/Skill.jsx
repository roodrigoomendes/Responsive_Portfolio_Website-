import Title from "./Title"

function Skill() {
    return (
        <div >
            <Title>SKILL</Title>

            <div className=" bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 flex mx-10 sm:mx-auto w-fit border-2 border-cyan-900 flex-wrap justify-center">
                <img title='HTML' src='./src/img/html.png' className="bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
                <img title='CSS' src='./src/img/css.png' className=" bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
                <img title='JAVASCRIPT' src='./src/img/js.png' className=" bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
                <img title='REACTJS' src='./src/img/atom.png' className=" bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
                <img title='VITE JS' src='./src/img/vite.png' className=" bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
                <img title='TAILWIND CSS' src='./src/img/tailwindcss.png' className=" bg-black  sm:hover:scale-125 border-2 rounded p-3 m-3 border-slate-600	 h-20" />
            </div>
        </div>
    )
}

export default Skill