import React, {useState} from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

 function Login() {

const [usernameAuth, setusernameAuth] = useState("");
const [passwordAuth, setpasswordAuth] = useState("");

const auth = () =>{

    console.log(usernameAuth)
Axios.post("https://testserver1-mikegrovess22.onrender.com/auth",{
    username: usernameAuth,
    password: passwordAuth})
    .then((res) =>{

if (res.data.length>0)
       window.location = "/home"
      else{
        console.log(res.data.message)
      }
    })
}


  return (
    <div> Login Page
    <br/>
    <br/>
    <br/>
    
     Username<input type="text" id="username" name="username" onChange={(e) => setusernameAuth(e.target.value)}/>
     <br/>
     Password
     <input type="password" id="password" name="password" onChange={(e) => setpasswordAuth(e.target.value)}/>
     <br/>
     <br/>
     <input type="submit" id="submit" name="submit" onClick={auth}/>
    

     <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>






     
     </div>
  )
}
export default Login