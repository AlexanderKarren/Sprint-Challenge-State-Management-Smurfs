import React, { useState } from 'react'
import { addSmurf } from '../actions/smurfActions'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import './SmurfForm.css'

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "Ass",
        height: "10ft",
        age: "69",
    })

    const handleChange = event => {
        event.preventDefault();
        setNewSmurf({
            ...newSmurf,
            [event.target.name]:[event.target.value]
        })
    }

    const handleClick = event => {
        event.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            height: "",
            age: "",
        })
    }

    return (
        <div className="smurf-form">
            <h2>Add Smurf</h2>
            <form autoComplete="off">
                <input name="name" id="add-smurf" type="text" placeholder="Name" onChange={handleChange} value={newSmurf.name}/>
                <input name="height" id="add-smurf" type="text" placeholder="Height" onChange={handleChange} value={newSmurf.height}/>
                <input name="age" id="add-smurf" type="text" placeholder="Age" onChange={handleChange} value={newSmurf.age}/>
                <Button type="submit" color="primary" onClick={handleClick}>Add</Button>
            </form>
        </div>
    )
}

export default connect(() => {}, { addSmurf })(SmurfForm);