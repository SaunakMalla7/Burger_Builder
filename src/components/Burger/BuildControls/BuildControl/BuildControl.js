import React from 'react'

import './BuildControl.css'
const BuildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='button Less' onClick={props.removed}>Less</button>
        <button className='button More' onClick={props.added}>More</button>

    </div> 
)

export default BuildControl