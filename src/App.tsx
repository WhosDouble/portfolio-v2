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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <AnimatedBackground animationName="auroraBorealis" />
          <Navbar />
          <MainTitle />
        </div>
      )}
    </>
  );
}

export default App;
