import React from 'react'

const useRef = () => {
   
   let changRef = useRef()
   
   let chnagecolor = function(){
     changRef.style.backGround.color="orange"
   }
  return (
    <div>
      <button  ref={changRef} className='bg-blue-300 p-3'>Chnage Color</button>
      <button onClick={chnagecolor} className='bg-slate-400 p-3 '>Click and chnage color an other button</button>
    </div>
  )
}

export default useRef