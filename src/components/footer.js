import React from "react"
import { Container } from "./styled/layoutComponents"
import StyledFooter from "./styled/styledFooter";

const Footer = ({ className }) => {
  return (
  <StyledFooter className={className}>
    <Container>
      © {new Date().getFullYear()}, José Antonio Ruiz Fernández
    </Container>
  </StyledFooter>
);
}

export default Footer
