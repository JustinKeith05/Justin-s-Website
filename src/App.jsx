import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css";
import { Navbar } from './components/Navbar'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      {/* Remove the callback function if we want the effect to persist Or remove the (true)*/}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

      <div 
        className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100" : "opacity-0"} 
        bg-black text-gray-100`}
      >

        

      </div>
    </div>
  )
}

export default App
