import React from 'react'

function Member(props) {
  return (
    <div>
        <h1>Xin chào, {props.name}</h1>
        <h2>Tuổi {props.age}</h2>
        {/* <h2>Company {props.company}</h2> */}
        <hr/>
    </div>
  )
};
// var memberlist =(
//   <div>
//       <Member name = "Nguyễn Văn A" age ="25"/>
//       <Member name = "Trần Thị B" age ="18"/>

//   </div>
// );
// ReactDOM.render(
//   memberlist,
//   document.getElementById('root')
// );

export default Member