
import React, { Component } from 'react';
import SubSection_1 from '../components/SubSection_1';
import '../css/description.css';

class Description_1 extends Component {

    render()
    {       

      const renderItems = () => {
              return this.props.Titles.map((item, i) => {
              const k=this.props.Items[i];
              return <SubSection_1 title={item} points={k}/> }) 
            }

          return (
            <div className='description' style={this.props.style}>
                <h1>{this.props.caption}</h1>
                { renderItems()}
            </div>
                );
   }
}



export default Description_1;