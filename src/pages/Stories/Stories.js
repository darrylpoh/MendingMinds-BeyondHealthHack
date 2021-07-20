import React from 'react';
import { InfoSection, Testimonials} from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Stories() {
  return (
    <>
      <Testimonials />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Stories;
// {"mode":"full","isActive":false}
