import { createContext, useState, useContext } from "react";
import { login as apiLogin } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const data = await apiLogin(email, password);

    // A backend-től kapott user + token
    setUser(data.user);

    // Ha a backend küld JWT tokent:
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook a könnyebb használathoz
export function useAuth() {
  return useContext(AuthContext);
}