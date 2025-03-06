import { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext.js";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Appbar from "./scenes/global/Appbar";
import Navbar from "./scenes/global/Navbar";
import Dashboard from "./scenes/dashboard";
import Assetlist from "./scenes/assetlist";
import Accordion from "./scenes/accordion";
import Button from "./scenes/button";
// import PropertyDetail from "./scene/PropertyDetail"
import Login from "./components/Login";
import Mapview from "./scenes/mapview";

function App() {
  const [theme, colorMode] = useMode();
  const { userSession, login, logout } = useContext(UserContext); // Get login and logout from context
  const [loading, setLoading] = useState(true);

  // Fetch user authentication status from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        console.log(userSession)
        const parsedUser = JSON.parse(storedUser);
        login(parsedUser); // Set the session in context
      } catch (error) {
        console.error("Error parsing user session from localStorage:", error);
        logout(); // Log out in case of an error in parsing
      }
    } else {
      logout(); // No user session found, ensure the user is logged out
    }

    setLoading(false);
  }, [login, logout, userSession]); // Trigger login or logout if the context methods change

  if (loading) {
    return (
      <div className="loader">
        <img src="../../assets/spinner.gif" alt="loading" />
      </div>
    );
  }


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {userSession ? (
        <div className="app">
          <Navbar />
          <main className="content">
            <Appbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assetlist" element={<Assetlist />} />
              <Route path="/mapview" element={<Mapview />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/button" element={<Button />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Add a redirect to login page for other routes */}
          <Route path="/assetlist" element={<Navigate to="/" />} />
          <Route path="/mapview" element={<Navigate to="/" />} />
          <Route path="/accordion" element={<Navigate to="/" />} />
          <Route path="/button" element={<Navigate to="/" />} />
        </Routes>
      )}
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
