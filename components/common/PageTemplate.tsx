import React from 'react';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';
import Aside from './Aside';
import Header from './Header';

interface SmallProps {
  small: boolean | undefined;
}

interface Props {
  children: React.ReactNode;
  aside: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children, aside }) => {
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Header />
      <Main small={isSmall}>
        <Content small={isSmall}>{children}</Content>
        <Aside>{aside}</Aside>
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
