import type { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';

const AboutPage: NextPage = () => {
  return <PageTemplate aside={<div>About Aside</div>}>AboutPage</PageTemplate>;
};

export default AboutPage;
