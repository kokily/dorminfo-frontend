import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';

interface Props {
  address: string;
  myLocation:
    | string
    | {
        latitude: number;
        longitude: number;
      };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: MouseEvent) => void;
}

const About: React.FC<Props> = ({
  address,
  myLocation,
  onChange,
  onSubmit,
}) => (
  <Container>
    <h3>주소로 좌표 찾기</h3>

    <InputGroup>
      <input type="text" name="address" value={address} onChange={onChange} />
      <button onClick={onSubmit}>찾기</button>

      {typeof myLocation !== 'string' && (
        <span>
          {myLocation.latitude} {myLocation.longitude}
        </span>
      )}
    </InputGroup>

    <Map id="map"></Map>
  </Container>
);

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
