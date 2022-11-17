import React from "react";
import { Link } from 'react-router-dom'
import Mui from "./modal";
import Map from "./map";
import SideBar from "./drawer";
import NavBAr from "./navBar.jsx";

function Kids() {
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul><li><Link to='/home'><p>Women</p></Link></li><li><Link to='/men'><p>Men</p></Link></li><li><Link to='/kid'><p style={{ color: '#5ece71' }}>Kids</p></Link></li></ul>
                </nav>
                <div className="slide_modal" >
                    <div className="li" ><Mui /></div>
                    <div className="slide"><SideBar className='slid' /></div></div>
            </div>
            <div className="navBar">
                <NavBAr />
            </div>
            <br />
            <br />
            <h1>Kids Collection</h1>
            <div><Map /></div>
            <br />
        </>
    )
} export default Kids