import { useEffect, useState } from 'react'
import './App.css'
import Progress from 'react-circle-progress-bar'
import { useNuiEvent } from './utils/NuiEvents'


function App() {

  const [health, setHealth] = useState(100)
  const [kevlar, setKevlar] = useState(100)
  const [hunger, setHunger] = useState(100)
  const [water, setWater] = useState(100)

  useEffect(() => {
    useNuiEvent('updateStats', (data) => {
      setHealth(data.health)
      setKevlar(data.kevlar)
      setHunger(data.hunger)
      setWater(data.water)
    })
  }, [])

  return (
    <>
      <Progress progress={health} hideBall={true} hideValue={true} />
      <Progress progress={kevlar} hideBall={true} hideValue={true} />
      <Progress progress={hunger} hideBall={true} hideValue={true} />
      <Progress progress={water} hideBall={true} hideValue={true} />
    </>
  )
}

export default App
