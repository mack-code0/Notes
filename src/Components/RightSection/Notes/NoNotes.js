import React from 'react'

function NoNotes({ newNoteViewHandler }) {
    return (
        <div className="noNote w-100 text-center my-5 px-4">
            <img alt="" width="200" src="https://ik.imagekit.io/36h35rdxx/undraw_no_data_re_kwbl_1_FfAmqkz2Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653658826821" />
            <p>You haven’t saved any note yet. Add your first note and never lose important information, it’s quite easy.</p>
            <button onClick={() => newNoteViewHandler(true)} className="defaultBtn">Create my first note</button>
        </div>
    )
}

export default NoNotes