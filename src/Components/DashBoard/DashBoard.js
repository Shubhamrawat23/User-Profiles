import React, { useState } from "react";
import UsersProfileData from "../Context/UserData";
import './DashBoard.css'
import UserForm from "../UserForm/UserForm";

export default function DashBoard(){
    const {userData,setUserData} = UsersProfileData()
    const [isUserFormVisible,setIsUserFormVisible] = useState(false)

    
    const handleAddProfile = ()=>{
        setIsUserFormVisible(true)
    }


    const handleDelete = (id) => {
        setUserData(prev=>prev.filter((value)=>value.id!==id))
    }
    return(
        <div id="mainBoxForDashBoard">
            <span id="addProfile" onClick={handleAddProfile}>+ Add Profile</span>
            {isUserFormVisible?<UserForm formVisible={(value)=>setIsUserFormVisible(value)} />:<></>}

            <div>
                {userData && userData.map((value) => (
                    <div key={value.id} className="userBoxForDashBoard">
                        <img src={value.image} alt="profilePic" className="profilePicForDashBoard" />
                        <div className="userNameBox">
                            <span>{value.firstName} </span>
                            <span>{value.lastName}</span>
                        </div>
                        <button onClick={() => handleDelete(value.id)} className="deleteBtn">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}