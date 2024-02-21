"use client"
import { useState } from 'react'
import Link from 'next/link'
import { TfiShoppingCart } from "react-icons/tfi";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


export default function Navbar() {
    const [cart, setCart] = useState(0)
    const [open, setopen] = useState(true)

    function controlNav(){
        setopen(!open)
    }


  return (
    <nav className='flex justify-between px-[2rem] py-8'>
        
             <ul className="flex items-start gap-4">
                 <li>
                     <Link href="/">
                         <span className='flex flex-col font-bold text-3xl text-red-500'>Kenny Young</span>
                     </Link>
                 </li>
             </ul>
        <div className='flex flex-col justify-end'>
                <ul className={`md:hidden ${open ? 'flex' : 'hidden'} cursor-pointer flex justify-items-end text-2xl`}>
                    <li onClick={controlNav}>
                        <RxHamburgerMenu />
                    </li>
                </ul>
                <ul className={`md:hidden ${open ? 'hidden' : 'flex'} cursor-pointer flex text-2xl `}>
                    <li onClick={controlNav}>
                        <RxCross2 />
                    </li>
                </ul>
                <ul className={`md:flex ${open ? 'hidden' : 'flex flex-col'} justify-center space-x-14 mt-3`}>
                    <li>
                        <Link href='/Home'>Home</Link>
                    </li>
                    <li>
                     <Link href='/About'>About</Link>
                    </li>
                    <li>
                        <Link href='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link href='/Pages'>Pages</Link>
                    </li>
                    <li>
                        <Link href='/Contact'>Contact</Link>
                    </li>
                </ul>
        </div>

        <ul className='flex justify-end'>
            <li>
             <form>
                <input type="text" name='text' id='' placeholder='search' className='border rounded-xl px-6 pt-3 mx-6 mt-3 ml-0'/>
             </form>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/Login' className='flex items-end gap-2 mt-4'>
                    <GoPerson />
                </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="/Cart" className="flex items-center gap-2 mt-4">
                    <TfiShoppingCart />
                </Link>
            </li>
        </ul>

    </nav>
  )
}
