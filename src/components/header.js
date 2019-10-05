import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "./styled/layoutComponents";
import StyledHeader from "./styled/styledHeader";

const Header = ({ siteTitle, className }) => {
  return (
    <StyledHeader className={className}>
      <Container>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
