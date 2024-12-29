import React from "react";
import { addProduct } from "@/lib/actions";

export default function AddProductPage() {
    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <form action={addProduct} className="flex flex-wrap gap-5">
                <input
                    type="file"
                    name="img"
                    id="img"
                    accept="image/*"
                    className="w-1/4 text-white bg-bgColor rounded p-1 mb-7"
                />
                <input type="text" placeholder="title" name="title" className="w-[70%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7" required />
                <input type="number" placeholder="price" name="price" className="w-[30%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7" required />
                <input type="number" placeholder="stock" name="stock" className="w-[30%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7" required />
                <input type="text" placeholder="size" name="size" className="w-[30%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7" />
                <input type="text" placeholder="color" name="color" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7" />
                <select name="cate" id="cate" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7">
                    <option value="">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <textarea
                    required
                    name="desc"
                    id="desc"
                    rows={5}
                    placeholder="Description"
                    className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded p-3 mb-7"
                ></textarea>
                <button type="submit" className="w-full text-white bg-teal-700 hover:bg-teal-600 px-7 py-3 rounded transition">
                    Add Product</button>
            </form>
        </section>
    )
};