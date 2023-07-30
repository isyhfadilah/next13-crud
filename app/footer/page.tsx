import Container from "../layouts/Container"
import Link from "next/link"
import { menu } from '@/data/menu'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <Container className="flex justify-evenly">
                <div>
                    <h1 className="text-4xl text-white font-bold">Footer</h1>
                </div>
                <div>
                    <h2 className="uppercase font-medium text-gray-500 pb-5">Link used</h2>
                    <ul className="tracking-wide">
                    {menu.map((item, index) => (
                        <li key={index} className="mb-2">
                            <Link 
                                href={item.link}>
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