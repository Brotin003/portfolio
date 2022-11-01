import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillInstagram,AiOutlineMail} from 'react-icons/ai'

const SocialLinks = () => {
  const links =[
    {
        id: 1,
        child: (
            <>
            LinkedIn <AiFillLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/brotin-haldar-236872231/',
        style: 'rounded-tr-md'
        
    },
    {
        id: 2,
        child: (
            <>
            GitHub <AiFillGithub size={30}/>
            </>
        ),
        href:'https://github.com/Brotin003',
        
        
    },
    {
        id: 3,
        child: (
            <>
            Twitter <AiFillTwitterCircle size={30}/>
            </>
        ),
        href:'https://twitter.com/Cravinndxd',
        
        
    },
    {
        id: 4,
        child: (
            <>
            Instagram <AiFillInstagram size={30}/>
            </>
        ),
        href:'https://www.instagram.com/ig_fadedbro/',
        
        
    },
    {
        id: 5,
        child: (
            <>
            Mail <AiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:brotinhaldar57@gmail.com',
        
        
    },
  ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
       <ul>
        {links.map(({id,href,style,child}) =>(
            <li key= {id}className={'flex justify-between items-center w-40 h-14 px-2 ml-[-80px] hover:ml-[-1px]  hover:rounded-md duration-300 bg-gray-500' + '' + style}>
            <a href={href} className='flex justify-between items-center w-full
            text-white' target='_blank'>
                {child}
            </a>
        </li>
        ))}
        
       </ul>
    </div>
  )
}

export default SocialLinks