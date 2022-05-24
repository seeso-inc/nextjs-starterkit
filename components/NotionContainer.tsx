import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from "react-notion-x";
import 'react-notion-x/src/styles.css';
import styled from 'styled-components';

const Container = styled(NotionRenderer)`
  ul, ol, li {
    list-style: revert;
  }

  hr {
    display: block;
  }

  width: 100%;
`;

const NotionContainer = ({ data }: { data: any }) => {
  return (
    <Container
      recordMap={data}
    />
  );
};

export default NotionContainer;
