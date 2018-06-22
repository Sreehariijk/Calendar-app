import React from 'react';
import PropTypes from 'prop-types';
import SubSection from './SubSection';

const SectionOne = ({  }) => {
  var subItemsOne = ["inspect", "Progress"];
   var subItemsTwo = ["Project", "Motivation","Rejection"];
    var subItemsThree = ["Control"];

  return (
    <div id='section_one'>
    <h1>DAILY STANDUP</h1>

     <SubSection 
        title="Objective"
        subItems={subItemsOne}/>
        
        <SubSection 
        title="Who"
        subItems={subItemsTwo}/>

         <SubSection 
        title="When"
        subItems={subItemsThree}/>


    </div>
  );
}

SectionOne.propTypes = {
}

export default SectionOne;