"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { connectToDB } from "./mongodb";
import { signIn, signOut } from "@/auth";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    const imgFile = formData.get("img");

    try {
        await connectToDB();

        // Upload image to Cloudinary
        let uploadedImageUrl = "";
        if (imgFile && imgFile.size > 0) {
            try {
                const arrayBuffer = await imgFile.arrayBuffer();
                const base64String = Buffer.from(arrayBuffer).toString("base64");
                const dataURI = `data:${imgFile.type};base64,${base64String}`;
                const uploadedResponse = await cloudinary.uploader.upload(dataURI, {
                    folder: "admin-dashboard",
                });
                console.log("Cloudinary upload successful:", uploadedResponse);
                uploadedImageUrl = uploadedResponse.secure_url;
            } catch (uploadError: any) {
                console.error("Cloudinary upload failed:", uploadError.message);
                throw new Error("Image upload failed. Please try again.");
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error("User already exists");

        const newUser = new User({
            img: uploadedImageUrl,
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
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    const imgFile = formData.get("img");

    try {
        await connectToDB();

        // Upload image to Cloudinary
        let uploadedImageUrl = "";
        if (imgFile && imgFile.size > 0) {
            try {
                const arrayBuffer = await imgFile.arrayBuffer();
                const base64String = Buffer.from(arrayBuffer).toString("base64");
                const dataURI = `data:${imgFile.type};base64,${base64String}`;
                const uploadedResponse = await cloudinary.uploader.upload(dataURI, {
                    folder: "admin-dashboard",
                });
                console.log("Cloudinary upload successful:", uploadedResponse);
                uploadedImageUrl = uploadedResponse.secure_url;
            } catch (uploadError: any) {
                console.error("Cloudinary upload failed:", uploadError.message);
                throw new Error("Image upload failed. Please try again.");
            }
        }

        const updateFields = {
            img: uploadedImageUrl,
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateFields.password = await bcrypt.hash(password, salt);
        }

        // Remove empty or undefined fields
        (Object.keys(updateFields) as Array<keyof typeof updateFields>).forEach((key) => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/users");
    redirect("/users");
}
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }

    revalidatePath("/users");
}
export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size, cate } =
        Object.fromEntries(formData);
    const imgFile = formData.get("img");

    try {
        await connectToDB();

        // Upload image to Cloudinary
        let uploadedImageUrl = "";
        if (imgFile && imgFile.size > 0) {
            try {
                const arrayBuffer = await imgFile.arrayBuffer();
                const base64String = Buffer.from(arrayBuffer).toString("base64");
                const dataURI = `data:${imgFile.type};base64,${base64String}`;
                const uploadedResponse = await cloudinary.uploader.upload(dataURI, {
                    folder: "admin-dashboard",
                });
                console.log("Cloudinary upload successful:", uploadedResponse);
                uploadedImageUrl = uploadedResponse.secure_url;
            } catch (uploadError: any) {
                console.error("Cloudinary upload failed:", uploadError.message);
                throw new Error("Image upload failed. Please try again.");
            }
        }

        const newProduct = new Product({
            img: uploadedImageUrl,
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
export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);
    const imgFile = formData.get("img");


    try {
        await connectToDB();

        // Upload image to Cloudinary
        let uploadedImageUrl = "";
        if (imgFile && imgFile.size > 0) {
            try {
                const arrayBuffer = await imgFile.arrayBuffer();
                const base64String = Buffer.from(arrayBuffer).toString("base64");
                const dataURI = `data:${imgFile.type};base64,${base64String}`;
                const uploadedResponse = await cloudinary.uploader.upload(dataURI, {
                    folder: "admin-dashboard",
                });
                console.log("Cloudinary upload successful:", uploadedResponse);
                uploadedImageUrl = uploadedResponse.secure_url;
            } catch (uploadError: any) {
                console.error("Cloudinary upload failed:", uploadError.message);
                throw new Error("Image upload failed. Please try again.");
            }
        }


        const updateFields = {
            img: uploadedImageUrl,
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
export const deleteProduct = async (formData) => {
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