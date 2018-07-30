import React from 'react';
import '../css/month.css';
import { Route, Switch, withRouter,Redirect,Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Calendar from '../components/Calendar';


const Month = ({Title,monthNumber,renderNext,renderPrevious}) => {
       return (
               <div className='month'>
                <i  onClick={renderPrevious} class="fa fa-arrow-left" aria-hidden="true" ></i><h2> {Title}</h2> <i class="fa fa-arrow-right" aria-hidden="true"  onClick={renderNext}></i>
                 {<Calendar m={monthNumber-1}/>}
               </div>
      );
   }


export default Month;