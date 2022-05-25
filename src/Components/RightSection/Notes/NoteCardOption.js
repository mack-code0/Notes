import React from 'react'

function NoteCardOption({ id, deleteNote, editNote, viewNote }) {
    return (
        <div className="item-options d-flex flex-column px-4 py-3">
            <span onClick={() => viewNote() } className="mb-3">View</span>
            <span onClick={() => editNote(id)} className="mb-3">Edit</span>
            <span className="mb-3">Copy</span>
            <span onClick={() => deleteNote(id)}>Delete</span>
        </div>
    )
}

export default NoteCardOption