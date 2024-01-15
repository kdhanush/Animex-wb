import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import animexLogo from "../../public/animex-logo.png"

function Navbar() {

  return (
    <div className='flex w-full mx-auto justify-between items-center px-5 sm:px-6 py-5 lg:px-8'>
      <div className='flex items-center'>
        <Link href={"/home"} className='w-32'>
          <Image src={animexLogo} alt='logo' priority></Image>
        </Link>
      </div>
    </div>
  )
}

export default Navbar