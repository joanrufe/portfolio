import React from "react";
import Layout from "../components/layout";
import { Container } from "../components/styled/layoutComponents";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Projects = () => (
  <Layout>
    <Container>
      <SEO title="Projects" />
      These are some of my projects:
      <p>
        <Link to="/projects/emoji-explorer">Utf8 explorer</Link>
      </p>
    </Container>
  </Layout>
);

export default Projects;
