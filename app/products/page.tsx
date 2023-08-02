import AddProduct from './addProduct'
import DeleteProduct from './deleteProduct'
import UpdateProduct from './updateProduct'

import Container from '../layouts/Container'
import DetailProduk from './detailProduct'

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
}

async function getProducts() {
    const res = await fetch('http://localhost:5000/products', {
        // sm spt getServerSideProps nextjs12
        cache: "no-store"
        // incremental static regeneration
        // next: { revalidate: 10 }
    })
    return res.json()
}

export default async function ProductList() {
    const products: Product[] = await getProducts()
    return (
        <section className="items-center py-36">
            <Container>
                <div className="px-10">
                    <div className="py-2">
                        <AddProduct />
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="uppercase text-center text-white">
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={index} className='text-center capitalize text-white'>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td className='flex gap-6 justify-center'>
                                    <UpdateProduct {...item} />
                                    <DeleteProduct {...item} />
                                    <DetailProduk {...item}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
        
    )
}