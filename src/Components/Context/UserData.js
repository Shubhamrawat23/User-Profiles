import { createContext, useContext, useState, useEffect } from "react";

const UserProfile = createContext()

export function UserProvider({children}){
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=100')
            .then(res => res.json())
            .then(resp => setUserData([...resp.users]));
    }, [])
    return <UserProfile.Provider value={{userData, setUserData}}>{children}</UserProfile.Provider>
}
export default function UsersProfileData(){
    return useContext(UserProfile);
}