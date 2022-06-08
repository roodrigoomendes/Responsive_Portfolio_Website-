
import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Title from './components/Title'
import ButtonInfo from './components/ButtonInfo'

function App() {
  return (
    <div className='ml-6'>
      <div>
        <NavBar />
        <Presentation />

        <Title>SOBRE MIM</Title>
        <Aboutme />
        <Title>TECNOLOGIAS</Title>

        <Title>PROJETOS</Title>
        <Project
          description={'Site de uma agência de viagem, desenvolvido aplicando o conhecimento de HTML e CSS com implementação do Googlemaps com Javascript'}
          image={'./src/img/Travel_Agency.png'}
          title={'Travel Agency'}
          link={'https://travel-agency-weld.vercel.app/'} >
        </Project>
        <Project
          description={'Pagina institucional do evento 13° Slaca feita para avaliação de estágio Front-End, composto por HTML e CSS com interações e criação de elementos em Javascript'}
          image={'./src/img/SLACA.png'}
          title={'Slaca 13'}
          link={'https://13-slaca.vercel.app/'} >
        </Project>



      </div>
    </div>

  )
}

export default App
