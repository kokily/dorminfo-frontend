import React from 'react';
import styled from 'styled-components';

interface Props {}

const About: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h3>문의 사항</h3>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default About;
