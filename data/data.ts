import { Product, User } from "@/lib/models";
import { connectToDB } from "@/lib/mongodb";
import { CardProps, TransactionType } from "@/types/dbtypes";

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
export const fetchUser = async (id: any) => {
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
export const fetchProduct = async (id: any) => {
    try {
        await connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        return { product: [] };
    }
}

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

export const transactionData: TransactionType[] = [
    {
        name: "jhon doe",
        status: "pending",
        date: new Date("2024-12-20T14:51:42.188+00:00"),
        amount: 32.100
    },
    {
        name: "jhon doe",
        status: "cancelled",
        date: new Date("2024-12-22T14:51:42.188+00:00"),
        amount: 23.200
    },
    {
        name: "jhon doe",
        status: "pending",
        date: new Date("2024-12-27T14:51:42.188+00:00"),
        amount: 33.200
    },
    {
        name: "jhon doe",
        status: "done",
        date: new Date("2024-12-12T14:51:42.188+00:00"),
        amount: 43.200
    },
]