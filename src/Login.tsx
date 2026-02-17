import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/products");
    };

    return (
        <div className="card">
            <h1>Login</h1>
            <button className="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
