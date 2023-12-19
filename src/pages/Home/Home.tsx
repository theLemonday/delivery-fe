import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <h1>Welcome to Magical Post</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </>
    );
}
