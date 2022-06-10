import ButtonInfo from "./ButtonInfo"

function Presentation() {
    return (
        <>
            <div className="text-base my-40 text-center sm:text-4xl">
                <p className="mb-2">OLÁ, EU SOU</p>
                <h2 className="w-fit mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400
                mx-auto sm:text-6xl sm:my-10">
                RODRIGO MENDES</h2>
                <p>DESENVOLVEDOR FRONT-END</p>
            </div>
            <div className="flex-row flex-wrap flex justify-center items-center">
                <ButtonInfo
                    image={'./src/img/github.svg'}
                    link={'https://github.com/roodrigoomendes'}
                    textbutton={"Github"}>
                </ButtonInfo>

                <ButtonInfo
                    image={'./src/img/linkedin.svg'}
                    link={'https://www.linkedin.com/in/rodrigomendes-/'}
                    textbutton={"Linkedin"}>
                </ButtonInfo>
                
      {/*          <ButtonInfo
                    image={'./src/img/download.svg'}
                    link={''}
                    textbutton={"Curriculo"}>
                </ButtonInfo>
        */}

            </div>
        </>
    )
}

export default Presentation
