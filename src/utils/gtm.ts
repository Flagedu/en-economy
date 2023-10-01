import { FC, useEffect } from 'react';

import TagManager from 'react-gtm-module';


//add google tag manager

const GTM_ID = 'GTM-5D2K44XN';

//create a function component that will initialize the GTM in all pages

const GTMPageView: FC = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return null;
};

export default GTMPageView;