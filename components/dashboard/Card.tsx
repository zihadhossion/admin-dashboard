import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CardProps } from "@/types/dbtypes";

export default function Card({ item }: { item: CardProps }) {
    return (
        <article className="w-full bg-bgSoftColor flex gap-5 hover:bg-[#2e374a] p-5 cursor-pointer rounded-lg">
            <MdSupervisedUserCircle size={48} />
            <div className="flex flex-col gap-5">
                <p>{item.title}</p>
                <p className="text-2xl font-medium">{item.number}</p>
                <p className="text-sm font-light">
                    <span className={item.change > 0 ? "text-lime-400" : "text-red-400"}>
                        {item.change}%
                    </span>{" "}
                    {item.change > 0 ? "more" : "less"} than previous week
                </p>
            </div>
        </article>
    )
};