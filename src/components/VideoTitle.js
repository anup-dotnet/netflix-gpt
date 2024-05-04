import React from 'react'
import {FaPlay } from 'react-icons/fa'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex px-2'>
            <button className='bg-white text-black text-lg p-4 px-12 flex rounded-lg hover:bg-opacity-80'><FaPlay className='mt-1 mx-2'/> Play</button>
            <button className='mx-2 bg-gray-500 text-white text-lg p-4 px-12 rounded-lg'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle