import { Outlet } from "react-router-dom";
import { AuthProvider, TestAuthProvider } from "../hooks/UseAuth";

export function AuthLayout({ test }: { test: boolean }) {
    if (test)
        return (
            <TestAuthProvider>
                <Outlet />
            </TestAuthProvider>
        );

    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
}
