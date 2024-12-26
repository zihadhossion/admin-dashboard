"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doCredentialLogin } from "@/lib/actions";

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(event: any) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            console.log(event.target.value);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }

    return (
        <section className="bg-[#F2F2F2] min-h-dvh flex flex-col justify-center items-center">
            {error && <p className="text-xl text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}
                className="w-96 bg-white my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md shadow-md">
                <h1 className="text-[#333] text-3xl font-bold my-10">Welcome</h1>
                <div className="w-2/3 relative my-5">
                    <input type="email" id="email" name="email" className="peer w-full border-b-2 border-[#adadad] text-gray-900 focus:border-blue-300 placeholder-transparent  transition-all" placeholder="" required />
                    <label htmlFor="email"
                        className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all">Email</label>
                </div>
                <div className="w-2/3 relative my-5">
                    <input type="password" id="password" name="password" className="peer w-full border-b-2 border-[#adadad] text-gray-900 placeholder-transparent focus:border-blue-300 transition-all" placeholder="" required />
                    <label htmlFor="password"
                        className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all">Password</label>
                </div>
                <button type="submit" className="bg-gradient-to-r from-[#21d4fd] to-[#b721ff] hover:bg-gradient-to-l rounded px-10 py-2 mt-5 mb-2.5 transition-all">
                    Login
                </button>
                <p className="text-[#666] text-xs my-3">
                    Don't you have an account?
                    <Link href="/register" className="text-black hover:text-green-700 mx-2 transition">Register</Link>
                </p>
            </form>
        </section>
    );
};