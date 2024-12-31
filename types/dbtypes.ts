import mongoose, { Document } from "mongoose";
import React from "react";
export interface CardProps {
    id: number;
    title: string;
    number: number;
    change: number;
}
export interface IUser extends Document {
    id?: string;
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin?: boolean;
    isActive?: boolean;
    phone?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TransactionType {
    name: string;
    status: string;
    date: Date;
    amount: number;
}

export interface MenuLinkType {
    title: string;
    path: string;
    icon: React.ReactNode;
}

export interface ProductType {
    id: string;
    title: string;
    desc: string;
    price: number;
    stock: number;
    img?: string;
    color?: string;
    size?: string;
    cate?: string;
    createdAt?: Date;
}