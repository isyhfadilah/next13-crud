'use client'
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function DetailProduk(item: Product) {
    const [title, setTitle] = useState(item.title)
    const [price, setPrice] = useState(item.price)
    const [image, setImage] = useState(item.image)

    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)

    const router = useRouter()

    const handleChange = () => {
        setModal(!modal)
    }   

    async function handleDetail(e: SyntheticEvent) {
        e.preventDefault()

        setIsMutating(true)
        await fetch(`http://localhost:5000/products/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: title,
                price: price,
                image: image
            })
        })

        setIsMutating(false)
        router.refresh()
        setModal(false)

    }
    
    return (
        <div>
            <button className="btn btn-sm btn-primary" onClick={handleChange}>detail</button>
            <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange}/>

            <div className="modal">
                <div className="modal-box bg-base-content">
                    <h1 className="text-white text-xl font-bold">detail product</h1>
                    <div className="flex pl-10 pt-10 items-center">
                        <Image src={item.image} alt={item.title} height={100} width={100} className="rounded-lg object-cover"/>

                        <div className="text-start pl-10 text-lg capitalize">
                            <h2>{item.title}</h2>
                            <p className="text-base">${item.price}</p>
                        </div>

                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={handleChange}>close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}