import React from 'react'
import { GrNotification } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";

function Study() {
  return (
    <div className="overflow-hidden"> {/* Prevent horizontal scrolling */}
      <div className="flex items-center justify-between p-4 bg-white">
        <div className='flex flex-row items-center'>
          <a href="#" className='h-7 w-7 text-2xl md:text-3xl'>
            <BsFillLightningChargeFill />
          </a>
          <h1 className="text-xl md:text-2xl font-bold ml-1">
            StudyBuddy
          </h1>
        </div>

        <div className='flex items-center gap-3 md:gap-6'>
          <a href="#" className='bg-gray-100 rounded-lg p-1 md:p-2'>
            <GrNotification />
          </a>
          <a href="#" className='bg-gray-100 rounded-lg p-1 md:p-2'>
            <AiOutlineMessage />
          </a>
          <img src="sohaimg.jpg" className='h-6 w-6 md:h-8 md:w-8 rounded-full' alt="Profile" />
        </div>
      </div>

      <hr className='mb-5 w-full border-gray-300 border-1' />

      <div className='flex flex-col gap-5 p-4 md:p-8 mx-4 md:mx-32'> {/* Adjusted for responsiveness */}
        <h1 className='font-bold text-3xl md:text-4xl mt-7 flex'>
          Create a quiz
        </h1>
        <p className='font-normal text-slate-900 flex'>
          Upload a file with questions and answers
        </p>

        <div className='flex gap-6 underline-offset-[24px] font-semibold mt-5 flex-wrap '> {/* Flex-wrap for smaller screens */}
          <u className=' decoration-blue-500  '>Multiple choice</u>
          <span className='text-slate-500 font-semibold cursor-pointer'>Short answer</span>
        </div>
        <hr className='mb-5 w-screen border-gray-300 border-[1px]' />

        <div className='flex p-2 md:p-8'>
          <h1 className='font-bold text-xl text-start '>Drag and drop your file here</h1> {/* Centered text */}
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
          <button className='bg-blue-700 text-white px-4 py-1 rounded-xl'> {/* Adjusted padding for responsiveness */}
            Upload file
          </button>
        </div>
      </div>
    </div>
  )
}

export default Study
