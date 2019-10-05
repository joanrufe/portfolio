import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Container, Row } from "../styled/layoutComponents";
import StyledUtf8Explorer from "../styled/styledUtf8Explorer";
const icons = {
  react: <>&#9883;</>
};

const Utf8Explorer = ({ siteTitle, className }) => {
  return (
    <StyledUtf8Explorer className={className}>
      <Container>
        Icons
        <Row>{Object.keys(icons).map(icon => icons[icon])}</Row>
      </Container>
    </StyledUtf8Explorer>
  );
};

Utf8Explorer.propTypes = {
  siteTitle: PropTypes.string
};

Utf8Explorer.defaultProps = {
  siteTitle: ``
};

export default Utf8Explorer;
