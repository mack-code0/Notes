import React, { useState } from 'react'
import AddNote from './RightSection/AddNote'
import AllNotes from './RightSection/Notes/AllNotes'
import TopSection from './RightSection/TopSection'
import TopTitle from "./RightSection/TopTitle"

function RightSection({ openSideNavHandler }) {
  const [notes, setNotes] = useState([])
  const [createNoteView, setCreateNoteView] = useState(false)

  const newNoteViewHandler = (bool) => {
    setCreateNoteView(bool)
  }

  const submitNote = (note) => {
    setNotes((prev) => [...prev, note])
  }

  const deleteNoteHandler = (id) => {
    setNotes((prev) => {
      return prev.filter(note => note.id !== id)
    })
  }

  return (
    <>
      <section>
        <div className="rightContentHolder">
          <TopSection openSideNavHandler={openSideNavHandler} />
          <div onClick={() => openSideNavHandler(false)}>
            <TopTitle newNoteViewHandler={newNoteViewHandler} />
            {/* Daggable */}
            <AllNotes noteList={notes} newNoteViewHandler={newNoteViewHandler} deleteNote={deleteNoteHandler} />
          </div>
        </div>
      </section>
      {createNoteView && <AddNote newNoteViewHandler={newNoteViewHandler} submitNote={submitNote} />}
    </>
  )
}

export default RightSection