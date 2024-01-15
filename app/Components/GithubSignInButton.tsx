"use client"

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import GithubLogo from "../../public/github.svg"
import Image from 'next/image'
import React from 'react'

function GithubSignInButton() {
  return (
     <Button onClick={() => {signIn("github")}} variant={"outline"} size="icon">
    <Image src={GithubLogo} alt="github logo" className=" bg-white"></Image>
    </Button>
  )
}

export default GithubSignInButton