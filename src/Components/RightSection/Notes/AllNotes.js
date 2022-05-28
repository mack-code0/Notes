
import { useState } from 'react'
import NoNotes from './NoNotes'
import NoteCard from './NoteCard/NoteCard'
import NoteListView from './NoteListView'
import ViewNote from './ViewNote'


function AllNotes({ noteList, newNoteViewHandler, deleteNote, editNote, listView }) {
    const [viewNoteMode, setViewNoteMode] = useState({
        mode: false,
        note: {}
    })

    return (
        <>
            {viewNoteMode.mode && <ViewNote note={viewNoteMode.note} setViewNoteMode={setViewNoteMode} />}
            {listView && noteList.length > 0 && <NoteListView noteList={noteList} setViewNoteMode={setViewNoteMode} />}

            {!listView && noteList.length > 0 &&
                <div className="container-fluid mt-4 p-0">
                    <div className="row">
                        {noteList.map(note => <NoteCard key={note.id} note={note} deleteNote={deleteNote} editNote={editNote} setViewNoteMode={setViewNoteMode} />)}
                    </div>
                </div>
            }
            {noteList.length <= 0 && <NoNotes newNoteViewHandler={newNoteViewHandler} />}
        </>

    )
}

export default AllNotes