import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { FcSpeaker } from 'react-icons/fc';
import { BiRightArrow } from 'react-icons/bi';
import Search from '../common/Search';
import DormCard from './common/DormCard';

interface Props {
  maps: MapType[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  markerMove: (id: number, title: string, address: string) => void;
}

const DormsList: React.FC<Props> = ({
  maps,
  name,
  onChange,
  onSearch,
  onKeyPress,
  markerMove,
}) => (
  <Container>
    <Search
      mode="동 검색"
      title={name}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />

    <h2>고시원 목록</h2>

    <Notice>
      <span>
        <FcSpeaker /> 공지사항: 쏼라
      </span>
      <span>
        <BiRightArrow />
      </span>
    </Notice>

    <Split>
      주변&nbsp;<strong style={{ marginRight: '5px' }}>고시원</strong>
    </Split>

    <ContentBox>
      {maps.length > 0 &&
        maps.map((item) => (
          <DormCard
            key={item.id}
            id={item.id}
            title={item.name}
            address={item.address}
            markerMove={markerMove}
          />
        ))}
    </ContentBox>
  </Container>
);

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #335a94;
    margin: 0.5rem;
  }
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0.6rem;
  background: #d1fff0;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.15s all;

  &:hover {
    background: #8fffda;
  }

  span {
    display: flex;
    height: 100%;
    align-items: center;
    color: #3e5eff;
    font-weight: bold;

    svg {
      margin-right: 0.4rem;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Split = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0.35);
  margin-bottom: 1.2rem;

  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: #7a7a7a;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

export default DormsList;
