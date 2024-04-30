import React, { useState } from "react";
import UsersProfileData from "../Context/UserData.js";
import './UserProfile.css';
import MapDetails from "../MapDetails/MapDetails.js";

export default function UserProfile(){
    const {userData} = UsersProfileData();

    const [mapShow,setMapShow] = useState(null)

    const handleMap = (value)=>{
        setMapShow(value)
    }

    return(
        <>
            <h1 style={{textAlign:"center"}}>User's Profile</h1>
            <div id="mainBox">

                {/*This will show all user brofile as in box*/}
                {userData?.map((value) => (
                    <div key={value.id} id="userBox">
                        <img src={value.image} alt="personPic" className="profilePic" />
                        <div>
                            <span>{value.firstName} </span>
                            <span>{value.lastName}</span>
                        </div>
                        <div>{value.gender.toUpperCase()}</div>
                        <div>Age- {value.age}</div>
                        <div>{value.email}</div>

                        <div className="btnBox">
                            <button className="summaryBtn" onClick={() => handleMap(value)}>Summary</button>
                        </div>

                    </div>
                ))}

                {/*This will show when we clicked summary btn, it shows map of that particular user location*/}
                {mapShow ? <MapDetails data={mapShow} setMapShow={setMapShow} /> : <></>}
            </div>
        </>
    )
}