import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

import LandingPage from '../components/landing-page';
import SoftwarePage from '../components/software-page';
import ResearchPage from '../components/research-page';
import CareerPage from "../components/career-page";
import MorePage from "../components/more-page";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <LandingPage id={'home'} />
    <SoftwarePage id={'software'} />
    <ResearchPage id={'research'} />
    <CareerPage id={'career'} />
    <MorePage id={'more'} />
  </Layout>
);

export default IndexPage;
