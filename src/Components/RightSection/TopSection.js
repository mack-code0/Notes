import React from 'react'

function TopSection({ openSideNavHandler }) {
    return (
        <div className="topSection d-flex align-items-center row">
            <div className="col-12 col-sm-1">
                <img onClick={() => openSideNavHandler(true)} alt="" className="mr-0 mr-sm-4" width="20" src="https://ik.imagekit.io/36h35rdxx/Vector__1__nSQ1uSPE6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653595038220" />
            </div>
            <div className="topNav mt-3 mt-sm-0 col-12 col-sm-11">
                <a href="#3">Home</a>
                <span className="mx-3">&#8594;</span>
                <a href="#3">Productivity</a>
                <span className="mx-3">&#8594;</span>
                <a href="#3" className="active">Notes</a>
            </div>
        </div>
    )
}

export default TopSection