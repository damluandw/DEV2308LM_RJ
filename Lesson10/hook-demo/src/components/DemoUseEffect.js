import React, {useState, useEffect } from 'react'

function DemoUseEffect() {
    //sử dụng useEffect với 1 tham số callback
    useEffect(() =>{
        console.log("đây là call back function trong effect")
    })

    //re render
    const [count, setCount] = useState(0); //biến (state) count có giá trị khởi tạo là 10
    const handleClick = () =>{
        setCount(pre =>{ return pre +1; })
        setList([
            ...list,    
            parseInt(Math.random()*100)
        ])
    }

    // sử dụng useEffect với tham số thứ 2 là [] => được thực hiện lần đầu tiên khi chạy ứng dụng
    useEffect(() =>{
        console.log("đây là useEffect với tham số thứ 2 là  []")
    },[])
    // sử dụng useEffect với [deps] => đc thực hiện khi deps thay đổi
    const listInit = [10,20];
    const [list, setList] = useState(listInit);
    useEffect(() =>{
        console.log("đây là useEffect với tham số thứ 2 là  [list]")
    },[list])

  return (
    <div className='alert alert-success'>
        <h2>Demo useEffect React Hook</h2>
        <p>Count: {count}</p>
        <button className='btn btn-primary me-2' onClick={handleClick}>Count add</button>
    </div>
  )
}

export default DemoUseEffect