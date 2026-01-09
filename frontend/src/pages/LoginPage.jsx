import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../styles/auth.css";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <LoginForm onSuccess={() => navigate("/dashboard")} />
    </div>
  );
}
