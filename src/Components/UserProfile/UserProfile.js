import React, {  } from "react";
import UsersProfileData from "../Context/UserData.js";
import './UserProfile.css';
import MapDetails from "../MapDetails/MapDetails.js";

export default function UserProfile(){
    const {userData} = UsersProfileData();

    return(
        <div id="mainBox">
            {userData?.map((value)=>(
                <div key={value.id} id="userBox">
                    <img src={value.image} alt="personPic" className="profilePic"/>
                    <div>
                        <span>{value.firstName} </span>
                        <span>{value.lastName}</span>
                    </div>
                    <div>{value.gender.toUpperCase()}</div>
                    <div>Age- {value.age}</div>
                    <div>{value.email}</div>

                    <div className="btnBox">
                        <button className="summaryBtn" onClick={()=>alert(`hello ${value.id}`)}>Summary</button>
                    </div>

                </div>
            ))}
            <MapDetails/>
        </div>
    )
}