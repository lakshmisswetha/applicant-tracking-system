export interface IUser {
    userId: number;
    username: string;
    email: string;
    password: string;
    createdAt?: Date | null;
}
