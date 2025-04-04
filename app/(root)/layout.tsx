import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout =  async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated()
  // if(!isUserAuthenticated) redirect('/sign-in') // uncomment this when the ssl certificate issue is fixed
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

export default RootLayout