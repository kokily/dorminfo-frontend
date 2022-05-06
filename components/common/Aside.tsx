import React from 'react';
import styled from 'styled-components';

interface Props {}

const Aside: React.FC<Props> = () => <Container>Aside</Container>;

// Styles
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  background: #3603dc;
`;

export default Aside;
