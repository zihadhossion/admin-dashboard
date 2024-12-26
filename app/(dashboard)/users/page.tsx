import React from "react";
import Link from "next/link";
import Search from "@/components/Search";
import Image from "next/image";
import { fetchUsers } from "@/data/data";
import Pagination from "@/components/Pagination";
import { deleteUser } from "@/lib/actions";
import Table from "@/components/Table";

interface FetchUsersResponse {
    users: any[];
    count: number;
}

const tableHeaders = ["Name", "Email", "Created At", "Role", "Status", "Action"];

export default async function UserPage({ searchParams }: { searchParams: { q?: string; page?: number; } }) {
    const params = await searchParams;
    const q = params?.q || "";
    const page = params?.page || 1;
    const { users, count }: FetchUsersResponse = await fetchUsers(q, page);

    return (
        <section className="bg-bgSoftColor rounded-lg p-5 mt-5">
            <div className="flex items-center justify-between">
                <Search placeHolder="Search for user..." />
                <Link href="/users/add">
                    <button className="text-sm text-white bg-indigo-700 hover:bg-blue-700 p-2.5 rounded-md transition">Add User</button>
                </Link>
            </div>
            <Table tableHead={tableHeaders}>
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
                                    priority={false}
                                />
                                <span className="capitalize">{user.username}</span>
                            </div>
                        </td>
                        <td>{user.email}</td>
                        <td>{user?.createdAt ? user.createdAt?.toString().slice(4, 16) : "2024"}</td>
                        <td>{user.isAdmin ? "Admin" : "Client"}</td>
                        <td className="capitalize">{user.isActive ? "active" : "passive"}</td>
                        <td>
                            <div className="flex gap-2.5">
                                <Link href={`/users/${user.id}`}>
                                    <button className="text-white bg-teal-500 hover:bg-teal-600 p-[5px_10px] rounded transition">
                                        View
                                    </button>
                                </Link>
                                <form action={deleteUser}>
                                    <input type="hidden" name="id" value={(user.id)} />
                                    <button className="text-white bg-red-500 hover:bg-red-700 p-[5px_10px] rounded transition">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                ))}
            </Table>
            <Pagination count={count} />
        </section>
    )
};