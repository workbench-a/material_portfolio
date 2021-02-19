import React, { Fragment } from "react";

import SectionList from '../SectionList/SectionList';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import { projectItems, projectHeaderItems } from '../../constants/projects';

const Projects = () => {
  return (
    <Fragment>
      <CategoryHeader header={projectHeaderItems}/>
      <SectionList items={projectItems}/>
    </Fragment>
  );
}

export default Projects;