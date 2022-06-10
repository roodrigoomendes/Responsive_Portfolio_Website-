
function Project({ image, title, tech, description, link }) {
    return (

        <div className="sm:grayscale-70 sm:hover:filter-none sm:hover:scale-125 sm:w-2/6 w-10/12 p-5 m-10 
        transition duration-700 ease-in-out border-cyan-900 border font-light text-base">

            <img className="mb-4 " src={image} />
            <h4 className="text-center font-medium text-base mb-4"> {title} </h4>

            <p className="text-justify" >{description} </p>
            <p className="text-justify  text-sm font-semibold text-sky-500 my-3" >{tech} </p>
            <div className="text-center">
                <a href={link} className=" text-base text-center  font-bold text-transparent 
                bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400"
                >DEMO ➢</a>

            </div>
        </div>
    )
}

export default Project
