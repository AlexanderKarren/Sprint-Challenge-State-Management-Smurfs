import React from 'react'
import { ReactSVG } from 'react-svg'
import './Smurf.css'

const Smurf = props => {
    return (
        <div className="smurf">
            <ReactSVG src="clear.svg" onClick={() => props.removeSmurf(props.smurf.id)}/>
            <div className="card-content">
                <h2>{props.smurf.name}</h2>
                <div className="info">
                    <p>{props.smurf.height}</p>
                    <p>{props.smurf.age} years old</p>
                </div>
            </div>
        </div>
    )
}

export default Smurf