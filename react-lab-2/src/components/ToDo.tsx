import { useNavigate } from "react-router-dom";
import {useState, useRef, useContext, useEffect} from 'react'
import { UserContext } from "../context/userContextProvider";
import toast from 'react-hot-toast';
import {v4 as uuid} from 'uuid'

interface Todo {
    id: string
    title: string
}

export default function ToDo() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState<Todo[]>([])
    const inputData = useRef<HTMLInputElement>(null);
    const userCtx = useContext(UserContext)

    useEffect(() => {
        if (! userCtx.isLogin) {
            navigate("/");
        }
    }, [userCtx.isLogin])

    const handleLogout = () => {
        navigate("/");
        userCtx.toggleUsername('')
        userCtx.toggleIsLogin(false)
    }

    const handleAddTask = () => {
        const input = inputData.current?.value?.trim();

        if (input) {
            setTodos(prev => [
                ...prev,
                {
                    id: uuid(),
                    title: input
                }
            ])

            if (inputData.current) {
                inputData.current.value = "";
            }
        } else {
            toast.error('Please input something...')
        }
    }

    const handleDelete = (todoId: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== todoId))
    }

    return <>
        <div className="bg-neutral-600 w-150 h-auto flex flex-col gap-4 px-8 py-8 justify-center rounded-lg">
            <div className="flex gap-4 justify-between">
                <div className="text-white text-xl font-bold">
                    Welcome, {userCtx.username}!
                </div>
                <button 
                    className="bg-neutral-900 px-4 py-2 rounded-md text-white cursor-pointer"
                    onClick={handleLogout}
                >Log out</button>
            </div>
            <div className="text-white">Have a great and productive day!</div>
            {
                todos.map(todo => (<div className="bg-neutral-400 w-full h-auto text-white flex justify-between items-center p-3">
                    <div>{todo.title}</div>
                    <button 
                        className="bg-red-500 py-2 px-4 cursor-pointer"
                        onClick={() => handleDelete(todo.id)}
                    >Delete</button>
                </div>))
            }
            
            <div className="flex gap-4">
                <input 
                    ref={inputData}
                    type="text"
                    className="bg-neutral-600 text-white border-1 border-neutral-500 rounded-md flex-1 p-2" 
                />
                <button 
                    className="bg-neutral-900 px-4 py-1 rounded-md text-white cursor-pointer"
                    onClick={handleAddTask}
                >Add Task</button>
            </div>
        </div> 
    </>
}