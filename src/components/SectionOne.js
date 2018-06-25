import React from 'react';
import SubSection from './SubSection';

const SectionOne = ({  }) => {
  var subItemsOne = ["inspect", "Progress"];
   var subItemsTwo = ["Project", "Motivation","Rejection"];
    var subItemsThree = ["Control"];
    var subItemsFour = ["Discuss"];
    

  return (
    <div className='section_one'>
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
        
        <SubSection 
        title="What"
        subItems={subItemsFour}/>
        
       


    </div>
  );
}

SectionOne.propTypes = {
}

export default SectionOne;