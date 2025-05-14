'use client'
import React from 'react'
import Link from 'next/link'
import { BoxIcon } from 'lucide-react'

const Logo = () => {
  return (
    <h1 className="text-xl font-bold tracking-tight">
      <Link href={'/'} className="flex items-center">
        E-B
        <BoxIcon
          size={24}
          className="fill-accent stroke-accent-foreground -mt-1"
        />{' '}
        X
      </Link>
    </h1>
  )
}

export default Logo
