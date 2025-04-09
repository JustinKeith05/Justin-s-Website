import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      {/* Remove the callback function if we want the effect to persist Or remove the (true)*/}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    </div>
  )
}

export default App
