import React from 'react'

function SideNav({ openSideNav }) {
    return (
        <nav className={`${openSideNav ? "" : "d-none"} d-sm-block pt-5`}>
            <div className="side-items w-100 p-3 mt-5 ">
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
            </div>

            <div className="side-items w-100 p-3">
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
                <div className="side-item mb-3"></div>
            </div>
        </nav>
    )
}

export default SideNav