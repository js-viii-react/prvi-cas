import React, { Component } from 'react';

class ChildCounter extends Component {
    state = { 
      
     } 
    render() { 
        return (
            <div>#{this.props.value}
            
            </div>
        );
    }
}
 
export default ChildCounter;