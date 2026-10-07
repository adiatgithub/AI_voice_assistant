import bg from "../assets/authBg.png"

function SignUp() {
    return (
        <div
            className='w-full h-screen bg-no-repeat bg-center flex justify-center items-center'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "100% 100%"
            }}
        >
            <form className='w-[90%] h-[600px] max-w-[500px] bg-black/10 backdrop-blur
            shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px]'>
                <h1 className='text-white text-[30px] font-semibold'>
                    Register to <span className='text-blue-400'>Voice Assistant</span>

                </h1>

            </form>

        </div>
    )
}

export default SignUp
