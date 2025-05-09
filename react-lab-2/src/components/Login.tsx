import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContextProvider";
import toast from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null)
    const userCtx = useContext(UserContext)

    const handleLogin = () => {
        if (usernameRef.current && usernameRef.current.value != '') {
            userCtx.toggleUsername(usernameRef.current.value)
            userCtx.toggleIsLogin(true)
            toast.success('Login Successful')
            navigate("todo")
        } else {
            toast.error('Please input your name.')
        }
    }

    return <>
        <div className="bg-neutral-600 w-150 h-40 flex flex-col gap-4 px-8 justify-center rounded-lg">
            <p className="text-white text-xl font-bold">Hi. What's your name?</p>
            <div className="flex gap-4">
                <input 
                    ref={usernameRef}
                    type="text"
                    className="bg-neutral-600 text-white border-1 border-neutral-500 rounded-md flex-1 p-2" 
                />
                <button 
                    className="bg-neutral-900 px-2 py-2 rounded-md text-white cursor-pointer"
                    onClick={handleLogin}
                >Login</button>
            </div>
        </div> 
    </>
}