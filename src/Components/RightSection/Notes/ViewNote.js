import React from 'react'

function ViewNote({ note, closeViewUi }) {
    return (
        <div className="viewNote d-flex align-items-center justify-content-center">
            <div className="innerViewNote p-4">
                <div className="d-flex justify-content-between">
                    <h5 className="header-txt">View Note</h5>
                    <div className="viewNoteOptions">
                        <img alt="" width="18" className="mr-2" src="https://ik.imagekit.io/36h35rdxx/more-horiz_d6cJzlyw3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653684596969" />
                        <img onClick={closeViewUi} alt="" width="10" src="https://ik.imagekit.io/36h35rdxx/Vector_pa1Qr-2e6u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653657497834" />
                    </div>
                </div>
                <div className="viewNoteBody mt-5">
                    <div className="d-flex align-items-end">
                        <h5 className="mr-3 my-0">{note.noteTitle}</h5>
                        <span className="p-0 m-0">{new Date(note.date).toLocaleDateString()}</span>
                    </div>
                    <p className="viewNoteCategory px-2 py-1 mt-3">{note.noteCategory}</p>
                    <p className="mainNoteView">
                        {note.note}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ViewNote