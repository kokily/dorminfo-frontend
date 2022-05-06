import React from 'react';
import styled from 'styled-components';

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
  min-width: 320px;
  padding: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Aside;
