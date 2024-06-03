import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <h1>This is the About component</h1>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            {/* {<img src="C:\ReactProject\routerproject\public\Ceo.jpg" alt="Ceo" style={{ width: "100%" }} />} */}
            <div className="container">
              <h2>Manjula Devarala</h2>
              <p className="title">CEO & Founder</p>
              <p>A CEO’s resume is a critical document that showcases their skills, accomplishments, and leadership. Here are some tips.</p>
              <p>manjula@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* {<img src="C:\ReactProject\routerproject\public\Malli.jpg" alt="Malli" style={{ width: "100%" }} /> } */}
            <div className="container">
              <h2>Mallesh Devarala</h2>
              <p className="title">Developer</p>
              <p>In order to become a better writer, you have to do it more often.This is true of any skill, but it can be especially hard.</p>
              <p>mallesh@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* {<img src="C:\ReactProject\routerproject\public\Pandu.jpg" alt="Pandu" style={{ width: "100%" }} />} */}
            <div className="container">
              <h2>Phaneendra</h2>
              <p className="title">Tester</p>
              <p>In software projects, written communication is essential for conveying complex information like data, requirements, and test.</p>
              <p>phaneendra@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
