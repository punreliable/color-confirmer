import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import punLogo from '/logo-punreliable.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Powered by Vite.</p>
      </div>
      <p className="read-the-docs">Unshakable Self Assurance by Vitest.</p>
    </>
  )
}

export default App
