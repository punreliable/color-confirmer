import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import punLogo from '/logo-punreliable.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(count) {
    setCount((count) => count + 1);
  }

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={punLogo} className="logo punreliable" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Color Confirmer</h1>
      <div className="card">
        {/* <button className="red" onClick={() => increaseCount(count) }>
          Change Color to blue
        </button> */}
        <button className={newButtonColor} onClick={() => setButtonColor(newButtonColor) }>
          Change Color to {newButtonColor}
        </button>
        <p>Powered by Vite.</p>
      </div>
      <p className="read-the-docs">Unshakable Self Assurance by Vitest.</p>
    </>
  )
}

export default App
