import React from 'react'

export const header = () => {
  return (
    <div className='flex bg-black p-4 text-white gap-20 justify-between items-center'>
        <h2 className='font-bold'>jobs Portal</h2>
        <ul className='flex justify-center gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Jobs</li>
        </ul>
        <button className='bg-white text-black p-2'>Contact Now</button>
    </div>
  )
}
export default header;