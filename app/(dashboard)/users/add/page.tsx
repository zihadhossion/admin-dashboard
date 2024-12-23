import React from "react";
import { addUser } from "@/lib/actions";


export default function AddNewUserPage() {
    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <form action={addUser} className="flex flex-wrap justify-between">
                <input type="text" placeholder="username" name="username" required className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
                <input type="email" placeholder="email" name="email" required className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
                <input
                    className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7"
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input type="phone" placeholder="phone" name="phone" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
                <select name="isAdmin" id="isAdmin" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                    className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7"
                ></textarea>
                <button type="submit" className="w-full text-white bg-teal-400 rounded p-7">Submit</button>
            </form>
        </section>
    )
};