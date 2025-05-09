import { Outlet } from "react-router-dom";
import UserContextProvider from "../context/userContextProvider";
import { Toaster } from "react-hot-toast";

export default function Layout() {
    return <>
        <UserContextProvider>
            <div className="w-screen h-screen flex justify-center items-center bg-neutral-800">
                <Outlet />
            </div>      
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </UserContextProvider>
    </>
}