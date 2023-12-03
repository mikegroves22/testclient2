import React, { Component } from 'react';
import '../styles/htmltable.css';
 
// class Htmltable extends Component {
//     render() {
//         let heading = ['Name', 'City', 'Course'];
//         let body =
//             [['Kapil', 'Jaipur', 'MCA'],
//             ['Aakash', 'Hisar', 'Btech'],
//             ['Mani', 'Ranchi', 'MSc'],
//             ['Yash', 'Udaipur', 'Mtech']
//             ];
//         return (
//             <div >
//                 <Table heading={heading} body={body} />,
//             </div>
//         );
//     }
// }
 
// class Table extends Component {
//     render() {
//         let heading = this.props.heading;
//         let body = this.props.body;
//         return (
//             <table style={{ width: 500 }}>
//                 <thead>
//                     <tr>
//                         {heading.map((head, headID) => 
//                             <th key={headID} >{head}</th>)}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {body.map((rowContent, rowID) => 
//                         <TableRow rowContent={rowContent} key={rowID} />)}
//                 </tbody>
//             </table>
//         );
//     }
// }
 
// class TableRow extends Component {
//     render() {
//         let row = this.props.rowContent;
//         return (
//             <tr>
//                 {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
//             </tr>
//         )
//     }
// }
 
// export default Htmltable;

const Htmltable = ({ id, columns, data, srti }) => (
    <div id="table-wrapper">
      <div id="table-scroll">
        <table id="table" className="mytable" cellPadding="20" >
          <tbody>
            <tr>
            {/* <th><input type="checkbox"/></th> */}
              {columns.map(({ col, colheader }) => (
                
                <th key={col}>{colheader}</th>
              ))}
            </tr>
            {data.map((rowData,id2) => (
              <tr id={id2} className="blank" key={id2} onClick={srti}>
              {/* <td><input type="checkbox"/></td> */}
                {columns.map(({ col }) => (
    
                  <td key={col} >
    
                  
                    {rowData[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
    </div>
      );
    
      export default Htmltable;