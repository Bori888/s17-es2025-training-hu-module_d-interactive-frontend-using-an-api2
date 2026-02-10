import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink to="/dashboard" className="logo">
          SkillShare Academy
        </NavLink>

        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="nav-link">
          Courses
        </NavLink>
        <NavLink to="/mentors" className="nav-link">
          Mentors
        </NavLink>
      </div>

      <div className="nav-right">
        <span className="credits">25 Credits</span>
        <span className="welcome">Welcome, John Doe</span>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}