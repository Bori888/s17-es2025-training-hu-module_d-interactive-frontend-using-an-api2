import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/login">Login</Link>{" | "}
      <Link to="/register">Register</Link>{" | "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
