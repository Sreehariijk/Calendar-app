import React, { Component } from 'react';
import moment from 'moment';
import '../css/Calendar.css';
class Calendar extends Component {
    
  state={
          dateContext:moment().set('month', this.props.m),
          today:moment(),
          showMonthPopup:false,
          showYearPopup:false
        }
        
   constructor(props)
        {
         super(props)
         this.width=props.width;
         this.style=props.style; 
        }
      
        weekdays=moment.weekdays();
        weekdaysShort=moment.weekdaysShort();
        months=moment.months();
        
 

        year = () =>{
          return this.state.dateContext.format("Y");
        }

        month = () =>{
          return this.state.dateContext.format("MMMM");
        }
        
        daysInMonth = () =>{
          return this.state.dateContext.daysInMonth();
        }

        currentDate = () =>{
          return this.state.dateContext.get("date");
        }

         currentDay = () =>{
          return this.state.dateContext.format("D");
        }
         
        
        
        firstDayofMonth =() => {
          let dateContext =this.state.dateContext;
          let firstDay=moment(dateContext).startOf('month').format('d'); //day of wee as 0,1.....
          return firstDay;
      }
 

      onChangeMonth = (e,month) => {
          this.setState({
               showMonthPopup:!this.state.showMonthPopup
        });
      }
       
       
        
  
    MonthNav =()=> {
      return(
            
           <span className="label-month" onClick={(e)=>{this.onChangeMonth(e,this.month())}}>
           
            {/*{this.month()}*/}
           {
             this.state.showMonthPopup && 
            <this.selectList data={this.months}/>
            }
           </span>    
      );
    }

  setMonth = (month) => {
    let  monthNo=this.months.indexOf(month);
    // let dateContext = Object.assign({},this.state.dateContext);    
    let dateContext =moment(this.state.dateContext).set("month",monthNo);
    this.setState({
      dateContext:dateContext
    })
  }

  onSelectChange =(e,data) => {
  this.setMonth(data);
}


 selectList = (props) => {
   let popup =props.data.map((data) => {
     return (
       <div key={data} className="month_names">
         <a href="#" onClick={(e)=>{this.onSelectChange(e,data)}}> {data} </a>
       </div>  
     );
   })




   return (
     <div className="month-popup">
       {popup}
     </div>
   );
 }
        
  

  render() {   
            //render starts here
    const stylings={
      color:"red"
    }
    let weekdays = this.weekdaysShort.map((day,i)=>{
      if(i%7==0){
      return(
        <td key={i} className="week-day" style={stylings} >{day}</td>
      )
    }
    else{
       return(
        <td key={i} className="week-day" >{day}</td>
      )
    }
    });

    let blanks=[];     //calculates number of blank cells and creates that much number of td s and store in an array
    for(let i=0;i<this.firstDayofMonth();i++) {
      blanks.push(<td className="emptySlot" key={i}>{""}</td> );
    }

    

     let daysInMonth=[];  //calculates number of normals day cells and creates that much number of td s and store in an array
    for(let d=1;d<=this.daysInMonth();d++)
    {
      let className = (d===this.currentDay() ? "current-day" : "day");
      daysInMonth.push(
        <td key={d} className={className}> <span>{d}</span> </td>
      )
    }
    
    
    
    var totalSlots = [...blanks,...daysInMonth]; //merging of blanks and dates
    let rows=[]; 
    let cells=[];
    totalSlots.forEach((row,i)=> {    //creating an array of each rows containing dates and blanks
          if(i%7!==0) {
            cells.push(row);
          }
          else {
            let insertRow=cells.slice();
            rows.push(insertRow);
            cells=[];
            cells.push(row);
          }
          if(i==(totalSlots.length-1)) {
            let insertRow = cells.slice();
            rows.push(insertRow);
            
          }
         
    });
    
       
      
       let trElems=rows.map((d,i) => {  //printing each individual rows
         
         return (
           <tr key={i*100} id="array" style={stylings}>{d}</tr>
           
         );
       })


    return (
       
      <div className="caledar__Container">
        <table className="calendar">

          <thead>
           <tr className="calendar__Header">
             <this.MonthNav/>
           </tr> 
          </thead>

          <tbody >
            <tr>
            {weekdays}
            </tr>
            {trElems}
          </tbody>
      
            

         </table> 
      </div>
    );
  }
}

export default Calendar;