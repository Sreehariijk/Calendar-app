import React from 'react';
import '../css/subsection.css';
import 'font-awesome/css/font-awesome.min.css';


const SubSection_1 = ({ title, points }) => {
    const renderSubItems = () => {
        return points.map((item, i) => {
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
        case "Why" :
        return<i class="fa fa-binoculars" aria-hidden="true"></i>;
        break;
        case "Which" :
        return<i class="fa fa-hourglass-half" aria-hidden="true"></i>;
        break;
        case "Where" :
        return<i class="fa fa-magic" aria-hidden="true"></i>;
        break;
      }
    
  }; 

return (
    <div className='subsection'>
      
     <h2>{renderImage(title)}  {title}</h2>
     <ul>
     {points ? renderSubItems() : ''}
     </ul>   
    </div>
  );
}

export default SubSection_1;