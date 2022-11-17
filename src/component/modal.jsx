import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useSelector } from "react-redux"
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));
export default function Mui() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const myReduxData = useSelector((state) => state)
  const Data = myReduxData.CartData.CardInfo

  // let modal_uid;
  // Data.forEach(element => {
  //   modal_uid = element.uid
  // });
  const id = myReduxData.CartData.loginInformation.id
  const closed = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button className='btn_modal' onClick={handleOpen}>
        <ShoppingCartOutlined className='Shopping' style={{ color: 'black' }} marginTop='-10px' /></Button>
      {/* <IconButton aria-label="cart">
        <StyledBadge className='icon' badgeContent={Data?.length} max={9} color="secondary">
        </StyledBadge>
      </IconButton> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box'  >
          {Data?.map((v, i) => {
              return (
                <>
                  {
                    id === v.uid ?
                      <div className='modal_main_div'>
                        <div style={{ marginLeft: '45%' }}>
                          <img className='modal_img' src={[v?.img]} />
                        </div>
                        <div className="apo">
                          <h3><b>{[v?.p]}</b></h3>
                          <h3><b>Rs.{[v?.price]}</b></h3>
                          <h3>Size</h3>
                          <div className='size'>
                            <button>S</button>
                            <button className='siz'>M</button>
                            <button>L</button>
                          </div><br />
                          <div className='clr_div1'>
                            <div >Color</div><br />
                            <span className='clr_1 green' ></span>
                            <span className='clr_1 grey' ></span>
                            <span className='clr_1 blue' ></span>
                          </div></div> <br /><br /><hr /><br />
                      </div> :
                      null
                  }
                </>
              )
            })}
          {Data?.length === 0 ?
            <div className='Empty'><p>Sorry Your Cart IS Empty!!</p></div> :
            <div style={{ marginLeft: '20px' }}>
              <Link to='/bag'  ><button className='footer_btn' >View Bag</button></Link>
              <button onClick={closed} className='footer_btn but'>Check Out</button>
            </div>
          }
        </Box>
      </Modal>
    </div >
  );
}
