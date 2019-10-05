import React from "react";
import Layout from "../../components/layout";
import { Container } from "../../components/styled/layoutComponents";
import SEO from "../../components/seo";
import EmojiExplorer from "../../components/EmojiExplorer";

const UtfExplorer = () => (
  <Layout>
    <Container>
      <SEO title="About me" />
      <h1>Unicode Emojis</h1>
      <EmojiExplorer/>
    </Container>
  </Layout>
);

export default UtfExplorer;
