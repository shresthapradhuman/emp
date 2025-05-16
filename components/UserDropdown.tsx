'use client'
import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { profileItems } from '@/constants'
import { LogOutIcon } from 'lucide-react'

const UserDropdown = () => {
  const handleLogout = () => {
    alert('Logout')
  }
  const user = {
    name: 'Pradhuman Shrestha',
    email: 'shresthapradhuman2018@gmail.com',
    image: '/profile.svg',
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer rounded-full">
        <Avatar className="bg-primary/10 relative h-8 w-8 overflow-hidden">
          <AvatarImage
            src={user.image || ''}
            alt={'avatar'}
            className="h-10 w-10 object-cover"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64" sideOffset={10}>
        <DropdownMenuLabel>
          <h3 className="text-base font-semibold">{user.name}</h3>
          <p className="text-muted-foreground truncate text-sm">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profileItems.map(({ label, url, icon: Icon }, key) => (
          <DropdownMenuItem
            asChild
            className="cursor-pointer capitalize"
            key={key}
          >
            <Link href={`/user/${url}`}>
              <Icon /> {label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
