import React, { useState } from 'react'

export default function Addnote( {handleAddNote}) {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200;

    const handelChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    };
    const handelSaveClick = ()=> {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText("")
        }
    };
    return (
        <div className='note new'>
            <textarea name="" id="" cols="8" rows="10" placeholder='type to note' onChange={handelChange} value={noteText}></textarea>
            <div className='note-footer'>
            <small>{characterLimit - noteText.length}</small>
            <button onClick={handelSaveClick} className='save'>Save</button>
            </div>
        </div>
    )
}
