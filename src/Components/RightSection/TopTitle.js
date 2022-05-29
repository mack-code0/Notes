import { useState } from "react"

function TopTitle({ newNoteViewHandler, setListView, listView }) {
    const [sortDropdown, setSortDropdown] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")

    const selectHandler = (e) => {
        setSelectedOption(e.target.innerHTML)
        setSortDropdown(false)
    }

    return (
        <div className="topTitle mt-4 p-4">
            <div className="row">
                <h5 className="col-12 col-md-2">Notes</h5>
                <div className="col-12 col-md-10 mt-3 mt-md-0 d-flex justify-content-md-end">
                    <div className="select d-flex align-items-center justify-content-between px-4 mr-3">
                        <span>{selectedOption ? selectedOption : "Last Added"}</span><img onClick={() => setSortDropdown(!sortDropdown)} alt="" width="40" src="https://ik.imagekit.io/36h35rdxx/arrow-drop-down_fbeflyvky.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653832685301" />
                        <div className={`options ${sortDropdown ? "d-flex" : "d-none"} flex-column`}>
                            <span className="pt-3 px-3">Sort by</span>
                            <span onClick={selectHandler} className="pt-3 px-3 optionItem">Category</span>
                            <span onClick={selectHandler} className="pt-3 px-3 optionItem">Employee</span>
                            <span onClick={selectHandler} className="py-3 px-3 optionItem">Shared with me</span>
                            <span className="pt-3 px-3">Order</span>
                            <span onClick={selectHandler} className="pt-3 px-3 optionItem">Alphabetical</span>
                            <span onClick={selectHandler} className="py-3 px-3 optionItem">Last Added</span>
                        </div>
                    </div>
                    <button onClick={() => newNoteViewHandler(true)} className="defaultBtn">Add New Note</button>
                </div>
            </div>

            <div className="d-flex align-items-start justify-content-between mt-4">
                <h6>Notes</h6>
                <div>
                    <img onClick={() => setListView(true)} alt="" width="20px" src={listView ? "https://ik.imagekit.io/36h35rdxx/Vector_1__65g9PSvXV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653828822692" : "https://ik.imagekit.io/36h35rdxx/Vector_pFOM8Hwkr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653597619849"} />
                    <span className="divider mx-1">&#124;</span>
                    <img onClick={() => setListView(false)} alt="" width="20px" src={listView ? "https://ik.imagekit.io/36h35rdxx/Vector_g1SWNXUCm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653828822691" : "https://ik.imagekit.io/36h35rdxx/Vector_1__J97z2zyR5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653597911338"} />
                </div>
            </div>
        </div>
    )
}

export default TopTitle