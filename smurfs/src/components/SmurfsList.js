import React, { Component } from 'react';
import Smurf from './Smurf';

 class SmurfsList extends Component {
  render() {
    return (
      <div>
        <h1>SMURF VILLAGE</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} 
          key={smurf.id}
          
         />
        ))}
      </div>
    );
  }
}

 export default SmurfsList;