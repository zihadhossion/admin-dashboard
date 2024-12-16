import React from "react";
import Image from "next/image";


export default function Transactions() {
    return (
        <div className="bg-bgSoftColor rounded-xl p-5">
            <h2 className="text-textSoft font-extralight mb-5">Latest Transactions</h2>
            <table className="w-full table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="text-white text-sm bg-[#f7cb7375] rounded-md p-1.5">
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="text-white text-sm bg-[#afd6ee75] rounded-md p-1.5">                                Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="text-white text-sm bg-[#f7737375] rounded-md p-1.5">
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="object-cover rounded-full"
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className="text-white text-sm bg-[#f7cb7375] rounded-md p-1.5">
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};