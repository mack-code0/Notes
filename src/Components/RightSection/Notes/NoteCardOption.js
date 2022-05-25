import React from 'react'

function NoteCardOption({ id, deleteNote }) {
    return (
        <div className="item-options d-flex flex-column px-4 py-3">
            <span className="mb-3">Edit</span>
            <span className="mb-3">Copy</span>
            <span onClick={() => deleteNote(id)}>Delete</span>
        </div>
    )
}

export default NoteCardOption