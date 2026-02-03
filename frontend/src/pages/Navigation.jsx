import { NavLink } from "react(sic)-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/mentors">Mentors</NavLink>
    </nav>
  );
}