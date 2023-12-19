import { Dispatch, SetStateAction, useState } from "react";

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

function usernameValidate(username: string, token: string): string {
    const length = username.length;
    let helperText = "";
    if (length < 3) {
        helperText = "Tên đăng nhập quá ngắn, cần ít nhất 3 ký tự";
        return helperText;
    }

    if (length > 25) {
        helperText = "Tên đăng nhập quá dài, cần ngắn hơn 25 ký tự";
        return helperText;
    }

    // fetch(`${config.protectedUrl}/account/check/${username}`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // }).then((res) => {
    //     if (res.status === 409) {
    //         helperText = "Tên đăng nhập đã tồn tại";
    //     }

    //     return helperText;
    // });

    return helperText;
}

function passwordValidate(password: string): string {
    const length = password.length;
    let helperText = "";
    if (length === 0) {
        helperText = "Mật khẩu không được để trống";
    }

    return helperText;
}

function passwordConfirmValidate(
    password: string,
    passwordConfirm: string
): string {
    let error = "";
    if (password !== passwordConfirm) {
        error = "Mật khẩu không khớp";
    }

    return error;
}

function RegisterButton({ submit }: { submit: () => void }) {
    return <button onClick={submit}>Create</button>;
}

function onSubmitButtonClick(
    username: string,
    password: string,
    passwordConfirm: string,
    setUsernameError: (error: string) => void,
    setPasswordError: (error: string) => void,
    setPasswordConfirmError: (error: string) => void,
    token: string
) {
    const usernameError = usernameValidate(username, token);
    let isError = false;
    setUsernameError(usernameError);
    if (usernameError) {
        isError = true;
    }

    const passwordError = passwordValidate(password);
    setPasswordError(passwordError);
    if (passwordError) {
        isError = true;
    }

    const passwordConfirmError = passwordConfirmValidate(
        password,
        passwordConfirm
    );
    setPasswordConfirmError(passwordConfirmError);
    if (passwordConfirmError) {
        isError = true;
    }

    if (isError) {
        return;
    }
    // login({ username, password });
}

export default function SignupPage() {
    // const location = useLoaderData() as { location: string[] };
    // const currentSelectedLocation = useRef("");

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false);

    const token = "";

    return (
        <div>
            <h1>Create new user</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <p>{usernameError}</p>

            <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <p>{passwordError}</p>

            <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(event) => {
                    setPasswordConfirm(event.target.value);
                }}
            />
            <p>{passwordConfirmError}</p>

            <ShowPasswordButton
                isShowPassword={isShowPassword}
                setIsShowPassword={setIsShowPassword}
            />
            <RegisterButton
                submit={() =>
                    onSubmitButtonClick(
                        username,
                        password,
                        passwordConfirm,
                        setUsernameError,
                        setPasswordError,
                        setPasswordConfirmError,
                        token
                    )
                }
            />
        </div>
    );
}
