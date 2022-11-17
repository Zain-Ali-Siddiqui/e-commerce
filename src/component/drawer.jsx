import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { CloseOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export default function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  })
  let navigate = useNavigate()
  let obj = [
    { name: localStorage.getItem('name').toUpperCase() },
    { email: localStorage.getItem('email') },
    { img: JSON.parse(localStorage.getItem('image')) }
  ]
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const logout = () => {
    navigate('/login')
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <div className='close_logout'>
          <div style={{ marginLeft: '20px' }} ><CloseOutlined style={{ fontSize: '25px', marginBottom: '20px' }} onClick={toggleDrawer(anchor, false)} /></div>
          <div className='logout' onClick={logout} ><LogoutIcon /></div>
        </div>
        <div className='main_div_profile'>
          {/* <div ><img className='profile_img' src={obj[2]?.img[0]?.thumbUrl} /></div> */}
          <div className='profile_div'>
            <div ><p>👋 Hi , {obj[0].name}</p></div>
            <div ><p>Email : {obj[1].email}</p></div>
          </div>
        </div>
      </List>
    </Box>
  );
  return (
    <div style={{ width: '10px' }}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ paddig: '0' }} ><span className='profile'><AccountCircleIcon style={{ color: 'black' }} /></span></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
