import React, { Fragment } from 'react';
import AboutSection from './AboutSection';
import { useTheme } from "@material-ui/core/styles";


function SectionList(props){
  const theme = useTheme();
  const { items } = props;
  const handleColor = (index) => {
    switch(index%3){
      case 0:
        return theme.palette.common.black
      case 1:
        return theme.palette.common.white
      case 2:
        return theme.palette.primary.light
      default:
        return "white"
    }
  }
return (
  <Fragment>
    {items.map((item, index) => {
      return (
        <AboutSection key={index} item={item} bgColor={handleColor(index)}/>
      )
    })}
  </Fragment>
);
}

export default SectionList;