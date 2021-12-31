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
    <SoftwarePage id={'software'} className={'page'} />
    <ResearchPage id={'research'} className={'page'} />
    <CareerPage id={'career'} className={'page grid-container'} />
    <MorePage id={'more'} className={'page'} />
  </Layout>
);

export default IndexPage;
