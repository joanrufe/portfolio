import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Row } from "../components/styled/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO
        title="Home"
        keywords={[`gatsby`, `antonio`, `ruiz`, `portfolio`, `react`]}
      />
      <h1>Welcome to my portfolio</h1>
      <p>I love to build greats things.</p>
      <p>Find here my personal projects and utilities</p>
      <Row>
        <Link to="/me/">About me</Link>
      </Row>
      <Row>
        <Link to="/projects/">Check projects</Link>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
