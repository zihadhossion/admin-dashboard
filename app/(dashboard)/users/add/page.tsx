import React from "react";
import { addUser } from "@/lib/actions";
import FormRow from "@/components/FormRow";

export default function AddNewUserPage() {
    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <form
                action={addUser}
                className="grid grid-cols-12 gap-4"
            >
                <div className="col-[1_/_4] self-center text-center">
                    <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/*"
                        className="w-full"
                    />
                </div>
                <FormRow label="username" divStyle="col-[4_/_8]">
                    <input
                        type="text"
                        name="username"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    />
                </FormRow>
                <FormRow label="email" divStyle="col-[8_/_-1]">
                    <input
                        type="email"
                        name="email"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    />
                </FormRow>
                <FormRow label="password" divStyle="col-[1_/_7]">
                    <input
                        type="password"
                        name="password"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    />
                </FormRow>
                <FormRow label="phone" divStyle="col-[7_/_-1]">
                    <input
                        type="text"
                        name="phone"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    />
                </FormRow>
                <FormRow label="address" divStyle="col-[1_/_7]">
                    <input
                        name="address"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    />
                </FormRow>
                <FormRow label="is admin" divStyle="col-[7_/_10]">
                    <select
                        name="isAdmin"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </FormRow>
                <FormRow label="is active" divStyle="col-[10_/_-1]">
                    <select
                        name="isActive"
                        className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </FormRow>
                <button className="col-[1/-1] text-white bg-teal-700 hover:bg-teal-600 px-7 py-2.5 rounded transition">
                    Submit
                </button>
            </form>
        </section>
    )
};
