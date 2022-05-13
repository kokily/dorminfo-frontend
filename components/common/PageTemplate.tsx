import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import Aside from './Aside';
import Header from './Header';

interface SmallProps {
  small: boolean | undefined;
  qna?: boolean;
}

interface Props {
  children: React.ReactNode;
  aside?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children, aside }) => {
  const router = useRouter();
  const isQna = router.pathname === '/qna';
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Header />
      <Main small={isSmall} qna={isQna}>
        <Content small={isSmall}>{children}</Content>
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

const Main = styled.main<SmallProps>`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  ${(props) =>
    props.small === true &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.qna &&
    css`
      height: calc(100vh - 56px);
      background: #5f5f5f;
    `}
`;

const Content = styled.div<SmallProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 960px;
  ${(props) =>
    props.small === true &&
    css`
      min-height: 360px;
    `}
`;

export default PageTemplate;
