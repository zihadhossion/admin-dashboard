// import React from "react";
// import { addUser } from "@/lib/actions";


// export default function AddNewUserPage() {
//     return (
//         <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
//             <form action={addUser} className="flex flex-wrap justify-between">
//                 <input type="text" placeholder="username" name="username" required className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
//                 <input type="email" placeholder="email" name="email" required className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
//                 <input type="password" name="password"
//                     className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7"
//                     placeholder="password" required
//                 />
//                 <input type="phone" placeholder="phone" name="phone" className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7" />
//                 <select name="isAdmin" id="isAdmin"
//                     className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7">
//                     <option value={"false"}>
//                         Is Admin?
//                     </option>
//                     <option value={"true"}>Yes</option>
//                     <option value={"false"}>No</option>
//                 </select>
//                 <select name="isActive" id="isActive"
//                     className="w-[45%] text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7">
//                     <option value={"true"}>
//                         Is Active?
//                     </option>
//                     <option value={"true"}>Yes</option>
//                     <option value={"false"}>No</option>
//                 </select>
//                 <textarea
//                     name="address"
//                     id="address"
//                     rows={16}
//                     placeholder="Address"
//                     className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded p-7 mb-7"
//                 ></textarea>
//                 <button type="submit" className="w-full text-white bg-teal-400 rounded p-7">Submit</button>
//             </form>
//         </section>
//     )
// };


import React from "react";
import { addUser } from "@/lib/actions";
import FormRow from "@/components/FormRow";
// import UserAdd from "./UserAdd";


export default function AddNewUserPage() {
    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <form
                action={addUser}
                encType="multipart/form-data"
                className="grid grid-cols-12 gap-4"
            >
                <FormRow label="avatar" divStyle="col-[1_/_3]">
                    <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/*"
                        className="w-full"
                    />
                </FormRow>
                <FormRow label="username" divStyle="col-[3_/_8]">
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
                <button className="w-full text-white bg-teal-700 p-5 rounded mt-5">
                    Submit
                </button>
            </form>
        </section>
    )
};