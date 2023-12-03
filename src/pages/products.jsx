import React from 'react';
//import { Link } from "react-router-dom";
//import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/containers.css';
//import Htmltable from '../components/Htmltable';
// PRODUCTS PAGE

 function Products() {

  // const data = [
  //   { id: 1, contenttitle: 'Customer Code' },
  //   { id: 2, contenttitle: 'Customer Name' },
  //   { id: 3, contenttitle: 'Address Line 1'},
  //   { id: 4, contenttitle: 'Address Line 2'},
  //   { id: 5, contenttitle: 'Address Line 3'},
  //   { id: 6, contenttitle: 'Address Line 4'},
  //   { id: 7, contenttitle: 'Contact'},
  //   { id: 8, contenttitle: 'Mixed Product?'},
  //   { id: 9, contenttitle: 'Mixed BBE?'},
  //   { id: 10, contenttitle: 'Mixed Batches?'},
  
  // ];

  


  return (
   
<div className='mainscreencontainer'>

<Navbar />

    <div className="subscreencontainer">
      
      <div className="leftpanel"></div>
      <div className="middlepanel">

{/* <Htmltable /> */}

      </div>
      <div className="rightpanel"></div>

    </div>

</div>

  )
}
export default Products