import { useState, useEffect } from "react";
import { AnimatedBackground } from "animated-backgrounds";
import "./App.css";
import Loading from "./components/Loader";
import Navbar from "./components/Navbar";
import MainTitle from "./components/MainTitle";

function App() {
  //useState() for the loader
  const [loading, setLoading] = useState(true);

  //useEffect to add a delay before showing content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  //setting state to change the background every time each page load
  const [animatedBackground, setAnimatedBackground] =
    useState<string>("auroraBorealis");

  //state to handle nightMode and save it to local storage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  //useEffect to change the animated background
  useEffect(() => {
    const animations = { dark: "auroraBorealis", light: "gradientWave" };
    const background = darkMode ? animations.dark : animations.light;
    setAnimatedBackground(background);

    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    //changing the ::selection based off darkMode
    const style = document.createElement("style");
    style.innerHTML = `
      ::selection {
        background-color: ${darkMode ? "#eee" : "#1b1b1b"};
        color: ${darkMode ? "#1b1b1b" : "#eee"};
      }
    `;
    //appending the style to the dom
    document.head.appendChild(style);
    // Cleanup to remove style on unmount || change
    return () => {
      document.head.removeChild(style);
    };
  }, [darkMode]);
  //function to switch night mode from true to false vise versa
  function nightMode() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <AnimatedBackground animationName={animatedBackground} />
          <Navbar nightMode={nightMode} />
          <MainTitle dynamic={darkMode} />
        </div>
      )}
    </>
  );
}

export default App;
