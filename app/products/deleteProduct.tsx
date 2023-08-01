'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

type Product = {
    id: number;
    title: string;
    price: number;
}

export default function DeleteProduct(item: Product) {
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)

    // agar bisa melihat perubahan data setelah di submit
    const router = useRouter()

    const handleChange = () => {
        setModal(!modal)
    }

    async function handleDelete(itemId: number) {
        setIsMutating(true)

        await fetch(`http://localhost:5000/products/${itemId}`, {
            method: 'DELETE',
        })

        setIsMutating(false)

        router.refresh()
        setModal(false)
    }

    return (
        <div>
            <button className="btn btn-error btn-sm" onClick={handleChange}>delete</button>
            {/* search checked, onChange */}
            <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange}/>

            <div className="modal">
                <div className="modal-box bg-base-content">
                    <h3 className="font-bold text-lg">Are you sure to delete {item.title}?</h3>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleChange}>close</button>
                            {!isMutating ? (
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    onClick={() => handleDelete(item.id)}>
                                        delete
                                </button>
                            ) : (
                                <button type="button" className="btn loading">deleting..</button>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}