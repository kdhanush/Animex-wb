"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import GoogleLoginLogo from "../../public/google.svg"
import { signIn } from 'next-auth/react'

function GoogleSigninButton() {
  return (
    <Button  onClick= {() => {signIn("google")}} variant={"outline"} size="icon">
      <Image src={GoogleLoginLogo} alt="google logo" className=""></Image>
    </Button>
  )
}

export default GoogleSigninButton