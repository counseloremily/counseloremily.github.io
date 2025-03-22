import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SCPE1 from "../../Assets/Projects/SCPE1.png";
import SCPE2 from "../../Assets/Projects/SCPE2.png";
import SCPE3 from "../../Assets/Projects/SCPE3.png";
import SCPE4 from "../../Assets/Projects/SCPE4.png";
import SCPE5 from "../../Assets/Projects/SCPE5.png";
import SCPE6 from "../../Assets/Projects/SCPE6.png";
import SCPE7 from "../../Assets/Projects/SCPE7.png";
import SCPE8 from "../../Assets/Projects/SCPE8.png";
import SCPE9 from "../../Assets/Projects/SCPE9.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE1}
              isBlog={false}
              title="Foundations of School Counseling Professional Standards"
              description="Connection One: Created a data-driven district wide school counseling results report. This report contains the data used and collected through the year to inform programs and practices. This presentation was shared to the district to advocate for funding and demonstrate the importance of the school counseling program. \n
                           Connection Two: Created a Google Form for students to connect with their school counselor and collect data for a student needs assessment. "
              docLink="https://drive.google.com/drive/folders/1h1F4qpxrjEbBq_SB8-eBdkC2TincBVDz?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE2}
              isBlog={false}
              title="Professionalism, Ethics, and Legal Mandates"
              description="Connection One: Created academic guides for students and teachers regarding CA state standards and course requirements. Teachers can use these forms to figure out what courses satisfy academic requirements by law. \n
                           Connection Two: Created a form for 8th grade students to see what pathways and coursework is required for high school in the State of California for graduation. "
              docLink="https://www.canva.com/design/DAGGiX2z1sA/uX-INSfwwSAy_r36QSHS6g/view?utm_content=DAGGiX2z1sA&utm_campaign=designshare&utm_medium=link&utm_source=editor"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE3}
              isBlog={false}
              title="Student Academic Development"
              description="Connection One: Created a guide for both students are parents on A-G and graduation requirements. This guide contains a checklist of required semesters of coursework to asssit the student in choosing classes. The guide also outlines what courses the school offers that meet A-G requirements. \n
                           Connection Two: Created an appointment system for students in grades 5-8th to review their transcipts and determine what classes they may want to switch or add for Spring semester."
              docLink="https://www.canva.com/design/DAGGiX2z1sA/uX-INSfwwSAy_r36QSHS6g/view?utm_content=DAGGiX2z1sA&utm_campaign=designshare&utm_medium=link&utm_source=editor"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE4}
              isBlog={false}
              title="Student College and Career Development"
              description="Connection One: Created a guide to help students navigate adding contributors to their financial aid application. This guide will help students to determine who is considered a contributor and how to complete the FAFSA when guardians don't have social security numbers. During this process, students will understand the required information, deadlines, and supporting documents needed. This infographic connects to SCPE 4 as it directly supports the goal of facilitating access to financial aid resources for students in preparation for college. \n
                           Connection Two: Created a student/parent appointment maker to help 8th grade families to select 9th grade courses. Parents and students were able to create an appointment to discuss, course eligibility, areas of strength, and extracurriculars. "
              docLink="https://www.canva.com/design/DAF-26IERKk/QaLZi0wyTOlRNnM4if4tmw/view?utm_content=DAF-26IERKk&utm_campaign=designshare&utm_medium=link&utm_source=editor"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE5}
              isBlog={false}
              title="Social-Emotional Development"
              description="Connection One: Created a tier one social and emotional lesson. The lesson includes general emotional wellness information, healthy coping skills, warning signs, and online/campus resources available to students. This presentation aligns with SCPE 5 as it involves the development, implementation, prevention, and education of social and emotional health. This lesson is meant to provide student with knowledge, skills, and support they need to navigate challenges. \n
                           Connection Two: Due to an increase in bias or hate comments on campus, I created an infographic for teachers to use when a situation arises. This allows teachers to respond in the moment and hopefully will prevent future occurrences. It also provides a chain of command and protocol in case the situation needs admin support."
              docLink="https://www.canva.com/design/DAF5acf7zTw/C6OCsJTEAEA2IwigH_Mlmg/view?utm_content=DAF5acf7zTw&utm_campaign=designshare&utm_medium=link&utm_source=editor"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE6}
              isBlog={false}
              title="Educational Foundations: Growth & Development, Learning, Academic Achievement"
              description="Connection One: This assignment highlights the academic, social, and emotional factors of the student in a case study format. Questions asked and recommendations made connect to SCPE 6 as the paper demonstrates knowledge of systemic and environmental factors affecting human function and behavior. The student will be referred to academic supports and tiered systems of support for any social or emotional needs."
              docLink="https://docs.google.com/document/d/1tpWXDXplJ7OH_11CJLfIndhBh_kKRsKPMAa7aHQaFzA/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE7}
              isBlog={false}
              title="Leadership and Advocacy in Social Justice, Equity, and Access"
              description="Connection One: Created an infographic to educate students and staff on physical disabilities. This infographic contains definitions of what a physical disability is, barriers to access, equity and access, the role of a school counselor, and counselors in action. \n
                           Connection Two: Created a Google Sheets document used to track a student's daily goals for classroom behaviors. This student was struggling with impulse control and task management. This document was used by all the student's teachers to observe and track his behaviors over time. The student's goals came from a meeting to discuss his overall social, emotional, and home life factors influencing his academic life."
              docLink="https://www.canva.com/design/DAF00-BMkSU/DDBxn3eBC9lnSy6jm1AG8w/view?utm_content=DAF00-BMkSU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE8}
              isBlog={false}
              title="Program Development"
              description="Connection One: Created a tier-2 program focused on added tutorial period for students needing extra academic support. Students missing assignments or have submitted late work may benefit from these added tutorials."
              docLink="​https://www.canva.com/design/DAGB-myftGU/ofFEIj6fIGOl6BiII0fGlw/edit?utm_content=DAGB-myftGU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCPE9}
              isBlog={false}
              title="Research, Program Evaluation, and Technology"
              description="Connection One: Used participation data from tier one college and career lessons to examine the increases in student transcript evaluation. Students were tested to see if their knowledge of their transcripts had increased and noted areas of confusion."
              docLink="HERE"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
