import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | 
      <Link to="/courses">Courses</Link> | 
      <Link to="/mentors">Mentors</Link>
    </nav>
  );
}