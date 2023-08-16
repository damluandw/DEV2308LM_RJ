import React from 'react'

function JSXElementObjectDemo() {
    const elementObject = React.createElement(
        'h1',
        {className: 'greeting'},
        'Welcom to Devmaster'
    );
    const elementObject2 = (
        <h1 className='greeting'>Welcome to Devmaster </h1>
    );
    // const elementObject3 = {
    //     type: 'h1',
    //     props :{
    //         className :'greeting',
    //         children : 'Welcome to Devmaster'
    //     }
    // };
  return (
    <div>
        <h2>JSXElementObjectDemo</h2>
        {elementObject}
        <hr/>
        {elementObject2}
        <hr/>
        {/* {elementObject3} */}
    </div>
  )
}

export default JSXElementObjectDemo