import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Hydra() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  
  // redirect to first entry
  return (
    <Redirect to="/hydra/about/getting-started" />
  );
}

export default Hydra;
