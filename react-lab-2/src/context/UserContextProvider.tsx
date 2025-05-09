import {createContext, useState, type ReactNode} from 'react'

interface UserContextType {
    isLogin: boolean;
    toggleIsLogin: (state: boolean) => void;
    username: string;
    toggleUsername: (username: string) => void;
  }

export const UserContext = createContext<UserContextType>({
    isLogin: false,
    toggleIsLogin: () => {},
    username: '',
    toggleUsername: () => {}
})

export default function UserContextProvider({children}: {children: ReactNode}) {
    const [username, setUsername] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)
    
    const toggleUsername = (username: string) => {
        setUsername(username)
    }

    const toggleIsLogin = (state: boolean) => {
        setIsLogin(state)
    }
    
    return (
        <UserContext.Provider value={{isLogin, toggleIsLogin, username, toggleUsername}}>
            {children}
        </UserContext.Provider>
    );
}
