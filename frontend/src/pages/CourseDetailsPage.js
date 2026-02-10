import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

/**
 * Ha van services/api.js-ed, és van pl. getCourseById(id) függvényed,
 * nyugodtan cseréld le a fetch-et arra.
 *
 * Példa api végpont (igazítsd a sajátodhoz):
 *   GET http://localhost:5000/api/courses/:id
 */
export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      setErr("");

      try {
        // --- PÉLDA fetch, igazítsd a saját API-dhoz ---
        const res = await fetch(`http://localhost:5000/api/courses/${id}`);
        if (!res.ok) throw new Error(`Course ${id} not found`);
        const data = await res.json();

        if (isMounted) setCourse(data);
      } catch (e) {
        if (isMounted) setErr(e.message || "Failed to load course");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading course #{id}…</p>;
  if (err) return <p style={{ color: "crimson" }}>Error: {err}</p>;
  if (!course) return <p>No course found.</p>;

  return (
    <section>
      <div style={{ marginBottom: "10px" }}>
        <NavLink to="/courses" className="nav-link">
          ← Back to Courses
        </NavLink>
      </div>

      <h1 style={{ marginBottom: "6px" }}>
        {course.title || `Course #${id}`}
      </h1>
      <div style={{ color: "#666", marginBottom: "12px" }}>
        Chapters: {course.chapters ?? "-"}
      </div>

      <article
        style={{
          border: "1px solid #ccc",
          background: "#fff",
          padding: "12px",
        }}
      >
        <p>
          {course.description ||
            "This is the detailed description of the selected course."}
        </p>
      </article>
    </section>
  );
}