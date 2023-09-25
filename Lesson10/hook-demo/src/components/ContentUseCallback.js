import React, { memo } from 'react'

function ContentUseCallback({onIncrease }) {
    return (
        <>
            <div className='mb-2'>Content Use Callback</div>
            <button className='btn btn-success' onClick={onIncrease}>
                Count Add
            </button>
        </>
    )
}

export default memo(ContentUseCallback) 