import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import WorkFlow from 'sections/workflow';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Cuenta de Empresa | KII Exchange" />
          <Banner />
          <KeyFeature />
          <CoreFeature />   
          <WorkFlow />          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
