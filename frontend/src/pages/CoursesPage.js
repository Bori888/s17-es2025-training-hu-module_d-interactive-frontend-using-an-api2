import { NavLink } from "react-router-dom";

/**
 * Itt most mock adatot használok példának.
 * Ha van backend API-d, cseréld le a useEffect + fetch/axios hívásra,
 * és állítsd be a state-et a visszakapott listával.
 */
const MOCK_COURSES = [
  { id: 1, title: "React Basics", chapters: 12 },
  { id: 2, title: "Advanced React Patterns", chapters: 9 },
  { id: 3, title: "API Integration with Axios", chapters: 7 },
];

export default function CoursesPage() {
  return (
    <section>
      <h1>Courses</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {MOCK_COURSES.map((c) => (
          <li
            key={c.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              background: "#fff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>{c.title}</strong>
                <div style={{ color: "#666" }}>{c.chapters} chapters</div>
              </div>
              <NavLink to={`/courses/${c.id}`} className="nav-link">
                Details
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}