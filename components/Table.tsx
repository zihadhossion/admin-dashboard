import React from "react";

export default function Table({ tableHead, children }: { tableHead: string[]; children: React.ReactNode }) {
    return (
        <table className="w-full table my-10">
            <thead>
                <tr>
                    {tableHead?.map((item, i) => (
                        <td key={i} className="text-sm font-medium uppercase">{item}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
};