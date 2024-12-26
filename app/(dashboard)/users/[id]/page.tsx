import Image from "next/image";
import { fetchUser } from "@/data/data";
import { updateUser } from "@/lib/actions";
import FormRow from "@/components/FormRow";


export default async function SingleUserPage({ params }: { params: { id: number } }) {
    const { id } = await params;
    const user = await fetchUser(id);

    return (
        <section className="flex gap-12 mt-5">
            <div className="flex-1 text-textSoft bg-bgSoftColor font-bold p-5 rounded-lg">
                <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
                    <Image src={user.img || "/noavatar.png"} alt="" fill sizes="2" />
                </div>
                {user.username}
            </div>
            <div className="flex-[3] bg-bgSoftColor p-5 rounded-lg">
                <form action={updateUser} className="flex flex-col">
                    {/* <input type="hidden" name="id" value={user.id} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" /> */}
                    <div className="grid grid-cols-12 gap-4">
                        <FormRow label="username" divStyle="col-[1_/_7]">
                            <input type="text" name="username" placeholder={user.username}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1" />
                        </FormRow>
                        <FormRow label="email" divStyle="col-[7_/_-1]">
                            <input type="email" name="email" placeholder={user.email}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1" />
                        </FormRow>
                        <FormRow label="password" divStyle="col-[1_/_7]">
                            <input type="password" name="password"
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1" />
                        </FormRow>
                        <FormRow label="phone" divStyle="col-[7_/_-1]">
                            <input type="text" name="phone" placeholder={user.phone}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1" />
                        </FormRow>
                        <FormRow label="address" divStyle="col-[1_/_7]">
                            <input name="address" placeholder={user.address}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1" />
                        </FormRow>
                        <FormRow label="is admin" divStyle="col-[7_/_10]">
                            <select
                                name="isAdmin"
                                defaultValue={user.isAdmin ? "true" : "false"}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </FormRow>
                        <FormRow label="is active" divStyle="col-[10_/_-1]">
                            <select
                                name="isActive"
                                defaultValue={user.isActive ? "true" : "false"}
                                className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </FormRow>
                    </div>
                    <button className="w-full text-white bg-teal-700 p-5 rounded mt-5">
                        Update</button>
                </form>
            </div>
        </section>
    );
};