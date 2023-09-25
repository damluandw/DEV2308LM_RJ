import React, { useState } from 'react'

function DemoUseState() {
    // truyền giá trị đơn
    const [count, setCount] = useState(10); //biến (state) count có giá trị khởi tạo là 10
    // sự kiện biến đổi giá trị biến count
    const handleIncrement = ()=>{
        setCount(pre => pre +1)
    }
    // truyền giá trị khởi tạo là một mảng
    const listInit = [10,20,15,30];
    const [list, setList] = useState(listInit);
    const handleRandom = ()=>{
        setList([
            ...list,
            parseInt(Math.random()*100)
        ])
    }
    return (
        <div className='alert alert-primary'>
            <h2>Demo useState - React Hook </h2>
            <div>
                <p>
                    Count: {count}
                </p>
                <p>List: {list.toString()}</p>
                <button className='btn btn-primary me-2' onClick={handleIncrement}>Count add</button>
                <button className='btn btn-primary' onClick={handleRandom}>Random number to List</button>
            </div>
        </div>
    )
}

export default DemoUseState
