import ButtonInfo from "./ButtonInfo"

function Presentation() {
    return (
        <>
            <div className="text-base mb-10	">
                <p className="mb-2">OLÁ, EU SOU</p>
                <h2 className="mb-2	text-4xl font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-500
             via-purple-500 to-pink-500">RODRIGO MENDES</h2>
                <p>DESENVOLVEDOR FRONT-END</p>
            </div>
            <div className="flex-col flex justify-center items-center">
                <ButtonInfo
                    image={'./src/img/github.svg'}
                    link={''}
                    textbutton={"Github"}>
                </ButtonInfo>

                <ButtonInfo
                    image={'./src/img/linkedin.svg'}
                    link={''}
                    textbutton={"Linkedin"}>
                </ButtonInfo>
                
                <ButtonInfo
                    image={'./src/img/download.svg'}
                    link={''}
                    textbutton={"Curriculo"}>
                </ButtonInfo>

            </div>
        </>
    )
}

export default Presentation
