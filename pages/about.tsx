import type { NextPage } from 'next';
import About from '../components/about/About';
import PageTemplate from '../components/common/PageTemplate';
import useAbout from '../libs/hooks/useAbout';

const AboutPage: NextPage = () => {
  const data = useAbout();

  console.log(data);

  return (
    <PageTemplate>
      <About />
    </PageTemplate>
  );
};

export default AboutPage;
