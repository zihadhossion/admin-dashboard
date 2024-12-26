import React from "react";
import Link from "next/link";
import Search from "@/components/Search";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { fetchProducts } from "@/data/data";
import { deleteProduct } from "@/lib/actions";
import Table from "@/components/Table";

interface FetchUsersResponse {
    products: any[];
    count: number;
}

const tableHeaders = ["Title", "Description", "Price", "Created At", "Stock", "Action"];

export default async function ProductsPage({ searchParams }: { searchParams: { q?: string; page?: number; } }) {
    const params = await searchParams;
    const q = params?.q || "";
    const page = params?.page || 1;
    const { products, count }: FetchUsersResponse = await fetchProducts(q, page);

    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <div className="flex items-center justify-between">
                <Search placeHolder="Search a product..." />
                <Link href="/products/add">
                    <button className="text-sm text-white bg-[#5d57c9] p-2.5 rounded-md">Add Product</button>
                </Link>
            </div>
            <Table tableHead={tableHeaders}>
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
                        <td>{product?.createdAt ? product.createdAt?.toString().slice(4, 16) : "2024"}</td>
                        <td>{product.stock}</td>
                        <td>
                            <div className="flex gap-2.5">
                                <Link href={`/products/${product.id}`}>
                                    <button className="text-white bg-teal-500 hover:bg-teal-600 p-[5px_10px] rounded transition">
                                        View
                                    </button>
                                </Link>
                                <form action={deleteProduct}>
                                    <input type="hidden" name="id" value={product.id} />
                                    <button className="text-white bg-red-500 hover:bg-red-700 p-[5px_10px] rounded transition">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                ))}
            </Table>
            <Pagination count={count} />
        </section>
    )
};