import React from 'react'
import NoNotes from './NoNotes'
import NoteCard from './NoteCard'


function AllNotes({ noteList, newNoteViewHandler, deleteNote }) {
    return (
        <div className="container-fluid mt-4 p-0">
            <div className="row">
                {noteList.length > 0 ?
                    noteList.map(note => <NoteCard key={note.id} note={note} deleteNote={deleteNote} />)
                    :
                    <NoNotes newNoteViewHandler={newNoteViewHandler} />
                }

            </div>
        </div>
    )
}

export default AllNotes