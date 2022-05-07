import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { FcSpeaker } from 'react-icons/fc';
import { BiRightArrow } from 'react-icons/bi';
import Search from '../common/Search';
import DormCard from './common/DormCard';

interface Props {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

const DormsList: React.FC<Props> = ({
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => (
  <Container>
    <Search
      mode="이름으로"
      title={search}
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
      <strong style={{ marginRight: '5px' }}>Dorms</strong> List
    </Split>

    <ContentBox>
      <DormCard
        title="컨벤션"
        distance="100m"
        address="서울시 용산구 이태원로 22"
      />
      <DormCard
        title="전쟁기념관"
        distance="125m"
        address="서울시 용산구 이태원로 22-1"
      />
      <DormCard
        image="/assets/image1.png"
        title="우리은행"
        distance="520m"
        address="서울시 용산구 한강로1가 236-5"
      />
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
