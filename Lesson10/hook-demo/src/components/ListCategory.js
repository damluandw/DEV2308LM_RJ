import React, { useEffect, useState } from 'react'
import data from '../datas/data'
// import InsertCategories from './InsertCategories';
function ListCategory() {
    console.log(data)
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(data)
        console.log(list)
    }, [])

    // const handleAddCategory = useCallback((category) => {
    //     setList([
    //         ...list,
    //         category
    //     ]
    //     )
    // })
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>icon</th>
                        <th>metaDescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.icon}</td>
                                    <td>{item.metaDescription}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            {/* <InsertCategories onAddCategory={handleAddCategory} /> */}
        </div>
    )
}

export default ListCategory