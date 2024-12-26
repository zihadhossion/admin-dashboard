"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { connectToDB } from "./mongodb";
import { signIn, signOut } from "@/auth";
import { Readable } from "stream";


export const addUser = async (formData: any) => {
    const { img, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    // let image;
    // for (const entries of Array.from(formData.entries())) {
    //     const [key, value] = entries;

    //     if (typeof value == "object") {
    //         image = Date.now() + value.name;
    //     }
    //     const buffer = Buffer.from(await value.arrayBuffer());
    //     const stream = Readable.from(buffer);
    //     const uploadStream = buck
    // }

    try {
        await connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            img,
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })

        await newUser.save();
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/users");
    redirect("/users");
}
export const updateUser = async (formData: any) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        // Remove empty or undefined fields
        (Object.keys(updateFields) as Array<keyof typeof updateFields>).forEach((key) => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });
        // Object.keys(updateFields).forEach((key) => {
        //     if (updateFields[key] === "" || updateFields[key] === undefined) {
        //         delete updateFields[key];
        //     }
        // });

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/users");
    redirect("/users");
}
export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/users");
}
export const addProduct = async (formData: any) => {
    const { title, desc, price, stock, color, size, cate } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
            cate
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/products");
    redirect("/products");
}
export const updateProduct = async (formData: any) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };



        // Remove empty or undefined fields
        (Object.keys(updateFields) as Array<keyof typeof updateFields>).forEach((key) => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });
        // Object.keys(updateFields).forEach((key) => {
        //     if (updateFields[key] === "" || updateFields[key] === undefined) {
        //         delete updateFields[key];
        //     }
        // });

        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/products");
    redirect("/products");
}
export const deleteProduct = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/products");
}

export async function doLogout() {
    await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData: any) {
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        console.log("login success :", response);

        return response;
    } catch (err) {
        throw err;
    }
}