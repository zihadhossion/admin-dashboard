import Image from "next/image";
import { fetchProduct } from "@/data/data";
import { updateProduct } from "@/lib/actions";
import FormRow from "@/components/FormRow";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await fetchProduct(id);

    return (
        <section className="mt-5">
            <form action={updateProduct} className="flex gap-10">
                <div className="flex-1 text-textSoft bg-bgSoftColor p-5 rounded-lg">
                    <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
                        <Image src={product?.img || "/noproduct.jpg"}
                            alt="user avatar" width={288} height={288} priority={false} className="rounded-md" />
                    </div>
                    <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/*"
                        className="w-full block"
                    />
                </div>
                <div className="flex-[3] bg-bgSoftColor p-5 rounded-lg">
                    <input type="hidden" name="id" value={product.id} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <div className="grid grid-cols-12 gap-4">
                        <FormRow label="title" divStyle="col-[1_/_10]">
                            <input type="text" name="title" placeholder={product?.title}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 m-1" />
                        </FormRow>
                        <FormRow label="price" divStyle="col-[10_/_-1]">
                            <input type="number" name="price" placeholder={product.price}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1" />
                        </FormRow>
                        <FormRow label="stock" divStyle="col-[1_/_4]">
                            <input type="number" name="stock" placeholder={product.stock}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1" />
                        </FormRow>
                        <FormRow label="color" divStyle="col-[4_/_10]">
                            <input
                                type="text"
                                name="color"
                                placeholder={product.color || "color"}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1"
                            />
                        </FormRow>
                        <FormRow label="category" divStyle="col-[10_/_-1]">
                            <select name="cate" id="cate" defaultValue={product.cate || ""}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1">
                                <option value="kitchen">Kitchen</option>
                                <option value="phone">Phone</option>
                                <option value="computer">Computer</option>
                            </select>
                        </FormRow>
                        <FormRow label="size" divStyle="col-[1_/_7]">
                            <textarea
                                name="size"
                                id="size"
                                rows={3}
                                placeholder={product.size || "size"}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1"
                            />
                        </FormRow>
                        <FormRow label="Description" divStyle="col-[7_/_-1]">
                            <textarea
                                name="desc"
                                id="desc"
                                rows={3}
                                placeholder={product.desc}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-3 my-1"
                            ></textarea>
                        </FormRow>
                    </div>
                    <button type="submit" className="w-full text-white bg-teal-700 hover:bg-teal-600 px-7 py-3 my-5 rounded transition">
                        Update Product</button>
                </div>
            </form>
        </section>
    )
};