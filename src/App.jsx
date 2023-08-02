import { useState } from 'react'
import collegeLogo from './assets/college-emblem.svg'
import './App.css'
import CommentForm from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={collegeLogo} className="logo react" alt="React logo" />
      </div>
      <h1>George is my friend</h1>
      <h2>George likes to sleep</h2>
      <CommentForm/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
