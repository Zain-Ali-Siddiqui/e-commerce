import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './login'
import { ArrowDownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import Uploader from './antd';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import swal from 'sweetalert';
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (
   <LoadingOutlined
      style={{
         fontSize: 24,
      }}
      spin
   />
)
const firebaseConfig = {
   apiKey: "AIzaSyBy_I9wLPBYCKxBHFADRM1roWhJT2k7axU",
   authDomain: "login-31b42.firebaseapp.com",
   projectId: "login-31b42",
   storageBucket: "login-31b42.appspot.com",
   messagingSenderId: "379109632183",
   appId: "1:379109632183:web:c3479ebce6d62bb07a4532",
   measurementId: "G-SHHMQ0KCW2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const Sign = () => {
   const [loading, setLoading] = useState(false)
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate = useNavigate()
   const signup = () => {
      createUserWithEmailAndPassword(auth, email, password)
         .then(async (userCredential) => {
            const user = userCredential.user;
            navigate('/login')
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            await setDoc(doc(db, "users", user.uid), {
               name: name,
               email: email,
               password: password,
            });
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal(errorCode)
         });
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      }, 1500)
   }
   return (
      <>
         <div className='maindiv'>
            <br /> <br /><br /><br />
            <div className='main_div2'>
               <div className='main_div' >
                  <br />
                  <div style={{ fontSize: '20px' }}><b>Sign-Up  Into Shop</b></div>
                  <div className='main_div1'>
                     <input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                     <br />
                     <br />
                     <br />
                     <input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                     <br />
                     <br />
                     <br />
                     <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
               </div>
               <div className='uploader_div'>
                  <p style={{ fontSize: '20px' }}>Upload Profile Picture<br /> <ArrowDownOutlined style={{
                     fontSize: '23px', marginLeft: '85px', marginTop: '10px', marginBottom: '10px'
                  }} /></p>
                  <div>
                     <Uploader />
                  </div>
               </div>
               <br />
               {!loading ?
                  <div>
                     <button className='btton btn' style={{ color: 'black' }} onClick={signup}>Signup</button>
                  </div>
                  :
                  <>
                     <div className='spin'>
                        <Spin indicator={antIcon} />
                        <p className='spin_loading'>Loading.....</p>
                     </div>
                  </>

               }
               <div style={{ marginTop: '20px' }} className='login_btn'>
                  <p>Already An Account?<br /> <Link to='./login'><p style={{ marginLeft: '50px', color: 'blue' }}>Login</p></Link></p>
               </div>
            </div>
            <div className='imgg'>
               <img className='imgg2' src={'https://www.jarvis-legal.com/wp-content/uploads/2020/05/undraw_file_sync_ot38.svg'} />
            </div>

         </div>
         <br />
         <br />
         <br />

      </>
   )
}
export default Sign