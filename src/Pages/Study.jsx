import React from 'react'
import { GrNotification } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";

function Study() {
  return (
    <div className=""> 
      <header className="flex items-center justify-between px-4 py-3 bg-white">
        <div className='flex flex-row items-center'>
          
            <BsFillLightningChargeFill className=' text-2xl md:text-3xl'/>
         
          <h1 className="text-xl md:text-2xl font-bold ml-1">
            StudyBuddy
          </h1>
        </div>

        <div className='flex items-center gap-3 md:gap-6'>
          <div className='bg-gray-100 rounded-lg p-1 md:p-2'>
          <GrNotification />
          </div>
          <div className="">
          <AiOutlineMessage />
          </div>

          <img src="sohaimg.jpg" className='h-6 w-6 md:h-8 md:w-8 rounded-full' alt="Profile" />
        </div>
      </header>

      <main>
      <div className="flex justify-center py-3 ">
        <div className="w-[80%] space-y-4 ">
          <div className="">
            <h1 className='text-2xl font-bold'>Create a Quize</h1>
            <p className='text-sm text-gray-400'>Upload a file with questions and answer</p>
          </div>

          <div className="flex gap-4 border-b py-2">
            
            <button className='hover:border-b hover:font-semibold'>Multiple Choice</button>
            
            
            <button className='hover:border-b hover:font-semibold'>Short answer</button>
          </div>

          <div className="flex flex-col  gap-1 ">
            <h1 className='font-semibold text-lg  text-start'>Drag and drop your file here</h1>
            <p className='text-center'>or</p>
            <div className="flex w-full justify-center">
              <button className=' bg-gray-300  px-2 py-1 rounded-md w-28  font-semibold'>Brouser files</button>
            </div>
          </div>

          <div className="border-gray-300 border-[1px] rounded-lg">
            <div className="flex w-full  ">
              <div className="w-1/2">
               <div className="w-full border-b px-1 py-3">Questions</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
             </div>
             <div className="w-1/2 ">
               <div className="px-1 border-b  py-3">Answer</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
               <div className="px-2 py-4 border-b">Lorem ipsum dolor sit.</div>
             </div>
            </div>
            
          </div>
          <div className="flex justify-end w-full">
            <button className='bg-gray-300 px-3 py-2 rounded-lg'>Show Answer</button>
          </div>

          <div className="w-1/2 bg-blue-800 flex justify-center rounded-xl py-2">
           <button className='w-full'>Upload files</button>
          </div>
        </div>

        
      </div>
      </main>

      {/* <hr className='mb-5 w-full border-gray-300 border-1' />

      <div className='flex flex-col gap-5 p-4 md:p-8 mx-4 md:mx-32'> {/* Adjusted for responsiveness 
        <h1 className='font-bold text-3xl md:text-4xl mt-7 flex'>
          Create a quiz
        </h1>
        <p className='font-normal text-slate-900 flex'>
          Upload a file with questions and answers
        </p>

        <div className='flex gap-6 underline-offset-[24px] font-semibold mt-5 flex-wrap '> 
          <u className=' decoration-blue-500  '>Multiple choice</u>
          <span className='text-slate-500 font-semibold cursor-pointer'>Short answer</span>
        </div>
        <hr className='mb-5 w-screen border-gray-300 border-[1px]' />

        <div className='flex p-2 md:p-8'>
          <h1 className='font-bold text-xl text-start '>Drag and drop your file here</h1> 
        </div>

        <div className='flex justify-center'>
          <p className='flex flex-col mt-9 text-center'>
            or
            <button className='bg-gray-200 px-3 py-3 mt-5 rounded-lg font-bold'>Browse files</button>
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4 w-full max-w-screen-xl mx-auto border-2 rounded-md border-gray-500 p-[3px]">
          <div className="flex font-bold text-lg">
            <span className="flex-1 text-start">Question</span>
            <span className="flex-1 text-center">Answers</span>
          </div>
          <hr className=' w-full border-gray-300 border-1' />
          <div className="flex text-gray-700">
            <span className="flex-1 text-start">What is the capital of France?</span>
            <span className="flex-1 text-center">Paris</span>
          </div>
          <hr className=' w-full border-gray-300 border-1' />
          <div className="flex text-gray-700">
            <span className="flex-1 text-start">What year was the Declaration of Independence signed?</span>
            <span className="flex-1 text-center">1776</span>
          </div>
          <hr className=' w-full border-gray-300 border-1'/>
          <div className="flex text-gray-700">
            <span className="flex-1 text-start">What is the atomic symbol for gold?</span>
            <span className="flex-1 text-center">Au</span>
          </div>
          <hr className=' w-full mb-0 border-white-300 '/>
        </div>

        <div className='flex justify-end p-4'>
          <button className='bg-gray-200 px-3 py-3 mt-5 rounded-lg font-bold'>Show Answers</button>
        </div>

        <div className='flex justify-start p-4'>
          <button className='bg-blue-700 text-white px-4 py-1 rounded-xl'> {/* Adjusted padding for responsiveness 
            Upload file
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Study
