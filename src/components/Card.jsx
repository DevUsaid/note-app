import React from 'react'
import { CiBookmark } from "react-icons/ci";


export const Card = (props) => {
  return (
    <div className=' flex  flex-col rounded-lg m-10 justify-center align-middle  p-4 bg-slate-300'>
       <div className='flex flex-row justify-between p-3'>
        <img className='w-16 h-14' src={props.companyLogo} alt="" />
        <CiBookmark size={30} />
       </div>
       <div className='flex flex-col ml-3 mr-3'>
        <h2 className='text-xl font-bold'>{props.jobtitile}</h2>
        <p className='w-60'>{props.description}</p>
        <div className='flex flex-row gap-4 mt-5 list-none'>
        <li className='bg-white p-2 rounded-xl'>{props.tag1}</li><li className='bg-white p-2 rounded-xl'>{props.tag2}</li>
        </div>
       </div>
       <div className='flex flex-row gap-5 ml-3 pb-5 mt-5'>
       <button className='bg-black text-white p-3 rounded-xl w-32 '>Detils</button>
       <button className='border border-black w-32 rounded-xl'>Apply Now</button>
</div>

    </div>
  )
}
export default Card