import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [message, setMessage] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMessage("Enable Light Mode");
      document.body.style.background = "#112299";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      setTimeout(() => {
        document.title = "Textutils is installing now";
      }, 1500);
      setTimeout(() => {
        document.title = "Textutils is amazing";
      }, 3000);
    } else {
      setMode("light");
      setMessage("Enable Dark Mode");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} message={message} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Simply enter your text and choose the case you want to convert it to."
                  mode={mode}
                  toggleMode={toggleMode}
                  message={message}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
