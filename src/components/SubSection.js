import React from 'react';
import PropTypes from 'prop-types';
import Objective from './objective.png';
import Who from './who.png';
import When from './when.png';
import What from './what.png';
import Bullets from './bullets.png';
import 'font-awesome/css/font-awesome.min.css';
const SubSection = ({ title, subItems  }) => {
    const renderSubItems = () => {
        return subItems.map((item, i) => {
          return <li key={i}><i class="fa fa-share" aria-hidden="true"></i> {item}</li>
        });
    };



  const renderImage = (title) => {
   switch(title) {
    case "Objective" :
    return <i class="fa fa-bullseye" aria-hidden="true"></i>;
    break;
    case "Who" :
    return <i class="fa fa-user" aria-hidden="true"></i>;
    break;
    case "When" :
    return <i class="fa fa-clock-o" aria-hidden="true"></i>;
    break;
    case "What" :
    return<i class="fa fa-pencil-square-o" aria-hidden="true"></i>;
    break;
   }

  }; 

return (
    <div className='subsection'>
      
     <h2>{renderImage(title)}  {title}</h2>
     <ul>
     {subItems ? renderSubItems() : ''}
     </ul>   
    </div>
  );
}

SubSection.propTypes = {
    title: PropTypes.string,
    subItems: PropTypes.array
}

export default SubSection;