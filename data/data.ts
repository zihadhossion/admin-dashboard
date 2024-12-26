import { Product, User } from "@/lib/models";
import { connectToDB } from "@/lib/mongodb";

export const fetchUsers = async (q: string, page: any) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;

    try {
        await connectToDB();
        const count = await User.find({ username: { $regex: regex } }).countDocuments();
        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        return { count: 0, users: [] };
    }
};
export const fetchUser = async (id) => {
    try {
        await connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        return { user: [] };
    }
};

export const fetchProducts = async (q: string, page: any) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 3;

    try {
        await connectToDB();
        const count = await Product.find({ title: { $regex: regex } }).countDocuments();
        const products = await Product.find({ title: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (err) {
        console.log(err);
        return { count: 0, products: [] };
    }
};
export const fetchProduct = async (id) => {
    try {
        await connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        return { product: [] };
    }
}


import { CardProps } from "@/types/dbtypes";

// DUMMY DATA
export const cards: CardProps[] = [
    {
        id: 1,
        title: "Total Users",
        number: 10.928,
        change: 12,
    },
    {
        id: 2,
        title: "Stock",
        number: 8.236,
        change: -2,
    },
    {
        id: 3,
        title: "Revenue",
        number: 6.642,
        change: 18,
    },
];