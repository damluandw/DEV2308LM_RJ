import React, { useReducer } from "react";

function DemoUseReducer() {
  // const reducer = (state, action) => {
  //   switch (action) {
  //     case UP_ACTION:
  //       return state + 1;
  //     case DOWN_ACTION:
  //       return state - 1;
  //     default:
  //       throw new Error('action khong hop le')
  //   }
  // };
  // const [count, dispath] = useReducer(reducer, instate);
  return <div>
    {/* <h1>{count}</h1>
    <button onClick={()=>dispath(DOWN_ACTION)}>Down</button>
    <button onClick={()=>dispath(UP_ACTION)}>Up</button> */}
  </div>;
}

export default DemoUseReducer;
