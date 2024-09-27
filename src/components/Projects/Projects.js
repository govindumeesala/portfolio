import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myntra from "../../Assets/Projects/myntra_logo.webp";
import foodApp from "../../Assets/Projects/foodApp.png";
import flashcards from "../../Assets/Projects/flash-card.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food Ordering WebApp"
              description="Developed a feature-rich food ordering web app with over 10 real-world features using React.js, Tailwind CSS, sahdcn UI, Express, MongoDB, and Node.js. Implemented secure Google authentication, an integrated payment gateway, dynamic search, and admin management."
              ghLink="https://github.com/govindumeesala/food-ordering-app-frontend.git"
              demoLink="https://food-ordering-app-frontend-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashcards}
              isBlog={false}
              title="FlashCards Website"
              description="Developed a Flashcard Learning Tool with 5+ features using React.js, Node.js,Express.js, MySQL, and Tailwind CSS, enabling users to create, update, and delete flashcards. Implemented RESTful APIs for smooth data management, enhancing back-end integration and database interactions. Built an interactive flip animation for flashcards, delivering an engaging user experience."
              ghLink="https://github.com/govindumeesala/flashcards-frontend.git"
              demoLink="https://flashcards-frontend-pied.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra Clone"
              description="Developed a dynamic e-commerce Bag management feature using React.js, Redux.js, Node.js, Express.js, and Bootstrap, enabling users to add and remove items in real time. Leveraged Redux.js for efficient global state management, ensuring smooth user interactions."
              ghLink="https://github.com/govindumeesala/myntra-react-clone.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
