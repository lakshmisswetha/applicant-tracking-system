import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "@/utils/zod-schema";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./auth.api";
import { useNavigate } from "react-router-dom";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {
        mutate: login,
        isPending,
        isError,
        error,
    } = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            navigate("/jobs");
        },
    });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { email, password };
        const result = loginSchema.safeParse(formData);
        if (!result.success) {
            console.error(result.error.format());
            return;
        }
        login(result.data);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
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
                                        <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                                            Forgot your password?
                                        </a>
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
                                    {isPending ? "Logging in..." : "Login"}
                                </Button>
                            </div>
                            {isError && <p className="text-red-500 text-sm">{(error as Error).message}</p>}

                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link to="/signup" className="underline-offset-4 hover:underline">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
