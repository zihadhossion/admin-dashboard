import Image from "next/image";
import { fetchProduct } from "@/data/data";
import { updateProduct } from "@/lib/actions";

export default async function ProductDetailPage({ params }) {
    const { id } = params;
    const product = await fetchProduct(id);

    return (
        <div className="flex gap-12 mt-5">
            <div className="flex-1 text-textSoft bg-bgSoftColor font-bold p-5 rounded-lg">
                <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                {product.title}
            </div>
            <div className="flex-[3] bg-bgSoftColor p-5 rounded-lg">
                <form action={updateProduct} className="flex flex-col">
                    <input type="hidden" name="id" value={product.id} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label className="text-xs">Title</label>
                    <input type="text" name="title" placeholder={product.title}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label className="text-xs">Price</label>
                    <input type="number" name="price" placeholder={product.price} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label className="text-xs">Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label className="text-xs">Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder={product.color || "color"}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5"
                    />
                    <label className="text-xs">Size</label>
                    <textarea
                        name="size"
                        placeholder={product.size || "size"}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5"
                    />
                    <label className="text-xs">Cat</label>
                    <select name="cat" id="cat" className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label className="text-xs">Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder={product.desc}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5"
                    ></textarea>
                    <button className="w-full text-white bg-teal-700 p-5 rounded mt-5">
                        Update</button>
                </form>
            </div>
        </div>
    )
};