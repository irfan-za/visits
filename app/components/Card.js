import React from 'react'

function Card({title, description, icon}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto rounded-xl sm:rounded-3xl py-2 px-1 sm:py-4 sm:px-2 w-40 sm:w-60 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className='relative w-4 sm:w-10 h-4 sm:h-10'>
        {icon}
      </div>
      <div className="text-center text-sm sm:text-base font-medium my-1 sm:my-3">{title}</div>
      <div className="text-center font-light mt-1 text-xs sm:text-sm  sm:mb-3">{description}</div>
    </div>
  )
}

export default Card

