import React from "react";
import Link from "next/link";
import Search from "@/components/Search";
import Image from "next/image";
import { fetchUsers } from "@/data/data";
import Pagination from "@/components/Pagination";
import { deleteUser } from "@/lib/actions";

interface FetchUsersResponse {
    users: any[];
    count: number;
}

export default async function UserPage({ searchParams }: { searchParams: { q?: string; page?: number; } }) {
    const params = await searchParams;
    const q = params?.q || "";
    const page = params?.page || 1;
    const { users, count }: FetchUsersResponse = await fetchUsers(q, page);

    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <div className="flex items-center justify-between">
                <Search placeHolder="Search for a user..." />
                <Link href="/users/add">
                    <button className="text-white bg-[#5d57c9] p-2.5 rounded-md">Add New</button>
                </Link>
            </div>
            <table className="w-full table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>
                                <div className="flex items-center gap-2.5">
                                    <Image
                                        src={user?.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="object-cover rounded-full"
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "active" : "passive"}</td>
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/users/${user.id}`}>
                                        <button className="text-white bg-teal-400 p-[5px_10px] rounded">
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={(user.id)} />
                                        <button className="text-white bg-[#dc143c] p-[5px_10px] rounded">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </section>
    )
};