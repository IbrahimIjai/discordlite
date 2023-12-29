
import React from 'react'
import LanguageSelect from './LanguageSelect'
import {socialLinks} from "@/config/site"
function Footer() {
  return (
    <div className='bg-[#23272a]'>
      <LanguageSelect/>
      <div>
        {socialLinks.map((items, i)=>(
            <Link key={i}>
            
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
