import React from 'react'

function NoteListView({ noteList, setViewNoteMode }) {
    return (
        <table className="table mt-4">
            <thead>
                <tr className="table-head">
                    <th scope="col">Employee</th>
                    <th scope="col">Filename</th>
                    <th className="d-none d-md-table-cell" scope="col">Category</th>
                    <th className="d-none d-md-table-cell" scope="col">Last Modified</th>
                    <th className="d-none d-md-table-cell" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {noteList.map(note => {
                    let dateCon = new Date(note.date)
                    let ampm = dateCon.getHours() > 12 ? "PM" : "AM"
                    let date = dateCon.toUTCString().split(" ")
                    let dateStr = `${date[2]} ${date[1]}, ${date[3].substring(2)} at ${date[4].substring(0, 5)} ${ampm}`
                    return (
                        <tr onClick={() => setViewNoteMode(() => ({ mode: true, note: note }))} key={note.id}>
                            <td className="d-flex align-items-center">
                                <div style={{ background: "url(https://ik.imagekit.io/36h35rdxx/images_Mi0CWm2Rg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664599157) center", backgroundSize: "cover" }}
                                    className="listViewProfilePic mr-2">
                                </div>
                                <div className="listViewProfileInfo">
                                    <h5>James Hadish</h5>
                                    <h6>Designer</h6>
                                </div>
                            </td>
                            <td>Otto</td>
                            <td className="d-none d-md-table-cell">
                                <div className="tag d-flex align-items-center">
                                    <div style={{ width: "10px", height: "10px" }} className="circle"></div>
                                    <div className="tag-name ml-2">{note.noteCategory}</div>
                                </div>
                            </td>
                            <td className="d-none d-md-table-cell">{dateStr}</td>
                            <td className="d-none d-md-table-cell">
                                <button onClick={() => setViewNoteMode(() => ({ mode: true, note: note }))} className="defaultBtn py-2">View</button>
                            </td>
                        </tr>)
                })}

            </tbody>
        </table>
    )
}

export default NoteListView