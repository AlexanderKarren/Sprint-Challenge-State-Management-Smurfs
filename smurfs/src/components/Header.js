import React from 'react'
import './Header.css'
import { Button } from 'reactstrap'

const Header = props => {
    return (
        <div className="header">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <Button color="light" style={{color:"#4169E1"}} onClick={props.getData}>Refresh</Button>
        </div>
    )
}

export default Header