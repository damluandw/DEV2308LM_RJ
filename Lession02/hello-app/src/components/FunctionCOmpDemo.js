import React from 'react'

function FunctionCOmpDemo(props) {
    return (
        <div>
            <h2>FunctionCompDemo</h2>
            <div className='alert alert-secondary'>
                <h3>Truy cập đến các thuộc tính của function component</h3>
                <p>Welcome to {props.name}</p>
                <p>Địa chỉ {props.adress}</p>
            </div>
        </div>
    )
}

export default FunctionCOmpDemo