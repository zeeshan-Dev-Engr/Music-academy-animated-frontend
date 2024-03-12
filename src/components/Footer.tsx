import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className=' bg-black text-gray-400 py-12'>
        <div className=' max-w-6xl items-center justify-center p-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div><h1 className=' font-bold text-lg text-center'>About US</h1>
            <p className=' text-sm pt-3 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam neque dolorum libero eius quam labore nobis cumque reprehenderit earum. At, aliquid. Nihil quaerat natus officiis quo ratione culpa. Vero?</p>
            </div>
            <div>
                <h1 className=' font-bold text-lg text-center p-3'>Quick Links</h1>
                <ul className=' text-center '>
                    <li><Link href={"/Home"}>Home</Link></li>
                    <li><Link href={"/About"}>About</Link></li>
                    <li><Link href={"/Courses"}>Courses</Link></li>
                    <li> <Link href={"/Contact"}>Contact</Link></li>
                </ul>    
            </div>
            <div>
            <h1 className=' font-bold text-lg text-center p-3'>Follow Us</h1>
                <ul className=' text-center '>
                    <li><Link href={"/Home"}>Facebook</Link></li>
                    <li><Link href={"/About"}>Teitter</Link></li>
                    <li><Link href={"/Courses"}>Instagram</Link></li> 
                </ul>
            </div>
            <div>
            <h1 className=' font-bold text-lg text-center p-3'>Contact Us</h1>
             <p className=' text-center'>
                Islamabad,Pakistan <br />
                zip code: 04403 <br />
                info@musicschool.com <br />
                +9203345678089
             </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer