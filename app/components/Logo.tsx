'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  return (
        <Image
            width="100"
            height="100"
            alt="Logo"
            src="/images/logo.png"
            className="md:block lg:block xl:block hidden cursor-pointer"
        />
  )
}
export default Logo