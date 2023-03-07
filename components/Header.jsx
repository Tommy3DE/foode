'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className='py-5 bg-slate-300'>
        <Link href='/'>
            <h1 className='text-blue-700 font-bold text-5xl'>Foode</h1>
        </Link>
    </div>
  )
}

export default Header