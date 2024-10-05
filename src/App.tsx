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

  //state to handle nightMode
  const [darkMode, setDarkMode] = useState(false);
  //useEffect to change the animated background
  useEffect(() => {
    const animations = { dark: "auroraBorealis", light: "gradientWave" };
    const background = darkMode ? animations.dark : animations.light;
    setAnimatedBackground(background);

    localStorage.setItem("backgroundAnimations", background);
  }, [darkMode]);
  //function to switch night mode
  function nightMode() {
    setDarkMode((prevState) => !prevState);
    console.log("nightMode toggled");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <AnimatedBackground animationName={animatedBackground} />
          <Navbar nightMode={nightMode} />
          <MainTitle />
        </div>
      )}
    </>
  );
}

export default App;
