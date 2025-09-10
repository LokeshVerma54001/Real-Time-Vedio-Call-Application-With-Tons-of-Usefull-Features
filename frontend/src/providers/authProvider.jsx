import { useAuth } from "@clerk/clerk-react";
import { createContext, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const AuthContext = createContext({});

export default function AuthProvider({children}){
    const {getToken} = useAuth();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.request.use(
            async(config) =>{
                try {
                    const token = await getToken();
                    if(token) config.headers.Authorization = `Bearer ${token}`;
                } catch (error) {
                    if(error.message?.includes("auth") || error.message?.includes('token')){
                        toast.error("Authentication issue. Please referesh the page.");
                    }
                    console.log("Error getting token: ", error);
                }
                return config;
            },
            (error) => {
                console.log("Axios request error: ", error);
                return Promise.reject(error);
            }
        )

        // to avoide memory leaks
        return ()=>{
            axiosInstance.interceptors.request.eject(interceptor);
        }
    }, [getToken]);

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}