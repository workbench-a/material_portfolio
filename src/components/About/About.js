import React, { Fragment } from "react";
import AboutSectionList from './AboutSectionList/AboutSectionList';
import AboutHeader from './AboutHeader/AboutHeader';
import { aboutPageItems } from '../../constants/about';

export default function About() {
  return (
    <Fragment>
      <AboutHeader/>
      <AboutSectionList items={aboutPageItems}/>
    </Fragment>
  );
}