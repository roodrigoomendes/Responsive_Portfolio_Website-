
function ButtonInfo({ image, textbutton, link}) {
    return (
        <>
            <button className=" mb-5 mx-5 hover:bg-gradient-to-r from-indigo-500
             to-purple-500 font-semibold rounded border p-3 flex">
                <img className="mr-4" src={image} alt="" />
                <a href={link}>
                {textbutton}
                </a>
            </button>
        </>
    )
}

export default ButtonInfo
