import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-5xl font-bold inline border-b-4 border-gray-500'>
                About
               </p>
            </div>
            <p className='text-xl mt-20'>
               Welcome to my professional portfolio website! I am delighted to showcase my work, skills, and accomplishments through this meticulously crafted platform. Leveraging the power of cutting-edge technologies, I have developed this site using ReactJS, designed with the sleek aesthetics of TailwindCSS, and deployed it on the reliable and secure Netlify platform.
              Throughout this website, you will find a comprehensive collection of my projects, demonstrating my expertise and proficiency in various domains. 
            </p>

        </div>
    </div>
  )
}

export default About
