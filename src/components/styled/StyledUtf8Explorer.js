import styled from "styled-components";
import theme from "./theme";

const StyledHeader = styled.div`
  color: var(--white);
  background: ${theme.lightGreen};
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: ${theme.red};
  }
`;
export default StyledHeader;
