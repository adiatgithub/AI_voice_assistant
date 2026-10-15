import React from 'react'

function Card({ image }) {
    return (
        <div className='w-[150px] h-[250px] bg-[#030326] 
        border-2 border-[white] rounded-2xl
        shadow-2xl shadow-[white] overflow-hidden flex items-center justify-center hover:shadow-purple-950 cursor-pointer
        hover:border-4 hover:white-200'>
            <img src={image} className='h-full w-full object-cover' />

        </div>
    )
}

export default Card