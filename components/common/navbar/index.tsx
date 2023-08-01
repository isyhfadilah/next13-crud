'use client'
import Container from '@/app/layouts/Container'
import { menu } from '@/data/menu'
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='py-8 text-lg'>
            <Container className='flex justify-between'>
                <div className='bg-base-content text-white rounded-xl px-10'>
                    <h2 className='uppercase'>crud</h2>
                </div>

                <ul className='flex gap-16 text-white items-center'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar