"use client";

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
export default function Navbar() {
    const search = useSearchParams()
    const getData = search.get("todos")
    return (
        <nav className='navbar flex justify-evenly gap-3 mt-16 '>
            <Link href={'/'} className={`nav-link nav-link-grow-up ${getData == null ? ('new') : null}`}>All</Link>
            < Link href={'/?todos=active'} className={`nav-link nav-link-grow-up ${getData == 'active' ? ('new') : null}`}>Active</Link>
            <Link href={'/?todos=completed'} className={`nav-link nav-link-grow-up ${getData == 'completed' ? ('new') : null}`} >Completed</Link>
        </nav>
    )
}
