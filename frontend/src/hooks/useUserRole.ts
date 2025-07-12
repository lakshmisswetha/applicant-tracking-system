import { useState, useEffect } from "react";

export const useUserRole = () => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        setRole(storedRole);
    }, []);

    return role;
};
