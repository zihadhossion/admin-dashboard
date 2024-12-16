import React from "react";
import {
    MdSearch,
} from "react-icons/md";
import fs from "fs"


export default function Search({ placeHolder }: { placeHolder: string }) {
    return (
        <div className="max-w-max bg-[#2e374a] flex items-center gap-2.5 p-2.5 rounded-lg">
            <MdSearch />
            <input type="text" placeholder={placeHolder} className="text-white bg-transparent outline-none" />
        </div>
    )
};
