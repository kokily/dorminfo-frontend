import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import Aside from './Aside';
import Header from './Header';
import { media } from '../../styles';

interface Props {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children, aside }) => {
  const router = useRouter();
  const isQna = router.pathname === '/qna';

  return (
    <Container>
      <Header />
      <Main qna={isQna}>
        <Content>{children}</Content>
        {aside && <Aside>{aside}</Aside>}
      </Main>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main<{ qna: boolean }>`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ${media.small} {
    flex-direction: column;
  }

  ${(props) =>
    props.qna &&
    css`
      height: calc(100vh - 56px);
      background: #5f5f5f;
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 960px;

  ${media.small} {
    min-height: auto;
    max-height: 450px;
  }
`;

export default PageTemplate;
