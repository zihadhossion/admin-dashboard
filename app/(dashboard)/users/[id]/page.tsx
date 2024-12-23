import Image from "next/image";
import { fetchUser } from "@/data/data";
import { updateUser } from "@/lib/actions";


export default async function SingleUserPage({ params }) {
    const { id } = await params;
    const user = await fetchUser(id);

    return (
        <section className="flex gap-12 mt-5">
            <div className="flex-1 text-textSoft bg-bgSoftColor font-bold p-5 rounded-lg">
                <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
                    <Image src={user.img || "/noavatar.png"} alt="" fill />
                </div>
                {user.username}
            </div>
            <div className="flex-[3] bg-bgSoftColor p-5 rounded-lg">
                <form action={updateUser} className="flex flex-col">
                    <input type="hidden" name="id" value={user.id} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Password</label>
                    <input type="password" name="password" className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Address</label>
                    <textarea name="address" placeholder={user.address} className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5" />
                    <label>Is Admin?</label>
                    <select
                        name="isAdmin"
                        defaultValue={user.isAdmin ? "true" : "false"}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    {/* <select name="isAdmin" id="isAdmin" className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select> */}
                    <label>Is Active?</label>
                    <select
                        name="isActive"
                        defaultValue={user.isActive ? "true" : "false"}
                        className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    {/* <select name="isActive" id="isActive" className="text-white bg-bgColor border-2 border-[#2e374a] rounded p-5 my-2.5">
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select> */}
                    <button className="w-full text-white bg-teal-700 p-5 rounded mt-5">
                        Update</button>
                </form>
            </div>
        </section>
    );
};