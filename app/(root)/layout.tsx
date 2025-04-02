import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav className=''>
        <Link href="/" className='flex flex-center gap-2' >
          <Image src='/logo.svg' alt='Logo' width={38} height={32} />
          <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
      </nav>
      {children}      
    </div>
  )
}

export default AuthLayout