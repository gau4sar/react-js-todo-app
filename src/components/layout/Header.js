import React from 'react';
import {Link} from 'react-router-dom';

const headerStyle = {
    backgroudColor: '#000000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default function () {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}
