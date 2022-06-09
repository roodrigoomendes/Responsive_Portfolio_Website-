
function Project({ image, title, tech, description, link }) {
    return (

        <div className="mb-20 border border-gray-600 rounded-md mx-auto sm:text-xl
                text-base font-light flex flex-col justify-items-start 
                items-center  sm:w-2/5 sm:text-center p-8 ">
            <h4 className="font-bold text-2xl mb-4"> {title} </h4>
            <img className="mb-4" src={image} />


            <div class="flex flex-col justify-center m-5 ">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 rounded-lg blur 
                    opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div class="relative px-5 py-5 bg-black  rounded-lg leading-none flex">

                        <img className="mr-4" src='./src/img/link.svg' alt="" />
                        <a href={link} target="_blank">
                            Visualizar
                        </a>

                    </div>
                </div>
            </div>

            <p className="mb-8" >{description} </p>
            <p>{tech}</p>
        </div>
    )
}

export default Project
