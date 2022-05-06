import React from 'react';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/common/useMedia';

interface Props {
  myLocation:
    | string
    | {
        latitude: number;
        longitude: number;
      };
}

const NaverMap: React.FC<Props> = ({ myLocation }) => {
  const isSmall = useMedia('(max-width: 768px)');

  return <Container id="map" small={isSmall}></Container>;
};

// Styles
const Container = styled.div<{ small: boolean | undefined }>`
  width: 100%;
  height: calc(100vh - 64px);

  .my {
    font-weight: bold;
    color: #ff0000;
  }

  ${(props) =>
    props.small &&
    css`
      height: 400px;
    `};
`;

export default NaverMap;
