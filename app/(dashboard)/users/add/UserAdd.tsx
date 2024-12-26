"use client";
import { useState, useRef } from "react";
import FormRow from "@/components/FormRow";

export default function UserAdd() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) {
            console.error("Form reference is missing");
            return;
        }

        const formData = new FormData(formRef.current);
        console.log([...formData.entries()]); // Debug form data

        try {
            const response = await fetch("/api/add-user", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to add user");
            }

            console.log("User added successfully");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="mt-5">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
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
    );
}
// export default function UserAdd() {
//     const formRef = useRef<HTMLFormElement>(null); // Reference to the form element

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value, files } = e.target;

//         // Update the form data directly using the form reference
//         if (formRef.current) {
//             const formData = new FormData(formRef.current); // Sync the current state of the form
//             if (files && files.length > 0) {
//                 formData.set(name, files[0]); // Update the file field
//             } else {
//                 formData.set(name, value); // Update text/select field
//             }
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!formRef.current) {
//             console.error("Form reference is missing");
//             return;
//         }

//         const formData = new FormData(formRef.current); // Collect the form data for submission
//         try {
//             const response = await fetch("/api/add-user", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to add user");
//             }

//             console.log("User added successfully");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <section className="mt-5">
//             <form
//                 ref={formRef}
//                 onSubmit={handleSubmit}
//                 encType="multipart/form-data"
//                 className="grid grid-cols-12 gap-4"
//             >
//                 <FormRow label="avatar" divStyle="col-[1_/_3]">
//                     <input
//                         type="file"
//                         name="img"
//                         id="img"
//                         accept="image/*"
//                         onChange={handleChange}
//                         className="w-full"
//                     />
//                 </FormRow>
//                 <FormRow label="username" divStyle="col-[3_/_8]">
//                     <input
//                         type="text"
//                         name="username"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     />
//                 </FormRow>
//                 <FormRow label="email" divStyle="col-[8_/_-1]">
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     />
//                 </FormRow>
//                 <FormRow label="password" divStyle="col-[1_/_7]">
//                     <input
//                         type="password"
//                         name="password"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     />
//                 </FormRow>
//                 <FormRow label="phone" divStyle="col-[7_/_-1]">
//                     <input
//                         type="text"
//                         name="phone"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     />
//                 </FormRow>
//                 <FormRow label="address" divStyle="col-[1_/_7]">
//                     <input
//                         name="address"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     />
//                 </FormRow>
//                 <FormRow label="is admin" divStyle="col-[7_/_10]">
//                     <select
//                         name="isAdmin"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     >
//                         <option value="true">Yes</option>
//                         <option value="false">No</option>
//                     </select>
//                 </FormRow>
//                 <FormRow label="is active" divStyle="col-[10_/_-1]">
//                     <select
//                         name="isActive"
//                         onChange={handleChange}
//                         className="w-full text-white bg-bgColor border-2 border-[#2e374a] rounded px-5 py-2 m-1"
//                     >
//                         <option value="true">Yes</option>
//                         <option value="false">No</option>
//                     </select>
//                 </FormRow>
//                 <button className="w-full text-white bg-teal-700 p-5 rounded mt-5">
//                     Submit
//                 </button>
//             </form>
//         </section>
//     );
// }
