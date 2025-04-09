import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      {/* Remove the callback function if we want the effect to persist */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded}/>}
    </div>
  )
}

export default App
