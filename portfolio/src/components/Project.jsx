
function Project({ image, title, description, link }) {
    return (

        <div className="mb-16 text-base font-light w-11/12 flex flex-col text-justify justify-center items-center content-center ">
            <img className="mb-4" src={image} />


            <div class="flex flex-col justify-center m-5 ">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 rounded-lg blur 
                    opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div class="relative px-5 py-5 bg-black  rounded-lg leading-none flex">
                        
                        <img className="mr-4" src='./src/img/link.svg' alt=""  />
                        <a href={link} target="_blank"> 
                        Visualizar
                        </a>
                        
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-2xl mb-4"> {title} </h4>
            <p className="mb-8" >{description} </p>
        </div>
    )
}

export default Project
