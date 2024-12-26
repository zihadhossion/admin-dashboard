import React from "react";
import Card from "@/components/dashboard/Card";
import DashChart from "@/components/dashboard/DashChart";
import Transactions from "@/components/dashboard/Transactions";
import { cards } from "@/data/data";
import MiscTab from "@/components/dashboard/MiscTab";

export default function Dashboard() {
    return (
        <section className="flex flex-wrap gap-5 mt-5">
            <article className="flex flex-[3] gap-5 flex-col">
                <div className="flex justify-between gap-5">
                    {cards.map(item => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
                <Transactions />
                <DashChart />
            </article>
            <article className="flex-1">
                <MiscTab />
            </article>
        </section>
    )
};