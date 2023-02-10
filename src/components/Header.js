import React from 'react'

export default function Header({handelToggleDarkMode}) {
    return (
        <div className='header'>
            <h1>Note</h1>
            <button onClick={()=> handelToggleDarkMode((prev)=> !prev)}>Toggle Mode</button>
        </div>
    )
}
