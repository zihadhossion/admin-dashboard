import React from "react";
import Link from "next/link";
import Search from "@/components/Search";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { fetchProducts } from "@/data/data";
import { deleteProduct } from "@/lib/actions";

interface FetchUsersResponse {
    products: any[];
    count: number;
}

export default async function ProductsPage({ searchParams }: { searchParams: { q?: string; page?: number; } }) {
    const params = await searchParams;
    const q = params?.q || "";
    const page = params?.page || 1;
    const { products, count }: FetchUsersResponse = await fetchProducts(q, page);

    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <div className="flex items-center justify-between">
                <Search placeHolder="Search for a user..." />
                <Link href="/products/add">
                    <button className="text-white bg-[#5d57c9] p-2.5 rounded-md">Add New</button>
                </Link>
            </div>
            <table className="w-full table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div className="flex items-center gap-2.5">
                                    <Image
                                        src={product?.img || "/noproduct.jpg"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="object-cover rounded-full"
                                    />
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>{product.createdAt?.toString().slice(4, 16)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/products/${product.id}`}>
                                        <button className="text-white bg-teal-400 p-[5px_10px] rounded">
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteProduct}>
                                        <input type="hidden" name="id" value={product.id} />
                                        <button className="text-white bg-[#dc143c] p-[5px_10px] rounded">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </section>
    )
};