import React from 'react'
import { SiQuizlet } from "react-icons/si";
import { GoHome } from "react-icons/go";

import { CiSaveDown2 } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { PiScissorsLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
    <nav className="bg-white py-4 px-8 flex justify-between items-center border">
      <div className="flex items-center space-x-2">
        <SiQuizlet />
        <span className="text-xl font-bold">QuizLab</span>
      </div>
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">Create</button>
  
        <div className="flex gap-2 ml-2">
          <div className="bg-gray-200 px-2 py-2 rounded-lg">
            <GoHome size={20} className="hover:bg-gray-400" />
          </div>
          <div className="bg-gray-200 px-2 py-2 rounded-lg">
            <CiSaveDown2 size={20} className="hover:bg-gray-400" />
          </div>
          <div className="bg-gray-200 px-2 py-2 rounded-lg">
            <IoChatbubbleOutline size={20} className="hover:bg-gray-400" />
          </div>
        </div>
  
        <img src="/dp.jpeg" alt="Profile" className="h-10 w-10 rounded-full cursor-pointer ml-7" />
      </div>
    </nav>
  
    <div className="flex flex-col lg:flex-row p-8 space-y-8 lg:space-y-0 lg:space-x-8">
 
      <aside className="w-full lg:w-1/4 bg-white rounded-lg p-6">
        <ul className="space-y-4">
          <div className="hover:bg-gray-200 rounded-lg py-2 px-2">
            <li className="flex items-center space-x-2">
              <GoHome />
              <button className="">Dashboard</button>
            </li>
          </div>
          <div className="hover:bg-gray-200 rounded-lg py-2 px-2">
            <li className="flex items-center space-x-2">
              <FaFileAlt />
              <button className="">Quizzes</button>
            </li>
          </div>
          <div className="hover:bg-gray-200 rounded-lg py-2 px-2">
            <li className="flex items-center space-x-2">
              <PiScissorsLight />
              <button className="">Assignments</button>
            </li>
          </div>
          <div className="hover:bg-gray-200 rounded-lg py-2 px-2">
            <li className="flex items-center space-x-2">
              <BsPeople />
              <button className="">Students</button>
            </li>
          </div>
        </ul>
      </aside>
  
     
      <main className="flex-1 bg-white rounded-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">Create a quiz</h1>
  
        <div className="mb-4">
          <select className="w-full lg:w-1/2 px-4 py-2 border rounded-lg bg-gray-200">
            <option disabled selected>Select a topic</option>
            <option>History</option>
            <option>General knowledge</option>
            <option>Politics</option>
            <option>Science</option>
            <option>Maths</option>
            <option>Current affairs</option>
            <option>Geography</option>
          </select>
        </div>
  
        <div className="mb-4">
          <input type="number" className="w-full lg:w-1/2 px-4 py-2 placeholder:text-blue-400 border rounded-lg bg-gray-200" placeholder="Enter number of questions" />
        </div>
  
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-6 bg-gray-200 rounded-xl p-1">
          <button className="w-full lg:w-1/3 py-2 border rounded-3xl text-center text-blue-300 hover:bg-white text-sm font-semibold hover:text-black">Easy</button>
          <button className="w-full lg:w-1/3 py-2 border rounded-3xl text-center text-blue-300 hover:bg-white text-sm font-semibold hover:text-black">Medium</button>
          <button className="w-full lg:w-1/3 py-2 border rounded-3xl text-center text-blue-300 hover:bg-white text-sm font-semibold hover:text-black">Hard</button>
        </div>
  
        <h2 className="text-xl font-bold mb-4">Question type</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
          <button className="w-full sm:w-[15%] py-2 border rounded-xl text-center font-semibold hover:bg-blue-200">Multiple choice</button>
          <button className="w-full sm:w-[15%] py-2 border rounded-xl text-center font-semibold hover:bg-blue-200">True / False</button>
          <button className="w-full sm:w-[15%] py-2 border rounded-xl text-center font-semibold hover:bg-blue-200">Fill in the blank</button>
        </div>
  
        <button className="w-full sm:w-[15%] py-2 bg-blue-600 text-white rounded-lg">Generate quiz</button>
  
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Save to drafts</h2>
          <ul>
            <li className="py-2 border-b font-normal">Draft: Untitled Quiz <br /> 5 questions • Easy</li>
            <li className="py-2 border-b">Draft: Untitled Quiz <br /> 5 questions • Easy</li>
          </ul>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Home
