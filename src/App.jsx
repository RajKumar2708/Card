import React from 'react'
import vctr1 from './assets/vector1.png'
import vctr2 from './assets/vector2.png'
import vctr3 from './assets/vectorly3.png'
import vctr4 from './assets/vector4.png'
import vctr5 from './assets/vector5.png'
import vctr6 from './assets/vector6.png'
import chrct from './assets/charc.png'

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=' h-[90%]  w-[100%] p-6 lg:w-[70%]'>
        <div className=' flex h-[20%] w-[90%] justify-between'>
          <div className='w-[25%] h-[100%]'>
            <h1 className='text-3xl'>Why Choose Our institution?</h1>
          </div>
          <div className='w-[40%] h-[100%]'>
            <p className='text-sm text-gray-400'>With 3,000+expert instructors and 200+top-rated courses, we provide flexible learning, hands-on training, and industry-recognized certifications to help you grow and succeed in your career.</p>

          </div>

        </div>
        <div className='h-[70%] w-[100%] flex flex-col'>
          {/* row1 */}
          <div className='h-[33%] w-[100%] flex  items-end gap-2'>
            <div className="h-[90%] w-[45%] rounded-2xl bg-[#bd78fd] flex items-center pl-4">
              <img src={vctr1} alt="vector1" className=""/>
            </div>

            <div className='h-[90%] w-[15%] rounded-2xl bg-[#161b87] flex flex-col justify-center items-center'>
              <h1 className='text-white text-2xl'>200+</h1>
              <p className='text-white font-light text-sm text-center'>Best Courses we are serving</p>
            </div>
          </div>
          {/* row2 */}
          <div className='h-[33%] w-[100%] flex  items-end gap-2'>
          <div className="h-[90%] w-[55%] rounded-2xl bg-[#bd78fd] flex items-end pl-4">
              <img src={vctr2} alt="vector2" className=""/>
            </div>
            <div className='h-[90%] w-[15%] rounded-2xl bg-[#161b87] flex flex-col justify-center items-center'>
              <h1 className='text-white text-2xl'>100%</h1>
              <p className='text-white font-light text-sm text-center'>High Quality Content Served</p>
            </div>
            <div className='h-[60%] w-[18%] rounded-2xl bg-[#bd78fd] flex justify-center items-center'>
              <img src={vctr3} alt="vector3" className=""/>
            </div>
          </div>
          {/* row3 */}
          <div className='h-[33%] w-[100%] flex items-end gap-2'>
            <div className='h-[90%] w-[65%] rounded-2xl px-4 bg-[#bd78fd] flex justify-between items-center'>
              <img src={vctr4} alt="vector2" className=""/>
              <img src={vctr5} alt="vector2" className=""/>
            </div>
            <div className='h-[90%] w-[15%] rounded-2xl bg-[#161b87] flex flex-col justify-center items-center'>
              <h1 className='text-white text-2xl'>10+</h1>
              <p className='text-white font-light text-sm text-center'>High Trained Teacher</p>
            </div>
            <div className='h-[90%] w-[8%] rounded-2xl bg-[#bd78fd] flex justify-center items-center'>
              <img src={vctr6} alt="vector2" className=""/>
            </div>
          </div>
          <img
            src={chrct}
            alt="character"
            className="absolute h-[65%] bottom-0 left-[19%] top-[18%]"
          />
        </div>
        
      </div>
    </div>
  )
}

export default App
