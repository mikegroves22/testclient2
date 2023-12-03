import {Component} from 'react';
import Axios from "axios";
import Navbar from '../components/Navbar';
import '../styles/containers.css';
import Htmltable from '../components/Htmltable';
import Mainbuttons from '../components/Mainbuttons';

class Users extends Component {
  constructor(){
      super();
      this.state = {
          sqltable: [],
          tablecols: [],
      }
  }


  componentDidMount() {
    
    document.getElementById('createbtn').disabled = "true";
    document.getElementById('updatebtn').disabled = "true";
    document.getElementById('deletebtn').disabled = "true";

    document.getElementById('soid1').disabled = "true";
    document.getElementById('soid2').disabled = "true";
    document.getElementById('soid3').disabled = "true";
    document.getElementById('soid4').disabled = "true";
    document.getElementById('soid5').disabled = "true";

    let username = sessionStorage.getItem("username");
    Axios.post("/selectall", {
        tablename: "users"
        
    }).then((res) => {
        if (res.data.length >0){
            this.setState({sqltable: res.data});
            //console.log(res);
           //console.log("pass on users")
        }
        else{
           // console.log("nope on users"); 
        }
    });
    Axios.post("/tablecols", {
        tablename: "users",
        tabletype: "left",
        
    }).then((res) => {
        if (res.data.length >0){
            this.setState({tablecols: res.data});
        }
        else{
           
        }
    });
    }


  render() {

    const getsqldata = () =>{

      Axios.post("/selectall", {
        tablename: "users"
        
    }).then((res) => {
        if (res.data.length >0){
            this.setState({sqltable: res.data});
            //console.log(res);
           //console.log("pass on users")
        }
        else{
           // console.log("nope on users"); 
        }
    });

      // selectallorderby("/selectallorderby", this.constructor.name.toLowerCase(),"usercode").then((res) =>{
      //   if (res){
      //     this.setState({sqltable: res});
      //     }
      //     else{
      //     this.setState({sqltable: []})
      //     }
      //    })
    }
  
    const search = (e)=>{
  
      Axios.post("/htmltablesearch",{
  
        search: e.target.value,
        tablename: "users",
        ltablecols: this.state.ltablecols
    })
       
      .then((res) => {
         if (res.data.length >0){
             this.setState({sqltable: res.data});       
         }
         else{
          this.setState({sqltable: []});
         
         }
     });
  
    }
  
  const sqltoinputbox = (code) => {

    //console.log(code)
    //console.log(this.state.sqltable.filter(data => data.usercode === code))
    const selectedrow = this.state.sqltable.filter(data => data.usercode === code)

   // console.log(selectedrow[0].groups)

    document.getElementById('soid1').value = selectedrow[0].usercode;
    document.getElementById('soid2').value = selectedrow[0].username;
    document.getElementById('soid3').value = selectedrow[0].password;
    document.getElementById('soid4').value = selectedrow[0].groups;
    document.getElementById('soid5').value = selectedrow[0].status;

  
  //   Axios.post("/selectedrow",{
  //     code: code,
  //     col: "usercode",
  //     sqltable: this.constructor.name.toLowerCase(),
  //     orderbycol: "usercode",
  //     orderbytype: "desc",
  
  //   }).then((res) => {
  //      if (res.data.length>0){
         
  //         document.getElementById('soid1').value = res.data[0].usercode;
  //         document.getElementById('soid2').value = res.data[0].username;
  //         document.getElementById('soid3').value = res.data[0].password;
  //         document.getElementById('soid4').value = res.data[0].groups;
  //         document.getElementById('soid5').value = res.data[0].status;
          
  //      }
  //  });
  }
  
  function selectrowtoinput(e){
  
    var code = e.target.parentNode.children[0].innerHTML;
  
    var x = document.getElementById("table").rows.length
  
  for (var i=0; i < x-1; i++) {
    document.getElementById(i).removeAttribute("class");
  }
  
  document.getElementById(e.target.parentNode.id).classList.add('MyClass');
  
    document.getElementById("updatebtn").removeAttribute("disabled");
    document.getElementById("deletebtn").removeAttribute("disabled");
    document.getElementById("newrowbtn").removeAttribute("disabled");
    document.getElementById('createbtn').disabled = "true";
  
    document.getElementById("soid1").removeAttribute("disabled");
    document.getElementById("soid2").removeAttribute("disabled");
    document.getElementById("soid3").removeAttribute("disabled");
    document.getElementById("soid4").removeAttribute("disabled");
    document.getElementById("soid5").removeAttribute("disabled");
  
    sqltoinputbox(code);
       
  }
  
        const update = ()=>{
  
                      Axios.post("/"+this.constructor.name.toLowerCase()+"/update",{
                      soid1: document.getElementById('soid1').value,
                      soid2: document.getElementById('soid2').value,
                      soid3: document.getElementById('soid3').value,
                      soid4: document.getElementById('soid4').value,
                      soid5: document.getElementById('soid5').value,
  
                      }).then((res) => {
                      console.log(res)
                      console.log("updated")
                      getsqldata();
                  });
                  
        }
  
        const create = ()=>{
  
                      Axios.post("/"+this.constructor.name.toLowerCase()+"/add",{
                      soid1: document.getElementById('soid1').value,
                      soid2: document.getElementById('soid2').value,
                      soid3: document.getElementById('soid3').value,
                      soid4: document.getElementById('soid4').value,
                      soid5: document.getElementById('soid5').value,
  
                      }).then((res) => {
                      console.log(res)
                      console.log("created")
                      getsqldata();
                  });
  
          clearinputs();
        }
  
  
        const deleterow = ()=>{
  
            Axios.post("/deleterow",{
              code: document.getElementById('soid1').value,
              col: "usercode",
              tablename: this.constructor.name.toLowerCase(),
              
                    }).then((res) => {
                      console.log(res)
                      console.log("deleted")
                      getsqldata();
                });
                
                clearinputs();
  }
  
        const clearinputs = () =>{
          document.getElementById('soid1').value = "";
          document.getElementById('soid2').value = "";
          document.getElementById('soid3').value = "";
          document.getElementById('soid4').value = "";
          document.getElementById('soid5').value = "";
  
        }
  
        const newrow = () =>{
  
          document.getElementById("soid1").removeAttribute("disabled");
          document.getElementById("soid2").removeAttribute("disabled");
          document.getElementById("soid3").removeAttribute("disabled");
          document.getElementById("soid4").removeAttribute("disabled");
          document.getElementById("soid5").removeAttribute("disabled");
  
          clearinputs();
  
          document.getElementById('newrowbtn').disabled = "true";
          document.getElementById('updatebtn').disabled = "true";
          document.getElementById('deletebtn').disabled = "true";
          document.getElementById("createbtn").removeAttribute("disabled");
  
          }
  
           const cancel = () =>{
  
          document.getElementById('soid1').value = "";
          document.getElementById('soid2').value = "";
          document.getElementById('soid3').value = "";
          document.getElementById('soid4').value = "";
          document.getElementById('soid5').value = "";
      
          document.getElementById("newrowbtn").removeAttribute("disabled");
          document.getElementById('createbtn').disabled = "true";
          document.getElementById('updatebtn').disabled = "true";
          document.getElementById('deletebtn').disabled = "true";
  
          document.getElementById("soid1").disabled = "true";
          document.getElementById("soid2").disabled = "true";
          document.getElementById("soid3").disabled = "true";
          document.getElementById("soid4").disabled = "true";
          document.getElementById("soid5").disabled = "true";
          
        }
  

  return (
   
<div className='mainscreencontainer'>

<Navbar />

    <div className="subscreencontainer">
      
      <div className="leftpanel">

        <Htmltable id="id" columns={this.state.tablecols} data={this.state.sqltable} srti={selectrowtoinput}/>

      </div>
      <div className="middlepanel">

      <div className="containerr">
                            <div className="headersection">

                                <div>
                                <header>Users Page</header>
                                </div>

                                <div className="div1">
                                <label>Status</label>
                                <select id="soid5">
                                  <option value="Active">Active</option>
                                  <option value="InActive">InActive</option>
                                </select>
                                </div>

                            </div>

                            <form action="#">
      
                    <span className="title">User Details</span>

                        <div className="div1">
                            <label>User Code</label>
                            <input size="15" type="text" placeholder="Enter User Code" required id="soid1"/>
                        </div>

                        <div className="div1">
                            <label>User Name</label>
                            <input size="30" type="text" placeholder="Enter User Name" required id="soid2"/>
                        </div>

                        <div className="div1">
                            <label>Password</label>
                            <input size="10" type="text" placeholder="Enter Password" required id="soid3"/>
                        </div>

                        <div className="div1">
                            <label>Groups</label>
                            <select name="soid" className="inputbox4" id="soid4">
                            <option value="adminuser">Admin User</option>
                            <option value="standarduser">Standard User</option>
                          {/* {this.state.options.map((option,id) => (
                            <option key={id} value={option.groupcode}>{option.groupname}</option>
                          ))} */}
                        </select>
                        </div>

        </form>
    </div>

      </div>
      <div className="rightpanel">

      <Mainbuttons create={create} update={update} deleterow={deleterow} newrow={newrow} cancel={cancel} />

      </div>

    </div>

</div>

  )
}
}

export default Users