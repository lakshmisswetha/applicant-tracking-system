import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "./auth.api";
import { signupSchema } from "@/utils/zod-schema";

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {
        mutate: signUp,
        isPending,
        isError,
        error,
    } = useMutation({
        mutationFn: signupUser,
        onSuccess: () => {
            navigate("/login");
        },
    });

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const role = isAdmin ? "admin" : "candidate";
        const formData = { username, email, password, role };
        const result = signupSchema.safeParse(formData);
        if (!result.success) {
            console.error(result.error.format());
            return;
        }
        signUp(result.data);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Create your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup}>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="flex mt-2">
                                    <Switch
                                        id="admin"
                                        checked={isAdmin}
                                        onCheckedChange={setIsAdmin}
                                        className="mr-2"
                                    />
                                    <Label htmlFor="admin">Sign Up as Admin</Label>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full flex items-center justify-center "
                                    disabled={isPending}
                                >
                                    {isPending ? "Signing Up" : "Sign Up"}
                                </Button>
                            </div>
                            {isError && <p className="text-red-500 text-sm">{(error as Error).message}</p>}

                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="underline-offset-4 hover:underline">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
