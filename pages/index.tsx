import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import NaverMap from '../components/NaverMap';
import useMap from '../libs/hooks/useMap';

const IndexPage: NextPage = () => {
  const { mapRef, myLocation } = useMap();

  return (
    <PageTemplate>
      <NaverMap mapRef={mapRef} myLocation={myLocation} />
    </PageTemplate>
  );
};

export default IndexPage;
