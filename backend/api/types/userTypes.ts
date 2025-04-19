export interface IUser {
    userId: number;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt?: Date | null;
}
