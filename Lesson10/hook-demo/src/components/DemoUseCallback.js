import React, { useCallback, useState } from 'react'
import ContentUseCallback from './ContentUseCallback'

function DemoUseCallback() {
    const [count, setCount] = useState(0)
    const handleIncrement = useCallback(() => {
        setCount(pre => pre + 1)
    }, [])
    return (
        <div className="alert alert-danger">
            <ContentUseCallback onIncrease={handleIncrement}></ContentUseCallback>
            <h1>{count}</h1>
        </div>
    )
}

export default DemoUseCallback