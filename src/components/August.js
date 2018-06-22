import React from 'react';
import PropTypes from 'prop-types';


const August = ({ title  }) => {
   
  return (
    <div id='august'>
     <h2>{title}</h2>
     <p>August Month</p>
    </div>
  );
}

August.propTypes = {
    title: PropTypes.string,
   
}

export default August;