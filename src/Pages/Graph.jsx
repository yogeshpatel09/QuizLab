import React from 'react'
import { FaRegBell, FaBars  } from "react-icons/fa";
import MyChart from './MyChart';
function Graph() {
  return (
    <>
     <header className='shadow-sm'>
      <div className="flex justify-between items-center px-1 py-2 ">
     
        <div className="font-bold">Quiz Ai</div>
        <div className="flex gap-3 items-center">
          <ul className='  flex gap-2 sm:gap-6'>
            <li className=''>Home</li>
            <li  className=''>Dasboard</li> 
            <li className=''>Course</li>
            <li className=''>Explore</li>
          </ul>

          <div className="flex items-center gap-2">
            <button className='hidden sm:block px-2 py-2 text-white bg-blue-600 rounded-xl'>Upgrade</button>
            <div className="hidden sm:block text-2xl bg-gray-300 p-2 rounded-xl"><FaRegBell /></div>
            <div className="hidden sm:block pl-2"><img className='h-12' src="/user.webp" alt="user" /></div>
          </div>
        </div>
      </div>
     </header>

     <main>
      <div className="flex justify-center py-3 ">
        <div className="w-[80%] space-y-4 ">
          <div className="space-y-1">
            <h1 className='text-2xl font-medium'>Grade your answer</h1>
            <p className='text-gray-500 text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <div className="flex justify-between">
            <div className="">
              <p className='text-xs'>Question1/3</p>
              <p className='text-md font-semibold'>What is the caoital of france</p>
              <p className='text-xs'>Your ans pair</p>
            </div>
            <div className="">
              <img src="/tower.png" alt="" />
            </div>
          </div>

          <div className="">
             <div className="flex justify-between"> <p className='font-semibold text-md'>Ai accurency</p>
             <p>66%</p></div>
             <div className="">
              <input type="text"
              className='w-full bg-blue-300 h-2 rounded-full'
              />

              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit!</p>
            </div>
          </div>

          <div className="">
            <p className='text-lg font-bold'>How your store are improved our time</p>
          </div>

         
          <div id='Graph'>
              <MyChart />
            </div>


          <div className="flex justify-end gap-2 ">
           <button className='px-4 py-1 bg-gray-300 rounded-xl'>Back</button>
           <button className='px-4 rounded-xl py-1 bg-blue-500'>Next</button>
          </div>
        </div>
      </div>
     </main>
    </>
  )
}

export default Graph
