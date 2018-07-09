import React from 'react';
import '../css/month.css';
import { Route, Switch, withRouter,Redirect,Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Calendar from '../components/Calendar';

const Month = ({Title,renderNext,renderPrevious}) => {

   if(Title=="AUGUST 2018") {
       return (
               
               <div className='month'>
                <i class="fa fa-arrow-left" aria-hidden="true"></i><h2> {Title}</h2> <Link to = "/september"   ><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                 {<Calendar m={7}/>}
               </div>
              );
   }
   else if(Title=="SEPTEMBER 2018") {     
       return (
                <div className='month'>
                   <Link to = "/"  ><i class="fa fa-arrow-left" aria-hidden="true" ></i></Link>   <h2>{Title}</h2> <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  {<Calendar m={8}/>}
                </div>
              );
   }       
}

export default Month;