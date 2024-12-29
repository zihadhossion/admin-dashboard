import Image from "next/image";
import { fetchUser } from "@/data/data";
import { updateUser } from "@/lib/actions";
import FormRow from "./FormRow";

export default async function Profile({ id }: { id: string; }) {
    const user = await fetchUser(id);

    return (
        <section className="bg-bgSoftColor p-5 rounded-lg mt-5">
            <form action={updateUser}>
                <input type="hidden" name="id" value={user?.id} />
                <article className="flex gap-3">
                    <div className="self-center">
                        <div className="relative rounded overflow-hidden">
                            <Image src={user?.img || "/noavatar.png"}
                                alt="user avatar" width={150} height={150} priority={false}
                                className="rounded-md"
                            />
                        </div>
                        <input
                            type="file"
                            name="img"
                            id="img"
                            accept="image/*"
                            className="w-full block mt-10"
                        />
                    </div>
                    <div className="w-full grid grid-cols-12 gap-4">
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
                </article>
                <div className="w-full text-center mt-10 mb-5">
                    <button type="submit" className="text-white bg-teal-700 hover:bg-teal-600 px-7 py-2.5 rounded transition">
                        Update</button>
                </div>
            </form>
        </section>
    )
};