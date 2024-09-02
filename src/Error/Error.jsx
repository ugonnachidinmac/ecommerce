import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let redir = useNavigate();
  return (
    <div className='flex items-center flex-col justify-center h-[40vh]'>
        <h2 className='text-red-700'>Ooops! Entered route not found</h2>
        <button onClick={() => redir('/Home')}>Go Bank</button>
    </div>
  )
}

export default Error