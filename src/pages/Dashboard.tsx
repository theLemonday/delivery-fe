import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => navigate("/account/create")}>
                Create new user
            </button>
        </>
    );
}
