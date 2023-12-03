import React from 'react'
import '../styles/buttons.css';

const Mainbuttons = ({create,update,deleterow,newrow,cancel}) => {


    return (
        <div className="button">
            <button className="buttons" id="newrowbtn" onClick={newrow}>New</button>
            <button className="buttons" id="createbtn" onClick={create}>Create</button>
            <button className="buttons" id="updatebtn" onClick={update}>Update</button>
            <button className="buttons" id="deletebtn" onClick={deleterow}>Delete</button>
            <button className="buttons" id="cancelbtn" onClick={cancel}>Cancel</button>
        </div>

    )
}

export default Mainbuttons