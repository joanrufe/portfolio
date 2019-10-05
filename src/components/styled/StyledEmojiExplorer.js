import styled from "styled-components";
import theme from "./theme";

const StyledEmojiExplorer = styled.div`
  color: var(--white);
  background: ${theme.lightGreen};
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    color: ${theme.red};
  }
  button {
    box-shadow: 0px 0px 1px ${theme.turquoise};
    border: 0;
    color: ${theme.blue};
    background-color: ${theme.turquoise};
  }
  p {
    margin-top: 8px;
  }
  pre {
    background-color: ${theme.blue};
    tab-size: 2;
  }
`;
export default StyledEmojiExplorer;
