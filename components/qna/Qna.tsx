import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import TBody from './common/TBody';
import THeader from './common/THeader';

interface Props {}

const Qna: React.FC<Props> = ({}) => (
  <Container>
    <h1 className="title">문의사항</h1>

    <Contents>
      <table>
        <colgroup>
          <col width="8%" />
          <col width="60%" />
          <col width="15%" />
          <col width="17%" />
        </colgroup>
        <THeader />
        <TBody />
      </table>
    </Contents>
  </Container>
);

/*
  td 속성은
    word-break: break-all;
*/

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: white;
  }
`;

const Contents = styled.div`
  width: 1200px;
  color: white;

  ${media.large} {
    width: 95%;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #313131;
  }
`;

export default Qna;
