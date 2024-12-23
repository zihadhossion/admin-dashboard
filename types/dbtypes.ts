export interface CardProps {
    id: number;
    title: string;
    number: number;
    change: number;
}
export interface UserDocument {
    id?: string;
    username?: string;
    email?: string;
    password?: string;
    img?: string;
    isAdmin?: boolean;
    isActive?: boolean;
    phone?: string;
    address?: string;
    createdAt?: Date;
}