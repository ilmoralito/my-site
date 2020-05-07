import { useState, useEffect } from "react";
import TogglerContext from "../context/toggler";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  const [styleMode, setStyleMode] = useState("");

  useEffect(() => {
    setStyleMode(localStorage.getItem("mario-site-style-mode") || "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("mario-site-style-mode", styleMode);
  }, [styleMode]);

  function switchStyleMode() {
    setStyleMode(styleMode === "light" ? "dark" : "light");
  }

  return (
    <TogglerContext.Provider value={{ styleMode, switchStyleMode }}>
      <Component {...pageProps} />
    </TogglerContext.Provider>
  );
}

export default MyApp;
