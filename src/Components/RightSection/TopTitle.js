import React from 'react'

function TopTitle({ newNoteViewHandler }) {
    return (
        <div className="topTitle mt-4 p-4">
            <div className="row">
                <h5 className="col-12 col-md-2">Notes</h5>
                <div className="col-12 col-md-10 mt-3 mt-md-0 d-flex justify-content-md-end">
                    <select className="mr-3">
                        <option className="p-3">LastAdded</option>
                        <option>Last Added</option>
                    </select>
                    <button onClick={() => newNoteViewHandler(true)} className="defaultBtn">Add New Note</button>
                </div>
            </div>

            <div className="d-flex align-items-start justify-content-between mt-4">
                <h6>Notes</h6>
                <div>
                    <img alt="" width="20px" src="https://ik.imagekit.io/36h35rdxx/Vector_pFOM8Hwkr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653597619849" />
                    <span className="divider mx-1">&#124;</span>
                    <img alt="" width="20px" src="https://ik.imagekit.io/36h35rdxx/Vector_1__J97z2zyR5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653597911338" />
                </div>
            </div>
        </div>
    )
}

export default TopTitle