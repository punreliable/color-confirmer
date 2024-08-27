import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import punLogo from '/logo-punreliable.svg'
import './App.css'

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const viteLink = 'https://vitejs.dev';
  const promoLink = 'https://www.buymeacoffee.com/punreliable';

  return (
    <>
      <div>
        <a href={viteLink} target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={promoLink} target="_blank">
          <img src={punLogo} className="logo punreliable" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Color Confirmer</h1>
      <div className="card">
        <button className={newButtonColor} onClick={() => setButtonColor(newButtonColor) }>
          Change Color to {newButtonColor}
        </button>
        <input 
          type="checkbox" 
          id="disable-button-checkbox" 
          defaultChecked={false} 
        />

        <p>Powered by Vite.</p>
      </div>

      <p className="read-the-docs">Unshakable Self Assurance by Vitest.</p>
    </>
  )
}

export default App
