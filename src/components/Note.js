import React from 'react'

export default function Note({ id, text, date, handelDeleteNote }) {
    return (
        <div className='note'>
            <h3>{text}</h3>
            <div className='note-footer'>
                <small>{date}</small>
                
                <button onClick={() => handelDeleteNote(id)}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
