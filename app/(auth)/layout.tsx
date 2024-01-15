import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from '../../public/login_background.jpg'
import AnimexLogo from '../../public/animex-logo.png'

export default function AuthLayout({children }: {children : ReactNode }) {
return (
  <div className=" relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
  <Image
  src={BackgroundImage}
  alt="background image"
  className="hidden sm:flex sm:object-cover -z-10 brightness-50"
  priority
  fill
   />
  <Image
  src={AnimexLogo}
  alt="logo image"
  className=" absolute top-4 left-4 bg-transparent"
  width={120}
  height={120}
  priority
   />

  {children}
  </div>
)

}