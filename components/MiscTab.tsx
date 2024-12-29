import React from "react";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function MiscTab() {
    return (
        <section>
            <article className="relative px-6 py-5 rounded-xl mb-5 bg-gradient-to-t from-[#182237] to-[#253352]">
                <div className="w-1/2 h-1/2 absolute right-0 bottom-0">
                    <Image className="object-contain opacity-20" src="/astronaut.png" alt="" fill sizes="2" />
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🔥 Available Now</span>
                    <h3 className="text-sm font-medium text-textSoft">
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className="text-textSoft text-xs font-medium">Takes 4 minutes to learn</span>
                    <p className="text-textSoft text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className="max-w-max text-white bg-[#5d57c9] flex items-center gap-2.5 p-2.5 rounded-md">
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </article>
            <article className="relative px-6 py-5 rounded-xl mb-5 bg-gradient-to-t from-[#182237] to-[#253352]">
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🚀 Coming Soon</span>
                    <h3 className="text-sm font-medium text-textSoft">
                        New server actions are available, partial pre-rendering is coming
                        up!
                    </h3>
                    <span className="text-textSoft text-xs font-medium">Boost your productivity</span>
                    <p className="text-textSoft text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className="max-w-max text-white bg-[#5d57c9] flex items-center gap-2.5 p-2.5 rounded-md">
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </article>
        </section>
    )
};