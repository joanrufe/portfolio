import styled from "styled-components";
import theme from "../styled/theme";

const StyledHeader = styled.header`
  color: var(--white);
  background: ${theme.turquoise};
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: ${theme.blue};
  }
`;
export default StyledHeader;
