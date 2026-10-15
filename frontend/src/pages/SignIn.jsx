import bg from "../assets/authBg.png"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { userDataContext } from "../context/UserContext.jsx"
function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const { serverUrl, userData, setUserData } = useContext(userDataContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("")

    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr("")
        try {
            let result = await axios.post(
                `${serverUrl}/api/auth/login`,
                {
                    email,
                    password
                }, { withCredentials: true }
            )
            setUserData(result.data)
            setLoading(false)
            navigate("/home")
        }
        catch (error) {
            console.log(error)
            setUserData(null)
            setErr(error.response?.data?.message || "Failed to connect to server. Please try again.")
            setLoading(false)
        }

    }
    return (
        <div
            className='w-full h-screen bg-black bg-cover bg-top bg-no-repeat flex justify-center md:justify-start items-center px-4 md:px-16 lg:px-24'
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <form className='w-[90%] max-w-[480px] h-[600px] bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl
            shadow-2xl shadow-black flex flex-col items-center justify-center gap-[20px] p-6 px-[20px]' onSubmit={handleSignIn}>
                <h1 className='text-white text-2xl sm:text-[30px] font-semibold text-center'>
                    SignIn to your <span className='text-violet-600'> Personal Voice Assistant</span>
                </h1>
                <input type="email" placeholder='Enter Your Email' required className='w-full p-4 bg-white/20 border border-white/30 rounded-full text-white placeholder:text-white/70 text-lg
                focus:outline-none focus:ring-2 focus:ring-violet-700 px-[20px] py-[10px] rounded-full text-[18px]' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <div className="w-full p-4 bg-white/20 border border-white/30 rounded-full text-[18px] flex items-center justify-between relative">
                    <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password' required className='w-full p-4 bg-white/20 border border-white/30 rounded-full text-white placeholder:text-white/70 text-lg
                focus:outline-none focus:ring-2 focus:ring-violet-700 px-[20px] py-[10px] rounded-full text-[18px]' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    {!showPassword && <IoIosEye className="absolute top-[50%] right-[20px] translate-y-[-50%] w-[25px] h-[25px] text-[white] cursor-pointer
                    " onClick={() => setShowPassword(true)} />}
                    {showPassword && <IoIosEyeOff className="absolute top-[50%] right-[20px] translate-y-[-50%] w-[25px] h-[25px] text-[white] cursor-pointer
                    " onClick={() => setShowPassword(false)} />}
                </div>
                {err.length > 0 && <p className="text-red-500 text-[15px]" onClick={() => setErr("")}>*{err}</p>}
                <button className='min-w-[150px] py-[10px] px-[20px] text-black/20 font-semibold
                bg-violet-700 text-white rounded-full text-[18px] hover:bg-violet-600 transition-all duration-300 cursor-pointer mt-[30px]' disabled={loading} >{loading ? "Signing In..." : "Sign In"}</button>
                <p className="text-white mt-[10px] text-[18px]" onClick={() => { navigate("/signup") }}>Don't have an account? <span className="text-violet-600 cursor-pointer hover:text-violet-500 transition-all duration-300">Sign Up</span></p>
            </form>
        </div>
    )
}

export default SignIn
