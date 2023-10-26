import React, {useState} from 'react';
import Axios from "axios";

 function Login() {

const [usernameAuth, setusernameAuth] = useState("");
const [passwordAuth, setpasswordAuth] = useState("");

const auth = () =>{

    console.log(usernameAuth)
Axios.post("/auth",{
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
    
     
     </div>
  )
}
export default Login