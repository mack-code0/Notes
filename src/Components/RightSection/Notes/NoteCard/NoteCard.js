import React, { useEffect, useState } from "react"
import NoteCardOption from "./NoteCardOption"

const NoteCard = React.memo(props => {
    const { note, deleteNote, editNote, setViewNoteMode } = props

    const [color, setColor] = useState("")
    useEffect(() => {
        const colorArr = ["", "light-blue", "light-red"]
        setColor(colorArr[Math.floor(Math.random() * 3) + 0])
    }, [])

    const month = note.date.toLocaleString("en-US", { month: "long" })
    const year = note.date.getFullYear()

    const [openOptionView, setOpenOptionView] = useState(false)

    return (
        <>
            <div className="item col-12 col-md-6 col-lg-4 mb-4">
                <div className="inner p-3">
                    <div className="item-header d-flex align-items-center">
                        <div style={{ background: "url(https://ik.imagekit.io/36h35rdxx/images_Mi0CWm2Rg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664599157)", backgroundSize: "contain", backgroundPosition: "center" }} className="img-prof">
                        </div>
                        <h5 className="ml-2">HydrogenHR <span className="ml-1">{month}, {year}</span></h5>
                    </div>
                    <div className="item-body mt-4">
                        <h4 className="m-0">{note.noteTitle}</h4>
                        <p className="pt-3 pb-4">
                            {note.note}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="tag d-flex align-items-center">
                                <div className={`circle ${color} mr-1`}></div>
                                <div className={`tag-name ${color}`}>{note.noteCategory}</div>
                            </div>
                            <img onClick={() => { setOpenOptionView(!openOptionView) }} alt="" width="20" src="https://ik.imagekit.io/36h35rdxx/Vector__2__CzoDS1hgJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653604653699" />
                            {openOptionView && <NoteCardOption id={note.id} deleteNote={deleteNote} viewNote={() => { setViewNoteMode(() => ({ mode: true, note: note })); setOpenOptionView(false) }} editNote={() => { editNote(note.id); setOpenOptionView(false) }} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default NoteCard