import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// PUBLIC
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

// PROTECTED (Layout alatt)
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import MentorsPage from "./pages/MentorsPage";

// 404
import NoPage from "./pages/NoPage";

export default function App() {
  const router = createBrowserRouter([
    // -----------------------------
    // PUBLIC ROUTES
    // -----------------------------
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegistrationPage /> },

    // -----------------------------
    // PROTECTED ROUTES (Layout alatt)
    // -----------------------------
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },

        { path: "dashboard", element: <DashboardPage /> },

        {
          path: "courses",
          children: [
            {
              index: true,
              element: <CoursesPage />,
            },
            {
              path: ":id",
              element: <CourseDetailsPage />,
            },
          ],
        },

        { path: "mentors", element: <MentorsPage /> },
      ],
    },

    // -----------------------------
    // 404
    // -----------------------------
    { path: "*", element: <NoPage /> },
  ]);

  return <RouterProvider router={router} />;
}
