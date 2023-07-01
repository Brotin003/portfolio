import React from 'react'
import pro from '../assets/pro.jpg'
import pro1 from '../assests/portfolio/sort.png'
const Projects = () => {
  const Project=[
    {
      id:1,
      src:pro1,

    },
    {
      id:2,
      src:pro,

    },
    {
      id:3,
      src:pro,

    },
    {
      id:4,
      src:pro,

    },
    {
      id:5,
      src:pro,

    },
    {
      id:6,
      src:pro,

    },
    
  ]
  return (
  
    <div name='projects' className=' w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='justify-centre h-full w-full max-w-screen-lg p-4 mx-auto flex flex-col'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-500'>
                   Projects 
                </p>
                <p className='py-6'>Check out...</p>
            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {Project.map(({id,src})=>(
                  <div key={id} className='shadow-md shadow-pink-500 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 puy-3 m-4 duration-200 hover:scale-105'>
                      Launch
                  </button>
                  <button className='w-1/2 px-6 puy-3 m-4 duration-200 hover:scale-105'>
                      Code
                  </button>
                </div>
                </div>
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default Projects