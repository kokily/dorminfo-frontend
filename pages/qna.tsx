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

/*
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('qnas', () => {}, { staleTime: 1000 });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
*/

export default QnaPage;
