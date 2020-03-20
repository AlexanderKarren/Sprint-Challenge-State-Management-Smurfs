import React from 'react'
import SmurfForm from './SmurfForm'
import Smurf from './Smurf'
import './SmurfList.css'

const SmurfList = props => {
    return (
        <div className="smurf-list">
            <SmurfForm />
            {props.smurfList.map(smurf => {
                return <Smurf smurf={smurf} removeSmurf={props.removeSmurf}/>
            })}
        </div>
    )
}

export default SmurfList