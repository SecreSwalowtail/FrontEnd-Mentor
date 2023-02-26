import { useState } from 'react'
import mobileDivider from './assets/pattern-divider-mobile.svg'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import buttonDice from './assets/icon-dice.svg'
import './App.css'
import { getAdvice } from './assets/services/ApiHandler'

function App() {
  let [id, setId] = useState("")
  let [advice, setAdvice] = useState("")

  const buttonHandler = () => {
    getAdvice()
      .then (
        data => {
          const { slip: { id, advice} } = data
          setId(id)
          setAdvice(advice)
        }
      )
    console.log(id)
    console.log(advice)
  }

  return (
    <div className="advice-card">
        <p className='slip-id'>{id ? `ADVICE #${id}` : "Press the button for an advice"}</p>
        <h1 className='slip-advice'>{advice ? `“${advice}”` : "Press the button for an advice"}</h1>
        <img src={desktopDivider} className="pattern-divider-desktop"/>
        <img src={mobileDivider} className="pattern-divider"/>
        <button className='button' onClick={buttonHandler}>
          <img src={buttonDice} className="button-image" />
        </button>
    </div>
  )
}

export default App
