
function Project({ image, title, description, link }) {
    return (

        <div className="mb-16 text-base font-light w-11/12 flex flex-col text-justify justify-center items-center content-center ">
            <img className="mb-4" src={image} />
                    
            <button className="text-xl font-light  mb-6  w-6/12	 py-0.5 rounded
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " 
            href={link} target="_blank"> Visualizar </button>

            <h4 className="font-bold text-2xl mb-4"> {title} </h4>
            <p className="mb-8" >{description} </p>
        </div>
    )
}

export default Project
