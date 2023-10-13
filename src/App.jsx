import { useState } from 'react'
import themes from './data'
import { language } from './data'
import { Card } from './components/Card'
import { aiRequest } from './services/openai.config'
import { Loading } from './components/Loading'
import { Documentation } from './components/Documentation'

function App() {
  const [theme, setTheme] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleClickTheme(){
    setLoading(true)
    const response = await aiRequest(message)
    setTheme(response.data.choices[0].text)
    setLoading(false)
  }

  function handdleBacktoCard() {
    setTheme("")
  }

  if(loading) return <Loading />

  return (
  <section className='grid place-content-center w-full h-full'>
    <h1 className='text-lime-300 text-5xl text-center font-bold grid grid-cols-1 py-10'>
      { language }
    </h1>

    {theme ? (
      <Documentation handdleBacktoCard={handdleBacktoCard} responseAI={theme}/>
    ) : (
      <div className='grid grid-cols-4 gap-8 px-32'>
        {themes.map((theme, idx) => (
          <Card key={idx} title={theme.name} onClick={() => handleClickTheme(theme.message)}/>
          ))}
      </div>
    )}      
  </section>
  
)
}

export default App
