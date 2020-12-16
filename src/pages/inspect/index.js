import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Inspect() {
  const context = useDocusaurusContext();
  const firstDocUrl = useBaseUrl('inspect/about/getting-started')
  const {siteConfig = {}} = context;
  
  // redirect to first entry
  return (
    <Redirect to={firstDocUrl} />
  );
}

export default Inspect;
