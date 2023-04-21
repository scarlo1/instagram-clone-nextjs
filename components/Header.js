import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Left */}
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                 src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Instagram.png"
                 alt="Instagram"
                 layout="fill"
                 className="object-contain"
                 />
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                 alt="Instagram"
                 layout="fill"
                 className="object-contain"
                 />
            </div>
            <h1>Right sides</h1>
        </div>
        {/* Middle */}
        {/* Right */}
    </div>
  )
}
