import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App