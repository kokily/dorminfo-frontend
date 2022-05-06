import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import DormsList from '../components/home/DormsList';
import NaverMap from '../components/home/NaverMap';
import useMap from '../libs/hooks/useMap';
import useSearch from '../libs/hooks/useSearch';

const IndexPage: NextPage = () => {
  const { myLocation } = useMap();
  const { search, onChange, onSearch, onKeyPress } = useSearch();

  return (
    <PageTemplate
      aside={
        <DormsList
          search={search}
          onChange={onChange}
          onSearch={onSearch}
          onKeyPress={onKeyPress}
        />
      }
    >
      <NaverMap myLocation={myLocation} />
    </PageTemplate>
  );
};

export default IndexPage;
