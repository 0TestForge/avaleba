import { useState } from 'react'
import SignupForm from './components/SignupForm'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSuccess = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="app">
        <div className="container">
          
          <div className="desktop-layout">
            <div className="content-left">
              <h1 className="heading">Learn to code by watching others</h1>
              <p className="description">
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
              </p>
            </div>
            <div className="content-right">
              <SignupForm onSuccess={handleSuccess} />
            </div>
          </div>

          
          <div className="mobile-layout">
            <div className="mobile-content">
              <h1 className="heading">Learn to code by watching others</h1>
              <p className="description">
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
              </p>
            </div>
            <SignupForm onSuccess={handleSuccess} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App