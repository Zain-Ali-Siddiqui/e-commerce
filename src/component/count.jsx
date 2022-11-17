import React, { useState } from "react";
import { useSelector } from "react-redux"
function Count(props) {
    // const additm = JSON.parse(localStorage.getItem("Itemimg"))
    const myReduxData = useSelector((state) => state)
    const Data = myReduxData.CartData.CardInfo
    var amount = Data[props.index].price
    const [count, setCount] = useState(1)
    const [plus, setPlus] = useState(amount)
    const add = () => {
        setCount(count + 1)
        setPlus(amount + plus)
    }
    const min = () => {
        setCount(count - 1)
        setPlus(plus - amount)
    }
    return (
        <>
            <div className="count_div">
                {count === 9 ?
                    <button className='btn_cnt' style={{ opacity: '0.4' }} >+</button> :
                    <button className='btn_cnt' onClick={add}>+</button>
                }
                <div className="cnt">0{count}</div>
                {count === 1 ?
                    <button className='btn_cnt' style={{ opacity: '0.4' }}>-</button> :
                    <button className='btn_cnt' onClick={min}>-</button>}
            </div>
            <div className="total_quant">
                <div className="quan">Quantity : 0{count}</div>
                <h3 className="total" >Total : {+plus}</h3>
                <br />
                <hr />
            </div>
        </>
    )
}
export default Count