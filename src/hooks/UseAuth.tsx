import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Account, Session } from "../models/Account";
import { config } from "../conf/config";
import { useLocalStorage } from "./UseLocalStorage";

async function loginAPI(accountData: Account) {
    const result = await fetch(`${config.publicUrl}/login`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: accountData.username,
            password: accountData.password,
        }),
    });

    const data = await result.json();
    if (!result.ok) {
        return [data.err as string, { token: "", account: undefined }] as const;
    }

    return ["", data];
}

interface AuthContextType {
    session: Session;
    login: (user: Account) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useLocalStorage<Session>("session", {
        token: "",
        account: undefined,
    });
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (userData: Account) => {
        const [error, res] = await loginAPI(userData);
        if (error !== "") return error;
        setSession({ token: res.token, account: res.account });

        navigate("/dashboard");
    };

    // call this function to sign out logged in user
    const logout = () => {
        setSession({ token: "", account: undefined });
        navigate("/", { replace: true });
    };

    const value = { session, login, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export function TestAuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useLocalStorage<Session>("session", {
        token: "",
        account: undefined,
    });
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (userData: Account) => {
        const token = userData.username + userData.password;

        setSession({ token: token, account: userData });

        navigate("/dashboard");
    };

    // call this function to sign out logged in user
    const logout = () => {
        setSession({ token: "", account: undefined });
        navigate("/", { replace: true });
    };

    const value = { session, login, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
