import React, { useState } from 'react'
import AddNote from './RightSection/AddNote'
import AllNotes from './RightSection/Notes/AllNotes'
import TopSection from './RightSection/TopSection'
import TopTitle from "./RightSection/TopTitle"

function RightSection({ openSideNavHandler }) {
  const [notes, setNotes] = useState([])
  const [createNoteView, setCreateNoteView] = useState(false)
  const [edit, setEdit] = useState({
    mode: false,
    note: {}
  })

  const newNoteViewHandler = (bool) => {
    if (!bool) {
      setEdit(() => ({ mode: false, note: {} }))
    }
    setCreateNoteView(bool)
  }

  const submitNote = (note) => {
    setNotes((prev) => [...prev, note])
    newNoteViewHandler(false)
  }

  const deleteNoteHandler = (id) => {
    setNotes((prev) => {
      return prev.filter(note => note.id !== id)
    })
  }

  const editNoteHandler = (id) => {
    setEdit(() => ({ mode: true, note: notes.find(el => el.id === id) }))
    newNoteViewHandler(true)
  }

  const submitEditedNote = (editedNote) => {
    setNotes((prev) => {
      const noteIndex = prev.findIndex(note => note.id === editedNote.id)
      prev[noteIndex] = editedNote
      return prev
    })
    setEdit(() => ({ mode: false, note: {} }))
    newNoteViewHandler(false)
  }

  return (
    <>
      <section>
        <div className="rightContentHolder">
          <TopSection openSideNavHandler={openSideNavHandler} />
          <div onClick={() => openSideNavHandler(false)}>
            <TopTitle newNoteViewHandler={newNoteViewHandler} />
            {/* <ViewNote note={notes[0]} /> */}
            <AllNotes noteList={notes} newNoteViewHandler={newNoteViewHandler} deleteNote={deleteNoteHandler} editNote={editNoteHandler} />
          </div>
        </div>
      </section>
      {createNoteView && <AddNote newNoteViewHandler={newNoteViewHandler} submitNote={submitNote} edit={edit} submitEditedNote={submitEditedNote} />}
    </>
  )
}

export default RightSection