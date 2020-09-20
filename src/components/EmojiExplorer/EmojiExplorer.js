import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Container, Row } from "../styled/layoutComponents";
import StyledEmojiExplorer from "../styled/StyledEmojiExplorer";
import { emojis } from "../../data";

const EmojiExplorer = ({ siteTitle, className }) => {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelectedEmoji] = useState(emojis[0]);
  const [searchValue, setSearchValue] = useState('');
  
  let filteredEmojis = emojis.filter(elem => elem.name.indexOf(searchValue) > -1);

  return (
    <StyledEmojiExplorer className={className}>
      <Container>
        {
          selected && (
            <pre>
              <p>{JSON.stringify(selected, null,'\t')}</p>
            </pre>
          )
        }
        <input type="text" onChange={evt => {
          setSearchValue(evt.target.value)
        }}/>
        <button onClick={() => setOpen(!isOpen)}>
          { isOpen ? '-' : '+'} Show Emojis
        </button>
        {
          isOpen && (
            <p>
              {filteredEmojis.map((emoji, i) => (
                <span
                  role="img"
                  key={i}
                  onClick={() => setSelectedEmoji(emoji)}
                >
                  {emoji.string}
                </span>
              ))}
            </p>
          )
        }
        <Row>
          <Link to="/projects">Back to projects</Link>
        </Row>
      </Container>
    </StyledEmojiExplorer>
  );
};

EmojiExplorer.propTypes = {
  siteTitle: PropTypes.string
};

EmojiExplorer.defaultProps = {
  siteTitle: ``
};

export default EmojiExplorer;
