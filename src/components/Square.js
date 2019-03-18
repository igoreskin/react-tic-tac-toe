import React from 'react';
import './Square.css';

const square = (props) => {
    let style = '';

    if(props.value === null) {
        style = {backgroundColor: 'aquamarine'}
    } else if (props.value === 'X') {
        style = { backgroundColor: '#ffd700' }
    } else if (props.value === 'O') {
        style = { backgroundColor: '#18dcff' }
    }

    return (
        <button className='square' onClick={props.onClick} style={style}>
            {props.value}
        </button> 
    )

}

export default square;