"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }: { count: number; }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const page = searchParams.get("page") || "1";
    const ITEM_PER_PAGE = 5;

    const params = new URLSearchParams(searchParams);

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

    function handleChangePage(btnType: string) {
        if (btnType === "prev") {
            params.set("page", (parseInt(page) - 1).toString())
        } else {
            params.set("page", (parseInt(page) + 1).toString())
        }
        replace(`${pathname}?${params}`);
    }

    return (
        <article className="flex justify-between p-2.5">
            <button
                className="text-bgColor bg-white text-sm p-[5px_10px] rounded-md"
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")}            >
                Previous
            </button>
            <button
                className="text-bgColor bg-white text-sm p-[5px_10px] rounded-md"
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}            >
                Next
            </button>
        </article>
    )
};
