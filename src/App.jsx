import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Topbar from "./Components/topbar/Topbar";
import Menu from "./Components/menu/Menu";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(25);
  }, [setProgress]);
  return (
    <div className="App">
      <LoadingBar color="#f11946" progress={progress} height={3.5}/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro progress={progress} setProgress={setProgress}/>
        <Portfolio progress={progress} setProgress={setProgress}/>
        <Contact progress={progress} setProgress={setProgress}/>
      </div>
    </div>
  );
}

export default App;
