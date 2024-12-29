import React from "react";
import Image from "next/image";
import { transactionData } from "@/data/data";
import Table from "./Table";

const tableHeaders = ["name", "status", "date", "amount"];

export default function Transactions() {
    return (
        <article className="bg-bgSoftColor rounded-xl p-5">
            <h2 className="text-textSoft font-extralight mb-5">Latest Transactions</h2>
            <Table tableHead={tableHeaders}>
                {transactionData?.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                <span className="capitalize">{item?.name}</span>
                            </div>
                        </td>
                        <td>
                            <span className={`text-white text-sm capitalize rounded-md p-1.5
                                 ${item.status.toLowerCase() === "pending" ? "bg-[#f7cb7375]" :
                                    item.status.toLowerCase() === "done" ? "bg-[#afd6ee75]" : "bg-[#f7737375]"}`}>
                                {item.status}
                            </span>
                        </td>
                        <td>{item.date.toString().slice(4, 16)}</td>
                        <td>${item.amount}</td>
                    </tr>
                ))}
            </Table>
        </article >
    )
};