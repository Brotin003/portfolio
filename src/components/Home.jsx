import React from 'react'
import portfolio_img from '../assets/portfolio_img.jpg'
import {FiArrowRightCircle} from 'react-icons/fi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
               I'm an IT Undergrad. @JadavpurUniversity.
            </h2>
            <p className='text-gray-500 py-4 max-w-md text-xl'>
                Hi, I am Brotin Haldar.Currently persuing my B.E in IT.
                ML-enthusiast,Web developer from 
                Siliguri,WB.
            </p>
        
        <div >
            <Link to='projects' smooth duration={400} className='group text-black w-fit px-6 py-3 my-2 text-xl flex items-center rounded-md bg-gradient-to-r from-pink-300 to-red-600 cursor-pointer shadow-md shadow-red-500'>
                Projects
                <span className='group-hover:rotate-90 duration-200'>
                    <FiArrowRightCircle size={25} className='ml-1'/> 
                </span>
            </Link>
        </div>
       </div>
       <div>
        <img src={portfolio_img} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-full' />
       </div>
     </div>
    </div>
  )
}

export default Home