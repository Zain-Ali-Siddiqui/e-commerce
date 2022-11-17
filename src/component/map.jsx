import React, { useState, useEffect } from "react";
import Cart from "./loader";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { cartData } from "../redux/action/action";

function Map() {
    const [add, setAdd] = useState([])
    const [addbtn, setAddbtn] = useState(false)
    const [newdata, setNewdata] = useState()
    const dispatch = useDispatch()
    const myReduxData = useSelector((state) => state)
    const uid = myReduxData.CartData.loginInformation.id
    let obj = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyeD_HyO7s6zqUxyix_J5vbH0gSemk-qctZw&usqp=CAU',
            p: 'Apollo Running Short',
            price: 1200,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9x2CSOCpQBNLYYLl0aC6qfm18iZhAcwmoQ&usqp=CAU',
            p: 'New Style Dress for Girls  ',
            price: 2200,
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0553/3774/6621/files/Boy_e13eab58-c299-408e-bca0-2ed709926887.png?v=1660630325',
            p: ' New style Jeans for Kids  ',
            price: 5100,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4lcZH-mGBWAFtZphqzG47i__CUu-oJcpag&usqp=CAU',
            p: 'New  Ramper For Kids',
            price: 3100,
        },
        {
            img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80',
            p: 'New style Suit for man',
            price: 5000,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj2SsFVR66TK27_0zpKoYTiflon5KxxLBaQ&usqp=CAU',
            p: 'New Style Dress For Girls ',
            price: 7000
        },
        {
            img: 'https://i.pinimg.com/736x/d5/73/94/d57394de63883fafc8b2beb629f2f323.jpg',
            p: 'New Style Kids Dress',
            price: 4500
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPml0qqcDJKQIn0RRyoINfPcFSfQ9cT8D6-A&usqp=CAU',
            p: 'New Style Kids Dress',
            price: 9500
        }
    ]
    const additm = (items) => {
        setAddbtn(true)
        let Card = {
            img: items.img,
            p: items.p,
            price: items.price,
            uid: uid
        }
        dispatch(cartData(Card))
        setAdd([...add, { img: items.img, p: items.p, price: items.price, uid: uid }])
    }
    useEffect(() => {
        setAddbtn(false)
        localStorage.setItem('Itemimg', JSON.stringify(add))
        const oldData = JSON.parse(localStorage.getItem('Itemimg'))
        const newarray = []
        oldData?.map((data, index) => {
            newarray.push(data?.img)
        })
        setNewdata(newarray)
    }, [addbtn === true])
    return (
        <>
            {
                obj?.map((v, i) => {
                    return (
                        <>
                            <div className="img">
                                <div>
                                    <img src={v?.img} />
                                    <p className="map_para" > {v?.p} <br />  {v?.price}</p>
                                    <br />
                                    <button className="btton" onClick={() => {
                                        if (newdata.includes(v?.img)) {
                                            alert("This Cart Is Already Added ")
                                        }
                                        else {
                                            additm(v)
                                        }
                                    }} >
                                        <Cart />
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
                )
            }
        </>
    )
}
export default Map