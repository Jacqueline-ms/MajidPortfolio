import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Majid Aziz </span>
            from <span className="purple"> Seattle, Washington.</span>
            <br />I am a recent computer science grad from Chapman University who loves my dog Peaches, golfing, and my motorcycle. 
            <br />
            <br />
            <br />
            <br />
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Awaken the sunshine of awareness and reveal the infinite possibilities before you"{" "}
          </p>
          <footer className="blockquote-footer">Dr. Joseph Parent</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
