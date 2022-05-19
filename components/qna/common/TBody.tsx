import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

interface Props {}

const TBody: React.FC<Props> = ({}) => (
  <Container>
    <tr>
      <td>1</td>
      <Title>
        <LeftSpan>
          <span className="tbody_title">
            브라우저에서 네트워크 오류가 발생하여 문의드립니다
          </span>
          <span className="category">
            <span className="box" />
            API 호출 문제
          </span>
        </LeftSpan>
        <RightSpan>[1]</RightSpan>
      </Title>
      <td>홍길동</td>
      <td>&apos;22. 5. 14.</td>
    </tr>
  </Container>
);

// Styles
const Container = styled.tbody`
  tr {
    height: 50px;
    background: white;
    color: black;
    text-align: center;
    transition: 0.21s all;

    &:hover {
      background: #ebdcdc;
    }
  }

  td {
    ${media.small} {
      font-size: 13px;
    }
  }
`;

const Title = styled.td`
  display: flex;
  word-break: break-all;

  ${media.small} {
    font-size: 13px;
  }
`;

const LeftSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1rem;

  .tbody_title {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #000000;
    cursor: pointer;
    transition: 0.21s all;

    ${media.small} {
      font-size: 13px;
      padding-top: 0.5rem;
    }

    &:hover {
      color: #001ccf;
    }
  }

  .category {
    display: flex;
    align-items: center;
    font-size: 9px;
    font-weight: bold;
    height: 100%;
    color: red;
    margin-left: 0.4rem;

    ${media.small} {
      padding-bottom: 0.5rem;
    }

    .box {
      display: inline-flex;
      width: 8px;
      height: 8px;
      background: red;
      margin-top: 0.1rem;
      margin-right: 0.4rem;
    }
  }
`;

const RightSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-weight: bold;
  color: #00ca8d;
`;

export default TBody;
