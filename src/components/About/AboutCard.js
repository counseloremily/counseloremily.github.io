import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="green">Emily Landrum</span>
            <br />
            I am currently pursuing a Master's in Education at Concordia University in Irvine, CA
            <br />
            My current role is <span className="green"> School Counselor </span> for Journey School in Aliso Viejo, CA
            <br />
            I view counseling as a collaborative process through active listening and empathy. My goal is to work alongside students to empower them in overcoming challenges and celebrating successes. I am firmly committed as a school counselor to provide the ability for student growth and resilience.
            <br />
            The professional organizations I participate in are
          </p>
          <ul>
            <li className="about-activity">
            <span className="green">National Association of Social Workers</span>
            </li>
            <li className="about-activity">
            <span className="green">American School Counselor Association</span>
            </li>
            <li className="about-activity">
            <span className="green">California Association of School Counselors</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
