import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-full w-full bg-gradient-to-b from-black to-gray-800   text-white   '>
        <div className='justify-center h-full flex flex-col p-4 max-w-screen-lg mx-auto '>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >Contact</p>
                <p className='py-6'>Submit the form to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/7a7fef61-2e4d-4cc1-a822-2387d8df20e7" 
            method='POST'
            className='flex flex-col md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md my-2 text-white focus:outline-none'/>
                <textarea name="message"  rows="10" placeholder='Message...' className='p-2 bg-transparent border-2 rounded-md my-2 text-white focus:outline-none'></textarea>
                <button className='text-black bg-gradient-to-b from-pink-300 to-red-500 px-6 py-3 my-6 items-center  mx-auto flex rounded-md hover:scale-110 duration-500 text-xl'>Submit</button>
            </form>
            </div>
           
        </div>
    </div>
  )
}

export default Contact