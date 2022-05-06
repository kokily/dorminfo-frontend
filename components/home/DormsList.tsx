import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { FcSpeaker } from 'react-icons/fc';
import { BiRightArrow } from 'react-icons/bi';
import Search from '../common/Search';

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

    <ContentBox>
      <h3>목록 들어갈 곳</h3>
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
  padding-left: 0.6rem;
  padding-right: 0.6rem;
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

const ContentBox = styled.div``;

export default DormsList;
