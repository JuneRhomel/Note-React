import React from 'react'
import Addnote from './Addnote'
import Note from './Note'

export default function NotesList({ note, handleAddNote, handelDeleteNote }) {
    return (
        <div className='notes-list'>
            {note.map((note) =>
                <Note 
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handelDeleteNote ={handelDeleteNote}
                />
            )}
            <Addnote handleAddNote={handleAddNote} />
        </div>
    )
}
