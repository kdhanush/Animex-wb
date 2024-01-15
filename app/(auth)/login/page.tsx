import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/Components/GithubSignInButton";
import GoogleSigninButton from "@/app/Components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {

  const session = await getServerSession(authOptions)

  if(session){
    return redirect('/home')
  }

  return(
    <div className=" mt-24 rounded px-6 py-10 bg-black/80 md:mt-0 md:mx-w-sm md:px-14">
    <form>
      <h1 className=" text-3xl text-white">Login</h1>
      <div className=" space-y-4 mt-5">
      <Input type="email" placeholder="Email" className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"></Input>
      <Input type="password" placeholder="Password" className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full"></Input>
      <Button className=" w-full bg-[#e50914]" type="submit" variant="destructive">
        Submit
      </Button>
      </div>
    </form>
    <div className=" text-gray-500 text-sm mt-2"> New here? <Link className=" text-white text-sm" href={'/sign-up'}>Sign up now! </Link></div>
    <div className="flex justify-center items-center gap-x-3 mt-2 w-full" >
      <GithubSignInButton />
      <GoogleSigninButton />
    </div>
  </div>
  )
}