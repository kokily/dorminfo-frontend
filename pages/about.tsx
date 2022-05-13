import type { NextPage } from 'next';
import About from '../components/about/About';
import PageTemplate from '../components/common/PageTemplate';

const AboutPage: NextPage = () => {
  return (
    <PageTemplate>
      <About />
    </PageTemplate>
  );
};

export default AboutPage;
