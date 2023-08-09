import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro({progress,setProgress}) {
  const profileimg = useRef();
  

  useEffect(() => {
    console.log("iam from intro");
    profileimg.current.style.left = "0%";
    setProgress(50);

  },[setProgress, progress]);

  return (
    
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img ref={profileimg} src="assets/DeepLajpal.png" alt="profile"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Deep Lajpal</h1>
          <h3>
            <span>Front-End Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="assets/down.webp"
            alt="down arrow for portfolio
          "
          ></img>
        </a>
      </div>
    </div>
  );
}
