import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiResponse, setApiResponse] = useState(null)
  const [error, setError] = useState(null)

  const testBackendConnection = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test')
      const data = await response.json()
      setApiResponse(data)
      setError(null)
    } catch (err) {
      setError('Failed to connect to backend: ' + err.message)
      setApiResponse(null)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task Time Tracking App</h1>
        
        <div className="mb-4">
          <button 
            onClick={testBackendConnection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Test Backend Connection
          </button>
        </div>

        {apiResponse && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p>Backend Response:</p>
            <pre className="mt-2">{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>
    </>
  )
}

export default App
