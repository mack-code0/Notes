import React from 'react'
import NoNotes from './NoNotes'
import NoteCard from './NoteCard'


function AllNotes({ noteList, newNoteViewHandler, deleteNote, editNote }) {
    return (
        <div className="container-fluid mt-4 p-0">
            <div className="row">
                {noteList.length > 0 ?
                    noteList.map(note => <NoteCard key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} />)
                    :
                    <NoNotes newNoteViewHandler={newNoteViewHandler} />
                }

            </div>
        </div>
    )
}

export default AllNotes