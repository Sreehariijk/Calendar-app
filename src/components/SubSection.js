import React from 'react';
import PropTypes from 'prop-types';


const SubSection = ({ title, subItems  }) => {
    const renderSubItems = () => {
        return subItems.map((item, i) => {
          return <li key={i}>{item}</li>
        });
    };

  
  return (
    <div id='subsection'>
     <h2>{title}</h2>
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