import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { ImFacebook } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (

    <footer className={`h-[40vh] bg-gray-300 ${styles.footer}`}>

      <div className='flex items-start'>
        <section>
          <h2 className='text-3xl font-medium'><a href="">OYETORO</a></h2>
          <ul>
             <li>
                <p className='text-slate-600'>&copy; 2024 design and developed by <a href="">Kenny</a>.Powered by<a href="">Webflow</a></p>
            </li>
          </ul>
        </section>

        <section>
          <ul>
            <li>
               <p>No. 17 – Alhaji Shelle Street, Sangotedo, Lagos State, Nigeria. Theophiliuskehinde@gmail.com +2348104012679</p>
            </li>
          </ul>
        </section>

        <section className='ml-10'>
          <h2>GET 32% OFF</h2>
            <ul className='space-x-4'>
               <li>
                  <p className='text-slate-800'>By subscribe to our newsletter</p>
               </li>
               <form>
                   <input type="email" name="enter email" id="email" placeholder='Enter Your Email' className='border rounded-xl px-7 mx-6 mt-3 ml-0'/>
              </form>
            </ul>
        </section>

        <section>
             <h2>FOLLOW US ON</h2>
             <ul className="flex pt-10 ml-10">
                <li className='space-x-4'>
                    <Link href="/">
                         <ImFacebook />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                         <FaGithub />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                         <FaInstagram />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                         <FaTwitter />
                    </Link>
                </li>
              </ul>
        </section>
      </div>
      <div>

      </div>
    </footer>
  )
}
