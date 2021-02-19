import React, { Fragment } from 'react';
import SectionList from '../SectionList/SectionList';
import { homePageItems } from '../../constants/home';

function Home() {
  return (
      <Fragment>
        <SectionList items={homePageItems}/>
      </Fragment>
  );
}

export default Home;