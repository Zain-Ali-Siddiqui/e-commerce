import React from "react";
import { Link } from 'react-router-dom'
import Mui from "./modal.jsx";
import { ArrowLeftOutlined } from '@ant-design/icons'
import swal from 'sweetalert'
import Count from './count'
import SideBar from "./drawer.jsx";
import NavBAr from "./navBar.jsx";
import { useSelector } from "react-redux"

function Bag() {
    const order = () => { swal('Thanks For Order') }
    const myReduxData = useSelector((state) => state)
    const Data = myReduxData.CartData.CardInfo
    const id = myReduxData.CartData.loginInformation.id

    return (
        <>
            <div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <a> <li><Link to='/home'><p style={{ color: '#5ece71' }}>Women</p></Link></li></a>
                            <li><Link to='/men'><p> Men</p></Link></li>
                            <li><Link to='/kid'><p>Kids</p></Link></li>
                        </ul>
                    </nav>
                    <div className="slide_modal">
                        <div className="li" ><Mui /></div>
                        <div className="slide"><SideBar className='slid' /></div>
                    </div>
                </div>
                <div className="navBar">
                    <NavBAr />
                </div>
                <br />
                <br />
                <div className="cart">
                    <h1>Cart</h1>
                    <Link to='/home'> <h6 className="go_back"  ><ArrowLeftOutlined style={{ fontSize: '25px' }} /></h6></Link>
                </div>
                <br />
                <hr />
                <div className="main_bag_div">
                    {Data?.map((v, i) => {
                        return (
                            <>
                                {
                                    id !== v.uid ?
                                        null :
                                        <div className="apolo">
                                            <br />
                                            <h3><b>{[v.p]}</b></h3>
                                            <h3><b>Rs.{[v.price]}</b></h3>
                                            <h3>Size</h3>
                                            <div className='sizes'>
                                                <button>S</button>
                                                <button className="siz">M</button>
                                                <button>L</button>
                                            </div>
                                            <div className='clr_div'>
                                                <div >Color</div>
                                                <br />
                                                <span className='clr_1 green'></span>
                                                <span className='clr_1 grey'></span>
                                                <span className='clr_1 blue'></span>
                                            </div>
                                            <div className="img_count">
                                                <img className="im" src={[v?.img]} />
                                                <Count index={i} />
                                            </div>
                                        </div>

                                }

                            </>
                        )
                    })}
                    <br />
                    <br />
                    <Link to='/home' ><div className="btton butt" onClick={order}>Order</div></Link>
                    <span className="order">
                    </span>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}
export default Bag