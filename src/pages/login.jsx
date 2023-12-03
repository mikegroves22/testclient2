import React, {useState} from 'react';
import Axios from "axios";
import './login.css';

 function Login() {

const [usernameAuth, setusernameAuth] = useState("");
const [passwordAuth, setpasswordAuth] = useState("");

const auth = () =>{

Axios.post("https://testserver1-mikegrovess22.onrender.com/auth",{
    username: usernameAuth,
    password: passwordAuth})
    .then((res) =>{

if (res.data.length>0){
  sessionStorage.setItem("username", res.data[0].username )
       window.location = "/#/home"

      }
      else{
        console.log(res.data.message)
        

      }
    })
}


  return (
    <div>

      <div className="loginwrapper">
        
        <div className="form-signin">       
          
          <h2 className="form-signin-heading">Please login</h2>
        
          <input type="text" className="form-control" name="username" placeholder="Username" autoFocus="" onChange={(e) => setusernameAuth(e.target.value)} />
        
          <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => setpasswordAuth(e.target.value)}/>      
      
          <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={auth}>Login</button>   
      
      </div>

    </div>

     
  </div>
  )
}
export default Login