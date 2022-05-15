import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import DormsList from '../components/home/DormsList';
import NaverMap from '../components/home/NaverMap';
import useMap from '../libs/hooks/useMap';

const IndexPage: NextPage = () => {
  const { myLocation, maps, markerMove, name, onChange, onSearch, onKeyPress } =
    useMap();

  return (
    <PageTemplate
      aside={
        <DormsList
          maps={maps}
          name={name}
          onChange={onChange}
          onSearch={onSearch}
          onKeyPress={onKeyPress}
          markerMove={markerMove}
        />
      }
    >
      <NaverMap myLocation={myLocation} />
    </PageTemplate>
  );
};

export default IndexPage;
