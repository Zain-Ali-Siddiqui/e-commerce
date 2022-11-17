import React from "react";
import { Link } from 'react-router-dom'
import Mui from "./modal";
import Map from "./map";
import SideBar from "./drawer";
// import { UserOutlined } from '@ant-design/icons'
import NavBAr from "./navBar.jsx";
function Home() {
    return (
        <>
            <div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <a><li><Link to='/home'><p style={{ color: '#5ece71' }}>Women</p></Link></li></a>
                            <li><Link to='/men'><p> Men</p></Link></li>
                            <li><Link to='/kid'><p>Kids</p></Link></li>
                        </ul>
                        <div className="slide_modal" >
                            <div className="li" ><Mui /></div>
                            <div className="slide"><SideBar className='slid' /></div>
                        </div>
                    </nav>
                </div>
                <div className='navBar'>
                    <NavBAr />
                </div>
                <br />
                <br />
                <div className="collection" >
                    <h1>Women Collection</h1>
                </div>
            </div>
            <div><Map /></div>
            <br/>
        </>
    )
}
export default Home

