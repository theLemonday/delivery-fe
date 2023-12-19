import { Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../hooks/UseAuth";
import { Account } from "../models/Account";

function ShowPasswordButton({
    isShowPassword,
    setIsShowPassword,
}: {
    isShowPassword: boolean;
    setIsShowPassword: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <button onClick={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword ? "Hide" : "Show"}
        </button>
    );
}

function validateEmail(email: string): string {
    if (email.trim() === "") {
        return "Email cannot be empty";
    }

    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        return "Invalid email address";
    }

    return "";
}

function validatePassword(password: string): string {
    if (password.trim() === "") {
        return "Password cannot be empty";
    }

    return "";
}

function onSubmitButtonClick(
    username: string,
    password: string,
    setUsernameError: (error: string) => void,
    setPasswordError: (error: string) => void,
    login: (user: Account) => void
) {
    setUsernameError(validatePassword(username));
    const usernameError = validateEmail(username);
    if (usernameError) {
        return;
    }

    setPasswordError(validatePassword(password));
    const passwordError = validatePassword(password);
    if (passwordError) {
        return;
    }

    login({ username, password });
}

function LoginButton({ submit }: { submit: () => void }) {
    return <button onClick={submit}>Login</button>;
}

export default function LoginPage() {
    const auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    return (
        <div>
            <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <p>{usernameError}</p>
            <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <p>{passwordError}</p>
            <ShowPasswordButton
                isShowPassword={isShowPassword}
                setIsShowPassword={setIsShowPassword}
            />
            <LoginButton
                submit={() =>
                    onSubmitButtonClick(
                        email,
                        password,
                        setUsernameError,
                        setPasswordError,
                        auth.login
                    )
                }
            />
        </div>
    );
}
