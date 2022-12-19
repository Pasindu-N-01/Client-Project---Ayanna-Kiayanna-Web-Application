import React from "react";
import "./LandingPage.css";
import backgroundTheme from "../../assets/videos/video2.mp4";
import AKlogo from "../../assets/images/AKlogo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Starting({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  return (
    <div className="header">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "0",
        }}
      >
      <source src={backgroundTheme} type="video/mp4" />
      </video>

      <nav className="nav">
        
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a> 
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
           <a href="/login" className="signup">Log In</a>
         </li>

        </ul>
      </nav>

      <div className="content">
        <img className="logo1" src= {AKlogo}  alt="" />
        
        <h1>Welcome to <span>Ayanna Kiyanna..!</span></h1>
        <h2>Jagath Kumara Jayasinghe</h2><br />
        <p>A motivated, adaptable, and responsible computing undergraduate
                        seeking a position in an IT position which will utilize the professional,
                        technical and skills developed through keep practicing in this field. I can provide clean code and pixel
                        perfect design. I also make the website mere & more interactive with web animations.</p><br></br>
        <form>
          <Link to="/login">
            <button id ="LGbtn" type="submit">Explore</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
 