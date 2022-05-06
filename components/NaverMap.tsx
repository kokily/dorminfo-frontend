import React, { MutableRefObject } from 'react';
import styled from 'styled-components';

interface Props {
  mapRef: MutableRefObject<any>;
  myLocation:
    | string
    | {
        latitude: number;
        longitude: number;
      };
}

const NaverMap: React.FC<Props> = ({ mapRef, myLocation }) => (
  <Container id="map"></Container>
);

// Styles
const Container = styled.div`
  width: 100%;
  height: 400px;
`;

export default NaverMap;
