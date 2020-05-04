import React from 'react'

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
        </header>
    )
}
