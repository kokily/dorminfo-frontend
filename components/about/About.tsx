import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import useAbout from '../../libs/hooks/useAbout';

interface Props {}

const About: React.FC<Props> = ({}) => {
  useAbout({ latitude: 37.53196739, longitude: 126.9783802 });

  return (
    <Container>
      <h3>주소로 좌표 찾기</h3>

      <Map id="map"></Map>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;

  button {
    margin-right: 1.5rem;
  }
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
`;

export default About;
