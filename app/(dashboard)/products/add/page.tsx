import React from "react";
import { addProduct } from "@/lib/actions";

export default function AddProductPage() {
    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <form action={addProduct} className="flex flex-wrap justify-between">
                <input type="text" placeholder="title" name="title" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" required />
                <select name="cate" id="cate" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7">
                    <option value="">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" required />
                <input type="number" placeholder="stock" name="stock" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" required />
                <input type="text" placeholder="color" name="color" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
                <input type="text" placeholder="size" name="size" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
                <textarea
                    required
                    name="desc"
                    id="desc"
                    rows={16}
                    placeholder="Description"
                    className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7"
                ></textarea>
                <button type="submit" className="w-full text-white bg-teal-400 rounded p-7">Submit</button>
            </form>
        </section>
    )
};