import {Component} from 'react';
import Axios from "axios";
import Navbar from '../components/Navbar';
import '../styles/containers.css';
import Htmltable from '../components/Htmltable';

class Tables extends Component {
  constructor(){
      super();
      this.state = {
          navbar: [],
          navbarlists: [],
          tablename: "",
          firstcolumn:"",
          secondcolumn:"",
          sqltable: [],
        sqltable2: [],
        ltablecols: [],
        mtablecols: [],
      }
  }
  


  componentDidMount() {
    
    let username = sessionStorage.getItem("username");
    Axios.post("/tables", {
        username: username
        
    }).then((res) => {
        if (res.data.length >0){
            this.setState({navbar: res.data});
           console.log(res);
           //console.log("pass on nav bar")
        }
        else{
           // console.log("nope on nav bar"); 
        }
    });
    Axios.post("/tables/selectall", {
        username: username
        
    }).then((res) => {
        if (res.data.length >0){
            this.setState({sqltable2: res.data});
        }
        else{
           
        }
    });
    }


  render() {

    const columns = [
        { id: 1, colheader: 'Table Name', col:'tablename' },
        { id: 2, colheader: 'Column Name' , col: 'columnname'},
        { id: 3, colheader: 'test3', col:'test2'},
       
      
      ];

    const createtable = () =>{

        Axios.post("/tables/create", {
            tablename: document.getElementById('tablename').value,
            firstcolumn: document.getElementById('firstcolumn').value,
            secondcolumn: document.getElementById('secondcolumn').value
            
        }).then((res) => {
            if (res.data.length >0){
                this.setState({navbar: res.data});
               console.log(res);
               //console.log("pass on nav bar")
            }
            else{
               // console.log("nope on nav bar"); 
            }
        });
    }

    const srti = () =>{

        console.log("srti")
    }

  return (
   
<div className='mainscreencontainer'>

<Navbar />

    <div className="subscreencontainer">
      
      <div className="leftpanel">

      <Htmltable id="id" columns={columns} data={this.state.sqltable2} srti={srti}/>
      </div>
      <div className="middlepanel">

        
        
       Table name<input id='tablename' type='input' placeholder='Table Name'></input>
       <br />
       First Column<input id='firstcolumn' type='input' placeholder='First Column'></input>
       <br />
       Second Column<input id='secondcolumn' type='input' placeholder='First Column'></input>
       <br />
       <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={createtable}>Create Table</button>


      </div>
      <div className="rightpanel"></div>

    </div>

</div>

  )
}
}

export default Tables