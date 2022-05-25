import React, { useState } from 'react'

function AddNote({ newNoteViewHandler, submitNote }) {
    const [noteTitle, setNoteTitle] = useState("")
    const [notePurpose, setNotePurpose] = useState("")
    const [noteCategory, setNoteCategory] = useState("")
    const [note, setNote] = useState("")

    const [onError, setOnError] = useState(false)

    const noteTitleHandler = (e) => {
        setNoteTitle(e.target.value)
    }

    const notePurposeHandler = (e) => {
        setNotePurpose(e.target.value)
    }

    const noteCategoryHandler = (e) => {
        setNoteCategory(e.target.value)
    }

    const noteHandler = (e) => {
        setNote(e.target.value)
    }

    const submitNoteHandler = (e) => {
        e.preventDefault()

        if (!note || !noteTitle || !notePurpose || !noteCategory) {
            return setOnError(true)
        }

        // Random number is generated like thid just for testing so an error might occur if a number is repeated
        const noteObject = { noteTitle, notePurpose, noteCategory, note, date: new Date(), id: (Math.random() + Math.random()).toString() }
        submitNote(noteObject)
        newNoteViewHandler(false)
    }

    return (
        <div className="newNote">
            <div className="innerNewNote h-100 p-4">
                <div className="header d-flex justify-content-between align-items-center">
                    <h5>New Note</h5>
                    <img onClick={() => newNoteViewHandler(false)} alt="" width="10" src="https://ik.imagekit.io/36h35rdxx/Vector_pa1Qr-2e6u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653657497834" />
                </div>
                <form onSubmit={submitNoteHandler} className="mt-5">
                    {onError &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Invalid Inputs!</strong> You should check in on some of those fields below.
                            <button onClick={() => setOnError(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    }
                    <input value={noteTitle} onChange={noteTitleHandler} className="w-100 mb-4 px-3 py-3" placeholder="Title" type="text" />
                    <input value={notePurpose} onChange={notePurposeHandler} className="w-100 mb-4 px-3 py-3" placeholder="Purpose" type="text" />
                    <input value={noteCategory} onChange={noteCategoryHandler} className="w-100 mb-4 px-3 py-3" placeholder="Category" type="text" />
                    <textarea value={note} onChange={noteHandler} rows="5" className="w-100 mb-4 px-3 py-3" placeholder="Add your note here"></textarea>
                    <div className="mt-5 controls w-100 d-flex justify-content-between">
                        <button onClick={() => newNoteViewHandler(false)} className="cancel py-3">Cancel</button>
                        <button className="create py-3">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote