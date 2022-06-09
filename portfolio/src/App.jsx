
import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Title from './components/Title'


function App() {
  return (
    <div className=''>
      <div>
        <NavBar />
        <Presentation />

        <Title>SOBRE MIM</Title>
        <Aboutme />

        <Title>PROJETOS</Title>
        <div className='sm:flex'>
          <Project
            image={'./src/img/Travel_Agency.png'}
            title={'Travel Agency'}
            tech={'HTML, CSS, Javascript vanilla'}
            description={'Site de uma agência de viagem, desenvolvido aplicando o conhecimento de HTML e CSS com implementação do Googlemaps com Javascript'}
            link={'https://travel-agency-weld.vercel.app/'} >
          </Project>

          <Project
            image={'./src/img/SLACA.png'}
            title={'Slaca 13'}
            tech={'HTML, CSS, Javascript vanilla'}
            description={'Pagina institucional do evento 13° Slaca feita para avaliação de estágio Front-End, composto por HTML e CSS com interações e criação de elementos em Javascript'}
            link={'https://13-slaca.vercel.app/'} >
          </Project>

          <Project
            image={'./src/img/portfolio.png'}
            title={'Portfolio'}
            tech={'ReactJs e TailwindCSS'}
            description={'Site de Portfolio de projetos pessoais'}
            link={'https://13-slaca.vercel.app/'} >
          </Project>
        </div>

      </div>
    </div>

  )
}

export default App
