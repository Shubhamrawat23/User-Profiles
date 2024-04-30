import React from "react";
import UsersProfileData from '../Context/UserData.js'
import './UserForm.css';

export default function UserForm({formVisible}){

    const {userData,setUserData} = UsersProfileData()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("hello");
        const formData = new FormData(e.target)

        //checking that duplicate data not added
        const isDuplicate = userData.filter((user) => {
            return (user.firstName === formData.get('firstName') && user.lastName === formData.get('lastName')) ||
                user.email === formData.get('email');
        });

        if (isDuplicate.length > 0) {
            alert('This profile already exist')
        }
        else {
            const newData = {
                id: userData.length + 1,
                image: 'https://source.unsplash.com/random?cartoon',
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                gender: formData.get('gender'),
                age: parseInt(formData.get('age')),
                email: formData.get('email'),
                phone:parseInt(formData.get('phone')),
                address:{
                    address:formData.get('address'),
                    city:formData.get('city'),
                    coordinates:{
                        lat: parseFloat(formData.get('lat')),
                        lng: parseFloat(formData.get('lon')),
                    },
                },
            }
            setUserData([...userData,newData])
        }
        formVisible(false)
    }

    const handleclose = ()=>{
        formVisible(false)
    }
    
    
    return(
        <form id="userform" onSubmit={handleSubmit}>
            <button onClick={handleclose} id="closeBtn">close</button>

            <div id="fullName">
                <label>FirstName: </label>
                <input type="text" placeholder="First Name" name="firstName" pattern="[A-Za-z]{1,20}" required/>

                <label> LastName: </label>
                <input type="text" placeholder="Last Name" name="lastName" pattern="[A-Za-z]{1,20}" required/>
            </div>


            <div id="genderBox">
                <label>Gender: </label>

                <input type="radio" id="male" value="MALE" name="gender" required/>
                <label htmlFor="male">MALE</label>

                <input type="radio" id="female"value="FEMALE"  name="gender" required/>
                <label htmlFor="female">FEMALE</label>
            </div>

            <div id="ageBox">
                <label>Age: </label>
                <input type="number" placeholder="Age" name="age" pattern="^(1[8-9]|[2-9][0-9]|1[01][0-9]|120)$" required/>
            </div>

            <div id="emailBox">
                <label>Email: </label>
                <input type="email" placeholder="Email Id" name="email" pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}" required/>
            </div>

            <div id="phoneBox">
                <label>Phone: </label>
                <input type="number" placeholder="Phone No. with country code (e.g. +xxxxxxxxxxxx)" name="phone" pattern="^\+(?:[0-9] ?){6,14}[0-9]$" required/>
            </div>

            <div id="address">
                <label>Address: </label>
                <textarea name="address" required/>
            </div>

            <div id="cityBox">
                <label>City :</label>
                <input type="text" placeholder="City Name" name="city" pattern="^[A-Za-z\s-]{2,50}$" required/>
            </div>

            <div id="coordinateBox">
                <div>Coordinates:</div>
                <label> Lat-</label>
                <input type="number" placeholder="Latitude" step="any" name="lat" pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$" required/>

                <label> Lon-</label>
                <input type="number" placeholder="Longitude" step="any" name="lon" pattern="^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$" required/>
            </div>

            <button id="submitBtn">Submit</button>
        </form>
    )
}