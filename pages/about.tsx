import type { NextPage } from 'next';
import About from '../components/about/About';
import PageTemplate from '../components/common/PageTemplate';
import useAbout from '../libs/hooks/useAbout';

const AboutPage: NextPage = () => {
  const { address, myLocation, onChange, onSubmit } = useAbout();

  return (
    <PageTemplate aside={<div>About Aside</div>}>
      <About
        address={address}
        myLocation={myLocation}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </PageTemplate>
  );
};

export default AboutPage;
