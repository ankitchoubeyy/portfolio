import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter} from "react-icons/fa6"

function Footer() {
  return (
    <div className='mt-12 text-white/70 container py-8 mx-auto border-t border-gray-700 pt-4 flex justify-between items-center px-4' >

        <h1 className='text-2xl font-bold mt-4'>Ankit Choubey</h1>


        <div className='flex space-x-4 mt-4'>
            <a href="https://www.linkedin.com/in/ankitchoubeyy/" target='_blank' className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href="https://x.com/ChoubeyCodes" target='_blank' className='hover:text-gray-300'>
                <FaSquareXTwitter size={24}/>
            </a>
            <a href="https://github.com/ankitchoubeyy" target='_blank' className='hover:text-gray-300'>
                <FaGithub size={24}/>
            </a>
            <a href="https://www.instagram.com/ankitchoubeyy" target='_blank' className='hover:text-gray-300'>
                <FaInstagram size={24}/>
            </a>
        </div>
    </div>
  )
}

export default Footer