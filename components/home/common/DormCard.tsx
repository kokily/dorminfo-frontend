import React from 'react';
import styled from 'styled-components';

interface Props {
  image?: string;
  id: number;
  title: string;
  address: string;
  markerMove: (id: number, e: any) => void;
}

const DormCard: React.FC<Props> = ({
  image,
  id,
  title,
  address,
  markerMove,
}) => (
  <Container onClick={(e: any) => markerMove(id, e)}>
    {image && (
      <ImageBox>
        <img src={image} alt="" />
      </ImageBox>
    )}
    <Header>
      <Title>{title}</Title>
      <Distance></Distance>
    </Header>

    <Address>{address}</Address>
  </Container>
);

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    border-bottom: 1px solid #8d8d8d;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 140px;
  background: rgba(195, 135, 135, 0.2);
  border-radius: 5px;
  margin-bottom: 0.4rem;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h3`
  width: 100%;
  color: #0168c3;
  margin: 0px;
`;

const Distance = styled.h5`
  margin: 0px;
  color: #d50505;
`;

const Address = styled.div`
  overflow: hidden;
  padding-top: 0.5rem;
`;

export default DormCard;
