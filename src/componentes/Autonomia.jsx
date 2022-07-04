import React, { Component } from 'react';
import propType from 'prop-type';

class Autonomia extends Component{
  
    render() {
      return (
        <ul>
            <li>Autonomía: {this.props.km}</li>
        </ul>
      )
    }
  }

  Autonomia.propType = {
    km: propType.number.isRequired
  }
  
  export default Autonomia;