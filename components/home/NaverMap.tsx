import React, { MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';

interface Props {
  mapRef: MutableRefObject<any>;
  myLocation:
    | string
    | {
        latitude: number;
        longitude: number;
      };
}

const NaverMap: React.FC<Props> = ({ mapRef, myLocation }) => {
  const isSmall = useMedia('(max-width: 768px)');

  return <Container id="map" small={isSmall}></Container>;
};

// Styles
const Container = styled.div<{ small: boolean | undefined }>`
  width: 100%;
  height: calc(100vh - 64px);

  ${(props) =>
    props.small &&
    css`
      height: 400px;
    `};
`;

export default NaverMap;
