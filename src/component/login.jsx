import React, { useState } from "react";
import './home'
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import swal from "sweetalert";
import { useDispatch } from "react-redux"
import { LoginUserData } from "../redux/action/action";
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
function Login() {
   const [loading, setLoading] = useState(false)
   const dispatch = useDispatch()
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate = useNavigate()
   const login = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(async (userCredential) => {
            const user = userCredential.user;

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
               navigate('/home')
               let mylogininfo = {
                  id: user.uid,
                  name: docSnap.data().name,
                  email: docSnap.data().email,
                  password: docSnap.data().password
               }
               dispatch(LoginUserData(mylogininfo))
            } else {
               console.log("No such document!");
            }
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
         <div className="maindiv" style={{ height: '500px' }}>
            <br /> <br /> <br /> <br />
            <div className="main_div2">
               <div className="main_div">
                  <br />
                  <div style={{ fontSize: '20px' }} >
                     <b> Login Into Shop</b>
                  </div>
                  <div className='main_div1'>
                     <input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                     <br />
                     <br />
                     <br />
                     <input placeholder="Enter Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
               </div>
               {!loading ?
                  <div>
                     <button className="btton btn" onClick={login}>
                        Login
                     </button>
                  </div> :
                  <div className="spin">
                     <Spin indicator={antIcon} />
                     <p className="spin_loading">Please Wait..</p>
                  </div>
               }
            </div>
            <br />
            <br />
            <br />
            <div className="imgg">
               <img className="imgg2" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjfErKcxuo4vsVxqlezvqfSh-wp6mTd0Duw&usqp=CAU'} />
            </div>
         </div>
      </>
   )
}
export default Login