
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'

function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className=' relative w-10 h-10 rounded-sm'>
        <Avatar className=' w-10 h-10 rounded-sm'>
          <AvatarImage />
          <AvatarFallback className=' rounded-sm'>D</AvatarFallback>
        </Avatar>
      </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserNav