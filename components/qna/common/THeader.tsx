import React from 'react';
import styled from 'styled-components';

function THeader() {
  return (
    <Container>
      <tr>
        <th>순 번</th>
        <th>제 목</th>
        <th>작성자</th>
        <th>작성일자</th>
      </tr>
    </Container>
  );
}

// Styles
const Container = styled.thead`
  tr {
    background: #313131;
  }

  th {
    padding: 4px 0 4px 0;
  }
`;

export default THeader;
