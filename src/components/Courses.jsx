import React from 'react'
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'
import course4 from '../assets/course4.png'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsGraphUp } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import pfp1 from "../assets/pfp1.png"
import ui from "../assets/ui.png"
import ai from "../assets/ai.png"
import java from "../assets/java.png"
import arrow from "../assets/coursesarrow.png"
import { GoArrowRight } from "react-icons/go";

const Courses = () => {
  return (

    <div className='min-h-screen w-full flex flex-col p-6 lg:w-[75%] md:my-10'>
      <div className=' flex flex-col lg:flex-row'>
        <div className='w-[50%] h-[25vh] relative'>
          <h1 className='text-5xl'>Pick a course <br/>by our <br/>category</h1>
          <img src={arrow} className='absolute right-0 bottom-10 hidden lg:flex'></img>
        </div>
        <div className='w-[50%] flex justify-between items-center'>
          <img src={ai} className="w-1/4 h-32 object-contain" />
          <img src={ui} className="w-1/4 h-32 object-contain" />
          <img src={java} className="w-1/4 h-32 object-contain" />
        </div>


      </div>
      <div className='flex justify-end'>
        <button className='flex gap-2 items-center'>View Courses<GoArrowRight/></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className='w-full flex flex-col rounded-4xl md:flex-row shadow-md overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course1} className='w-full h-full object-cover' alt="Python Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Python Fundamentals</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                25,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col rounded-4xl md:flex-row shadow-md overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course2} className='w-full h-full object-cover' alt="Java Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Java Programming</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                19,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row rounded-4xl  overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course3} className='w-full h-full object-cover' alt="IoT Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Internet of Things</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                25,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row shadow-md rounded-4xl overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course4} className='w-full h-full object-cover' alt="Data Science Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Data Science Foundation</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                19,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row shadow-md rounded-4xl overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course3} className='w-full h-full object-cover' alt="IoT Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Internet of Things</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                25,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row shadow-md rounded-4xl overflow-hidden'>
          <div className='w-full md:w-[50%]'>
            <img src={course4} className='w-full h-full object-cover' alt="Data Science Course" />
          </div>
          <div className='w-full md:w-[50%] p-4 flex flex-col gap-4'>
            <div className='flex justify-between text-gray-600 text-sm'>
              <div className='flex gap-2 items-center'>
                <BsGraphUp />
                <h3>Basic</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <CiCalendar />
                <h3>5 Weeks</h3>
              </div>
            </div>
            <h1 className='text-lg font-semibold'>Training in Data Science Foundation</h1>
            <div className='flex gap-2 text-sm'>
              <div className='flex items-center'>
                <LiaRupeeSignSolid />
                19,000
              </div>
              <div className='flex items-center gap-2'>
                <FaRegStar className='text-amber-300' />
                4.9
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src={pfp1} alt="Instructor" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h4 className="font-semibold">Cody Fisher</h4>
                <p className="text-sm text-gray-500">Python Developer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Courses
