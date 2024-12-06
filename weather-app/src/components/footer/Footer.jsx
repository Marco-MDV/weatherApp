import React from 'react'
import { FaInstagram , FaLinkedin , FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
        <div className=' h-32 flex items-center text-sky-600 md:text-2xl  '>
            <ul className='flex justify-around w-full '>
                <li className='border-2 p-2 rounded-lg bg-slate-100 hover:text-sky-400'>
                    <a className='flex flex-row justify-items-center items-center gap-1' href="https://www.instagram.com/marco__dev/profilecard/?igsh=MWM3enl6dWI0bzIzaQ==">
                        <p>Instagram</p>
                        <FaInstagram />
                    </a>
                </li>
                <li className='border-2 p-2 rounded-lg bg-slate-100 hover:text-sky-400'>
                    <a className='flex flex-row justify-items-center items-center gap-1' href="https://www.linkedin.com/in/marco-de-vincentiis-98299a217">
                        <p>Linkedin</p>
                        <FaLinkedin />
                    </a>
                </li>
                <li className='border-2 p-2 rounded-lg bg-slate-100 hover:text-sky-400'>
                    <a className='flex flex-row justify-items-center items-center gap-1' href="https://github.com/Marco-MDV">    
                        <p>Github</p>
                        <FaSquareGithub />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
