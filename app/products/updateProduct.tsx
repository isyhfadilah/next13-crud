'use client'
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"

type Product = {
    id: number;
    title: string;
    price: number;
}

export default function UpdateProduct(item: Product) {
    const [title, setTitle] = useState(item.title)
    const [price, setPrice] = useState(item.price)
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)

    // agar bisa melihat perubahan data setelah di submit
    const router = useRouter()

    const handleChange = () => {
        setModal(!modal)
    }

    async function handleUpdate(e: SyntheticEvent) {
        // supaya page ga reload
        e.preventDefault();

        setIsMutating(true)

        await fetch(`http://localhost:5000/products/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                price: price,
            })
        })

        setIsMutating(false)

        router.refresh()
        setModal(false)
    }

    return (
        <div>
            <button className="btn btn-info btn-sm" onClick={handleChange}>edit</button>
            {/* search checked, onChange */}
            <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange}/>

            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update {item.title}</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">Title</label>
                            <input 
                                type="text" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                className="input w-full input-bordered" 
                                placeholder="Product Name" />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Price</label>
                            <input 
                                type="text" 
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="input w-full input-bordered" 
                                placeholder="Price"/>
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleChange}>close</button>
                            {!isMutating ? (
                                <button type="submit" className="btn btn-primary">update</button>
                            ) : (
                                <button type="button" className="btn loading">updating..</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}