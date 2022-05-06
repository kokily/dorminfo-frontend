import React from 'react';
import styled from 'styled-components';
import { GiNightSleep } from 'react-icons/gi';

interface Props {
  title: string;
  distance: number;
  unit: string;
}

const MarkerRender: React.FC<Props> = ({ title, distance, unit }) => (
  <Container>
    <IconCircle>
      <GiNightSleep color="#3e5eff" />
    </IconCircle>

    <Content>
      <div className="title">{title}</div>
      <div className="dist">
        {distance} {unit}
      </div>
    </Content>
  </Container>
);

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  border: 2px solid #5e79fc;
  border-radius: 50px;
  background: #5e79fc;
  color: white;
`;

const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.2rem;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 34px;
    left: 25px;
    border-top: 10px solid #5e79fc;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 0.5rem;

  .title {
    font-size: 13px;
    margin-top: 0.1rem;
  }

  .dist {
    font-size: 12px;
    color: #35ead2;
    margin-left: 0.2rem;
  }
`;

export default MarkerRender;
