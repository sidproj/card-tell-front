import { useState } from 'react'
import './App.css'
import { Connect } from './services/connection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={Connect}
        >
          Count is {count}
        </button>
        
      </section>
    </>
  )
}

export default App
