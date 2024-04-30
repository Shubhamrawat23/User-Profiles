import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return(
        <ul>
            <li>
                <Link to="/" >Profiles</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    )
}