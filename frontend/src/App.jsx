import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Customize from './pages/Customize.jsx'
import Home from './pages/Home.jsx'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext.jsx'

function App() {
  const { userData, setUserData } = useContext(userDataContext)
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Routes>
        <Route path="/" element={(userData?.assistantImage &&
          userData?.assistantName) ? <Home /> : <Navigate to={"/customize"} />} />
        <Route path="/home" element={(userData?.assistantImage &&
          userData?.assistantName) ? <Home /> : <Navigate to={"/customize"} />} />
        <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to={"/"} />} />
        <Route path="/signin" element={!userData ? <SignIn /> : <Navigate to={"/"} />} />
        <Route path="/customize" element={userData ? <Customize /> : <Navigate to={"/signin"} />} />


      </Routes>
    </div>
  )
}

export default App