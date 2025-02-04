import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img  className='max-w-28' src="/ag.png" alt="" />
        </div>
        <div className='m-8 items-center justify-center flex gap-4 text-2xl'>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><FaLinkedin/></a>
           <a href="https://github.com/Anshmangithub"><FaGithub/></a> 
           <a href="https://x.com/GajbhiyeAn52363"> <FaSquareXTwitter/></a>
           <a href="https://www.instagram.com/anshhh.__g27_/"><FaInstagram/></a> 
        </div>
    </nav>
  )
}

export default Navbar