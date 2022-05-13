import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import Qna from '../components/qna/Qna';

const QnaPage: NextPage = () => {
  return (
    <PageTemplate>
      <Qna />
    </PageTemplate>
  );
};

export default QnaPage;
