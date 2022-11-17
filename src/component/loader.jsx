import React, { useState } from "react";
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
function Cart() {
    const [loading, setLoading] = useState(false)
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    )
    return (
        <>
            {
                !loading
                    ?
                    <div className="load" onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                        setLoading(false)
                        }, 1500)r
                    }} >Add To Cart</div> :
                    <>
                        <div className="load" >Carted
                        <Spin indicator={antIcon} />
                        </div>
                    </>
            }
        </>
    )
}
export default Cart