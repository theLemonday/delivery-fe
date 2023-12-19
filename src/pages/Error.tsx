import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Error;
    const navigate = useNavigate();
    return (
        <div>
            <p>Oops!</p>
            <p>Có lỗi xảy ra, chi tiết về lỗi:</p>
            <p>{JSON.stringify(error, null, "\t") || error.message}</p>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Trở về trang chủ
            </button>
        </div>
    );
}
