import React from 'react'
// C1
// export default function ButtonHandle(props) {
// C2
export default function ButtonHandle(onChangeData) {
    //Hàm xử lý sự kiện
    const fn_Button1 = () => {
        alert("fn_Button1");
    }
    const fn_Button2 = () => {
        alert("fn_Button2");
    }
    const fn_Button3 = (param) => {
        alert(param);
    }
    //Bắn sự kiện lên app
    const fn_ChangeData = () => {
        //C1
        // props.onChangeData("DevMaster Academy");
        onChangeData("DevMaster Academy");
    }
    return (
        <div>
            <h1>Handle Click</h1>
            {/* gọi function */}
            {/* <button className='btn btn-primary' onClick={fn_Button1()}>button1</button>
            <button className='btn btn-primary' onClick={fn_Button2()}>button2</button> */}
            <button className='btn btn-primary mx-2' onClick={fn_Button1}>button3</button>
            <button className='btn btn-primary mx-2' onClick={() => fn_Button3("DamLuan")}>button4</button>
            <button className='btn btn-primary mx-2' onClick={fn_ChangeData}>Change Data App</button>
        </div>
    )
}
