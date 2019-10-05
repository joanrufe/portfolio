import React from "react";
import Layout from "../components/layout";
import { Container } from "../components/styled/layoutComponents";
import SEO from "../components/seo";

const icons = {
  react: <>&#9883;</>
};

const AboutMe = () => (
  <Layout>
    <Container>
      <SEO title="About me" />
      <h1>About me</h1>
      <p>
        I'm an entusiastic web developer specialised in ReactJS and Javascript
      </p>
      <p>I've been working with PHP and Drupal as well</p>
      <p>
        But I've to say I love front end
        <span style={{fontSize: '1.2rem', padding: 5}}>{icons.react}</span>
      </p>
    </Container>
  </Layout>
);

export default AboutMe;
