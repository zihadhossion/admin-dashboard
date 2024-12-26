"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { register } from "@/lib/actions";

export default function Register() {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    // const handleSubmit = async (formData: FormData) => {
    //     const r = await register({
    //         email: formData.get("email"),
    //         password: formData.get("password"),
    //         username: formData.get("username")
    //     });

    //     if (r) {
    //         router.push("/");
    //     }
    //     // ref.current?.reset();
    //     if (r?.error) {
    //         setError(r.error);
    //         return;
    //     } else {
    //         return router.push("/login");
    //     }
    // };
    function handleSubmit() {

    }
    return (
        <section className="bg-[#F2F2F2] min-h-dvh flex flex-col justify-center items-center">
            {error && <p className="text-xl text-red-500">{error}</p>}
            <form ref={ref}
                action={handleSubmit}
                className="w-96 bg-white my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md shadow-md">
                <h1 className="text-[#333] text-3xl font-bold my-10">Create an Account</h1>
                <div className="w-2/3 relative my-5">
                    <input type="text" id="username" name="username" className="peer w-full border-b-2 border-[#adadad] text-gray-900 placeholder-transparent focus:border-blue-300 transition-all" placeholder="" required />
                    <label htmlFor="username"
                        className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all">Username</label>
                </div>
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
                    Signup
                </button>
                <p className="text-[#666] text-xs my-3">
                    Already have an account? <Link href="/login" className="text-sm text-[#888] transition duration-150 ease hover:text-black">Login</Link>
                </p>
            </form>
        </section>
    )
}
