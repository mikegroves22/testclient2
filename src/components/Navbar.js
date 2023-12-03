import { Component } from "react";
//import Axios from "axios";
import '../styles/navbar.css';
import items from "../data/sidebar.json"
import subitems from "../data/sidebaritem.json"

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            navbar: [],
            navbarlists: [],
        }
    }

    componentDidMount() {
    
    // let username = sessionStorage.getItem("username");
    // Axios.post("/nav", {
    //     username: username
        
    // }).then((res) => {
    //     if (res.data.length >0){
    //         this.setState({navbar: res.data});
           
    //     }
    //     else{
          
    //     }
    // });
    // Axios.post("/navlists", {
    //     username: username
        
    // }).then((res) => {
    //     if (res.data.length >0){
    //         this.setState({navbarlists: res.data});
    //     }
    //     else{
           
    //     }
    // });
    }

    render() {

        const logoff= () =>{
            if (window.confirm('Are you sure you want to Log Off?')) {
                sessionStorage.removeItem('username');
                window.location = "/"
                
            }
            else{

            }
        }

        return(<div className="shape">
                 
                <div className="shapenav">

                 <ul className="aaa">
                     {items.map(navbarlink =>
                     
                     <li className="bbb" key={navbarlink.Row}>{navbarlink.title}
                     
                        <ul>
                         
                       { subitems.filter(navbarlist => navbarlist.title === navbarlink.title)
                           .map(navbarlist =><li className="ccc" key={navbarlist.subtitle}> <a className="bbb" href={navbarlist.path}>{navbarlist.subtitle}</a></li>)}
                            
                       
                        </ul>

                     </li>
                     )}
                 </ul>
                 
                        {/* <div>
                            <select type="text" >
                                <option value="LIVE" >LIVE</option>
                                <option value= "TEST" >TEST</option>
                            </select>
                        </div> */}
 
                 </div>

                    <div className="navright">
                        <button className="logoffbtn" onClick={logoff}>Log Off</button>
                    </div>

              </div>
        );
    }
}

export default Navbar;
