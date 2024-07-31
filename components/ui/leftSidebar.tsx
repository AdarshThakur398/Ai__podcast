import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {sidebarLinks} from '@/constants'
const LeftSidebar = () => {
  return (
    <div>
      <section className="left_sidebar">
        <nav className="flex flex-col gap-20">
          <Link href="/" className=" curson-pointer flex pb-10 gap-1 items-center max-lg:justify-center">
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcastr</h1>
          </Link>

          {sidebarLinks.map(({route,label,imgURL}) => {
   return (
    <Link href={route} key={label} className="flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start">
   <Image src={imgURL} alt={label} width={24} height={22}></Image>
    </Link>
   )
 })}
        </nav>  
      </section>
    </div>
  )
}

export default LeftSidebar;
