
function ButtonInfo({ image, textbutton, link }) {
    return (
        <>
            <div class="flex flex-col justify-center m-5 ">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 rounded-lg blur 
                    opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div class="relative px-5 py-5 bg-black  rounded-lg leading-none flex">
                        
                        <img className="mr-4" src={image} alt=""  />
                        <a href={link} target="_blank"> 
                            {textbutton}
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtonInfo
