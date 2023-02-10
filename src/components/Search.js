import React from 'react'

export default function Search({handelSearchNote}) {
    


    return (
        <div className='search'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input onChange={(event) => handelSearchNote(event.target.value)} type="text" placeholder='search' />
        </div>
    )
}
