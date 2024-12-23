"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch, } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeHolder }: { placeHolder: string }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        let searchItem = e.target.value;

        if (searchItem) {
            searchItem.length > 1 && params.set("q", searchItem);
        } else {
            params.delete("q");
        }

        replace(`${pathname}?${params}`);
    }, 100);

    return (
        <div className="max-w-max bg-[#2e374a] flex items-center gap-2.5 p-2.5 rounded-lg">
            <MdSearch />
            <input type="text" placeholder={placeHolder} className="text-white bg-transparent outline-none"
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
};