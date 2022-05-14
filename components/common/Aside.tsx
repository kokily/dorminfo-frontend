import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';

interface Props {
  children: React.ReactNode;
}

const Aside: React.FC<Props> = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

// Styles
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  max-height: calc(100vh - 64px);
  min-width: 320px;
  overflow: scroll;

  ${media.small} {
    min-height: calc(100vh - 64px - 450px);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Aside;
