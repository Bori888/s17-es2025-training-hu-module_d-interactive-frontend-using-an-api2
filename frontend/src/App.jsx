import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// OLDALAK (public)
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

// OLDALAK (protected - Layout alatt jelennek meg)
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";

// 404
import NoPage from "./pages/NoPage";

function App() {
  const router = createBrowserRouter([
    // -----------------------------
    // PUBLIC ROUTES (NINCS védelem)
    // -----------------------------
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegistrationPage />
    },

    // -----------------------------
    // PROTECTED ROUTES (Layout alatt)
    // Később ide tesszük majd a token védelmet
    // -----------------------------
    {
      path: "/",
      element: <Layout />, // <-- A layout tartalmaz Navigation-t + Outlet-et
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />
        },
        {
          path: "dashboard",
          element: <DashboardPage />
        },
        {
          path: "courses",
          element: <CoursesPage />
        },
        {
          path: "mentors",
          element: <MentorsPage />
        }
      ]
    },

    // -----------------------------
    // 404 - Not Found
    // -----------------------------
    {
      path: "*",
      element: <NoPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
``