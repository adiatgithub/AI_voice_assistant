import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext = createContext()

function UserContext({ children }) {
    const serverUrl = "http://localhost:8000"
    const [userData, setUserData] = useState(null)

    const handleCurrentUser = async () => {
        try {
            const result = await axios.get(`${serverUrl}/api/user/current-user`,
                { withCredentials: true }
            )
            if (result.data) {
                setUserData(result.data.user)
            }
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleCurrentUser()
    }, [])



    const value = {
        serverUrl, userData, setUserData
    }
    return (
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}
export default UserContext
