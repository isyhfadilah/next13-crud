import Container from "../../../app/layouts/Container"
import Link from "next/link"
import { menu } from '@/data/menu'
import { cn } from '@/lib/utils'

const Footer = () => {
    return (
        <footer className="bg-base-content text-white py-16">
            <Container className="lg:flex justify-evenly px-16 lg:px-0">
                <div>
                    <h1 className="text-4xl text-white font-bold">Footer</h1>
                </div>
                <div>
                    <h2 className="uppercase font-medium text-gray-100 pb-5 mt-10">Link used</h2>
                    <ul className="tracking-wide">
                    {menu.map((item, index) => (
                        <li key={index} className="mb-2">
                            <Link 
                                href={item.link}
                                className={cn('font-light hover:text-gray-100', 'text-white/50')}>
                                    {item.name}
                            </Link>
                        </li>
                    ))} 
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer