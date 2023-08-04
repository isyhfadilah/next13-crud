'use client'

import Container from '@/app/layouts/Container'
import Link from "next/link"

import { useState } from 'react'
import { menu } from '@/data/menu'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { cn } from '@/lib/utils'
import { Menu, Transition } from '@headlessui/react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav className='py-8 text-lg fixed w-full'>
            <Container className='flex justify-between'>
                <div className='bg-base-content text-white rounded-xl px-10 flex items-center'>
                    <h2 className='uppercase'>crud</h2>
                </div>

                <div className="text-white">
                    {!isOpen ? (
                        <HiOutlineMenuAlt3 
                            onClick={() => setIsOpen(!isOpen)}
                            size={35}
                            className="lg:hidden cursor-pointer"
                        />
                    ) : (
                        <MdClose 
                            onClick={() => setIsOpen(!isOpen)}
                            size={35}
                            className="lg:hidden cursor-pointer"
                        />
                    )}

                </div>

                <ul className='hidden lg:flex gap-16 items-center'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.link}
                                className={cn('font-light hover:text-gray-300','text-white/50')}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>

            <Transition
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="bg-base-content/80 right-0 left-0 rounded-lg py-16 absolute items-center lg:hidden overflow-hidden-y mt-5 mx-6 md:mx-16"    
            >
                <Menu>
                    <ul className='flex flex-col gap-8 items-center'>
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.link}
                                    className={cn('font-light hover:text-gray-100', 'text-white/50')}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Menu>
            </Transition>
        </nav>
    )
}

export default Navbar